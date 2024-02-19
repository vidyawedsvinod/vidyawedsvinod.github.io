
      function startCarousel() {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    // Initial call to show the first image
    showImage(currentIndex);
  
    // Automatically change image every 3 seconds (3000 milliseconds)
    setInterval(nextImage, 3000);
  }
  
  // Start the carousel when the page loads
  window.addEventListener("load", startCarousel);
  
      function redirectToGoogleMap() {
      // Open Google Maps with the specified location
      var googleMapsUrl = "https://maps.app.goo.gl/Hv7f2LVFdJ4uAsg98?g_st=iw";
      window.open(googleMapsUrl, '_blank');
  }
      function redirectToGoogleCalendar() {
          // Define the event details
          var title = "Vidya weds Vinod";
          var startDate = "20240229"; // Format: YYYYMMDD
          var endDate = "20240229";   // Format: YYYYMMDD
  
          // Generate the Google Calendar URL
          var googleCalendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE" +
              "&text=" + encodeURIComponent(title) +
              "&dates=" + encodeURIComponent(startDate + "/" + endDate);
  
          // Open Google Calendar in a new tab
          window.open(googleCalendarUrl, '_blank');
      }
  
      function redirectToGoogleMapGroomHome() {
      // Open Google Maps with the specified location
      var googleMapsUrl = "https://maps.app.goo.gl/q6Hn6RS8kYNnap59A?g_st=iw";
      window.open(googleMapsUrl, '_blank');
  }
  function redirectToGoogleMapBrideHome() {
    // Open Google Maps with the specified location
    var googleMapsUrl = "https://maps.app.goo.gl/4vgBwsHHQ8Jk99q3A?g_st=iw";
    window.open(googleMapsUrl, '_blank');
}
  
      // Set your target date here (Year, Month - 1, Day, Hour, Minute, Second)
      var targetDate = new Date(2024, 2 - 1, 29, 0, 0, 0); // November 1, 2023
  
      // Function to update the countdown timer
      function updateCountdown() {
          var currentDate = new Date();
          var timeRemaining = targetDate - currentDate;
  
          if (timeRemaining <= 0) {
              document.getElementById('countdown').innerHTML = "The event has ended!";
          } else {
              var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
              var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
              var countdownText = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
              document.getElementById('countdown').innerHTML = countdownText;
          }
      }
  
      // Update the countdown every second
      setInterval(updateCountdown, 1000);
  
      // Initial call to set the initial countdown
      updateCountdown();
  
      // Access the video element
      const video = document.getElementById("myVideo");
    
      // Function to seek 10 seconds forward or backward
      function seekByTen(seconds) {
        video.currentTime += seconds;
      }
    
      // Add event listeners for forward and backward buttons
      document.getElementById("forwardBtn").addEventListener("click", () => seekByTen(10));
      document.getElementById("backwardBtn").addEventListener("click", () => seekByTen(-10));
