

function processData(allText) {
    allText = allText + "";
    var record_num = 4;  // or however many elements there are in each row
    var allTextLines = allText.split("\n");
    var fjellLines = [];

    for(var x in allTextLines) {
        var y = allTextLines[x].split(";");

        if(y[0].includes("Øygarden")) {
            console.log(y[3]);
            fjellLines.push(y[3]);
        }
    }

    document.getElementById("population").innerHTML = fjellLines[0];
}



$(document).ready(function() {
        $.ajax({
            'url' : "http://data.ssb.no/api/v0/dataset/1108.csv?lang=no",
            'type' : 'GET',
            'success' : function(data,status){
                processData(data);
        }
    });
});
