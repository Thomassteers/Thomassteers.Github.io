// Function to build the sentence
function makeSentence() {
  // Get values from inputs
  let noun = document.getElementById("nounInput").value;
  let verb = document.getElementById("verbInput").value;
  let adjective = document.getElementById("adjInput").value;


  // Error handling: check for empty inputs
  if (noun === "" || verb === "" || adjective === "") {
    document.getElementById("outputArea").textContent = "Please fill in all three words!";
    return;
  }


  // Build silly sentence
  let sentence = `The ${adjective} ${noun} decided to ${verb} all day long.`;


  // Update the page
  document.getElementById("outputArea").textContent = sentence;
}


// Event listener for button click
document.getElementById("generateBtn").addEventListener("click", makeSentence); 


// Extra event listener: live preview when typing adjective
document.getElementById("adjInput").addEventListener("input", function() {
  document.getElementById("outputArea").textContent = "Typing adjective: " + this.value;
});