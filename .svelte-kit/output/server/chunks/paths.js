let base = "";
let assets = "https://ladetec.github.io/build";
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
export {
  assets as a,
  base as b,
  reset as r,
  set_assets as s
};
