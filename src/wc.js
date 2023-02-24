import { defineCustomElement } from 'vue'

import Foo from './Foo.ce.vue';
import Bar from './Bar.ce.vue';

const FooWc = defineCustomElement(Foo);
const BarWc = defineCustomElement(Bar);

customElements.define('foo-wc', FooWc);
customElements.define('bar-wc', BarWc);

export { FooWc, BarWc };