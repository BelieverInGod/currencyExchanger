import { useState, useEffect } from 'react';
import decoration from '../../components/resources/img/change.png';
import CurrencyServices from '../../services/CurrencyService';
import '../currencyCounter/CurrencyCounter.css';

const ItemsCurrency = {
  'USD': 0,
  'EUR': 0,
  current: 'USD',
}

function CurrencyCounter() {
  const currencyServices = new CurrencyServices();
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);
  const [currency , setCurrency] = useState(ItemsCurrency);

  useEffect (() => {
    (async ()=>{
      const res = await currencyServices.getAllCurrency()
      res.filter(item => {
        if(item.cc === 'EUR') {
          setCurrency((prev)=> ({...prev, 'EUR': +item.rate}))
        } else if (item.cc === 'USD') {
          setCurrency((prev)=> ({...prev, 'USD': +item.rate}))
       } ;
     });
    })()
  }, []);

  function changeValue(e) {
    if(e.target.name === 'input1'){ 
      setInp2((e.target.value / currency[currency.current]).toFixed(2))
      setInp1(e.target.value)
    } else if(e.target.name === 'input2'){
      setInp1((e.target.value * currency[currency.current]).toFixed(2))
      setInp2(e.target.value)
    }
  }

  function changeCurrency(e) {
    setCurrency((prev => ({...prev, current: e.target.value})))
    setInp2((inp1 / currency[e.target.value]).toFixed(2))
  }
 
  return (
    <div className="parent">
        <div className="box">
            <label htmlFor="input1">
              <select onClick={changeCurrency}>
                <option value="UAH" name="UAH">UAH</option>
              </select>
            </label>
            <input onChange={changeValue} value={inp1} placeholder='Введите значение' name='input1' type="number"/>
        </div>
        <img className="decoration" src={decoration} alt="change"/>
        <div className="box">
            <label htmlFor="input2">
              <select defaultValue={"USD"} onClick={changeCurrency}>
                <option value="USD" name="USD">USD</option>
                <option value="EUR" name="EUR">EUR</option>
              </select>
            </label>
            <input onChange={changeValue} value={inp2} placeholder='Введите значение' name="input2" type="number"/>
        </div>
    </div>

  );
}

export default CurrencyCounter;