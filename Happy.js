 // Get the tulip element
 const tulipElement = document.querySelector('.tulip');

 // Set initial position values
 let position = 0;

 // Function to animate the tulip
 function animateTulip() {
   // Update the position
   position += 1;

   // Apply the new position as a CSS style
   tulipElement.style.transform = `translateY(${position}px)`;

   // Reset the position when it goes off the screen
   if (position > window.innerHeight) {
     position = -100;
   }
 }

 // Set interval for the animation (adjust the interval as needed)
 setInterval(animateTulip, 30);