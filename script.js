function toggleText() {
        var points = 
            document.getElementById("points");
      
        var showMoreText =
            document.getElementById("moreText");
      
        var buttonText =
            document.getElementById("textButton");
        if (points.style.display === "none") {
            showMoreText.style.display = "none";
            points.style.display = "inline";
      
            buttonText.innerHTML = "Show More";
        }
	
        else {
      
            showMoreText.style.display = "inline";
      
            points.style.display = "none";
            buttonText.innerHTML = "Show Less";
        }
    }
	function toggleText1() {
        var points = 
            document.getElementById("points1");
      
        var showMoreText =
            document.getElementById("moreText1");
      
        var buttonText =
            document.getElementById("textButton1");
        if (points.style.display === "none") {
            showMoreText.style.display = "none";
            points.style.display = "inline";
      
            buttonText.innerHTML = "Show More";
        }
	
        else {
      
            showMoreText.style.display = "inline";
      
            points.style.display = "none";
            buttonText.innerHTML = "Show Less";
        }
    }
function showResults(){
	const q1= document.getElementById("q1").value;
	const q2= document.getElementById("q2").value;
	const q3= document.getElementById("q3").value;
	const q4= document.getElementById("q4").value;
	
	let numCorrect = 0;
	if(q1 ==="b"){
		numCorrect++;
	}else{
		alert("1 is incorrect!" + " " + "Cascadng Style Sheets is the correct answer!");
		}
	if(q2 ==="c"){
		numCorrect++;
	}else{
		alert("2 is incorrect!" + " " + "Javascript is the correct answer!");
	}
	if(q3==="a"){
		numCorrect++;
	}else{
		alert("3 is incorrect!" + " " + "ASTH is the correct answer!");
	}
	if(q4==="d"){
		numCorrect++;
	}else{
		alert("4 is incorrect!" + " " + "Javascript is the correct answer!");
	}
	if(q1==="b",q2==="c",q3==="a",q4==="d"){
		alert("YAY! You got them all right!");
	}
const quizResults = document.getElementById("quiz-results");
	quizResults.innerHTML = "<h2>Quiz Results</h2><p> Score: You Got" + " "+ numCorrect+ " "+"Out Of 4 Questions Correct! :)</p>";
	}
									
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
}
