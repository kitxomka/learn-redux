import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Counter from './components/Counter';
import CounterB from './components/CounterB';
import { GlobalStyles  } from './global';
import { lightTheme, darkTheme } from './themes';
import './App.css';


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <button onClick={toggleTheme}>Change theme</button>
        <Counter/>
        <CounterB/>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
