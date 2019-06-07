import axios from "axios";
import * as Constants from "./constants";

export const ApiFetcher = async baseCurrencyCode => {
  const API_END_POINT = Constants.EXCHANGE_RATES_API + `latest?base=${baseCurrencyCode}`;
  let fetchedData;
  try {
    const requestData = await axios(API_END_POINT);
    fetchedData = await requestData.data.rates;
  } catch (error) {
    fetchedData = {};
  }
  return await fetchedData;
};

export const ApiModifier = (requestData, baseUnits, baseCurrencyCode) => {
  let outputData = {};
  outputData[Constants.BASE_UNITS] = baseUnits;
  outputData[Constants.BASE_CURRENCY_CODE] = baseCurrencyCode;
  outputData[Constants.RATES] = [];

  if (Object.keys(requestData).length >= 1) {
    for (const currencyCode in requestData) {
      const currencyRateObj = {};
      currencyRateObj[Constants.CURRENCY_CODE] = currencyCode;
      currencyRateObj[Constants.CURRENCY_UNITS] = requestData[currencyCode] * baseUnits;
      outputData.rates.push(currencyRateObj);
    }
  }

  return outputData;
};
