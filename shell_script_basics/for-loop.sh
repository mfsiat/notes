#! /usr/bin/bash

# FOR LOOP
NAMES="Siat Nasir Sujon Wasif Juwel Shakill"
for NAME in $NAMES 
    do 
        echo "Hello $NAME"
done

# FOR LOOP RENAME
# NEW="notun nam dilam"
# for NAME in $NAMES
#     do 
#         echo "Renaming the names $NAME to new-$NAME"
#         mv $NAME $NEW-$NAME
# done

FILES=$(ls *.txt)
NEW="new"
for FILE in FILES
    do 
        echo "Renaming $FILE to new-$FILE"
        mv $FILE $NEW-$FILE
done
