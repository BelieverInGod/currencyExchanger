import { useState, useEffect } from 'react';

import '../headerСurrency/HeaderCurrency.css';

import CurrencyServices from '../../services/CurrencyService';


function HeaderCurrency(props) {
  const currencyServices = new CurrencyServices();
  const [currensyUSD, setCurrensyUSD] = useState();
  const [currencyEUR, setCurrensyEUR] = useState();

  useEffect(() => {
    currencyServices.getAllCurrency()
    .then(res => res.filter(item => {
       if(item.cc === 'USD') {
        setCurrensyUSD(item.rate)};
    }));
  });

  useEffect(() => {
    currencyServices.getAllCurrency()
    .then(res => res.filter(item => {
       if(item.cc === 'EUR') {
        setCurrensyEUR(item.rate)};
    }));
  });

  return (
    <div className="container">
      <h2 className="text">Актуальний курс валют:</h2>
      <div className="containerInf">

        <h2 className="information text">USD: <span className='col'>{currensyUSD}</span></h2>
        <h2 className="information text">EUR: <span className='col'>{currencyEUR}</span></h2>
      </div>
    </div>
  );
}

export default HeaderCurrency;
