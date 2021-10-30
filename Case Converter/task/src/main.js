document.getElementById('upper-case').addEventListener('click', function (){
    let sentence1 = document.querySelector(
        'textarea').value = document.querySelector('textarea').value.toUpperCase();
    }
);
document.getElementById('lower-case').addEventListener('click', function (){
    let sentence2 = document.querySelector(
        'textarea').value = document.querySelector('textarea').value.toLowerCase();
    }
);

document.getElementById('proper-case').addEventListener('click', properCase );

function properCase() {
   let str = document.querySelector(
       'textarea').value = document.querySelector(
           'textarea').value.toLowerCase().split(' ').map(function (word) {
       return (word.charAt(0).toUpperCase() + word.slice(1));
   }).join(' ');
    }

document.getElementById('sentence-case').addEventListener('click', sentenceCase);

function sentenceCase() {
    let str2 = document.querySelector(
        'textarea').value = document.querySelector(
            'textarea').value.toLowerCase().split('. ').map(function (WORD){
        return WORD.charAt(0).toUpperCase() + WORD.slice(1);
    }).join('. ');
}

document.getElementById('save-text-file').addEventListener('click', function (){
    let textContent = document.querySelector('textarea').value;
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    download('text.txt', textContent);
});

