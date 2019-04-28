from bs4 import BeautifulSoup

before = '''<section class="column" style="width: 30%;">
            <h1>총기</h1>

            <h2>AR</h2>
            <table>
                <tr>
                <td><input type = "radio" name = "gun" value = "AKM">AKM</td>
                <td><input type = "radio" name = "gun" value = "M16A4">M16A4</td>
                <td><input type = "radio" name = "gun" value = "SCAR-L">SCAR-L</td>
                <td><input type = "radio" name = "gun" value = "M416">M416</td>
                <td><input type = "radio" name = "gun" value = "Groza">Groza</td>
                </tr>
                <tr>
                <td><input type = "radio" name = "gun" value = "AUG A3">AUG</td>
                <td><input type = "radio" name = "gun" value = "Beryl M762">Beryl M762</td>
                <td><input type = "radio" name = "gun" value = "G36C">G36C</td>
                <td><input type = "radio" name = "gun" value = "MK47 Mutant">MK47 Mutant</td>
                <td><input type = "radio" name = "gun" value = "QBZ95">QBZ</td>
                </tr>
            </table>
            
            <h2>SMG/LMG</h2>
            <input type = "radio" name = "gun" value = "Micro UZI">Micro UZI
            <input type = "radio" name = "gun" value = "UMP45">UMP9
            <input type = "radio" name = "gun" value = "Tommy Gun">Tommy Gun
            <input type = "radio" name = "gun" value = "Vector">Vector
            <input type = "radio" name = "gun" value = "DP-28">DP-28
            <input type = "radio" name = "gun" value = "M249">M249
            <input type = "radio" name = "gun" value = "MP5K">MP5K
            <input type = "radio" name = "gun" value = "PP-19 Bizon">PP-19 Bizon
            
            <h2>Shotgun</h2>
            <input type = "radio" name = "gun" value = "S1897">S1897
            <input type = "radio" name = "gun" value = "S686">S686
            <input type = "radio" name = "gun" value = "S12K">S12K
            <input type = "radio" name = "gun" value = "Sawed-off">소드 오프
            
            <h2>SR</h2>
            <input type = "radio" name = "gun" value = "Karabiner 98 Kurz">Kar98
            <input type = "radio" name = "gun" value = "Mini 14">Mini 14
            <input type = "radio" name = "gun" value = "SKS">SKS
            <input type = "radio" name = "gun" value = "VSS Vintorez">VSS
            <input type = "radio" name = "gun" value = "Win94">Win94
            <input type = "radio" name = "gun" value = "AWM">AWM
            <input type = "radio" name = "gun" value = "M24">M24
            <input type = "radio" name = "gun" value = "Mk14 EBR">Mk14
            <input type = "radio" name = "gun" value = "SLR">SLR
            
            <h2>권총</h2>
            <input type = "radio" name = "gun" value = "P18C" >P18C
            <input type = "radio" name = "gun" value = "P1911">P1911
            <input type = "radio" name = "gun" value = "P92">P92
            <input type = "radio" name = "gun" value = "R1895">R1895
            <input type = "radio" name = "gun" value = "R45">R45
            <input type = "radio" name = "gun" value = "Skorpion">Skorpion
            <input type = "radio" name = "gun" value = "Beryl M762">Beryl M762
            <input type = "radio" name = "gun" value = "G36C">G36C
            <input type = "radio" name = "gun" value = "MK47 Mutant">MK47 Mutant
            
            <h2>기타</h2>
            <input type = "radio" name = "gun" value = "Crossbow">석궁
        </section>'''

soup = BeautifulSoup(before, 'html.parser')
for inp in soup.find_all('input'):
    gun = inp.attrs['value'].replace(' ', '_')
    img = soup.new_tag('img', src='img/'+gun+'.png', width='50px')
    br = soup.new_tag('br')
    inp.insert_before(img)
    inp.insert_before(br)

print(soup)