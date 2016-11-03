/**
 * Created by delwar on 10/31/16.
 */
/* eslint-disable no-undef */
function getTwitterFeeds(cb) {
  return fetch(`/api/twitter-feed`, {
    accept: `application/json`
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

function addNewFeed(paramComment, paramCallBack){
  $.ajax({
    url: `api/twitter-feed`,
    dataType: `json`,
    type: `POST`,
    data: {feed: paramComment},
    success: function(data) {
      paramCallBack(null, data);
    },
    error: function(xhr, status, err) {
      paramCallBack(err);
    }
  });

}


const twitterFeedService = { getTwitterFeeds, addNewFeed };
export default twitterFeedService;

