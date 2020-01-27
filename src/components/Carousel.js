import React from 'react';

import Card from '../components/Card';

import cool from '../assets/images/cool.svg';
import django from '../assets/images/django.jpg';
import datascience from '../assets/images/datascience.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'React',
                    subTitle: 'UI and Frontend Development',
                    imgSrc: cool,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Django',
                    subTitle: 'Backend Development',
                    imgSrc: django,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Data Science',
                    subTitle: 'AI and Machine Learning Algorithims',
                    imgSrc: datascience,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
            <h1>Portfolio</h1>
            <h3>Currently  i have no complete projects but as i finish some i will be posting the here. Hire me let me showcase your site here.</h3>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
