import React from 'react';

const Blogs = () => {
    return (
        <section className='ml-20 mr-20 mx-28 mt-20 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>

                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.

                        Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues.

                        So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. </p>
                    <li>Makes the Process Agile</li>
                    <li>Quality of Code</li>
                    <li>Finds Software Bugs Early</li>
                    <li>Facilitates Changes and Simplifies Integration</li>
                    <li>Provides Documentation</li>
                    <li>Debugging Process</li>
                    <li>Design</li>
                    <li>Reduce Costs</li>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>
                        <strong>Go for Angular if you want:</strong>
                        <li>To develop a large, multifunctional application.</li>
                        <li>Reliable and scalable framework.</li>
                        <li>Real-time apps, chats, or messengers.</li>
                        <li>Long-term and significant investment initiatives in native apps or web applications.</li>
                       
                        <strong className='mt-5'>Choose **React **if you want:</strong>
                        <li>Lightweight modern apps in a short time.</li>
                        <li>Secure mobile solutions for web development.</li>
                        <li>To develop cross-platform or single-page mobile applications.</li>
                        <li>To add new features to an existing program.</li>
                        
                        <strong className='mt-5'>Decide on Vue.js if you want:</strong>
                        <li>Single-page applications.</li>
                        <li>Dynamic, high-performance applications enable because of the virtual DOM.</li>
                        <li>Easy-to-use framework, for a ficilitated application development.</li>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;