export function getRandomQuestion() {
	const indexArr = [];
	const mainQuestions = [];

	while (indexArr.length !== 10) {
		const rand = Math.floor(Math.random() * arrayOfQuestions.length);
		if (indexArr.includes(rand)) continue;

		indexArr.push(rand);
		mainQuestions.push(arrayOfQuestions[rand]);
	}
	console.log(mainQuestions, indexArr);

	return mainQuestions;
}

const arrayOfQuestions = [



	{
		question: `Which type of JavaScript language is ___.`,
		answer: "Object-Based",
		choices: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],

	},
	{
		question: `Which one of the following also known as Conditional Expression:`,
		answer: "immediate if",
		choices: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
	},
	{
		question: "In JavaScript, what is a block of statement?",
		answer: "block that combines a number of statements into a single compound statement",
		choices: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
	},
	{
		question: "What is the brain of the computer.",
		answer: "CPU",
		choices: ["Motherboard", "RAM", "ROM", "CPU"],
	},
	
	{
		question: "__________ is use for making web pages interactive.",
		answer: "JavaScript",
		choices: ["HTML", "CSS", "XML", "JavaScript"],
	},
	{
		question: "The function and var are known as:",
		answer: "Declaration statements",
		choices: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
	},
	{
		question: "Which of the following type of a variable is volatile?",
		answer: "Mutable variable",
		choices: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
	},
	{
		question: "ML in computer science is stand for _______________.",
		answer: "Machine Learning",
		choices: ["Machine Learning", "Machine Laughing", "Monster Learning", "Mobile Legends"],
	},
	{
		question: "Virus, Worm, Trojan, and SpyWare are example of malware.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "Python Java and C++ examples of a programming languages.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "First programmer in the world is a woman.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "The first original name of java is OAK.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "White hat hacker also called as good hacker.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "Markup language that use for describing the structure of Web pages.",
		answer: "HTML",
		choices: ["HTML", "CSS", "JavaScript", "XML"],
	},
	{
		question: "Device that supplies electric power for computer.",
		answer: "Power supply",
		choices: ["Power supply", "Mother board", "RAM", "CPU"],
	},
	{
		question: "The father of computer.",
		answer: "Charles Babbage",
		choices: ["Charles Babbage", "Albert Einstein", "Bill Gates", "Charles Darwin"],
	},
	{
		question: "Who is the richest man in end of 2021.",
		answer: "Elon Musk",
		choices: ["Elon Musk", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg"],
	},
	{
		question: "____ is short for information and communications technology.",
		answer: "ICT",
		choices: ["ICT", "CIA", "CCT", "TCI"],
	},
	
	{
		question: "Java is invented by __________.",
		answer: "James Gosling",
		choices: ["James Gosling", "Elon Musk", "Guido van Rossum", "James Bond"],
	},
	{
		question: "What is the heart of the computer?",
		answer: "Power Supply",
		choices: ["Power Supply", "GPU", "CPU", "Motherboard"],
	},
	{
		question: "Who is the CEO of facebook?",
		answer: "Mark Zuckerberg",
		choices: ["Mark Zuckerberg", "Bill Gates", "Tim Cook", "Warren Buffet"],
	},
	{
		question: "What kind of language is HTML?",
		answer: "Markup language",
		choices: [
			"Markup language",
			"Programming language",
			"Scripting language",
			"Structured query language",
		],
	},
];
