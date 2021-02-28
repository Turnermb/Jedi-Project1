let userInput, pricingData;

const $bitCoin = $("#bitcoinValue");
const $currency = $("#currencyDisplay");
const $input = $('input[type="text"]');
const $currencyInput = $("#currencyInput");

const getPricingData = (data) => {
  event.preventDefault();
  userInput = $input.val();
  console.log(userInput);

  $.ajax({
    url:
      "https://api.coinbase.com/v2/prices/BTC-" +
      userInput.toUpperCase() +
      "/buy",
  }).then(
    (data) => {
      pricingData = data;
      displayResults();
    },
    (error) => {
      console.log("Invalid Request", error);
    }
  );
};

const getCurrencyData = (data) => {
  event.preventDefault();
  currentInput = $currencyInput.val();
  console.log(currentInput);

  $.ajax({
    url: "https://openexchangerates.org/api/currencies.json",
  }).then(
    (data) => {
      currencyData = data;
      findCurrencies();
    },
    (error) => {
      console.log("Invalid Request", error);
    }
  );
};

$("#bitcoinForm").on("submit", getPricingData);

const displayResults = () => {
  $bitCoin.text(pricingData.data.amount + " " + userInput.toUpperCase());
};

// const displayCurrencies = () => {
//   $currency.text(findCurrencies);
// };

const findCurrencies = () => {
  for (const [key, value] of Object.entries(currencyData)) {
    console.log(currencyData);
    if (`${value}`.toUpperCase() === currentInput.toUpperCase()) {
      $currency.text(`${key}: ${value}`);
    }
  }
};

$("#currencyForm").on("submit", getCurrencyData);

const showHide = () => {
  let popup = document.querySelector(".currencyDivText");
  popup.classList.toggle("show");
};
