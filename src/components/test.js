import React, {Component} from 'react';
import Addtask from './Addtask'
import Displaytasks from './Displaytasks';

class test extends Component {
  constructor(props) {
    super(props);
    this.state = { taskArr: [] ,emptyList :true};
    this.addTaskState=this.addTaskState.bind(this);
    this.deleteTaskState=this.deleteTaskState.bind(this);
  }

  addTaskState(newTaskArr) {
    // const newArr = [ ...this.state.taskArr, newTaskArr ];
    this.setState(state =>({
      // taskArr : newArr
      taskArr: state.taskArr.concat(newTaskArr)
    }));
  };

  deleteTaskState(id) {
    console.log(id);
    const newArr = [...this.state.taskArr];
    console.log(newArr);
    newArr.splice(id,1)
    console.log(newArr);
    this.setState(state =>({
      
      taskArr: newArr
    }));
  };

  render () {
   
    return (
      <div>
        <div className="columns ">
        <div className="column ">
          <Addtask addTaskState={this.addTaskState} taskArr={this.state.taskArr} deleteTaskState={this.deleteTaskState} emptyList = {this.state.emptyList}/>
        </div>
        <div className="column is-three-fifths">
          <Displaytasks addTaskState={this.addTaskState} taskArr={this.state.taskArr} deleteTaskState={this.deleteTaskState}/>
        </div>
         
          
        </div>
      </div>
    );
  }
}

export default test;