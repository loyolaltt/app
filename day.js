
var staticUrl="https://script.google.com/macros/s/AKfycbwuUBr8SVCJS6jXYNV0NzxzjjjTW7EGhmDS-Uxboc23a4Q3J7jwlEJa3e7QJyf6ef2O/exec"

var data=$.getJSON(staticUrl, function(data){

    console.log("Hello");

    var today=new Date();
    var dd=String(today.getDate()).padStart(2,'0');  //january is 0
    var mm=String(today.getMonth()+1).padStart(2,'0');
    var yyyy=today.getFullYear();

    today = mm+'/'+dd+'/'+yyyy;
    // console.log(today); 



    // Fetching the needed Value from JSON API
    var results=[];
    var searchField = "Datee";
    var searchVal=today;

    for(var i=0;i<data.user.length;i++){
        if(data.user[i][searchField]==searchVal){
            results.push(data.user[i].Day);
        }
    }
    // console.log(results[0]);

    document.getElementById("do").innerHTML=results[0];




}
);

if(navigator.onLine){
//     alert("Online");
}
else{
    alert("Offline");
}
