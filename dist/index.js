import 'src/styles.css.ts.vanilla.css';

function hello() {
  console.log("Hello World!");
}

var flexContainer = 'styles_flexContainer__1eterx40';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body {\n    font-size: 48px;\n}";
styleInject(css_248z);

function main() {
  hello();
  console.log("flexContainer", flexContainer);
}
main();

export { main as default };
