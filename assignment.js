function kilometerToMeter(n){
    if(n>=0)
    {
        return (n*(1/1000));
    }
    else{
        return "Feet can not be negative number";
    }  
}
var result=kilometerToMeter(157);
console.log(result.toFixed(2));



function budgetCalcutator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0 || watch%1 != 0 || phone%1 != 0 || laptop%1 != 0){
        return "Plz insert valid number.";
    }
    else{
        return (50*watch+100*phone+500*laptop);
    }  
}
var numOfWatch=10;  
var numOfPhone=5;      
var numOfLaptop=4;   
var result=budgetCalcutator(numOfWatch,numOfPhone,numOfLaptop);
console.log(result);


function hotelCost(day){
    if(day<=0 || day%1 != 0){
        return "plz insert a valid floor number."
    }
    else if(day<=10){
        return day*100;
    }
    else if(day<=20){
      return 1000+(day-10)*80;
  }
  else{
      return 1800+(day-20)*50;
  }
}
var numOfDay=35;
totalCost=hotelCost(numOfDay);
console.log(totalCost);


function megaFriend(nameList){
    if(nameList.length==0){                      //when array is empty.
        return "Plz fill up the araay first."
    }
    else{
        largestName=nameList[0];
        for(var i=0; i<nameList.length; i++){
              if(nameList[i].length > largestName.length){
                largestName=nameList[i];
              } 
        }
        return largestName;
    }  
}
var nameList=['Sajib','Sana','Das','Samina Mahjabeen','Ritu','Mim'];
largestName=megaFriend(nameList);
console.log(largestName);