require('ejs-compiled-loader!./src/index.ejs');

console.log('EXECUTED!!!', window.location.href);
const title = "mytitle";

function text(name) {
    return 'SOME TRANSLATED TEXT';
}

