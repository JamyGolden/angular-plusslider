(function() {
    var gulp = require('gulp');
    var uglify = require('gulp-uglify');

    gulp.task('js', function () {
        // gulp.src([
        //         'src/js/angular-plusslider.js'
        //     ])
        //     .pipe(gulp.dest('dist/'))

        gulp.src([
                'src/js/angular-plusslider.js'
            ])
            .pipe(uglify())
            .pipe(gulp.dest('dist'))
    });

    gulp.task('default', ['js']);
})();
