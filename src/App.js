import { GlobalStyle } from './GlobalStyled';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ComicList from './components/Container';
import Card from './components/Card';
import { Header } from './components/Header';
import Provider from './context/context';
import { AppContainer } from './AppStyled';
import { CartPage } from './components/CartPage';

function App() {
  return (
    
   <> <Router>
    <Header/>
    <AppContainer>
        <GlobalStyle/>
            <Provider>
                <Routes>
                      <Route path='/Cart' element={<CartPage/>}/>
                      <Route path="/Marvel" element={<ComicList/>}/>
                      <Route path='*' element={<Card/>}></Route>   
              </Routes>
          </Provider>
      </AppContainer>
          </Router>  
    
    </>
  );
}

export default App;
