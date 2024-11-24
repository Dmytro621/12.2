let parent = document.getElementById('box')
let child1 = document.getElementById('child1')
let child2 = document.getElementById('child2')
let child3 = document.getElementById('child3')

parent.addEventListener('click',(event) => {
    alert(`Клик по элементу:${event.target.textContent}`)
})
