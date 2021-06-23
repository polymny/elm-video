# elm-video

*Yet another video player in Elm*

For the moment, this package only supports HLS videos. See
[polymny/hls](https://github.com/polymny/hls) if you want to encode your videos
in the HLS format.

## Usage without elm

Simply add the
[polymny-video-full.js](https://github.com/polymny/elm-video/tree/master/dist/polymny-video-elm.js)
to your page and use the `PolymnyVideo.fullpage` or `PolymnyVideo.embed`
functions.

### Fullpage version

This version is made so that the video occupies all of the webpage, so it can
be used within iframes for example.

Here is an example page:

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
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                autoplay: true
            });
        </script>
    </body>
</html>
```

### Embed version

This version is made so that you can include your video inside your page.
Here is an example of such a webpage:

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
                node: document.getElementById("node"),
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                autoplay: true
            });
        </script>
    </body>
</html>
```

## Usage with elm

Since this packages relies heavily on ports, it can't be published to
https://package.elm-lang.org/ so using this will be a little more complex than
simply `elm install`ing it. We recommend either cloning this repo at the root
of your elm package, or adding it as a git submodule.

Then, you will need to add our dependencies as your dependencies (you can check
them [here](https://github.com/polymny/elm-video/blob/master/elm.json)), and
add the `src` directory to the `source-directories` of your application.

You also need to serve
[polymny-video-elm.js](https://github.com/polymny/elm-video/tree/master/dist/polymny-video-elm.js)
which contains the `PolymnyVideo.setup` functions which setups the ports on
your app.
