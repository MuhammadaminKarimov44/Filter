 let btns = document.querySelectorAll(".btn");
 let imgs = document.querySelectorAll("img");

 btns.forEach((item) => {
    item.addEventListener("click", () => {
        imgs.forEach((img) => {
            if (item.innerHTML == "All") {
                img.parentElement.classList.remove("d-none");
            } else if (item.innerHTML == img.getAttribute("id")) {
                img.parentElement.classList.remove("d-none");
            } else {
                img.parentElement.classList.add("d-none")
            }
        });
    });
 });