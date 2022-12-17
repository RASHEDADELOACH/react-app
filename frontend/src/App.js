import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPet from './components/BackBeltExam/AddPet/AddPet';
import Home from './components/BackBeltExam/Home/Home';
import PetDetails from './components/BackBeltExam/PetDetails/PetDetails';
import UpdatePet from './components/BackBeltExam/UpdatePet/UpdatePet';
// import AddAuthor from './components/AuthorsApp/AddAuthor/AddAuthor';
// import Authors from './components/AuthorsApp/Authors/Authors';
// import EditAuthor from './components/AuthorsApp/EditAuthor/EditAuthor';
// import FakerApiApp from './components/FakerAPIApp/FakerApiApp';
// import PokemonAPIApp from './components/PokemonAPIApp/PokemonAPIApp';
// import PostmanPokemonApp from './components/PostmanPokemonApp/PostmanPokemonApp';
// import Home from './components/ProductManagerApp/Home/Home';
// import ProductDetails from './components/ProductManagerApp/ProductDetails/ProductDetails';
// import UpdateProduct from './components/ProductManagerApp/UpdateProduct/UpdateProduct';
// import RoutingPractice4 from './components/RoutingPracticeApp/4/RoutingPractice4';
// import For from './components/RoutingPracticeApp/4/RoutingPractice4';
// import RoutingPracticeRed from './components/RoutingPracticeApp/hello/blue/red/RoutingPracticeRed';
// import RoutingPracticeHello from './components/RoutingPracticeApp/hello/RoutingPracticeHello';
// import RoutingPracticeHome from './components/RoutingPracticeApp/RoutingPracticeHome';

function App() {
  return (

          <div className="App">
          <Routes>

          {/* AuthorsApp */}
            {/* <Route path='/' element={<Authors></Authors>}></Route>
            <Route path='/add-author' element={<AddAuthor></AddAuthor>}></Route>
            <Route path='/edit-author/:id' element={<EditAuthor></EditAuthor>}></Route> */}

          {/* RoutingPracticeApp */}
            {/* <Route path='/' element={<RoutingPracticeHome></RoutingPracticeHome>}></Route>
            <Route path='/4' element={<RoutingPractice4></RoutingPractice4>}></Route>
            <Route path='/hello/blue/red' element={<RoutingPracticeRed></RoutingPracticeRed>}></Route>
            <Route path='/hello' element={<RoutingPracticeHello></RoutingPracticeHello>}></Route> */}

          {/* FakerAPIApp */}
            {/* <Route path='/' element={<FakerApiApp></FakerApiApp>}></Route> */}

          {/* PokemonAPIApp */}
            {/* <Route path='/' element={<PokemonAPIApp></PokemonAPIApp>}></Route> */}

          {/* PostmanPokemonApp */}
          {/* <Route path='/' element={<PostmanPokemonApp></PostmanPokemonApp>}></Route> */}

          {/* Product Manager */}
          {/* <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product-details/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/edit-details/:id' element={<UpdateProduct></UpdateProduct>}></Route> */}

          {/* BlackBelt Exam */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/add-pet' element={<AddPet></AddPet>}></Route>
          <Route path='/pet-details/:id' element={<PetDetails></PetDetails>}></Route>
          <Route path='/pet-update/:id' element={<UpdatePet></UpdatePet>}></Route>

          </Routes>
          </div>
        );
      }

export default App;
