var nail1=false;
var nail2=false;
var nail3=false;
var nail4=false;
var nail5=false;
function changeNail(id){
  document.getElementById(id).src=id+"done.png";
  if(id=="nail1"){
    nail1=true;
  }
  else if (id=="nail2"){
    nail2=true
  }
  else if (id=="nail3"){
    nail3=true
  }
  else if (id=="nail4"){
    nail4=true
  }
  else if (id=="nail5"){
    nail5=true
  }

  if(nail1 && nail2 && nail3 && nail4 && nail5){
    window.location.replace("aftercar.html");
  }
}
function changeLoc(){
  window.location.replace("door.html");
  onclick = true;
}
var count=1;
function changeDoor(){
  if (count<=10){
  document.getElementById("door").src="door"+count+".png";
  count++;
  }
  if (count>10){
    window.location.replace("clock.html");
  }
}


function clock(){
  document.getElementById('clock').src="tick.gif"
  setTimeout(() => {  window.location.replace("waffle.html") }, 10000);

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function throwIron(){


    document.getElementById('iron').style.left = 1070
    await sleep(300)
    document.getElementById('iron').style.left = 1040
    await sleep(300)
    document.getElementById('iron').style.left = 1010
    await sleep(300)
    document.getElementById('iron').style.left = 980
    await sleep(300)
    document.getElementById('iron').style.left = 950
    await sleep(300)
    document.getElementById('iron').style.left = 920
    await sleep(300)
    document.getElementById('iron').style.left = 890
    await sleep(300)
    document.getElementById('iron').style.left = 860
    await sleep(300)
    document.getElementById('iron').style.left = 830
    await sleep(300)
    document.getElementById('iron').style.left = 800
    document.getElementById('iron').src="exp.gif"
    document.getElementById('iron').style.width="800px"
    document.getElementById('iron').style.top="0px"
    document.getElementById('iron').style.left="300px"
    document.getElementById('bug').style.visibility="hidden"
    await sleep(1400)
    document.getElementById('iron').style.visibility="hidden"
    await sleep(3000)
    window.location.replace("martha.html")






}
