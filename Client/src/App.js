
import './App.css';
import Header from './Header';
import Layout from './Latout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Post from './Post';
import {Routes,Route} from 'react-router-dom';
import { UserContext, UserContextProvider } from './Usercontext';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPages';
import EditPost from './Pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path={'/login'} element={<LoginPage/> } />
      <Route path={'/register'} element={<RegisterPage/> } />
      <Route path={'/create'}  element={<CreatePost/>}/>
      <Route path={'/post/:id'} element={<PostPage/>}/>
      <Route path={'/edit/:id'} element={<EditPost/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
   
 
  );
}

export default App;
