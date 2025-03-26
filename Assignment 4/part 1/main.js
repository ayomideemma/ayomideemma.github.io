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

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    // Convert 300 pounds to stones (1 stone = 14 pounds)
    const weight = Math.round(300 / 14) + ' stone';
    // Convert 94 Fahrenheit to centigrade using the formula: (F - 32) * 5/9
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
    
  }

 
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem).replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem).replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem).replace(':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

