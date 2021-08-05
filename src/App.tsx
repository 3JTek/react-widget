import React from 'react';

const App = (): JSX.Element => {
  return (
    <div
      className='App'
      style={{ position: 'fixed', bottom: '0', width: '100vw', height: '50vh', backgroundColor: '#e8e8e8', textAlign: 'center' }}
    >
      {/* <img src={logo} width='300' /> */}
      <p>Welcome to SplashUp discovery module</p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn more
      </a>
    </div>
  );
};

export default App;
