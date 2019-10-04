import React from "react";
import "./App.scss";
import { APP_ROOT_ELEMENT_ID } from "../constants/identifiers";
import Header from "./Header";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main" id={`${APP_ROOT_ELEMENT_ID}`}>
        <SearchResults results={[]} />
      </main>
    </div>
  );
}

export default App;
