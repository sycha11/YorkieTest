import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import yorkie from 'yorkie-js-sdk'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div contenteditable="true" id="editor">Edit me</div>
  </div>
`

setupCounter(document.querySelector('#counter'))

async function main() {
  console.log('Loading');
  const client = new yorkie.Client('https://api.yorkie.dev', {
  apiKey: 'cmstd7lafcg8gj9h6pig',
});
  await client.activate();

  const doc = new yorkie.Document('editor');
  await client.attach(doc);

  const editor = document.getElementById('editor');

  doc.update((root) => {
    if(root.text){ // 텍스트가 있는 경우
      editor.innerHTML = root.text;
    } else{ // 텍스트가 없는 경우
      root.text = 'Edit me.';
    }
  });

  editor.addEventListener('input', (event) => {
    doc.update((root) => {
      root.text = editor.innerHTML;
      console.log(root.text);
    });
  });

  doc.subscribe((event) => {
    if(event.type === 'remote-change'){ // 원격에서 변경
      editor.innerHTML = doc.getRoot().text;
    }
  })


}
main();
