# How Much is a BitCoin Right Now?

---

With the recent uptick in awareness of crypto currency in the public trading space. I wanted to build a tool that would give the price for the most well known of them; BitCoin. Luckily, CoinBase provides an API that does just that, along with many other features that I wasn't able to take advantage of at this time.

## CoinBase API documentation

```
https://developers.coinbase.com/api/v2#prices
```

This documentation goes over the basics of making a call to the CoinBase server as well as some other functions that I haven't added at this time.

For this project I decided to use the spot price, which shows the current market price for one BitCoin. Though it's only acurate for seconds at a time, I felt like it would give at the very least a general idea of what the going rate was. The spot price can also show prices for specific dates, though that feature has yet to be implemented.

Including:

- Sell Price: The current selling rate for one BitCoin or Ether (with the CoinBase 1% fee)
- Buy Price: The current buying rate for one BitCoin or Ether (with the CoinBase 1% fee)
- Exchange Rates: Lists exchange rates between other currencies. I did wind up using a different one for reasons I'll get into later.
- Time: Retrieves the server time.

---

CoinBase also hosts an Exchange API that can be used to buy and sell crypto currency. Which requires more strict security protocols than I'm currently capable of providing.

## Open Exchange Rates API Documentation

```
https://docs.openexchangerates.org/docs/api-introduction
```

This API was very easy to work with since the data it returns is an object filled with objects, each with their own currency.

The reason that I had decided to go with this particular API is that since the CoinBase API works using specific currency codes, people who didn't happen to know their currency code would have to leave the page to google it, come back, type it in and only then would the information they were looking for populate. I decided to save those few steps so that the user could get all the data they needed in one place. Something that this API offers is the names of the countries of the world along with the names of their currency, which was absent in the CoinBase API. _** Edit: I have since discovered that this is not the case, but it already works and I'm not doing it again.**_

The challenge I faced when working with this API was trying to figure out how I was going to take a piece of the data that was returned (ex. "Dollar" from "United States Dollar") and return both the currency code and name of the currency along with it. What I wound up doing was converting the object value into a string with `.string()` and then searching for matches to the user input with `.search()`.

## To-Do List

- Click anywhere to clear popup instead of only button (unsure of necessity).
- See about fixing entire database populating when popup search box is submitted while empty.
