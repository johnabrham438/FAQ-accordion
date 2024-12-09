const buttons = document.querySelectorAll("#show-btn");
//loop through each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //Get the button image ID from the button's data-image attribute
        const imageId = button.getAttribute("data-image");
        // Get the image element with imageId from the html body/document
        const imageElement = document.getElementById(imageId);
        // Get the textElement ID from the button's data-target attribute
        const textId = button.getAttribute("data-target");
          // Toggle visibility of the target element
        const textElement = document.getElementById(textId);
        
        if(textElement.style.display === "none"){
            textElement.style.display = "block";
            imageElement.src = 'assets/images/icon-minus.svg';
        }
        else{
            textElement.style.display = "none";
            imageElement.src = 'assets/images/icon-plus.svg';
        }
        
    })
    
})
