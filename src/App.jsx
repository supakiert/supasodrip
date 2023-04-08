import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <About />
        <Experience />
      </div>
    </BrowserRouter>
  );
};

export default App;
