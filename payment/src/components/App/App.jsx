import Home from './../Home/Home';
import NavBar from './../NavBar/NavBar';
import About from './../About/About';
import "./App.css";
import { HashRouter, Route } from 'react-router-dom';
import StripeContainer from './../Gateway/StripeContainer';
const App = () => {
     return (
          <div>
               <HashRouter>
                    <NavBar />
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/StripeContainer' exact component={StripeContainer} />
               </HashRouter>
          </div>
     );
};
export default App;