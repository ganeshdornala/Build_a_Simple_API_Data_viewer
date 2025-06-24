const dogContainer = document.getElementById("dogContainer");
const load = document.getElementById("load");
const breed = document.getElementById("breed");
let allDogs = [];
async function fetchDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
    const data = await response.json();
    allDogs = data.message.map(imgUrl => ({
        url: imgUrl,
        breed: extractBreed(imgUrl)
    }));
    renderDogs(allDogs);
}
function extractBreed(url) {
    const match = url.match(/breeds\/(.*?)\//);
    return match ? match[1].replace("-", " ") : "Unknown";
}
function renderDogs(dogs) {
    dogContainer.innerHTML = "";
    dogs.slice(0, 5).forEach(dog => {
        const div = document.createElement("div");
        div.className = "dog-card";
        div.innerHTML = `
        <img src="${dog.url}" alt="Dog Image"/>
        <p>${dog.breed}</p>
        `;
        dogContainer.appendChild(div);
    });
}
breed.addEventListener("input", () => {
    const keyword = breed.ariaValueMax.toLowerCase();
    const filtered = allDogs.filter(dog => dog.breed.toLowerCase().includes(keyword));
    renderDogs(filtered);
});
load.addEventListener("click", fetchDogs);
fetchDogs();