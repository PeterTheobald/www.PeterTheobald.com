#!/bin/bash

# Loop through all image files in the current directory
for img in puzzle2023-*; do
    # Use identify from ImageMagick to get the dimensions of the image
    dimensions=$(identify -format "%w %h" "$img")
    width=$(echo $dimensions | cut -d' ' -f1)
    height=$(echo $dimensions | cut -d' ' -f2)

    # Determine if the image is portrait or landscape
    if [ $width -lt $height ]; then
        # Image is portrait
        echo "Resizing $img to 1500px in width (portrait)."
        convert "$img" -resize 1500x "$img"
    else
        # Image is landscape
        echo "Resizing $img to 1000px in width (landscape)."
        convert "$img" -resize 1000x "$img"
    fi
done

echo "Resizing complete."

