// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlo64vw6O5_1ezXCuD35yVabvCA0ElcAE",
  authDomain: "quiz-app-2388e.firebaseapp.com",
  projectId: "quiz-app-2388e",
  storageBucket: "quiz-app-2388e.appspot.com",
  messagingSenderId: "1070595910113",
  appId: "1:1070595910113:web:0fdd9ac8c45a4363048aa0",
  measurementId: "G-LTGR90EJ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()

var question = document.getElementById('question')
var option = document.getElementById('option')
var optionsparent = document.getElementById('optionsParent')
var correctAnswerElem = document.getElementById('correctAnswer')

var options =[]
var correctAnswer 


function renderOptions(){
   optionsparent.innerHTML = ' '
   for(var i = 0; i< options.length; i++){
    optionsparent.innerHTML += `<li onclick='setCorrectAnswer(${options[i]})' class='p-2 bg-light fs-5 rounded shadow' >${options[i]}</li>`
   }
}

window.addOption = function(){
 options.push(option.value)
 console.log(options)
 renderOptions()
}
window.setCorrectAnswer = function(a){
 correctAnswer = a;
 correctAnswerElem.innerHTML=correctAnswer
}
window.submitQuestion = function(){
var obj =  {
 question:question.value,
 options:options,
 correctAnswer:correctAnswer
}
obj.id = push(ref(db,'questions/')).key
const reference = ref(db, `questions/ ${obj.id}`)
set(reference,obj)
console.log(obj)
}