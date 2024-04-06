import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipe from './components/ViewRecipe';

function App() {
  return (
    <div>
    <AddRecipe/>
    <SearchRecipe/>
    <ViewRecipe/>
    </div>
  );
}

export default App;
