import React from 'react';
import './Blog.css';
import henry from '../../../images/henry.png';
import anjelina from '../../../images/anjelina.png';
import BlogComponent from './BlogComponent';
import {FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const blogData = [
        {
            img: henry,
            name: 'Dr. Henry',
            date: '5 August 2021',
            title: '2 times of brush in a day can keep you  healthy',
            description: 'it is long established fact that by the readable content of a lot layout'
        },
        {
            img: anjelina,
            name: 'Dr Anjelina',
            date: '5 August 2021',
            title: 'The tooth cancer is taking a challange',
            description: 'it is long established fact that by the readable content of a lot layout'
        }
    ]
    return (
        <div className="w-75 offset-1 mt-5">
            <div style={{textAlign:'center'}}>
                <h6 style={{color:'#1cc7c1'}}>OUR BLOG</h6>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row pt-5  pb-5" >
                <div className="col-md-4 blog-quote" >
                    <div className="text-white mt-3" style={{zIndex:'10'}}>
                        <h6>Rashed Kabir</h6>
                        <small>5 August 2021</small>
                        <h5 className="mt-3">Check at least a doctor in a year for your teeth</h5>
                        <FaArrowRight style={{transform:'translateY(70px)'}} color="white" />
                    </div>
                </div>
                {
                    blogData.map(each => <BlogComponent data={each}></BlogComponent>)
                }
            </div>
        </div>
    );
};

export default Blog;