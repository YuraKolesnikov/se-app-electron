declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.json' {
  const data: any
  export default data
}

declare module 'vue2-transitions'