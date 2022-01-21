// @ts-check

let vscode = require("vscode");
let showQuickPick = vscode.window.showQuickPick;
let openExternal = vscode.env.openExternal;
let createURI = (/** @type {string} */ val) => vscode.Uri.parse(val, true);

/**
 * @param {string} title
 * @returns {Promise<string | null>}
 */
async function promptForProject(title) {
  let options = [
    "JavaScript (include index.js)",
    "TypeScript (include index.ts)",
    "JavaScript (empty index.js)",
    "TypeScript (empty index.ts)",
  ];

  let project = options.indexOf(
    await showQuickPick(options, {
      title,
    })
  );

  if (project != -1)
    return ["p5es", "p5ts", "p5es-empty", "p5ts-empty"][project];
  else return null;
}

/** @param {vscode.ExtensionContext} context */
exports.activate = (context) => {
  let openProject = vscode.commands.registerCommand(
    "p5js.open-glitch",
    async () => {
      let id = await promptForProject(
        "What type of project do you want to open?"
      );

      if (id) openExternal(createURI(`https://glitch.com/edit/#!/${id}`));
    }
  );

  let remixProject = vscode.commands.registerCommand(
    "p5js.remix-glitch",
    async () => {
      let id = await promptForProject(
        "What type of project do you want to remix?"
      );

      if (id) openExternal(createURI(`https://glitch.com/edit/#!/remix/${id}`));
    }
  );

  let openDocs = vscode.commands.registerCommand("p5js.open-docs", () => {
    /** @type {"nextToEditor" | "newTab" | "browser"} */
    let pref = vscode.workspace
      .getConfiguration("p5")
      .get("documentationPlacement");

    if (pref == "browser")
      return openExternal(createURI("https://p5js.org/reference/"));

    let panel = vscode.window.createWebviewPanel(
      "p5js",
      "p5js Documentation",
      { viewColumn: pref == "newTab" ? -1 : -2, preserveFocus: true },
      { enableScripts: true }
    );

    panel.webview.html = `
      <style>
        html, body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
      </style>
      
      <iframe src="https://p5js.org/reference/"></iframe>
    `;
  });

  context.subscriptions.push(openProject, remixProject, openDocs);
};

exports.deactivate = () => {};
