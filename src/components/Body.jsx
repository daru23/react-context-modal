import React from 'react';
// Components

export const Body = () =>
    <div className="jumbotron" style={{height: "100vh"}}>
        <p className="display-4">This is a simple React Application.</p>
        <p className="lead">Here I will implement some example and React Paradigms.</p>
        <div className="container">
            <div className="row justify-content-md-center">
                <img className="rotate" src={"/assets/React-Logo.svg.png"} />
            </div>
        </div>
        <hr className="my-4"/>
        <p>I will test some patters and paradigms in this project.</p>
        <ol>
            <li>Toggle Menu: Event Listeners.</li>
            <li>Theme Toggle: ReactJS Context API.</li>
            <li>Mouse Tracker: Render Props.</li>
            <li>Whiteboard: Canvas and Web Sockets.</li>
            <li>Rock, Paper, Scissors: Stateless Components, Containers, Conditional Renders.</li>
        </ol>
        <p className="lead">
            <a className="btn btn-info btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>;

export default Body;
