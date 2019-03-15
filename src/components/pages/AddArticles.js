import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

class AddArticles extends React.Component {
  state = {
    title : '',
    body : '',
  };
  handleChange = event => {
    this.setState({title: event.target.value, body: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    const article = {
      title: this.state.title,
      body:this.state.body
    };
    console.log(article);
    axios.post('https://hezronkimutaibackend.herokuapp.com/articles' ,article , {headers : {
        'Content-Type' : 'application/json'
    }, mode: 'no-cors'})
    .then(res => { console.log(res);
    console.log(res.data)}
    )
  }

  render() {

          return (



                  <form onSubmit={this.handleSubmit}>
                  <input type="text" name='title' onChange={this.handleChange} style={input} placeholder="Enter the titleof your document"/>

                  <CKEditor
                      editor={ ClassicEditor }
                      data="<p ></p>"
                      onInit={ editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          console.log( { event, editor, data } );
                      } }
                      onBlur={ editor => {
                          console.log( 'Blur.', editor );
                      } }
                      onFocus={ editor => {
                          console.log( 'Focus.', editor );
                      } }
                  />
                  <input type="submit" value="submit"   style={inputStyle}/>
                  </form>
          );
      }
  }

  const editorStyle = {
    background: '#333',
    color: ' #FF00FF',
    textAlign: 'center',
    padding: '5px'
  }
  const input = {
    width:'100%',
    color: ' #FF00FF',
    textAlign: 'center',
    padding: '5px'
  }
  const inputStyle = {
    width:'100%',
    background: '#333',
    color: ' #FF00FF',
    textAlign: 'center',
    padding: '5px'
  }
export default AddArticles;
