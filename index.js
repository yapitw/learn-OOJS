function Stopwatch () {
  this.duration = 0
  this.watching = false
  this.startTime = null
    
  // Object.defineProperty(this, 'duration', {
  //   get: function(){
  //     return this.duration
  //   }
  // })
}

Stopwatch.prototype.start = function() {
  if (this.watching) throw new Error("Stopwatch has already started.")
  this.watching = true
  this.startTime = Date.now()
}

Stopwatch.prototype.stop = function() {
  if (!this.watching) throw new Error("Stopwatch is not started.")
  this.watching = false
  this.duration += (Date.now() - this.startTime) / 1000
}

Stopwatch.prototype.reset = function () {
  this.duration = 0
  this.watching = false
  this.startTime = null
}

const sw = new Stopwatch()
