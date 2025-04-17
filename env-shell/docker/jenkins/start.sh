#! /bin/bash
sudo docker run jenkins/jenkins \
    --name jenkins \
    --detach \
    -p 50000:50000 \
    -p 8080:8080 \
    -v /data/jenkins_home:/var/jenkins_home \
    --privileged=true
    -u waaaagh