    // Start Events
    let myDate = new Date('Nov 23, 1999 16:0:0').getTime();
    setInterval(() => {
    let dateNow = new Date().getTime();
    let diffDate = dateNow - myDate;
    let years = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(
        (diffDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
    );
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
    document.querySelector('.years').innerHTML = years;
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
    // End Events
    /***************************/
    //Start Skills 
    let skillSec = document.querySelector('.siklls');
    let skillSpans = document.querySelectorAll('.progress span');
    /*************************/
    // Start States
    let statesSec = document.querySelector('.states');
    let statesH2 = document.querySelectorAll('.states .box h2');
    let start = false;
    
    window.onscroll = function () {/*General function */
    if (window.scrollY >= skillSec.offsetTop - 100) {
        skillSpans.forEach((span) => {
        span.style.width = span.dataset.width;
        });
        }
        //End Skills
        /******/
        if (window.scrollY >= statesSec.offsetTop-200) {
            if (!start)
            statesH2.forEach((el) => startCount(el));
            start = true;
        }
    };
    //function increse numbers
    function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
            clearInterval(count);
            }
        }, 2000 / goal);
        }
    // End States
