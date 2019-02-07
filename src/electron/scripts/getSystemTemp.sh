#!/bin/bash
cpu=$(cat /sys/class/thermal/thermal_zone0/temp)
temp=$((cpu/1000))
temp+=$'\xc2\xb0'C
echo ${temp}
