//Name: Aderinboye Ayomide Emmnauel
//File: index.html
//Date: 18 march 2025
//Student ID: 100994931
//Description: A button generates a random silly story, replacing "Bob" with a custom name if provided and converting US units to UK equivalents if the UK option is selected.

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storytest = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
let insertY = ["the soup kitchen", "Disneyland", "the White House"]
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';

    newStory = newStory.replace('94°F', tempInCelsius)
                       .replace('300 pounds', weightInStones);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

newStory = newStory.replace(':insertx:', xItem)
                    .replace(':inserty:', yItem)
                    .replace(':insertz:',zItem)
var xItem = randomValueFromArray()
var yItem = randomValueFromArray()
var zItem = randomValueFromArray()