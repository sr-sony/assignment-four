try{
    function radianToDegree(radian){
        let degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }
    
    let degree = radianToDegree(199);
    console.log(degree)
}

catch(error){
    console.log("Please provide a radian value.");
}




try{
    function isJavaScriptFile(string){
        if(string.endsWith(".js")){
            return true;
        }
        else{
            return false;
        }
    }
    
    console.log(isJavaScriptFile("image.js.png"));
}
catch(error){
    console.log("Please provide a right input")
}



try{
    function oilPrice(diesel, petrol, octane){
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
    
        const dieselTotalPrice = dieselPrice * diesel;
        const petrolTotalPrice = petrolPrice * petrol;
        const octaneTotalPrice = octanePrice * octane;
    
        const totalOilPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
    
        return totalOilPrice;
    }
    console.log(oilPrice(0,2,3))
}

catch(error){
    console.log("Please provide a right value!");
}



try{
    function publicBusFare(totalNumberOfPeople){
        const maxBusCapacity = 50;
        const maxMicroBusCapacity = 11;
        const publicBusTicketFare = 250;
    
        let totalBusNeeded = totalNumberOfPeople % maxBusCapacity;
        let totalMicroBusNeeded = totalBusNeeded % maxMicroBusCapacity;
        let totalPublicBusFare = totalMicroBusNeeded * publicBusTicketFare;

        return totalPublicBusFare;
    }
    console.log(publicBusFare(365))
}

catch(error){
    console.log("Please provide a right parameter.");
}



const friendOne ={
    name: "doe",
    friend: "alex"
}

const friendTwo = {
    name: "john",
    friend: "doe"
}


try{
    function isBestFriend(friendOne, friendTwo){
        if(friendOne.name === friendTwo.friend && friendOne.friend === friendTwo.name){
            return true;
        }
        else{
            return false;
        }
    }
    console.log(isBestFriend(friendOne, friendTwo))
}

catch(error){
    console.log("Please provide a right parameter");
}
