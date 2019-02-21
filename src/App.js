import React, { Component} from 'react'
import HeadNav from './components/HeadNav'
import './index.css'
import MainContent from './components/MainContent';
import Footer from './components/Footer'

class App extends Component {
    render () {
        return <div> 
       <HeadNav />
       <MainContent />
       <Footer />
        </div>
    }
}

export default App 