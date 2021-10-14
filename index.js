let vscode = require("vscode");
let showQuickPick = vscode.window.showQuickPick;

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

      if (id) vscode.env.openExternal(`https://glitch.com/edit/#!/${id}`);
    }
  );

  let remixProject = vscode.commands.registerCommand(
    "p5js.remix-glitch",
    async () => {
      let id = await promptForProject(
        "What type of project do you want to remix?"
      );

      if (id) vscode.env.openExternal(`https://glitch.com/edit/#!/remix/${id}`);
    }
  );

  context.subscriptions.push(openProject, remixProject);
};

exports.deactivate = () => {};
