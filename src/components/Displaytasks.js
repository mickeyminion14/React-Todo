import React , {Component} from 'react';
import { toast } from "bulma-toast";
import face from "../assets/images/face_empty.png";


class Displaytask extends Component {

  
  constructor(props) {
    super(props);
    console.log(props);
   
    this.deleteTask = this.deleteTask.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.changeVisibility = this.changeVisibility.bind(this);

   
  
    

  }

   getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

  makeToast(msg) {
    toast({
      message: msg,

      dismissible: true,
     
      duration: 2000,
      position: "top-right",
      closeOnClick: true,
      opacity: 1
    });
  }

  deleteTask(id) {
    var i=this.getIndex(id, this.props.taskArr, "id");
    this.props.deleteTaskState(i);
    this.makeToast("Task Deleted !")
  
   
  }
  changeVisibility () {
      console.log("clicked");
      this.setState(prevState => ({ emptyList: !prevState.emptyList }));
  }

  

  render () {
    return (
      
      <div >
        {/* <button onClick={this.changeVisibility}>assasa</button> */}
       
         <div className="tile is-parent">
      <article className="tile is-child notification is-info">
        <p className="title has-text-centered">Your Tasks !</p>
        {/* <p className="subtitle">Aligned with the right tile</p> */}
        {
          !this.props.emptyList
          ?
        <div className="content">
            <div>
              {this.props.taskArr.map( (tasks) =>
                <div key={tasks.id}>
      

                    <div className="tile is-parent">
                    
                      <article className="tile is-child notification is-warning" >
                      <button className="delete" onClick={()=>this.deleteTask(tasks.id)} ></button>
                        <div className="content">
                          <p className="title has-text-centered">{tasks.title}</p>
                          {/* <p className="subtitle ">With even more content</p> */}
                          <div className="content has-text-centered">
                          {tasks.description}
                          </div>
                        </div>
                      </article>
                    </div>
                </div>
               
              )}

              {/* { JSON.stringify(this.props.taskArr) } */}

            </div>
        </div>
         : null
        }
        
        
        {
          this.props.emptyList
          ?
          <div className="tile is-parent is-flex" style={{justifyContent : "center"}}>
                    
          
          
           
              <img alt="lol" src={face}></img>
              {/* <p className="subtitle ">With even more content</p> */}
            
           
          
        </div>
            : null
        }
      </article>
    </div>
    


       
      </div>
    );
  }
}

export default Displaytask;