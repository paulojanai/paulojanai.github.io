const showPage = () => {
    document.querySelector("div.loading").style.display = "none";
    document.querySelector("div.loading-content").style.display = "block";
}

const myFunction = () => { setTimeout(showPage, 1200) }