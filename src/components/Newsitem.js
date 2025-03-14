import React, { Component } from 'react'
export class Newsitem extends Component {
    
  render() {
    let {title,description,imageurl,newsUrl,author,date,source}=this.props; //javascript me destructuring ka concept hota hy :this.props ek object hy usme se title and description ko pull kr skte hy
    return (
      <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className=" badge rounded-pill bg-success">{source}</span>
          </div>
            <img src={!imageurl?"https://images.cnbctv18.com/wp-content/uploads/2023/05/TRADE_SETUP_BG-1019x573.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body" >
              <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem