
function getGoldSelector() {
  var goldselect = $("#gold-select").val();
  var goldValue= 0;
  if (goldselect== 1) {
    goldValue = 5;
  } else if (goldselect== 2) {
    goldValue = 4;
  } else if (goldselect== 3) {
    goldValue =4.22;
  } else if (goldselect== 4) {
    goldValue =6.59;
  } else if (goldselect== 5) {
    goldValue = 6.12;
  }else if (goldselect==6){
    goldValue=7.35;
  }else if(goldselect==7){
    goldValue=0.76;
  }else if (goldselect==8){
    goldValue=1;
  } else if(goldselect==9){
    goldValue=0.076;
  }else{
    goldValue=0.80;
  }
  return goldValue;
}

function getGoldConverter() {
  var goldconverter = $("#gold-converter").val();
  var inputAmount= 0;
  
  if (goldconverter== 1) {
    inputAmount = 5;
  } else if (goldconverter== 2) {
    inputAmount = 4;
  } else if (goldconverter== 3) {
    inputAmount =4.22;
  } else if (goldconverter== 4) {
    inputAmount =6.59;
  } else if (goldconverter== 5) {
    inputAmount = 6.12;
  }else if (goldconverter==6){
    inputAmount=7.35;
  }else if(goldconverter==7){
    inputAmount=0.76;
  }else if (goldconverter==8){
    inputAmount=1;
  } else if(goldconverter==9){
    inputAmount=0.076;
  }else{
    inputAmount=0.80;
  }
  return inputAmount;
}

function getConverter() {
  const sourceCurrency = getGoldSelector()
  const destCurrency = getGoldConverter()
  const resultElement = document.getElementById("gold-result");
  const inputElement = document.getElementById("gold-value");
  resultElement.value = inputElement.value *(sourceCurrency/destCurrency);
}

 function inputInverter(){
  var goldInverterSelect = document.getElementById("gold-select");
  var goldInverterConverter = document.getElementById("gold-converter");
  var aux;
   aux = goldInverterSelect.value;
   goldInverterSelect.value = goldInverterConverter.value;
   goldInverterConverter.value = aux; 
   getConverter();
 }