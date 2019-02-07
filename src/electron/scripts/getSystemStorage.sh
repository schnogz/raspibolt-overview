#!/bin/bash
sd_free_ratio=$(printf "%d" "$(df -h | grep "/$" | awk '{ print $4/$2*100 }')") 2>/dev/null
sd=$(printf "%s (%s%%)" "$(df -h | grep '/$' | awk '{ print $4 }')" "${sd_free_ratio}")
echo ${ram}
