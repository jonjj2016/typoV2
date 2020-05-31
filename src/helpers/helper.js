import {
    words
} from '../data/data';


export const getRandomNumber = (min, max) => {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random
};

export const randomWord = (num) => {
    console.log(words)
    const index = getRandomNumber(words.length, 0)
    return words[index]
}