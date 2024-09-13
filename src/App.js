import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./store/appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
