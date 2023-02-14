oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g HB-techChallenge
$ hb COMMAND
running command...
$ hb (--version)
HB-techChallenge/0.0.0 darwin-x64 node-v18.9.0
$ hb --help [COMMAND]
USAGE
  $ hb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hb hello PERSON`](#hb-hello-person)
* [`hb hello world`](#hb-hello-world)
* [`hb help [COMMANDS]`](#hb-help-commands)
* [`hb plugins`](#hb-plugins)
* [`hb plugins:install PLUGIN...`](#hb-pluginsinstall-plugin)
* [`hb plugins:inspect PLUGIN...`](#hb-pluginsinspect-plugin)
* [`hb plugins:install PLUGIN...`](#hb-pluginsinstall-plugin-1)
* [`hb plugins:link PLUGIN`](#hb-pluginslink-plugin)
* [`hb plugins:uninstall PLUGIN...`](#hb-pluginsuninstall-plugin)
* [`hb plugins:uninstall PLUGIN...`](#hb-pluginsuninstall-plugin-1)
* [`hb plugins:uninstall PLUGIN...`](#hb-pluginsuninstall-plugin-2)
* [`hb plugins update`](#hb-plugins-update)

## `hb hello PERSON`

Say hello

```
USAGE
  $ hb hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/davidselo/HB-techChallenge/blob/v0.0.0/dist/commands/hello/index.ts)_

## `hb hello world`

Say hello world

```
USAGE
  $ hb hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ hb hello world
  hello world! (./src/commands/hello/world.ts)
```

## `hb help [COMMANDS]`

Display help for hb.

```
USAGE
  $ hb help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for hb.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.4/src/commands/help.ts)_

## `hb plugins`

List installed plugins.

```
USAGE
  $ hb plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ hb plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `hb plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hb plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ hb plugins add

EXAMPLES
  $ hb plugins:install myplugin 

  $ hb plugins:install https://github.com/someuser/someplugin

  $ hb plugins:install someuser/someplugin
```

## `hb plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ hb plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ hb plugins:inspect myplugin
```

## `hb plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hb plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ hb plugins add

EXAMPLES
  $ hb plugins:install myplugin 

  $ hb plugins:install https://github.com/someuser/someplugin

  $ hb plugins:install someuser/someplugin
```

## `hb plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ hb plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ hb plugins:link myplugin
```

## `hb plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hb plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hb plugins unlink
  $ hb plugins remove
```

## `hb plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hb plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hb plugins unlink
  $ hb plugins remove
```

## `hb plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hb plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hb plugins unlink
  $ hb plugins remove
```

## `hb plugins update`

Update installed plugins.

```
USAGE
  $ hb plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
