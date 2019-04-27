import requests
from bs4 import BeautifulSoup
import json

f = open('data/gun_list.json', 'r')
gun_list = eval(f.read())
f.close()

gun_data = dict()
for gun in gun_list:
    print(gun + ': ', end='')

    url = gun.replace(' ', '_')
    r = requests.get('https://pubg.gamepedia.com/' + url)
    soup = BeautifulSoup(r.text, 'html.parser')

    overview = soup.find('th', string='Overview\n')
    rows = overview.parent.find_next_siblings('tr')
    gun_data[gun] = dict()
    for row in rows:
        if row.find().name == 'th':
            break
        else:
            pair = row.find_all('td')
            if pair[0].string != None and pair[1].string != None:
               gun_data[gun][pair[0].string.strip()] = pair[1].string.strip()
    
    gun_type = soup.find('td', string='Type')
    gun_data[gun]['Type'] = gun_type.find_next_sibling('td').contents[0].string

    print('Done')

out = open('data/gun_data.js', 'w')
json.dump(gun_data, out, indent=2)
out.close()