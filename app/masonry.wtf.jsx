import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

class MasonryWTF extends React.Component {
  render() {
    const childElements = this.props.elements.map(element => (
      <li className="image-element-class">
        <img src={ element.src } />
      </li>
           ));

    return (
      <Masonry
        className={ 'my-gallery-class' } // default ''
        elementType={ 'ul' } // default 'div'
        options={ masonryOptions } // default {}
        disableImagesLoaded={ false } // default false
        updateOnEachImageLoad={ false }
      >
        {childElements}
      </Masonry>
    );
  }
}

export default MasonryWTF;
