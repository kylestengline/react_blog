import React, { Component } from 'react';
import { redxuForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
        <form>
          <h3>Create a New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  }
}

//handling the state side of the app.
export default reduxForm({ 
  form: 'PostsNewForm', 
  fields: ['title', 'categories', 'content']
})(PostsNew);
//whenever the user is making changes to the input, the changes are
//affecting the state of the app as well.
