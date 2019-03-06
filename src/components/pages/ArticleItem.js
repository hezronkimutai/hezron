import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleItem extends Component {
  getStyle = () => {
      return{
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.article.completed? 'line-through' : 'none'
      }
    }


  render() {
    const {  title } = this.props.article;
    return (
      <div style={this.getStyle()}>
        <p>
          { title }


        </p>
      </div>
    )
  }
}

ArticleItem.propTypes = {
  article: PropTypes.object.isRequired
  }
const btnStyle = {
  background:'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}
export default ArticleItem;
