#!/bin/bash

# Check if the file exists
# if [ ! -f "test.txt" ]; then
#     echo "File test.txt does not exist!"
#     exit 1
# fi

# Define the new content
content='unix (connect, receive, send)
     type=stream
     peer=(addr="@/home/spk.no/*/.cache/ibus/dbus-*"),'
new_content='unix (connect, receive, send)
     type=stream
     peer=(addr="@/home/erik/*/.cache/ibus/dbus-*"),'

# Escape special characters in the new content

# Use sed to replace the old content with the new content
sed -i "s/$content/$new_content" snap.firefox.firefox

echo "Text in test.txt has been changed."

# Replace text
# sed -i 's/hello World/hello Erik/' /var/lib/snapd/apparmor/profiles/snap.firefox.firefox

# echo "Text in test.txt has been changed."
