const Dolphin_score = (96 + 108 + 89) / 3;
const Koala_score = (88 + 91 + 110) / 3;
console.log(Dolphin_score, Koala_score);

if (Dolphin_score > Koala_score) {
    console.log(`Dolphins win the trophy`)
} else if (Koala_score > Dolphin_Score) {
    console.log(`Koalas win the trophy`);
} else if (Dolphin_score === Koala_score) {
    console.log(`Both win the trophy!`);
}


const Dolphinscore = (97 + 112 + 101) / 3;
const Koalascore = (109 + 95 + 123) / 3;
console.log(Dolphinscore, Koalascore);

if (Dolphinscore > Koalascore && Dolphinscore >= 100) {
    console.log(`Dolphins win the trophy`);
} else if (Koalascore > Dolphinscore && Koalascore >= 100) {
    console.log(`Koalas win the trophy`);
} else if (Dolphinscore === Koalascore && Dolphinscore >= 100 && Koalascore >= 100) {
    console.log(`Both win the trophy`);
} else if (Dolphinscore === Koalascore) {
    console.log(`No one wins the trophy`);
}