import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Seen } from "./components/Seen";
import { WeightLose } from "./components/WeightLose";


function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Seen/>
      <WeightLose/>
    </div>
  );
}

export default App;
