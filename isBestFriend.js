//  Problem 5: isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

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


