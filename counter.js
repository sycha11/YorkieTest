import yorkie from 'yorkie-js-sdk';

const client = new yorkie.Client('https://api.yorkie.dev', {
    apiKey: 'cmstd7lafcg8gj9h6pig',
  });
  await client.activate();

  const doc = new yorkie.Document('counter');
  await client.attach(doc);

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    doc.update((root) => {
      root.counter.increase(1)
    })
  })
  setCounter(0)

  doc.update((root) => {
    if(root.counter){
        setCounter(root.counter.getValue())
    } else{
      root.counter = new yorkie.Counter(yorkie.IntType, counter)
    }
  })

  doc.subscribe((event) => {
    setCounter(doc.getRoot().counter.getValue())
  })
}
