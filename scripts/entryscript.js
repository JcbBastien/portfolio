setTimeout(() => { 
    document.getElementById('loading').classList.remove('hidden');
}, 50);
setTimeout(() => { 
    document.getElementById('loading').classList.add('hidden');
}, 800);
setTimeout(() => { 
    document.getElementById('entry').classList.remove('hidden');
}, 850);

localStorage.setItem("ENloadingTime", "long");
localStorage.setItem("ENloadingTimeIndex", "none");
localStorage.setItem("FRloadingTime", "short");
localStorage.setItem("FRloadingTimeIndex", "none");