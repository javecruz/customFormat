//falta implementar el punto de NOTA:.......


Date.prototype.customFormat=function(formatString,leng){ 


   var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhh,hh,h,mm,m,ss,s,ampm,dMod,th;

   ampm = ""; //sino da undefined ya uqe lo imprimo siempre se pida o no, es para que salga siemrpe al final..

   YY = ((YYYY=this.getFullYear())+"").substr(2,2);



   hh = ((hhh=this.getHours())>12)?hh = hhh - 12:hh = hhh;


   if(formatString.includes("#hh#") || formatString.includes("#h#")){

   ampm = hhh>12 ? "pm" : "am";   
   }
   


   

   hh = hh<10 ? "0" + hh : hh;

  

   h = hh.replace("0","");

   mm = ((m=this.getMinutes())<10)? "0" + m:m;

  
   ss = ((s=this.getSeconds())<10)? "0" + s:s;

   MM = (M=this.getMonth()+1)<10?('0'+M):M;
    DD = (D=this.getDate())<10?('0'+D):D;


   MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substr(0,3);
   
  
   DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substr(0,3);
   th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';

 if(leng=='es'){

   	
   MMM = (MMMM=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][M-1]).substr(0,3);
    
  
   DDD = (DDDD=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"][this.getDay()]).substr(0,3);

   }

   formatString = formatString
   .replace("#YYYY#",YYYY)
   .replace("#YY#",YY)
   .replace("#MMMM#",MMMM)
   .replace("#MMM#",MMM)
   .replace("#MM#",MM)
   .replace("#M#",M)
   .replace("#DDDD#",DDDD)
   .replace("#DDD#",DDD)
   .replace("#DD#",DD)
   .replace("#D#",D)
   .replace("#th#",th)
   .replace("#hhh#",hhh)
   .replace("#hh#",hh)
   .replace("#h#",h)
   .replace("#mm#",mm)
   .replace("#m#",m)
   .replace("#ss#",ss)
   .replace("#s#",s)
   + ampm;
   
   return formatString;
}

