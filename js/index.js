//get body element
const body = document.body;


// FOOTER

// add footer to HTML
let footer = document.createElement('footer');

// Append the footer
body.appendChild(footer);

//Copyright

//create a new date
const today = new Date();

//get currant year
const thisYear = today.getFullYear();

//footer 
footer = document.querySelector("footer");

//create a new p element
const copyright = document.createElement("p");

//innerHTML of the copyright
copyright.innerHTML = `\u00A9 Sofía Ocampo-Morales ${thisYear}`

//append copyright
footer.appendChild(copyright);

//center the footer
footer.style.textAlign = "center";


// SKILLS


//List skills
const skills = ["JavaScript", "CSS", "HTML", "Git", "GitHub", "Slack", "Adobe Express"];

//select the skills section by ID
const skillsSection = document.getElementById("Skills");

//create skillsList
const skillsList = skillsSection.querySelector("ul");

//Loop through the skills section
for (let i = 0; i < skills.length; i++) {
  //create new <li> elements
  const skill = document.createElement("li");
  //set the innerHTML of the li
  skill.innerText = skills[i];
  //append li to skills list
  skillsList.appendChild(skill);
};


// PROJECT SECTION

//fetch github
fetch("https://api.github.com/users/Smocampo/repos")
  .then(function(response){
    //return as json
    return response.json();
  })
  .then(function(repositories) {
    //print out reponse
    console.log("Repositiories:", repositories);


    //code to get the project section
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");


    //create a loop
    for (let i=0; i < repositories.length; i++){
      const project = document.createElement("li");

      project.innerText = repositories[i].name;

      projectList.appendChild(project);
    }
  })

  //error message
  .catch(function(error){
    console.error("Error Fetching Repositiories:", error);

    const projectSection = document.getElementById("Projects");
    projectSection.innerHTML += "<p>Unable to load projects at this time</p>"
  })


//Message Form-----

//helper function
function toggleMessagesSection() {
  const messageSection = document.getElementById("Messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

//hide the messages section
toggleMessagesSection();

const messageForm = document.querySelector("form[name=leave_messages]");


//add event listener
messageForm.addEventListener("submit", function(event) {

  //prevent page refresh
  event.preventDefault();

  //message form fields
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;


  //log values
  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);


  //select the messages section
  const messageSection = document.getElementById("Messages");

  //select the message <ul>
  const messageList = messageSection.querySelector("ul");

  //create new list message item
  const newMessage = document.createElement("li");

  const link = document.createElement("a");
  link.href = `mailto:${userEmail}`;
  link.textContent = userName;

  const span = document.createElement("span");
  span.textContent = `: ${userMessage}`;

  newMessage.append(link, span);
  //set the innerHTML
 // newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`; 

  //create edit button
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  //add event listener
  editButton.addEventListener("click", function() {
    const messageSpan = newMessage.querySelector("span");

    //prompt user for new message
    const newText = prompt("Edit your message: ", messageSpan.innerText);

    //update the message
    if (newText !== null) {
      messageSpan.innerText = newText;
    }
  });


  //append edit button
  newMessage.appendChild(editButton);

  //create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";

  //add click event 
  removeButton.addEventListener("click", function() {
    //find the li
    const entry = removeButton.parentNode;
    //remove it
    entry.remove();

    //toggle
    toggleMessagesSection();
  });

  //Append the remove button
  newMessage.appendChild(removeButton);

  //append new message ;ist
  messageList.appendChild(newMessage);

  toggleMessagesSection();

  //clear the form
  messageForm.reset();
});

