// Problem:1  radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

try{
    function radianToDegree(radian){
        let degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    }
    
    let degree = radianToDegree(10);
    console.log(degree)
}

catch(error){
    console.log("Please provide a radian value.");
}

// function radianToDegree(radian){
//     let degree = (radian * 180) / Math.PI;
//     return degree.toFixed(2);
// }
// const degree = radianToDegree(10);
// console.log(degree);



// let degree = radianToDegree(3.141592653589793);
// console.log(degree);

// radian * (180 / pi);
// function radians_to_degrees(radians)
// {
//   var pi = Math.PI;
//   return radians * (180/pi);
// }
          
// console.log(radians_to_degrees(0.7853981633974483));