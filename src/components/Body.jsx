import React from 'react';
// Components

export const Body = () =>
    <div className="jumbotron" style={{height: "100vh"}}>
        <p className="display-4">This is a simple React Application.</p>
        <p className="lead">Here I will implement some example and React Paradigms.</p>
        <img className="mx-auto" src={"/assets/React-Logo.svg.png"} />
        <hr className="my-4"/>
        <p>I will test some patters and paradigms in this project.</p>
        <p className="lead">
            <a className="btn btn-info btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>;

export default Body;
