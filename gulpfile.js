const { src, dest, watch } = require("gulp"); //extrae la funcionalidad de gulp almacenado en node_modules
//dentro de las llaves menciono las funciones de gulp que voy a usar
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css(done) {
    
    src('src/scss/**/*.scss') //Identificar el archivo de SASS
    .pipe( plumber() )    
    .pipe( sass() ) //Compilarlo
        .pipe( dest("build/css") ) //Almacenar en el disco duro

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;