module.exports = {
  node: {
    // 起動時に発生する Not allowed to load local resource 対策
    // https://github.com/electron/electron/issues/4867
    __dirname: false,
    __filename: false,
  },
};
