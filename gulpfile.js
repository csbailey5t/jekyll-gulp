var gulp = require('gulp'),
      gutil = require('gulp-util'),
      stylus = require('gulp-stylus'),
      jeet = require('jeet'),
      autoprefixer = require('autoprefixer-stylus'),
      plumber = require('gulp-plumber');
      rupture = require('rupture');
      shell = require('gulp-shell');
      server = require('live-server');

var SERVER_PORT = 4000;
var SERVER_ROOT = '_site/'


var onError = function (err) {
    gutil.beep();
    console.log(err);
};

// Compile Stylus with Jeet, Rupture, Autoprefixer
gulp.task('stylus', function() {
    return gulp.src('public/css/style.styl')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(stylus({
        use: [jeet(), rupture(), autoprefixer()]
    }))
    .pipe(gulp.dest('public/css/'));
    //Could add minification and directly push css into _site/css
});

// Run Jekyll build
gulp.task('build', shell.task('jekyll build'));

// Run static file server, auto-reloads in browser
gulp.task('serve', function() {
    server.start(SERVER_PORT, SERVER_ROOT);
})

// Watch for changes
gulp.task('watch', function() {

    // Watch stylus files
    gulp.watch('public/css/*.styl', ['stylus', 'build']);

    // Watch other files for jekyll compilation
    gulp.watch(['*.html', '*/*.html', '*/*.md', '!_site/**'], ['build']);

});

//could i just use live-server isntead of express?

gulp.task('default', ['stylus', 'build', 'serve', 'watch']);
