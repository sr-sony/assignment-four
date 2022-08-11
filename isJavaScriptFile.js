// Problem:2  isJavaScriptFile 
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।

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







// function check(str){
//     if(str.match(/(\w*)\.js$/) !== null){
//         console.log('false');
//         return false;
//     }
//     else {
//         console.log('true');
//         return true;
//     }
// }
     
// check('file1.xml');
// check('file2.js');
// check('file3.json');
// check('file4.html');

