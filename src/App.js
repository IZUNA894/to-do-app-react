import React from 'react';
import ShowToDo from "./showToDo.js";
import AddToDo from "./addToDo.js";
class App extends React.Component {
  state={
    toDos:[
            {title:"buy milk",id:1},
            {title:"go for walk",id:2},
            {title:"go for market",id:3}

          ]
  }
  addToDo = (item)=>{
    var toDos = this.state.toDos;
    toDos = [...toDos,item];
    this.setState({toDos});

  }
  deleteToDo=(id)=>{
    var toDos = this.state.toDos;
    toDos= toDos.filter((item)=>{
      return(id!=item.id);
    })
    this.setState({toDos});
  }
  render(){
  return (
    <div className="container z-depth-5">


    <div className="blue lighten-4 blue-text text-darken-4" style={{textAlign:null}} >
    <h2 >To-Do!</h2>
    <p className="" >create new to-do's here!</p>
    </div>


      <div className="blue-text text-darken-4 text" >
      < ShowToDo toDos={this.state.toDos} deleteToDo={this.deleteToDo}/>
      </div>
      <div className="" >
      < AddToDo addToDo = { this.addToDo} />
      </div>

    </div>
  );
}
}
export default App;
