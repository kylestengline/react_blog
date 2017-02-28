import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  //defining object on PostsNew class.
  //we could reference to PostsNew.contextTypes
  static contextTypes = {
    router: PropTypes.object
  };
onSubmit(props) {
    this.props.createPost(props)
      .then(() => { 
        /*blog post has been created, navigate the user to index.
        we navigate by calling this.context.router.push with the new path
        to navigate to.*/
        this.context.router.push('/');
      });
  }

  render() {
    //es6 syntax
    //configuration object for form.
    const { fields: { title, categories, content },  handleSubmit } = this.props;

    //using reduxForm to manage each our 3 inputs.
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create a New Post</h3>
          
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
            <div className="text-help">
              {title.touched ? title.error : ''}
            </div>
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea className="form-control"{...content} />
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

/*return object from validate function, 
if object has a key that matches one of our field names,
and that key has a truthy object tied to it,
reduxForm assumes that the form is not valid and
therefore will not submit the form.*/
/*Marking the form as invalid: 
add properties value to errors object, that we return, and add
a truthy value to it.*/
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter A Title";
  } 

  if (!values.categories) {
    errors.categories = "Enter Categories";
  } 
  
  if (!values.content) {
    errors.content = "Enter Some Content";
  }

  return errors;
}

/*by defining different fields, we got 3 properites injected 
into our props object. fields.title fields.categories, etc.*/
//handling the state side of the app.

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is
//mapDispatchToProps
export default reduxForm({ 
  form: 'PostsNewForm', 
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
//whenever the user is making changes to the input, the changes are
//affecting the state of the app as well.
