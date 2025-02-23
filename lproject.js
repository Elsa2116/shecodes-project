document.getElementById('join-button').addEventListener('click', function() {
    let name = prompt("Please enter your name to join our conservation efforts:");
    
    if (name) {
        alert('Thank you, ${name}! We appreciate your interest in wildlife conservation.');
    } else {
        alert("Please enter your name to get involved!");
    }
});