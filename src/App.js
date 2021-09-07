import './App.css';
import React from 'react';
 import Bar from './components/Checkbox/Bar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

const ThemeContext = React.createContext({
sidebarState : true
})
function App() {
  return (
    
    <div className="App">
       <NavBar/>
    </div>
  );
}

export default App;
