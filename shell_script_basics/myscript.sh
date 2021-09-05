#! /usr/bin/bash

# ECHO COMMAND
echo Hello world!

# VARIABLES
# Uppercase by convention
# Letters, numbers, underscores
NAME="Siat"
NAME3="Manik"
NAME4="Wasif"
echo "My Name is $NAME"
echo "My Name is ${NAME}"

# USER INPUT
read -p "Enter your name: " NAME2
echo "Hello $NAME2, You entered $NAME2!"

# SIMPLE IF STATEMENT
if [ "$NAME3" == "Manik" ]
then
    echo "Your name is $NAME3"
fi

# SIMPLE IF ELSE STATEMENT
if [ "$NAME4" == "Manik" ]
then
    echo "Your name is $NAME3"
else
    echo "Your name is not Wasif"
fi

# SIMPLE ELSE IF (elif)
if [ "$NAME2" == "Siat" ]
then
    echo "Your name is Siat"
elif [ "$NAME2" == "Manik" ]
then
    echo "Your name is Manik"
else
    echo "Your name is not on the list"
fi

# CASE STATEMENT
read -p " Are you 25 years old? Y/N " ANSWER
case "$ANSWER" in
    [yY] | [yY][eE][sS]) 
        echo "You should get a job!"
        ;;
    [nN] | [nN][oO])
        echo "Chill, world is not over yet!"
        ;;
    *)
        echo " This is just the default statement please enter y/yes or n/no "
        ;;
esac