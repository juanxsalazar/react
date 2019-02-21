import React, { Component } from 'react';
import footy from '../images/foot.png'

class Footer extends Component {
    render() {
        return (
         <footer>
     <section>
  <ul>
    <li><a href="http://feeds.feedburner.com/Octocats">RSS</a></li>
    <li><a href="https://octodex.github.com/faq.html">FAQ</a></li>
    </ul>
  </section>
<section> 
         <a href="https://github.com/"><img src={footy} alt="footer"/></a>
</section>
    <section>
<p>© 2013 – 2019 GitHub, Inc. All rights reserved.</p>
    </section>
         </footer>
        );
    }
}

export default Footer