function radio_chk(name){
    if (name == "gun"){
        var radio_button = document.getElementsByName(name);
        var radio_button_check = 0;
        for (var i = 0; i < radio_button.length; i++){
            if(radio_button[i].checked == true){
                radio_btn_check++;
                return radio_button[i].value;
            }
        }
        if(radio_button_check == 0){
            alert("선택해주세요");
            return;
        }
    else if (name == helmet || name == bodyshield){
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
function enter(){
    var a = radio_chk(gun)
    var b = radio_chk(helmet)
    var c = redio_chk(bodyshield)
    caculateDamage(a,b,c)
}