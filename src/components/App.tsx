import React from 'react';
import HomepageHeader from './HomepageHeader';
import '../styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <img src="./images/adoption.jpg"/> */}
        <HomepageHeader />
    </div>
  );
}

export default App;
