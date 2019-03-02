

import React from 'react-mdl';
import LandingPage from './landingPage';


const Main = ()=>{
    <Switch> 
        <Route exact path="/" componet={LandingPage} />
    </Switch>

}
  
export default Main;