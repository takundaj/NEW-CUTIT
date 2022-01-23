//get h1 element
const titleObject = document.querySelectorAll(".job-title");

titleObject.forEach((titleObject) => {
  //Declare array of specialist title you want to loops through
  const jobsArray = [
    "Specialist",
    "Barber",
    "Hairdresser",
    "Tattoo Artist",
    "Nail Tech",
    "Beautician",
    "Loctician",
  ];

  let i = 0;
  let j = 0;
  let currentJobTitle = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
    let isEnd = false;
    titleObject.innerHTML = currentJobTitle.join("");

    if (i < jobsArray.length) {
      if (!isDeleting && j <= jobsArray[i].length) {
        currentJobTitle.push(jobsArray[i][j]);
        j++;
        titleObject.innerHTML = currentJobTitle.join("");
      }

      if (isDeleting && j <= jobsArray[i].length) {
        currentJobTitle.pop(jobsArray[i][j]);
        j--;
        titleObject.innerHTML = currentJobTitle.join("");
      }

      if (j == jobsArray[i].length) {
        isEnd = true;
        isDeleting = true;
        titleObject.style.borderRight = "none";
        setTimeout(() => {
          titleObject.style.borderRight = "1px solid black";
        }, 500);
        setTimeout(() => {
          titleObject.style.borderRight = "none";
        }, 1000);
        setTimeout(() => {
          titleObject.style.borderRight = "1px solid black";
        }, 1500);
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i == jobsArray.length) {
          i = 0;
        }
      }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
  }

  loop();
});
