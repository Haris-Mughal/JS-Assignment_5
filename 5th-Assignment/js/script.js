function showOutput(x) {
	document.getElementById("output").innerHTML = x;
}


let rightNowDate = new Date();
let footerYear = rightNowDate.getFullYear();
document.getElementById("liveDate").innerHTML = rightNowDate;
document.getElementById("f-year").innerText = footerYear;

// function showOutput(output) {
//   document.getElementById("output").innerHTML = output;
// }

// Get  Name of Today
function nameOfToday() {
  let rightNow = new Date();
  let theDay = rightNow.getDay();
  let nameOfToday = dayNames[theDay];
//   document.getElementById("output").innerHTML = "";
    showOutput(nameOfToday);
}

// Calculate Days Passed since I Born
function daysPassedIBorn() {
  // let dob = document.getElementById("input-text").value;
  // console.log(dob);

  // if (!dob) {
  //   toastifyError("Please Enter Your Date of Birth");
  //   return;

  let today = new Date();
  let bornDate = new Date("2004-03-24T21:55");
  console.log(today);
  console.log(bornDate);

  let todayTime = today.getTime();
  let bornDateTime = bornDate.getTime();

  //   return

  let msDiff = todayTime - bornDateTime;

  console.log("msDiff", msDiff);

  let daysDiff = msDiff / (1000 * 60 * 60 * 24); //this line may generate floating
  console.log(daysDiff);

  //   we remove floating point using Math.floor

  let html = Math.floor(daysDiff) + " days have been passed since you born";

  showOutput(html);
  tellTime();
}
