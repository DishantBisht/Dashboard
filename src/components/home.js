import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  return (
    <div className='Home container'>
      <div className='box1 content-box'>
        <div className="card text-white" style={{backgroundColor:'#4863fc'}}>
          <div className="card-body">
            <h3 className="card-title">Welcome Back Chirag</h3>
            <p className="card-text">We are glad that you chose Techokids for your online live coding classes. This dashboard provides you many opportunities to explore and learn with Ns. Checkout our freemium package to kickstart your learning.</p>
          </div>
        </div>
      </div>
      <div className='box2 content-box'>
        <div className="card">
            <div className='row m-1 p-1 justify-content-center'>
              <img src={process.env.PUBLIC_URL + './chirag.png'} className='img-fluid' />
            </div>
            <div className='row m-1 justify-content-center'>
              <div className="container" style={{width:'150px'}}>
                <CircularProgressbar value='75' text={`75%`} circleRatio='0.75'/>
              </div>
            </div>
        </div>
      </div>
      <div className='box3'>

        <div className='box31 content-box'>
          <div className="card">
            <div className="card-body">
            <h3 className="card-title">Class 4</h3>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="#" className="btn btn-primary">Join Now</a>
            </div>
          </div>
        </div>

        <div className='box32 content-box'>
        <div className="card">
            <div className="card-body">
              <h3 className="card-title">Class 5</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='box4'>
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={process.env.PUBLIC_URL + './timeline.png'} alt="First slide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;