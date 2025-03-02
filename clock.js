const secondHand = document.querySelector('.second-hand'); // select the second hand
const minsHand = document.querySelector('.min-hand'); // select the minute hand
const hourHand = document.querySelector('.hour-hand'); // select the hour hand

function setDate(){ // function to set the date
    const now = new Date(); // get the current date
    
    const seconds = now.getSeconds(); // get the current seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // get the degrees of the seconds
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate the second hand
    
    const mins = now.getMinutes(); // get the current minutes
    const minsDegrees = ((mins / 60) * 360) + 90; // get the degrees of the minutes
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // rotate the second hand

    const hour = now.getHours(); // get the current hour
    const hourDegrees = ((hour / 12) * 360) + 90; // get the degrees of the hour
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // rotate the second hand
}

setInterval(setDate, 1000); // call the function every second