// axios request - api route
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/message')
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return message && <p>{message}</p>;
}

export default App;
