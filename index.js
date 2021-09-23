let vscode = require("vscode");

/** @param {vscode.ExtensionContext} context */
exports.activate = (context) => {
  let openJavaScriptProject = vscode.commands.registerCommand(
    "p5zs.open-glitch",
    () => vscode.env.openExternal("https://glitch.com/edit/#!/p5zs")
  );

  let remixJavaScriptProject = vscode.commands.registerCommand(
    "p5zs.remix-glitch",
    () => vscode.env.openExternal("https://glitch.com/edit/#!/remix/p5zs")
  );

  let openTypeScriptProject = vscode.commands.registerCommand(
    "p5ts.open-glitch",
    () => vscode.env.openExternal("https://glitch.com/edit/#!/p5ts")
  );

  let remixTypeScriptProject = vscode.commands.registerCommand(
    "p5ts.remix-glitch",
    () => vscode.env.openExternal("https://glitch.com/edit/#!/remix/p5ts")
  );

  context.subscriptions.push(
    openJavaScriptProject,
    remixJavaScriptProject,
    openTypeScriptProject,
    remixTypeScriptProject
  );
};

exports.deactivate = () => {};
