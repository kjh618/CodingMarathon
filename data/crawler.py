import requests
from bs4 import BeautifulSoup

f = open('gun_list.txt', 'r')
gun_list = []
for line in f:
    gun_list.append(line.strip())
f.close()

r = requests.get('https://pubg.gamepedia.com/AKM')
soup = BeautifulSoup(r.text, 'html.parser')