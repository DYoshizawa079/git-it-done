var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// Handle the form submission
var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // Get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username.")
    }
}

// Process the data that's been converted into JSON format
// First parameter is the JSON data that's just been parsed
// Second parameter is the username that was entered in the search bar
var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
}

// Make an API call to GitHub with the username that was collected
var getUserRepos = function(user) {

    // Format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // Make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
        });
    });
};

userFormEl.addEventListener("submit", formSubmitHandler);