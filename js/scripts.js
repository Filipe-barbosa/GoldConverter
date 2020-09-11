const value2Gold = {
  Dolar: {
    displayName: "Dolar",
    abbreviation: "USD",
    flagCode: "\ud83c\uddfa\ud83c\uddf8",
    value: 5.0,
  },
  "Dolar Autraliano": {
    displayName: "Dolar Autraliano",
    abbreviation: "AUD",
    flagCode: "\ud83c\udde6\ud83c\uddfa",
    value: 4,
  },
  "Dolar Canadense": {
    abbreviation: "CAD",
    displayName: "Dolar Canadense",
    flagCode: "\ud83c\udde8\ud83c\udde6",
    value: 4.22,
  },
  Euro: {
    abbreviation: "EUR",
    displayName: "Euro",
    flagCode: "\uD83C\uDDEA\uD83C\uDDFA",
    value: 6.59,
  },
  "Franco Suiço": {
    abbreviation: "SFr",
    displayName: "Franco Suiço",
    flagCode: "\ud83c\uddeb\ud83c\uddf7",
    value: 6.21,
  },
  "Libra Estrelina": {
    abbreviation: "GPB",
    displayName: "Libra Estrelina",
    flagCode: "\ud83c\udded\ud83c\uddf2",
    value: 7.35,
  },
  "Lira Turca": {
    abbreviation: "Tl",
    displayName: "Lira Turca",
    flagCode: "\ud83c\uddf9\ud83c\uddf7",
    value: 0.76,
  },
  "Lira Turca": {
    abbreviation: "Tl",
    displayName: "Lira Turca",
    flagCode: "\ud83c\uddf9\ud83c\uddf7",
    value: 0.76,
  },
  Real: {
    abbreviation: "BRl",
    displayName: "Real",
    flagCode: "\ud83c\udde7\ud83c\uddf7",
    value: 1,
  },
  Renminbi: {
    abbreviation: "RMB",
    displayName: "Renminbi",
    flagCode: "\ud83c\udde8\ud83c\uddf3",
    value: 0.076,
  },
  "Peso Argentino": {
    abbreviation: "ARS",
    displayName: "Peso Argentino",
    flagCode: "\ud83c\udde6\ud83c\uddf7",
    value: 0.8,
  },
};

function generateHtmlOptions(selectedCurrency) {
  const options = [];
  for (let [key, value] of Object.entries(value2Gold)) {
    const optionDynamicPart = `value="${key}">${value["flagCode"]} ${value["displayName"]} ${value["abbreviation"]}`;

    if (selectedCurrency != null && key === selectedCurrency) {
      options.push(`<option selected ${optionDynamicPart}</option>`);
    } else {
      options.push(`<option ${optionDynamicPart}</option>`);
    }
  }
  return options;
}

function loadCurrencyOptions() {
  document.getElementById("gold-select").innerHTML = generateHtmlOptions(
    "Dolar"
  );
  document.getElementById("gold-converter").innerHTML = generateHtmlOptions(
    "Real"
  );
}

function getCurrencyValue(selectorName) {
  const currency = $(selectorName).val();
  return value2Gold[currency]["value"];
}

function getConverter() {
  const sourceCurrency = getCurrencyValue("#gold-select");
  const destCurrency = getCurrencyValue("#gold-converter");
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

loadCurrencyOptions();
