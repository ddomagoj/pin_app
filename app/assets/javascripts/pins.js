// $ ->
//  $('#pins').imagesLoaded ->
//   $('#pins').masonry
//   itemSelector: '.box'
//    isFitWidth: true
(function() {
  $(function() {
    return $("#pins").imagesLoaded(function() {
      return $("#pins").masonry({
        itemSelector: ".box",
        isFitWidth: true
      });
    });
  });
}.call(this));
