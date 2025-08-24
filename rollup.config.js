import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/mascot.js',
  output: [
    {
      // UMD bundle (works everywhere)
      file: 'dist/osmos-mascot.umd.js',
      format: 'umd',
      name: 'OsmosMascot', // The global variable name when used with a <script> tag
      sourcemap: true
    },
    {
      // ES Module bundle (for modern bundlers)
      file: 'dist/mascot.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    resolve() // Allows Rollup to find modules in node_modules if you add any
  ]
};