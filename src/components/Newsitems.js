import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left: "90%" }}>{source}</span>
            <img src={!imageUrl?"https://mediaengagement.org/wp-content/uploads/2016/08/shutterstock_204593950-600x565.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}... </p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
            <a href= {newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm rounded btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems