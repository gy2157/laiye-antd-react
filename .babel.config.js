module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    ["import", {"libraryName": "antd", "libraryDirectory": "es", "style":"css"}]
  ]
}