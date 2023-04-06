import hello from './foo.js';
import { flexContainer } from './styles.css.js';
import './test.css.js';

function main() {
  hello();
  console.log("flexContainer", flexContainer);
}
main();

export { main as default };
