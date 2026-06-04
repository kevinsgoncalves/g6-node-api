import axios from "axios";
import { useState } from "react";

export default function BuscarPessoa() {
  const [id, setId] = useState("");
  const [pessoa, setPessoa] = useState(null);

  const buscarPessoa = () => {
    axios
      .get(
        `https://6a209a8ee96c1d13b587aa1c.mockapi.io/pessoas/${id}`
      )
      .then((response) => {
        setPessoa(response.data);
      })
      .catch(() => {
        alert("Pessoa não encontrada");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Buscar Pessoa</h2>

      <div className="row">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Digite o ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary"
            onClick={buscarPessoa}
          >
            Buscar
          </button>
        </div>
      </div>

      {pessoa && (
        <div className="card mt-4">
          <div className="card-body">
            <h5>{pessoa.nome}</h5>
            <p>Email: {pessoa.email}</p>
            <p>CPF: {pessoa.cpf}</p>
          </div>
        </div>
      )}
    </div>
  );
}