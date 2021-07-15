function Change(){
    if(document.getElementById('butn').style.backgroundColor == "black"){
        document.getElementById('bd').style.backgroundColor = "black";
        document.getElementById('butn').style.backgroundColor = "white";
        document.getElementById('butn').style.backgroundImage = "url('https://img-blog.csdnimg.cn/20210711184152898.png')";
        document.getElementById('divDay').id = "divNight";
    }else{
        document.getElementById('bd').style.backgroundColor = "white";
        document.getElementById('butn').style.backgroundColor = "black";
        document.getElementById('butn').style.backgroundImage = "url('https://img-blog.csdnimg.cn/20210715112625570.png')";
        document.getElementById('divNight').id = "divDay";
    }
}
