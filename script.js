

const boom = document.querySelector(".boom");

function shuffle() {
  const items = document.querySelectorAll(".letter");
  const value = 50;
  items.forEach(item => {
    item.style = `transform: translate(${(Math.random() - .5) * value}px,${(Math.random() - .5) * value}px) rotate(${(Math.random() - .5) * 50}deg)`
  });
}

const intervalID = setInterval(shuffle, 100);
const nameArray = document.querySelectorAll(".name-letter");
const singleLetters = [];
nameArray.forEach(letter => {
  singleLetters.push(letter.innerHTML);
});
console.log(singleLetters);
const nameCLick = document.querySelector(".name");
nameCLick.addEventListener('click', randomise);

async function randomise() {
  const howLong=100;
  for (var i = 0; i < howLong; i++) {
    nameArray.forEach(letter => {
      letter.innerHTML = (Math.random() + 1).toString(36).substring(4, 5).toUpperCase();
    });
    for (var j = 0; j < singleLetters.length; j++) {
      if (i > j * (howLong/singleLetters.length)) {
        nameArray[j].innerHTML = singleLetters[j];
      }
    }
    await sleep(Math.abs(i-howLong));
  }
  console.log(singleLetters.length)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}