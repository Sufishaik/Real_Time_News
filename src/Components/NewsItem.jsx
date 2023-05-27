import React from 'react'
const NewsItem=(props)=>{   //This is news item component, this is basically card or item which we can see in our app.        
    // let { title, description, imageUrl, newsUrl, author, date, source } =props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display:"flex", justifyContent:"flex-end",position:"absolute",right:0}}>
                        <span className="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
                            {props.source} {/*We are using props here- basically props are argument which is passed from one component to another component.*/}
                        </span>
                    </div>
                    <img src={props.imageUrl} className="card-img-top" alt="<b>Info:- </b>" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <b><p className="card-text mb-3"><small className=" text-primary">By {props.author ? props.author :props.source} on {new Date(props.date).toGMTString()}</small></p></b>
                        <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
export default NewsItem //exporting our News Item component.