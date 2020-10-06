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
  Real: {
    abbreviation: "BRL",
    displayName: "Real",
    flagCode: "\ud83c\udde7\ud83c\uddf7",
    value: 1,
  },
  "Peso Argentino": {
    abbreviation: "ARS",
    displayName: "Peso Argentino",
    flagCode: "\ud83c\udde6\ud83c\uddf7",
    value: 0.8,
  },
};

const generateHtmlOptions = (selectedCurrency) => {
  const options = [];
  for (let [currencyIdentifier, currencyDetails] of Object.entries(
    value2Gold
  )) {
    const optionDynamicPart = `value="${currencyIdentifier}">${currencyDetails["flagCode"]} 
    ${currencyDetails["displayName"]} ${currencyDetails["abbreviation"]}`;

    if (selectedCurrency != null && currencyIdentifier === selectedCurrency) {
      options.push(`<option selected ${optionDynamicPart}</option>`);
    } else {
      options.push(`<option ${optionDynamicPart}</option>`);
    }
  }
  return options;
};

const loadCurrencyOptions = () => {
  document.getElementById("gold-select").innerHTML = generateHtmlOptions(
    "Dolar"
  );
  document.getElementById("gold-converter").innerHTML = generateHtmlOptions(
    "Real"
  );
};

const getCurrencyNameIntoToAbreviation = (selectorName) => {
  const currency = $(selectorName).val();
  return value2Gold[currency]["abbreviation"];
};

const converterCurrencysAndDisplayValue = () => {
  const sourceCurrency = getCurrencyNameIntoToAbreviation("#gold-select");
  const destCurrency = getCurrencyNameIntoToAbreviation("#gold-converter");
  getValueInApiAndCoverter();
};

const flipSelectedCurrency = () => {
  const currencyInverterSelect = document.getElementById("gold-select");
  const currencyInverterConverter = document.getElementById("gold-converter");
  const currencyInveterOperationAux = currencyInverterSelect.value;
  currencyInverterSelect.value = currencyInverterConverter.value;
  currencyInverterConverter.value = currencyInveterOperationAux;
  converterCurrencysAndDisplayValue();
};
const getValueInApiAndCoverter = () => {
  fetch(
    `https://api.exchangeratesapi.io/latest?base=${getCurrencyNameIntoToAbreviation(
      "#gold-select"
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      const currencyValue =
        data["rates"][getCurrencyNameIntoToAbreviation("#gold-converter")];
      console.log(currencyValue);
      const resultElement = document.getElementById("gold-result");
      const inputElement = document.getElementById("gold-value");
      resultElement.value = inputElement.value * currencyValue;
    });
};

loadCurrencyOptions();

//function getdatepicker() {
//  console.log("datepicker")
//  console.log($('#datetimepicker1').datetimepicker())
//};

//getdatepicker()