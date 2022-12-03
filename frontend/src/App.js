import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAuthor from './components/AuthorsApp/AddAuthor/AddAuthor';
import Authors from './components/AuthorsApp/Authors/Authors';
import EditAuthor from './components/AuthorsApp/EditAuthor/EditAuthor';
import PokemonAPIApp from './components/PokemonAPIApp/PokemonAPIApp';
import Home from './components/ProductManagerApp/Home/Home';
import ProductDetails from './components/ProductManagerApp/ProductDetails/ProductDetails';
import UpdateProduct from './components/ProductManagerApp/UpdateProduct/UpdateProduct';

function App() {
  return (

          <div className="App">
          <Routes>

          {/* AuthorsApp */}
            {/* <Route path='/' element={<Authors></Authors>}></Route>
            <Route path='/add-author' element={<AddAuthor></AddAuthor>}></Route>
            <Route path='/edit-author/:id' element={<EditAuthor></EditAuthor>}></Route> */}

          {/* PokemonAPIApp */}
            {/* <Route path='/' element={<PokemonAPIApp></PokemonAPIApp>}></Route> */}

          {/* Product Manager */}
          {/* <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product-details/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/edit-details/:id' element={<UpdateProduct></UpdateProduct>}></Route> */}

          </Routes>
          </div>
        );
      }

export default App;
