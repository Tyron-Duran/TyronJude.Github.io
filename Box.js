let currentBox = null;
let previousBox = null;

document.querySelectorAll(".daybtn").forEach(button => {
    button.addEventListener("click", function() {
        let color = this.getAttribute("data-color");
        let boxContainer = document.querySelector(".box-container");
        let newBox = document.createElement("div");
        newBox.classList.add("animated-box");
        newBox.style.backgroundColor = "transparent";
        newBox.style.borderColor = color;
        newBox.style.top = "-120px";
        newBox.style.opacity = "0";
        boxContainer.appendChild(newBox);

        setTimeout(() => {
            newBox.style.transition = "top 1s ease-in-out, background-color 0.2s ease-in-out, opacity 1s ease-in-out";
            newBox.style.top = "100px";
            newBox.style.backgroundColor = color;
            newBox.style.opacity = "1";
        }, 50);
        
        setTimeout(() => {
            newBox.style.transition = "background-color 0.5s ease-in-out, opacity 0.5s ease-in-out";
            newBox.style.backgroundColor = "transparent";
            newBox.style.opacity = "0.5";
        }, 1200);
        
        if (currentBox) {
            previousBox = currentBox;
            previousBox.style.transition = "top 1s ease-in-out, background-color 0.2s ease-in-out, opacity 1s ease-in-out";
            previousBox.style.top = "-120px";
            previousBox.style.opacity = "1";
            
            setTimeout(() => {
                previousBox.style.transition = "background-color 0.5s ease-in-out, opacity 0.5s ease-in-out";
                previousBox.style.backgroundColor = "transparent";
                previousBox.style.opacity = "0";
            }, 700);
            
            setTimeout(() => {
                previousBox.remove();
            }, 1200);
        }
        
        currentBox = newBox;
    });
});