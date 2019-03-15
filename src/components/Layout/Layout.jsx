import React from 'react';

export default class Layout extends React.Component {
  render(){
    return(
      <div className="[ container-fluid ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 background-color ]">
            <nav className="[ header header__logo ]">
              <img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" alt="Rick and Morty logo" />
            </nav>
          </div>
        </div>
        <div className="[ container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
             {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}