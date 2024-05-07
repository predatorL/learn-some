#! /bin/bash
echo 'source back'
# sudo cp /etc/apt/sources.list /etc/apt/sources.list_back
echo 'insert ali source'
cat ./ali-source /etc/apt/sources.list > temp
_dir=$(pwd)
sudo su
pwd
echo "${_dir}"
exit
# sudo cat temp > /etc/apt/sources.list
# rm temp
echo "done"