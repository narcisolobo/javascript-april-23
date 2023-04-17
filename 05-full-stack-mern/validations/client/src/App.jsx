// axios request - api route
import { Fragment } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ArrayForm from './components/ArrayForm';
import ObjectForm from './components/ObjectForm';
import Success from './components/Success';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/array" />} />
          <Route path="/array" element={<ArrayForm />} />
          <Route path="/object" element={<ObjectForm />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
