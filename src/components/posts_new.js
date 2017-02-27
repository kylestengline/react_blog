import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    //es6 syntax
    //configuration object for form.
    const { fields: { title, categories, content },  handleSubmit } = this.props;

    return (
        /*handleSubmit handles form input and 
        validates all inputs are present.
        this comes from reduxForm*/
        <form onSubmit={handleSubmit}>
          <h3>Create a New Post</h3>
          
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
            /*we're passing title into the input to make sure that all 
              properties, on the title object, show up inside the input.*/
          </div>

          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control"{...content} />
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
