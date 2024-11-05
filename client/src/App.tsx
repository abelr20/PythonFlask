import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ members: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/members');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return <div>{typeof data.members === 'undefined' ? <p>Loading...</p> : data.members.map((member, i) => <p key={i}>{member}</p>)}</div>;
}

export default App;
