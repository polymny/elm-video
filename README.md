*Yet another video player in Elm*

This video player is optimized for HLS encoded video (if you want to encode
your videos in HLS format, [check out our HLS video
encoder](https://github.com/polymny/hls)). However, is also works correctly for
any video format that is supported by your browser.

## Usage without elm

Simply add the
[polymny-video-full.min.js](https://github.com/polymny/elm-video/tree/master/dist/polymny-video-elm.min.js)
to your page and use the `PolymnyVideo.fullpage` or `PolymnyVideo.embed`
functions.

### Fullpage version

This version is made so that the video occupies all of the webpage, so it can
be used within iframes for example.

Here is an example page ([see demo](https://polymny.github.io/elm-video/full-page.html)):

```html
<!doctype HTML>
<html>
    <head>
        <title>twitch.tforgione.fr</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="container"></div>
        <script src="/dist/polymny-video-full.min.js"></script>
        <script>
            PolymnyVideo.fullpage({
                node: document.getElementById("container"),
                url: "video/manifest.m3u8",
                autoplay: true,
                startTime: PolymnyVideo.getArgumentFromUrl("t"),
                enableMiniatures: true,
            });
        </script>
    </body>
</html>
```

### Embed version

This version is made so that you can include your video inside your page.
Here is an example of such a webpage ([see
demo](https://polymny.github.io/elm-video/embed.html)):

```html
<!doctype HTML>
<html>
    <head>
        <title>twitch.tforgione.fr</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            h1 {
                width: 100%;
                text-align: center;
            }

            #container {
                margin-left: 20%;
                width: 60%;
            }
        </style>
    </head>
    <body>
        <h1>An example of a centered video</h1>
        <div id="container"><div id="node"></div></div>
        <script src="/dist/polymny-video-full.min.js"></script>
        <script>
            PolymnyVideo.embed({
                node: document.getElementById("container"),
                url: "video/manifest.m3u8",
                autoplay: true,
                startTime: PolymnyVideo.getArgumentFromUrl("t"),
                enableMiniatures: true,
            });
        </script>
    </body>
</html>
```

### Options

|Attribute name|Type|Decription|
|:--|:--|:--|
|node|HTMLElement|The html element to which the app should bind|
|url|string|The url of the video|
|autoplay|bool|Whether the player should try to start when loaded|
|startTime|float \| string| A string that represents time or a float in seconds|
|enableMiniatures|bool|Whether the player should display miniatures on mouse hover (the miniatures are generated with [our HLS encoder](https://github.com/polymny/hls))|

## Usage with elm

Since this packages relies heavily on ports, it can't be published to
https://package.elm-lang.org/ so using this will be a little more complex than
simply `elm install`ing it. We recommend either cloning this repo at the root
of your elm package, or adding it as a git submodule.

Then, you will need to add our dependencies as your dependencies (you can check
them [here](https://github.com/polymny/elm-video/blob/master/elm.json)), and
add the `src` directory to the `source-directories` of your application.

You also need to serve
[polymny-video-elm.min.js](https://github.com/polymny/elm-video/tree/master/dist/polymny-video-elm.min.js)
which contains the `PolymnyVideo.setup` functions which setups the ports on
your app.
