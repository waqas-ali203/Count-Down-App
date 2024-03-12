const endDate = "30 March 2024 2:36:40 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0 ) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); // DAYS
  inputs[1].value = Math.floor(diff / 3600 ) % 24; /// Hours
  inputs[2].value = Math.floor(diff / 60 ) % 60; /// Minutes
  inputs[3].value = Math.floor(diff) % 60; /// Seconds
  // console.log(end);
  // console.log(now);
}

clock();
setInterval(
    ()=>{
        clock();
    },
    1000
)
// 1 day = 24 hours
// 1 hour = 60 miniutes
// 60 minutes = 3600 seconds
