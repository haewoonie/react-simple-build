import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfig } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import DotenvWebpack from "dotenv-webpack";
import MinCssExtractPlugin from "mini-css-extract-plugin";

const config: WebpackConfig = {
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.less$/,
      //   use: ["style-loader", "css-loader", "less-loader"],
      // },
      {
        test: /\.css$/,
        use: [MinCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [MinCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
          "url-loader",
        ],
      },
      {
        test: /\.(pdf|xls|doc|docx|xlsx)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new DotenvWebpack({
      path: path.resolve(__dirname, ".env.production"),
    }),
    new CleanWebpackPlugin(),
    new MinCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};

export default config;
