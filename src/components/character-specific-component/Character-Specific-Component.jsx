// imports
import React from 'react';

export default class CharacterSpecificComponent extends React.Component {
    render() {
        return(
            <div className="[ row character ]">
                <div className="[ col-sm-4 ]">
                    <img className="[ card__img ]" src={this.props.image} alt=""/>
                </div>
                <div className="[ col-sm-8 character__text character__text--title ]">
                    <h2>
                        {this.props.name}
                    </h2>
                    <p>{this.props.species}</p>
                </div>
            </div>
        );
    }
}