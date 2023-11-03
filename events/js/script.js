document.getElementById("maZone").addEventListener("mousemove",infomouse
);
document.getElementById("maZone2").addEventListener("mousemove",infomouse
);

function infomouse (event)
{  console.log(event);
    document.getElementById("info").innerHTML=`element : ${event.target.id} -x:${event.clientX} - y: ${event.clientY}`;

     
    
}