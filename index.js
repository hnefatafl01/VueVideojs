(function() {
  'use strict';

  var vidContainer = Vue.extend({
  	template: `
      <div>
        <screen></screen>
        <scrubber></scrubber>
        <h1>{{ message }}</h1>
      </div>
    `,
    data: function() {
      return {
        message: "Sup"
      }
    }
  })

  var screen = Vue.extend({
  	template: `
      <div>
        <video
          id="my-player"
          class="video-js"
          controls
          preload="auto"
          width="640"
          height="268"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "http://www.youtube.com/watch?v=xYemnKEKx0c"}], "youtube": { "customVars": { "wmode": "transparent" } } }'>
        </video>

        <video
          id=example-video
          width=600
          height=300
          controls
          class="video-js vjs-default-skin">
        </video>
      </div>
    `,
    data: function() {
      return {
        player: null
        // ,url: "http://www.youtube.com/watch?v=xYemnKEKx0c"
      }
    },
    ready: function() {
      var player = videojs('my-player');
      var player2 = videojs('example-video');
      player2.src({
        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        type: 'application/x-mpegURL',
        withCredentials: true
      });
      // player.play();
    }
  })

  var scrubber = Vue.extend({
  	template: `
      <div>
        <div id="scrub-bar"></div>
        <button v-on:click="scrubTimer()">Scrub</button>
      </div>
    `,
    methods: {
      scrubTimer: function() {
        var bar = document.getElementById("scrub-bar");
        var count = 0;
        var width = 1;
        var id = setInterval(function(){
        	count += 1;
          if (bar >= 100) {
                clearInterval(id);
            } else {
                ++width;
                bar.style.width = width + '%';
            }
        }, 16);
      }
    }
  })

  Vue.component('vid-container', vidContainer);
  Vue.component('screen', screen);
  Vue.component('scrubber', scrubber);

  new Vue({
    el: '#app'
  })
}());
