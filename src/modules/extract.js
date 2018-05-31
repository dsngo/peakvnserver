const fs = require("fs");
const data = require("./codData.json");

function extract(data) {
  let aIdx = 0;
  const result = data.reduce((a, e, i) => {
    const init = {
      name: [e.CODE_TINH, e.MA_TINH],
      provinces: {},
    };
    if (a.length === 0) a.push(init);
    if (a[aIdx] && a[aIdx].name[0] !== e.CODE_TINH  ) {
      a.push(init);
      aIdx += 1;
    }
    a[aIdx].provinces[e.MAQUANCHAR] = e.TEN_QUANHUYEN;
    console.log(aIdx);
    return a;
  }, []);
  return result;
}

const test = extract(data);
fs.writeFileSync("./src/modules/test.json", JSON.stringify(test), "utf8");
