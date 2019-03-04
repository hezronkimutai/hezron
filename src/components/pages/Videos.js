import React, { Component } from 'react';

class Videos extends Component {
  render(){
  return (
    <React.Fragment>
    <h1>Videos</h1>
    {
      this.props.resultyt.map((link, i) =>{
        var frame = <div className="row"key={i}><div className="col-sm" >The name of the visdeo</div><div className="col-sm"><iframe  src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></div>
          return frame;
      })

    }
    {this.frame}


    </React.Fragment>
  )
}
}

export default Videos;
