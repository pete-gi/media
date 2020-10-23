import * as webpack from "webpack";
import { resolve } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";

const enum ENV {
  dev = "development",
  prod = "production",
}
const ENVIRONMENT = process.env.NODE_ENV as ENV;
const IS_DEV = process.env.NODE_ENV === ENV.dev;

export default <webpack.Configuration>{
  target: "web",
  mode: ENVIRONMENT,
  devtool: IS_DEV ? "inline-source-map" : undefined,
  entry: {
    media: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: resolve("./lib"),
    publicPath: "/",
    library: "[name]",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".html", ".css"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/i,
        include: resolve("./src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: ["@babel/plugin-proposal-object-rest-spread"],
            },
          },
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
              configFile: resolve("./tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      protectWebpackAssets: true,
      cleanStaleWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: [resolve("./lib/**/*.*")],
    }),
  ],
  optimization: {
    minimize: !IS_DEV,
    minimizer: [new TerserWebpackPlugin()],
  },
};
