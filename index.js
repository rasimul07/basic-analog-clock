const sticks = document.querySelectorAll(".inside-container div");
const hrE = sticks[0]
const minE = sticks[1]
const secE = sticks[2]





setInterval(()=>{
    const time = new Date();
    hrE.style.transform = `rotate(${-90+(time.getHours()%12)*30}deg)`;
    minE.style.transform = `rotate(${(-90+(time.getMinutes()*6))}deg)`;
    secE.style.transform = `rotate(${-90+time.getSeconds()*6}deg)`;
},1000)