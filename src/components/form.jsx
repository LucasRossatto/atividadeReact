import { useState } from "react";
import "../style/form.css";

const Form = ({titulo, label1,label2,label3}) => {
  // Estado inicial do formulario
  const initilForm = {
    nome: "",
    email:"",
    senha:"",
  };

  // Estado do formulario
  const [formState, setFormState] = useState(initilForm);
  const handleInput = (event) => {
    // Obter o valor e o nome do campo de entrada
    const target = event.currentTarget;
    // Extrair o valor e o nome do campo de entrada
    const { value, name} = target;
    // Atualizar o estado do formulario com os novos nomes e valores
    setFormState({ ...formState, [name]: value });
  };

  // Funcao para lidar com a submissao do formulario

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState.nome);
    console.log(formState.email);
    console.log(formState.senha);
    setFormState({ ...initilForm });
  };

  return (
    <div className="containerForm">
      <div className="align-form">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <h1>{titulo}</h1>

            <label>{label1}</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"    
              value={formState.nome}
              onChange={handleInput}
            />

            <label>{label2}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formState.email}
              onChange={handleInput}
            />

            <label>{label3}</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="senha"
              value={formState.senha}
              onChange={handleInput}
            />

            <div className="form-control">
              <button>Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
