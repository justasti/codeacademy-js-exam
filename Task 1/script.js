/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector("form");
const input = document.getElementById("search");
const output = document.getElementById("output");
const regex = /^[0-9]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value !== "" && input.value.match(regex)) {
    output.innerHTML = `1. ${input.value}kg is ${
      input.value * 2.2046
    }lb<br>2. ${input.value}kg is ${input.value / 0.001}g<br>3. ${
      input.value
    }kg is ${input.value * 35.274}oz<br>`;
    input.value = "";
  } else {
    alert("please enter a number!");
    input.value = "";
  }
});
