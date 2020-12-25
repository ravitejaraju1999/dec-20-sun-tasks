
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

var lat;
var long;
request.onload=function()


{

  var data=JSON.parse(this.response);
  var asian_countries=data.filter((item)=>
  {
    return item.region==="Asia";
  })
  //console.log(asian_countries);
  var countries=[];
  for(var i=0;i<asian_countries.length;i++)
  {
    countries.push(asian_countries[i].name)
   // console.log(asian_countries[i].name);
  }
  console.log(countries);
 
}


