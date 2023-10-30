
// Intro Typing Animation
const messages = [
  "Front-End Developer",
  "Web-Developer",
  "Creative Thinker",
  "Problem Solver",
  "Passionate Coder"
]; // Array of messages to display

const typingSpeed = 150; // Adjust the typing speed (in milliseconds)
let messageIndex = 0;
let characterIndex = 0;

const typingEffect = () => {
  if (characterIndex < messages[messageIndex].length) {
    document.getElementById("typing-message").textContent += messages[
      messageIndex
    ].charAt(characterIndex);
    characterIndex++;
    setTimeout(typingEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, typingSpeed * 2);
  }
};

const eraseEffect = () => {
  if (characterIndex > 0) {
    document.getElementById("typing-message").textContent = messages[
      messageIndex
    ].substring(0, characterIndex - 1);
    characterIndex--;
    setTimeout(eraseEffect, typingSpeed / 2);
  } else {
    messageIndex = (messageIndex + 1) % messages.length;
    setTimeout(typingEffect, typingSpeed);
  }
};

typingEffect();

// View Certificate in full screen
function toggleFullScreen(imageSrc) {
  var fullscreenImage = document.getElementById("fullscreen-image");
  var image = document.getElementById("image");
  
  image.src = imageSrc;
  fullscreenImage.classList.toggle("show");
}

//  View Profile Image in full screen
function showFullscreenImage(element) {
  var fullscreenContainer = document.createElement("div");
  fullscreenContainer.className = "fullscreen-container";
  fullscreenContainer.onclick = function () {
    document.body.removeChild(fullscreenContainer);
  };

  var fullscreenImage = document.createElement("img");
  fullscreenImage.className = "fullscreen-image";
  fullscreenImage.src = element.src;

  fullscreenContainer.appendChild(fullscreenImage);
  document.body.appendChild(fullscreenContainer);
}
