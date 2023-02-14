"use strict"											
											
class WritingSystem {											
	constructor(quantity, characters, alphabetEquivalents) {										
		this.quantity = quantity;									
		this.characters = characters;									
		this.alphabetEquivalents = alphabetEquivalents;									
	}										
}											
											
const alphabet = new WritingSystem(26, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);											
											
const japaneseKana = new WritingSystem(46, [{hiragana: [{"あ": alphabet.characters[0]}, {"い": alphabet.characters[8]}, {"う": alphabet.characters[20]}, {"え": alphabet.characters[4]}, {"お": alphabet.characters[14]}, {"か": [alphabet.characters[10], alphabet.characters[0]]}, {"き": [alphabet.characters[10], alphabet.characters[8]]}, {"く": [alphabet.characters[10], alphabet.characters[20]]}, {"け": [alphabet.characters[10], alphabet.characters[4]]}, {"こ": [alphabet.characters[10], alphabet.characters[14]]}, {"さ": [alphabet.characters[18], alphabet.characters[0]]}, {"し": [alphabet.characters[18], alphabet.characters[8]]}, {"す": [alphabet.characters[18], alphabet.characters[20]]}, {"せ": [alphabet.characters[18], alphabet.characters[4]]}, {"そ": [alphabet.characters[18], alphabet.characters[14]]}, {"た": [alphabet.characters[19], alphabet.characters[0]]}, {"ち": [alphabet.characters[2], alphabet.characters[7], alphabet.characters[8]]}, {"つ": [alphabet.characters[19], alphabet.characters[20]]}, {"て": [alphabet.characters[19], alphabet.characters[4]]}, {"と": [alphabet.characters[19], alphabet.characters[14]]}, {"な": [alphabet.characters[13], alphabet.characters[0]]}, {"に": [alphabet.characters[13], alphabet.characters[8]]}, {"ぬ": [alphabet.characters[13], alphabet.characters[20]]}, {"ね": [alphabet.characters[13], alphabet.characters[4]]}, {"の": [alphabet.characters[13], alphabet.characters[14]]}, {"は": [alphabet.characters[7], alphabet.characters[0]]}, {"ひ": [alphabet.characters[7], alphabet.characters[8]]}, {"ふ": [alphabet.characters[7], alphabet.characters[20]]}, {"へ": [alphabet.characters[7], alphabet.characters[4]]}, {"ほ": [alphabet.characters[7], alphabet.characters[14]]}, {"ま": [alphabet.characters[12], alphabet.characters[0]]}, {"み": [alphabet.characters[12], alphabet.characters[8]]}, {"む": [alphabet.characters[12], alphabet.characters[20]]}, {"め": [alphabet.characters[12], alphabet.characters[4]]}, {"も": [alphabet.characters[12], alphabet.characters[14]]}, {"や": [alphabet.characters[24], alphabet.characters[0]]}, {"ゆ": [alphabet.characters[24], alphabet.characters[20]]}, {"よ": [alphabet.characters[24], alphabet.characters[14]]}, {"ら": [alphabet.characters[17], alphabet.characters[0]]}, {"り": [alphabet.characters[17], alphabet.characters[8]]}, {"る": [alphabet.characters[17], alphabet.characters[20]]}, {"れ": [alphabet.characters[17], alphabet.characters[4]]}, {"ろ": [alphabet.characters[17], alphabet.characters[14]]}, {"わ": [alphabet.characters[22], alphabet.characters[0]]}, {"を": [alphabet.characters[22], alphabet.characters[14]]}, {"ん": [alphabet.characters[13]]}]}, {katakana: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"]}], ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha/wa", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"]);											
											
const japaneseKanji = new WritingSystem("", {kanji: {"一": Object.assign({}, japaneseKana.characters[0].hiragana[1], japaneseKana.characters[0].hiragana[16])}});											
											
console.log(japaneseKana.characters);											
											
console.log(alphabet.characters[0]);											
											
console.log(japaneseKanji);											
											
console.log(japaneseKanji.characters.kanji);											
											
console.log(Object.keys(japaneseKanji.characters.kanji.一).join(""));											
											
let generatedRandomLetters = [];											
let mergedKanas = [];											
let mergedKanji = [];											
											
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
////		for (let info in japaneseKana.characters[0])  {									
//				let alphabetLetterInAKana = [];							
//				let alphabetLetterInRandomLettersList = [];							
//				alphabetLetterInAKana.push(Object.values(japaneseKana.characters[0].hiragana[i]).toString());							
//				alphabetLetterInRandomLettersList.push(generatedRandomLetters[i]);							
//				console.log(alphabetLetterInAKana); console.log(alphabetLetterInRandomLettersList);							
											
											
				labelOfLoopAccessingAllKanasForTheLoopAccessingKanaLetters: for(let l=0; l< japaneseKana.characters[0].hiragana.length - 1; l++){							
//					labelOfLoopAcessingOnlyTheLettersOfEachKana: for(let k = 0; k<Object.values(japaneseKana.characters[0].hiragana[i])[0].length; k++){						
//						console.log(Object.values(japaneseKana.characters[0].hiragana[i])); console.log(i);					
//						alphabetLetterInAKana.push(Object.values(japaneseKana.characters[0].hiragana[l])[0][k]);					
//						console.log(alphabetLetterInAKana)					
						//console.log(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]));	console.log(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]);				
											
						if(Object.values(japaneseKana.characters[0].hiragana[l])[0].length === 2){					
							if(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]) && generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][1])){				
								mergedKanas.push(Object.keys(japaneseKana.characters[0].hiragana[l]).toString());			
								let kanaBox = document.createElement('button'); "<br>";			
								document.querySelector('.kana').appendChild(kanaBox);			
								kanaBox.innerHTML = `${mergedKanas[mergedKanas.length-1]}`;			
								document.querySelector(".kana").innerHTML += "<br>";			
								generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]), 1);			
								generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][1]), 1); console.log(generatedRandomLetters);			
											
											
								break labelOfLoopAccessingAllKanasForTheLoopAccessingKanaLetters;			
							}				
						}					
						if(Object.values(japaneseKana.characters[0].hiragana[l])[0].length === 3){					
							if(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]) && generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][1]) && generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][2])){				
								mergedKanas.push(Object.keys(japaneseKana.characters[0].hiragana[l]).toString());			
								let kanaBox = document.createElement('button'); "<br>";			
								document.querySelector('.kana').appendChild(kanaBox);			
								kanaBox.innerHTML = `${mergedKanas[mergedKanas.length-1]}`;			
								document.querySelector(".kana").innerHTML += "<br>";			
								break labelOfLoopAccessingAllKanasForTheLoopAccessingKanaLetters;			
						}					
											
											
						}					
											
						const uniqueLettersFromRandomGeneratedList = [];					
						const vowelsAndN = [alphabet.characters[0], alphabet.characters[4], alphabet.characters[8], alphabet.characters[14], alphabet.characters[20], alphabet.characters[13]];					
						generatedRandomLetters.forEach(function(parameter){					
							if(!uniqueLettersFromRandomGeneratedList.includes(parameter) && vowelsAndN.includes(parameter)){				
								uniqueLettersFromRandomGeneratedList.push(parameter);			
							} else if (uniqueLettersFromRandomGeneratedList.includes(parameter) && vowelsAndN.includes(parameter)){				
								generatedRandomLetters.splice(parameter, 1);			
								japaneseKana.characters[0].hiragana.forEach(function(lastParameter, index) {			
									if(Object.values(japaneseKana.characters[0].hiragana[index])[0][0].includes(parameter)){		
										console.log(Object.values(japaneseKana.characters[0].hiragana[index])[0]);	
										mergedKanas.push(Object.keys(japaneseKana.characters[0].hiragana[index])[0]); console.log(mergedKanas);	
										let kanaBox = document.createElement('button'); "<br>";	
										document.querySelector('.kana').appendChild(kanaBox);	
										kanaBox.innerHTML = `${mergedKanas[mergedKanas.length-1]}`;	
										document.querySelector(".kana").innerHTML += "<br>";	
											
									}		
											
											
								})			
											
							}				
											
											
						})					
						console.log(uniqueLettersFromRandomGeneratedList);					
											
											
//						break labelOfLoopAccessingAllKanasForTheLoopAccessingKanaLetters;					
											
//						console.log(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][k]));					
//						if(){}					
											
											
//					}	//break;					
				}							
//			}								
											
//		console.log(Object.values(japaneseKana.characters[0].hiragana[i])[0][0]);									
											
											
											
											
											
											
		}									
	}										
}											
											
//setInterval(function() { if(japaneseKana.characters[0].hiragana[i].hasOwnProperty(generatedRandomLetters[i])){console.log("ok")} else {"xx"} }, 1000)											
											
											
setInterval(lettersMachine, 1000);											
											
setInterval(kanaMerge, 2000);											
											
											
