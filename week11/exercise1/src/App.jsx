import "./App.css";

function SimpoleCard({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Hello World!</h2>
      <SimpoleCard
        title="working card"
        description="This is a working card component."
      />
    </div>
  );
}

export default App;
