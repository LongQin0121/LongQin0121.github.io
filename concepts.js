function copyCode() {
    // Create a temporary textarea element
    var tempTextarea = document.createElement("textarea");
    // Get the code text
    var codeToCopy = document.getElementById("codeSnippet").innerText;
    // Set the textarea value
    tempTextarea.value = codeToCopy;
    // Append the textarea to the body (needed to use execCommand)
    document.body.appendChild(tempTextarea);
    // Select the textarea content
    tempTextarea.select();
    // Copy the selected content
    document.execCommand("copy");
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
    
    // Optional: Display a message or change the button appearance to indicate success
    alert("Code copied to clipboard!");
  }

// The  difference between the two function is that the following is  using $ Jquery

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Copied the code!');
  }


// Event listener for your div acting as a button
$('.key-definitions-btn').on('click', function() {
    // AJAX call to load the JSON data
    $.ajax({
      url: 'concepts.json', // Ensure this is the correct path to your JSON file
      dataType: 'json',
      success: function(data) {
        // Update the table cells with the fetched data
        $('#idempotent-cell').text(data.Idempotent);
        $('#safe-cell').text(data.Safe);
        $('#hasbody-cell').text(data['Has Body']);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Handle errors
        console.log('Error fetching data: ' + textStatus);
      }
    });
  });


// Get references to the DOM elements
const codeSelect = document.getElementById('code-select');
const resultDiv = document.getElementById('result');

// Add an event listener to the select element
codeSelect.addEventListener('change', () => {
  const selectedCode = codeSelect.value;

  // Check if a code is selected
  if (selectedCode) {
    // Construct the API endpoint URL
    const apiUrl = `https://http.dog/${selectedCode}.jpg`;

    // Send an AJAX request using the Fetch API
    fetch(apiUrl)
      .then(response => {
        // Check if the response was successful
        if (response.ok) {
          // Update the result div with the response status code
          resultDiv.innerHTML = `<img src="${apiUrl}" alt="Response Image" />`;
        } else {
          // Update the result div with an error message
          resultDiv.textContent = `Error: ${response.status} - ${response.statusText}`;
        }
      })
      .catch(error => {
        // Update the result div with an error message
        resultDiv.textContent = `Error: ${error}`;
      });
  } else {
    // Clear the result div
    resultDiv.innerHTML = '';
  }
});