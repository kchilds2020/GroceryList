import React, {useState,useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import styled from 'styled-components'
import Groceries from './components/Groceries'
import AddItemInput from './components/AddItemInput'

function App() {

  const [listkey, setListKey] = useState('')
  const [groceries, setGroceries] = useState('')

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get('listkey');
    setListKey(key)

  }, [])

  return (
    <div className="App">
      <NavBar listkey={listkey}/>
        <Container>
          <AddItemInput listkey={listkey} groceries={groceries} setGroceries={setGroceries}/>
          <Groceries listkey={listkey} groceries={groceries} setGroceries={setGroceries}/>
        </Container>
    </div>
  );
}

export default App;




export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
`;
