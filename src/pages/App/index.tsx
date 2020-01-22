import React from 'react';
import './App.scss';

import headerIMG from './images/timg.gif';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="top">
        <img src={headerIMG} alt="" />
      </div>
    </div>
  );
}

export default App;
