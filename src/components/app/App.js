import './App.css';

import HeaderCurrency from '../headerСurrency/HeaderCurrency';
import CurrencyCounter from '../currencyCounter/CurrencyCounter';

import decoration from '../../components/resources/img/money.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeaderCurrency/>
      <img className="bg-decoration" src={decoration} alt="money"/>
      </header>
      <CurrencyCounter/>
    </div>
  );
}

export default App;
