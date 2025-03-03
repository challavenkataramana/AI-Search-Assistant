import { useState } from "react";
import {Navbar} from "./Components/Navbar";
import {Search} from "./Components/Search";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Search />
    
    </>
  );
}

export default App;
