import { Fragment } from 'react';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <CharacterList />
      </div>
    </Fragment>
  );
}

export default App;
