## setup network 
- sudo ifconfig eth0 10.130.32.211 netmask 255.255.254.0
- sudo route add default gw 10.130.33.253 
- more 
- ping 8.8.8.8


## install docker

- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-screen-on-an-ubuntu-cloud-server
- https://github.com/crosbymichael/dockerui


## install phantom js
```
- sudo docker run cmfatih/phantomjs /usr/bin/phantomjs -v
- sudo docker run -i -t -d cmfatih/phantomjs /bin/bash
```

## run casperjs script
```
root@63706c575eb6:/xyj8833/lab# casperjs gsearch.js 
```

## screen commands
```
- Ctrl-a c  //create an new screen
- Ctrl-a d  //detach
- Ctrl-a w  //list all screens
- screen -r //attach
```

## install mongoDB
```
docker run --name xyj-mongo -d mongo
```

##commit an image
```
 sudo docker commit 63706c575eb6 jerry/casper_stp:version001
```
##enable sshd
```
apt-get install openssh-server
commit container to image
sudo docker run -d -p 10.130.32.211:9822:22 --name stp mt5225/casper_stp:0.0.1 /bin/sh -c "/etc/init.d/ssh start;
while true;do echo hello;sleep 100;done"
```