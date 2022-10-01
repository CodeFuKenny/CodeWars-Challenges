/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

/*  Test Cases

    strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
    strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
    strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
    strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
    strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');

*/

function humanReadable (seconds) {
    let hours =  0;
    let minutes = 0
    // If the seconds is greater than 60, then calculate the total number of minutes
    // Take the seconds 
    if(seconds>59){

        minutes = Math.floor(seconds/60) 
        seconds = seconds % 60;
    }
    if (minutes > 59) {
        hours = Math.floor(minutes/60);
        minutes = minutes % 60;
    }
    
    hours = hours < 10  ? `0${hours}` : hours
    minutes = minutes < 10  ? `0${minutes}` : minutes
    seconds = seconds < 10  ? `0${seconds}` : seconds
    return `${hours}:${minutes}:${seconds}`
}


function humanReadable2 (seconds) {
    let pad = x => {
        return (x < 10) ? `0${x}` : x;
    }

    return `${pad(parseInt(seconds/3600))}:${pad(parseInt(seconds/60%60))}:${pad(parseInt(seconds%60))}`
}