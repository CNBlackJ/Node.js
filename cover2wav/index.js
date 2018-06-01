const ffmpeg = require('fluent-ffmpeg');
ffmpeg('test.wav').inputOptions([
  '-f s16be',
  '-ac 2'
]).output('output.wav')
.run()