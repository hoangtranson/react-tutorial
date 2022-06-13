import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "./components/useState";
import ReducerTutorial from "./components/useReducer";
import EffectTutorial from "./components/useEffect";
import RefTutorial from "./components/useRef";
import LayoutEffectTutorial from "./components/useLayoutEffect";
import ImpreativeHandle from "./components/useImperativeHandle";

function App() {

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
