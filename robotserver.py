#!/usr/bin/env python

# from gpiozero import Robot
import socket
from os import system as sys
import terminator


# front = Robot(left=(7, 8), right=(9, 10))
# back = Robot(left=(10, 19), right=(20, 21))

# https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

PORT = 5005
# BUFFER_SIZE = 20  # Normally 1024, but we want fast response
CODE = "ciao"

sys("cls")

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((socket.gethostname(), PORT))
server.listen(1)

print("Server listening on {}:{}".format(socket.gethostname(), PORT))

while True:
    (socket, address) = server.accept()
    print('New connection:', address)

    request = socket.recv.decode("UTF-8")
    if request == "CONN":
        socket.send(b"AUTH")
        passwd = socket.recv.decode("UTF-8")
        if passwd == CODE:
            while True:
                command = socket.recv.decode("UTF-8")
                if command == "END":
                    socket.send(b"GOODBYE")
                    break
                else:
                    terminator.motors(command.split(" "))
    else:
        socket.send(b"400 Bad Request")
        socket.close()
