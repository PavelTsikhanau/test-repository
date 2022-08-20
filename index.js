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
    
    return chosenFaculty; 
}

const form = document.querySelector('#name-input');
form.onsubmit = (event) => {
    event.preventDefault(); 
    
    // const formData = new FormData(event.target);
    // const name = formData.get('yourName');     
    const name = event.target.yourName.value;
    
    if (name.length === 0) {
        swal({
            title: "Peeves!",
            text: 'STOP BOTHERING SORTING HAT!!!',
            icon: "error",
            button: "ROFL",
        });
    } else {
        const facultyName = chooseFaculty().innerText;
        swal({
            title:`${name} goes to ${facultyName}!!!`,
            icon: "success",
            button: "Y E A H !",
        });
        document.querySelector('audio').play()
    }   
    event.target.yourName.value="";
}

const correctAnswer = document.querySelector('.quiz-btn-2');
correctAnswer.addEventListener('click', (event) => {
         document.querySelector('.popup').classList.add('popup-close');
 });

const uncorrectAnswers = document.querySelectorAll('.uncorrect-answer');
uncorrectAnswers.forEach((answer) => {
    answer.addEventListener('click', (event) => {
        swal({
            title: 'Ho-ho-ho, you are muggle!!!',
            icon: "warning",
            button: "Please, give me one more chanse!",
        });
    })
})






