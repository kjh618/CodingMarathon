const BODY_PART_KOREAN = new Map([
  ['Head', '머리'],
  ['Neck', '목'],
  ['Clavicles', '어깨'],
  ['Upper chest', '흉부 상부'],
  ['Lower chest', '흉부 하부'],
  ['Stomach', '배'],
  ['Pelvis', '골반'],
  ['Upper limb', '팔/다리 상부'],
  ['Lower limb', '팔/다리 하부'],
  ['Hand/foot', '손/발'],
]);
const BODY_PART_ID = new Map([
  ['Head', 'head'],
  ['Neck', 'neck'],
  ['Clavicles', 'clavicles'],
  ['Upper chest', 'upper_chest'],
  ['Lower chest', 'lower_chest'],
  ['Stomach', 'stomach'],
  ['Pelvis', 'pelvis'],
  ['Upper limb', 'upper_limb'],
  ['Lower limb', 'lower_limb'],
  ['Hand/foot', 'hand_foot'],
]);
let bodyParts = [];

function cellClicked(radioButton) {
  radioButton.checked = true;

  console.log('cellClicked()');
}

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

function addBodyPart(bodyPart) {
  bodyParts.push(bodyPart);

  let bodyPartList = document.getElementById('body_part_list');
  let item = document.createElement('li')
  item.innerText = BODY_PART_KOREAN.get(bodyPart);
  bodyPartList.appendChild(item);

  console.log("addBodyPart(): " + bodyParts);
}

function removeBodyPart() {
  bodyParts.pop();

  let bodyPartList = document.getElementById('body_part_list');
  if (bodyPartList.lastChild !== null) {
    bodyPartList.removeChild(bodyPartList.lastChild);
  }

  console.log("removeBodyPart()");
}

function updateDamageIndicators(shotsToKill) {
  for (di of document.getElementsByClassName("damage_indicator")) {
    di.innerText = "0";
  }

  for (let i=0; i<shotsToKill.length; i++) {
    let bodyPart;
    if (i >= bodyParts.length) {
      bodyPart = DEFAULT_BODY_PART;
    }
    else {
      bodyPart = bodyParts[i];
    }

    let di = document.getElementById(BODY_PART_ID.get(bodyPart));
    di.innerText = shotsToKill[i].toFixed(1) + "×" + (parseInt(di.innerText.slice(-1)) + 1);
  }
}

function enter() {
    let a = radio_chk("gun");
    let b = radio_chk("helmet");
    let c = radio_chk("bodyshield");

    document.getElementById("time").innerText = "킬까지 걸리는 시간: " + calculateTimeToKill(a, b, c, bodyParts).toFixed(3) + "초";
    let shotsToKill = calculateShotsToKill(a, b, c, bodyParts);
    let shotsToKillString = "";
    shotsToKill.forEach(shot => {
      shotsToKillString += shot.toFixed(1) + ", ";
    });
    document.getElementById("damage").innerText = "총알 당 데미지: " + shotsToKillString.slice(0, -2);
    document.getElementById("shots").innerText = "필요한 총알 수: " + shotsToKill.length;

    updateDamageIndicators(shotsToKill);

    console.log("enter(): " + bodyParts);
}
function showHelp(){
  window.open("views/help.html","a", "width=1000,height = 550,left = 100, top = 50");
}