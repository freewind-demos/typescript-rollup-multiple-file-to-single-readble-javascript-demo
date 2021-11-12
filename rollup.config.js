import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/hello.ts',
  plugins: [typescript({})],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  external: ['lodash']
}
