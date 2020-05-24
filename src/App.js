import React from 'react';
import './App.css';
import Content from './content'

class App extends React.Component{


render(){
  return(
    <div>
     <Content store={this.props.store}/>
    </div>
 
  )
}

}
export default App;
