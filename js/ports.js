Object.defineProperty(TimeRanges.prototype, "polymnyVideoAsArray", {
    get: function() {
        var ret = [];
        for (var i = 0; i < this.length; i++) {
            ret.push({start: this.start(i), end: this.end(i)});
        }
        return ret;
    }
});

Object.defineProperty(HTMLElement.prototype, "polymnyVideoDocument", {
    get: function() {
        return document;
    }
});

function embed(options) {
    if (!(options.node instanceof HTMLElement)) {
        throw new Error("options.node must be an HTMLElement");
    }

    if (typeof options.url !== "string" && ! (options.url instanceof String)) {
        throw new Error("options.url must be a string");
    }

    options.flags = options;
    options.width = window.innerWidth;
    options.height = window.innerHeight;

    const app = Elm.Examples.Embed.init(options);
    setupApp(app);

}

function setupApp(app) {
    let hls;

    app.ports.polymnyVideoInit.subscribe(function(arg) {
        const video = document.getElementById(arg[0]);
        if (Hls.isSupported()) {
            hls = new Hls();
            window.hls = hls;
            hls.loadSource(arg[1]);

            hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                const availableQualities = hls.levels.map((l) => l.height);
                availableQualities.unshift(0);
                app.ports.polymnyVideoNowHasQualities.send(availableQualities);
            });

            hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
                app.ports.polymnyVideoNowHasQuality.send({
                    auto: hls.autoLevelEnabled,
                    height: hls.levels[data.level].height
                });
            })

            hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function(event, data) {
                app.ports.polymnyVideoNowHasSubtitles.send(data.subtitleTracks);
            });

            hls.on(Hls.Events.SUBTITLE_TRACK_SWITCH, function(event, data) {
                app.ports.polymnyVideoNowHasSubtitleTrack.send(data.id === -1 ? null : hls.subtitleTracks[data.id]);
            });

            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = arg[1];
        }
    });

    app.ports.polymnyVideoPlayPause.subscribe(function(arg) {
        const video = document.getElementById(arg);
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    app.ports.polymnyVideoSeek.subscribe(function(arg) {
        const video = document.getElementById(arg[0]);
        video.currentTime = arg[1];
    });

    app.ports.polymnyVideoRequestFullscreen.subscribe(function(arg) {
        document.getElementById(arg + '-full').requestFullscreen();
    });

    app.ports.polymnyVideoExitFullscreen.subscribe(function(arg) {
        document.exitFullscreen();
    });

    app.ports.polymnyVideoSetPlaybackRate.subscribe(function(arg) {
        const video = document.getElementById(arg[0]);
        video.playbackRate = arg[1];
    });

    app.ports.polymnyVideoSetQuality.subscribe(function(arg) {
        var old = hls.currentLevel;
        if (arg[1].auto) {
            hls.currentLevel = -1;
        } else {
            hls.levels.forEach((level, levelIndex) => {
                if (level.height === arg[1].height) {
                    hls.currentLevel = levelIndex;
                }
            });
        }
        if (old === hls.currentLevel) {
            app.ports.polymnyVideoNowHasQuality.send({
                auto: hls.autoLevelEnabled,
                height: hls.currentLevel === -1 ? 0 : hls.levels[hls.currentLevel].height
            });
        }
    });

    app.ports.polymnyVideoSetVolume.subscribe(function(arg) {
        const video = document.getElementById(arg[0]);
        video.volume = arg[1].volume;
        video.muted = arg[1].muted;
    });

    app.ports.polymnyVideoSetSubtitleTrack.subscribe(function(arg) {
        hls.subtitleDisplay = arg[1] !== -1;
        hls.subtitleTrack = arg[1];
    });

}
