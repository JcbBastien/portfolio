if(localStorage.getItem("ENloadingTime") === "long"){
    setTimeout(() => { 
        document.getElementById('loading').classList.remove('hidden');
    }, 100);
    setTimeout(() => { 
        document.getElementById('loading').classList.add('hidden');
    }, 850);
    setTimeout(() => { 
        document.getElementById('entrybox1').classList.remove('hidden');
    }, 900);
    setTimeout(() => { 
        document.getElementById('entrybox2').classList.remove('hidden');
    }, 1600);
    setTimeout(() => { 
        document.getElementById('entrybox3').classList.remove('hidden');
    }, 1700);
    setTimeout(() => { 
        document.getElementById('entrybox4').classList.remove('hidden');
    }, 1800);
    setTimeout(() => { 
        document.getElementById('entrybox5').classList.remove('hidden');
    }, 1900);
    setTimeout(() => { 
        document.getElementById('entrybox6').classList.remove('hidden');
    }, 2000);
    setTimeout(() => { 
        document.getElementById('entrybox7').classList.remove('hidden');
        document.getElementById('homebutton').classList.remove('hidden');
    }, 2100);
}else{
    setTimeout(() => { 
        document.getElementById('loading').classList.remove('hidden');
    }, (50));
    setTimeout(() => { 
        document.getElementById('loading').classList.add('hidden');
    }, 450);
    setTimeout(() => { 
        document.getElementById('entrybox1').classList.remove('hidden');
        document.getElementById('entrybox2').classList.remove('hidden');
        document.getElementById('entrybox3').classList.remove('hidden');
        document.getElementById('entrybox4').classList.remove('hidden');
        document.getElementById('entrybox5').classList.remove('hidden');
        document.getElementById('entrybox6').classList.remove('hidden');
        document.getElementById('entrybox7').classList.remove('hidden');
        document.getElementById('homebutton').classList.remove('hidden');
    }, 500);
}

localStorage.setItem("ENloadingTime", "short");
localStorage.setItem("ENloadingTimeIndex", "none");
localStorage.setItem("FRloadingTime", "long");
localStorage.setItem("FRloadingTimeIndex", "none");