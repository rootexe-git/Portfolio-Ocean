const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('sass', () => {
    return gulp.src('./sass/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', () => {
    return gulp.src('./*.html')
        .pipe(useref())
        .pipe(gulpIf('./js/*.js', uglify()))
        .pipe(gulp.dest('./dist'))
        .pipe(gulpIf('./css/*.css', cssnano()))
        .pipe(gulp.dest('./dist'))
});

gulp.task('images', () => {
    return gulp.src('./images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('clean:dist', () => {
    return del.sync('dist');
})

gulp.task('watch', ['browserSync', 'sass', 'useref'], () => {
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});

gulp.task('build', (callback) => {
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        callback
    )
})

gulp.task('default', (callback) => {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
})