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

// function createDog(name, breed, age, gender, likesTreats) {

//}

// call this function when button is clicked
function onSubmitDog(event) {
  event.preventDefault();

  let dogName = document.getElementById("name_input").value;
  let dogBreed = document.getElementById("breed_input").value;
  let dogAge = document.getElementById("age_input").value;
  let dogGender = document.getElementsByName("gender_input").value;
  let dogTreats = document.getElementById("treats_input").checked;

  let newDogObject = new Object();
  newDogObject.name = dogName;
  newDogObject.breed = dogBreed;
  newDogObject.age = dogAge;
  newDogObject.gender = dogGender;
  newDogObject.likesTreats = dogTreats;

  if (
    dogName == false ||
    dogBreed == false ||
    dogAge == false ||
    dogGender == false
  ) {
    return;
    //dataModelDogs.push(newDogObject);
    //renderDogList();
  }

  dataModelDogs.push(newDogObject);
  renderDogList();

  // RESET THE FORM TO BLANK
  dogName = "";
  dogBreed = "";
  dogAge = "";
  dogGender = "";
  dogTreats = false;
}

function renderDogList() {
  let list = document.getElementById("dog_list");

  list.innerHTML = "";

  for (let eachDog of dataModelDogs) {
    console.log(eachDog);
    if (dataModelDogs.length == 0) {
      list.innerHTML = `<li> No dogs! </li>`;
    } else {
      list.innerHTML +=
        `<li> Your ${eachDog.breed} ${eachDog.gender} dog, ${eachDog.name}, is ` +
        eachDog.age +
        ` years old and under our care!`;

      if (eachDog.likesTreats && eachDog.gender == "male") {
        list.innerHTML += ` And he loves treats! </li>`;
      } else if (eachDog.likesTreats && eachDog.gender == "female") {
        list.innerHTML += ` And she loves treats! </li>`;
      } else if (eachDog.gender == "male") {
        list.innerHTML += ` And he doesn't like treats so much! </li>`;
      } else if (eachDog.gender == "female") {
        list.innerHTML += ` And she doesn't like treats so much! </li>`;
      }
    }

    let removeDogButton = document.createElement("button");
    removeDogButton.classList.add("remove-button");
    removeDogButton.onclick = function () {
      removeDog(eachDog);
    };

    let listItem = document.createElement("li");

    removeDogButton.innerText = "Send dog home.";
    listItem.append(removeDogButton);
    list.append(listItem);
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
function removeDog(eachDog) {
  dataModelDogs.splice(dataModelDogs.indexOf(eachDog), 1);
  renderDogList();
}

let button = document.getElementById("submit_button");
button.onclick = onSubmitDog;

renderDogList();
