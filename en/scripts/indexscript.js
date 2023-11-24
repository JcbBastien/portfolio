if(localStorage.getItem("ENloadingTimeIndex") !== "none"){
    setTimeout(() => { 
        document.getElementById('loading').classList.remove('hidden');
    }, 50);
    setTimeout(() => { 
        document.getElementById('loading').classList.add('hidden');
    }, 450);
    setTimeout(() => { 
        document.getElementById('entrybox').classList.remove('hidden');
    }, 500);
}else{
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('entrybox').classList.remove('hidden');
}

localStorage.setItem("ENloadingTime", "long");
localStorage.setItem("ENloadingTimeIndex", "none");
localStorage.setItem("FRloadingTime", "long");
localStorage.setItem("FRloadingTimeIndex", "");
