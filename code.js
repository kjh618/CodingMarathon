let bodyParts = [];

function addBodyPart(bodyPart) {
  bodyParts.push[bodyPart];

  let bodyPartList = document.getElementById('body_part_list');
  let item = document.createElement('li')
  item.innerText = bodyPart;
  bodyPartList.append(item);

  console.log("addBodyPart(): " + bodyPart);
}

function removeBodyPart() {
  bodyParts.pop();

  let bodyPartList = document.getElementById('body_part_list');
  bodyPartList.removeChild(bodyPartList.lastChild);

  console.log("removeBodyPart()");
}