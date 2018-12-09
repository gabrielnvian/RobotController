from __future__ import print_function
from os import system as sys
from inputs import get_gamepad

sys("cls")
x = 0
y = 0

while True:
	events = get_gamepad()
	for event in events:
		#if event.ev_type == "Absolute":
			# print(event.ev_type, event.code, event.state)
		if event.code != "ABS_X" and event.code != "ABS_Y" and event.code != "ABS_RX" and event.code != "ABS_RY" and event.code != "SYN_REPORT":
			print(event.ev_type, event.code, event.state)