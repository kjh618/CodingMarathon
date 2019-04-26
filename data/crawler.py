import requests
from bs4 import BeautifulSoup
import json

f = open('data/gun_list.txt', 'r')
gun_list = eval(f.read())
f.close()

gun_datas = []
for gun in gun_list:
    print(gun + ': ', end='')

    gun_url = gun.replace(' ', '_')
    r = requests.get('https://pubg.gamepedia.com/' + gun_url)
    soup = BeautifulSoup(r.text, 'html.parser')
    overview = soup.find('th', string='Overview\n')
    rows = overview.parent.find_next_siblings('tr')

    gun_data = dict()
    gun_data['Name'] = gun
    for row in rows:
        if row.find().name == 'th':
            break
        else:
            pair = row.find_all('td')
            if pair[0].string != None and pair[1].string != None:
                gun_data[pair[0].string.strip()] = pair[1].string.strip()
    gun_datas.append(gun_data)

    print('Done')

out = open('data/gun_data.txt', 'w')
json.dump(gun_datas, out, indent=4)
out.close()