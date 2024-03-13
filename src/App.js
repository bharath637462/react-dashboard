import React, { useEffect, useContext } from 'react'; // Import useState from React
import './App.css';
import { AuthProvider } from './context/Authcontext';
import MenubarCustom from './components/menubar/menubarCustom';
import CustomContainer from './components/customcontainers';



function App() {

  
  return (
    <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
      <AuthProvider>
      < MenubarCustom />
      < CustomContainer />
      </AuthProvider>
    </div>
  );
}

export default App;
