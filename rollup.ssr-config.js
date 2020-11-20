import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/App.svelte',
  output: {
    sourcemap: true,
    format: 'cjs',
    file: 'public/build/ssr.js'
  },
  plugins: [
    svelte({
      generate: 'ssr',
      hydratable: true
    })
  ]
};