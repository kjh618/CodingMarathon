import requests
from bs4 import BeautifulSoup

f = open('data/gun_list.txt', 'r')
gun_list = []
for line in f:
    gun_list.append(line.strip())
f.close()

out = open('data/gun_data.txt', 'w')

for gun in gun_list:
    print(gun + ': ', end='')

    gun_url = gun.replace(' ', '_')
    r = requests.get('https://pubg.gamepedia.com/' + gun_url)
    soup = BeautifulSoup(r.text, 'html.parser')
    overview = soup.find('th', string='Overview\n')
    rows = overview.parent.find_next_siblings('tr')

    out.write(gun + '\n')
    for row in rows:
        if row.find().name == 'th':
            break
        else:
            pair = row.find_all('td')
            if pair[0].string != None and pair[1].string != None:
                out.write(pair[0].string.strip() + ': ' + pair[1].string.strip() + '\n')
    out.write('---\n')

    print('Done')

out.close()