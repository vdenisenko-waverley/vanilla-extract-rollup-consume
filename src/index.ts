import hello from './foo';
import { flexContainer } from './styles.css';

import './test.css';

function main() {
    hello();
    console.log('flexContainer', flexContainer);
}
main();

export default main;