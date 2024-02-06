import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Seen } from "./components/Seen";
import { Table } from "./components/Table";
import { WeightLose } from "./components/WeightLose";
import {  Questions} from "./components/Questions";

function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Seen/>
      <WeightLose/>
      <Table/>
      <Questions/>
    </div>
  );
}

export default App;
