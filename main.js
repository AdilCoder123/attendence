var nameofstudent=[];
function submit()
{
var name1=document.getElementById("student_1").value;
var name2=document.getElementById("student_2").value;
var name3=document.getElementById("student_3").value;
var name4=document.getElementById("student_4").value;
 nameofstudent.push(name1);
 nameofstudent.push(name2);
 nameofstudent.push(name3);
 nameofstudent.push(name4);
 console.log(nameofstudent);
 document.getElementById("displayname").innerHTML=nameofstudent;
 document.getElementById("sumbit_button").style.display="none";
 document.getElementById("sortbuton").style.display="inline-block";
}
function sorting()
{
    nameofstudent.sort();
    document.getElementById("displayname").innerHTML=nameofstudent;
}

