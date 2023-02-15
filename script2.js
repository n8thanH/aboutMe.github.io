document.body.style.fontFamily = "Ariel, sans-serif";

const listItems = document.querySelectorAll('li');

document.getElementById('nickname').textContent = "Nickname: Nate";
document.getElementById('favorites').textContent = "Favorites: Metroid";
document.getElementById('hometown').textContent = "Hometown: Phoenix";

listItems.forEach((li) => {
    li.className = "list-item";
})

const img = document.createElement('img');
img.src = "images/dino.webp";
document.body.appendChild(img);