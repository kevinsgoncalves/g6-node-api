import { useState } from "react";

export default function Carros() {
  const [busca, setBusca] = useState("");

  const carros = [
    { id: 1, marca: "Ford", modelo: "Ka" },
    { id: 2, marca: "Ford", modelo: "Focus" },
    { id: 3, marca: "Chevrolet", modelo: "Onix" },
    { id: 4, marca: "Fiat", modelo: "Argo" },
    { id: 5, marca: "Volkswagen", modelo: "Gol" },
    { id: 6, marca: "Toyota", modelo: "Corolla" },
  ];

  const carrosFiltrados = carros.filter((carro) =>
    carro.marca.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Busca de Carros</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Digite a marca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <ul className="list-group">
        {carrosFiltrados.map((carro) => (
          <li key={carro.id} className="list-group-item">
            {carro.marca} - {carro.modelo}
          </li>
        ))}
      </ul>
    </div>
  );
}