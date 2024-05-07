# import subprocess
# subprocess.call(['openconnect', '1'])
import config
import os
import sys
from string import Template
a=Template('sudo openconnect -u ${name} --passwd-on-stdin ${ip}')
print(a.substitute(config.data))
print(config.data)

