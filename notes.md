if I want to test the night time 

this should be my js file 

const secondHand = document.querySelector('.second-hand'); // select the second hand
const minsHand = document.querySelector('.min-hand'); // select the minute hand
const hourHand = document.querySelector('.hour-hand'); // select the hour hand
const audio = new Audio('audio_sound.wav'); // create the audio object once

function setDate(simulatedHour = null){ // function to set the date
    const now = new Date(); // get the current date
    
    const seconds = now.getSeconds(); // get the current seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // get the degrees of the seconds
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate the second hand
    audio.currentTime = 0; // reset the audio to the start
    
    const mins = now.getMinutes(); // get the current minutes
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90; // get the degrees of the minutes
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // rotate the minute hand

    const hour = simulatedHour !== null ? simulatedHour : now.getHours(); // use simulated hour if provided
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90; // get the degrees of the hour
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // rotate the hour hand

    const isNightTime = hour >= 18 || hour < 6; // check if the current time is between 6pm and 6am
    console.log(`Hour: ${hour}, isNightTime: ${isNightTime}`); // log the current hour and isNightTime status
    if (isNightTime) {
        document.body.classList.add('night-mode'); // add night mode class
    } else {
        document.body.classList.remove('night-mode'); // remove night mode class
    }
}

// Test during different times
setDate(14); // Test during daytime (e.g., 2 PM)
setDate(20); // Test during nighttime (e.g., 8 PM)
setDate(5);  // Test during early morning (e.g., 5 AM)

// Uncomment the following line to run the function every second with the actual time
// setInterval(setDate, 1000); // call the function every second