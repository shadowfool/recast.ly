var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'get',
    success: function(data) {
      callback(data);
    },
    data: {part: 'snippet', key: options.key, q: options.query, maxResults: 5}

  });

};
window.searchYouTube = searchYouTube;
