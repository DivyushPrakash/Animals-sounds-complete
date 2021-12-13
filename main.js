function start(){
    navigator.mediaDevices.getUserMedia()
   mysoundmodel=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WGjplaLwx/model.json", modelloded);
}

function modelloded(){
    mysoundmodel.classify(getresult);
}

function getresult(errors,resultarray){
 if(errors){
     console.error(errors);
 }
 else {
     console.log(resultarray);
     soundname=resultarray[0].label;
     soundconfidence=resultarray[0].confidence;
     document.getElementById("result_name").innerHTML='I can hear a '+soundname;
     document.getElementById("result_confidence").innerHTML='I am '+Math.floor(soundconfidence*100)+' % sure';
 }

 if(soundname=='cat'){
     document.getElementById("img1").src="Cat.gif";
 }

 if(soundname=='Dog'){
    document.getElementById("img1").src="Dog uncle.gif";
}

if(soundname=='Cow'){
    document.getElementById("img1").src="Cow.gif";
}
}



