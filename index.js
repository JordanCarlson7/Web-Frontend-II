function request(){
    console.log("function")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("make request");
        console.log(this.readyState);
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            console.log("made it");
            format(xhttp.responseText);
          //document.getElementById("display").innerHTML = xhttp.responseText;
          //console.log(xhttp.responseText);
        }
      };
      
      xhttp.open("GET", "getDirectory.php" , true);//open(method, url, async);
      xhttp.send();

      
}

function format(jsonObj){
    console.log(jsonObj);
    theObj = JSON.parse(jsonObj);
    console.log(theObj);
    console.log("formatting");
    
    table = "<table><tr><th>FileName:</th><th>FileType:</th><th>CWD:</th><th>Link:</th></tr>";
    for (var i = 0; i < theObj.length; i++){
        console.log(theObj.length);
        console.log(theObj[i] + "\n");
        //theObj = JSON.parse(jsonObj[i]);
        table += "<tr><td>" + theObj[i].fileName + "</td><td>";
        table += theObj[i].fileType + "</td><td>";
        table += theObj[i].cwd + "</td><td>";
        table += "<a href=\"" + theObj[i].fileName + "\">Click to Display</a></td></tr>";

        console.log("\n");
        console.log("<a href=\"" + "/" + theObj[i].fileName +"\">Click to Display</a></td></tr>");
        console.log("\n");
    }
    table += "</table>";

    document.getElementById("table").innerHTML = table;
}