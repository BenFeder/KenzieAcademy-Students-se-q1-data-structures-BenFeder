// Follow the Instructions on my.kenzie.academy for this assignment.
// They will give you details on each step.

// Create Data Model

let dataModelDogs = [
  { name: "Daisy", breed: "dachshund", age: 2, likesTreats: false },
  { name: "Lily", breed: "beagle", age: 1, likesTreats: true },
  { name: "Rover", breed: "golden retriever", age: 4, likesTreats: true },
];

// call this function when button is clicked
function onSubmitDog(event) {
  let dogName = document.getElementById("name_input").value;
  let dogBreed = document.getElementById("breed_input").value;
  let dogAge = document.getElementById("age_input").value;
  let dogTreats = document.getElementById("treats_input").checked;

  newDogObject = new Object({
    name: `${dogName}`,
    breed: `${dogBreed}`,
    age: dogAge,
    likesTreats: dogTreats,
  });

  if (dogName && dogBreed && dogAge) {
    dataModelDogs.push(newDogObject);
  } else {
    return;
  }

  // RESET THE FORM TO BLANK
  dogName = "";
  dogBreed = "";
  dogAge = "";
  dogTreats = false;

  event.preventDefault();
}

function renderDogList() {
  let list = document.getElementById("dog_list");
  // First, clear the whole list.
  list.innerHTML = "";

  // STEP THREE - Render the dog list
  // If there are no dogs, then render "No Dogs!"
  // Otherwise, render all of the dogs in your data model.

  // Your Code Here!

  // Remember to add the "Send Home" button with an onclick pointing to
  // removeDog() with the current dog as an argument.
}

function removeDog(dog) {
  // STEP FOUR - Remove the given dog from the data model.
  // Your Code Here
}

let button = document.getElementById("submit_button");
button.onclick = onSubmitDog;

renderDogList();
