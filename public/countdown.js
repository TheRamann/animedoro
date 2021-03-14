/* eslint-disable eqeqeq */
var runningornot = false;
var isPaused;

// eslint-disable-next-line no-unused-vars
function startcount() {
    if(runningornot === false){
        isPaused = false;
        runningornot = true
        const startingMinutes = 40;
        let time = startingMinutes * 60;
        let minutes;
        let seconds
        const countdownEl = document.getElementById('countdown');
        document.getElementById("startButton").addEventListener("click", function (){
            if(isPaused == true){
                isPaused = false
            }
        })
        document.getElementById("pauseButton").addEventListener('click', function () {
            if(isPaused == false){
                isPaused = true
            }
        })
        var AfterStarting = setInterval(()=>{
            if(isPaused == false){
                minutes = Math.floor(time / 60);
                seconds = time % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                countdownEl.innerHTML = `${minutes}: ${seconds}`
                time--;
                if(minutes == 0 && seconds == 0){
                    countdownEl.innerHTML = "Time To Watch Anime"
                    clearInterval(AfterStarting)
                    alert("Time To Watch Anime")
                }
            }
        }
        , 1000);
    }
}