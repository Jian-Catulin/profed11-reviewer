// ==========================================
// 1. MULTIPLE CHOICE BANK (50 Items)
// ==========================================
const mcData = [
    // Historical Foundation
    { question: "During the Pre-Spanish Period, how did Filipinos primarily learn?", options: ["Informal and community-based learning", "Through formal structured classrooms", "Through government universities", "By studying Spanish literature"], answer: "Informal and community-based learning", explanation: "Education was informal, oral, practical, and focused on survival skills and cultural values[cite: 8]." },
    { question: "What native script did Filipinos use for reading and writing during the Pre-Spanish Period?", options: ["Baybayin", "Cyrillic", "Nihongo", "Latin"], answer: "Baybayin", explanation: "Filipinos learned reading and writing using native scripts like Baybayin[cite: 8]." },
    { question: "Which of the following was the sole official teaching language during the American Period?", options: ["English", "Spanish", "Tagalog", "Nihongo"], answer: "English", explanation: "The American Period transitioned from Spanish-centric to English as the sole official teaching language[cite: 9]." },
    { question: "Who were the first English instructors during the American Period before the Thomasites arrived?", options: ["U.S. Soldiers", "Spanish Friars", "Filipino Illustrados", "Japanese Generals"], answer: "U.S. Soldiers", explanation: "Army Teachers (U.S. soldiers) served as the first English instructors in 1898[cite: 9]." },
    { question: "What were the three core aims of the American curriculum in the Philippines?", options: ["Protection, Pacification, Democracy", "Religion, Culture, Spanish Language", "Discipline, Manual Labor, Nihongo", "Survival, Hunting, Gathering"], answer: "Protection, Pacification, Democracy", explanation: "The curriculum aimed for Protection, Pacification, and Democracy[cite: 9]." },
    { question: "Under Military Order No. 2 during the Japanese Occupation, what was the main goal of the curriculum?", options: ["Erase Western influence and promote Japanese ideology", "Promote American democracy", "Institutionalize the Spanish language", "Establish the K-12 system"], answer: "Erase Western influence and promote Japanese ideology", explanation: "The curriculum was completely reorganized to erase Western influence[cite: 10]." },
    { question: "What language was mandated to be taught during the Japanese Occupation?", options: ["Nihongo", "English", "Spanish", "Baybayin"], answer: "Nihongo", explanation: "Authorities banned English and required teaching Nihongo and Japanese culture[cite: 10]." },
    { question: "What concept did Japanese textbooks promote to portray Japan as Asia's leader?", options: ["Greater East Asia Co-Prosperity Sphere", "Manifest Destiny", "New Society", "Bilingual Education"], answer: "Greater East Asia Co-Prosperity Sphere", explanation: "Textbooks were revised to promote this idea[cite: 10]." },
    { question: "Which president launched the 'New Society' (Ang Bagong Lipunan) curriculum?", options: ["Ferdinand Marcos Sr.", "Corazon Aquino", "Manuel Quezon", "Jose P. Laurel"], answer: "Ferdinand Marcos Sr.", explanation: "The New Society was launched under Martial Law via Proclamation No. 1081 in 1972[cite: 11]." },
    { question: "Under the Bilingual Education Policy (1974), which subjects were taught in Pilipino?", options: ["Social sciences and values", "Science and Mathematics", "Technology and English", "Military Training"], answer: "Social sciences and values", explanation: "Pilipino was the medium for social sciences, values, and local subjects[cite: 11]." },
    { question: "What was the purpose of the National College Entrance Examination (NCEE) during the New Society?", options: ["To control access to 4-year degree programs", "To mandate military training", "To test Japanese fluency", "To eliminate social inequity"], answer: "To control access to 4-year degree programs", explanation: "NCEE was a nationwide streaming test to control college admissions[cite: 11]." },
    { question: "Republic Act No. 10533 is the legal basis for which curriculum?", options: ["K to 12 Basic Education Curriculum", "New Society Curriculum", "Bilingual Education Policy", "Education Act of 1982"], answer: "K to 12 Basic Education Curriculum", explanation: "RA 10533 (2013) expanded basic education from 10 to 13 years[cite: 12]." },
    { question: "What is the primary goal of the revised MATATAG Curriculum?", options: ["To reduce too many lessons and focus on essential learning", "To add more years to high school", "To mandate military training", "To teach exclusively in English"], answer: "To reduce too many lessons and focus on essential learning", explanation: "MATATAG focuses on what students need to learn most[cite: 12]." },
    
    // Philosophical Foundation
    { question: "Which philosophy emphasizes timeless knowledge, universal truths, and great classic works?", options: ["Perennialism", "Progressivism", "Reconstructionism", "Behaviorism"], answer: "Perennialism", explanation: "Perennialism (from the Latin 'perennis') focuses on enduring ideas[cite: 14]." },
    { question: "Who are the key proponents of Perennialism?", options: ["Robert M. Hutchins & Mortimer Adler", "William C. Bagley & E. D. Hirsch Jr.", "John Dewey", "Theodore Brameld"], answer: "Robert M. Hutchins & Mortimer Adler", explanation: "Hutchins and Adler are the main figures of Perennialism[cite: 14]." },
    { question: "What teaching method is highly associated with Perennialism?", options: ["Socratic Method", "Project-Based Learning", "Token Economy", "Discovery Learning"], answer: "Socratic Method", explanation: "It uses questioning, discussion, and logical reasoning[cite: 14]." },
    { question: "Which philosophy advocates for a 'Back-to-Basics' approach to education?", options: ["Essentialism", "Reconstructionism", "Humanism", "Progressivism"], answer: "Essentialism", explanation: "Essentialism emphasizes teaching core knowledge and fundamental subjects[cite: 14]." },
    { question: "William C. Bagley and E. D. Hirsch Jr. are associated with which educational philosophy?", options: ["Essentialism", "Perennialism", "Constructivism", "Behaviorism"], answer: "Essentialism", explanation: "They are the key proponents of Essentialism[cite: 14]." },
    { question: "Which educational philosophy is associated with John Dewey?", options: ["Progressivism", "Perennialism", "Essentialism", "Cognitivism"], answer: "Progressivism", explanation: "Dewey believed students learn best through experience and active participation[cite: 20]." },
    { question: "A student organizing a community clean-up to solve a littering problem is an example of:", options: ["Progressivism", "Essentialism", "Perennialism", "Classical Conditioning"], answer: "Progressivism", explanation: "Progressivism focuses on learning by doing and connecting lessons to real life[cite: 20, 21]." },
    { question: "Which philosophy believes the purpose of education is to reconstruct society and eliminate social inequities?", options: ["Reconstructionism", "Progressivism", "Essentialism", "Humanism"], answer: "Reconstructionism", explanation: "Theodore Brameld argued education should solve cultural crises and create worldwide democracy[cite: 22]." },
    { question: "Students testing local water quality to present clean-water proposals to city officials exemplifies:", options: ["Reconstructionism", "Essentialism", "Perennialism", "Behaviorism"], answer: "Reconstructionism", explanation: "This shows active participation in social reform and addressing real-world issues[cite: 22]." },

    // Psychological Foundation (Behaviorism & Cognitivism)
    { question: "Ivan Pavlov is known for which behavioral theory?", options: ["Classical Conditioning", "Operant Conditioning", "Law of Effect", "Social Learning Theory"], answer: "Classical Conditioning", explanation: "Pavlov studied learning through association between stimuli[cite: 26]." },
    { question: "B.F. Skinner believed behavior is influenced by:", options: ["Reinforcement and punishment", "Sudden insight", "Universal truths", "Prior knowledge"], answer: "Reinforcement and punishment", explanation: "Skinner developed Operant Conditioning[cite: 26]." },
    { question: "Edward Thorndike proposed that behaviors followed by satisfying consequences are likely to be repeated. What is this called?", options: ["Law of Effect", "Law of Readiness", "Law of Exercise", "Law of Association"], answer: "Law of Effect", explanation: "This is a key component of Thorndike's theory[cite: 26, 27]." },
    { question: "Albert Bandura's Social Learning Theory states that people learn by:", options: ["Observing and imitating others", "Receiving digital tokens", "Sudden 'Aha!' moments", "Reading classic literature"], answer: "Observing and imitating others", explanation: "Bandura emphasizes attention, retention, reproduction, and motivation[cite: 26, 27]." },
    { question: "A teacher giving stars or digital tokens to students who complete lab exercises early is using:", options: ["Operant Conditioning (Positive Reinforcement)", "Classical Conditioning", "Insight Learning", "Constructivism"], answer: "Operant Conditioning (Positive Reinforcement)", explanation: "This is a Token Economy, a classic Skinner application[cite: 27]." },
    { question: "Which cognitivist is associated with 'Insight Learning' or the sudden 'Aha!' moment?", options: ["Wolfgang Kohler", "Max Wertheimer", "George Miller", "Endel Tulving"], answer: "Wolfgang Kohler", explanation: "Kohler studied learning through sudden understanding[cite: 30]." },
    { question: "George Miller's contribution to cognitivism involves organizing information into smaller meaningful groups. This is called:", options: ["Chunking", "Scaffolding", "Classical Conditioning", "Essentialism"], answer: "Chunking", explanation: "Miller is famous for his Information-Processing and Chunking theory[cite: 30]." },
    { question: "David Ausubel's Meaningful Learning Theory states that new knowledge becomes meaningful when:", options: ["It is connected to prior knowledge", "It is reinforced with candy", "It is learned through trial and error", "It is repeated 10 times"], answer: "It is connected to prior knowledge", explanation: "Ausubel emphasized the use of advance organizers to activate prior knowledge[cite: 30, 31]." },
    { question: "Endel Tulving is known for his framework on:", options: ["Episodic-Semantic Memory", "Gestalt Theory", "Levels of Processing", "Radical Constructivism"], answer: "Episodic-Semantic Memory", explanation: "Tulving explained different forms of memory, including personal experiences[cite: 30]." },
    { question: "Max Wertheimer is associated with Gestalt Theory, which means learning by:", options: ["Seeing the whole pattern and relationships", "Chunking information", "Observing peers", "Using a token economy"], answer: "Seeing the whole pattern and relationships", explanation: "Gestalt focuses on productive thinking and whole patterns[cite: 30]." },

    // Psychological Foundation (Humanism & Constructivism)
    { question: "The word humanism comes from the Latin root 'humanus', which means:", options: ["Human, cultured, or kind", "Everlasting or perpetual", "Essence or being", "To build or construct"], answer: "Human, cultured, or kind", explanation: "This is the etymological root of Humanism[cite: 33]." },
    { question: "According to Maslow, which of the following represents the highest level of human need?", options: ["Self-actualization", "Physiological needs", "Esteem", "Safety needs"], answer: "Self-actualization", explanation: "Self-actualization sits at the top of Maslow's hierarchy[cite: 34]." },
    { question: "A student is isolated, so the teacher pairs them with a supportive peer. Which of Maslow's needs is the teacher addressing?", options: ["Love and belongingness", "Safety needs", "Physiological needs", "Self-actualization"], answer: "Love and belongingness", explanation: "This addresses the emotional need for connection and friendship[cite: 34]." },
    { question: "Carl Rogers developed a Humanistic theory focusing on acceptance, empathy, and open communication known as:", options: ["Person-Centered Theory", "Perceptual Field Theory", "Social Learning Theory", "Operant Conditioning"], answer: "Person-Centered Theory", explanation: "Rogers emphasized student-centered learning and empathy[cite: 35]." },
    { question: "Arthur Wright Combs proposed the Theory of the Perceptual Field, which states that people act based on:", options: ["How they perceive their situation", "External standardized metrics", "Biological instincts", "Historical precedents"], answer: "How they perceive their situation", explanation: "Combs believed subjective reality determines how one feels and acts[cite: 36]." },
    { question: "According to Constructivism, students learn best from:", options: ["Their experiences and active building of understanding", "Listening passively to lectures", "Memorizing classical texts", "Strict physical discipline"], answer: "Their experiences and active building of understanding", explanation: "Constructivism highlights that prior knowledge serves as a foundation for building understanding[cite: 39]." },
    { question: "Jerome Bruner advocated for an educational approach where students are encouraged to explore and solve problems, known as:", options: ["Discovery Learning", "Insight Learning", "Rote Memorization", "Radical Constructivism"], answer: "Discovery Learning", explanation: "Bruner believed education should focus on discovery[cite: 40]." },
    { question: "Jean Piaget believed education should focus on:", options: ["Stage-appropriate, hands-on learning", "Military discipline", "Token economies", "Standardized testing"], answer: "Stage-appropriate, hands-on learning", explanation: "Piaget emphasized that students actively construct knowledge by exploring their environment[cite: 40]." },
    { question: "Lev Vygotsky believed learning is a social process driven by interaction with a:", options: ["More Knowledgeable Other (MKO)", "Phenomenal Field", "Universal Truth", "Primary Dimension"], answer: "More Knowledgeable Other (MKO)", explanation: "Vygotsky emphasized MKOs and scaffolding within the ZPD[cite: 41]." },
    { question: "Ernst von Glasersfeld formulated an epistemological theory stating knowledge is actively built by the individual rather than passively received. This is:", options: ["Radical Constructivism", "Social Constructivism", "Gestalt Theory", "Essentialism"], answer: "Radical Constructivism", explanation: "Von Glasersfeld is the primary theorist of Radical Constructivism[cite: 41]." },

    // Sociological Foundation
    { question: "The Sociological Foundation of Curriculum considers the relationship between:", options: ["Schools and society", "The brain and memory", "Biology and physics", "Classical literature and history"], answer: "Schools and society", explanation: "It recognizes that social issues and culture influence what students learn[cite: 44]." },
    { question: "Which sociologist famously said, 'Education is not preparation for life; education is life itself'?", options: ["John Dewey", "Alvin Toffler", "Theodore Brameld", "Arthur Wright Combs"], answer: "John Dewey", explanation: "Dewey emphasized learning through real-life experiences[cite: 46]." },
    { question: "Alvin Toffler predicted alternative forms of education and stated that the illiterate of the 21st century will be those who cannot:", options: ["Learn, unlearn, and relearn", "Read and write", "Code in HTML", "Speak English"], answer: "Learn, unlearn, and relearn", explanation: "Toffler focused on future-oriented, technology-driven education[cite: 46]." },
    { question: "In an ICT class, students building websites for local sari-sari stores to solve a community need is an application of:", options: ["Sociological Foundation", "Perennialism", "Operant Conditioning", "Gestalt Theory"], answer: "Sociological Foundation", explanation: "This project addresses social relevance, digital inclusion, and community interaction[cite: 47]." },
    { question: "Under the American Period's 3-Tier System, how many years were dedicated to the elementary level?", options: ["7 years (4 Primary + 3 Intermediate)", "6 years", "4 years", "10 years"], answer: "7 years (4 Primary + 3 Intermediate)", explanation: "The elementary tier was 4 primary years and 3 intermediate years[cite: 9]." },
    { question: "During the New Society, the Youth Civic Action Program (YCAP) required students to:", options: ["Participate in public work projects as a graduation requirement", "Learn Japanese", "Memorize classic literature", "Take a college entrance exam"], answer: "Participate in public work projects as a graduation requirement", explanation: "YCAP was a mandatory civic duty program under Marcos Sr.[cite: 11]." },
    { question: "Which psychological framework describes learning information processing as 'depth of processing'?", options: ["Fergus Craik's Levels of Processing", "Miller's Chunking", "Tulving's Episodic Memory", "Ausubel's Prior Knowledge"], answer: "Fergus Craik's Levels of Processing", explanation: "Craik theorized that information processed more deeply is remembered better[cite: 30]." }
];

// ==========================================
// 2. IDENTIFICATION BANK (30 Items)
// ==========================================
const identData = [
    { question: "The native script used by Filipinos before the arrival of the Spaniards.", answer: ["Baybayin"], explanation: "Baybayin was the primary script used during the Pre-Spanish period[cite: 8]." },
    { question: "The group of 600 American educators who arrived in the Philippines in August 1901.", answer: ["Thomasites"], explanation: "They arrived on the U.S.A.T. Thomas to serve as public school teachers[cite: 9]." },
    { question: "The language mandated to be taught in schools during the Japanese Occupation.", answer: ["Nihongo", "Japanese"], explanation: "The Japanese banned English and required Nihongo[cite: 10]." },
    { question: "The specific policy in 1974 that mandated Pilipino for social sciences and English for Science and Math.", answer: ["Bilingual Education Policy"], explanation: "This policy separated languages by subject during the New Society[cite: 11]." },
    { question: "The nationwide test instituted during the New Society to control access to 4-year degree programs.", answer: ["NCEE", "National College Entrance Examination"], explanation: "The NCEE controlled college admissions based on aptitude[cite: 11]." },
    { question: "Republic Act No. 10533 established this modern Philippine curriculum.", answer: ["K to 12", "K-12", "K to 12 Basic Education Curriculum"], explanation: "RA 10533 expanded basic education to 13 years[cite: 12]." },
    { question: "The Latin word meaning 'everlasting' or 'perpetual', forming the root of a major educational philosophy.", answer: ["Perennis"], explanation: "It is the root word for Perennialism[cite: 14]." },
    { question: "The philosophy championed by Bagley and Hirsch focusing on core knowledge and back-to-basics.", answer: ["Essentialism"], explanation: "Essentialism comes from the Latin 'essentia'[cite: 14]." },
    { question: "The progressive philosopher who believed that 'Education is not preparation for life; education is life itself.'", answer: ["John Dewey", "Dewey"], explanation: "Dewey is the father of Progressivism and a key sociological theorist[cite: 20, 46]." },
    { question: "The philosophy championed by Theodore Brameld that aims to eliminate social inequities and reconstruct society.", answer: ["Reconstructionism"], explanation: "Reconstructionism focuses on social reform and real-world action[cite: 22]." },
    { question: "The behaviorist who discovered Classical Conditioning using dogs.", answer: ["Ivan Pavlov", "Pavlov"], explanation: "Pavlov studied learning through association between stimuli[cite: 26]." },
    { question: "The behaviorist who coined 'Operant Conditioning'.", answer: ["B.F. Skinner", "Skinner"], explanation: "Skinner proved behavior is influenced by reinforcement and punishment[cite: 26]." },
    { question: "Edward Thorndike's law stating behaviors followed by satisfying consequences are likely to be repeated.", answer: ["Law of Effect"], explanation: "This is a core component of Thorndike's connectionism[cite: 26]." },
    { question: "Albert Bandura's theory stating people learn by observing and imitating others.", answer: ["Social Learning Theory"], explanation: "Bandura focused on attention, retention, reproduction, and motivation[cite: 26]." },
    { question: "The cognitivist associated with Gestalt Theory and 'Productive Thinking' (seeing the whole pattern).", answer: ["Max Wertheimer", "Wertheimer"], explanation: "Wertheimer believed learning occurs by understanding the whole[cite: 30]." },
    { question: "The cognitivist who studied 'Insight Learning' or the sudden 'Aha!' moment.", answer: ["Wolfgang Kohler", "Kohler"], explanation: "Kohler observed sudden understanding in problem-solving[cite: 30]." },
    { question: "George Miller's concept of organizing information into smaller meaningful groups.", answer: ["Chunking"], explanation: "Chunking is key to Information-Processing theory[cite: 30]." },
    { question: "Endel Tulving's framework explaining different forms of memory, including personal experiences.", answer: ["Episodic-Semantic Memory", "Episodic-Semantic Memory Framework"], explanation: "Tulving differentiated how we store facts versus events[cite: 30]." },
    { question: "David Ausubel's theory stating new knowledge becomes meaningful when connected to prior knowledge.", answer: ["Meaningful Learning Theory", "Meaningful Learning"], explanation: "Ausubel advocated for advance organizers[cite: 30]." },
    { question: "The psychologist who created the Hierarchy of Needs, with Self-Actualization at the top.", answer: ["Abraham Maslow", "Maslow"], explanation: "Maslow's hierarchy is a cornerstone of Humanistic psychology[cite: 34]." },
    { question: "Carl Rogers' humanistic theory emphasizing empathy, respect, and student-centered learning.", answer: ["Person-Centered Theory"], explanation: "Rogers focused on the teacher as a facilitator[cite: 35]." },
    { question: "Arthur Wright Combs' theory stating people act based on their subjective reality of a situation.", answer: ["Theory of the Perceptual Field", "Perceptual Field Theory", "Phenomenological Psychology"], explanation: "Combs believed perception dictates action[cite: 36]." },
    { question: "The overarching psychological theory highlighting that students actively build understanding from experiences.", answer: ["Constructivism"], explanation: "Constructivists believe knowledge is constructed, not just received[cite: 39]." },
    { question: "Jerome Bruner's constructivist approach where students explore and solve problems independently.", answer: ["Discovery Learning"], explanation: "Bruner favored active problem-solving[cite: 40]." },
    { question: "The constructivist who believed in stage-appropriate, hands-on learning through exploring the environment.", answer: ["Jean Piaget", "Piaget"], explanation: "Piaget mapped cognitive developmental stages[cite: 40]." },
    { question: "Lev Vygotsky's acronym for the gap between what a student can do alone and what they can do with help.", answer: ["ZPD", "Zone of Proximal Development"], explanation: "The ZPD is where scaffolding occurs[cite: 41]." },
    { question: "Lev Vygotsky's term for a peer or teacher who guides a learner through the ZPD.", answer: ["MKO", "More Knowledgeable Other"], explanation: "The MKO provides the necessary scaffolding[cite: 41]." },
    { question: "Ernst von Glasersfeld's theory stating knowledge is exclusively built by the individual.", answer: ["Radical Constructivism"], explanation: "This is a highly individualized branch of constructivism[cite: 41]." },
    { question: "The sociologist who predicted that 21st-century illiterates are those who cannot 'learn, unlearn, and relearn'.", answer: ["Alvin Toffler", "Toffler"], explanation: "Toffler focused on rapid societal and technological change[cite: 46]." },
    { question: "The curriculum reform resulting in RA 10533, adding Kindergarten and Grades 11-12.", answer: ["K to 12", "K-12", "K to 12 Basic Education"], explanation: "This modernized the Philippine educational structure[cite: 12]." }
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
        // Clear only ProfEd 11 data
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

// Listeners (Removed True/False Button Listener since it is not requested)
document.getElementById("mode-mc-btn").addEventListener("click", () => startQuiz(mcData, "mc"));
// If your HTML still has the True/False button, you can safely ignore it or hide it in HTML.
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

    // Show or Hide Retry Button based on missed questions
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

        // Remove from wrong list if they got it right
        wrongQuestions = wrongQuestions.filter(q => q.question !== currentQuestion.question);
    } else {
        totalIncorrect++;
        if (button) button.classList.add("incorrect");
        
        explanationBox.className = "explanation-incorrect";
        explanationTitle.textContent = "NOT QUITE";
        explanationTitle.style.color = "#f56565";

        // Add to wrong list if it's not already there
        if (!wrongQuestions.some(q => q.question === currentQuestion.question)) {
            wrongQuestions.push(currentQuestion);
        }
    }

    // Save to Local Storage immediately
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

// Initialize Dashboard Stats on Page Load
updateDashboardStats();