import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import PropTypes from 'prop-types';

class Articles extends Component {

  render() {
    // console.log(this.props.articles)
    return this.props.articles.map((article) =>(
      <ArticleItem key={ article.article_id } article={article}/>
    ));
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Articles;
