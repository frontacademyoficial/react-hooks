import Counter from "./react-hooks/Counter";

export default function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        <h1 style={{ marginBottom: "2rem" }}>React Avançado - useState</h1>

        <Counter />
      </div>
    </div>
  );
}
