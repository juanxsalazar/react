import React, { Component } from 'react';
import logoImage from '../images/github.png'

class HeadNav extends Component {
    render() {
        return (
         <header>
     <a href="https://octodex.github.com/"><img src={logoImage} alt="logo" height="22"/></a>        
    <ul>
       <li><a href="http://feeds.feedburner.com/Octocats">RSS</a></li>
       <li><a href="https://octodex.github.com/faq.html">FAQ</a></li>
       <li><a href="http://www.github.com/">Back to GitHub</a></li>
     </ul>
   </header>
        );
    }
}

export default HeadNav;