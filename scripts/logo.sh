#!/bin/bash

NAME="Vicious Player"
GOAL=( Music Anonymous Dedication )

Center () {
  COLUMNS=`tput cols`
  LINES=`tput lines`
  LINE=$1
  column=`expr \( $COLUMNS - 6 \) / 2`
  column=`expr $column - $2`
  tput cup $LINE $column
  tput rev
}

Company () {
  len=`echo ${NAME}|wc -c`
  Center 2 `expr $len / 2`
  
  tput sgr0
  tput setaf 2
  echo $NAME
}

Goal () {
  len=`echo ${GOAL[$1]}|wc -c`
  Center 3 `expr $len / 2`

  tput el1
  tput el
  
  tput sgr0
  tput setab 7
  tput setaf 0

  echo -e "${GOAL[$1]}"
}

# clear the screen
tput clear
tput sc

for i in $(seq 0 2); do
  Company
  sleep 1
  Goal `expr $i % 3`
done

tput sgr0
read -p "Yo Macha, /src where?" choice

tput rc
