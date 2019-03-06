import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleItem extends Component {

  render() {
    const {  title } = this.props.article;
    return (
      <div>
          { title }
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
