import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [liked, setLiked] = useState(false);
  const [list, setList] = useState([]);
  const [pessoa, setPessoa] = useState({
    name: "",
    age: 20,
  });

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Diminui</button>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
      <p>{count}</p>

      <p>o name é {name}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <p>
        <button onClick={() => setLiked(!liked)}>
          {liked ? "liked" : "not liked"}
        </button>
      </p>

      <p>
        Lista
        <ul>
          {list.map((item) => {
            return (
              <li>
                {item}{" "}
                <button
                  onClick={() => {
                    const listFiltered = list.filter((i) => i !== item);

                    setList(listFiltered);
                  }}
                >
                  remover {item}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            setList([...list, "laranja"]);
          }}
        >
          Adicionar Laranja
        </button>
        <button onClick={() => setList([])}>Limpar tudo</button>
      </p>

      <p>
        Dados da pessoa:
        <br />
        nome: {pessoa.name} <br />
        idade: {pessoa.age} <br />
        <input
          name="name"
          placeholder="name"
          value={pessoa.name}
          onChange={(e) =>
            setPessoa({ ...pessoa, [e.target.name]: e.target.value })
          }
        />
      </p>
    </div>
  );
}
