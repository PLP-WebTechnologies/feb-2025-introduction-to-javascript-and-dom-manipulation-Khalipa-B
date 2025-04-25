document.getElementById("updateBtn").addEventListener("click", function () {
  const title = document.getElementById("page-title");
  const fact = document.getElementById("fact");

  title.textContent = "Explore the Wonders of Africa!";
  fact.textContent =
    "Africa is home to the Sahara, the largest hot desert in the world.";

  title.style.color = "#f4f4f4";
  fact.style.backgroundColor = "#dff0d8";
  fact.style.padding = "1rem";
  fact.style.borderRadius = "8px";
});

document.getElementById("toggleBtn").addEventListener("click", function () {
  const container = document.getElementById("factContainer");
  const existingFact = document.getElementById("newFact");

  if (existingFact) {
    container.removeChild(existingFact);
  } else {
    const newFact = document.createElement("p");
    newFact.id = "newFact";
    newFact.textContent =
      "Mount Kilimanjaro in Tanzania is the highest peak in Africa!";
    newFact.style.color = "#1a5276";
    newFact.style.marginTop = "1rem";
    container.appendChild(newFact);
  }
});
