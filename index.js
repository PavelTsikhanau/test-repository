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
            button: "Congratulations!",
          });
    }   
}



    // const input = document.querySelector('#label');

    // input.addEventListener('keydown', (event) => {
    //     event.preventDefault(); 
        
    //     const key = event.key.toUpperCase()
    //     event.target.value = event.target.value + key
        
    //     console.log(key)
    // });



