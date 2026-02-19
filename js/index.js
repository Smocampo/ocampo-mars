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
}