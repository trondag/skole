window.onload = oppstart;

var sko_navn = [["Ecco",1399],[ "Pensko", 1599],["Sneaker", 799],[ "CoolShoe", 899]]
var handlekurv = {};


function oppstart(){
  fyllOppMedSkoPostere()

  document.getElementById("sko_cont_1").onclick = oppdaterAntall;
  document.getElementById("loggInn").onclick = aapneLoggInn;
  document.getElementById("lukkLoggInn").onclick = lukkLoggInn;
  document.getElementById("kjopKnapp").onclick = leggTilIHandlekurv;
}

function fyllOppMedSkoPostere(){
  for (var i = 0; i <= 3 ; i++){
    lagSkoPoster(i+1);
    
  }
}

function lagSkoPoster(i){
  var skoSection = document.createElement("section")
  skoSection.className = "sko-poster";
  skoSection.id = i;
  var tagInnhold = "<img src=\"bilder/sko/sko" + i 
    + ".jpg\" /> <p>" + sko_navn[i-1][0] + "</p><p> Kr "
    + sko_navn[i-1][1] + ",-</p><div class=\"antall_container\"/>"
    + "<i class=\"fas fa-minus\"  value=\"" + i + "-\"></i>"
    + "<p id=\"skoAntall" + i + "\">1</p>"
    + "<i class=\"fas fa-plus\" value=\""+i+"+\"></i>"
    + "<div class=\"kjopKnapp\" id=\"kjopKnapp" + i + "\"><object"
    + " type=\"image/svg+xml\" data=\"bilder/logo/pose.svg\""
    + " fill=\"white\"></object></div></div>";
    skoSection.innerHTML = tagInnhold;
  document.getElementById("sko_cont_1").appendChild(skoSection);
}

function oppdaterAntall(event){
  var plussEllerMinus = "";
  if(event.srcElement.parentElement.attributes[1] === undefined){
    plussEllerMinus = event.path[0].attributes[1].nodeValue
  } else if (plussEllerMinus === ""){
    plussEllerMinus = event.srcElement.parentElement.attributes[1].nodeValue;
  }
  
  var streng = "#skoAntall" + plussEllerMinus.charAt(0);
  if (plussEllerMinus.charAt(1) === "+"){
    document.querySelector(streng).innerHTML ++;
  } else if (plussEllerMinus.charAt(1) === "-"){
      if(document.querySelector(streng).innerHTML === "1"){
        return;
      }
    document.querySelector(streng).innerHTML --;
  }
}

function aapneLoggInn(){
  document.getElementById("loggInnPanel").style.display = "inline";
  document.querySelector("header").style.filter = "blur(8px)";
  document.querySelector("nav").style.filter = "blur(8px)";
  document.querySelector("main").style.filter = "blur(8px)";
  document.querySelector(".underMeny").style.filter = "blur(8px)";
}

function lukkLoggInn(){
  document.getElementById("loggInnPanel").style.display = "none";
  document.querySelector("header").style.filter = "none";
  document.querySelector("nav").style.filter = "none";
  document.querySelector("main").style.filter = "none";
  document.querySelector(".underMeny").style.filter = "none";
}

function leggTilIHandlekurv(){
  
}


