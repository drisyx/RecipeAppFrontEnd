import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipe from './components/ViewRecipe';
import RecipeNavbar from './components/RecipeNavbar';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AddRecipe />} />
        <Route path="/search" element={<SearchRecipe />} />
        <Route path="/view" element={<ViewRecipe />} />


      </Routes>


    </BrowserRouter>




  );
}

export default App;
