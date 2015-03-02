This repository contains a gulpfile to be used with [Poole](https://github.com/poole/poole), "The Jekyll Butler". Poole provides a basic template of a Jekyll install with all necessary files.

The gulpfile has several tasks:

`gulp stylus` will compile the stylus.styl file in the public/css directory using three plugins:

- [jeet](https://github.com/mojotech/jeet): provides a layout/grid system for stylus
- [rupture](https://github.com/jenius/rupture): provides easy media queries and breakpoints
- [autoprefixer](https://github.com/jenius/autoprefixer-stylus): autoprefixes stylus

`gulp build` runs jekyll build.

`gulp serve` runs liveserver from the _site directory on port 4000. Liveserver provides automatic browser-reload capability.

`gulp watch` starts two watch processes. One watch process watches all stylus files in public/css/ and runs the build task. The other watches all .html and .md files, and runs the build task.

`gulp` runs stylus, build, serve, and watch.




