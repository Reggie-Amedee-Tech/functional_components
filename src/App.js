import PersonCard from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Of Rivia"} firstName={"Geralt"} age={105} hairColor={"White"}/>
      <PersonCard lastName={"Yagami"} firstName={"Iori"} age={38} hairColor={"Red"}/>
      <PersonCard lastName={"Howard"} firstName={"Rock"} age={19} hairColor={"Blonde"}/>
      <PersonCard lastName={"Mishima"} firstName={"Jin"} age={27} hairColor={"Black"}/>
    </div>
  );
}

export default App;
