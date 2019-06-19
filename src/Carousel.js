import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  }
  
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    photos = media;
    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].url}  alt="animal" />
          <div className="carousel-smaller">
            {photos.map((photo, index) => (
              <img 
                onClick={this.handleIndexClick}
                key={photo.url} 
                data-index={index}
                src={photo.url} 
                className={index === active ? 'active' : ''} 
                alt="park thumbnail" />
            ))}
          </div>
      </div>
    )
  }
}

export default Carousel;