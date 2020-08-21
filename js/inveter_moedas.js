function inveter_moedas() {
  var testeinverte1 = document.getElementById("gold-select");
  var testeinverte2 = document.getElementById("gold-converter");
  var aux;
  aux = testeinverte1.value;
  testeinverte1.value = testeinverte2.value;
  testeinverte2.value = aux;
}
