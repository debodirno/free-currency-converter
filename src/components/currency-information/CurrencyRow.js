import React from "react";

const CurrencyRow = ({ units, baseCurrency, finalUnits, finalCurrency }) => {
  const row = (
    <span>
      {units} {baseCurrency} = {finalUnits} {finalCurrency}
    </span>
  );
  const key = baseCurrency + "_" + finalCurrency;
  return <li key={key}>{row}</li>;
};

export default CurrencyRow;
