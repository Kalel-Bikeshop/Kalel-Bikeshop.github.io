function addItemToCart(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Assuming you have a function to handle adding items to the cart
    // You can replace this with your actual logic
    // For now, let's just display the message
    var messageBox = document.getElementById('messageBox');
    if (!messageBox) {
        console.error('messageBox element not found');
        return;
    }

    // Display the message box with the success class
    messageBox.innerHTML = 'Item added successfully';
    messageBox.style.display = 'block';  // Show the message box
    messageBox.classList.add('message-success');

    // Set a timeout to hide the message after a few seconds (e.g., 3 seconds)
    setTimeout(function () {
        messageBox.innerHTML = '';  // Clear the message
        messageBox.style.display = 'none';  // Hide the message box
        messageBox.classList.remove('message-success');
    }, 3000);  // 3000 milliseconds = 3 seconds
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}