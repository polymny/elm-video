Object.defineProperty(TimeRanges.prototype, "polymnyVideoAsArray", {
    get: function() {
        var ret = [];
        for (var i = 0; i < this.length; i++) {
            ret.push({start: this.start(i), end: this.end(i)});
        }
        return ret;
    }
});

Object.defineProperty(HTMLElement.prototype, "polymnyVideoFullscreenElement", {
    get: function() {
        return document.fullscreenElement || document.webkitFullscreenElement || null;
    }
});

const PolymnyVideo = (function() {

    function parseQueryString(query) {
        var vars = query.split("&");
        var queryString = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof queryString[key] === "undefined") {
                queryString[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof queryString[key] === "string") {
                var arr = [queryString[key], decodeURIComponent(value)];
                queryString[key] = arr;
                // If third or later entry with this name
            } else {
                queryString[key].push(decodeURIComponent(value));
            }
        }
        return queryString;
    }

    function isDeviceMobile() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    const PolymnyVideo = {};
    PolymnyVideo.idCounter = 0;

    function main(construct) {
        return function(options) {
            if (!(options.node instanceof HTMLElement)) {
                throw new Error("options.node must be an HTMLElement");
            }

            if (typeof options.url !== "string" && ! (options.url instanceof String)) {
                throw new Error("options.url must be a string");
            }

            options.id = "polymnyVideoId" + PolymnyVideo.idCounter++;
            options.mobile = isDeviceMobile();

            const app = construct({
                node: options.node,
                flags: options
            });

            PolymnyVideo.setup(app);
            return app;
        };
    }

    function initHls(arg, app, video) {
        if (Hls.isSupported()) {
            hls = new Hls();
            window.hls = hls;
            hls.loadSource(arg.url);

            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                const availableQualities = hls.levels.map((l) => l.height);
                availableQualities.unshift(0);
                app.ports.polymnyVideoNowHasQualities.send(availableQualities);
            });

            hls.on(Hls.Events.LEVEL_SWITCHED, function(_, data) {
                app.ports.polymnyVideoNowHasQuality.send({
                    auto: hls.autoLevelEnabled,
                    height: hls.levels[data.level].height
                });
            })

            hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function(_, data) {
                app.ports.polymnyVideoNowHasSubtitles.send(data.subtitleTracks);
            });

            hls.on(Hls.Events.SUBTITLE_TRACK_SWITCH, function(_, data) {
                app.ports.polymnyVideoNowHasSubtitleTrack.send(data.id === -1 ? null : hls.subtitleTracks[data.id]);
            });

            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            initVideo(arg, video);
        }

    }

    function initVideo(arg, app, video) {
        video.addEventListener('canplay', () => {
            app.ports.polymnyVideoNowHasQualities.send([0]);
        });

        video.src = arg.url;
    }

    if (typeof Elm !== "undefined") {
        if (typeof Elm.Main !== "undefined") {
            if (typeof Elm.Main.Fullpage !== "undefined") {
                PolymnyVideo.fullpage = main(Elm.Main.Fullpage.init);
            }
            if (typeof Elm.Main.Embed !== "undefined") {
                PolymnyVideo.embed = main(Elm.Main.Embed.init);
            }
        }
    }

    PolymnyVideo.setup = function(app) {
        let hls;

        app.ports.polymnyVideoInit.subscribe(function(arg) {
            requestAnimationFrame(function() {
                const video = document.getElementById(arg.id);

                let resizeObserver = new ResizeObserver(_ => {
                    app.ports.polymnyVideoNowHasPlayerSize.send([video.offsetWidth, video.offsetHeight]);
                });
                resizeObserver.observe(video);

                if (arg.url.endsWith('.m3u8')) {
                    initHls(arg, app, video);
                } else {
                    initVideo(arg, app, video);
                }

                if (arg.startTime !== null) {
                    video.currentTime = arg.startTime;
                }

                if (arg.autoplay) {
                    let promise = video.play();
                    if (promise !== undefined) {
                        promise.catch(() => requestAnimationFrame(() => app.ports.polymnyVideoAutoplayRefused.send(null)));
                    }
                }
            });
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
            let element = document.getElementById(arg + '-full');
            if (typeof element.requestFullscreen === 'function') {
                element.requestFullscreen();
            } else if (typeof element.webkitRequestFullscreen === 'function') {
                element.webkitRequestFullscreen();
            }
        });

        app.ports.polymnyVideoExitFullscreen.subscribe(function() {
            if (typeof document.exitFullscreen === 'function') {
                document.exitFullscreen();
            } else if (typeof document.webkitExitFullscreen === 'function') {
                document.webkitExitFullscreen();
            }
        });

        app.ports.polymnyVideoSetPlaybackRate.subscribe(function(arg) {
            const video = document.getElementById(arg[0]);
            video.playbackRate = arg[1];
        });

        app.ports.polymnyVideoSetQuality.subscribe(function(arg) {
            const old = hls.currentLevel;
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

        app.ports.polymnyVideoNowHasScreenSize.send([window.innerWidth, window.innerHeight]);
    };

    PolymnyVideo.getArgumentFromUrl = function(key) {
        const args = parseQueryString(location.search.slice(1));
        return args[key] || null;
    };

    return PolymnyVideo;
})();
