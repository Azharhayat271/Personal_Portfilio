document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
      "Welcome to Profile",
      "I'm a React Developer ",
      "I am a Web designer",
      "I am a MERN Stack Developer"
    ];
  
    const typingEffect = document.getElementById('typing-effect');
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
  
    function typeWriter() {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        typingEffect.textContent = currentPhrase.slice(0, currentCharIndex);
        currentCharIndex--;
      } else {
        typingEffect.textContent = currentPhrase.slice(0, currentCharIndex + 1);
        currentCharIndex++;
      }
  
      if (currentCharIndex === currentPhrase.length && !isDeleting) {
        isDeleting = true;
        setTimeout(typeWriter, 1000); // Wait for 1 second after displaying the full phrase
      } else if (currentCharIndex === 0 && isDeleting) {
        isDeleting = false;
        currentPhraseIndex++;
        if (currentPhraseIndex === phrases.length) {
          currentPhraseIndex = 0;
        }
        setTimeout(typeWriter, 500); // Wait for 0.5 seconds before starting the next phrase
      } else {
        const delay = isDeleting ? 50 : 100; // Adjust the typing speed
        setTimeout(typeWriter, delay);
      }
    }
  
    typeWriter();
  });
  const button = document.getElementById("animated-button");

    button.addEventListener("click", () => {
      button.classList.add("animate__shakeX");

      // Remove the animation class after the animation finishes
      button.addEventListener("animationend", () => {
        button.classList.remove("animate__shakeX");
      }, { once: true });
    });
  