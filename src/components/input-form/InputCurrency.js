import React from "react";
import "./input-currency.scss";
import InputSeachCurrency from "./InputSearchCurrency";
import InputUnit from "./InputUnit";
import SearchCurrencyButton from "./SearchCurrencyButton";

const InputCurrency = ({
  unit,
  changeUnit,
  searchCurrency,
  changeSearchCurrency,
  changeBaseCurrency,
  submitButtonText
}) => {
  return (
    <form className="currency-conversion-form">
      <InputUnit unit={unit} handleUnitChange={changeUnit} />
      <InputSeachCurrency searchCurrency={searchCurrency} handleSearchCurrencyChange={changeSearchCurrency} />
      <SearchCurrencyButton buttonText={submitButtonText} changeBaseCurrency={changeBaseCurrency} />
    </form>
  );
};

export default InputCurrency;