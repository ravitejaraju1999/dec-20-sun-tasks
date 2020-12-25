
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

var lat;
var long;
request.onload=function()


{

  var data=JSON.parse(this.response);
//console.log(data);




const sum=data.reduce((accumulator,item)=>
{
  return accumulator+item.population;
},0);
console.log(sum);
  

 
}


