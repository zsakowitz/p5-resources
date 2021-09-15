let map = {
  function: "func",
  "mouse event": "event-mouse",
  utility: "util",
};

function compile(json) {
  let obj = {};

  Object.keys(json).map((key) => {
    let [snippet, category] = key.split(/ \(|\)/g);

    obj[key] = {
      ...json[key],
      prefix: [snippet, `p5:${map[category] ?? "unknown"}:${snippet}`],
    };
  });

  return obj;
}
