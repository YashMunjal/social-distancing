
    var start = document.querySelector('button');
    start.addEventListener("click", function () {
        var perc = document.getElementById('input').value;
        console.log(perc);
        perc=1-perc/100;
        algorithm(2.5*perc);
    });
    function algorithm(x)
    {
        const days = [x,x*x,x*x*x,x*x*x*x,x*x*x*x*x,x*x*x*x*x*x];
        const sum_days=[1];
        var i=0;
        days.forEach(value => {
            
            var m=sum_days[i]+value;
            i++
            sum_days.push(m);
            document.getElementById('visualise').innerHTML="";
        });
        for (let j=0; j<7; j++) { 
            iterator(j); 
         } 
           
         function iterator(j) { 
           setTimeout(function() { 
               //const vis = "."
               var p=document.createElement('p');
               p.innerHTML+="Day "+j*5+" :"+"<h2>"+Math.floor(sum_days[j])+"</h2> people infected"+"<br>"+"<hr>";
               document.getElementById('visualise').appendChild(p);
           }, 1500 * j); 
         }
    }