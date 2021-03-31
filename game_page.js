player1=localStorage.getItem("player1")
player2=localStorage.getItem("player2")
document.getElementById("p1name").innerHTML=player1+" : "
document.getElementById("p2name").innerHTML=player2+" : "
p1score=0
p2score=0
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("Qturn").innerHTML="Question turn - "+player1
document.getElementById("Aturn").innerHTML="Answer turn -"+player2




function send(){
    gord=document.getElementById("word").value;
    Qword=gord.toLowerCase()
    console.log(Qword)
    //Code for replacing the first letter//
    letter1=Qword.charAt(1)
    console.log(letter1)
    replace1=Qword.replace(letter1," _ ")
    console.log(replace1)
    //Code for replasion of the second letter//
    x=Qword.length-1
    letter2=Qword.charAt(x)
    console.log(letter2)
    replace2=replace1.replace(letter2, " _ ")
    console.log(replace2)
    //Code for replasion of third lettererw//
    y=Math.floor(Qword.length/2)
    letter3=Qword.charAt(y)
    console.log(letter3)
    replace3=replace2.replace(letter3, " _ ")
    console.log(replace3)


    Qtag=`<h4>Q. ${replace3}</h4>`
    Atag=`<br> Answer <input type="text" id="answer" >`
    buttontag=`<br><br> <button class="btn btn-primary" onclick="check()">Check</button>`
    document.getElementById("output").innerHTML=Qtag+Atag+buttontag 
    document.getElementById("word").value="" 
}
Qturn="player1"
Aturn="player2"
function check(){
    getanswer=document.getElementById("answer").value
    answer=getanswer.toLowerCase()
    if (answer==Qword) {
      if (Aturn=="player1") {
          p1score=p1score+1
          document.getElementById("p1score").innerHTML=p1score   
      }
      else{
          p2score=p2score+1
          document.getElementById("p2score").innerHTML=p2score
      }
    }
    if (Aturn=="player1") {
        Aturn="player2"
        document.getElementById("Aturn").innerHTML="Answer turn -"+player2
    } else {
        Aturn="player1"
        document.getElementById("Aturn").innerHTML="Answer turn -"+player1
    }
    if (Qturn=="player1") {
        Qturn="player2"
        document.getElementById("Qturn").innerHTML="Question turn -"+player2
    } else {
        Qturn="player1"
        document.getElementById("Qturn").innerHTML="Question turn -"+player1
    }
    document.getElementById("output").innerHTML=""
}