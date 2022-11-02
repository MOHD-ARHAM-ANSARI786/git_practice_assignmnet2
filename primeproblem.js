function checkprime(number){
  let bag=0;
for(let i=1; i<=number; i++){
  if(number%i==0)
  {
     bag++;
  }

 }
  if(bag==2)
  {
   return true;
  }
   return false;
}

let ans=checkprime(13);

  if(ans==true)
  {
  console.log("Prime Number");
  }
  else

  {
   console.log("Not a Prime Number");
  }