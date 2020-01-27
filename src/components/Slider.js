import React from 'react';
import { render } from 'react-dom';
import Button from 'react-bootstrap/Button';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import cool from './images/me.jpg';
import cool1 from './images/me1.jpg';
import rce from './images/rce.svg';
import django from './images/django.jpg';


function Slide(){
      const content = [{
        title: 'Freelancer',
        description:
        'Hi, im a Web Developer. I have specialized in React and Django.',
        button: 'Discover',
        image: cool,
        user: 'Fabisch Kamau',
        userProfile: cool1,
        url:""
      },
      	{
          title: 'React, React-Redux',
          description:
          'I use React framework to build UI and Frontend Apllications. It me helps build dynamic interfaces and routing. Its beatiful and i love coding with React. If intrested please hire me.',
          button: 'Read More',
          image: 'https://i.imgur.com/ZXBtVw7.jpg',
          user: 'React Developers',
          userProfile: rce,
          url:'https://reactjs.org/'
      	},
      	{
      		title: 'Django',
      		description:
      		'Django is a free open source framework. It is great to build backend projects and easy to intergrate with frontends such as React. I love coding with Django its easy and uses Pyhton my favourite coding language.',
      		button: 'Read More',
      		image: 'https://i.imgur.com/DvmN8Hx.jpg',
      		user: 'Django Developers',
      		userProfile: django,
          url:'https://www.djangoproject.com/'
      	}
      ];
        return(
      	<div>
      		<Slider className="slider-wrapper" autoplay={3000}>
      			{content.map((item, index) => (
      				<div
      					key={index}
      					className="slider-content"
      					style={{ background: `url('${item.image}') no-repeat center center` }}
      				>
      					<div className="inner">
      						<h1>{item.title}</h1>
      						<p>{item.description}</p>
      						<a href={item.url} target="_blank"><Button variant="outline-warning" size="lg"> {item.button}</Button></a>
      					</div>
      					<section>
      						<img src={item.userProfile} alt={item.user} />
      						<span>
      							Posted by <strong>{item.user}</strong>
      						</span>
      					</section>
      				</div>
      			))}
      		</Slider>
      	</div>);
    }
    export default Slide
