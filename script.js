const h2 = document.createElement("h2");
h2.textContent = "Benefits of Bootcamps to Develop Technical Skills.";

document.querySelector("body").appendChild(h2);

const ul = document.createElement("ul");
const listItems = [
  "ADOPT A NEW ROLE",
  "A CHANCE TO ENTER A NEW CAREER",
  "A CHANCE TO BUILD YOUR NETWORK"
];

listItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

document.querySelector("body").appendChild(h2);
document.querySelector("body").appendChild(ul);