setTimeout(() => { 
    document.getElementById('loading').classList.remove('hidden');
}, 50);
setTimeout(() => { 
    document.getElementById('loading').classList.add('hidden');
}, 800);
setTimeout(() => { 
    document.getElementById('entry').classList.remove('hidden');
}, 850);

localStorage.setItem("ENloadingTime", "short");
localStorage.setItem("ENloadingTimeIndex", "none");
localStorage.setItem("FRloadingTime", "long");
localStorage.setItem("FRloadingTimeIndex", "none");