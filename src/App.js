import logo from './logo.svg';
import './App.css';
import { Home } from './Form/Home';
import { ThemeProvider } from './Form/DarkLight';
import { use } from "react"
function App() {
  
  return (
    <>
      <ThemeProvider>
          <Home></Home>
      </ThemeProvider>
    
    </>
  );
}

export default App;
