import React, {Component} from 'react';

class Addtask extends Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { title: "", description : "" };

    // This binding is necessary to make `this` work in the callback
    this.addTask = this.addTask.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleChangeDescription = (e) => {
    this.setState({ description: e.target.value });
 
  }
  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
 
  }

  addTask = () =>  {
    
    //copying task arr and passing new object to parent state method
    const newTaskArr= {id:Date.now(),title:this.state.title, description:this.state.description };
    this.props.addTaskState(newTaskArr);

    //reseting text field values
    this.setState(state =>({
     title : "" ,
     description : ""
    }));
  }
  
  
  render () {
    return (
      <div>
    <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
      
        <p className="title has-text-centered">Add A Task !</p>
       
        <div className="content">
        <div className="field">
        {/* <label className="label">Give a title to the task</label> */}
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success has-text-centered"  value={this.state.title} onChange={this.handleChangeTitle} type="text" placeholder="Title" />
          <span className="icon is-small is-left ">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div className="field">
        {/* <label className="label">Describe the task</label> */}
        <div className="control">
          <textarea className="textarea is-info has-text-centered"  value={this.state.description} onChange={this.handleChangeDescription} placeholder="Description"></textarea>
        </div>
      </div>

        <div className="field" style={{display: "flex", justifyContent :"center"}}>
        {/* <label className="label">Describe the task</label> */}
        <div className="control ">
        <button className="button is-info is-rounded" onClick={this.addTask}>Add Task</button>
        </div>
      </div>

        </div>
      </div>
    </article>
  </div>
      </div>
    );
  }
}

export default Addtask;