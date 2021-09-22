let vscode = require("vscode");

/** @param {vscode.ExtensionContext} context */
exports.activate = (context) => {
  let openGlitchProject = vscode.commands.registerCommand(
    "p5zs.open-glitch",
    () => vscode.env.openExternal("https://glitch.com/edit/#!/p5zs")
  );

  let remixGlitchProject = vscode.commands.registerCommand(
    "p5zs.remix-glitch",
    () => vscode.env.openExternal("https://glitch.com/remix/#!/p5zs")
  );

  context.subscriptions.push(openGlitchProject, remixGlitchProject);
};

exports.deactivate = () => {};
