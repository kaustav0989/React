import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
    <Counter />
    {/*<Message />  
    <Greet name="Subham" heroName="Batman">
        <p>He is a good man</p>
      </Greet>
      <Greet name="Kaustav" heroName="Hero Alam"/>
      <Welcome name="Subham" heroName="Batman"/>
      <Welcome name="Kaustav" heroName="Hero Alam"/>
      {/*<Hello />*/}
    </div>
  );
}

export default App;
