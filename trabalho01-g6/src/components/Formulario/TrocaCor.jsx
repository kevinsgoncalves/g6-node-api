import { useEffect, useState } from "react";

export default function TrocaCor() {
  const cores = [
    "#60026d",
    "#cd0a0e",
    "#fff",
    "#0d026d"
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = cores[indice];
  }, [indice]);

  const alterarCor = () => {
    setIndice((indice + 1) % cores.length);
  };

  return (
    <div className="container mt-5">
      <h2>Alteração de Cor</h2>

      <h4>Cor atual:</h4>

      <div className="alert alert-secondary">
        {cores[indice]}
      </div>

      <button
        className="btn btn-success"
        onClick={alterarCor}
      >
        Alterar Cor
      </button>
    </div>
  );
}