(function () {
  resize()
  window.onresize = function() {
      resize()
  }
  function resize() {
      var clientWidth = document.documentElement.clientWidth
      if (clientWidth > 1920) {
          clientWidth = 1920
      }
      document.documentElement.style.fontSize = clientWidth / 19.2 + 'px';
  };
  document.oncontextmenu = function(e){
    return false;
  }
})()