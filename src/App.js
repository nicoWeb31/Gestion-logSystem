import React, { useEffect } from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './component/layout/search-bar/SearchBar';
import Logs from './component/logs/Logs';

const App = () => {
  useEffect(() => {
    //initialiaze materialize js
    M.AutoInit();
  })


  return (
    <React.Fragment>

      <SearchBar />
      <div className="container">
        <Logs />
      </div>


    </React.Fragment>
  );
}

export default App;
