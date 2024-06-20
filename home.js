var backgroundImages = [ "images/bangalorecafes-1525089752.jpg", "images/c.jpg"]; 
        var currentIndex = 0; 
        function changeBackgroundImage() {
            document.body.style.backgroundImage = "url('" + backgroundImages[currentIndex] + "')";
            currentIndex = (currentIndex + 1) % backgroundImages.length; 
        }
        changeBackgroundImage();
        setInterval(changeBackgroundImage, 5000);