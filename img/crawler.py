import requests
from bs4 import BeautifulSoup
import json

f = open('data/gun_list.json', 'r')
gun_list = json.load(f)
f.close()

for gun in gun_list:
    print(gun)

    url = gun.replace(' ', '_')
    r = requests.get('https://pubg.gamepedia.com/' + url)
    soup = BeautifulSoup(r.text, 'html.parser')

    img = soup.find('th', class_='infoboximage').find('img')

    r = requests.get(img.attrs['src'])
    with open("img/" + url + ".png", 'wb') as f:
        f.write(r.content)