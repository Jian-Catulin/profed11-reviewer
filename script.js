// ==========================================
// 1. MULTIPLE CHOICE BANK (50 Items)
// ==========================================
const mcData = [
    // Unit 1: Nature of the Curriculum (Definitions & Types)
    { question: "The word curriculum comes from the Latin word 'currere', which means:", options: ["To run or run a course", "To build or construct", "To teach or lecture", "To learn or discover"], answer: "To run or run a course", explanation: "Curriculum historically refers to a course of study that learners run or follow[cite: 47]." },
    { question: "When curriculum is defined as a 'roadmap' identifying what learners are expected to achieve, it is viewed as a:", options: ["Plan for achieving goals", "Field of study", "System for dealing with people", "Hidden curriculum"], answer: "Plan for achieving goals", explanation: "This definition views curriculum as a deliberately designed plan with a clear destination[cite: 47]." },
    { question: "Viewing curriculum as dealing with everything a learner encounters, does, and learns under the guidance of teachers aligns with defining it as:", options: ["Learner's experiences", "Subject matter", "A field of study", "A written document"], answer: "Learner's experiences", explanation: "This broad definition encompasses all actual experiences inside and outside the classroom[cite: 47]." },
    { question: "Which type of curriculum is formulated by scholars and policy-making groups like DepEd or CHED to identify what 'ought' to be taught?", options: ["Recommended Curriculum", "Assessed Curriculum", "Learned Curriculum", "Hidden Curriculum"], answer: "Recommended Curriculum", explanation: "Policy-making groups recommend the standards that schools should follow[cite: 47]." },
    { question: "A syllabus or a comprehensive lesson plan is an example of which type of curriculum?", options: ["Written Curriculum", "Hidden Curriculum", "Learned Curriculum", "Supported Curriculum"], answer: "Written Curriculum", explanation: "The written curriculum is the specific document intended to ensure educational goals are accomplished[cite: 47]." },
    { question: "The curriculum that an observer actually sees the teacher delivering day-by-day in the classroom is the:", options: ["Taught Curriculum", "Recommended Curriculum", "Assessed Curriculum", "Hidden Curriculum"], answer: "Taught Curriculum", explanation: "This is the curriculum in action as delivered by the teacher[cite: 47]." },
    { question: "Textbooks, instructional software, and other educational media fall under the:", options: ["Supported Curriculum", "Written Curriculum", "Learned Curriculum", "Taught Curriculum"], answer: "Supported Curriculum", explanation: "These resources support the teaching and learning process[cite: 47]." },
    { question: "Standardized tests, district measures, and teacher-made exams represent the:", options: ["Assessed Curriculum", "Hidden Curriculum", "Recommended Curriculum", "Learned Curriculum"], answer: "Assessed Curriculum", explanation: "The assessed curriculum measures performance and learning outcomes[cite: 47]." },
    { question: "The bottom-line changes in values, perceptions, and behaviors that students actually retain is the:", options: ["Learned Curriculum", "Assessed Curriculum", "Taught Curriculum", "Written Curriculum"], answer: "Learned Curriculum", explanation: "This is the actual outcome of the educational experience[cite: 47]." },
    { question: "Unwritten lessons, norms, values, and beliefs conveyed through the school's social environment represent the:", options: ["Hidden/Implicit Curriculum", "Supported Curriculum", "Recommended Curriculum", "Assessed Curriculum"], answer: "Hidden/Implicit Curriculum", explanation: "The hidden curriculum defines what students learn from the physical environment and school procedures without it being openly taught[cite: 47]." },
    
    // Unit 1: Characteristics of a Good Curriculum
    { question: "Which characteristic of a good curriculum ensures it adapts to meet the needs of a modern, dynamic community?", options: ["It is continuously evolving", "It is democratically conceived", "It has complex details", "It is historically static"], answer: "It is continuously evolving", explanation: "A good curriculum is not static; it requires continuous monitoring and adaptation[cite: 47]." },
    { question: "A good curriculum is the product of many minds and energies from different sectors. This means it is:", options: ["Democratically conceived", "Administratively flexible", "A long-term effort", "Logically sequenced"], answer: "Democratically conceived", explanation: "It relies on the group effort of individuals knowledgeable about the learners and society[cite: 47]." },
    { question: "Which characteristic ensures the curriculum is open to revision to meet the demands of globalization and the digital age?", options: ["Administrative flexibility", "Educational quality", "Logical sequence", "Complex details"], answer: "Administrative flexibility", explanation: "A flexible curriculum can easily incorporate necessary changes[cite: 47]." },

    // Historical Foundation
    { question: "During the Pre-Spanish Period, how did Filipinos primarily learn?", options: ["Informal and community-based learning", "Through formal structured classrooms", "Through government universities", "By studying Spanish literature"], answer: "Informal and community-based learning", explanation: "Education was informal, oral, practical, and focused on survival skills." },
    { question: "Which of the following was the sole official teaching language during the American Period?", options: ["English", "Spanish", "Tagalog", "Nihongo"], answer: "English", explanation: "The American Period transitioned from Spanish-centric to English as the sole official teaching language." },
    { question: "Under Military Order No. 2 during the Japanese Occupation, what was the main goal of the curriculum?", options: ["Erase Western influence and promote Japanese ideology", "Promote American democracy", "Institutionalize the Spanish language", "Establish the K-12 system"], answer: "Erase Western influence and promote Japanese ideology", explanation: "The curriculum was completely reorganized to erase Western influence." },
    { question: "What language was mandated to be taught during the Japanese Occupation?", options: ["Nihongo", "English", "Spanish", "Baybayin"], answer: "Nihongo", explanation: "Authorities banned English and required teaching Nihongo and Japanese culture." },
    { question: "Which president launched the 'New Society' (Ang Bagong Lipunan) curriculum?", options: ["Ferdinand Marcos Sr.", "Corazon Aquino", "Manuel Quezon", "Jose P. Laurel"], answer: "Ferdinand Marcos Sr.", explanation: "The New Society was launched under Martial Law via Proclamation No. 1081 in 1972." },
    { question: "Republic Act No. 10533 is the legal basis for which curriculum?", options: ["K to 12 Basic Education Curriculum", "New Society Curriculum", "Bilingual Education Policy", "Education Act of 1982"], answer: "K to 12 Basic Education Curriculum", explanation: "RA 10533 (2013) expanded basic education from 10 to 13 years." },
    
    // Philosophical Foundation
    { question: "Which philosophy emphasizes timeless knowledge, universal truths, and great classic works?", options: ["Perennialism", "Progressivism", "Reconstructionism", "Behaviorism"], answer: "Perennialism", explanation: "Perennialism focuses on enduring ideas and is highly teacher-centered[cite: 48]." },
    { question: "Which philosophy advocates for a 'Back-to-Basics' approach to education?", options: ["Essentialism", "Reconstructionism", "Humanism", "Progressivism"], answer: "Essentialism", explanation: "Essentialism emphasizes teaching core knowledge and fundamental subjects with rigorous discipline[cite: 48]." },
    { question: "Which educational philosophy is associated with John Dewey?", options: ["Progressivism", "Perennialism", "Essentialism", "Cognitivism"], answer: "Progressivism", explanation: "Dewey believed students learn best through experience and active participation ('Learning by doing')[cite: 48]." },
    { question: "Which philosophy believes the purpose of education is to reconstruct society and eliminate social inequities?", options: ["Reconstructionism", "Progressivism", "Essentialism", "Humanism"], answer: "Reconstructionism", explanation: "Theodore Brameld argued education should solve cultural crises and address real-world social problems[cite: 48]." },
    { question: "Students testing local water quality to present clean-water proposals to city officials exemplifies:", options: ["Reconstructionism", "Essentialism", "Perennialism", "Behaviorism"], answer: "Reconstructionism", explanation: "This shows active participation in social reform and addressing real-world community issues[cite: 48]." },

    // Psychological Foundation (Behaviorism & Cognitivism)
    { question: "Ivan Pavlov is known for which behavioral theory?", options: ["Classical Conditioning", "Operant Conditioning", "Law of Effect", "Social Learning Theory"], answer: "Classical Conditioning", explanation: "Pavlov studied learning through association between stimuli (e.g., the dog and bell experiment)[cite: 48]." },
    { question: "B.F. Skinner believed behavior is influenced by:", options: ["Reinforcement and punishment", "Sudden insight", "Universal truths", "Prior knowledge"], answer: "Reinforcement and punishment", explanation: "Skinner developed Operant Conditioning using the 'Skinner Box'[cite: 48]." },
    { question: "Edward Thorndike proposed that behaviors followed by satisfying consequences are likely to be repeated. What is this called?", options: ["Law of Effect", "Law of Readiness", "Law of Exercise", "Law of Association"], answer: "Law of Effect", explanation: "This is a key component of Thorndike's Connectionism theory[cite: 48]." },
    { question: "Albert Bandura's Social Learning Theory states that people learn by:", options: ["Observing and imitating others", "Receiving digital tokens", "Sudden 'Aha!' moments", "Reading classic literature"], answer: "Observing and imitating others", explanation: "Bandura emphasizes attention, retention, reproduction, and motivation[cite: 48]." },
    { question: "A teacher giving stars or digital tokens to students who complete lab exercises early is using:", options: ["Operant Conditioning (Positive Reinforcement)", "Classical Conditioning", "Insight Learning", "Constructivism"], answer: "Operant Conditioning (Positive Reinforcement)", explanation: "This is a Token Economy, a classic Skinner application[cite: 48]." },
    { question: "Which cognitivist is associated with 'Insight Learning' or the sudden 'Aha!' moment?", options: ["Wolfgang Kohler", "Max Wertheimer", "George Miller", "Endel Tulving"], answer: "Wolfgang Kohler", explanation: "Kohler studied learning through sudden understanding of a problem[cite: 48]." },
    { question: "George Miller's contribution to cognitivism involves organizing information into smaller meaningful groups. This is called:", options: ["Chunking", "Scaffolding", "Classical Conditioning", "Essentialism"], answer: "Chunking", explanation: "Miller is famous for his Information-Processing and Chunking theory[cite: 48]." },
    { question: "David Ausubel's Meaningful Learning Theory states that new knowledge becomes meaningful when:", options: ["It is connected to prior knowledge", "It is reinforced with candy", "It is learned through trial and error", "It is repeated 10 times"], answer: "It is connected to prior knowledge", explanation: "Ausubel emphasized the use of advance organizers to activate prior knowledge[cite: 48]." },
    { question: "Endel Tulving is known for his framework on:", options: ["Episodic-Semantic Memory", "Gestalt Theory", "Levels of Processing", "Radical Constructivism"], answer: "Episodic-Semantic Memory", explanation: "Tulving explained different forms of memory, including personal experiences and general facts[cite: 48]." },
    { question: "Max Wertheimer is associated with Gestalt Theory, which means learning by:", options: ["Seeing the whole pattern and relationships", "Chunking information", "Observing peers", "Using a token economy"], answer: "Seeing the whole pattern and relationships", explanation: "Gestalt focuses on productive thinking and understanding whole patterns[cite: 48]." },

    // Psychological Foundation (Humanism & Constructivism)
    { question: "The word humanism comes from the Latin root 'humanus', which means:", options: ["Human, cultured, or kind", "Everlasting or perpetual", "Essence or being", "To build or construct"], answer: "Human, cultured, or kind", explanation: "This is the etymological root of Humanism, focusing on feelings and emotions." },
    { question: "According to Maslow, which of the following represents the highest level of human need?", options: ["Self-actualization", "Physiological needs", "Esteem", "Safety needs"], answer: "Self-actualization", explanation: "Self-actualization sits at the very top of Maslow's hierarchy of needs[cite: 48]." },
    { question: "Carl Rogers developed a Humanistic theory focusing on acceptance, empathy, and open communication known as:", options: ["Person-Centered Theory", "Perceptual Field Theory", "Social Learning Theory", "Operant Conditioning"], answer: "Person-Centered Theory", explanation: "Rogers emphasized student-centered learning and the teacher as a facilitator[cite: 48]." },
    { question: "Arthur Wright Combs proposed the Theory of the Perceptual Field, which states that people act based on:", options: ["How they perceive their situation", "External standardized metrics", "Biological instincts", "Historical precedents"], answer: "How they perceive their situation", explanation: "Combs believed subjective reality determines how one feels and acts[cite: 48]." },
    { question: "According to Constructivism, students learn best from:", options: ["Their experiences and active building of understanding", "Listening passively to lectures", "Memorizing classical texts", "Strict physical discipline"], answer: "Their experiences and active building of understanding", explanation: "Constructivists highlight that prior knowledge serves as a foundation for actively building new understanding[cite: 48]." },
    { question: "Jerome Bruner advocated for an educational approach where students are encouraged to explore and solve problems, known as:", options: ["Discovery Learning", "Insight Learning", "Rote Memorization", "Radical Constructivism"], answer: "Discovery Learning", explanation: "Bruner believed education should focus on self-guided discovery[cite: 48]." },
    { question: "Jean Piaget believed education should focus on:", options: ["Stage-appropriate, hands-on learning", "Military discipline", "Token economies", "Standardized testing"], answer: "Stage-appropriate, hands-on learning", explanation: "Piaget emphasized that students actively construct knowledge by exploring their environment through cognitive stages[cite: 48]." },
    { question: "Lev Vygotsky believed learning is a social process driven by interaction with a:", options: ["More Knowledgeable Other (MKO)", "Phenomenal Field", "Universal Truth", "Primary Dimension"], answer: "More Knowledgeable Other (MKO)", explanation: "Vygotsky emphasized MKOs and scaffolding within the student's Zone of Proximal Development[cite: 48]." },
    { question: "Ernst von Glasersfeld formulated an epistemological theory stating knowledge is actively built by the individual rather than passively received. This is:", options: ["Radical Constructivism", "Social Constructivism", "Gestalt Theory", "Essentialism"], answer: "Radical Constructivism", explanation: "Von Glasersfeld is the primary theorist of Radical Constructivism[cite: 48]." },

    // Sociological Foundation
    { question: "The Sociological Foundation of Curriculum considers the relationship between:", options: ["Schools and society", "The brain and memory", "Biology and physics", "Classical literature and history"], answer: "Schools and society", explanation: "It recognizes that social issues, culture, and the economy directly influence what students learn[cite: 48]." },
    { question: "Which sociologist famously said, 'Education is not preparation for life; education is life itself'?", options: ["John Dewey", "Alvin Toffler", "Theodore Brameld", "Arthur Wright Combs"], answer: "John Dewey", explanation: "Dewey emphasized learning through real-life experiences within the community[cite: 48]." },
    { question: "Alvin Toffler predicted alternative forms of education and stated that the illiterate of the 21st century will be those who cannot:", options: ["Learn, unlearn, and relearn", "Read and write", "Code in HTML", "Speak English"], answer: "Learn, unlearn, and relearn", explanation: "Toffler focused on future-oriented, technology-driven education required for rapid societal change[cite: 48]." },
    { question: "In an ICT class, students building websites for local sari-sari stores to solve a community need is an application of:", options: ["Sociological Foundation", "Perennialism", "Operant Conditioning", "Gestalt Theory"], answer: "Sociological Foundation", explanation: "This project addresses social relevance, digital inclusion, and community interaction." },
    { question: "During the New Society, the Youth Civic Action Program (YCAP) required students to:", options: ["Participate in public work projects as a graduation requirement", "Learn Japanese", "Memorize classic literature", "Take a college entrance exam"], answer: "Participate in public work projects as a graduation requirement", explanation: "YCAP was a mandatory civic duty program under Marcos Sr." },
    { question: "Which psychological framework describes learning information processing as 'depth of processing'?", options: ["Fergus Craik's Levels of Processing", "Miller's Chunking", "Tulving's Episodic Memory", "Ausubel's Prior Knowledge"], answer: "Fergus Craik's Levels of Processing", explanation: "Craik theorized that information processed more deeply is remembered better[cite: 48]." }
];

// ==========================================
// 2. IDENTIFICATION BANK (30 Items)
// ==========================================
const identData = [
    // Unit 1 Additions
    { question: "The type of curriculum that includes unwritten norms, values, and beliefs in the school environment.", answer: ["Hidden", "Implicit", "Hidden Curriculum", "Implicit Curriculum"], explanation: "The Hidden/Implicit curriculum teaches students through the school's social environment rather than formal lessons[cite: 47]." },
    { question: "The curriculum that appears in district tests, standardized tests, and performance measures.", answer: ["Assessed", "Assessed Curriculum"], explanation: "This curriculum focuses heavily on evaluation and measurement[cite: 47]." },
    { question: "Textbooks, media, instructional software, and physical facilities belong to this type of curriculum.", answer: ["Supported", "Supported Curriculum"], explanation: "The Supported Curriculum provides the necessary resources for teaching[cite: 47]." },
    { question: "The Latin word meaning 'to run' or 'to run a course', from which curriculum is derived.", answer: ["Currere"], explanation: "Currere refers to the educational course or path that learners follow[cite: 47]." },
    { question: "The curriculum that represents the bottom-line changes in a student's values and behaviors.", answer: ["Learned", "Learned Curriculum"], explanation: "The Learned Curriculum denotes what the students actually retain and apply[cite: 47]." },
    { question: "The type of curriculum that stresses 'oughtness' and is proposed by policy-making groups like DepEd.", answer: ["Recommended", "Recommended Curriculum"], explanation: "The Recommended Curriculum is suggested by scholars or educational bodies[cite: 47]." },
    { question: "The characteristic of a good curriculum showing it is open to revision to meet the demands of globalization.", answer: ["Administrative flexibility", "Flexibility"], explanation: "A flexible curriculum can adapt to modern technological and societal shifts[cite: 47]." },
    { question: "The definition of curriculum focusing strictly on specific subjects like Math, Science, and English.", answer: ["Subject matter", "Content", "Subject matter or content"], explanation: "This defines curriculum by the academic material to be assimilated[cite: 47]." },
    
    // Foundations
    { question: "The native script used by Filipinos before the arrival of the Spaniards.", answer: ["Baybayin"], explanation: "Baybayin was the primary script used during the Pre-Spanish period." },
    { question: "The group of 600 American educators who arrived in the Philippines in August 1901.", answer: ["Thomasites"], explanation: "They arrived on the U.S.A.T. Thomas to serve as public school teachers." },
    { question: "The language mandated to be taught in schools during the Japanese Occupation.", answer: ["Nihongo", "Japanese"], explanation: "The Japanese banned English and required Nihongo." },
    { question: "The specific policy in 1974 that mandated Pilipino for social sciences and English for Science and Math.", answer: ["Bilingual Education Policy"], explanation: "This policy separated languages by subject during the New Society." },
    { question: "Republic Act No. 10533 established this modern Philippine curriculum.", answer: ["K to 12", "K-12", "K to 12 Basic Education Curriculum"], explanation: "RA 10533 expanded basic education to 13 years." },
    { question: "The Latin word meaning 'everlasting' or 'perpetual', forming the root of a major educational philosophy.", answer: ["Perennis"], explanation: "It is the root word for Perennialism." },
    { question: "The philosophy championed by Bagley and Hirsch focusing on core knowledge and back-to-basics.", answer: ["Essentialism"], explanation: "Essentialism comes from the Latin 'essentia'[cite: 48]." },
    { question: "The progressive philosopher who believed that 'Education is not preparation for life; education is life itself.'", answer: ["John Dewey", "Dewey"], explanation: "Dewey is the father of Progressivism and a key sociological theorist[cite: 48]." },
    { question: "The philosophy championed by Theodore Brameld that aims to eliminate social inequities and reconstruct society.", answer: ["Reconstructionism"], explanation: "Reconstructionism focuses on social reform and real-world action[cite: 48]." },
    { question: "The behaviorist who discovered Classical Conditioning using dogs.", answer: ["Ivan Pavlov", "Pavlov"], explanation: "Pavlov studied learning through association between stimuli[cite: 48]." },
    { question: "The behaviorist who coined 'Operant Conditioning'.", answer: ["B.F. Skinner", "Skinner"], explanation: "Skinner proved behavior is influenced by reinforcement and punishment[cite: 48]." },
    { question: "Edward Thorndike's law stating behaviors followed by satisfying consequences are likely to be repeated.", answer: ["Law of Effect"], explanation: "This is a core component of Thorndike's connectionism[cite: 48]." },
    { question: "Albert Bandura's theory stating people learn by observing and imitating others.", answer: ["Social Learning Theory"], explanation: "Bandura focused on attention, retention, reproduction, and motivation[cite: 48]." },
    { question: "The cognitivist associated with Gestalt Theory and 'Productive Thinking' (seeing the whole pattern).", answer: ["Max Wertheimer", "Wertheimer"], explanation: "Wertheimer believed learning occurs by understanding the whole pattern[cite: 48]." },
    { question: "The cognitivist who studied 'Insight Learning' or the sudden 'Aha!' moment.", answer: ["Wolfgang Kohler", "Kohler"], explanation: "Kohler observed sudden understanding in problem-solving[cite: 48]." },
    { question: "George Miller's concept of organizing information into smaller meaningful groups.", answer: ["Chunking"], explanation: "Chunking is key to Information-Processing theory[cite: 48]." },
    { question: "David Ausubel's theory stating new knowledge becomes meaningful when connected to prior knowledge.", answer: ["Meaningful Learning Theory", "Meaningful Learning", "Subsumption Theory"], explanation: "Ausubel advocated for the use of advance organizers[cite: 48]." },
    { question: "The psychologist who created the Hierarchy of Needs, with Self-Actualization at the top.", answer: ["Abraham Maslow", "Maslow"], explanation: "Maslow's hierarchy is a cornerstone of Humanistic psychology[cite: 48]." },
    { question: "Carl Rogers' humanistic theory emphasizing empathy, respect, and student-centered learning.", answer: ["Person-Centered Theory"], explanation: "Rogers focused on the teacher as a facilitator[cite: 48]." },
    { question: "The overarching psychological theory highlighting that students actively build understanding from experiences.", answer: ["Constructivism"], explanation: "Constructivists believe knowledge is constructed, not passively received[cite: 48]." },
    { question: "Lev Vygotsky's acronym for the gap between what a student can do alone and what they can do with help.", answer: ["ZPD", "Zone of Proximal Development"], explanation: "The ZPD is where scaffolding by a teacher occurs[cite: 48]." },
    { question: "Lev Vygotsky's term for a peer or teacher who guides a learner through the ZPD.", answer: ["MKO", "More Knowledgeable Other"], explanation: "The MKO provides the necessary educational scaffolding[cite: 48]." }
];

// ---------------------------------------------------------
// ADD QUESTION TYPES (This allows Retry mode to mix them)
// ---------------------------------------------------------
mcData.forEach(q => q.type = "mc");
identData.forEach(q => q.type = "ident");

// ==========================================
// APP LOGIC & TRACKERS (WITH LOCAL STORAGE)
// ==========================================
let totalAnswered = parseInt(localStorage.getItem("profed11_answered")) || 0;
let totalCorrect = parseInt(localStorage.getItem("profed11_correct")) || 0;
let totalIncorrect = parseInt(localStorage.getItem("profed11_incorrect")) || 0;
let wrongQuestions = JSON.parse(localStorage.getItem("profed11_wrong")) || [];

let currentQuizData = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let currentMode = ""; 

const dashboard = document.getElementById("dashboard-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const identContainer = document.getElementById("identification-container");
const identInput = document.getElementById("ident-input");
const submitIdentBtn = document.getElementById("submit-ident-btn");
const nextBtn = document.getElementById("next-btn");
const questionCounter = document.getElementById("question-counter");
const explanationBox = document.getElementById("explanation-box");
const explanationTitle = document.getElementById("explanation-title");
const explanationText = document.getElementById("explanation-text");

// ---------------------------------------------------------
// DYNAMICALLY CREATE BUTTONS (Retry & Clear)
// ---------------------------------------------------------
// Retry Missed Questions Button
const retryBtn = document.createElement("button");
retryBtn.id = "retry-btn";
retryBtn.className = "hidden";
retryBtn.style.marginTop = "20px";
retryBtn.style.backgroundColor = "#e53e3e"; 
retryBtn.style.color = "white";
retryBtn.style.padding = "12px 24px";
retryBtn.style.border = "none";
retryBtn.style.borderRadius = "4px";
retryBtn.style.fontSize = "1rem";
retryBtn.style.fontWeight = "bold";
retryBtn.style.cursor = "pointer";
retryBtn.style.width = "100%";
retryBtn.addEventListener("click", () => startQuiz(wrongQuestions, "retry"));

// Clear Progress Button
const clearBtn = document.createElement("button");
clearBtn.id = "clear-btn";
clearBtn.textContent = "🗑️ Clear Saved Progress";
clearBtn.style.marginTop = "10px";
clearBtn.style.backgroundColor = "transparent";
clearBtn.style.color = "#a0aec0";
clearBtn.style.border = "1px solid #4a5568";
clearBtn.style.padding = "10px 24px";
clearBtn.style.borderRadius = "4px";
clearBtn.style.cursor = "pointer";
clearBtn.style.width = "100%";
clearBtn.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset all your scores and missed questions?")) {
        localStorage.removeItem("profed11_answered");
        localStorage.removeItem("profed11_correct");
        localStorage.removeItem("profed11_incorrect");
        localStorage.removeItem("profed11_wrong");
        totalAnswered = 0; totalCorrect = 0; totalIncorrect = 0; wrongQuestions = [];
        updateDashboardStats();
    }
});

// Append Buttons to Dashboard
dashboard.appendChild(retryBtn);
dashboard.appendChild(clearBtn);

// Listeners
document.getElementById("mode-mc-btn").addEventListener("click", () => startQuiz(mcData, "mc"));
document.getElementById("mode-ident-btn").addEventListener("click", () => startQuiz(identData, "ident"));
document.getElementById("return-btn").addEventListener("click", returnToDashboard);
document.getElementById("restart-btn").addEventListener("click", returnToDashboard);
nextBtn.addEventListener("click", loadNextQuestion);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateDashboardStats() {
    document.getElementById("stat-answered").textContent = totalAnswered;
    document.getElementById("stat-correct").textContent = totalCorrect;
    document.getElementById("stat-incorrect").textContent = totalIncorrect;
    
    let accuracy = totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);
    document.getElementById("stat-accuracy").textContent = accuracy + "%";

    if (wrongQuestions.length > 0) {
        retryBtn.classList.remove("hidden");
        retryBtn.textContent = `🚨 Retry Missed Questions (${wrongQuestions.length})`;
    } else {
        retryBtn.classList.add("hidden");
    }
}

function returnToDashboard() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
    updateDashboardStats();
}

function startQuiz(dataArray, mode) {
    currentQuizData = [...dataArray]; 
    shuffleArray(currentQuizData);    
    
    currentMode = mode;
    currentQuestionIndex = 0;
    currentScore = 0;
    
    dashboard.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = currentQuizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;

    if (currentQuestion.type === "mc") {
        optionsContainer.classList.remove("hidden");
        shuffleArray(currentQuestion.options);
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => selectAnswer(button, option, currentQuestion.answer, currentQuestion.explanation));
            optionsContainer.appendChild(button);
        });
    } else if (currentQuestion.type === "ident") {
        identContainer.classList.remove("hidden");
        submitIdentBtn.onclick = () => {
            selectAnswer(null, identInput.value.trim(), currentQuestion.answer, currentQuestion.explanation);
        };
    }
}

function selectAnswer(button, selected, correct, explanation) {
    const normalizedSelected = selected.trim().toLowerCase();
    
    const isCorrect = Array.isArray(correct) 
        ? correct.some(ans => normalizedSelected === ans.trim().toLowerCase())
        : normalizedSelected === correct.trim().toLowerCase();

    const displayAnswer = Array.isArray(correct) ? correct[0] : correct;
    const currentQuestion = currentQuizData[currentQuestionIndex];
    
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.disabled = true);
    identInput.disabled = true;
    submitIdentBtn.disabled = true;

    totalAnswered++;
    if (isCorrect) {
        totalCorrect++;
        currentScore++;
        if (button) button.classList.add("correct");
        
        explanationBox.className = "explanation-correct";
        explanationTitle.textContent = "CORRECT";
        explanationTitle.style.color = "#48bb78";

        wrongQuestions = wrongQuestions.filter(q => q.question !== currentQuestion.question);
    } else {
        totalIncorrect++;
        if (button) button.classList.add("incorrect");
        
        explanationBox.className = "explanation-incorrect";
        explanationTitle.textContent = "NOT QUITE";
        explanationTitle.style.color = "#f56565";

        if (!wrongQuestions.some(q => q.question === currentQuestion.question)) {
            wrongQuestions.push(currentQuestion);
        }
    }

    localStorage.setItem("profed11_answered", totalAnswered);
    localStorage.setItem("profed11_correct", totalCorrect);
    localStorage.setItem("profed11_incorrect", totalIncorrect);
    localStorage.setItem("profed11_wrong", JSON.stringify(wrongQuestions));

    explanationText.innerHTML = `<strong>Answer:</strong> ${displayAnswer}<br><br><strong>📚 More Info:</strong> ${explanation}`;
    
    explanationBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        document.getElementById("final-score").textContent = `You scored ${currentScore} out of ${currentQuizData.length}`;
    }
}

function resetState() {
    explanationBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = "";
    optionsContainer.classList.add("hidden");
    identContainer.classList.add("hidden");
    identInput.value = "";
    identInput.disabled = false;
    submitIdentBtn.disabled = false;
}

updateDashboardStats();