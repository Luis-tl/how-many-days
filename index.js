const importantDay = new Date("June 19, 2023 11:50:00");
const daysSecondYear =
    (new Date("June 19, 2025 11:50:00") - new Date("June 19, 2023 11:50:00")) /
    (1000 * 60 * 60 * 24);

//calculate the number of days
function timeCounter(currentDate, importantDay) {
    let totalTime = currentDate - importantDay;
    let remainingMilliseconds = totalTime % (1000 * 60 * 60 * 24);
    let totalYears = currentDate.getFullYear() - importantDay.getFullYear();
    let totalDays = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    let totalHours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
    let totalMinutes = Math.floor(
        (remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    let totalSeconds = Math.floor((remainingMilliseconds / 1000) % 60); //<---- Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);
    return {
        years: totalYears,
        days: totalDays,
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds,
    };
}

function timeWriter() {
    //Days to calculate
    const currentDate = new Date();
    //const importantDay = new Date("June 19, 2023 11:50:00");

    // call the funtion to calculate the time and pass the two days
    const result = timeCounter(currentDate, importantDay);

    // Insert the days and hours into the html
    let containerDays = document.getElementById("dayNumber");
    containerDays.textContent = result.days;

    let containerHours = document.getElementById("hourNumber");
    containerHours.textContent = result.hours;

    let containerMinutes = document.getElementById("hourMinutes");
    containerMinutes.textContent = result.minutes;

    let containerSeconds = document.getElementById("hourSeconds");
    containerSeconds.textContent = result.seconds;

    addProgressBar(result.days);
}

function addProgressBar(days) {
    let placeProgressBar = document.getElementById("time-progress");
    //check if the progress bar already exists
    let progressBar = placeProgressBar.querySelector("progress");
    if (!progressBar) {
        progressBar = document.createElement("progress");
        progressBar.setAttribute("value", days);
        progressBar.setAttribute("max", daysSecondYear);
        placeProgressBar.appendChild(progressBar);
    }

    //update the progress bar
    progressBar.setAttribute("max", daysSecondYear);
    progressBar.setAttribute("value", days);
}

//Update the page every second
setInterval(timeWriter, 1000);

timeWriter();