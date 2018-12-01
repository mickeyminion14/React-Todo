import React , {Component} from 'react';

class Displaytask extends Component {


  deleteTask() {
    
  }

  render () {
    return (
      <div>
         <div className="tile is-parent">
      <article className="tile is-child notification is-info">
        <p className="title has-text-centered">Your Tasks!</p>
        {/* <p className="subtitle">Aligned with the right tile</p> */}
        <div className="content">
            <div>
              {this.props.taskArr.map( (tasks) =>
                <div key={tasks.id}>
                  {/* <div className="card">
                    <header className="card-header">
                      <p className="card-header-title has-text-centered">
                       {tasks.title}
                      </p>
                    
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {tasks.description}
                      </div>
                    </div>
                    <footer className="card-footer">
                      <a   href="#" className="card-footer-item">Save</a>
                      <a href="#" className="card-footer-item">Edit</a>
                      <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                  </div>
                  <br/> */}

                    <div className="tile is-parent">
                    
                      <article className="tile is-child notification is-warning" >
                      <button className="delete" onClick={this.deleteTask(tasks.id)}></button>
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
      </article>
    </div>
      </div>
    );
  }
}

export default Displaytask;