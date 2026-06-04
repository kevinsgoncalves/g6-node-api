import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function Pessoas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [pessoas, setPessoas] = useState([]);

  const API_URL =
    "https://6a209a8ee96c1d13b587aa1c.mockapi.io/pessoas";

  const fetchPessoas = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setPessoas(response.data);
      })
      .catch(() => {
        console.log("Erro na requisição");
      });
  };

  useEffect(() => {
    fetchPessoas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaPessoa = {
      nome,
      email,
      cpf,
    };

    axios
      .post(API_URL, novaPessoa)
      .then(() => {
        fetchPessoas();

        setNome("");
        setEmail("");
        setCpf("");

        setEnviado(true);

        setTimeout(() => {
          setEnviado(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("Erro na requisição", error);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Cadastro de Pessoas</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>

            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite o nome"
              value={nome}
              required
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              E-mail:
            </label>

            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Digite o e-mail"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="cpf" className="form-label">
              CPF:
            </label>

            <input
              type="text"
              id="cpf"
              className="form-control"
              placeholder="Digite o CPF"
              value={cpf}
              required
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>

      {enviado && (
        <div className="alert alert-success mt-3">
          Pessoa cadastrada com sucesso!
        </div>
      )}

      <h2 className="mt-5 mb-3">Pessoas Cadastradas</h2>

      <ul className="list-group">
        {pessoas.map((pessoa) => (
          <li key={pessoa.id} className="list-group-item">
            {pessoa.id} - {pessoa.nome} - {pessoa.email} - {pessoa.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
}