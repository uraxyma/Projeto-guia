import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [selectClass, setSelectClass] = useState(null);
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    fetch("./data/db.json")
      .then(response => response.jason())
      .then(data => setClassData(data.classes))
      .cath(error => console.error("erro ao carregar:", error));
  }, []);

  const handleClassSelect = (classId) => {
    const selectClass = classData.find(cls => cls.id === classIdL);
    setSelectedClass(selectClass);
  };

  return (
    <>
      <div>
        <h1>Escolha uma Classe de jogo:</h1>
      </div>
      <div>
        <button onClick={() => handleClassSelect(1)}>Berserker</button>
        <button onClick={() => handleClassSelect(2)}>Paladino</button>
        <button onClick={() => handleClassSelect(3)}>Arcano</button>
      </div>
      {selectClass && (
        <div>
          <h2>{selectClass.name}</h2>
          <p>{selectClass.passiva}</p>
        </div>
      )}
    </>
  );
};

export default App;
