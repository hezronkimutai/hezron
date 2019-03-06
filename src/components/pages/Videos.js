import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API = 'AIzaSyBRsK1vCzRHXrFKj2X_tYkhnQuIvR_qOVw'
const channelID = 'UCRAPKD2VxfVTvpd2esbCzfg'
const result = 10
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


class Videos extends Component {
  state = {
    resultyt: []
  }
  componentDidMount() {
    fetch(finalURL)
    .then((response) =>response.json())
    .then((responseJson)=>{
        console.log(responseJson);
      const resultyt = responseJson.items.map(obj => obj);
      this.setState({resultyt});

    })

    .catch((error) => {
      console.error(error);
    });


  }
  render(){
    const videos = this.state.resultyt.map((link, i) =>{
      console.log(i)
      var frame =
      <div className="col-sm-4">
      <div className="card" style={cardStyle}  key={i}>
      <div className="card-header">
      <h5>{link.snippet.title}</h5>
      </div>
        <div className="card-body" >

        <iframe height='100%'  width='100%' src={`https://www.youtube.com/embed/${link.id.videoId}?&autoplay=1`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        </div>
      </div>
      </div>
            return frame;
        })
  return (
    <React.Fragment>



      <div className="row" >
        {videos}
      </div>







    </React.Fragment>
  )
}
}
const editorStyle = {
  background: '#333',
  color: ' #FF00FF',
  textAlign: 'center',
  padding: '5px',
  borderRadius:'3px'
}
const cardStyle = {
marginTop:'10px'
}
const linkStyle = {
  textDecoration:'none',
  margin:'20px',
  padding:'5px',
  fontSize:'20px',
  borderRadius:'5px'
}

export default Videos;
