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

    if(originalList.size < groupC * memberC){
        alert('名單人數大於所輸入的數字');
        return;
    }
    
    var originalArray = Array.from(originalList);
    originalArray.sort(() => Math.random()- 0.5);
    
    var genContent = document.getElementById('genContent');
    genContent.innerHTML = '';
    
    var memberPerGroup = Math.ceil(originalArray.length / groupC);
    var startIndex = 0;

    for(let i = 0; i < groupC; i++){
        var par = document.createElement('p');
        var memContent = "";
        var endIndex = Math.min(startIndex + memberPerGroup, originalArray.length);
        for(let j = startIndex; j < endIndex; j++){
            memContent += originalArray[j] + " ";
        }
        par.textContent = "第" + (i + 1) + "組：" + memContent.trim();
        genContent.appendChild(par);

        startIndex = endIndex;
    }
}