window.onload = function(){
    clock();
}

function clock(){
    let today = new Data();
    let todayHour = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = today.getSeconds();
    const watchEl = document.getElementById('watch');

    watchEl.innerHTML = `${todayHour}:${todayMin}:${todaySec}`;
    window.setInterval('clock()', 1000);

    function ap(h){
        let ampm = Math.floor(h/12);
        if (ampm == 0){
            return 'AM'
        }
    }
}