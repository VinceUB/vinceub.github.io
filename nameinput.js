const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

for(var i=1; i<100; i++){
    var opt = document.createElement("option");
    opt.setAttribute("value", i);
    opt.innerHTML = i.toString() + " characters";
    document.getElementById("namel").add(opt);
}

var sel = document.createElement("select");
sel.setAttribute("id", "name");

document.body.appendChild(document.createElement("br"));
var lab = document.createElement("label")
lab.setAttribute("for", sel.getAttribute("id"));
lab.innerHTML = "Please choose your name: "

document.body.appendChild(lab)
document.body.appendChild(sel);
changeSel();


document.getElementById("namel").addEventListener("change", changeSel);


function check(index) {
    var endlist = alphabet;
    var tempOut = []

    if (index == 0) {
        for (var i = 0; i < endlist.length; i++) {
            tempOut.push(endlist[i]);
        }
    } else {
        var nextIndex = check(index - 1);

        for (var i = 0; i < endlist.length; i++) {

            for (var j = 0; j < nextIndex.length; j++) {
                tempOut.push(endlist[i] + nextIndex[j]);
            }

        }
    }

    return tempOut;
}

function changeSel(){
    var namel = document.getElementById("namel").value;
    var sel = document.getElementById("name");
    console.log(namel);
    
    var fullList = check(namel-1);
    
    sel.innerHTML = "";
    for(var i = 0; i<fullList.length; i++){
        var e = document.createElement("option");
        e.innerHTML = fullList[i];
        //e.setAttribute("value", fullList[i]);
        sel.add(e);
    }
}