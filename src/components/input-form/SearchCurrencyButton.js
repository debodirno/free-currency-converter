import React from "react";

const SearchCurrencyButton = ({ buttonText, changeBaseCurrency }) => {
  const handleCurrencySubmit = changeBaseCurrency;
  return (
    <button className="currency-convert" type="submit" onClick={handleCurrencySubmit}>
      {buttonText}
    </button>
  );
};

export default SearchCurrencyButton;
