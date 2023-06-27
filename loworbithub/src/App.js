//import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar'
import MainContent from './MainContent'
import backgroundImage from './bg.webp'


const App = () => {
  const [url, setUrl] = useState("/bg");
  return (
    <div className="App" style={{ '--background-image': `url(${backgroundImage})` }}>
      <div className="App-Logo-Parent">
        <div className="App-Logo">
          <pre>

            <p> ██▓     ▒█████   █     █░    ▒█████   ██▀███   ▄▄▄▄    ██▓▄▄▄█████▓    ██░ ██  █    ██  ▄▄▄▄   </p>
            <p>▓██▒    ▒██▒  ██▒▓█░ █ ░█░   ▒██▒  ██▒▓██ ▒ ██▒▓█████▄ ▓██▒▓  ██▒ ▓▒   ▓██░ ██▒ ██  ▓██▒▓█████▄ </p>
            <p>▒██░    ▒██░  ██▒▒█░ █ ░█    ▒██░  ██▒▓██ ░▄█ ▒▒██▒ ▄██▒██▒▒ ▓██░ ▒░   ▒██▀▀██░▓██  ▒██░▒██▒ ▄██</p>
            <p>▒██░    ▒██   ██░░█░ █ ░█    ▒██   ██░▒██▀▀█▄  ▒██░█▀  ░██░░ ▓██▓ ░    ░▓█ ░██ ▓▓█  ░██░▒██░█▀  </p>
            <p>░██████▒░ ████▓▒░░░██▒██▓    ░ ████▓▒░░██▓ ▒██▒░▓█  ▀█▓░██░  ▒██▒ ░    ░▓█▒░██▓▒▒█████▓ ░▓█  ▀█▓</p>
            <p>░ ▒░▓  ░░ ▒░▒░▒░ ░ ▓░▒ ▒     ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░▒▓███▀▒░▓    ▒ ░░       ▒ ░░▒░▒░▒▓▒ ▒ ▒ ░▒▓███▀▒</p>
            <p>░ ░ ▒  ░  ░ ▒ ▒░   ▒ ░ ░       ░ ▒ ▒░   ░▒ ░ ▒░▒░▒   ░  ▒ ░    ░        ▒ ░▒░ ░░░▒░ ░ ░ ▒░▒   ░ </p>
            <p>  ░ ░   ░ ░ ░ ▒    ░   ░     ░ ░ ░ ▒    ░░   ░  ░    ░  ▒ ░  ░          ░  ░░ ░ ░░░ ░ ░  ░    ░ </p>
            <p>    ░  ░    ░ ░      ░           ░ ░     ░      ░       ░               ░  ░  ░   ░      ░      </p>
            <p>                                                     ░                                        ░ </p>










            </pre>
      
         </div>
        <div className="App-Logo-Mobile">
          <pre>
            <div>
              <p>_    ____ _ _ _    ____ ____ ___  _ ___    _  _ _  _ ___  </p>
              <p>|    |  | | | |    |  | |__/ |__] |  |     |__| |  | |__]</p> 
              <p>|___ |__| |_|_|    |__| |  \ |__] |  |     |  | |__| |__] </p>
            </div>

          </pre>
        </div>
        <Navbar url={url} setUrl={setUrl}/>
        <MainContent url={url}/>
      </div>
    </div>


  );
  
}

export default App;
