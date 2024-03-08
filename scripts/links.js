const baseURL = "https://rarredondo9.github.io/wdd230/";
const linksURL = "https://rarredondo9.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    const list = document.querySelector(".lessons");

    weeks.lessons.forEach(week => {
        const item = document.createElement("li");
        let content = `${week.lesson}: `;

        week.links.forEach((link, index) => {
            content += `<a href="${link.url}">${link.title}</a>`;
            if (index < week.links.length - 1) {
                content += ' | ';
            }
        });

        item.innerHTML = content;
        list.appendChild(item);
    });
}

