const path = require('path');  

module.exports = {  
  entry: './src/app.js', // Убедитесь, что этот путь правильный  
  output: {  
    filename: 'bundle.js',  
    path: path.resolve(__dirname, 'dist'),  
  },  
  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env'],  
          },  
        },  
      },  
    ],  
  },  
  resolve: {  
    extensions: ['.js'],  
  },  
  mode: 'development', // Убедитесь, что режим установлен  
};
