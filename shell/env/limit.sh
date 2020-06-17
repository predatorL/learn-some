#! /bin/bash
sudo cat ./limit-config >> /etc/security/limits.conf
sudo cat ./watch-config >> /etc/sysctl.conf
sudo sysctl -p