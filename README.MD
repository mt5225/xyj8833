## setup network 
- sudo ifconfig eth0 10.130.32.211 netmask 255.255.254.0
- sudo route add default gw 10.130.33.253 
- more 
- ping 8.8.8.8


## install docker

- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-screen-on-an-ubuntu-cloud-server
- https://github.com/crosbymichael/dockerui


# install phantom js
- sudo docker run cmfatih/phantomjs /usr/bin/phantomjs -v
- sudo docker run -i -t jerry/phantomjs -d cmfatih/phantomjs /bin/bash


