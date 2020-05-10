import React from 'react';
import Cardlistss from './Cardlistss';
import {robots} from './robots';
import Searchbox from './SearchBox';
import 'tachyons';
 const Appp = () =>
  {  return( 
           <div classname="tc">
           <h1>ROBOFRIENDS</h1>
           <Searchbox/>
           <Cardlistss robots = {robots}/>
           </div>
           ); 
  }
  export default Appp;

 
