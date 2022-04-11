import './App.css';

const list = ['Acordar 5AM', 'Limpar a casa', 'Estudar', 'Exercícios', 'Aula Ao Vivo', 'XABLAU'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return   (<ol>{list.map((item) => Task(item))}</ol>);
}

export default App;
