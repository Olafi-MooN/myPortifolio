let btn = document.querySelectorAll('input[type="submit"]');

btn.forEach((item, index) => item.id = index);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        const idDescription = btn[i].getAttribute("id");
        window.location.href = `/articles/${idDescription}`;
     })
}

