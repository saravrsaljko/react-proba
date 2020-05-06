import React from 'react';
import {Link} from "react-router-dom";
import slika from '../Naslovna.jpg';

function Naslovna() {
    return (
      <div>
        <tr>
            <td><Link to ='/Hiperveza'class="link">vise o</Link></td>
            <td><Link to ='/Povijest'class="link">Povijest parka</Link></td>
        </tr>
        <img src={slika}></img><br/>
      </div>
    );
    
}

export default Naslovna;