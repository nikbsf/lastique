function sendToBackground(payload) {
    window.postMessage({
        type: 'lastique',
        payload: payload
    }, '*');
}


function decodeHtmlEntities(input) {
    var textarea = document.createElement('textarea');
    textarea.innerHTML = input;
    return textarea.value;
}
