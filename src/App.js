import "./App.css";
import Card from "./Cards";
import data from "./data";

function App() {
  // function ncard(value) {
  //   ;
  // }
  return (
    <>
      <h1 className="heading_style">MOVIE LIST</h1>

      {data.map(function ncard(value) {
        return (
          <Card
            imgsrc={value.imgsrc}
            title={value.title}
            year={value.year}
            distributor={value.distributor}
            amount={value.amount}
            ranking={value.ranking}
          />
        );
      })}
    </>
  );
}

export default App;
