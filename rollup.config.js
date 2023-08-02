// Rollup plugins to install as npm --save-dev
import typescript from 'rollup-plugin-typescript';//used for typescript compilation
import resolve from 'rollup-plugin-node-resolve'; //used for enabel NPM modules +
import commonjs from 'rollup-plugin-commonjs';    //with probably use commonjs
import replace from 'rollup-plugin-replace';      //used for replacing ENV varible in code 
// import uglify from 'rollup-plugin-uglify';        //used for production minification
// import angular from "rollup-plugin-angular";   //used for Angular2 application see https://www.npmjs.com/package/rollup-plugin-angular
// Rollup configuration inspired by https://www.youtube.com/watch?v=ICYLOZuFMz8
export default {
  entry: 'src/index.ts', //entrypoint to traverse app
  dest: 'dist/bundle.min.js', //destination file
  format: 'iife', //format output wrapping all function into a single IIFE
  sourceMap: 'inline', //produce sourceMap and inline or maybe set sourceMap: true, sourceMapFile: 'path/for/dist/bundle.js.map'
  plugins: [
    typescript({
      //default use tsconfig.json but can be ovverride here 
      //typescript: require('some-typescript-fork') //default use TS 1.8.9 but can use other specific compiler version/fork
    }),
    resolve({ //used to resolve NPM module reading from packages.json those entrypoint (ES6 - Main or Browser specific)
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(), //translate commonjs module to ES6 module to be handle from Rollup and tree-shake
    replace({ //enable find-replacing variable in JS code to use ENV varibale for conditional code 
      ENV: 'production' // key = var name, value = replace
    }),
    // uglify()
  ]
}