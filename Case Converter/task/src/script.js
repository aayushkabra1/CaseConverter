document.getElementById("upper-case").addEventListener("click",function () {
    let element = document.getElementById("textArea");
    let text = element.value;
    text.toUpperCase();
    element.value = text.toUpperCase();
    })

document.getElementById("lower-case").addEventListener("click",function () {
        let element = document.getElementById("textArea");
        let text = element.value;
        text.toUpperCase();
        element.value = text.toLowerCase();
    }
)
document.getElementById("sentence-case").addEventListener("click", function sentenceCase() {
    let sentenceCase = document.getElementById("textArea").value;
    let sentence = sentenceCase.split(". ");
    document.getElementById("textArea").value = sentence.map((word1) => {
        return word1[0].toUpperCase() + word1.slice(1).toLowerCase();
    }).join(". ");
})
document.getElementById("proper-case").addEventListener("click", function (){
    let element = document.getElementById("textArea");
    let text = element.value;
    element.value = text.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
})

document.getElementById("save-text-file").addEventListener("click", function (){
    let element = document.getElementById("textArea");
    let text = element.value;
    download("text.txt", text);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
