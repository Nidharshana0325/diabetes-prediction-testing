// Random facts and healthy tips data
const facts = [
    "Diabetes is a major cause of blindness, kidney failure, heart attacks, stroke, and lower limb amputation.",
    "The number of people with diabetes has risen from 108 million in 1980 to 422 million in 2014.",
    "Diabetes increases the risk of heart disease and stroke, which kills more than 50% of people with diabetes.",
    "Healthy eating, physical activity, and medication (if needed) are the mainstays of diabetes management.",
    "Type 2 diabetes can be prevented by adopting a healthy diet and an active lifestyle.",
    "Diabetes can be managed well, but the potential complications are serious and can be life-threatening.",
];

const tips = [
    "Eat plenty of fruits and vegetables to maintain a healthy diet.",
    "Stay active! Regular physical activity can help control blood sugar levels.",
    "Monitor your blood sugar levels regularly and follow your doctor's advice.",
    "Limit your intake of sugary drinks and processed foods.",
    "Stay hydrated by drinking plenty of water throughout the day.",
    "Get enough sleep each night to support overall health and well-being.",
];

// Function to generate random index
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function to display random fact and tip
function displayRandomFactAndTip() {
    const factIndex = getRandomIndex(facts);
    const tipIndex = getRandomIndex(tips);
    document.getElementById('fact').textContent = facts[factIndex];
    document.getElementById('tip').textContent = tips[tipIndex];
}

// Function to predict diabetes
function predict() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const hypertension = document.getElementById('hypertension').value;
    const smoking = document.getElementById('smoking').value;
    const bmi = document.getElementById('bmi').value;
    const heartdisease = document.getElementById('heartdisease').value;

    // Perform prediction here (Dummy prediction for demonstration)
    const result = Math.random() < 0.5 ? 'Low Risk - Take care of your diet' : 'High Risk - consult a doctor';
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Prediction: ${result}`;
    resultElement.classList.add('highlight'); // Add highlight class to emphasize

    // Display random fact and tip
    displayRandomFactAndTip();

    // Show the warning message
    const warning = document.querySelector('.warning');
    warning.style.display = 'block';
    setTimeout(() => {
        warning.style.display = 'none'; // Hide the warning after 7 seconds
    }, 7000);
}

// Initial display of random fact and tip
displayRandomFactAndTip();
