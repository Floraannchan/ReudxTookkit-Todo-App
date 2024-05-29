
import './App.css';
import Formsumbit from './components/Formsumbit';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
  return (
    <div>
      <Formsumbit/>
      <TodoList />
      <TotalCompleteItems/>
    </div>
  );
}

export default App;
