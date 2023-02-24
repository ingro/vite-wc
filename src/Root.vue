<script setup>
import './wc.js'
import Foo from './Foo.ce.vue';

import './style.css';
</script>

<template>
  <bar-wc></bar-wc>
  <foo-wc msg="I'm a custom element" />
  <Foo msg="I'm a regular Vue element"/>
</template>

<style>
</style>
