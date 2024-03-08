const url = "./members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    displayMembers(data.members);
}
getMembers();

function displayMembers(members) {
    members.forEach((member) => {
        const memberCards = document.querySelector("#members");

        const name = document.createElement("h2");
        name.innerHTML = member.name;

        const image = document.createElement("img");
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name} image`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "250");

        const address = document.createElement("p");
        address.innerHTML = member.address;

        const phone = document.createElement("p");
        phone.innerHTML = `<a href="tel:${member.phone}">${member.phone}</a>`;

        const url = document.createElement("p");
        url.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`;

        const level = document.createElement("p");
        level.innerHTML = member.membershipLevel;

        const card = document.createElement("section");
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        memberCards.appendChild(card);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("div#members");

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);

function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
}

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
