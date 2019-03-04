import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
    <div  className="container-fluid">

<div className="row">
    <div className="col-sm">
    <div className="card" style={cardStyle}>
  </div>


    </div>
    <div className="col-sm">
    </div>
  </div>
</div>

    </React.Fragment>
  )
}
const meStyle = {
  height:'200px',
  width:'150px'
}
const cardStyle = {
  backgroundImage: `url(${require('./me.jpg')})`,
  backgroundSize: '100% 100%',
width:' 30%',
marginTop:'10px',
height:'200px'
}
