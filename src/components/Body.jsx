import React from 'react';
// Components
import Card from './Card';

export const Body = () =>
    <div className="card">
        <div className="card-body">
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple React Application.</p>
                <hr className="my-4"/>
                <Card title={"Move your mouse inside the box bellow..."}/>
                <hr className="my-4"/>
                <p>I will test some patters and paradigms in this project.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div>;

export default Body;
