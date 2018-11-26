import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';

function Hero() {
    return (
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
        </div>);
}

function Turn() {
    return (<div />);
}

function Continue() {
    return (<div />);
}

function Footer() {
    return (
        <div id="footer" className="row">
            <div className="col-12 text-center">
                <p className="text-muted credit">All images are from Wikimedia Commons.</p>
            </div>
        </div>
    );
}

function AuthorQuiz() {
    return (
        <div className="container-fluid">
            <Hero />
            <Turn />
            <Continue />
            <Footer />
        </div>
    );
}

export default AuthorQuiz;
