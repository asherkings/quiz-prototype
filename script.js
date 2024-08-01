
    function finishQuiz() {
        // Check if all multiple-choice questions have been answered
        const questions = document.querySelectorAll('.question');
        let allAnswered = true;

        questions.forEach((question, index) => {
            const options = question.querySelectorAll('input[type="radio"]');
            const isAnswered = Array.from(options).some(option => option.checked);

            if (!isAnswered) {
                allAnswered = false;
                alert(`Please answer Question ${index + 1}`);
            }
        });

        if (!allAnswered) {
            return;
        }

        // Get the short answer question value
        const shortAnswer = document.getElementById('question5').value.trim();

        if (shortAnswer === '') {
            alert('Please answer the short answer question.');
            return;
        }

        // Collect answers
        const answers = {};
        questions.forEach((question, index) => {
            const selectedOption = question.querySelector('input[type="radio"]:checked');
            answers[`question${index + 1}`] = selectedOption ? selectedOption.value : null;
        });
        answers['question5'] = shortAnswer;

        // Display answers (for testing purposes)
        console.log('Quiz finished with answers:', answers);

        // Display a confirmation message
        alert('Quiz finished! Your answers have been submitted.');

        function finishQuiz() {
            alert('Quiz finished!');
        }

        // You can also send the answers to the server or process them as needed
        // Example: send the answers to the server using fetch
        /*
        fetch('/submit-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answers),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Quiz finished! Your answers have been submitted.');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your quiz.');
        });
        */
    }

function finishQuiz() {
    // Check if all multiple-choice questions have been answered
    const questions = document.querySelectorAll('.question');
    let allAnswered = true;

    questions.forEach((question, index) => {
        const options = question.querySelectorAll('input[type="radio"]');
        const isAnswered = Array.from(options).some(option => option.checked);

        if (!isAnswered) {
            allAnswered = false;
            alert(`Please answer Question ${index + 1}`);
        }
    });

    if (!allAnswered) {
        return;
    }

    // Get the short answer question value
    const shortAnswer = document.getElementById('question5').value.trim();

    if (shortAnswer === '') {
        alert('Please answer the short answer question.');
        return;
    }

    // Collect answers
    const answers = {};
    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        answers[`Question ${index + 1}`] = selectedOption ? selectedOption.value : null;
    });
    answers['question5'] = shortAnswer;

    // Store answers in localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(answers));

    // Redirect to the results page
    window.location.href = 'results.html';
}
