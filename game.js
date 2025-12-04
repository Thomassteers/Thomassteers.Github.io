
function makeSentence() {
  let noun = document.getElementById("nounInput").value;
  let verb = document.getElementById("verbInput").value;
  let adjective = document.getElementById("adjInput").value;

  
  if (noun === "" || verb === "" || adjective === "") {
    document.getElementById("outputArea").textContent = "Please fill in all three words!";
    return;
  }

  let sentence = `The ${adjective} ${noun} decided to ${verb} all day long.`;

  document.getElementById("outputArea").textContent = sentence;
}

document.getElementById("generateBtn").addEventListener("click", makeSentence); 

document.getElementById("adjInput").addEventListener("input", function() {
  document.getElementById("outputArea").textContent = "Typing adjective: " + this.value;
});