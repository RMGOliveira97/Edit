import Botao from '../Botao/Botao';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card btnText="click me" text="Lorem Ipsum" />
      <Botao>Label</Botao>
    </div>
  );
}

export default App;
