class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  clickVideoHandler(a) {
    console.log(this);
  }


  render () {
    return (
     <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.clickVideoHandler} videos={this.state.library}/>
        </div>
      </div>
		);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
