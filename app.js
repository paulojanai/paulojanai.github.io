const myFunction = () => { setTimeout(showPage, 1200) }

const showPage = () => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style.display = "flex";
}