
        const quizData = {
            math: [
                {
                    type: 'single',
                    question: 'What is 15 × 7?',
                    options: ['95', '105', '115', '125'],
                    correct: 1
                },
                {
                    type: 'single',
                    question: 'What is the value of π (pi) rounded to 2 decimal places?',
                    options: ['3.12', '3.14', '3.16', '3.18'],
                    correct: 1
                },
                {
                    type: 'fill',
                    question: 'The square root of 64 is ___.',
                    answer: '8',
                    placeholder: 'Enter number'
                },
                {
                    type: 'single',
                    question: 'What is 25% of 200?',
                    options: ['25', '50', '75', '100'],
                    correct: 1
                },
                {
                    type: 'multi',
                    question: 'Which of these are prime numbers? (Select all that apply)',
                    options: ['2', '4', '7', '9', '11'],
                    correct: [0, 2, 4]
                }
            ],
            science: [
                {
                    type: 'fill',
                    question: 'The largest planet in our solar system is ___.',
                    answer: 'jupiter',
                    placeholder: 'Enter planet name'
                },
                {
                    type: 'fill',
                    question: 'The chemical symbol for gold is ___.',
                    answer: 'au',
                    placeholder: 'Enter chemical symbol'
                },
                {
                    type: 'fill',
                    question: 'The process by which plants make their own food is called ___.',
                    answer: 'photosynthesis',
                    placeholder: 'Enter biological process'
                },
                {
                    type: 'single',
                    question: 'How many bones are in the adult human body?',
                    options: ['196', '206', '216', '226'],
                    correct: 1
                },
                {
                    type: 'multi',
                    question: 'Which of these are states of matter? (Select all that apply)',
                    options: ['Solid', 'Liquid', 'Gas', 'Plasma', 'Energy'],
                    correct: [0, 1, 2, 3]
                },
                {
                    type: 'single',
                    question: 'What is the speed of light in vacuum?',
                    options: ['299,792,458 m/s', '300,000,000 m/s', '186,000 miles/s', 'All of the above'],
                    correct: 0
                }
            ],
            social: [
                {
                    type: 'single',
                    question: 'How many branches of government are there in the United States?',
                    options: ['2', '3', '4', '5'],
                    correct: 1
                },
                {
                    type: 'multi',
                    question: 'Which of these are fundamental human rights? (Select all that apply)',
                    options: ['Right to Education', 'Right to Privacy', 'Right to Health', 'Right to Property', 'Right to Free Speech'],
                    correct: [0, 1, 2, 4]
                },
                {
                    type: 'fill',
                    question: 'The system where people vote for their representatives is called ___.',
                    answer: 'democracy',
                    placeholder: 'Enter government system'
                },
                {
                    type: 'single',
                    question: 'What does GDP stand for?',
                    options: ['Gross Domestic Product', 'General Development Plan', 'Global Distribution Process', 'Government Debt Policy'],
                    correct: 0
                }
            ],
            history: [
                {
                    type: 'single',
                    question: 'Which year did World War II end?',
                    options: ['1943', '1944', '1945', '1946'],
                    correct: 2
                },
                {
                    type: 'single',
                    question: 'Who was the first President of the United States?',
                    options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
                    correct: 1
                },
                {
                    type: 'fill',
                    question: 'The ancient wonder of the world located in Egypt is the Great Pyramid of ___.',
                    answer: 'giza',
                    placeholder: 'Enter location'
                },
                {
                    type: 'single',
                    question: 'The Renaissance period began in which country?',
                    options: ['France', 'Germany', 'Italy', 'Spain'],
                    correct: 2
                },
                {
                    type: 'multi',
                    question: 'Which of these were ancient civilizations? (Select all that apply)',
                    options: ['Roman Empire', 'Maya', 'Ancient Egypt', 'Aztec', 'Modern USA'],
                    correct: [0, 1, 2, 3]
                }
            ],
            geography: [
                {
                    type: 'single',
                    question: 'What is the capital of France?',
                    options: ['London', 'Berlin', 'Paris', 'Madrid'],
                    correct: 2
                },
                {
                    type: 'single',
                    question: 'Which is the longest river in the world?',
                    options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],
                    correct: 1
                },
                {
                    type: 'fill',
                    question: 'The highest mountain in the world is Mount ___.',
                    answer: 'everest',
                    placeholder: 'Enter mountain name'
                },
                {
                    type: 'multi',
                    question: 'Which of these are continents? (Select all that apply)',
                    options: ['Asia', 'Europe', 'Oceania', 'Antarctica', 'Greenland'],
                    correct: [0, 1, 2, 3]
                }
            ],
            general: [
                {
                    type: 'multi',
                    question: 'Which of the following are programming languages? (Select all that apply)',
                    options: ['JavaScript', 'HTML', 'Python', 'CSS', 'Java'],
                    correct: [0, 2, 4]
                },
                {
                    type: 'multi',
                    question: 'Which of these are web browsers? (Select all that apply)',
                    options: ['Chrome', 'Photoshop', 'Firefox', 'Excel', 'Safari'],
                    correct: [0, 2, 4]
                },
                {
                    type: 'single',
                    question: 'Which planet is closest to the Sun?',
                    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
                    correct: 2
                },
                {
                    type: 'fill',
                    question: 'The study of earthquakes is called ___.',
                    answer: 'seismology',
                    placeholder: 'Enter scientific field'
                },
                {
                    type: 'single',
                    question: 'How many sides does a hexagon have?',
                    options: ['5', '6', '7', '8'],
                    correct: 1
                },
                {
                    type: 'single',
                    question: 'What is the currency of Japan?',
                    options: ['Won', 'Yuan', 'Yen', 'Ringgit'],
                    correct: 2
                }
            ]
        };

        let currentCategory = '';
        let currentQuestions = [];
        let currentQuestion = 0;
        let userAnswers = [];
        let quizStarted = false;
        let quizCompleted = false;

        const categoryNames = {
            math: 'Mathematics',
            science: 'Science',
            social: 'Social Studies',
            history: 'History',
            geography: 'Geography',
            general: 'General Knowledge'
        };

        function selectCategory(category) {
            currentCategory = category;
            currentQuestions = quizData[category];
            initializeQuiz();
        }

        function initializeQuiz() {
            currentQuestion = 0;
            userAnswers = new Array(currentQuestions.length).fill(null);
            quizStarted = true;
            quizCompleted = false;
            
            // Hide category screen and show quiz screen
            document.getElementById('categoryScreen').classList.add('hidden');
            document.getElementById('quizScreen').classList.remove('hidden');
            document.getElementById('scoreContainer').classList.add('hidden');
            
            // Update current category display
            document.getElementById('currentCategory').textContent = categoryNames[currentCategory];
            
            displayQuestion();
            updateProgress();
        }

        function displayQuestion() {
            const container = document.getElementById('questionContainer');
            const question = currentQuestions[currentQuestion];
            
            let html = `
                <div class="question-card">
                    <div class="question-number">Question ${currentQuestion + 1} of ${currentQuestions.length}</div>
                    <div class="question-type">${getQuestionTypeLabel(question.type)}</div>
                    <div class="question-text">${question.question}</div>
                    <div class="options-container">
            `;

            if (question.type === 'single') {
                question.options.forEach((option, index) => {
                    const isSelected = userAnswers[currentQuestion] === index;
                    html += `
                        <div class="option ${isSelected ? 'selected' : ''}" onclick="selectSingleOption(${index})">
                            <input type="radio" name="q${currentQuestion}" ${isSelected ? 'checked' : ''} readonly>
                            ${option}
                        </div>
                    `;
                });
            } else if (question.type === 'multi') {
                question.options.forEach((option, index) => {
                    const isSelected = userAnswers[currentQuestion] && userAnswers[currentQuestion].includes(index);
                    html += `
                        <div class="option ${isSelected ? 'selected' : ''}" onclick="selectMultiOption(${index})">
                            <input type="checkbox" ${isSelected ? 'checked' : ''} readonly>
                            ${option}
                        </div>
                    `;
                });
            } else if (question.type === 'fill') {
                const currentAnswer = userAnswers[currentQuestion] || '';
                html += `
                    <div style="text-align: center; margin: 20px 0;">
                        <input type="text" class="fill-blank-input" 
                               placeholder="${question.placeholder}" 
                               value="${currentAnswer}"
                               onchange="handleFillAnswer(this.value)"
                               oninput="handleFillAnswer(this.value)">
                    </div>
                `;
            }

            html += '</div></div>';
            container.innerHTML = html;

            // Update navigation buttons
            document.getElementById('prevBtn').disabled = currentQuestion === 0;
            document.getElementById('nextBtn').style.display = currentQuestion === currentQuestions.length - 1 ? 'none' : 'block';
            document.getElementById('submitBtn').classList.toggle('hidden', currentQuestion !== currentQuestions.length - 1);
        }

        function getQuestionTypeLabel(type) {
            switch(type) {
                case 'single': return 'Single Choice';
                case 'multi': return 'Multiple Choice';
                case 'fill': return 'Fill in the Blank';
                default: return 'Question';
            }
        }

        function selectSingleOption(index) {
            userAnswers[currentQuestion] = index;
            displayQuestion();
        }

        function selectMultiOption(index) {
            if (!userAnswers[currentQuestion]) {
                userAnswers[currentQuestion] = [];
            }
            
            const currentAnswers = userAnswers[currentQuestion];
            const existingIndex = currentAnswers.indexOf(index);
            
            if (existingIndex > -1) {
                currentAnswers.splice(existingIndex, 1);
            } else {
                currentAnswers.push(index);
            }
            
            displayQuestion();
        }

        function handleFillAnswer(value) {
            userAnswers[currentQuestion] = value.trim();
        }

        function nextQuestion() {
            if (currentQuestion < currentQuestions.length - 1) {
                currentQuestion++;
                displayQuestion();
                updateProgress();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                displayQuestion();
                updateProgress();
            }
        }

        function updateProgress() {
            const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        function submitQuiz() {
            quizCompleted = true;
            showResults();
        }

        function showResults() {
            const score = calculateScore();
            
            // Hide quiz screen
            document.getElementById('quizScreen').classList.add('hidden');
            
            // Show score container
            document.getElementById('scoreContainer').classList.remove('hidden');
            
            // Update score display
            document.getElementById('scoreCategoryName').textContent = categoryNames[currentCategory];
            document.getElementById('finalScore').textContent = `${score.correct}/${currentQuestions.length}`;
            document.getElementById('scoreMessage').textContent = getScoreMessage(score.percentage);
            
            // Show detailed results
            let detailsHtml = '<h3>Detailed Results:</h3>';
            currentQuestions.forEach((question, index) => {
                const isCorrect = checkAnswer(index);
                detailsHtml += `
                    <div style="margin: 15px 0; padding: 15px; border-radius: 8px; ${isCorrect ? 'background: #d4edda;' : 'background: #f8d7da;'}">
                        <strong>Q${index + 1}:</strong> ${question.question}<br>
                        <span style="color: ${isCorrect ? '#155724' : '#721c24'};">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    </div>
                `;
            });
            
            document.getElementById('scoreDetails').innerHTML = detailsHtml;
        }

        function calculateScore() {
            let correct = 0;
            
            currentQuestions.forEach((question, index) => {
                if (checkAnswer(index)) {
                    correct++;
                }
            });
            
            return {
                correct: correct,
                total: currentQuestions.length,
                percentage: Math.round((correct / currentQuestions.length) * 100)
            };
        }

        function checkAnswer(questionIndex) {
            const question = currentQuestions[questionIndex];
            const userAnswer = userAnswers[questionIndex];
            
            if (question.type === 'single') {
                return userAnswer === question.correct;
            } else if (question.type === 'multi') {
                if (!userAnswer || userAnswer.length !== question.correct.length) {
                    return false;
                }
                return question.correct.every(correct => userAnswer.includes(correct)) &&
                       userAnswer.every(answer => question.correct.includes(answer));
            } else if (question.type === 'fill') {
                return userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase();
            }
            
            return false;
        }

        function getScoreMessage(percentage) {
            if (percentage >= 90) return "Outstanding! You're a quiz master! 🏆";
            if (percentage >= 80) return "Excellent work! Great knowledge! 🌟";
            if (percentage >= 70) return "Good job! Keep it up! 👍";
            if (percentage >= 60) return "Not bad! Room for improvement! 📚";
            return "Keep studying! You'll do better next time! 💪";
        }

        function restartQuiz() {
            initializeQuiz();
        }

        function backToCategories() {
            // Reset quiz state
            currentCategory = '';
            currentQuestions = [];
            currentQuestion = 0;
            userAnswers = [];
            quizStarted = false;
            quizCompleted = false;
            
            // Show category screen and hide others
            document.getElementById('categoryScreen').classList.remove('hidden');
            document.getElementById('quizScreen').classList.add('hidden');
            document.getElementById('scoreContainer').classList.add('hidden');
        }

        // Initialize the quiz when the page loads
        window.onload = function() {
            // Show category selection by default
            document.getElementById('categoryScreen').classList.remove('hidden');
            document.getElementById('quizScreen').classList.add('hidden');
            document.getElementById('scoreContainer').classList.add('hidden');
        };
    