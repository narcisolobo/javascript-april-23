// axios request - api route
import { Fragment } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Detail from './components/Detail';
import EditDogForm from './components/EditDogForm';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/dogs" />} />
          <Route path="/dogs" element={<Main />} />
          <Route path="/dogs/:id" element={<Detail />} />
          <Route path="/dogs/:id/edit" element={<EditDogForm />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
