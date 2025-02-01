/*
    <div id="parent">
        <div id="child1">
            <h1>I am H1 tag in child1</h1>
            <h2>I am H2 tag in child1</h2>
        </div>
        <div id="child2">
            <h1>I am H1 tag in child2</h1>
            <h2>I am H2 tag in child2</h2>
        </div>
    </div>

    creat this structure with react
*/

const child1 = React.createElement('div', { id: 'child1' }, [
  React.createElement('h1', {}, 'I am H1 tag in child1'),
  React.createElement('h2', {}, 'I am H2 tag in child1'),
]);
const child2 = React.createElement('div', { id: 'child2' }, [
  React.createElement('h2', {}, 'I am H1 tag in child2'),
  React.createElement('h2', {}, 'I am H2 tag in child2'),
]);
const parent = React.createElement('div', { id: 'parent' }, [child1, child2]);

const heading = React.createElement(
  'h1',
  {
    id: 'heading',
  },
  'Hello, World From React!'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
