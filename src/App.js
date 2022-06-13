import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "./components/state-tutorial";
import ReducerTutorial from "./components/reducer-tutorial";
import EffectTutorial from "./components/affect-tutorial";
import RefTutorial from "./components/ref-tutorial";
import LayoutEffectTutorial from "./components/layout-effect-tutorial";
import ImpreativeHandle from "./components/imperative-handle";

function App() {
  const Welcome = (props) => <h1>Welcome to {props.name}</h1>;

  return (
    <div className="App">
      {/* <StateTutorial></StateTutorial> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial></EffectTutorial> */}
      {/* <RefTutorial /> */}
      {/* <LayoutEffectTutorial /> */}
      <ImpreativeHandle />
    </div>
  );
}

export default App;
