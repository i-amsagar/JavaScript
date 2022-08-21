function ageInDays() {
  const d = new Date();
  let year = d.getFullYear();

  var birthYear = document.getElementById("years").value;
  var bYear = (year - birthYear) * 365;
  var message = document.getElementById("message");

  message.textContent = "🎉You are " + bYear + " " + "days old.";
  message.style.color = "#21cdd3";
}
 
function reset() {
  document.getElementById("message").textContent = "";
  document.getElementById("years").value = "";
}