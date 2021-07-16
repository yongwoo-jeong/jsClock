const quoteDiv = document.querySelector(".js-quoteDiv");

const quoteNumber = 5;

function showQuote(number) {
  quote = [
    "The greatest glory in living lies not in never falling,\nbut in rising every time we fall. \n-Nelson Mandela",
    "The way to get started is to quit talking and begin doing. \n-Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. \nDon't be trapped by dogma – which is living with the results of other people's thinking.\n-Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. \n-Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more.\nIf you look at what you don't have in life, you'll never have enough. \n-Oprah Winfrey",
  ];
  quoteDiv.textContent = quote[number];
}
function getRandom() {
  const number = Math.floor(Math.random() * quoteNumber);
  return number;
}

function init() {
  const randomNumber = getRandom();
  showQuote(randomNumber);
}
init();
