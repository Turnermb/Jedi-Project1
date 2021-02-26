// 404003-MusicPic-HKGVIEYD
// Access-Control-Allow-Origin: https://tastedive.com
let userInput, musicData;

const $cosHeader = $("#cosHeader");
const $similarTo = $("#similarTo");
const $results = $("#results");
const $input = $('input[type="text"]');

// $("form").on("submit", getMusicData);

const getMusicData = (data) => {
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

$("form").on("submit", getMusicData);

const displayResults = () => {
  $similarTo.text(pricingData.data.amount + userInput.toUpperCase());
};
