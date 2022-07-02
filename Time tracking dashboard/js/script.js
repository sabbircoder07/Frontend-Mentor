const roportTypeLink = document.querySelectorAll("button");
const workCurrentHours = document.querySelector(".work-current-hours");
const workPreviousHours = document.querySelector(".work-previous-hours");
const playCurrentHours = document.querySelector(".play-current-hours");
const playPreviousHours = document.querySelector(".play-previous-hours");
const studyCurrentHours = document.querySelector(".study-current-hours");
const studyPreviousHours = document.querySelector(".study-previous-hours");
const exerciseCurrentHours = document.querySelector(".exercise-current-hours");
const exercisePreviousHours = document.querySelector(
  ".exercise-previous-hours"
);
const socialCurrentHours = document.querySelector(".social-current-hours");
const socialPreviousHours = document.querySelector(".social-previous-hours");
const selfCareCurrentHours = document.querySelector(".self-care-current-hours");
const selfCarePreviousHours = document.querySelector(
  ".self-care-previous-hours"
);

console.log(roportTypeLink);

const displayData = (timeStamp, data) => {
  let timeStampName = "";
  if (timeStamp === "daily") {
    timeStampName = "Day";
  } else if (timeStamp === "weekly") {
    timeStampName = "Week";
  } else if (timeStamp === "monthly") {
    timeStampName = "Month";
  } else {
    timeStampName = "";
  }

  workCurrentHours.innerHTML =
    data[0].timeframes[timeStamp].current === 1
      ? `${data[0].timeframes[timeStamp].current}hrs`
      : `${data[0].timeframes[timeStamp].current}hrs`;

  workPreviousHours.innerHTML =
    data[0].timeframes[timeStamp].previous === 1
      ? `Last ${timeStampName} - ${data[0].timeframes[timeStamp].previous}hrs`
      : `Last ${timeStampName} - ${data[0].timeframes[timeStamp].previous}hrs`;

  playCurrentHours.innerHTML =
    data[1].timeframes[timeStamp].current === 1
      ? `${data[1].timeframes[timeStamp].current}hrs`
      : `${data[1].timeframes[timeStamp].current}hrs`;

  playPreviousHours.innerHTML =
    data[1].timeframes[timeStamp].previous === 1
      ? `Last ${timeStampName} - ${data[1].timeframes[timeStamp].previous}hrs`
      : `Last ${timeStampName} - ${data[1].timeframes[timeStamp].previous}hrs`;

  studyCurrentHours.innerHTML =
    data[2].timeframes[timeStamp].current === 1
      ? `${data[2].timeframes[timeStamp].current}hrs`
      : `${data[2].timeframes[timeStamp].current}hrs`;

  studyPreviousHours.innerHTML =
    data[2].timeframes[timeStamp].previous === 1
      ? `Last ${timeStampName} - ${data[2].timeframes[timeStamp].previous}hrs`
      : `Last ${timeStampName} - ${data[2].timeframes[timeStamp].previous}hrs`;

  exerciseCurrentHours.innerHTML =
    data[3].timeframes[timeStamp].current === 1
      ? `${data[3].timeframes[timeStamp].current}hrs`
      : `${data[3].timeframes[timeStamp].current}hrs`;

  exercisePreviousHours.innerHTML =
    data[3].timeframes[timeStamp].previous === 1
      ? `Last ${timeStampName} - ${data[3].timeframes[timeStamp].previous}hrs`
      : `Last ${timeStampName} - ${data[3].timeframes[timeStamp].previous}hrs`;

  socialCurrentHours.innerHTML =
    data[4].timeframes[timeStamp].current === 1
      ? `${data[4].timeframes[timeStamp].current}hrs`
      : `${data[4].timeframes[timeStamp].current}hrs`;

  socialPreviousHours.innerHTML =
    data[4].timeframes[timeStamp].previous === 1
      ? `Last ${timeStampName} - ${data[4].timeframes[timeStamp].previous}hrs`
      : `Last ${timeStampName} - ${data[4].timeframes[timeStamp].previous}hrs`;

  selfCareCurrentHours.innerHTML =
    data[5].timeframes[timeStamp].current === 1
      ? `${data[5].timeframes[timeStamp].current}hrs`
      : `${data[5].timeframes[timeStamp].current}hrs`;

  selfCarePreviousHours.innerHTML =
    data[4].timeframes[timeStamp].previous === 1
      ? `Last ${timeStampName} - ${data[5].timeframes[timeStamp].previous}hrs`
      : `Last ${timeStampName} - ${data[5].timeframes[timeStamp].previous}hrs`;
};

const fetchData = async () => {
  try {
    const res = await fetch("js/data.json");
    data = await res.json();
    console.log(data);
    displayData("weekly", data);
  } catch (event) {
    console.log("somethin gwrong please check your data!", event);
  }
};

fetchData();

function handleToclick(event) {
  roportTypeLink.forEach(function (element) {
    element.classList.remove("selectedbtn");
  });
  event.currentTarget.classList.add("selectedbtn");
  let timesStamp = event.currentTarget.value;
  displayData(timesStamp, data);
  console.log(timesStamp);
}

roportTypeLink.forEach((link) => {
  link.addEventListener("click", handleToclick);
});
