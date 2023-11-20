function calculate() {
  var altura = document.querySelector("#altura").value;
  var peso = document.querySelector("#peso").value;

  if (altura !== "" && peso !== "") {
    var imc = peso / altura ** 2;
    document.querySelector(".resultado").innerHTML =
      "Seu imc é " + imc.toFixed(2);
  }
}
var btn = document.querySelector("#btn");
btn.addEventListener("click", calculate);
