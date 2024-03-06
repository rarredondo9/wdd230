const baseURL = "https://rarredondo9.github.io/wdd230/";
const linksURL = "https://rarredondo9.github.io/wdd230/data/links.json";

async function fetchLinksData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    const container = document.querySelector(".card > ul");
}

weeks.forEach(week => {
    week.links.forEach(link => {
        const listItem = document.createElement("li");
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = `${week.week}: ${link.title}`;
        linkElement.target = "_blank";

        listItem.appendChild(linkElement);
        container.appendChild(listItem);
    })
})

getLinks();