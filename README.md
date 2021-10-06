//install the certbot
`npm install certbot`


//tell certbot to make ssl stuff - the .static path is the 'build static path'
`certbot certonly --webroot --agree-tos --email MYEMAIL@DOMAIN.com -w ./static -d domainName.com,www.domainname.com`


//mke ec2-user the owner of lets encrypt
$ `sudo chown ec2-user -R /etc/letsencrypt`

//add ec2-user to the group
// Create group with root and ec2-user as members
$ sudo addgroup nodecert
$ sudo adduser ec2-user nodecert
$ sudo adduser root nodecert

// Make the relevant letsencrypt folders owned by said group.
$ sudo chgrp nodecert /etc/letsencrypt/live
$ sudo chgrp nodecert /etc/letsencrypt/archive

// Allow group to open relevant folders
$ sudo chmod 710 /etc/letsencrypt/live
$ sudo chmod 710 /etc/letsencrypt/archive



//add subdomains.. with the --expand parameter
`certbot certonly --webroot --agree-tos --email EMAILADDRESS -w ./static --expand -d DOMAINS.COM,WWW.DOMAINS.COM`



//select the domains we want to use the --cert-name is the name of the folder that contains the certificates
//keys are saved here.. /etc/letsencrypt/live/DOMAINNAME.COM/privkey.pem

`certbot certonly --webroot --agree-tos --email EMAILADDRESS -w ./static --cert-name DOMAINNAME.COM -d DOMAINS.COM,WWW.DOMAINS.COM`
`certbot certonly --webroot --agree-tos --email EMAILADDRESS -w ./static --cert-name DOMAINNAME.COM -d DOMAINS.COM,WWW.DOMAINS.COM`


# RENEW CERTBOT
<!-- renew the certificate! -->
sudo certbot renew

<!-- after certbot is renewed - run this command to allow ec2-user access to the folder without sudo -->
sudo chown ec2-user -R /etc/letsencrypt
