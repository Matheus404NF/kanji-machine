"use strict" 																							
																							
class WritingSystem {																							
	constructor(quantity, characters, alphabetEquivalents) {																						
		this.quantity = quantity;																					
		this.characters = characters;																					
		this.alphabetEquivalents = alphabetEquivalents;																					
	}																						
}																							
																							
const alphabet = new WritingSystem(26, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);																							
																							
const japaneseKana = new WritingSystem(46, [{hiragana: [{"あ": [alphabet.characters[0]]}, {"い": [alphabet.characters[8]]}, {"う": [alphabet.characters[20]]}, {"え": [alphabet.characters[4]]}, {"お": [alphabet.characters[14]]}, {"か": [alphabet.characters[10], alphabet.characters[0]]}, {"き": [alphabet.characters[10], alphabet.characters[8]]}, {"く": [alphabet.characters[10], alphabet.characters[20]]}, {"け": [alphabet.characters[10], alphabet.characters[4]]}, {"こ": [alphabet.characters[10], alphabet.characters[14]]}, {"さ": [alphabet.characters[18], alphabet.characters[0]]}, {"し": [alphabet.characters[18], alphabet.characters[8]]}, {"す": [alphabet.characters[18], alphabet.characters[20]]}, {"せ": [alphabet.characters[18], alphabet.characters[4]]}, {"そ": [alphabet.characters[18], alphabet.characters[14]]}, {"た": [alphabet.characters[19], alphabet.characters[0]]}, {"ち": [alphabet.characters[2], alphabet.characters[7], alphabet.characters[8]]}, {"つ": [alphabet.characters[19], alphabet.characters[20]]}, {"て": [alphabet.characters[19], alphabet.characters[4]]}, {"と": [alphabet.characters[19], alphabet.characters[14]]}, {"な": [alphabet.characters[13], alphabet.characters[0]]}, {"に": [alphabet.characters[13], alphabet.characters[8]]}, {"ぬ": [alphabet.characters[13], alphabet.characters[20]]}, {"ね": [alphabet.characters[13], alphabet.characters[4]]}, {"の": [alphabet.characters[13], alphabet.characters[14]]}, {"は": [alphabet.characters[7], alphabet.characters[0]]}, {"ひ": [alphabet.characters[7], alphabet.characters[8]]}, {"ふ": [alphabet.characters[7], alphabet.characters[20]]}, {"へ": [alphabet.characters[7], alphabet.characters[4]]}, {"ほ": [alphabet.characters[7], alphabet.characters[14]]}, {"ま": [alphabet.characters[12], alphabet.characters[0]]}, {"み": [alphabet.characters[12], alphabet.characters[8]]}, {"む": [alphabet.characters[12], alphabet.characters[20]]}, {"め": [alphabet.characters[12], alphabet.characters[4]]}, {"も": [alphabet.characters[12], alphabet.characters[14]]}, {"や": [alphabet.characters[24], alphabet.characters[0]]}, {"ゆ": [alphabet.characters[24], alphabet.characters[20]]}, {"よ": [alphabet.characters[24], alphabet.characters[14]]}, {"ら": [alphabet.characters[17], alphabet.characters[0]]}, {"り": [alphabet.characters[17], alphabet.characters[8]]}, {"る": [alphabet.characters[17], alphabet.characters[20]]}, {"れ": [alphabet.characters[17], alphabet.characters[4]]}, {"ろ": [alphabet.characters[17], alphabet.characters[14]]}, {"わ": [alphabet.characters[22], alphabet.characters[0]]}, {"を": [alphabet.characters[22], alphabet.characters[14]]}, {"ん": [alphabet.characters[13]]}]}, {katakana: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"]}], ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha/wa", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"]);																							
																							
const japaneseKanji = new WritingSystem("", {kanji: [{"一": [Object.assign({}, japaneseKana.characters[0].hiragana[1], japaneseKana.characters[0].hiragana[16])]}, {"二": [Object.assign({}, japaneseKana.characters[0].hiragana[21])]}, {"三": [Object.assign({}, japaneseKana.characters[0].hiragana[10], japaneseKana.characters[0].hiragana[45])]}, {"四": [Object.assign({}, japaneseKana.characters[0].hiragana[37], japaneseKana.characters[0].hiragana[45])]}, {"五": [Object.assign({}, japaneseKana.characters[0].hiragana[9])]}, {"六": [Object.assign({}, japaneseKana.characters[0].hiragana[42], japaneseKana.characters[0].hiragana[7])]}, {"七": [Object.assign({}, japaneseKana.characters[0].hiragana[20], japaneseKana.characters[0].hiragana[20])]}, {"八": [Object.assign({}, japaneseKana.characters[0].hiragana[25], japaneseKana.characters[0].hiragana[16])]}, {"九": [Object.assign({}, japaneseKana.characters[0].hiragana[6], japaneseKana.characters[0].hiragana[36], japaneseKana.characters[0].hiragana[2])]}, {"十": [Object.assign({}, japaneseKana.characters[0].hiragana[11], japaneseKana.characters[0].hiragana[36], japaneseKana.characters[0].hiragana[2])]}, {"日": [Object.assign({}, japaneseKana.characters[0].hiragana[21], japaneseKana.characters[0].hiragana[16])]}, {"月": [Object.assign({}, japaneseKana.characters[0].hiragana[5], japaneseKana.characters[0].hiragana[17])]}, {"年": [Object.assign({}, japaneseKana.characters[0].hiragana[23], japaneseKana.characters[0].hiragana[36])]}, {"週": [Object.assign({}, japaneseKana.characters[0].hiragana[11], japaneseKana.characters[0].hiragana[36], japaneseKana.characters[0].hiragana[2])]}, {"時": [Object.assign({}, japaneseKana.characters[0].hiragana[11])]}, {"分": [Object.assign({}, japaneseKana.characters[0].hiragana[27], japaneseKana.characters[0].hiragana[45])]}, {"秒": [Object.assign({}, japaneseKana.characters[0].hiragana[26], japaneseKana.characters[0].hiragana[37], japaneseKana.characters[0].hiragana[2])]}, {"今": [Object.assign({}, japaneseKana.characters[0].hiragana[9], japaneseKana.characters[0].hiragana[45])]}, {"先": [Object.assign({}, japaneseKana.characters[0].hiragana[13], japaneseKana.characters[0].hiragana[45])]}, {"来": [Object.assign({}, japaneseKana.characters[0].hiragana[38], japaneseKana.characters[0].hiragana[1])]},  {"テスト1": [Object.assign({}, japaneseKana.characters[0].hiragana[5], japaneseKana.characters[0].hiragana[6])]}, {"テスト2": [Object.assign({}, japaneseKana.characters[0].hiragana[7], japaneseKana.characters[0].hiragana[8])]}, {"テスト3": [Object.assign({}, japaneseKana.characters[0].hiragana[9], japaneseKana.characters[0].hiragana[10])]}, {"テスト4": [Object.assign({}, japaneseKana.characters[0].hiragana[11], japaneseKana.characters[0].hiragana[12])]}, {"テスト5": [Object.assign({}, japaneseKana.characters[0].hiragana[13], japaneseKana.characters[0].hiragana[14])]}, {"テスト6": [Object.assign({}, japaneseKana.characters[0].hiragana[15], japaneseKana.characters[0].hiragana[16])]}, {"テスト7": [Object.assign({}, japaneseKana.characters[0].hiragana[17], japaneseKana.characters[0].hiragana[18])]}, {"テスト8": [Object.assign({}, japaneseKana.characters[0].hiragana[19], japaneseKana.characters[0].hiragana[20])]}, {"テスト9": [Object.assign({}, japaneseKana.characters[0].hiragana[21], japaneseKana.characters[0].hiragana[22])]}, {"テスト10": [Object.assign({}, japaneseKana.characters[0].hiragana[23], japaneseKana.characters[0].hiragana[24])]}, {"テスト11": [Object.assign({}, japaneseKana.characters[0].hiragana[25], japaneseKana.characters[0].hiragana[26])]}, {"テスト12": [Object.assign({}, japaneseKana.characters[0].hiragana[27], japaneseKana.characters[0].hiragana[28])]}, {"テスト13": [Object.assign({}, japaneseKana.characters[0].hiragana[29], japaneseKana.characters[0].hiragana[30])]}, {"テスト14": [Object.assign({}, japaneseKana.characters[0].hiragana[31], japaneseKana.characters[0].hiragana[32])]}, {"テスト15": [Object.assign({}, japaneseKana.characters[0].hiragana[33], japaneseKana.characters[0].hiragana[34])]}, {"テスト16": [Object.assign({}, japaneseKana.characters[0].hiragana[35], japaneseKana.characters[0].hiragana[36])]}  ]});																							
																							
console.log(japaneseKana.characters);																							
																							
console.log(alphabet.characters[0]);																							
																							
console.log(japaneseKanji);																							
																							
console.log(japaneseKanji.characters.kanji);																							
																							
console.log(Object.keys(japaneseKanji.characters.kanji[0].一).join(""));																							
																							
let generatedRandomLetters = [];																							
let mergedKanas = [];																							
let mergedKanji = [];																							
																							
function lettersMachine() {																							
	generatedRandomLetters.push(alphabet.characters[parseInt(Math.random()*(26-0)+0)]);																						
																							
	/* //document.write(generatedRandomLetters[generatedRandomLetters.length-1], "<br>");																						
	let letterBox = document.createElement('button'); "<br>";																						
	document.querySelector(".alphabet").appendChild(letterBox);																						
	letterBox.innerHTML = `${generatedRandomLetters[generatedRandomLetters.length-1]}`;																						
	document.querySelector(".alphabet").innerHTML += "<br>";																						
																							
//	console.log(generatedRandomLetters); */																						
																							
	document.querySelector(".alphabet").innerHTML = "";																						
	for(let i=0; i<generatedRandomLetters.length; i++){																						
																							
		let letterBox = document.createElement('button'); "<br>";																					
		document.querySelector(".alphabet").appendChild(letterBox);																					
		letterBox.innerHTML = `${generatedRandomLetters[i]}`;																					
		document.querySelector(".alphabet").innerHTML += "<br>";																					
																							
	}																						
																							
																							
}																							
let i = 0; let j = 0; let alphabetLetterInAKana = []; let alphabetLetterInRandomLettersList = []; //let kanaBox = document.body																							
function kanaMerge(){																							
	//for(i=0; i<generatedRandomLetters.length; i++){																						
		//for(j=0; j<generatedRandomLetters.length; j++){																					
////		for (let info in japaneseKana.characters[0])  {																					
//				let alphabetLetterInAKana = [];																			
//				let alphabetLetterInRandomLettersList = [];																			
//				alphabetLetterInAKana.push(Object.values(japaneseKana.characters[0].hiragana[i]).toString());																			
//				alphabetLetterInRandomLettersList.push(generatedRandomLetters[i]);																			
//				console.log(alphabetLetterInAKana); console.log(alphabetLetterInRandomLettersList);																			
																							
																							
				labelOfLoopAccessingAllKanasForTheLoopAccessingKanaLetters: for(let l=0; l< japaneseKana.characters[0].hiragana.length ; l++){																			
//					labelOfLoopAcessingOnlyTheLettersOfEachKana: for(let k = 0; k<Object.values(japaneseKana.characters[0].hiragana[i])[0].length; k++){																		
//						console.log(Object.values(japaneseKana.characters[0].hiragana[i])); console.log(i);																	
//						alphabetLetterInAKana.push(Object.values(japaneseKana.characters[0].hiragana[l])[0][k]);																	
//						console.log(alphabetLetterInAKana)																	
						//console.log(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]));	console.log(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]);																
																							
						if(Object.values(japaneseKana.characters[0].hiragana[l])[0].length === 2){																	
							if(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]) && generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][1])){																
								mergedKanas.push(japaneseKana.characters[0].hiragana[l]);															
								document.querySelector(".kana").innerHTML = "";															
								for(let m=0; m<mergedKanas.length; m++){															
																							
									let kanaLettersSoundsBox = document.createElement('button');														
									document.querySelector(".kana").appendChild(kanaLettersSoundsBox);														
									kanaLettersSoundsBox.innerHTML = `${Object.values(mergedKanas[m])[0].join("")}`; console.log(Object.values(mergedKanas[m])[0]); console.log(mergedKanas); console.log(japaneseKana.characters[0].hiragana[l]);														
									kanaLettersSoundsBox.classList.add("kana-section-letters-sounds");														
									let kanaBox = document.createElement('button'); "<br>";														
									document.querySelector(".kana").appendChild(kanaBox);														
									kanaBox.innerHTML = `${Object.keys(mergedKanas[m]).toString()}`;														
									kanaBox.classList.add("kana-button");														
									document.querySelector(".kana").innerHTML += "<br>";														
									/* let kanaBox = document.createElement('button'); "<br>";														
									document.querySelector('.kana').appendChild(kanaBox); kanaBox.classList.add(`${mergedKanas[mergedKanas.length-1]}`);														
									kanaBox.innerHTML = `${mergedKanas[mergedKanas.length-1]}`;														
									document.querySelector(".kana").innerHTML += "<br>"; */														
									generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]), 1);														
									generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][1]), 1); console.log(generatedRandomLetters);	let test = kanaBox.parentNode; console.log(test); console.log(document.querySelector('.kana'));													
								}															
																							
																							
// setInterval(function(){ /* if(kanaBox.parentNode){ kanaBox.parentNode.removeChild(kanaBox); }*/ if(document.querySelector(`${mergedKanas[mergedKanas.length-1]}`).parentNode) { document.querySelector(`${mergedKanas[mergedKanas.length-1]}`).parentNode.removeChild(document.querySelector(`${mergedKanas[mergedKanas.length-1]}`)); }}, 1000); console.log(kanaBox); console.log(kanaBox.parentNode);																							
																							
							//	break labelOfLoopAccessingAllKanasForTheLoopAccessingKanaLetters;															
							}																
						}																	
						if(Object.values(japaneseKana.characters[0].hiragana[l])[0].length === 3){																	
							if(generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]) && generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][1]) && generatedRandomLetters.includes(Object.values(japaneseKana.characters[0].hiragana[l])[0][2])){																
								mergedKanas.push(japaneseKana.characters[0].hiragana[l]);															
								document.querySelector(".kana").innerHTML = "";															
								for(let m=0; m<mergedKanas.length; m++){															
																							
									let kanaLettersSoundsBox = document.createElement('button');														
									document.querySelector(".kana").appendChild(kanaLettersSoundsBox);														
									kanaLettersSoundsBox.innerHTML = `${Object.values(mergedKanas[m])[0].join("")}`; console.log(Object.values(mergedKanas[m])[0]); console.log(mergedKanas); console.log(japaneseKana.characters[0].hiragana[l]);														
									kanaLettersSoundsBox.classList.add("kana-section-letters-sounds");														
									let kanaBox = document.createElement('button'); "<br>";														
									document.querySelector(".kana").appendChild(kanaBox);														
									kanaBox.innerHTML = `${Object.keys(mergedKanas[m]).toString()}`;														
									kanaBox.classList.add("kana-button");														
									document.querySelector(".kana").innerHTML += "<br>";														
									/* let kanaBox = document.createElement('button'); "<br>";														
									document.querySelector('.kana').appendChild(kanaBox); kanaBox.classList.add(`${mergedKanas[mergedKanas.length-1]}`);														
									kanaBox.innerHTML = `${mergedKanas[mergedKanas.length-1]}`;														
									document.querySelector(".kana").innerHTML += "<br>"; */														
									generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][0]), 1);														
									generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][1]), 1);														
									generatedRandomLetters.splice(generatedRandomLetters.indexOf(Object.values(japaneseKana.characters[0].hiragana[l])[0][2]), 1);														
								}															
																							
																							
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
									if(Object.values(japaneseKana.characters[0].hiragana[index])[0][0]===parameter && Object.values(japaneseKana.characters[0].hiragana[index])[0].length===1){														
										console.log(Object.values(japaneseKana.characters[0].hiragana[index])[0]);													
										mergedKanas.push(japaneseKana.characters[0].hiragana[index]); console.log(mergedKanas);													
										for(let m=0; m<mergedKanas.length; m++){													
											let kanaLettersSoundsBox = document.createElement('button');												
											document.querySelector(".kana").appendChild(kanaLettersSoundsBox);												
											kanaLettersSoundsBox.innerHTML = `${Object.values(mergedKanas[m])[0].join("")}`; console.log(Object.values(mergedKanas[m])[0]); console.log(mergedKanas); console.log(japaneseKana.characters[0].hiragana[l]);												
											kanaLettersSoundsBox.classList.add("kana-section-letters-sounds");												
											let kanaBox = document.createElement('button'); "<br>";												
											document.querySelector(".kana").appendChild(kanaBox);												
											kanaBox.innerHTML = `${Object.keys(mergedKanas[m]).toString()}`;												
											kanaBox.classList.add("kana-button");												
											document.querySelector(".kana").innerHTML += "<br>";												
									}														
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
																							
																							
		//}																					
	//}												*/										
}																							
//setInterval(function() { if(japaneseKana.characters[0].hiragana[i].hasOwnProperty(generatedRandomLetters[i])){console.log("ok")} else {"xx"} }, 1000)																							
																							
function kanjiMerge(){																							
	let mergedKanasButStringed = [];																						
	for(let k=0; k<mergedKanas.length; k++){																						
//console.log(Object.keys(mergedKanas[k])[0]); console.log(kanaFromCurrentIteratedKanji);																							
		mergedKanasButStringed.push(Object.keys(mergedKanas[k])[0]); console.log(mergedKanasButStringed);																					
	}																						
	labelOfLoopAccessingAllKanjisForTheLoopAccessingKanjiLetters: for(let i=0; i<japaneseKanji.characters.kanji.length; i++){																						
		let kanaFromCurrentIteratedKanji = [];																					
		for(let objectAsParameter in Object.values(japaneseKanji.characters.kanji[i])[0][0]){																					
//console.log(Object.keys(mergedKanas[0])[0]); console.log(mergedKanas); console.log(objectAsParameter); //console.log(Object.keys(mergedKanas[0])[0]); //			console.log(Object.values(japaneseKanji.characters.kanji[i])[0][0]);  console.log(Object.values(japaneseKanji.characters.kanji));  console.log(japaneseKanji.characters.kanji.length);																				
//			console.log(objectAsParameter);  console.log(Object.values(japaneseKanji.characters.kanji[i])[0][0]);  console.log(Object.values(japaneseKanji.characters.kanji));  console.log(japaneseKanji.characters.kanji.length);																				
			kanaFromCurrentIteratedKanji.push(objectAsParameter); console.log(kanaFromCurrentIteratedKanji);								//console.log(japaneseKanji.characters.kanji[i]); mergedKanji.push(Object.keys(japaneseKanji.characters.kanji[i])[0]); console.log(mergedKanji);												
			if(kanaFromCurrentIteratedKanji.length === 2 /*mergedKanas.includes(kanaFromCurrentIteratedKanji[0]) && mergedKanas.includes(kanaFromCurrentIteratedKanji[1])*/ && mergedKanasButStringed.includes(kanaFromCurrentIteratedKanji[0]) && mergedKanasButStringed.includes(kanaFromCurrentIteratedKanji[1]) && Object.keys(Object.values(Object.values(japaneseKanji.characters.kanji[i])[0])[0]).length===2){																				
//				document.querySelector(".kanji").innerHTML +=  `${kanaFromCurrentIteratedKanji[0]} && ${kanaFromCurrentIteratedKanji[1]} && ${mergedKanas} &&&& ${Object.keys(japaneseKanji.characters.kanji[i])[0]} ; `; console.log(Object.keys(japaneseKanji.characters.kanji[i])[0][0], Object.keys(japaneseKanji.characters.kanji[i])[0][0]);																			
				mergedKanji.push(japaneseKanji.characters.kanji[i]); 																			
				document.querySelector(".kanji").innerHTML = "";																			
																							
																							
																							
				for(let j=0; j<mergedKanji.length; j++){																			
					// Código para testar adição das informações dos SONS das letras																		
					let kanjiLettersSoundsBox = document.createElement('button');																		
					document.querySelector(".kanji").appendChild(kanjiLettersSoundsBox);																		
					kanjiLettersSoundsBox.innerHTML = `${Object.values(Object.values(mergedKanji[j])[0][0])[0].join("")} ${Object.values(Object.values(mergedKanji[j])[0][0])[1].join("")}`;																		
					kanjiLettersSoundsBox.classList.add("kanji-section-letters-sounds");																		
					let kanjiKanaSoundsBox = document.createElement('button');																		
					document.querySelector(".kanji").appendChild(kanjiKanaSoundsBox);																		
					kanjiKanaSoundsBox.innerHTML = `${Object.keys(Object.values(mergedKanji[j])[0][0])[0]}${Object.keys(Object.values(mergedKanji[j])[0][0])[1]}`; console.log(Object.values(mergedKanji[j])[0][0]); console.log(Object.values(mergedKanji[j])); console.log(mergedKanji[j]);																		
					kanjiKanaSoundsBox.classList.add("kanji-section-kana-sounds");																		
					// Fim do código para testar adição das informações dos SONS das letras																		
					let kanjiBox = document.createElement('button'); "<br>";																		
					document.querySelector(".kanji").appendChild(kanjiBox);																		
					kanjiBox.innerHTML = `${Object.keys(mergedKanji[j])[0]}`; // `${Object.keys(japaneseKanji.characters.kanji[i])[0]}`;																		
					kanjiBox.classList.add("kanji-button"); console.log(document.querySelector(".kanji-section-kana-sounds"));																		
					document.querySelector(".kanji").innerHTML += "<br>";																		
																							
																							
					mergedKanas.splice(mergedKanas.indexOf(kanaFromCurrentIteratedKanji[0]), 1);																		
					mergedKanas.splice(mergedKanas.indexOf(kanaFromCurrentIteratedKanji[1]), 1); console.log(mergedKanas); //console.log(generatedRandomLetters);																		
					}																		
																							
																							
	}																						
			if(kanaFromCurrentIteratedKanji.length === 3 && mergedKanasButStringed.includes(kanaFromCurrentIteratedKanji[0]) && mergedKanasButStringed.includes(kanaFromCurrentIteratedKanji[1]) && mergedKanasButStringed.includes(kanaFromCurrentIteratedKanji[2]) && Object.keys(Object.values(Object.values(japaneseKanji.characters.kanji[i])[0])[0]).length===3){																				
				mergedKanji.push(japaneseKanji.characters.kanji[i]); 																			
				document.querySelector(".kanji").innerHTML = "";																			
																							
																							
				for(let j=0; j<mergedKanji.length; j++){																			
					let kanjiLettersSoundsBox = document.createElement('button');																		
					document.querySelector(".kanji").appendChild(kanjiLettersSoundsBox);																		
					kanjiLettersSoundsBox.innerHTML = `${Object.values(Object.values(mergedKanji[j])[0][0])[0].join("")}${Object.values(Object.values(mergedKanji[j])[0][0])[1].join("")}${Object.values(Object.values(mergedKanji[j])[0][0])[2].join("")}`;																		
					kanjiLettersSoundsBox.classList.add("kanji-section-letters-sounds");																		
					let kanjiKanaSoundsBox = document.createElement('button');																		
					document.querySelector(".kanji").appendChild(kanjiKanaSoundsBox);																		
					kanjiKanaSoundsBox.innerHTML = `${Object.keys(Object.values(mergedKanji[j])[0][0])[0]} ${Object.keys(Object.values(mergedKanji[j])[0][0])[1]} ${Object.keys(Object.values(mergedKanji[j])[0][0])[2]}`; console.log(Object.values(mergedKanji[j])[0][0]); console.log(Object.values(mergedKanji[j])); console.log(mergedKanji[j]);																		
					kanjiKanaSoundsBox.classList.add("kanji-section-kana-sounds");																		
					let kanjiBox = document.createElement('button'); "<br>";																		
					document.querySelector(".kanji").appendChild(kanjiBox);																		
					kanjiBox.innerHTML = `${Object.keys(mergedKanji[j])[0]}`; // `${Object.keys(japaneseKanji.characters.kanji[i])[0]}`;																		
					kanjiBox.classList.add("kanji-button"); console.log(document.querySelector(".kanji-section-kana-sounds"));																		
					document.querySelector(".kanji").innerHTML += "<br>";																		
																							
																							
					mergedKanas.splice(mergedKanas.indexOf(kanaFromCurrentIteratedKanji[0]), 1);																		
					mergedKanas.splice(mergedKanas.indexOf(kanaFromCurrentIteratedKanji[1]), 1);																		
					mergedKanas.splice(mergedKanas.indexOf(kanaFromCurrentIteratedKanji[2]), 1)																		
					}																		
	}																						
		/*	const uniqueKanasFromMergedKanas = [];																				
			if(kanaFromCurrentIteratedKanji.length===1 && kanaFromCurrentIteratedKanji === Object.keys(Object.values(Object.values(japaneseKanji.characters.kanji[i])[0])[0])){																				
				mergedKanasButStringed.forEach(function(parameter){																			
					if(!uniqueKanasFromMergedKanas.includes(parameter)){																		
						uniqueKanasFromMergedKanas.push(parameter);																	
					}else if(uniqueKanasFromMergedKanas.includes(parameter)){																		
						mergedKanas.splice(parameter, 1); console.log(parameter);																	
					}																		
				})																			
																							
																							
			} */																				
			}																				
		}																					
//	}																						
																							
}																							
																							
setInterval(lettersMachine, 1000);																							
																							
setInterval(kanaMerge, 2000);																							
																							
setInterval(kanjiMerge, 2000);																							
																							
//setInterval(function(){ kanaBox.remove() }, 2000);																							
																							
																							
