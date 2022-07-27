const textArea = document.getElementById('main-textarea');

function toProperCase(text) {
    let words = text.split(' ');
    for (word in words) {
        words[word] = words[word].charAt(0).toUpperCase()+ words[word].slice(1).toLowerCase();
    }
    return words.join(' ');
}

function toSentenceCase (text) {
    let sentences = text.split('. ');
    for (sentence in sentences) {
        sentences[sentence] = sentences[sentence].charAt(0).toUpperCase()+ sentences[sentence].slice(1).toLowerCase();
    }
    return (sentences.join('. '));
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('upper-case').addEventListener('click', function(){
    textArea.value = textArea.value.toUpperCase();
});

document.getElementById('lower-case').addEventListener('click', function(){
    textArea.value = textArea.value.toLowerCase();
});

document.getElementById('proper-case').addEventListener('click', function(){
    textArea.value = toProperCase(textArea.value);
});

document.getElementById('sentence-case').addEventListener('click', function(){
    textArea.value = toSentenceCase(textArea.value);
});

document.getElementById('save-text-file').addEventListener('click', function () {
    download("text.txt", textArea.value);
});