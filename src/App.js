import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import {data} from "./helper/data"
import { useState } from 'react';



function App() {
const [searchPlayer,setSearchPlayer]=useState("")

  return (
    <div>
      <Header searchPlayer={searchPlayer} setSearchPlayer={setSearchPlayer}/>
      <CardContainer data={data} searchPlayer={searchPlayer}/>     
    </div>
  );
}

export default App;
