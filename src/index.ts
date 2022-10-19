import { SideLink } from './sideLink';
// import { wrap } from './utils';
// import observedAttributesHelloworld from './hello-world/hello-world.observed-attributes';
// import { HelloWorld } from './hello-world/hello-world.component';

customElements.define('open-sidebar', SideLink, { extends: 'a' });
// customElements.define(
//   'hello-world',
//   wrap(
//     () => Promise.resolve(HelloWorld),
//     'HelloWorld',
//     observedAttributesHelloworld,
//     HTMLDivElement
//   ),
//   { extends: 'div' }
// );
