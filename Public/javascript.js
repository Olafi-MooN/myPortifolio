let modaloverlay = document.querySelector(".modal-overlay");
let card = document.querySelectorAll(".card");
let closemodal = document.querySelector(".close-modal");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        const idDescription = card[i].getAttribute("id");
        window.location.href = `/projetos/modal?id=${idDescription}`;
     })
}
