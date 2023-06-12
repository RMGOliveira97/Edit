import Bottom from "../Bottom/Bottom";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./App.scss";

function App() {
  const saveUserData = () => {
    alert("Data Save");
  };
  const test = () => {
    alert("Test");
  };

  const cards = [
    {
      click: saveUserData,
      nameSize: "px18",
    },
    {
      click: test,
      colorText: "red",
      borderImage: "px3",
    },
  ];


  return (
    <div className="app">
      <Header></Header>
      <div className="body">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card
              nameSize={card.nameSize}
              click={card.click}
              colorText={card.colorText}
              borderImage={card.borderImage}
            ></Card>
          ))
        ) : (
          <p>Não exite info</p>
        )}
      </div>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
