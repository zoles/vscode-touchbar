'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const touchbar = [
        {
            'command': 'zoles.touchBar.terminal',
            'action': 'workbench.action.terminal.toggleTerminal'
        },
        {
            'command': 'zoles.touchBar.jumpToBracket',
            'action': 'editor.action.jumpToBracket'
        },
        {
            'command': 'zoles.touchBar.showReferences',
            'action': 'editor.action.referenceSearch.trigger'
        },
        {
            'command': 'zoles.touchBar.duplicate',
            'action': 'editor.action.copyLinesDownAction'
        },
        {   
            'command': 'zoles.touchBar.rename',
            'action': 'editor.action.rename'
        },
        {   
            'command': 'zoles.touchBar.gitSync',
            'action': 'git.sync'
        }
    ];
    touchbar.forEach(
        (cmd) => {
            let command = vscode.commands.registerCommand(cmd.command, 
                () => {
                vscode.commands.executeCommand(cmd.action)
            });
            context.subscriptions.push(command);
        }
    );
}

// this method is called when your extension is deactivated
export function deactivate() {
}