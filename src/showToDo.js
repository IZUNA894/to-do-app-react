import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state={

  }

  render(){
    var toDos= this.props.toDos;
    var toDosList = "";
    if(toDos.length==0){
      toDosList = <div className="" ><p className="" >No's todo's left for today</p></div>
    }
    else{
      toDosList = toDos.map((item)=>{
        return(
          <li className="  collection-item " key={ item.id}>
          <p className="" >{item.title}
          <a className="waves-effect waves-light btn right" onClick={ ()=>{this.props.deleteToDo(item.id)}}>Delete</a>
          </p>

          </li>
        )
      })
    }
    return(
      <ul className="collection">
      { toDosList}
      </ul>

    )
  }
}
export default App;
