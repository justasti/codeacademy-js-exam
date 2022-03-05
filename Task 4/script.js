/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      output.innerHTML += `<div class="brand"><h2>${data[i].brand}</h2><ul class="models"></ul></div>`;
      for (let j = 0; j < data[i].models.length; j++) {
        document.querySelectorAll(".models")[
          i
        ].innerHTML += `<li>${data[i].models[j]}</li>`;
      }
    }
  });
