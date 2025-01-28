import {basicTypesExample} from './basic-types';

const cardTitle = document.querySelector('.cardTitle');
const cardExplanation = document.querySelector('.cardExplanation');

if (cardTitle) {
    cardTitle.textContent = basicTypesExample().title;
}

if (cardExplanation) {
    cardExplanation.textContent = basicTypesExample().explanation;
}
