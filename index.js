const emoji = require("emoji-emotion");
const rhymes = require("rhymes");

// const sentence = process.argv.slice(2);
const sentence = "Here is a shit sentence with emoji orange blush astonished words".split(' ');

function emojiWords(sentence){
    let newArr = [];
    if ((typeof sentence) =="string"){
        sentence = sentence.split(' ');ind
    }

    for(word of sentence){
        if (isEmoji(word)){
            newArr.push(emojiFinder(word));
        }else{
            newArr.push(word);
        }
    }
    return newArr.join(' ');
}

function isEmoji(word){
    const emojiwords = emoji.map(x => x.name);//.filter(y => y = word);
    if (emojiwords.includes(word)){
        return true;
    }
    return false;
}

function emojiFinder(word){
    const emojiEntry = emoji.filter(x => x.name == word);
    return emojiEntry[0].emoji;
}

const emojiSentence = emojiWords(sentence);
console.log(emojiSentence);

function rhymeWords(sentence){
    let newArr = [];
    if ((typeof sentence) =="string"){
        sentence = sentence.split(' ');
    }

    for (words of sentence){
        newArr.push(findRhyme(words));
    }
    return newArr.join(' ');
}

function findRhyme(words){
    let rhymeArr = (rhymes(words));
    rhymeArr.sort((x,y) => y.score - x.score);
    if (!rhymeArr[0]){
        return words;
    } else {
        return rhymeArr[0].word;
    }
}



const rhymeSentence = rhymeWords(emojiSentence);
console.log(rhymeSentence);