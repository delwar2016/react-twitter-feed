import React from 'react';

const TwitterFeedForm = React.createClass({
  onPostTwitterFeed: function(e){
    e.preventDefault();
    let feed = this.refs.feed;
    this.props.onPostTwitterFeed(feed.value);
    feed.value = "";
  },

  render: function () {
    return (
      <div id='comment-form'>
        <div className="row">
          <div className="col-md-12">
           <textarea  ref="feed" id="feed"  className="form-control" placeholder="Write something here" />
          </div>
          <div className="col-md-12">
            <button type="button" onClick={this.onPostTwitterFeed} className="btn btn-primary float-xs-right">Post</button>
          </div>
        </div>
      </div>
    );
  }
});

export default TwitterFeedForm;
