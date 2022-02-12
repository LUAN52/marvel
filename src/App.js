import { GlobalStyle } from './GlobalStyled';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ComicList from './components/Container';
import Card from './components/Card';
import { Header } from './components/Header';
function App() {
  return (
    <>
    <Router>
    <Header/>
     <GlobalStyle/>
        
        <Routes>
              <Route path="/Marvel" element={<ComicList/>}/>
              <Route path='*' element={<Card/>}></Route>   
       </Routes>
     
      </Router>  
    </>
  );
}

export default App;
