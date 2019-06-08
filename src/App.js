import React, { useEffect, useState } from "react";
import "./App.scss";
import CurrencyCard from "./components/currency-information/CurrencyCard";
import InputCurrency from "./components/input-form/InputCurrency";
import LoadingSplashScreen from "./components/loading/LoadingSplashScreen";
import { ApiFetcher, ApiModifier } from "./core/ApiUtils";
import * as Constants from "./core/constants";

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState(Constants.DEFAULT_CURRENCY_CODE);
  const [searchCurrency, setSearchCurrency] = useState("");
  const baseCurrencyData = {};
  baseCurrencyData[Constants.BASE_UNITS] = 1;
  baseCurrencyData[Constants.BASE_CURRENCY_CODE] = 1;
  baseCurrencyData[Constants.RATES] = [];
  const [finalCurrencyData, calculateFinalCurrencyData] = useState(baseCurrencyData);
  const [searchUnit, setSearchUnit] = useState(1);
  const [baseUnit, setBaseUnit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const requestData = await ApiFetcher(baseCurrency);
      const finalRequestData = await ApiModifier(requestData, baseUnit, baseCurrency);
      calculateFinalCurrencyData(finalRequestData);
      setIsLoading(false);
    };
    fetchData();
  }, [baseUnit, baseCurrency]);

  const changeSearchCurrency = event => {
    setSearchCurrency(event.target.value);
  };

  const changeBaseCurrency = event => {
    event.preventDefault();
    setBaseCurrency(searchCurrency);
    setBaseUnit(searchUnit);
    setSearchCurrency("");
    setSearchUnit(1);
  };

  const changeSearchUnit = event => {
    if (event.target.value !== "" && !isNaN(event.target.value)) {
      setSearchUnit(parseInt(event.target.value));
    } else {
      setSearchUnit("");
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSplashScreen />
      ) : (
        <div className="main-container">
          <InputCurrency
            unit={searchUnit}
            changeUnit={changeSearchUnit}
            searchCurrency={searchCurrency}
            changeSearchCurrency={changeSearchCurrency}
            changeBaseCurrency={changeBaseCurrency}
            submitButtonText={Constants.SUBMIT_CURRENCY_BUTTON_TEXT}
          />
          {Object.keys(finalCurrencyData.rates).length > 0 ? (
            <div className="currency-conversion-information">
              <div className="base-currency-header">Base Currency : {finalCurrencyData.baseCurrencyCode}</div>
              <CurrencyCard currenciesData={finalCurrencyData} />
            </div>
          ) : (
            <div className="currency-conversion-information">
              <div className="base-currency-header">Invalid currency code : {finalCurrencyData.baseCurrencyCode} </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
