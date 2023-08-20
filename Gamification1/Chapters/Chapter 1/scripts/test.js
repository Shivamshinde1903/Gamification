import myObject from './qb.js';

console.log(myObject[1]); // Output: John
console.log(myObject[2]); // Output: 30

var sum = 0.02;
var sum1 = 0;
var sum2 = 0;
var marks = 0;

//var myArray = ["1", "", "", "", ""];
const myArray = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
const myArray1 = ["0.02", "8", "70", "932.697", "739.65", "70.151", "83.615", "534.79", "182.819", "55.465", "486", "2.5", "30.6"]

// select the button by its id
var button = document.getElementById("question1");

// add an event listener to the button
button.addEventListener("click", function () {
    // perform an action when the button is clicked
    var element = document.getElementById("cont");

    // change the HTML content of the element
    element.innerHTML = "<br><table height='400' width='80%' style ='font-size: 25px;margin:20px 0 auto;margin-left: 70px;'><thead><tr><th>स्थान</th><th>शतक</th><th>दशक</th><th>एकक</th><th>दशांश</th><th>शतांश</th><th>सहस्रांश</th></tr></thead><tbody><tr><td></td><td>100</td><td>10</td><td>1</td><td>1/10</td><td>1/100</td><td>1/1000</td></tr><tr><td>अंक</td><td>3</td><td>7</td><td>8</td><td>0</td><td>2</td><td>5</td></tr><tr><td>स्थानिक किंमत</td><td>300</td><td><input type='number' id='num9' placeholder='Enter' max='9' min='0' step='0' style ='width:90px; height:30px'></td><td><input type='number' id='num8' placeholder='Enter' max='9' min='0' step='0' style ='width:90px; height:30px'></td><td>0/10 = 0.1</td><td><input type='number' id='num7' placeholder='Enter' max='9' min='0' step='0' style ='width:90px; height:30px'></td><td>5/1000 = 0.005</td></tr></tbody></table><br><button class='button' id='tapasa' style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>नोंद करा</button>";
    //element.innerHTML = myObject[1];
    //   var num7Input = document.getElementById("num7");
    //   var num8Input = document.getElementById("num8");
    //   var num9Input = document.getElementById("num9");
    var submit = document.getElementById("tapasa");
    //   var num7 = parseInt(num7Input.value);
    //   var num8 = parseInt(num8Input.value);
    //   var num9 = parseInt(num9Input.value);
    submit.addEventListener("click", function () {
        myArray[0] = "3"
        var num7Input = document.getElementById("num7");
        var num8Input = document.getElementById("num8");
        var num9Input = document.getElementById("num9");

        var num7 = parseFloat(num7Input.value);
        var num8 = parseFloat(num8Input.value);
        var num9 = parseFloat(num9Input.value);
        if (num7Input.value != "" && num8Input.value != "" && num9Input.value != "") {
            myArray[0] = num7.toString();
            myArray[1] = num8.toString();
            myArray[2] = num9.toString();
            var element = document.getElementById("cont");
            element.innerHTML = "<table height='400' style ='font-size: 25px;'><thead><tr><th>स्थान</th><th>शतक</th><th>दशक</th><th>एकक</th><th>दशांश</th><th>शतांश</th><th>सहस्रांश</th></tr></thead><tbody><tr><td></td><td>100</td><td>10</td><td>1</td><td>1/10</td><td>1/100</td><td>1/1000</td></tr><tr><td>अंक</td><td>3</td><td>7</td><td>8</td><td>0</td><td>2</td><td>5</td></tr><tr><td>स्थानिक किंमत</td><td>300</td><td><input type='number' id='num9' placeholder='Enter' max='9' min='0' step='0'></td><td><input type='number' id='num8' placeholder='Enter' max='9' min='0' step='0'></td><td>0/10 = 0.1</td><td><input type='number' id='num7' placeholder='Enter' max='9' min='0' step='0'></td><td>5/1000 = 0.005</td></tr></tbody></table><br><br>" + "<p>" + myArray[0] + "</p>" + "<p>" + myArray[1] + "</p>" + "<p>" + myArray[2] + "</p>" + "<p style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>बरोबर</p>";
            //element.innerHTML = myObject[1];
        }
    })
});


var button1 = document.getElementById("question2");
button1.addEventListener("click", function () {
    var element2 = document.getElementById("cont");
    element2.innerHTML = "<br><br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;बेरीज करा</h3><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;905.5 + 27.197 =</label><input type='number' step='0.01' id='num1' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;39 + 700.65 =</label><input type='number' step='0.01' id='num2' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40 + 27.7 + 2.451 =</label><input type='number' step='0.01' id='num3' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br>" + "<p>" + myArray[3] + "</p>" + "<p>" + myArray[4] + "</p>" + "<p>" + myArray[5] + "</p>" + "<button class='button' id='tapasa1' style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>नोंद करा</button>"

    var submit1 = document.getElementById("tapasa1");
    submit1.addEventListener("click", function () {

        var num1Input = document.getElementById("num1");
        var num2Input = document.getElementById("num2");
        var num3Input = document.getElementById("num3");

        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        var num3 = parseFloat(num3Input.value);
        if (num1Input.value != "" && num2Input.value != "" && num3Input.value != "") {
            myArray[3] = num1.toString();
            myArray[4] = num2.toString();
            myArray[5] = num3.toString();
            var element2 = document.getElementById("cont");
            element2.innerHTML = "	<br><br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;बेरीज करा</h3><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;905.5 + 27.197 =</label><input type='number' step='0.01' id='num1' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;39 + 700.65 =</label><input type='number' step='0.01' id='num2' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40 + 27.7 + 2.451 =</label><input type='number' step='0.01' id='num3' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br>" + "<p>" + myArray[3] + "</p>" + "<p>" + myArray[4] + "</p>" + "<p>" + myArray[5] + "</p>" + "<p style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>बरोबर</p>"

        }
    })

});

var button2 = document.getElementById("question3");
button2.addEventListener("click", function () {
    var element3 = document.getElementById("cont");
    element3.innerHTML = "<br><br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;वजाबाकी करा</h3><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85.96 - 2.345 =</label><input type='number' step='0.01' id='num4' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;632.24 - 97.45 =</label><input type='number' step='0.01' id='num5' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200.005 - 17.186 =</label><input type='number' step='0.01' id='num6' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br>" + "<p>" + myArray[6] + "</p>" + "<p>" + myArray[7] + "</p>" + "<p>" + myArray[8] + "</p>" + "<button class='button' id='tapasa2' style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>नोंद करा</button>"

    var submit2 = document.getElementById("tapasa2");
    submit2.addEventListener("click", function () {

        var num4Input = document.getElementById("num4");
        var num5Input = document.getElementById("num5");
        var num6Input = document.getElementById("num6");

        var num4 = parseFloat(num4Input.value);
        var num5 = parseFloat(num5Input.value);
        var num6 = parseFloat(num6Input.value);
        if (num4Input.value != "" && num5Input.value != "" && num6Input.value != "") {
            myArray[6] = num4.toString();
            myArray[7] = num5.toString();
            myArray[8] = num6.toString();
            var element3 = document.getElementById("cont");
            element3.innerHTML = "<br><br><br><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;वजाबाकी करा</h3><br><label style ='position: absolute; text-align : right; font-size: 30px;'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 85.96 - 2.345 =</label><input type='number' step='0.01' id='num4' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;632.24 - 97.45 =</label><input type='number' step='0.01' id='num5' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br><label style ='position: absolute; text-align : right; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200.005 - 17.186 =</label><input type='number' step='0.01' id='num6' style='position: absolute;margin-left: 400px; font-size: 30px;'><br><br><br><br><br>" + "<p>" + myArray[6] + "</p>" + "<p>" + myArray[7] + "</p>" + "<p>" + myArray[8] + "</p>" + "<p>बरोबर</p>"

        }
    })

});


var button3 = document.getElementById("question4");
button3.addEventListener("click", function () {
    var element4 = document.getElementById("cont");
    element4.innerHTML = "<br><br><br><label style ='position: absolute; text-align : left; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;अविनाशने 42 किमी 365 मीटर प्रवास बसने, 12 किमी 460 मी प्रवास मोटारने आणि 640 मीटर प्रवास पायी <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;केला, तर त्याने एकूण किती किमी प्रवास केला. (उत्तर दशांश अपूर्णांकांत लिहा.)</label><br><br><br><br><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num10' style='position: absolute;text-align: center; font-size: 30px; left: 400px; top:400px'><br> <button class='button' id='tapasa3' style='position: absolute; top: 400; left: 550px; top:450px; width: 100px ; height: 35px ; font-size:25px'>नोंद करा</button>"

    var submit3 = document.getElementById("tapasa3");
    submit3.addEventListener("click", function () {

        var num10Input = document.getElementById("num10");


        var num10 = parseFloat(num10Input.value);

        if (num10Input.value != "") {
            myArray[9] = num10.toString();
            var element4 = document.getElementById("cont");
            element4.innerHTML = "<br><br><br><label style ='position: absolute; text-align : left; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;अविनाशने 42 किमी 365 मीटर प्रवास बसने, 12 किमी 460 मी प्रवास मोटारने आणि 640 मीटर प्रवास पायी <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;केला, तर त्याने एकूण किती किमी प्रवास केला. (उत्तर दशांश अपूर्णांकांत लिहा.)</label><br><br><br><br><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num10' style='position: absolute;text-align: center; font-size: 30px;'><br><br><br><br><br><br><p>बरोबर</p>"

        }
    })

});


var button4 = document.getElementById("question5");
button4.addEventListener("click", function () {
    var element5 = document.getElementById("cont");
    element5.innerHTML = "<br><br><br><label style ='position: absolute; text-align : left; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;आयेशाने सलवारसाठी 1.80 मीटर, कुर्त्यासाठी 2.25 मीटर कापड खरेदी केले. कापडाचा दर 120 रुपये प्रति <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; मीटर असेल, तर तिला दुकानदारास कापडासाठी किती रुपये द्यावे लागतील ?</label><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num11' style='position: absolute;text-align: center; font-size: 30px; left: 400px; top:400px'><br> <button class='button' id='tapasa4' style='position: absolute; top: 400; left: 550px;top:450px; width: 100px ; height: 35px; font-size:25px'>नोंद करा</button>"

    var submit4 = document.getElementById("tapasa4");
    submit4.addEventListener("click", function () {

        var num11Input = document.getElementById("num11");


        var num11 = parseFloat(num11Input.value);

        if (num11Input.value != "") {
            myArray[10] = num11.toString();
            var element5 = document.getElementById("cont");
            element5.innerHTML = "<br><br><br><label style ='position: absolute; text-align : left; font-size: 30px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;आयेशाने सलवारसाठी 1.80 मीटर, कुर्त्यासाठी 2.25 मीटर कापड खरेदी केले. कापडाचा दर 120 रुपये प्रति &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;मीटर असेल, तर तिला दुकानदारास कापडासाठी किती रुपये द्यावे लागतील ?</label><br><br><br><br><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num11' style='position: absolute;text-align: center; font-size: 30px;'><br><br><br><br><br><br><br><p>बरोबर</p>"

        }
    })

});

// 6th example
var button5 = document.getElementById("question6");
button5.addEventListener("click", function () {
    var element6 = document.getElementById("cont");
    element6.innerHTML = "	<label style ='position: absolute; text-align : left; font-size: 30px;'>सुजाताने बाजारातून 4.25 किग्रॅ वजनाचे कलिंगड आणले. त्यातील 1 किग्रॅ 750 ग्रॅम कलिंगड शेजारच्या मुलांना दिले, तर तिच्याकडे किती किलोग्रॅम कलिंगड शिल्लक राहिले?</label><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num12' style='position: absolute;text-align: center; font-size: 30px;'><br>  <button class='button' id='tapasa5' style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>नोंद करा</button>"

    var submit5 = document.getElementById("tapasa5");
    submit5.addEventListener("click", function () {

        var num12Input = document.getElementById("num12");


        var num12 = parseFloat(num12Input.value);

        if (num12Input.value != "") {
            myArray[11] = num12.toString();
            var element6 = document.getElementById("cont");
            element6.innerHTML = "<label style ='position: absolute; text-align : left; font-size: 30px;'>सुजाताने बाजारातून 4.25 किग्रॅ वजनाचे कलिंगड आणले. त्यातील 1 किग्रॅ 750 ग्रॅम कलिंगड शेजारच्या मुलांना दिले, तर तिच्याकडे किती किलोग्रॅम कलिंगड शिल्लक राहिले?</label><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num12' style='position: absolute;text-align: center; font-size: 30px;'><br><br><br><br><br> <br><br><br><p>बरोबर</p>"

        }
    })

});


var button6 = document.getElementById("question7");
button6.addEventListener("click", function () {
    var element7 = document.getElementById("cont");
    element7.innerHTML = "<label style ='position: absolute; text-align : left; font-size: 30px;'> अनिता कारने ताशी 85.6 किमी वेगाने प्रवास करत होती. रस्त्यावर ‘कारची वेगमर्यादा ताशी 55 किमी’ अशी सूचना होती. तर तिने गाडीचा वेग कितीने कमी केल्यास वाहतुकीच्या नियमांचे पालन होईल ?</label><br><br><br><br><br><br><br><br><input type='number' step='0.01' id='num13' style='position: absolute;text-align: center; font-size: 30px;'><br>  <button class='button' id='tapasa6' style='position: absolute; top: 400; left: 571px; width: 100px ; height: 35px; font-size:25px'>नोंद करा</button>"

    var submit6 = document.getElementById("tapasa6");
    submit6.addEventListener("click", function () {

        var num13Input = document.getElementById("num13");


        var num13 = parseFloat(num13Input.value);

        if (num13Input.value != "") {
            myArray[12] = num13.toString();
            var element7 = document.getElementById("cont");
            element7.innerHTML = "<label style ='position: absolute; text-align : left; font-size: 30px;'> अनिता कारने ताशी 85.6 किमी वेगाने प्रवास करत होती. रस्त्यावर ‘कारची वेगमर्यादा ताशी 55 किमी’ अशी सूचना होती. तर तिने गाडीचा वेग कितीने कमी केल्यास वाहतुकीच्या नियमांचे पालन होईल ?</label><br><br><br><br><br>" + "<p>" + myArray[12] + "</p>" + " <br><br><br><input type='number' step='0.01' id='num13' style='position: absolute;text-align: center; font-size: 30px;'><br> <br><br><br><br><br><br><br><p>बरोबर</p>"

        }
    })

});

// create a async function to make a post request
async function postData(name, roll, totalQuestionsSolved, totalQuestions, marks, url = 'https://game-dev-plus.onrender.com/data') {
    // Default options are marked with *
    const response = await fetch(`https://game-dev-plus.onrender.com/data?rollNumber=${roll}&questionsSolved=${totalQuestionsSolved}&questionsUnsolved=${totalQuestions - totalQuestionsSolved}&score=${marks}&name=${name}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

var submit_button = document.getElementById("question11");
submit_button.addEventListener("click", function () {
    var totalQuestions = myArray.length;
    var totalQuestionsSolved = 0;
    for (let i = 0; i <= 12; i++) {
        if (myArray[i] == myArray1[i]) {
            marks = marks + 1;
        }
        // Total question solved
        if (myArray[i] != "") {
            totalQuestionsSolved = totalQuestionsSolved + 1;
        }
    }
    // make a post request to https://game-dev-plus.onrender.com/data?rollNumber=12345&questionsSolved=15&questionsUnsolved=5&score=80&name=tanmay

    // get name and roll from local storage
    var name = localStorage.getItem("name");
    var roll = localStorage.getItem("roll");

    console.log(name, roll, totalQuestionsSolved, totalQuestions - totalQuestionsSolved, marks);

    // wait for the post request to complete and then show the alert
    postData(name, roll, totalQuestionsSolved, totalQuestions, marks).then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        alert("You have scored " + marks + " out of " + totalQuestions);
    });
})
