import React, {useState, useEffect, useMemo} from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd(){
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storagetech = localStorage.getItem('tech');
    if(storagetech){
      setTech(JSON.parse(storagetech));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  },[tech]);

  const techSize = useMemo(()=>tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => <li key={t}>{t}</li>)}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong><br/>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
