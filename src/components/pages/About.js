import React from 'react'

export default function About() {
  return (
    <React.Fragment>

<div className="card"  style={cardStyle}>
<div class="card-header">
  <h1>Contact Information</h1>
</div>
  <div className="card-body">
    <h3 className="card-title"><h1>Interests</h1></h3>
    <p className="card-text"><ul>
    <li>Full Name:	Hezron Kimutai</li>
    <li>Email:		hezronchelimo.hc@gmail.com / hezronkimutai600@gmail.com</li>
    <li>Phone Number:	0799087221</li></ul></p>
    <a href="#" className="btn btn-primary">Back to top</a>
  </div>
</div>

<div className="card" style={cardStyle}>
<div class="card-header"><h1>Overview</h1></div>
  <div className="card-body">
    <h3 className="card-title">Bachelors degree in electrical and electronics engineering </h3>
    <p className="card-text">
    I am currently an electrical and electronics engineering student at machakos university with hopes of completing my studies on april. I have taught myself how to code in addition to the few it courses offered at the university.
</p><h3 className="card-title">Kenya certificate of secondary education(KCSE))</h3>
  <p className="card-text">
    In 2013, I completed my secondary education at Chebara boys high school earning a KCSE certificate after scoring a mean grade of A-.</p>
    <a href="#" className="btn btn-primary">Back to top</a>
  </div>
</div>

<div className="card" style={cardStyle} >
<div class="card-header">
  <h1>Experience</h1>
</div>
  <div className="card-body">
    <h3 className="card-title">Andela fellowship cohort 37</h3>
    <p className="card-text">
    <ul>
    <li>Flask and Flask-Restful</li>
    <li>Mysql and Postgresql database</li>
    <li>Git, Heroku and Travis-Ci</li>
    <li>Psycopg2</li>
    <li>App documentation</li>
    <li>Test driven development</li>
    <li>Fetch-Api</li>
    <li>HTML5 and CSS</li></ul></p>
    <a href="#" className="btn btn-primary">Back to top</a>
  </div>
</div>
<div className="card" style={cardStyle}>
<div class="card-header">
  <h1>Technologies</h1>
</div>
  <div className="card-body">
    <h3 className="card-title">Programming</h3>
    <p className="card-text">Python, CSS, HTML5, Javascript, SQL.</p>
    <h3 className="card-title">Relational Databases:</h3>
    <p className="card-text">MySQL, PostgreSQL.</p>
    <h3 className="card-title">  Development Tools:</h3>
    <p className="card-text">Sublime Text, atom, vscode</p>
    <h3 className="card-title">Version Control:</h3>
    <p className="card-text">Git</p>
    <h3 className="card-title">Continuous Integration:</h3>
    <p className="card-text">Travis-Ci</p>
    <h3 className="card-title">App deployment:</h3>
    <p className="card-text">Heroku</p>
    <h3 className="card-title">Content Management Systems:</h3>
    <p className="card-text">Medium, Youtube</p>
    <a href="#" className="btn btn-primary">Back to top</a>
  </div>
</div>

<div className="card" style={cardStyle}>
<div class="card-header">
  <h1>Skills</h1>
</div>
  <div className="card-body">
    <h3 className="card-title"><h1>skills</h1></h3>
    <p className="card-text"> <ul>
     <li>I am very good at implementing feedback.</li>
    <li>  I am good at communication.</li>
    <li>  I am good at implementing the git workflow.</li>
    <li>  I am good at creating APIs with Flask and Flask-Restful.</li>
    <li>  I am good at using pivotal tracker to manage my projects.</li>
      <li>Generally, my technical and interpersonal skills are good.</li>
    <li>  I am good at igniting inner passion in anything.</li>
    <li>  My learning speed is good.</li></ul></p>
    <a href="#" className="btn btn-primary">Back to top</a>
  </div>
</div>
<div className="card" style={cardStyle}>
<div class="card-header">
  <h1>Interests</h1>
</div>
  <div className="card-body">
    <h3 className="card-title"><h1>Interests</h1></h3>
    <p className="card-text"> Apart from coding, I like playing karate so much, I don’t play for a club but I do pay an instructor to train me every thursdays and saturday. I train almost everyday from five oclock to six. I also fancy music, especially country music, bongo and rock music.</p>

    <a href="#" className="btn btn-primary">Back to top</a>
  </div>
</div>
    </React.Fragment>
  )
}
const cardStyle = {
width:' 100%',
marginTop:'10px',
padding:'5px'
}
