import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';



function App() {
  return (
    <BrowserRouter> 
    <div className="App">
     <Switch>
     <Route  path="/" component={NavBar} />
     
     </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
