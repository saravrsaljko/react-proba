import React from 'react';
import {Link} from 'react-router-dom';
import slika2 from '../druga.jpg';

function Povijest() {
    return (
      <div>
          <Link to ='/' class="link">Povratak</Link>
          <p>Krka je sedmi nacionalni park u Hrvatskoj poznat po velikom broju jezera i slapova. Dobio je ime po rijeci Krki koja je dio parka. Nacionalni park je lociran u središnjoj Dalmaciji nizvodno od Miljevaca</p>
          <img src={slika2}></img><br/>
      </div>
    );
    
}

export default Povijest;