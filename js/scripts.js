
const value2Gold = {
  '\ud83c\udde7\ud83c\uddf7 Dolar ': 5, 'Dolar Autraliano': 4, 'Dolar Canadense': 4.22,
  'Euro': 6.59, 'Franco Suiço': 6.12, 'Libra Estrelina': 7.35,
  'Lira Turca': 0.76, 'Real': 1, 'Renminbi': 0.076,
  'Peso Argentino': 0.80
}

function generateHtmlOptions(selectedCurrency) {
  const options = []
  for (const currency of Object.keys(value2Gold)) {
    if (selectedCurrency != null && currency === selectedCurrency) {
      options.push(`<option selected>${currency}</option>`)
    } else {
      options.push(`<option>${currency}</option>`)
    }
  }
  return options
}

function loadCurrencyOptions() {
  document.getElementById("gold-select").innerHTML = generateHtmlOptions("Dolar")
  document.getElementById("gold-converter").innerHTML = generateHtmlOptions("Real")
  '\ud83c\udde7\ud83c\uddf7'
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

loadCurrencyOptions()