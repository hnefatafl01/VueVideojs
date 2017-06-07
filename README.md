Your task is to create a vue component that is a scrub bar for multiple, sequential videos. It should be able to support any number of videos, given in an array of video sources. The vue scrub bar component should be video player agnostic (extensible to support any video player for API event emitters).

As an example,
(1) render a YouTube video (https://www.youtube.com/watch?v=7CVtTOpgSyY) in video.js player (http://docs.videojs.com/) integrated with vue.js 1.* (http://v1.vuejs.org/guide/).
(1a) when the YouTube finishes, automatically render an hls video (https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8) in the video.js player.

(2) build a custom vuejs video controls component that supports functionality including play/pause toggle, a full-width scrub bar with playhead to scrub forwards and scrub backwards, a display of current time and full video duration, and a way to toggle mute. Use any additional libraries desired to generate, but ensure implemented as vue.js component.


(3) modify the implementation of the scrub bar so that it supports displaying the entire video length (YouTube + HLS). You can store the durations in a data object fed into the component. Ensure that the current time and full video duration is a combination of the YouTube and HLS (or any number of videos).
(3a) when the user clicks/drags across the scrub bar line (between the two videos), ensure the video source switches and the playback is initiated at the appropriate offset timestamp.
(4) add events to print/log the following events in a div below player:
  (a) video is ready
  (b) video play/pause state has changed
  (c) user has seeked forward/backward in the video
  (d) video source has changed
  (e) video has completed
  (f) video current time has changed (with current time)
  (g) video duration, when available

Send completed jsfiddle to hiring@playposit.com  
