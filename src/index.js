import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logoImage from './images/github.png'

function HeadNav() {
  return (<header>
<a href="https://octodex.github.com/"><img src={logoImage} alt="logo" height="22"/></a>
  <ul>
      <li><a href="http://feeds.feedburner.com/Octocats">RSS</a></li>
      <li><a href="https://octodex.github.com/faq.html">FAQ</a></li>
      <li><a href="http://www.github.com/">Back to GitHub</a></li>
    </ul>
  </header> )
}
  
ReactDOM.render (
  <HeadNav />,document.getElementById('root')
)

// below is another way to do this without having to use function at all. 
// ReactDOM.render(<header>
// <a href="https://octodex.github.com/"><img src={logoImage} alt="logo" height="22"/></a>
//   <ul>
//       <li><a href="http://feeds.feedburner.com/Octocats">RSS</a></li>
//       <li><a href="https://octodex.github.com/faq.html">FAQ</a></li>
//       <li><a href="http://www.github.com/">Back to GitHub</a></li>
//     </ul>
// </header>
// , document.getElementById('root'))


//reactDOM.render(what do i want to render and where do i want to render it)
// when using reactDOM.render you can't have more than one element in it unless you wrap it around a parent such as section, div, headline.
// Html = <div id="root"></div>
// we can also do function components (or const) that way we can enter it to the reactDOM.render...
