const HP = 100;
const DEFAULT_BODY_PART = 'Upper chest'
const PROTECTED_BY_HELMET = new Set(['Head', 'Neck']);
const PROTECTED_BY_VEST = new Set(['Clavicles', 'Upper chest', 'Lower chest', 'Stomach', 'Pelvis']);

function calculateDamage(gun, helmet, vest, bodyPart) {
  let gunHitDamage = parseInt(GUN_DATA[gun]['Hit Damage']);
  let gunType = GUN_DATA[gun]['Type'];
  let helmetDamageReduction = parseInt(HELMET_DATA[helmet]['Damage Reduction']) / 100;
  let vestDamageReduction = parseInt(VEST_DATA[vest]['Damage Reduction']) / 100;

  let bodyPartModifier = (BODY_PART_MODIFIER['Base'][bodyPart] / 100)
    * (BODY_PART_MODIFIER[gunType][bodyPart] / 100);

  let helmetModifier = 1;
  if (PROTECTED_BY_HELMET.has(bodyPart)) {
    helmetModifier = 1 - helmetDamageReduction;
  }

  let vestModifier = 1;
  if (PROTECTED_BY_VEST.has(bodyPart)) {
    vestModifier = 1 - vestDamageReduction;
  }

  return gunHitDamage * bodyPartModifier * helmetModifier * vestModifier;
}

function calculateShotsToKill(gun, helmet, vest, bodyParts) {
  let damage = 0;
  let count = 0;
  while (damage < HP) {
    let bodyPart;
    if (count >= bodyParts.length) {
      bodyPart = DEFAULT_BODY_PART;
    }
    else {
      bodyPart = bodyParts[count];
    }

    damage += calculateDamage(gun, helmet, vest, bodyPart);
    count++;
  }

  return count;
}

function calculateTimeToKill(gun, helmet, armor, bodyParts) {
  let shotsToKill = calculateShotsToKill(gun, helmet, armor, bodyParts);
  let timeBetweenShots = parseFloat(GUN_DATA[gun]['Time Between Shots']);

  return shotsToKill * timeBetweenShots;
}