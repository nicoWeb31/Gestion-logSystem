import React, { useEffect } from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './component/layout/search-bar/SearchBar';
import Logs from './component/logs/Logs';
import AddBtn from './component/layout/addBtn/AddBtn';
import AddLog from './component/logs/AddLog';
import EditLog from './component/logs/EditLog';
import AddTechModal from './component/tech/AddTechModal';
import TechListModal from './component/tech/TechListModal';

import { Provider } from 'react-redux';
import store from './redux-store/store';


const App = () => {
  useEffect(() => {
    //initialiaze materialize js
    M.AutoInit();
  })


  return (

    <Provider store={store}>

      <React.Fragment>

        <SearchBar />
        <div className="container">
          <AddBtn />
          <Logs />
          <AddLog />
          <EditLog />
          <AddTechModal />
          <TechListModal />
        </div>


      </React.Fragment>
    </Provider>
  );
}

export default App;
