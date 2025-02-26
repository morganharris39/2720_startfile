import {
    basicTypesNumber,
    basicTypesString,
    basicTypesBoolean,
    basicTypesObject,
    arrayTypes,
    arrayTypesTuple,
    arrayTypesEnum,
    specialTypesAny,
    specialTypesVoid,
    specialTypesNull,
    specialTypesNever,
    specialTypesUnknown, 
} from '../examples/basicTypes/examples';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

// Then register the languages you need
hljs.registerLanguage('typescript', typescript);

// need references to the buttons in order to add event listeners
const basicTypesButton = document.querySelector('#basicTypesButton');
const arrayTypesButton = document.querySelector('#arrayTypesButton');
const specialTypesButton = document.querySelector('#specialTypesButton');

// need references to the card elements in order to update the content
const cardTitle = document.querySelector('#cardTitle');
const cardExplanation = document.querySelector('#cardExplanation');
const cardCode = document.querySelector('#cardCode');

// add event listeners to the buttons
if (basicTypesButton) {
    const examples = [basicTypesNumber(),basicTypesString(),basicTypesBoolean(),basicTypesObject()]
    basicTypesButton.addEventListener("click", () => loadExamples(examples));
}
if (arrayTypesButton) {
    const examples = [arrayTypes(),arrayTypesTuple(),arrayTypesEnum()]
    arrayTypesButton.addEventListener("click", () => loadExamples(examples))
}
if (specialTypesButton) {
    const examples = [specialTypesAny(),specialTypesVoid(),specialTypesNull(),specialTypesNever(),specialTypesUnknown()]
    specialTypesButton.addEventListener("click", () => loadExamples(examples))
}

// have loadExample function load the imported example functions
function loadExample(exampleType: string) {
    console.log(`Loading example content for ${exampleType} types`);
    let chosenExampleType
    switch (exampleType) {
        case "basic":
            chosenExampleType = basicTypesNumber()
            break;
        case "array":
            chosenExampleType = arrayTypes()
            break;
        case "special":
            chosenExampleType = specialTypesAny()
            break;
        default:
            chosenExampleType = basicTypesNumber()
    }
    if (cardTitle && cardExplanation && cardCode) {
        cardTitle.textContent = chosenExampleType.title;
        cardExplanation.textContent = chosenExampleType.explanation;
        cardCode.innerHTML = hljs.highlight(chosenExampleType.code,
            { language: 'typescript' }
          ).value
    }
}

// be able to load many examples passed in an array
function loadExamples (examples: any[]) {
    // gets a reference to the example card container
    const container = document.querySelector("#examplesContainer")
    if (!container) {
        console.error("Could not find example.")
        return
    }

    container.innerHTML = examples.map((example) => `
<div class="card-body flex-grow-0">
<h2 id="cardTitle" class="text-2xl mb-4 font-semibold">${example.title}</h2>
<p id="cardExplanation" class="mb-4">${example.explanation}</p>
<div class="mockup-code bg-slate-800">
<pre class="ml-4">
<code id="cardCode">${
    hljs.highlight(example.code, {
      language: "typescript",
    }).value
  }
</code>
</pre>
</div>
</div>
    `)
    .join("")
   
}