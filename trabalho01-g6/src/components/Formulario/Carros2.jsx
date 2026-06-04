import { useState } from "react";


export default function Carros() {
     const carros = [
    { id: 1, marca: "Fiat", modelo: "Uno"},
    { id: 2, marca: "Chevrolet", modelo: "Onix"},
    { id: 3, marca: "Volkswagen", modelo: "Gol"},
    { id: 4, marca: "Ford", modelo: "Ka"},
    { id: 5, marca: "Renault", modelo: "Sandero"}
     ];

    const marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen", "Renault"];

    const [ marcaSelecionada, setMarcaSelecionada] = useState("");

    const carrosFiltados = carros.filter((carro) => carro.marca === marcaSelecionada);

  return (
    <div>
        <h2>Lista de Carros</h2>

        <label >Filtar por Marca:</label>
        <select value={marcaSelecionada} onChange={(e) => setMarcaSelecionada(e.target.value)}>
            {marcas.map((marca) => (
                <option key={marca} value={marca}>{marca}</option>
            ))}
        </select>

        <ul>
            {carrosFiltados.map((carro) => (
                <li key={carro.id}>{carro.marca} - {carro.modelo}</li>
            ))}
        </ul>
    </div>
  )
}