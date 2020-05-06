import React from 'react';
import {Link} from 'react-router-dom';
import slika3 from '../treca.jpg';

function Hiperveza() {
    return (
      <div>
          <Link to ='/' class="link">Povratak</Link><br/>
          <img src={slika3}></img><br/>
          <a href="http://www.npkrka.hr/">Stranica o nacionalnom parku</a>
      </div>
    );
    
}

export default Hiperveza;