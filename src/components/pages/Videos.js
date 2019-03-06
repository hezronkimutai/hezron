import React, { Component } from 'react';

class Videos extends Component {
  render(){
    const videos = this.props.resultyt.map((link, i) =>{
      var frame =
      <div className="col-sm-4">
      <div className="card" style={cardStyle}>
      <div class="card-header">
        <h5>Interests</h5>
      </div>
        <div className="card-body">
        <iframe  src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        </div>
      </div>
      </div>
            return frame;
        })
  return (
    <React.Fragment>
    <h1>Videos</h1>
    <div className="row">
      {videos}
    </div>
    </React.Fragment>
  )
}
}
const cardStyle = {
marginTop:'10px'
}

export default Videos;
