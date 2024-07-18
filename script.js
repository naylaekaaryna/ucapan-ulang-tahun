var a1=0,varketik1;varketik1 = kalimat.innerHTML;kalimat.innerHTML="";
function mulaiketik1() {if(a1<varketik1.length){kalimat.innerHTML += varketik1.charAt(a1);a1++;setTimeout(mulaiketik1,70);}
                       if(a1==varketik1.length){setTimeout(mulaiketik2,100)}}
var a2=0,varketik2;varketik2 = kalimatb.innerHTML;kalimatb.innerHTML="";
function mulaiketik2() {if(a2<varketik2.length){kalimatb.innerHTML += varketik2.charAt(a2);a2++;setTimeout(mulaiketik2,140);}
                       if(a2==varketik2.length){setTimeout(mulaiketik3,100)}}
var a3=0,varketik3;varketik3 = kalimatc.innerHTML;kalimatc.innerHTML="";
function mulaiketik3() {if(a3<varketik3.length){kalimatc.innerHTML += varketik3.charAt(a3);a3++;setTimeout(mulaiketik3,200);}
                       if(a3==varketik3.length){}}