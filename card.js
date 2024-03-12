var seriesData = {
  "serie1": {
      "name": "LA LEY DE LOS AUDACES",
      "image": "https://media.licdn.com/dms/image/C5612AQHWynbMJOba8A/article-cover_image-shrink_720_1280/0/1568209958959?e=2147483647&v=beta&t=q-HGv9_o4Znt8mczZfJc0x8_arruREJjinVXq0QqwW4",
      "category": "Drama",
      "description": "Mike Ross, un joven brillante, pero que nunca terminó la universidad, impresiona a un hábil abogado y consigue trabajo en un prestigioso bufete.",
      "protagonists": "Gabriel Macht,Patrick J. Adams,Sarah Rafferty" 
  },
  "serie2":{
      "name":"HOUSE OF CARDS",
      "image":"https://blogs.vanguardia.com/el-colombian-dream/files/2015/03/house-of-cards-seaosn-2__1406032348151.jpg",
      "category":"De intriga",
      "description": "Frank ya no está, y Claire Underwood pisa fuerte como la primera mujer presidenta de Estados Unidos. Aunque a algunos no les guste.",
      "protagonists": "Robin Wright,Michael Kelly,Diane Lane"
  },
  "serie3":{
      "name": "THE GOOD DOCTOR",
      "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-28034,resizemode-75,msid-107799972/news/international/us/why-is-the-good-doctor-ending-after-seven-seasons-heres-what-the-creators-said.jpg",
      "category": "Drama",
      "description": "Se centra en un joven cirujano con síndrome de Savant quien es reclutado en la unidad de cirugía pediátrica de un prestigioso hospital. La pregunta surgirá: ¿Realmente puede salvar vidas una persona que no tiene la capacidad de relacionarse con otras personas?",
      "protagonists": "Chuku Modu, Beau Garrett, Tamlyn Tomita"
  }
};


var seriesContainer = document.getElementById("seriesContainer");

// Recorrer el JSON y crear una tarjeta para cada serie
for (var serieKey in seriesData) {
  if (seriesData.hasOwnProperty(serieKey)) {
      var serie = seriesData[serieKey];
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <h2>${serie.name}</h2>
          <img src="${serie.image}" alt="${serie.name}">
          <p><strong>Categoría:</strong> ${serie.category}</p>
          <p><strong>Descripción:</strong> ${serie.description}</p>
          <p><strong>Protagonistas:</strong> ${serie.protagonists}</p>
      `;
      seriesContainer.appendChild(card);
  }
}
