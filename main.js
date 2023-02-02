"use strict"					
					
class WritingSystem {					
	constructor(quantity, characters, alphabetEquivalents) {				
		this.quantity = quantity;			
		this.characters = characters;			
		this.alphabetEquivalents = alphabetEquivalents;			
	}				
}					
					
const alphabet = new WritingSystem(26, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);					
					
const japaneseKana = new WritingSystem(46, [{hiragana: [{"あ": alphabet.characters[0]}, {"い": alphabet.characters[8]}, {"う": alphabet.characters[20]}, {"え": alphabet.characters[4]}, {"お": alphabet.characters[14]}, {"か": [alphabet.characters[10], alphabet.characters[0]]}, "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", {"ち": [alphabet.characters[2]+alphabet.characters[7]+alphabet.characters[8]]}, "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"]}, {katakana: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"]}], ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha/wa", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"]);					
					
const japaneseKanji = new WritingSystem("", {kanji: {"一": Object.assign({}, japaneseKana.characters[0].hiragana[1], japaneseKana.characters[0].hiragana[16])}});					
					
console.log(japaneseKana.characters);					
					
console.log(alphabet.characters[0]);					
					
console.log(japaneseKanji);					
					
console.log(japaneseKanji.characters.kanji);					
					
console.log(Object.keys(japaneseKanji.characters.kanji.一).join(""));					
					
let generatedRandomLetters = [];					
					
function lettersMachine() {					
	generatedRandomLetters.push(alphabet.characters[parseInt(Math.random()*(26-0)+0)]);				
					
	//document.write(generatedRandomLetters[generatedRandomLetters.length-1], "<br>");				
	let letterBox = document.createElement('button'); "<br>";				
	document.querySelector(".alphabet").appendChild(letterBox);				
	letterBox.innerHTML = `${generatedRandomLetters[generatedRandomLetters.length-1]}`;				
	document.querySelector(".alphabet").innerHTML += "<br>";				
					
					
//	console.log(generatedRandomLetters);				
					
}					
let i = 0; let j = 0; let alphabetLetterInAKana = []; let alphabetLetterInRandomLettersList = [];					
function kanaMerge(){					
	for(i=0; i<generatedRandomLetters.length; i++){				
		for(j=0; j<generatedRandomLetters.length; j++){			
			for (let info in japaneseKana.characters[0])  {		
//				let alphabetLetterInAKana = [];	
//				let alphabetLetterInRandomLettersList = [];	
				alphabetLetterInAKana.push(Object.values(japaneseKana.characters[0].hiragana[i]).toString());	
				alphabetLetterInRandomLettersList.push(generatedRandomLetters[i]);	
//				console.log(alphabetLetterInAKana); console.log(alphabetLetterInRandomLettersList);

//console.log(Object.values(japaneseKana.characters[0].hiragana[5])[0].includes("k"));					
				//console.log(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[i])[0][0]));
				console.log(Object.values(japaneseKana.characters[0].hiragana[i])[0]);

//				if(alphabetLetterInAKana.hasOwnProperty(generatedRandomLetters)) {console.log("ok")} else { console.log("xx")}	
					
					
//			if(japaneseKana.characters[0].hiragana[i].hasOwnProperty(generatedRandomLetters[i])) {console.log("ok")} else { console.log("xx")}		
					
					
			}		
		}			
	}				
}					
					
//setInterval(function() { if(japaneseKana.characters[0].hiragana[i].hasOwnProperty(generatedRandomLetters[i])){console.log("ok")} else {"xx"} }, 1000)					
					
					
setInterval(lettersMachine, 1000);					
					
setInterval(kanaMerge, 1000);					
					
					
					
