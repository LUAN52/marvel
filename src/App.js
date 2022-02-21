import { GlobalStyle } from './GlobalStyled';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ComicList from './components/Container';
import Card from './components/Card';
import { Header } from './components/Header';
import Provider from './context/context';
import { AppContainer } from './AppStyled';
import { CartPage } from './components/CartPage';
import {createBrowserHistory} from 'history';
import PurchasePage from './components/PurchasePage';


const history = createBrowserHistory();


function App() {
  return (
    
   <> <Router history={history}>
    <Header/>
    <AppContainer>
        <GlobalStyle/>
            <Provider>
                <Routes>
                      <Route path="/purchase" element={<PurchasePage/>}/>
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
