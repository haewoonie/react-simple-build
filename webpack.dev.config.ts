import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {
  Configuration as WebpackConfig,
  HotModuleReplacementPlugin,
} from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import DotenvWebpack from "dotenv-webpack";

type Configuration = WebpackConfig & {
  devServer?: WebpackDevServerConfig;
};

const config: Configuration = {
  mode: "development",
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
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less?$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.jpg|png|gif|svg$/,
        use: "file-loader",
      },
      {
        test: /\.pdf|xls|doc|docx|xlsx$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new HotModuleReplacementPlugin(),
    new DotenvWebpack({
      path: path.resolve(__dirname, ".env.development"),
      ignoreStub: true,
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 4000,
    open: true,
  },
};

export default config;
