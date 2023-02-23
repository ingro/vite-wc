import { defineCustomElement } from 'vue'

import App from './App.ce.vue';
import Foo from './Foo.ce.vue';

const AppWc = defineCustomElement(App);
const FooWc = defineCustomElement(Foo);

customElements.define('app-wc', AppWc);
customElements.define('foo-wc', FooWc);

export { AppWc, FooWc };