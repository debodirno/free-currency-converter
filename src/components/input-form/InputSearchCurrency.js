import React from "react";

const InputSeachCurrency = ({searchCurrency, handleSearchCurrencyChange}) => {
  return (
    <input
      className="base-currency-input"
      type="text"
      placeholder="Enter the currency code"
      value={searchCurrency}
      onChange={handleSearchCurrencyChange}
    />
  );
};

export default InputSeachCurrency;