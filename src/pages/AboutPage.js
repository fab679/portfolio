import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import me from "../assets/images/me1.jpg";
import '../components/about.css'

function AboutPage(props){
  return(
    <div>
        <Hero title={props.title} />
        <center><img id="photo" src={me} className="justify-content-center"/></center>
        <Content>
        <h5>Hello, my name is Fabisch Kamau. I'm a full stack engineer with experience in  Express JS, Node JS, Oracle SQL, MongoDB, Django, Neo4J, Mysql React and React-Redux.</h5>

        <h5>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas). My long term goal is to build applications with machine learning algorithms and make a career out of it.</h5>

        <h5>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, Sendgrid api's and Node JS</h5>

        <h5> My Homepage is built with React. currently in doesn'nt have a backend because this site is used to show case my skills. However i intend to create a more dynamic to allow clients to post jobs there. I will be launching it in a few months, ill keep you posted</h5>

        <h5>Amoungest some few websites i build are;
        <ol type="1">
        <li>Static web application - <p>This kind of web application displays very little content and is not very flexible.</p></li>
        <li>Dynamic web application - <p>Dynamic web applications are much more complex at a technical level. They use databases for loading data and their contents are updated each time the user accesses them. They generally have an administration panel (called CMS) from where administrators can correct or modify the app’s content including text and images.</p></li>
        <li>Online store or e-commerce - <p>If the web application is an online store or shop, its development is likely to resemble that of m-commerce or an e-commerce site. It must enable electronic payments via credit cards, PayPal or other payment methods. I create a management panel for the administrator. It will be used for listing new products, updating or deleting them and managing orders and payments.</p></li>
        <li>Portal web app - <p>By portal, we are referring to a kind of application in which we access several of its sections or categories through a home page. These apps can include plenty of things:
        <ol type="I">
        <li>Forums</li>
        <li>Chats</li>
        <li>Email</li>
        <li>Serach Engines</li>
        <li>Areas accessed through Registration</li>
        </ol>
        </p>
        </li>
        <li>Web application with a content management system -<p> Content must be continually updated when it comes to web application development, so installing a content management system (CMS) is a serious option to consider. The administrator can make use of this CMS to implement changes and updates.These content managers are intuitive and very user-friendly.</p></li>
        </ol>
        </h5>
        </Content>
    </div>
  );
}
export default AboutPage
