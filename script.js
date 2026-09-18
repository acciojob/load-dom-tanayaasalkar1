document.addEventListener("DOMContentLoaded", function () {
    let p = document.createElement('p');
    p.innerText = "DOM load success";

    document.body.appendChild(p);
});