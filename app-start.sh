#!/bin/bash

set -e

node /home/ec2-user/my-app/index.js  > /dev/null 2> /dev/null < /dev/null &
