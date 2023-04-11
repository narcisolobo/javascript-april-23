import { Fragment } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
