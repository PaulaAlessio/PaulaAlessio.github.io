#!/bin/bash 
# script to get the label SOLD on the image

#Sold_label
SOLD="./sold.png"

#Check the arguments
if [ $# -ne 2 ] ; then 
  echo "usage: $0 inputfile <horizontal|vertical>" 
  exit;
fi

# Check if the file exists
if [ ! -f  $1 ] ; then 
   echo "File: $1 not found. Exiting"
   exit
fi

output=${1/.jpg/_sold.jpg}

# Do stuff
if [[ "$2" == "vertical" ]] ; then
   echo "Image is vertical, overlaying label sold out."
   convert  -composite $1 ${SOLD} -geometry 2800x1560+0+840 $output
elif [[ "$2" == "horizontal" ]] ; then 
   echo "image is horizontal, overlaying label sold out."
   convert  -composite ${1} ${SOLD} -geometry 3200x2200+40+200  $output

else 
   echo "second parameter should be either horizontal or vertical"
fi
