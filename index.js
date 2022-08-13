const getRandomItem = (array) => {    
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const chooseFaculty = () => {
    const faculties = document.querySelectorAll('.faculty')

    faculties.forEach((faculty, index, parent) => {
        faculty.classList.remove('chosen-faculty') 
    })

    const chosenFaculty = getRandomItem(faculties);

    chosenFaculty.classList.add('chosen-faculty');
}

const myButton = document.querySelector('.sorting-btn');

myButton.addEventListener('click', chooseFaculty);



/*function multiply(a, b) { 
   return a * b
}
console.log(multiply(1,2))
console.log(multiply(7,8))

function square(a) {
    return a * a
}
console.log(square(5))

function sRound(p, r) {
   return multiply(p, square(r))
}
console.log(sRound(3.14, 2))

function show(func) {
    func('hello')
}
show(console.log)

function slozhenie(func, a, b) {
    return func(a, b)
}

let result = slozhenie(sum, 1, 2)
console.log(result)*/

/*const myFunction = function() {

}
myFunction()


const arrow = () => {

}
arrow()*/


