import React from 'react';
import './BlogComponent.css';

const BlogComponent = ({ data }) => {
    return (
        
            <div className="col-md-4 ">
               
              <div className="m-3 p-3 blog-card">
              <div className="d-flex">
                    <img src={data.img} alt="" sizes="50px" className="img-fluid blog-img"></img>
                    <div>
                    <h6>{data.name}</h6>
                    <small className="text-secondary">{data.date}</small>
                    </div>
                </div>
                <h5 className="pt-3 pb-1">{data.title}</h5>
                <p className="text-secondary">{data.description}</p>
               
              </div>
            </div>
        
    );
}

export default BlogComponent;