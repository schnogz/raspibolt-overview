#!/bin/bash
echo `uptime` | awk -F'[ ,:\t\n]+' '{
    msg = ""
    if ($5 == "day" || $5 == "days") {      # up for a day or more
        msg = msg $4 " " $5 ", "
        n = $6
        o = $7
    } else {
        n = $4
        o = $5
    }
    if (int(o) == 0) {                      # words evaluate to zero
        msg = msg int(n)" "o
    } else {                                # hh:mm format
        msg = msg int(n)" hour"
        if (n > 1) { msg = msg "s" }

        msg = msg ", " int(o) " minute"
        if (o > 1) { msg = msg "s" }
    }
    print msg
}'
