import React from 'react';

class TaskForm
 extends React.Component {
  constructor(props) {
    super();
    this.state = { title: '' ,
    description :'',
    severity:''
  };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

handleSubmit = (event) => {
  fetch('http://localhost:8080/api/v1/tasks', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: this.state
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
}
    render() { 
        return (<div className="container">
        <form autocomplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="title">Title</label>
              <input className="form-control" id="title" type="text" value={this.state.value} name="title" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <div className="container" />
              <label for="exampleFormControlSelect2">Severity</label>
                <select id="severitylevel" className="severity-Block" name="severity" onChange={this.handleChange}>
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </select>
            </div>
         <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={this.handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div> );
    }
}
 
export default TaskForm
;