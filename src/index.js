import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import TemporaryDrawer from './components/Drawer';



ReactDOM.render(
  <React.StrictMode>
    {/* <div style = {{paddingTop:'100px'}}><Tab/></div> */}
    <div style = {{display:'flex'}}>
  
    <TemporaryDrawer/>
    {/* <TemporaryDrawer/>
    <TemporaryDrawer/> */}
    <div style = {{paddingTop:'100px'}}><App /></div>
  
    </div>
    </React.StrictMode>,
  document.getElementById('root')
);
