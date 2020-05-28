import React, {useState} from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  function handkeAdd(){
    setTech([...tech, 'Node.js'])
  }

  return (
    <>
      <ul>
        {tech.map(t => <li key={t}>{t}</li>)}
      </ul>
      <button type="button" onClick={handkeAdd}>Adicionar</button>
    </>
  );
}

export default App;
