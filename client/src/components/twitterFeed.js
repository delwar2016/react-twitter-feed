import React from 'react';
import TwitterFeedService from '../service/twitterFeed.Service';
import TimeAgo from 'react-timeago';

const CommentSearch = React.createClass({
  getInitialState: function () {
    return {
      comments: [],
      comment: ''
    };
  },

  handleSearchChange: function (e) {
    const value = e.target.value;
    this.setState({
      comment: value
    });

  },

  loadCommentsFromServer: function () {
    TwitterFeedService.getTwitterFeeds((comments) => {
      this.setState({
        comments: comments
      });
    });
  },

  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 15*1000);
  },

  onPostComment: function(e){
    var me = this;
    var comments = this.state.comments;
    var comment = this.refs.comment;
    TwitterFeedService.addNewFeed(this.state.comment, (err, newPost) =>{
      comments.unshift(newPost);
      me.setState({
        comments: comments,
        comment: ''
      });
      comment.value = "";
    });
  },

  render: function () {
    return (
      <div id='comment-search'>
        <div className="row">
          <div className="col-md-12">
           <textarea onChange={this.handleSearchChange} ref="comment" id="comment"  className="form-control" placeholder="Write something here" />
          </div>
          <div className="col-md-12">
            <button type="button" onClick={this.onPostComment} className="btn btn-primary float-xs-right">Post</button>
          </div>
        </div>

          {
            this.state.comments.map((comment, idx) => (
              <div className="card" key={comment._id}>
                <div className="card-block">
                  <h4 className="card-title">{comment.author}</h4>
                  <p className="card-text">{comment.feed}</p>
                  <p className="card-text">
                    <small className="text-muted"><TimeAgo date={comment.feed_on} /></small>
                  </p>
                </div>
              </div>
            ))
            }

      </div>
    );
  }
});

export default CommentSearch;
