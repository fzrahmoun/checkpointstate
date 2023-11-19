import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    //Implement a state for person and boolean shows
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'img/jhondoe.jpg',
        profession: 'Software Developer'
      },
      shows: true,
      timeInterval: 0
    };
  }
// when the life cycle of application starts Update every second
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000); // Update every second
  }

// clear Interval when the life cycle of application finish

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

// Appear person information when user click button
  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    return (
      <div>
        <h1>Hello, this is a class-based component!</h1>
        {/*call function^toggle profile and change value button Hide Profile Show Profile onclick*/} 
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName}  style={{width:200,marginTop:10}}/>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
