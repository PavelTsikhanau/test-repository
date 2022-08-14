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
        alert('Leave the hat!')
    } else {
        const facultyName = chooseFaculty().innerText;
        alert(`${name}, Goes To ${facultyName}!!!`); 
    }   
}

    // const input = document.querySelector('#label');

    // input.addEventListener('keydown', (event) => {
    //     event.preventDefault(); 
        
    //     const key = event.key.toUpperCase()
    //     event.target.value = event.target.value + key
        
    //     console.log(key)
    // });



