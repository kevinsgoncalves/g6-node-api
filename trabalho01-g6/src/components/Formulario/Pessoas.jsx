import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function Pessoas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [createdPost, setCreatedPost] = useState(null);
  const [enviado, setEnviado] = useState(false);
  const [clientes, setClientes] = useState([]);

  const fetchClientes = () => {
    axios
      .get("https://6a209a7ae96c1d13b587a961.mockapi.io/clientes")
      .then((response) => {
        setClientes(response.data);
      })
      .catch(() => console.log("erro na requisição"));
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      nome: nome,
      email: email,
      cpf: cpf,
    };
    axios
      .post("https://6a209a7ae96c1d13b587a961.mockapi.io/clientes", newPost)
      .then((response) => {
        console.log(response.data);
        setCreatedPost(response.data);
      })
      .catch((error) => {
        console.log("Erro na requisição", error);
      });
    fetchClientes();
    setEnviado(true);
  };

  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Preencha o nome"
                value={nome}
                className="form-control mb-3"
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Preencha o email"
                value={email}
                className="form-control mb-3"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

             <div className="col-md-6">
              <label htmlFor="cpf" className="form-label">
                Cpf:
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Preencha o cpf"
                value={cpf}
                className="form-control mb-3"
                required
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
          </div>
          <button className="btn btn-primary">Enviar</button>
        </form>
        <h2  >Listagem de Clientes Cadastrados</h2>
        <ul className="list-group">
            {clientes.map((cliente)=> (
                <li key={cliente.id} className="list-group-item">{cliente.id} - {cliente.nome} - {cliente.email} - {cliente.cpf}</li>
            ))}
        </ul>
    </div>
  );
}