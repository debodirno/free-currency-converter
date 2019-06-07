import React from "react";
import * as Constants from "./../../core/constants";
import "./currency-information.scss";
import CurrencyRow from "./CurrencyRow";

const CurrencyCard = ({ currenciesData }) => {
  console.log("Currencies data", currenciesData);
  const baseUnits = currenciesData[Constants.BASE_UNITS];
  const baseCurrency = currenciesData[Constants.BASE_CURRENCY_CODE];

  return (
    <div className="currency-card">
      <ul>
        {currenciesData.rates.map(
          currencyData =>
            currencyData &&
            baseCurrency !== currencyData[Constants.CURRENCY_CODE] && (
              <CurrencyRow
                key={"currency-row-" + currencyData[Constants.CURRENCY_CODE]}
                units={baseUnits}
                baseCurrency={baseCurrency}
                finalUnits={currencyData[Constants.CURRENCY_UNITS].toFixed(3)}
                finalCurrency={currencyData[Constants.CURRENCY_CODE]}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default CurrencyCard;
