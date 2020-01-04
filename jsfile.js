function myFunction(){
    var table=document.getElementById("mytable");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);

    cell1.innerHTML=document.getElementById("name").value;
    cell2.innerHTML=document.getElementById("number").value;
    cell3.innerHTML=document.getElementById("address").value;

    document.getElementById("name").value="";
    document.getElementById("number").value="";
    document.getElementById("address").value="";


}