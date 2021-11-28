function UpperCase() {
    let texts = document.getElementById("text").value
    document.getElementById("text").value = texts.toUpperCase()
}

function LowerCase() {
    let texts = document.getElementById("text").value
    document.getElementById("text").value = texts.toLowerCase()
}
function ProperCase() {
    let texts = document.getElementById("text").value
    let sl = texts.toLowerCase().split(" ")
    let newString = ""
    for (let i = 0; i < sl.length; i++) {
        newString += sl[i][0].toUpperCase() + sl[i].slice(1, sl[i].length)
        if (i !== sl.length - 1) {
            newString += " "
        }
    }
    document.getElementById("text").value = newString

}
function SentenceCase() {
    let texts = document.getElementById("text").value
    let sl = texts.toLowerCase().split(". ")
    let newString = ""
    for (let i = 0; i < sl.length; i++) {
        newString += sl[i][0].toUpperCase() + sl[i].slice(1, sl[i].length)
        if (i !== sl.length - 1) {
            newString += ". "
        }
    }
    document.getElementById("text").value = newString

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

document.getElementById("upper-case").addEventListener("click", UpperCase)
document.getElementById("lower-case").addEventListener("click", LowerCase)
document.getElementById("proper-case").addEventListener("click", ProperCase)
document.getElementById("sentence-case").addEventListener("click", SentenceCase)
document.getElementById("save-text-file").addEventListener("click", function s() {
    let texts = document.getElementById("text").value
    download("text.txt", texts)
})