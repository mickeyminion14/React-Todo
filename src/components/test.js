import React, {Component} from 'react';
import Addtask from './Addtask'
import Displaytasks from './Displaytasks';

class test extends Component {
  constructor(props) {
    super(props);
    this.state = { taskArr: [] };
    this.handleState=this.handleState.bind(this);
  }

  handleState(newTaskArr) {
    // const newArr = [ ...this.state.taskArr, newTaskArr ];
    this.setState(state =>({
      // taskArr : newArr
      taskArr: state.taskArr.concat(newTaskArr)
    }));
  };
  render () {
   
    return (
      <div>
        <div className="columns ">
        <div className="column ">
          <Addtask handleState={this.handleState} taskArr={this.state.taskArr}/>
        </div>
        <div className="column is-three-fifths">
          <Displaytasks handleState={this.handleState} taskArr={this.state.taskArr}/>
        </div>
         
          
        </div>
      </div>
    );
  }
}

export default test;