function getre{
    var falg = 1;
    var id = document.getElementById("id").value;
    alert("Hello");
    if (!/\d+/.test(id)) {
        falg = 0;

    }
    var name = document.getElementById("name").value;
    if (!/\D+/.test(name)) {
        falg = 0;
    }
    var nation = document.getElementById("nation").value;
    if (!/\D+/.test(nation)) {
        falg = 0;
    }
    var classes = document.getElementById("class").value;
    if (!/\d+/.test(classes)) {
        falg = 0;
    }
    var chinese_core = document.getElementById("Chinese").value;
    if (!/\d+/.test(chinese_core)) {
        falg = 0;
    }
    var math_core = document.getElementById("Math").value;
    if (!/\d+/.test(math_core)) {
        falg = 0;
    }
    var English_core = document.getElementById("English").value;
    if (!/\d+/.test(English_core)) {
        falg = 0;
    }
    if(falg==0){
        alert("请输入正确格式")
    }
    else{
        document.write(id+name+nation+classes+chinese_core+math_core+English_core);
    }
}/**
 * Created by lenovo on 2017/7/25.
 */
