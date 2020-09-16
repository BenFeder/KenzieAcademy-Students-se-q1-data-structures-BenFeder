// Follow the Instructions on my.kenzie.academy for this assignment.
// They will give you details on each step.

// STEP ONE - Create your Data Model Here.

let dataModel; // Assign your data model here.

function onSubmitDog(event) {
  event.preventDefault();
  // STEP TWO - Add the dog to your data model.

  // Get all of the input fields

  // Grab all the values from the inputs.

  // If they didn't fill out all the fields, don't add the dog.
  // Just return

  // Then render the list again

  // Finally, Reset the form.
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
