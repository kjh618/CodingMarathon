import json

f = open('data/gun_data.js', 'r')
f.readline()
gun_data = json.load(f)
f.close()

f = open('data/gun_data.csv', 'w')
for gun, data in gun_data.items():
    print(gun + ',' + data['Type'], file=f)