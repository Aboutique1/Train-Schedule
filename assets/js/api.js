var firebaseConfig = {
  apiKey: "AIzaSyC9gdzZG2T1cSzdYUFKOW54QlMJ3_EQBtA",
  authDomain: "trainv2-34c01.firebaseapp.com",
  databaseURL: "https://trainv2-34c01.firebaseio.com",
  projectId: "trainv2-34c01",
  storageBucket: "",
  messagingSenderId: "35081347652",
  appId: "1:35081347652:web:524adf31d72fd6ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Get ref
const dbRef = firebase.database().ref()
const trainsRef = dbRef.child('trains')

//Get on child added and every appended child after that

const trainList = $('#tableBody')

trainsRef.on("child_added", snap => {
  let train = snap.val()
   let currentMoment = moment().format('HH:mm')
   let momentTime = moment(train.firstTrain).format('HH:mm')
   let differenceFromNow = moment(momentTime,'HHmm').fromNow()
   let withFrequencyTime = 
   console.log('Time to now:'+moment(momentTime,'HHmm').fromNow())
   

  trainList.append(`
                              <tr>\
                            <th scope="row" child-key="${snap.key}">${train.trainName}</th>\
                            <td>${train.destination}</td>\
                            <td>${momentTime}</td>\
                            <td>${train.frequency}</td>\
                            <td>${differenceFromNow}</td>\
                        </tr>\
  
  `) 
})


//On Submit push

var today = moment().format('YYYY-MM-DD');
$('#firstTrainTime').val(today);

$('#submit').click(function () {
  
  var trainName = $('#trainName').val()
var destination = $('#destination').val()
var firstTrainTime = $('#firstTrainTime').val()
var frequency = $('#frequency').val()
let trainData = {
  "trainName": trainName,
  "destination": destination,
  "firstTrain": firstTrainTime,
  "frequency":frequency
}
trainsRef.push(trainData, function(){
  console.log('New Train Pushed')
})

var trainName = $('#trainName').val('')
var destination = $('#destination').val('')
var firstTrainTime = $('#firstTrainTime').val('')
var frequency = $('#frequency').val('') 

 
})



var update = function() {
  $('#time').html('Current Military Time: '+moment().format('HH:mm:ss'))  // July 29th 2019, 4:16:12 pm

}
setInterval(update, 1000);




/* firebase.database().ref('table/').set({
  trainName: trainName,
  destination: destination,
  firstTrain: firstTrainTime,
  frequency:frequency
}); */