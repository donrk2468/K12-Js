const div1 = document.querySelectorAll('div')[0]
const div2 = document.querySelectorAll('div')[1]
const p1 = document.querySelectorAll('p')[0]
const p2 = document.querySelectorAll('p')[1]
let text

text = div1.innerText
function dragStart() {
    console.log('DragStart');
}
function drop1() {
    p1.innerText = ''
    p2.innerText = text
    console.log('Drop1');
}   

function drop2() {
    p2.innerText = ''
    p1.innerText = text
    console.log('Drop2');
}
function dragover(event) {
    event.preventDefault()
}
// 0:57:55