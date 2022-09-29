import React from 'react';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import './Questions.css';

const Questions = () => {
    const answers = [
        "ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. React components are reusable and can be used to render different parts of the UI. React components are also known as React elements.",


        "Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.",

        "State: State is a special object that is used to store the data of a component. State is mutable and can be changed. State is private and can be accessed only by the component that owns it.",

        " By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.",

        "The useEffect Hook Usages:    ",
        "1. To fetch data from an API.",
        "2. To set the document title.",
        "3. To set up a subscription.",
        "4. To set up an event listener. ",
        "5. To set up a timer.",
    ];
    return (
        <div className='questions-holder py-5'>
            <div className='container'>
                <h1 className='mb-2 bold'>Questions & Answers</h1>
                {/* <hr /> */}
                <div>
                    <Question question="How does react works?"></Question>
                    <Answer answer={answers[0]}></Answer>


                    <div className='mb-3'></div>


                    <Question question="What are the differences between props and state?"></Question>
                    <Answer answer={answers[1]}></Answer>
                    <Answer answer={answers[2]}></Answer>


                    <div className='mb-3'></div>

                    <Question question="What are the other uses of useEffect except api data loading?"></Question>
                    <Answer answer={answers[3]}></Answer>
                    <Answer answer={answers[4]}></Answer>
                    <Answer answer={answers[5]}></Answer>
                    <Answer answer={answers[6]}></Answer>
                    <Answer answer={answers[7]}></Answer>
                    <Answer answer={answers[8]}></Answer>
                    <Answer answer={answers[9]}></Answer>
                </div>
            </div>
        </div>
    );
};

export default Questions;