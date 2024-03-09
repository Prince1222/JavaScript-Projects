const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});



// analog

setInterval(() => {
    const datedata = new Date;
    const second = datedata.getSeconds() * 6;
    const minute = datedata.getMinutes() * 6;
    const hour = datedata.getHours() *30;
    const second_hand = document.querySelector(".second");
    const minute_hand = document.querySelector(".minute");
    const hour_hand = document.querySelector(".hour");
    second_hand.style.transform = "rotate(" + second + "deg)";
    minute_hand.style.transform = "rotate(" + minute + "deg)";
    hour_hand.style.transform = "rotate(" + hour + "deg)";

}, 1000);

//digital


const hours = document.getElementById("hourss");
const minutes = document.getElementById("minutess");
const seconds = document.getElementById("secondss");
const ampm = document.getElementById("am-pm");

function updateTime() {
  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();
  
  let am_pm = "AM";
  if(hrs > 12){
    hrs -= 12;
    am_pm = "PM";
  }
  
  hrs = (hrs<10) ? "0" + hrs : hrs;
  mins = (mins<10) ? "0" + mins : mins;
  sec = (sec<10) ? "0" + sec : sec;
  
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = sec;
  ampm.innerText = am_pm;
  
  setTimeout(() => {
    updateTime();
  }, 1000)
}


updateTime();


