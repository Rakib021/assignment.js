//First problem
//Kilometer To Meter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(kilometer <0){
      return "Warning : Please Enter a positive Number.Because distance cannot be a Negative ";
    }
    else{
        return meter;
    }
}
/** 
var result = kilometerToMeter(-1);
 console.log(result);
 var result2 = kilometerToMeter(7);
 console.log(result2);
*/



//Second Problem 
//Create Budget Calculator

function budgetCalculator(watch,phone,laptop){

    var TotalBudget =((watch*7)+(phone*5)+(laptop*2));

    if(watch <0 || phone <0 || laptop <0){
        return "Warning : Budget cannot be a negative.Please Earn Money !!";
    }
    else{
        return TotalBudget;
    }

}

/** 
var ifBudget = budgetCalculator(-1);
console.log(ifBudget);
var totalCost = budgetCalculator(50 ,100,500);
console.log(totalCost);
*/



//Third Problem
//hotelCost

function hotelCost(stay_days){
    if(stay_days < 0){
        return "Warning : Days cannot be less then Zero or negative ";
    }
    else if (stay_days <11){
       
        return  stay_days *100; 
    }
    else if(stay_days < 20){
        var AfterTenDays =stay_days -10;
        return (1000 +(AfterTenDays*80));
    }

    else {
        var AfterTwentyDays = stay_days -19;
        return (1720 +(AfterTwentyDays*50));
    }

}
/** 
console.log(hotelCost(-1));
var result = hotelCost(22);
console.log(result);
*/


//Forth problem
//megaFriend

function megaFriend(Name){
if(Name.length <2){
    return "Warning : PLease Enter at least Two Name.Otherwise we do not compare";
}    
var longestName =  Name[0];
for(var i =0; i<Name.length; i++){
    var element = Name [i];
    if(element.length > longestName.length){
        longestName = element;
    }
}
return longestName;



}
/**
var friendsNameArray = ["Rakib"];
console.log(megaFriend(friendsNameArray));
var FriendsName = ["Rakibul Islam","shakil","Sakib","Mostofa Nur Khan"];
var longestName = megaFriend(FriendsName);
console.log(longestName);
*/