import { Fragment } from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import LocationDetails from './components/LocationDetails';
import { Navigate, Route, Routes } from 'react-router-dom';
import Locations from './components/Locations';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Form />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationDetails />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
