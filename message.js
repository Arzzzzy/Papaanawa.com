// Check if the user has already seen the popup
if (!localStorage.getItem('popupShown')) {
    // If not, show the popup and set the flag
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    localStorage.setItem('popupShown', true);
  }
  
  // Add event listener to the close button
  var closeButton = document.getElementById('close');
  closeButton.addEventListener('click', function() {
    // Hide the popup and remove it from the DOM
    popup.style.display = 'none';
    popup.parentNode.removeChild(popup);
  });
  
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var isLoggedIn = false;

function showMessage() {
  // Get the input values
  var username = document.getElementsByName("uname")[0].value;
  var password = document.getElementsByName("psw")[0].value;

  // Get the message element
  var messageElement = document.getElementById("message");

  // Check if the values are correct
  if (username === "admin" && password === "admin") {
    // Redirect to another page
    messageElement.innerHTML = "Welcome back, Christian.";
    setTimeout(function() {
      modal.style.display = "none";
    }, 3000);

    // Set isLoggedIn to true
    isLoggedIn = true;
    // Set the profile pic if logged in
    var profilePic = document.getElementById("profile-pic");
    profilePic.src = "MeWithFrame.jpg";

    var loginButton = document.getElementById("signin-disappear");
    loginButton.style.display = "none";

    // Show the description element
    document.getElementById("hiddentext").style.display = "block";
    document.getElementById("hiddentext2").style.display = "block";
    document.getElementById("hiddentext3").style.display = "block";
    document.getElementById("hiddentext4").style.display = "block";

    // Update the logo text
    var logoText = document.getElementById("logo-text");
    logoText.innerHTML = "A day of trip";
  } else {
    // Display an error message
    messageElement.innerHTML = "Incorrect username or password";
    // Remove the message after 2 seconds
    setTimeout(function() {
      messageElement.innerHTML = "";
    }, 2000);

    // Update the logo text
    var logoText = document.getElementById("logo-text");
    logoText.innerHTML = "Papaanawa";
  }
}



/* UPLOAD PICTURES*/ 
function showmessage2() {
    if (isLoggedIn) {
      alert('Your Logged In but this feature is not yet available');
    } else {
      alert('Please log in first to upload pictures.');
    }
  }
/* DOWNLOAD PICTURES*/ 
  function downloadPictures() {
    if (isLoggedIn) {
    // specify the folder path where the pictures are stored
    var folderPath = 'images';
    
    // specify the file names of the pictures
    var fileNames = ['Saud.jpg', 'Saud (2).jpg', 'Saud (3).jpg'
    , 'Saud (4).jpg', 'Apayao.jpg', 'Apayao (2).jpg', 'Apayao (3).jpg', 'Apayao (4).jpg'
    , 'Apayao (5).jpg', 'Apayao (6).jpg', 'Apayao (7).jpg', 'Apayao (8).jpg', 'Bangui.jpg'
    , 'Bangui (2).jpg', 'Bangui (3).jpg', 'Bangui (4).jpg', 'Fort.jpg',
    'Fort (2).jpg', 'Fort (3).jpg', 'Fort (4).jpg', 'Fort (5).jpg', 'Fort (6).jpg',
    'Fort (7).jpg','Fort (8).jpg',];
    
    // create a link element for each picture
    for (var i = 0; i < fileNames.length; i++) {
      var link = document.createElement('a');
      link.setAttribute('href', folderPath + '/' + fileNames[i]);
      link.setAttribute('download', fileNames[i]);
      document.body.appendChild(link);
      
      // simulate a click on the link to start the download
      link.click();
      
      // remove the link element from the DOM
      document.body.removeChild(link);
    }
    } else {
      alert('Please log in first to download pictures.');
    }

  }


// Code to display the pop-up when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'block';
  }
  // Code to close the pop-up when the close button is clicked
  document.getElementById('close').onclick = function() {
    document.getElementById('popup').style.display = 'none';
  }

  var darkModeButton = document.getElementById('dark-mode-toggle');
  var body = document.getElementsByTagName('body')[0];
  
  darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
  });
    

