import React, { Component} from 'react'
import HeadNav from './components/HeadNav'
import './index.css'
import MainContent from './components/MainContent';

class App extends Component {
    render () {
        return <div> 
       <HeadNav />
       <MainContent />
        </div>
    }
}

export default App 