import "./App.css";
import ChildComponent from "./ChildComponent";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ChildComponent />
      </RecoilRoot>
    </div>
  );
}

export default App;
