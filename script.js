const cross = document.getElementById("cross");
        const helpTxt = document.getElementById("help-txt")

        cross.addEventListener('click', ()=>{
            helpTxt.style.cssText = "display: none;"
        })
