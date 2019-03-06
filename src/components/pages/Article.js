import React, { Component } from 'react';
import axios from 'axios';
import { List, Avatar, Icon } from 'antd';
import { Link } from 'react-router-dom';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Article extends Component {
  state = {
    articles:[]
  }
  componentDidMount() {

    axios.get('http://0.0.0.0:8080/articles', { mode: 'no-cors'})
    .then(res => this.setState({ articles: res.data }))


  }
  render() {

    const listData = this.state.articles;
    listData.map(article => {

      return (
        {
          href: 'http://ant.design.com',
          title: article.title,
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: article.body,
          content: article.body,
        }

      )

    })

    // console.log(this.props.articles)
    return (
      <List
   itemLayout="vertical"
   size="large"
   pagination={{
     onChange: (page) => {
       console.log(page);
     },
     pageSize: 3,
   }}
   dataSource={listData}
   footer={<div><b>ant design</b> footer part</div>}
   renderItem={item => (
     <List.Item className="row"
       key={item.title}
       actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
       // extra={<img alt="logo" src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
     >
       <List.Item.Meta
         avatar={<Avatar src={item.avatar} />}
         title={<Link className='link'  to="/singlearticle"> {item.title} </Link>}

         description={item.body}
       />
       {item.body}
     </List.Item>

   )  }
 />
)


  }
}


export default Article;
