import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PropTypes from 'prop-types';

class AddArticles extends React.Component {
  render() {
          return (
              <div className="card">
                  <h2 style={editorStyle}>Post an article</h2>
                  <form>
                  <CKEditor
                      editor={ ClassicEditor }
                      data="<p></p>"
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
              </div>
          );
      }
  }
  AddArticles.propTypes = {
    addarticles: PropTypes.func.isRequired
    }
  const editorStyle = {
    background: '#333',
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
// style="height: 300px;"
export default AddArticles;
