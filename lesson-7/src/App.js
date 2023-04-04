import Header from './component/header/header';
import {Home} from "./component/home/home";
import Create from "./component/create/create"
import Register from './component/register/register';
import Login  from './component/login/login';
import PostDetails from './component/postdetail/postDetail';
import style from './App.module.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
  <BrowserRouter>
    <div className={style.App}>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Create' element={<Create/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/post/:id' element = {<PostDetails/>}/>
    </Routes>
      
   </div>
  </BrowserRouter>
  
  
  );
}

export default App;
