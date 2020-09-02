
const value2Gold = {
  '1': 5, '2': 4, '3': 4.22, '4': 6.59, '5': 6.12,
  '6': 7.35, '7': 0.76, '8': 1, '9': 0.076, '10': 0.80
}

function getGoldSelector() {
  const value = getValueToConvert("#gold-select")
  return value2Gold[value]
}

function getGoldConverter() {
  const value = getValueToConvert("#gold-converter")
  return value2Gold[value]
}

function getValueToConvert(selectorName) {
  return $(selectorName).val()
}

function getConverter() {
  const sourceCurrency = getGoldSelector()
  const destCurrency = getGoldConverter()
  const resultElement = document.getElementById("gold-result");
  const inputElement = document.getElementById("gold-value");
  resultElement.value = inputElement.value * (sourceCurrency / destCurrency);
}

function inputInverter() {
  var goldInverterSelect = document.getElementById("gold-select");
  var goldInverterConverter = document.getElementById("gold-converter");
  var aux = goldInverterSelect.value;
  goldInverterSelect.value = goldInverterConverter.value;
  goldInverterConverter.value = aux;
  getConverter();
}