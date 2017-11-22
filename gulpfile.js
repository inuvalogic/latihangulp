var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var src = {
    sass: [
    	// 'resources/sass/**/*.scss' // untuk baca semua file & folder pake **/*
    	'resources/sass/style.scss'
    ]
};

var dist = {
    css: 'assets/css/'
};

gulp.task('css', function() {
    gulp.src(src.sass)
        .pipe(concat('app.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist.css));

    gulp.src(src.sass)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(dist.css));
});

gulp.task('default', ['css']);

gulp.task('watch', function() {
    gulp.watch(src.sass, ['css']);
});
