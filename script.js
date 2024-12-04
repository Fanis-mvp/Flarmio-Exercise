function handleFormSubmit(event) {
  event.preventDefault();

  const numInput = document.getElementById("num").value;

  if (numInput > 10) {
    alert("Bingo! Your number is submitted.");
  } else {
    alert("My future employer will only accept numbers bigger than 10!");
  }
}
