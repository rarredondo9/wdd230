document.addEventListener("DOMContentLoaded", function () {
    const url = "./members.json";

    async function getSpotlightMembers() {
        const response = await fetch(url);
        const data = await response.json();
        const spotlightMembers = data.members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
        displaySpotlightMembers(shuffleArray(spotlightMembers).slice(0, 3)); // Get 2-3 random members
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function displaySpotlightMembers(members) {
        const container = document.getElementById('spotlight-container');
        container.innerHTML = '';

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'spotlight-member';
            memberDiv.innerHTML = `
                <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p>${member.membershipLevel} Member</p>
                <a href="${member.url}" target="_blank">Visit Website</a>
            `;
            container.appendChild(memberDiv);
        });
    }

    getSpotlightMembers();
});
