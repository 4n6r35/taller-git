const cardContainer = document.getElementById("seriesContainer");
const data = "./data-series.json";

for (let item in data) {
  if (data.hasOwnProperty(item)) {
    const seriesData = data[item];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2><b>name:<b> ${seriesData.name}</h2>
        <img src="${serie.image}" alt="${serie.name}">
            <p><strong>Categoría:</strong> ${serie.category}</p>
            <p><strong>Descripción:</strong> ${serie.description}</p>
            <p><strong>Protagonistas:</strong> ${serie.protagonists}</p>
        `;

        cardContainer.appendChild(card)
  }
}
