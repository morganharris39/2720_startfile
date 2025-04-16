import { CodeExample } from '../../types/CodeExample'
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

// Then register the languages you need
hljs.registerLanguage('typescript', typescript);

/**
 * A class representing an example code snippet.
 * @param title - The title of the code snippet.
 * @param explanation - A brief explanation of the code snippet.
 * @param code - The actual code snippet.
 */

// exports the different elements

export class ExampleCodeSnippet implements CodeExample {
  constructor(
    public title: string,
    public explanation: string,
    public code: string
  ) {}



  renderCodeSnippet(): string {

    return `
      <div class="space-y-4">
        <h3 class="text-2xl font-bold text-white bg-base-content rounded-lg p-3 text-center shadow-lg">
          ${this.title}
        </h3>

        <p class="text-lg leading-relaxed px-4">${
          this.explanation
        }</p>

        <div class="relative">
          <pre class="rounded-lg bg-slate-800 p-4 overflow-x-auto">
            <code class="text-sm font-mono">${
              hljs.highlight(this.code, {
                language: "typescript",
              }).value
            }</code>
          </pre>
          
          <button onclick="navigator.clipboard.writeText(\`${this.code}\`)" 
            class="absolute top-2 right-2 text-gray-200 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-md p-2">
            Copy
          </button>

        </div>

      </div>`
  }
}