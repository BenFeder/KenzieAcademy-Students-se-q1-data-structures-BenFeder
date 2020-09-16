// Follow the Instructions on my.kenzie.academy for this assignment.
// They will give you details on each step.

// Create Data Model

let dataModelDogs = [
  {
    name: "Daisy",
    breed: "dachshund",
    age: 2,
    gender: "female",
    likesTreats: false,
  },
  {
    name: "Lily",
    breed: "beagle",
    age: 1,
    gender: "female",
    likesTreats: true,
  },
  {
    name: "Rover",
    breed: "golden retriever",
    age: 4,
    gender: "male",
    likesTreats: true,
  },
];

// call this function when button is clicked
function onSubmitDog(event) {
  let dogName = document.getElementById("name_input").value;
  let dogBreed = document.getElementById("breed_input").value;
  let dogAge = document.getElementById("age_input").value;
  let dogGender = document.getElementsByName("gender_input").value;
  let dogTreats = document.getElementById("treats_input").checked;

  newDogObject = new Object({
    name: `${dogName}`,
    breed: `${dogBreed}`,
    age: dogAge,
    gender: `${dogGender}`,
    likesTreats: dogTreats,
  });

  if (dogName && dogBreed && dogAge && dogGender) {
    dataModelDogs.push(newDogObject);
    renderDogList();
  } else {
    return;
  }

  // RESET THE FORM TO BLANK
  dogName = "";
  dogBreed = "";
  dogAge = "";
  dogGender = "";
  dogTreats = false;

  event.preventDefault();
}

function renderDogList() {
  let list = document.getElementById("dog_list");

  for (eachDog in dataModelDogs) {
    if (dataModelDogs.name == "") {
      list.innerHTML = `<li> No dogs! </li>`;
    } else {
      list.innerHTML =
        `<li> Your ${dataModelDogs.breed} ${dataModelDogs.gender} dog, ${dataModelDogs.name}, is ` +
        dataModelDogs.age +
        ` years old and under our care!`;

      if (dataModelDogs.likesTreats && dataModelDogs.gender == "male") {
        list.innerHTML += ` And he loves treats! </li>`;
      } else if (
        dataModelDogs.likesTreats &&
        dataModelDogs.gender == "female"
      ) {
        list.innerHTML += ` And she loves treats! </li>`;
      } else if (dataModelDogs.gender == "male") {
        list.innerHTML += ` And he doesn't like treats so much! </li>`;
      } else if (dataModelDogs.gender == "female") {
        list.innerHTML += ` And she doesn't like treats so much! </li>`;
      }
    }

    let removeDogButton = document.createElement("button");
    removeDogButton.classList.add("remove-button");
    removeDogButton.onclick = function () {
      removeDog(currentDog);
    };

    removeDogButton.innerText = "Send dog home.";
    li.append(removeDogButton);
  }

  document.body.appendChild(list);

  // STEP THREE - Render the dog list
  // If there are no dogs, then render "No Dogs!"
  // Otherwise, render all of the dogs in your data model.

  // Your Code Here!

  // Remember to add the "Send Home" button with an onclick pointing to
  // removeDog() with the current dog as an argument.
}

// to remove a dog from the list of dogs
function removeDog(currentDog) {
  dataModelDogs.splice(currentDog, 1);
  renderDogList();
}

let button = document.getElementById("submit_button");
button.addEventListener("click", onSubmitDog);
