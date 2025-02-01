import {basicTypesExample} from './basic-types';

const cardTitle = document.querySelector('#cardTitle');
const cardExplanation = document.querySelector('#cardExplanation');
const cardCode = document.querySelector('#cardCode');

if (cardTitle) {
    cardTitle.textContent = basicTypesExample().title;
}

if (cardExplanation) {
    cardExplanation.textContent = basicTypesExample().explanation;
}

if (cardCode) {
    cardCode.textContent = basicTypesExample().code;
}