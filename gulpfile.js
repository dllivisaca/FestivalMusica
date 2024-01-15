const { src, dest, watch } = require("gulp"); //extrae la funcionalidad de gulp almacenado en node_modules
//dentro de las llaves menciono las funciones de gulp que voy a usar
const sass = require("gulp-sass")(require("sass"));

function css(done) {
    
    src('src/scss/app.scss') //Identificar el archivo de SASS
        .pipe( sass() ) //Compilarlo
        .pipe( dest("build/css") ) //Almacenar en el disco duro

    done();
}

function dev(done) {
    watch('src/scss/app.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;