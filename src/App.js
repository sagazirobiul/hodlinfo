import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import PriceTrade from './components/PriceTrade/PriceTrade';

function App() {
  return (
    <div className="main-content">
      <Header/>
      <PriceTrade/>
      <Table/>
      <Footer/>
    </div>
  );
}

export default App;
