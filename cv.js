

  document.querySelectorAll('.skill-card').forEach(function(skill) {
    skill.addEventListener('mouseenter', function() { // Changed from 'click' to 'mouseenter'
      var skillName = this.id.replace('+', 'Plus'); // Adjust for special characters in ID, if necessary
      fetch('cv.json') // Make sure the path to your JSON file is correct
        .then(response => response.json())
        .then(data => {
          var skillData = data.skills[skillName];
          if (skillData) {
            document.getElementById('contentText').innerHTML = `
              <h4>${skillName}</h4>
              <p>Project: <a href="${skillData.link}" target="_blank">${skillData.project}</a></p>
              <p>Link: <a href="${skillData.link}" target="_blank">${skillData.link}</a></p>
            `;
            document.getElementById('contentDisplay').style.display = 'block'; // Show the contentDisplay div
          } else {
            document.getElementById('contentText').innerText = 'No data found for ' + skillName;
            document.getElementById('contentDisplay').style.display = 'block'; // Still show the div to display the error
          }
        })
        .catch(error => {
          console.error('Error fetching skill data:', error);
          document.getElementById('contentText').innerText = 'Error loading data';
          document.getElementById('contentDisplay').style.display = 'block'; // Still show the div to display the error
        });
    });
});

// Keep the close button functionality as is for user to manually close the display
document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('contentDisplay').style.display = 'none'; // Hide the contentDisplay div
});



document.getElementById('sendButton').addEventListener('click', function() {
    alert("I have received your message, and I will contact you ASAP.");
});
