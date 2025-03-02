const secondHand = document.querySelector('.second-hand'); // select the second hand. Why am i using document.querySelector? I am using it to select the element with the class of second-hand
const minsHand = document.querySelector('.min-hand'); // select the minute hand
const hourHand = document.querySelector('.hour-hand'); // select the hour hand
const audio = new Audio('audio_sound.wav'); // create the audio object 




function setDate(){ // function to set the date
    const now = new Date(); // get the current date
    
    const seconds = now.getSeconds(
    ); // get the current seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // get the degrees of the seconds
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate the second hand
    audio.currentTime = 0; // reset the audio to the start
    audio.play();
    
    const mins = now.getMinutes(); // get the current minutes
    const minsDegrees = ((mins / 60) * 360) + 90; // get the degrees of the minutes
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // rotate the second hand

    const hour = now.getHours(); // get the current hour
    const hourDegrees = ((hour / 12) * 360) + 90; // get the degrees of the hour
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // rotate the second hand

    const isNightTime = hour >= 18 || hour < 6; // check if the current time is between 6pm and 6am
    if (isNightTime) {
        document.body.classList.add('night-mode'); // add night mode class
    } else {
        document.body.classList.remove('night-mode'); // remove night mode class
    }

}

//I want to add sound as it ticks, the seconds hand - i feel like i would need to pass down params to the function const secondHand and provide a audio file
//day and night mode, i would need to write a new function const dayNightMode. I want it to be automatic when time is 6pm to 6am, i need a param, if else boolean statement. 
//time zone support, i would need to write a new function const timeZone
//current date display, write a new function const currentDate

setInterval(setDate, 1000); // call the function every second