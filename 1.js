
    var count = 0;
    var saveN = 0;
    var sum = 0;
    function increase(){
        count++;
        document.getElementById("count-el").innerHTML = `${count}`;
    }
    
    function history(){
        saveN = count;
        document.getElementById("his").innerHTML += `${saveN}` + "-";
        sum += saveN;
        count = 0;
        document.getElementById("count-el").innerHTML = `${count}`;
    }
    
    function sumN(){
        document.getElementById("Su").innerHTML = `${sum}`;
    }
