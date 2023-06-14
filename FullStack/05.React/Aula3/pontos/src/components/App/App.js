import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./App.scss";
import BasicForm from "../BasicForm/BasicForm";

function App() {
  const [value, setValue] = useState(0);
  const [plus5, setPlus5] = useState(0);
  const [gameLive, setGameLive] = useState(true);
  const [valueApi, setValueApi] = useState([]);

  useEffect(() => {
    if (gameLive) {
      if (value >= 10) {
        alert("Vitória");
        setGameLive(false);
      } else if (value <= -10) {
        alert("Derrota");
        setGameLive(false);
      }
    }
  }, [gameLive, value]);

  // useEffect(() => {
  //   printApi();
  // }, []);

  const add = () => setValue(value + 1);
  const subtract = () => setValue(value - 1);
  const addPlus5 = () => {
    setValue(value + 5);
    setPlus5(plus5 + 1);
  };
  const subPlus5 = () => {
    setValue(value - 5);
    setPlus5(plus5 - 1);
  };

  const buttons = [
    {
      children: "+ Button",
      click: add,
    },
    { children: "- Button", click: subtract },
    {
      click: addPlus5,
      children: "+ 5",
    },
    {
      click: subPlus5,
      children: "- 5",
    },
    {
      click: printApi,
      children: "Fetch API",
    },
  ];

  async function printApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await response.json();
    setValueApi(postsData);
  }

  return (
    <div className="App">
      <p>Counter: {value}</p>
      <p>Counter plus 5: {plus5}</p>
      {buttons.map((button, index) => (
        <Button key={index} click={button.click}>
          {button.children}
        </Button>
      ))}
      <section>
        {valueApi.map((valor) => (
          <div key={valor.id}>
            <p>Title: {valor.title}</p>
            <p>Body: {valor.body}</p>
          </div>
        ))}
      </section>
      <div>
        <BasicForm />
      </div>
    </div>
  );
}

export default App;
