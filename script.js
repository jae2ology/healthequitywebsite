
let fact = document.getElementById("fact");


let displayScript = document.getElementById("scriptReturned");

let script = document.getElementById("script");

let factList = [
  "Rural communities have less access to doctors and health, making it harder for them to get access to care.",
  "Around 20% of Black adults could not access health insurance compared to 10% in white and Asian adults. For Latinx adults, this figure was 35%.",
  "A 2012 study also found that predominantly Black zip codes were 67% more likely to have a shortage of primary care physicians (PCPs).",
  "A 2016 study found many white medical students wrongly believe Black people have a higher pain tolerance than white people. Of all the participants, 73% held at least one false belief about the biological differences between races.",
  "A 2020 study shows that between 2005 and 2016, medical professionals were 10% less likely to admit Black patients to the hospital than white patients. It also suggests Black people were 1.26 times more likely to die in the ED or hospital.",
  "According to a 2019 study, Black people are 3–4 times more likely to die from pregnancy-related causes than white people in the U.S.",
  "Black males are four times more likely to receive a schizophrenia diagnosis than white males. MHA suggests this is because clinicians can overlook the symptoms of depression and focus more on psychotic symptoms when treating Black people."
];




let count = 0;
const myButton = document.getElementById("myButton");

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count =0;
  }
}




if (script) {
  script.addEventListener("click", generateScript);

}

function generateScript(){
  let name = document.getElementById("name").value;
  let county = document.getElementById("county").value;
  let state = document.getElementById("state").value;


  displayScript.innerHTML = "Hello, my name is " + name + ", and I live in " + county + ", " + state + ". I am emailing you as a petition to amend the bill H.R.7585 Health Equity and Accountability Act. This bill outlines the guidelines to eligibility for Medicare and provisions in health and conditions that affect specific minority groups. However, this bill does not include protection of citizens that have been discriminated by a doctor or similar healthcare professional. This bill also does not enforce the consequences of said health discrimination, or outlines what is considered discrimination. Similarly, the bill H.R 8191 Create A Respectful and Open World for Natural Hair that was passed federally in a few of the states outlines direct guidelines to what will be considered hair discrimination to avoid it happening in the future, and it has. Bill H.R7585 needs a similar amendment to outline the specific guidelines of what is considered health discrimination.";
  
}



