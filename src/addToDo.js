import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state={
      title:null,
      id:null
  }

 handleChange=(e)=>{
   this.setState({title:e.target.value});
   this.setState({id:Math.random()*5});
 }
 handleSubmit = (e)=>{
   e.preventDefault();
   if(document.getElementById("title").value==="")
      return;
   console.log(this.state);
   this.props.addToDo(this.state);
   document.getElementById("title").value="";

 }
  render(){

    return(
<footer className="page-footer">
  <div className="row">
    <form className="col s12" onSubmit={ this.handleSubmit}>


      <div className="row">
        <div className="input-field col s12">
          <input id="title" type="text" className="validate" onChange= { this.handleChange}   />
          <label htmlFor="title">To-Do...</label>
        </div>
      </div>

    </form>
  </div>
</footer>


    )
  }
}
export default App;
