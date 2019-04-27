function radio_chk(name){
    if (name == "gun"){
        var radio_button = document.getElementsByName(name);
        var radio_button_check = 0;
        for (var i = 0; i < radio_button.length; i++){
            if(radio_button[i].checked == true){
                radio_button_check++;
                return radio_button[i].value;
            }
        }
        if(radio_button_check == 0){
            alert("선택해주세요");
            return;
        }
    }
    else if (name == "helmet" || name == "bodyshield"){
        var radio_button = document.getElementsByName(name);
        var radio_button_check = 0;
        for (var i = 0; i < radio_button.length; i++){
            console.log(i);
            if (radio_button[i].checked == true){
                radio_button_check++;
                return i
            }
        }
        if(radio_button_check == 0){
            alert("선택해주세요");
            return;
        }
    }
}

let bodyParts = [];

function addBodyPart(bodyPart) {
  bodyParts.push[bodyPart];

  let bodyPartList = document.getElementById('body_part_list');
  let item = document.createElement('li')
  item.innerText = bodyPart;
  bodyPartList.appendChild(item);

  console.log("addBodyPart(): " + bodyPart);
}

function removeBodyPart() {
  bodyParts.pop();

  let bodyPartList = document.getElementById('body_part_list');
  bodyPartList.removeChild(bodyPartList.lastChild);

  console.log("removeBodyPart()");
}

function enter(){
    var a = radio_chk("gun");
    var b = radio_chk("helmet");
    var c = radio_chk("bodyshield");
    var d = bodyParts;
    document.getElementById("time").innerText = "킬까지 걸리는 시간:" + calculateTimeToKill(a,b,c,d) + "초"
    document.getElementById("damage").innerText = "총 데미지:" + calculateDamage(a,b,c,d)
    document.getElementById("shots").innerText = "필요한 총알 수:" + calculateShotsToKill(a,b,c,d) + "개"
}