
import './App.css';
import EmptyBoard from "./components/EmptyBoard.js";


function App() {
  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      <EmptyBoard type='add'/>
    </div>
  );
}

export default App;
