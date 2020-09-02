
function getGoldSelector() {
  return convertCurrency(getValueToConvert("#gold-select"))
}

function getGoldConverter() {
  return convertCurrency(getValueToConvert("#gold-converter"))
}

function getValueToConvert(selectorName) {
  return $(selectorName).val()
}

function convertCurrency(value) {
  if (value == 1) {
    return 5;
  } else if (value == 2) {
    return 4;
  } else if (value == 3) {
    return 4.22;
  } else if (value == 4) {
    return 6.59;
  } else if (value == 5) {
    return 6.12;
  } else if (value == 6) {
    return 7.35;
  } else if (value == 7) {
    return 0.76;
  } else if (value == 8) {
    return 1;
  } else if (value == 9) {
    return 0.076;
  } else {
    return 0.80;
  }
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
  var aux;
  aux = goldInverterSelect.value;
  goldInverterSelect.value = goldInverterConverter.value;
  goldInverterConverter.value = aux;
  getConverter();
}