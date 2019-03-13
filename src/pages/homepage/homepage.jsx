// imports
import React from 'react';
import Layout from './../../components/Layout/Layout';
import CharacterComponent from './../../components/Character-component/Character-Component';
//import console = require('console');

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rickMortyObj: [],
            rickMortyCards: []
        }
    }

    componentDidMount() {
        const app = this;
        app.getData();
    }

    getData() {
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                rickMortyObj: result.results
            })
            console.log(app.state.rickMortyObj);
        });
    }

    render() {
        const app = this;

        const rickMortyArray = app.state.rickMortyObj;
        console.log('rickMortyArray', rickMortyArray)
        rickMortyArray.forEach((value, key)=> {
            app.state.rickMortyCards.push(
                <CharacterComponent image={value.image}
                                    name={value.name}
                                    species={value.species}
                                    gender={value.gender}
                                    status={value.status}
                                    location={value.location.name}
                                    origin={value.origin.name}
                                    key={key}>
                </CharacterComponent>
            );
        });

        return(
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    <h2>
                        Home Page
                    </h2>
                </div>
                <div className="col-sm-12"></div>
                {this.state.rickMortyCards}
            </div>
        );
    }
}