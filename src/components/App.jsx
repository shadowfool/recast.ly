class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.search({key: window.YOUTUBE_API_KEY, query: 'cat'}, function(data) {
      this.setState({library: data.items});
      // this is async and it doesn't work - FIX THIS LATER
      this.setState({currentVideo: this.state.library[0]});
      this.render();
    }.bind(this));

    this.state = {
      library: [],
      currentVideo: exampleVideoData[0]
    };
  }
  
  clickVideoHandler(props) {
    this.setState({
      currentVideo: props.video	
    });
  }

  clickSearchHandler(props) {
    var options = {part: 'snippet', key: window.YOUTUBE_API_KEY, q: props.q, maxResults: 5};
    this.setState({
      library: props.search(options)
    });
  }

  render () {
    return (
     <div>
        <Nav onClick={this.clickSearchHandler.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.clickVideoHandler.bind(this)} videos={this.state.library}/>
        </div>
      </div>
		);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
