function convertToCastString(casts){
  var castsjoin="";
  for(var idx in casts){
    castsjoin=castsjoin+casts[idx].name+"/"
  }
  return castsjoin.substring(0,castsjoin.length-1);

}
function convertToCastsInfo(casts){
  var castsArry=[]
  for(var idx in casts){
     var cast={
       img:casts[idx].avatars? casts[idx].avatars.large:"",
       name:casts[idx].name
     }
     castsArry.push(cast);     
  }  
  return castsArry;
}
export{
  convertToCastString,
  convertToCastsInfo
}