
setTimeout(()=>{ document.title = Heure(); pause();},0);
setInterval(()=>{ document.title = Heure(); pause();},1000);
let timer =setInterval(DateAndHour,1000);
 
function Heure()
{
    const date = new Date();
    const hour = date.getHours().toLocaleString('fr-be', {
        minimumIntegerDigits: 2
      });
    const min = date.getMinutes().toLocaleString('fr-be', {
        minimumIntegerDigits: 2
      });
    const sec = date.getSeconds().toLocaleString('fr-be', {
        minimumIntegerDigits: 2
      });
    return `${hour}:${min}:${sec}`;
}

function DateAndHour()
{
    var param = { weekday: 'long', month: 'long', day: 'numeric' };

    const date = new Date();
    let nomjour = date.toLocaleDateString('fr-be', param);  
    document.getElementById("info").innerHTML=`<b>${nomjour}</b><br>${Heure()}`;
   
}

function pause()
{
    const date = new Date();
    if((date.getHours()==12 ) || (date.getHours()==15 && date.getMinutes()<20 ))
    {
         clearInterval(timer);
         document.getElementById("DivPause").style.display="";
         document.getElementById("info").style.display="none";
    }
    else
    {
        timer =setInterval(DateAndHour,1000);
        document.getElementById("DivPause").style.display="none";
        document.getElementById("info").style.display="";
    }
}