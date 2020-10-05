import React, { Component } from 'react';
class TaskForm
 extends Component {

    render() { 
        return (<div className="container">
        <form>
  <div class="form-group">
  <label for="title">Title</label>
    <input class="form-control" id="title" rows="3"></input>
  </div>
  <div class="form-group">
  <div className="container" />
    <label for="exampleFormControlSelect2">Severity</label>
    <select name="cars" id="severitylevel" className="severity-Block">
    <option value="volvo">1</option>
    <option value="saab">2</option>
    <option value="opel">3</option>
  
  </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>  );
    }
}
 
export default TaskForm
;