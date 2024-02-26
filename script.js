function readName() {
    var textarea = document.getElementById('input');
    var namesArray = textarea.value.split('\n');
    var namesSet = new Set();

    namesArray.forEach(function (name) {
        var trimmedName = name.trim();
        if (trimmedName != '') {
            namesSet.add(trimmedName);
        }
    });
    generateResult(namesSet);
}

function generateResult(oriSet){
    var groupC = document.getElementById('groupCount').value;
    var memberC = document.getElementById('memberCount').value;
    var originalList = new Set();
    originalList = oriSet;

    var originalArray = Array.from(originalList);
    originalArray.sort(() => Math.random()- 0.5);
    
    var genContent = document.getElementById('genContent');
    genContent.innerHTML = '';

    for(let i = 0; i < groupC; i++){
        var par = document.createElement('p');
        var memContent = "";
        for(let j = 0; j < memberC; j++){
            memContent += originalArray[i*memberC +j] + " ";
        }
        par.textContent = "第" + (i+1) + "組：" + memContent;
        genContent.appendChild(par);
    }
}
