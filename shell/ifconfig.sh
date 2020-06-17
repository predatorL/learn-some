#! /usr/bash
ifconfig ens33 | grep 'inet addr' | awk '{printf $2}' | awk -F: '{printf $2}'
 