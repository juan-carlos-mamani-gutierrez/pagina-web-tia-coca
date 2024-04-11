
const {src, dest , watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');


function css(done){
   
    src('src/scss/**/*.scss') //identificar el archivo SASS
    .pipe(plumber())
    .pipe(sass())//Compilarlo
    .pipe(dest("build/css"));// ALmacenarla en el disco duro

    done(); // colback para saber que acabo la funcion

}

function dev(done){
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;