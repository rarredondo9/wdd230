const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = "";
    }
});

//Local Storage Activity
let chapters = getChapterList() || [];

chapters.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chapters.push(input.value);
        setChaptersList();
        input.value = "";
        input.focus;
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChaptersList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chapters));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter((item) => item !== chapter);
    setChaptersList();
}
