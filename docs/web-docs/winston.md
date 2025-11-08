Directory structure:
└── winstonjs-winston/
    ├── README.md
    ├── CHANGELOG.md
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── index.d.ts
    ├── jest.config.js
    ├── LICENSE
    ├── package.json
    ├── publishing.md
    ├── SECURITY.md
    ├── tsconfig.json
    ├── UPGRADE-3.0.md
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .npmignore
    ├── .prettierrc
    ├── docs/
    │   ├── publishing.md
    │   ├── releases.md
    │   └── transports.md
    ├── examples/
    │   ├── color-message.js
    │   ├── create-file.js
    │   ├── custom-levels-colors.js
    │   ├── custom-levels.js
    │   ├── custom-pretty-print.js
    │   ├── custom-timestamp.js
    │   ├── custom-transport.js
    │   ├── delete-level.js
    │   ├── errors.js
    │   ├── exception.js
    │   ├── file-maxsize.js
    │   ├── finish-event.js
    │   ├── format-dynamic-content.js
    │   ├── format-filter.js
    │   ├── format-logger-and-transport.js
    │   ├── format-mutate.js
    │   ├── interpolation.js
    │   ├── json.js
    │   ├── levels.js
    │   ├── metadata.js
    │   ├── quick-start.js
    │   ├── ready-to-use-pattern.ts
    │   ├── regular-expressions.js
    │   ├── simple-stream.js
    │   ├── splat-message.js
    │   └── splat.js
    ├── lib/
    │   ├── winston.js
    │   └── winston/
    │       ├── common.js
    │       ├── container.js
    │       ├── create-logger.js
    │       ├── exception-handler.js
    │       ├── exception-stream.js
    │       ├── logger.js
    │       ├── profiler.js
    │       ├── rejection-handler.js
    │       ├── rejection-stream.js
    │       ├── tail-file.js
    │       ├── config/
    │       │   ├── index.d.ts
    │       │   └── index.js
    │       └── transports/
    │           ├── console.js
    │           ├── file.js
    │           ├── http.js
    │           ├── index.d.ts
    │           ├── index.js
    │           └── stream.js
    ├── test/
    │   ├── globalSetup.js
    │   ├── jest.config.integration.js
    │   ├── jest.config.unit.js
    │   ├── tsconfig.json
    │   ├── typescript-definitions.ts
    │   ├── fixtures/
    │   │   ├── .gitkeep
    │   │   ├── keys/
    │   │   │   ├── agent2-cert.pem
    │   │   │   └── agent2-key.pem
    │   │   └── logs/
    │   │       └── .gitkeep
    │   ├── helpers/
    │   │   ├── handler-tests.js
    │   │   ├── index.js
    │   │   ├── mocks/
    │   │   │   ├── legacy-mixed-transport.js
    │   │   │   ├── legacy-transport.js
    │   │   │   └── mock-transport.js
    │   │   └── scripts/
    │   │       ├── colorize.js
    │   │       ├── default-rejections.js
    │   │       ├── exit-on-error.js
    │   │       ├── log-rejections.js
    │   │       ├── unhandle-exceptions.js
    │   │       └── unhandle-rejections.js
    │   ├── integration/
    │   │   ├── formats.test.js
    │   │   └── logger.test.js
    │   └── unit/
    │       ├── formats/
    │       │   └── errors.test.js
    │       └── winston/
    │           ├── container.test.js
    │           ├── create-logger.test.js
    │           ├── exception-handler.test.js
    │           ├── exception-stream.test.js
    │           ├── log-exception.test.js
    │           ├── logger-legacy.test.js
    │           ├── logger.test.js
    │           ├── profiler.test.js
    │           ├── rejection-handler.test.js
    │           ├── tail-file.test.js
    │           ├── winston.test.js
    │           ├── config/
    │           │   └── config.test.js
    │           └── transports/
    │               ├── 00-file-stress.test.js
    │               ├── console.test.js
    │               ├── error.test.js
    │               ├── file-create-dir.test.js
    │               ├── file.test.js
    │               ├── http.test.js
    │               └── stream.test.js
    └── .github/
        ├── dependabot.yml
        ├── ISSUE_TEMPLATE/
        │   ├── bug_report.yml
        │   ├── config.yml
        │   └── feature_request.yml
        └── workflows/
            └── ci.yml

================================================
FILE: README.md
================================================
# winston

A logger for just about everything.

[![Version npm](https://img.shields.io/npm/v/winston.svg?style=flat-square)](https://www.npmjs.com/package/winston)
[![npm Downloads](https://img.shields.io/npm/dm/winston.svg?style=flat-square)](https://npmcharts.com/compare/winston?minimal=true)
[![build status](https://github.com/winstonjs/winston/actions/workflows/ci.yml/badge.svg)](https://github.com/winstonjs/winston/actions/workflows/ci.yml)
[![coverage status](https://coveralls.io/repos/github/winstonjs/winston/badge.svg?branch=master)](https://coveralls.io/github/winstonjs/winston?branch=master)

[![NPM](https://nodei.co/npm/winston.png?downloads=true&downloadRank=true)](https://nodei.co/npm/winston/)

## winston@3

See the [Upgrade Guide](UPGRADE-3.0.md) for more information. Bug reports and
PRs welcome!

## Looking for `winston@2.x` documentation?

Please note that the documentation below is for `winston@3`.
[Read the `winston@2.x` documentation].

## Motivation

`winston` is designed to be a simple and universal logging library with
support for multiple transports. A transport is essentially a storage device
for your logs. Each `winston` logger can have multiple transports (see:
[Transports]) configured at different levels (see: [Logging levels]). For
example, one may want error logs to be stored in a persistent remote location
(like a database), but all logs output to the console or a local file.

`winston` aims to decouple parts of the logging process to make it more
flexible and extensible. Attention is given to supporting flexibility in log
formatting (see: [Formats]) & levels (see: [Using custom logging levels]), and
ensuring those APIs decoupled from the implementation of transport logging
(i.e. how the logs are stored / indexed, see: [Adding Custom Transports]) to
the API that they exposed to the programmer.

## Quick Start

TL;DR? Check out the [quick start example][quick-example] in `./examples/`.
There are a number of other examples in [`./examples/*.js`][examples].
Don't see an example you think should be there? Submit a pull request
to add it!

## Usage

The recommended way to use `winston` is to create your own logger. The
simplest way to do this is using `winston.createLogger`:

``` js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
```

You may also log directly via the default logger exposed by
`require('winston')`, but this merely intended to be a convenient shared
logger to use throughout your application if you so choose.
Note that the default logger doesn't have any transports by default.
You need add transports by yourself, and leaving the default logger without any
transports may produce a high memory usage issue.

## Table of contents

* [Motivation](#motivation)
* [Quick Start](#quick-start)
* [Usage](#usage)
* [Table of Contents](#table-of-contents)
* [Logging](#logging)
  * [Creating your logger](#creating-your-own-logger)
  * [Streams, `objectMode`, and `info` objects](#streams-objectmode-and-info-objects)
* [Formats]
  * [Combining formats](#combining-formats)
  * [String interpolation](#string-interpolation)
  * [Filtering `info` Objects](#filtering-info-objects)
  * [Creating custom formats](#creating-custom-formats)
* [Logging levels]
  * [Using logging levels](#using-logging-levels)
  * [Using custom logging levels](#using-custom-logging-levels)
* [Transports]
  * [Multiple transports of the same type](#multiple-transports-of-the-same-type)
  * [Adding Custom Transports](#adding-custom-transports)
  * [Common Transport options](#common-transport-options)
* [Exceptions](#exceptions)
  * [Handling Uncaught Exceptions with winston](#handling-uncaught-exceptions-with-winston)
  * [To Exit or Not to Exit](#to-exit-or-not-to-exit)
* [Rejections](#rejections)
  * [Handling Uncaught Promise Rejections with winston](#handling-uncaught-promise-rejections-with-winston)
* [Profiling](#profiling)
* [Streaming Logs](#streaming-logs)
* [Querying Logs](#querying-logs)
* [Further Reading](#further-reading)
  * [Using the default logger](#using-the-default-logger)
  * [Awaiting logs to be written in `winston`](#awaiting-logs-to-be-written-in-winston)
  * [Working with multiple Loggers in `winston`](#working-with-multiple-loggers-in-winston)
  * [Routing Console transport messages to the console instead of stdout and stderr](#routing-console-transport-messages-to-the-console-instead-of-stdout-and-stderr)
* [Installation](#installation)
* [Run Tests](#run-tests)

## Logging

Logging levels in `winston` conform to the severity ordering specified by
[RFC5424]: _severity of all levels is assumed to be numerically **ascending**
from most important to least important._

``` js
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
```

### Creating your own Logger
You get started by creating a logger using `winston.createLogger`:

``` js
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

A logger accepts the following parameters:

| Name          | Default                     |  Description    |
| ------------- | --------------------------- | --------------- |
| `level`       | `'info'`                    | Log only if [`info.level`](#streams-objectmode-and-info-objects) is less than or equal to this level  |
| `levels`      | `winston.config.npm.levels` | Levels (and colors) representing log priorities            |
| `format`      | `winston.format.json`       | Formatting for `info` messages  (see: [Formats])           |
| `transports`  | `[]` _(No transports)_      | Set of logging targets for `info` messages                 |
| `exitOnError` | `true`                      | If false, handled exceptions will not cause `process.exit` |
| `silent`      | `false`                     | If true, all logs are suppressed |

The levels provided to `createLogger` will be defined as convenience methods
on the `logger` returned.

``` js
//
// Logging
//
logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

logger.info('Hello again distributed logs');
```

You can add or remove transports from the `logger` once it has been provided
to you from `winston.createLogger`:

``` js
const files = new winston.transports.File({ filename: 'combined.log' });
const console = new winston.transports.Console();

logger
  .clear()          // Remove all transports
  .add(console)     // Add console transport
  .add(files)       // Add file transport
  .remove(console); // Remove console transport
```

You can also wholesale reconfigure a `winston.Logger` instance using the
`configure` method:

``` js
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

//
// Replaces the previous transports with those in the
// new configuration wholesale.
//
const DailyRotateFile = require('winston-daily-rotate-file');
logger.configure({
  level: 'verbose',
  transports: [
    new DailyRotateFile(opts)
  ]
});
```

### Creating child loggers

You can create child loggers from existing loggers to pass metadata overrides:

``` js
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

const childLogger = logger.child({ requestId: '451' });
```
> `.child` is likely to be bugged if you're also extending the `Logger` class, due to some implementation details that make `this` keyword to point to unexpected things. Use with caution.

### Streams, `objectMode`, and `info` objects

In `winston`, both `Logger` and `Transport` instances are treated as
[`objectMode`](https://nodejs.org/api/stream.html#stream_object_mode)
streams that accept an `info` object.

The `info` parameter provided to a given format represents a single log
message. The object itself is mutable. Every `info` must have at least the
`level` and `message` properties:

``` js
const info = {
  level: 'info',                 // Level of the logging message
  message: 'Hey! Log something?' // Descriptive message being logged.
};
```

Properties **besides level and message** are considered as "`meta`". i.e.:

``` js
const { level, message, ...meta } = info;
```

Several of the formats in `logform` itself add additional properties:

| Property    | Format added by | Description |
| ----------- | --------------- | ----------- |
| `splat`     | `splat()`       | String interpolation splat for `%d %s`-style messages. |
| `timestamp` | `timestamp()`   |  timestamp the message was received. |
| `label`     | `label()`       | Custom label associated with each message. |
| `ms`        | `ms()`          | Number of milliseconds since the previous log message. |

As a consumer you may add whatever properties you wish – _internal state is
maintained by `Symbol` properties:_

- `Symbol.for('level')` _**(READ-ONLY)**:_ equal to `level` property.
  **Is treated as immutable by all code.**
- `Symbol.for('message'):` complete string message set by "finalizing formats":
  - `json`
  - `logstash`
  - `printf`
  - `prettyPrint`
  - `simple`
- `Symbol.for('splat')`: additional string interpolation arguments. _Used
  exclusively by `splat()` format._

These Symbols are stored in another package: `triple-beam` so that all
consumers of `logform` can have the same Symbol reference. i.e.:

``` js
const { LEVEL, MESSAGE, SPLAT } = require('triple-beam');

console.log(LEVEL === Symbol.for('level'));
// true

console.log(MESSAGE === Symbol.for('message'));
// true

console.log(SPLAT === Symbol.for('splat'));
// true
```

> **NOTE:** any `{ message }` property in a `meta` object provided will
> automatically be concatenated to any `msg` already provided: For
> example the below will concatenate 'world' onto 'hello':
>
> ``` js
> logger.log('error', 'hello', { message: 'world' });
> logger.info('hello', { message: 'world' });
> ```

## Formats

Formats in `winston` can be accessed from `winston.format`. They are
implemented in [`logform`](https://github.com/winstonjs/logform), a separate
module from `winston`. This allows flexibility when writing your own transports
in case you wish to include a default format with your transport.

In modern versions of `node` template strings are very performant and are the
recommended way for doing most end-user formatting. If you want to bespoke
format your logs, `winston.format.printf` is for you:

``` js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
});
```

To see what built-in formats are available and learn more about creating your
own custom logging formats, see [`logform`][logform].

### Combining formats

Any number of formats may be combined into a single format using
`format.combine`. Since `format.combine` takes no `opts`, as a convenience it
returns pre-created instance of the combined format.

``` js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint()
  ),
  transports: [new transports.Console()]
})

logger.log({
  level: 'info',
  message: 'What time is the testing at?'
});
// Outputs:
// { level: 'info',
//   message: 'What time is the testing at?',
//   label: 'right meow!',
//   timestamp: '2017-09-30T03:57:26.875Z' }
```

### String interpolation

The `log` method provides the string interpolation using [util.format]. **It
must be enabled using `format.splat()`.**

Below is an example that defines a format with string interpolation of
messages using `format.splat` and then serializes the entire `info` message
using `format.simple`.

``` js
const { createLogger, format, transports } = require('winston');
const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [new transports.Console()]
});

// info: test message my string {}
logger.log('info', 'test message %s', 'my string');

// info: test message 123 {}
logger.log('info', 'test message %d', 123);

// info: test message first second {number: 123}
logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });
```

### Filtering `info` Objects

If you wish to filter out a given `info` Object completely when logging then
simply return a falsey value.

``` js
const { createLogger, format, transports } = require('winston');

// Ignore log messages if they have { private: true }
const ignorePrivate = format((info, opts) => {
  if (info.private) { return false; }
  return info;
});

const logger = createLogger({
  format: format.combine(
    ignorePrivate(),
    format.json()
  ),
  transports: [new transports.Console()]
});

// Outputs: {"level":"error","message":"Public error to share"}
logger.log({
  level: 'error',
  message: 'Public error to share'
});

// Messages with { private: true } will not be written when logged.
logger.log({
  private: true,
  level: 'error',
  message: 'This is super secret - hide it.'
});
```

Use of `format.combine` will respect any falsey values return and stop
evaluation of later formats in the series. For example:

``` js
const { format } = require('winston');
const { combine, timestamp, label } = format;

const willNeverThrow = format.combine(
  format(info => { return false })(), // Ignores everything
  format(info => { throw new Error('Never reached') })()
);
```

### Creating custom formats

Formats are prototypal objects (i.e. class instances) that define a single
method: `transform(info, opts)` and return the mutated `info`:

- `info`: an object representing the log message.
- `opts`: setting specific to the current instance of the format.

They are expected to return one of two things:

- **An `info` Object** representing the modified `info` argument. Object
references need not be preserved if immutability is preferred. All current
built-in formats consider `info` mutable, but [immutablejs] is being
considered for future releases.
- **A falsey value** indicating that the `info` argument should be ignored by the
caller. (See: [Filtering `info` Objects](#filtering-info-objects)) below.

`winston.format` is designed to be as simple as possible. To define a new
format, simply pass it a `transform(info, opts)` function to get a new
`Format`.

The named `Format` returned can be used to create as many copies of the given
`Format` as desired:

``` js
const { format } = require('winston');

const volume = format((info, opts) => {
  if (opts.yell) {
    info.message = info.message.toUpperCase();
  } else if (opts.whisper) {
    info.message = info.message.toLowerCase();
  }

  return info;
});

// `volume` is now a function that returns instances of the format.
const scream = volume({ yell: true });
console.dir(scream.transform({
  level: 'info',
  message: `sorry for making you YELL in your head!`
}, scream.options));
// {
//   level: 'info'
//   message: 'SORRY FOR MAKING YOU YELL IN YOUR HEAD!'
// }

// `volume` can be used multiple times to create different formats.
const whisper = volume({ whisper: true });
console.dir(whisper.transform({
  level: 'info',
  message: `WHY ARE THEY MAKING US YELL SO MUCH!`
}, whisper.options));
// {
//   level: 'info'
//   message: 'why are they making us yell so much!'
// }
```

## Logging Levels

Logging levels in `winston` conform to the severity ordering specified by
[RFC5424]: _severity of all levels is assumed to be numerically **ascending**
from most important to least important._

Each `level` is given a specific integer priority. The higher the priority the
more important the message is considered to be, and the lower the
corresponding integer priority.  For example, as specified exactly in RFC5424
the `syslog` levels are prioritized from 0 to 7 (highest to lowest).

```js
{
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
}
```

Similarly, `npm` logging levels are prioritized from 0 to 6 (highest to
lowest):

``` js
{
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
```

If you do not explicitly define the levels that `winston` should use, the
`npm` levels above will be used.

### Using Logging Levels

Setting the level for your logging message can be accomplished in one of two
ways. You can pass a string representing the logging level to the log() method
or use the level specified methods defined on every winston Logger.

``` js
//
// Any logger instance
//
logger.log('silly', "127.0.0.1 - there's no place like home");
logger.log('debug', "127.0.0.1 - there's no place like home");
logger.log('verbose', "127.0.0.1 - there's no place like home");
logger.log('info', "127.0.0.1 - there's no place like home");
logger.log('warn', "127.0.0.1 - there's no place like home");
logger.log('error', "127.0.0.1 - there's no place like home");
logger.info("127.0.0.1 - there's no place like home");
logger.warn("127.0.0.1 - there's no place like home");
logger.error("127.0.0.1 - there's no place like home");

//
// Default logger
//
winston.log('info', "127.0.0.1 - there's no place like home");
winston.info("127.0.0.1 - there's no place like home");
```

`winston` allows you to define a `level` property on each transport which
specifies the **maximum** level of messages that a transport should log. For
example, using the `syslog` levels you could log only `error` messages to the
console and everything `info` and below to a file (which includes `error`
messages):

``` js
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.Console({ level: 'error' }),
    new winston.transports.File({
      filename: 'combined.log',
      level: 'info'
    })
  ]
});
```

You may also dynamically change the log level of a transport:

``` js
const transports = {
  console: new winston.transports.Console({ level: 'warn' }),
  file: new winston.transports.File({ filename: 'combined.log', level: 'error' })
};

const logger = winston.createLogger({
  transports: [
    transports.console,
    transports.file
  ]
});

logger.info('Will not be logged in either transport!');
transports.console.level = 'info';
transports.file.level = 'info';
logger.info('Will be logged in both transports!');
```

`winston` supports customizable logging levels, defaulting to npm style
logging levels. Levels must be specified at the time of creating your logger.

### Using Custom Logging Levels

In addition to the predefined `npm`, `syslog`, and `cli` levels available in
`winston`, you can also choose to define your own:

``` js
const myCustomLevels = {
  levels: {
    foo: 0,
    bar: 1,
    baz: 2,
    foobar: 3
  },
  colors: {
    foo: 'blue',
    bar: 'green',
    baz: 'yellow',
    foobar: 'red'
  }
};

const customLevelLogger = winston.createLogger({
  levels: myCustomLevels.levels
});

customLevelLogger.foobar('some foobar level-ed message');
```

Although there is slight repetition in this data structure, it enables simple
encapsulation if you do not want to have colors. If you do wish to have
colors, in addition to passing the levels to the Logger itself, you must make
winston aware of them:

``` js
winston.addColors(myCustomLevels.colors);
```

This enables loggers using the `colorize` formatter to appropriately color and style
the output of custom levels.

Additionally, you can also change background color and font style.
For example,
``` js
baz: 'italic yellow',
foobar: 'bold red cyanBG'
```

Possible options are below.

* Font styles: `bold`, `dim`, `italic`, `underline`, `inverse`, `hidden`,
  `strikethrough`.

* Font foreground colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`,
  `cyan`, `white`, `gray`, `grey`.

* Background colors: `blackBG`, `redBG`, `greenBG`, `yellowBG`, `blueBG`
  `magentaBG`, `cyanBG`, `whiteBG`

### Colorizing Standard logging levels

To colorize the standard logging level add
```js
winston.format.combine(
  winston.format.colorize(),
  winston.format.simple()
);
```
where `winston.format.simple()` is whatever other formatter you want to use.  The `colorize` formatter must come before any formatters adding text you wish to color.

### Colorizing full log line when json formatting logs

To colorize the full log line with the json formatter you can apply the following

```js
winston.format.combine(
  winston.format.json(),
  winston.format.colorize({ all: true })
);
```

## Transports

There are several [core transports] included in  `winston`, which leverage the
built-in networking and file I/O offered by Node.js core. In addition, there
are [additional transports] written by members of the community.

## Multiple transports of the same type

It is possible to use multiple transports of the same type e.g.
`winston.transports.File` when you construct the transport.

``` js
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'combined.log',
      level: 'info'
    }),
    new winston.transports.File({
      filename: 'errors.log',
      level: 'error'
    })
  ]
});
```

If you later want to remove one of these transports you can do so by using the
transport itself. e.g.:

``` js
const combinedLogs = logger.transports.find(transport => {
  return transport.filename === 'combined.log'
});

logger.remove(combinedLogs);
```

## Adding Custom Transports

Adding a custom transport is easy. All you need to do is accept any options
you need, implement a log() method, and consume it with `winston`.

``` js
const Transport = require('winston-transport');
const util = require('util');

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
module.exports = class YourCustomTransport extends Transport {
  constructor(opts) {
    super(opts);
    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail,
    //   logentries, etc.).
    //
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    // Perform the writing to the remote service
    callback();
  }
};
```

## Common Transport options

As every transport inherits from [winston-transport], it's possible to set
a custom format and a custom log level on each transport separately:

``` js
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      format: winston.format.json()
    }),
    new winston.transports.Http({
      level: 'warn',
      format: winston.format.json()
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});
```

## Exceptions

### Handling Uncaught Exceptions with winston

With `winston`, it is possible to catch and log `uncaughtException` events
from your process. With your own logger instance you can enable this behavior
when it's created or later on in your applications lifecycle:

``` js
const { createLogger, transports } = require('winston');

// Enable exception handling when you create your logger.
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' })
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});

// Or enable it later on by adding a transport or using `.exceptions.handle`
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' })
  ]
});

// Call exceptions.handle with a transport to handle exceptions
logger.exceptions.handle(
  new transports.File({ filename: 'exceptions.log' })
);
```

If you want to use this feature with the default logger, simply call
`.exceptions.handle()` with a transport instance.

``` js
//
// You can add a separate exception logger by passing it to `.exceptions.handle`
//
winston.exceptions.handle(
  new winston.transports.File({ filename: 'path/to/exceptions.log' })
);

//
// Alternatively you can set `handleExceptions` to true when adding transports
// to winston.
//
winston.add(new winston.transports.File({
  filename: 'path/to/combined.log',
  handleExceptions: true
}));
```

### To Exit or Not to Exit

By default, winston will exit after logging an uncaughtException. If this is
not the behavior you want, set `exitOnError = false`

``` js
const logger = winston.createLogger({ exitOnError: false });

//
// or, like this:
//
logger.exitOnError = false;
```

When working with custom logger instances, you can pass in separate transports
to the `exceptionHandlers` property or set `handleExceptions` on any
transport.

##### Example 1

``` js
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'path/to/combined.log' })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'path/to/exceptions.log' })
  ]
});
```

##### Example 2

``` js
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true
    })
  ],
  exitOnError: false
});
```

The `exitOnError` option can also be a function to prevent exit on only
certain types of errors:

``` js
function ignoreEpipe(err) {
  return err.code !== 'EPIPE';
}

const logger = winston.createLogger({ exitOnError: ignoreEpipe });

//
// or, like this:
//
logger.exitOnError = ignoreEpipe;
```

## Rejections

### Handling Uncaught Promise Rejections with winston

With `winston`, it is possible to catch and log `unhandledRejection` events
from your process. With your own logger instance you can enable this behavior
when it's created or later on in your applications lifecycle:

``` js
const { createLogger, transports } = require('winston');

// Enable rejection handling when you create your logger.
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' })
  ],
  rejectionHandlers: [
    new transports.File({ filename: 'rejections.log' })
  ]
});

// Or enable it later on by adding a transport or using `.rejections.handle`
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' })
  ]
});

// Call rejections.handle with a transport to handle rejections
logger.rejections.handle(
  new transports.File({ filename: 'rejections.log' })
);
```

If you want to use this feature with the default logger, simply call
`.rejections.handle()` with a transport instance.

``` js
//
// You can add a separate rejection logger by passing it to `.rejections.handle`
//
winston.rejections.handle(
  new winston.transports.File({ filename: 'path/to/rejections.log' })
);

//
// Alternatively you can set `handleRejections` to true when adding transports
// to winston.
//
winston.add(new winston.transports.File({
  filename: 'path/to/combined.log',
  handleRejections: true
}));
```

## Profiling

In addition to logging messages and metadata, `winston` also has a simple
profiling mechanism implemented for any logger:

``` js
//
// Start profile of 'test'
//
logger.profile('test');

setTimeout(function () {
  //
  // Stop profile of 'test'. Logging will now take place:
  //   '17 Jan 21:00:00 - info: test duration=1000ms'
  //
  logger.profile('test');
}, 1000);
```

Also you can start a timer and keep a reference that you can call `.done()`
on:

``` js
 // Returns an object corresponding to a specific timing. When done
 // is called the timer will finish and log the duration. e.g.:
 //
 const profiler = logger.startTimer();
 setTimeout(function () {
   profiler.done({ message: 'Logging message' });
 }, 1000);
```

All profile messages are set to 'info' level by default, and both message and
metadata are optional.  For individual profile messages, you can override the default log level by supplying a metadata object with a `level` property:

```js
logger.profile('test', { level: 'debug' });
```

## Querying Logs

`winston` supports querying of logs with Loggly-like options. [See Loggly
Search API](https://www.loggly.com/docs/api-retrieving-data/). Specifically:
`File`, `Couchdb`, `Redis`, `Loggly`, `Nssocket`, and `Http`.

``` js
const options = {
  from: new Date() - (24 * 60 * 60 * 1000),
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};

//
// Find items logged between today and yesterday.
//
logger.query(options, function (err, results) {
  if (err) {
    /* TODO: handle me */
    throw err;
  }

  console.log(results);
});
```

## Streaming Logs
Streaming allows you to stream your logs back from your chosen transport.

``` js
//
// Start at the end.
//
winston.stream({ start: -1 }).on('log', function(log) {
  console.log(log);
});
```

## Further Reading

### Using the Default Logger

The default logger is accessible through the `winston` module directly. Any
method that you could call on an instance of a logger is available on the
default logger:

``` js
const winston = require('winston');

winston.log('info', 'Hello distributed log files!');
winston.info('Hello again distributed logs');

winston.level = 'debug';
winston.log('debug', 'Now my debug messages are written to console!');
```

By default, no transports are set on the default logger. You must
add or remove transports via the `add()` and `remove()` methods:

``` js
const files = new winston.transports.File({ filename: 'combined.log' });
const console = new winston.transports.Console();

winston.add(console);
winston.add(files);
winston.remove(console);
```

Or do it with one call to configure():

``` js
winston.configure({
  transports: [
    new winston.transports.File({ filename: 'somefile.log' })
  ]
});
```

For more documentation about working with each individual transport supported
by `winston` see the [`winston` Transports](docs/transports.md) document.

### Awaiting logs to be written in `winston`

Often it is useful to wait for your logs to be written before exiting the
process. Each instance of `winston.Logger` is also a [Node.js stream]. A
`finish` event will be raised when all logs have flushed to all transports
after the stream has been ended.

``` js
const transport = new winston.transports.Console();
const logger = winston.createLogger({
  transports: [transport]
});

logger.on('finish', function (info) {
  // All `info` log messages has now been logged
});

logger.info('CHILL WINSTON!', { seriously: true });
logger.end();
```

It is also worth mentioning that the logger also emits an 'error' event
if an error occurs within the logger itself which
you should handle or suppress if you don't want unhandled exceptions:

``` js
//
// Handle errors originating in the logger itself
//
logger.on('error', function (err) { /* Do Something */ });
```

### Working with multiple Loggers in winston

Often in larger, more complex, applications it is necessary to have multiple
logger instances with different settings. Each logger is responsible for a
different feature area (or category). This is exposed in `winston` in two
ways: through `winston.loggers` and instances of `winston.Container`. In fact,
`winston.loggers` is just a predefined instance of `winston.Container`:

``` js
const winston = require('winston');
const { format } = winston;
const { combine, label, json } = format;

//
// Configure the logger for `category1`
//
winston.loggers.add('category1', {
  format: combine(
    label({ label: 'category one' }),
    json()
  ),
  transports: [
    new winston.transports.Console({ level: 'silly' }),
    new winston.transports.File({ filename: 'somefile.log' })
  ]
});

//
// Configure the logger for `category2`
//
winston.loggers.add('category2', {
  format: combine(
    label({ label: 'category two' }),
    json()
  ),
  transports: [
    new winston.transports.Http({ host: 'localhost', port:8080 })
  ]
});
```

Now that your loggers are setup, you can require winston _in any file in your
application_ and access these pre-configured loggers:

``` js
const winston = require('winston');

//
// Grab your preconfigured loggers
//
const category1 = winston.loggers.get('category1');
const category2 = winston.loggers.get('category2');

category1.info('logging to file and console transports');
category2.info('logging to http transport');
```

If you prefer to manage the `Container` yourself, you can simply instantiate one:

``` js
const winston = require('winston');
const { format } = winston;
const { combine, label, json } = format;

const container = new winston.Container();

container.add('category1', {
  format: combine(
    label({ label: 'category one' }),
    json()
  ),
  transports: [
    new winston.transports.Console({ level: 'silly' }),
    new winston.transports.File({ filename: 'somefile.log' })
  ]
});

const category1 = container.get('category1');
category1.info('logging to file and console transports');
```

### Routing Console transport messages to the console instead of stdout and stderr

By default the `winston.transports.Console` transport sends messages to `stdout` and `stderr`. This
is fine in most situations; however, there are some cases where this isn't desirable, including:

- Debugging using VSCode and attaching to, rather than launching, a Node.js process
- Writing JSON format messages in AWS Lambda
- Logging during Jest tests with the `--silent` option

To make the transport log use `console.log()`, `console.warn()` and `console.error()`
instead, set the `forceConsole` option to `true`:

```js
const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console({ forceConsole: true })]
});
```

## Installation

``` bash
npm install winston
```

``` bash
yarn add winston
```

## Run Tests

``` bash
npm test # Runs all tests
npm run test:unit # Runs all Unit tests with coverage
npm run test:integration # Runs all integration tests
npm run test:typescript # Runs tests verifying Typescript types
```

All of the winston tests are written with [jest]. Assertions use a mix of [assume] and the built-in jest assertion library.

#### Author: [Charlie Robbins]
#### Contributors: [Jarrett Cruger], [David Hyde], [Chris Alderson], [Jonathon Terry]

[Transports]: #transports
[Logging levels]: #logging-levels
[Formats]: #formats
[Using custom logging levels]: #using-custom-logging-levels
[Adding Custom Transports]: #adding-custom-transports
[core transports]: docs/transports.md#winston-core
[additional transports]: docs/transports.md#additional-transports

[RFC5424]: https://tools.ietf.org/html/rfc5424
[util.format]: https://nodejs.org/dist/latest/docs/api/util.html#util_util_format_format_args
[assume]: https://github.com/bigpipe/assume
[logform]: https://github.com/winstonjs/logform#readme
[winston-transport]: https://github.com/winstonjs/winston-transport
[jest]: https://jestjs.io/

[Read the `winston@2.x` documentation]: https://github.com/winstonjs/winston/tree/2.x

[quick-example]: https://github.com/winstonjs/winston/blob/master/examples/quick-start.js
[examples]: https://github.com/winstonjs/winston/tree/master/examples

[Charlie Robbins]: http://github.com/indexzero
[Jarrett Cruger]: https://github.com/jcrugzz
[David Hyde]: https://github.com/dabh
[Chris Alderson]: https://github.com/chrisalderson
[Jonathon Terry]: https://github.com/maverick1872



================================================
FILE: CHANGELOG.md
================================================
# CHANGELOG

## [v3.9.0](https://github.com/winstonjs/winston/compare/v3.8.2...v3.9.0)
### Functionality changes
* Handle undefined errors in getAllInfo in exception-handler in https://github.com/winstonjs/winston/pull/2208; thanks to new contributor @eivindrs
* fix: properly allow passing non-array transport in https://github.com/winstonjs/winston/pull/2256; thanks to new contributor @Tanuel
* fix #1732 (Http Transport uses JSON format options as request options) in https://github.com/winstonjs/winston/pull/2272; thanks to new contributor @MoritzLoewenstein (minor version bump per comment on the issue)
* fix: add guard clause to prevent FD leak in https://github.com/winstonjs/winston/pull/2301; thanks to new contributor @td-tomasz-joniec

### Dependency updates by @dependabot + CI autotesting
* Bump eslint from 8.23.0 to 8.32.0 by @dependabot in https://github.com/winstonjs/winston/pull/2209, https://github.com/winstonjs/winston/pull/2236, https://github.com/winstonjs/winston/pull/2258, & https://github.com/winstonjs/winston/pull/2271
* Bump @babel/core from 7.19.0 to 7.20.12 by @dependabot in https://github.com/winstonjs/winston/pull/2206, https://github.com/winstonjs/winston/pull/2234, https://github.com/winstonjs/winston/pull/2259, & https://github.com/winstonjs/winston/pull/2275
* Bump @types/node from 18.0.0 to 18.11.18 by @dependabot in https://github.com/winstonjs/winston/pull/2215, https://github.com/winstonjs/winston/pull/2235, & https://github.com/winstonjs/winston/pull/2264
* Bump @babel/preset-env from 7.19.0 to 7.20.2 by @dependabot in https://github.com/winstonjs/winston/pull/2218 & https://github.com/winstonjs/winston/pull/2244
* Bump safe-stable-stringify from 2.3.1 to 2.4.3 by @dependabot in https://github.com/winstonjs/winston/pull/2217 & https://github.com/winstonjs/winston/pull/2292
* Bump @babel/cli from 7.18.10 to 7.19.3 by @dependabot in https://github.com/winstonjs/winston/pull/2216
* Bump json5 from 2.2.1 to 2.2.3 by @dependabot in https://github.com/winstonjs/winston/pull/2260

### Documentation changes
* Fix readme typo in https://github.com/winstonjs/winston/pull/2230; thanks to new contributor @aretecode
* create new example for ready to use in https://github.com/winstonjs/winston/pull/2240; thanks to new contributor @myagizmaktav
* minor fixes to publishing.md

### Build Infrastructure changes
* GitHub Workflows security hardening in https://github.com/winstonjs/winston/pull/2252; thanks to new contributor @sashashura

## [v3.8.2](https://github.com/winstonjs/winston/compare/v3.8.1...v3.8.2)
### Patch-level changes
* Add `.js` to main entry point in package.json in https://github.com/winstonjs/winston/pull/2177; thanks to new contributor @rumanbsl
* Small grammatical fixes in README.md in https://github.com/winstonjs/winston/pull/2183; thanks to new contributor @mikebarr24
* Move colors to non-dev dependencies by @wbt in https://github.com/winstonjs/winston/pull/2190

### Dependency updates by @dependabot + CI autotesting
* Bump @babel/preset-env from 7.18.2 to 7.19.0 in https://github.com/winstonjs/winston/pull/2189
* Bump @babel/cli from 7.17.10 to 7.18.10 in https://github.com/winstonjs/winston/pull/2173
* Bump eslint from 8.18.0 to 8.23.0 in https://github.com/winstonjs/winston/pull/2184
* Bump @babel/core from 7.18.5 to 7.19.0 in https://github.com/winstonjs/winston/pull/2192
* Bump logform from 2.4.1 to 2.4.2 in https://github.com/winstonjs/winston/pull/2191

## [v3.8.1](https://github.com/winstonjs/winston/compare/v3.8.0...v3.8.1)

### Patch-level changes
* Update types to match in-code definitions in https://github.com/winstonjs/winston/pull/2157; thanks to new contributor @flappyBug

### Dependency updates by @dependabot + CI autotesting
* Bump logform from 2.4.0 to 2.4.1 in https://github.com/winstonjs/winston/pull/2156
* Bump async from 3.2.3 to 3.2.4 in https://github.com/winstonjs/winston/pull/2147
## [v3.8.0](https://github.com/winstonjs/winston/compare/v3.7.2...v3.8.0) / 2022-06-23
### Added functionality
* Add the stringify replacer option to the HTTP transport by @domiins in https://github.com/winstonjs/winston/pull/2155

### Dependency updates by @dependabot + CI autotesting
* Bump @babel/core from 7.17.8 to 7.18.5
* Bump eslint from 8.12.0 to 8.18.0
* Bump @types/node from 17.0.23 to 18.0.0
* Bump @babel/preset-env from 7.16.11 to 7.18.2
* Bump @babel/cli from 7.17.6 to 7.17.10

### Updates facilitating repo maintenance & enhancing documentation
* Explicitly note that the Contributing.md file is out of date
* Add instructions for publishing updated version by @wbt (docs/publishing.md)
* Prettier Config File by @jeanpierrecarvalho in https://github.com/winstonjs/winston/pull/2092
* Readme update to explain origin of errors for handling (#2120)
* update documentation for #2114 by @zizifn in https://github.com/winstonjs/winston/pull/2138
* enhance message for logs with no transports #2114 by @zizifn in https://github.com/winstonjs/winston/pull/2139
* Added a new Community Transport option to the list: Worker Thread based async Console Transport by @arpad1337 in https://github.com/winstonjs/winston/pull/2140

Thanks especially to new contributors @zizifn, @arpad1337, @domiins, & @jeanpierrecarvalho!

## v3.7.2 / 2022-04-04
This change reverts what should have been the feature-level update in 3.7.0 due to issue #2103 showing this to be breaking, unintentionally.

## v3.7.1 / 2022-04-04
This change includes some minor updates to package-lock.json resolving npm audit failures: one in [ansi-regex](https://github.com/advisories/GHSA-93q8-gq69-wqmw) and another in [minimist](https://github.com/advisories/GHSA-xvch-5gv4-984h).

## v3.7.0 / 2022-03-30

Feature-level updates:
- [#1989] Fix: resolve issues with metadata and the associated overriding behavior (thanks @maverick1872, @wbt, @DABH, @fearphage and issue reporters)

Patch-level updates:
- [#2075] Fix: add missing types for batching options for HTTP Transport (thanks @KylinDC)
- Various dependencies updated, quality of life & maintainability changes, etc

## v3.6.0 / 2022-02-12

- [#2057] Fix potential memory leak by not waiting for `process.nextTick` before clearing pending callbacks (thanks @smashah!)
- [#2071] Update to `logform` 2.4.0, which includes changes such as new options for `JsonOptions` and some typo fixes regarding levels
- Various other dependencies are updated, tests are reorganized and cleaned up, etc. (thanks @wbt, @Maverick1872, @fearphage!)

## v3.5.1 / 2022-01-31

This release reverts the changes made in PR #1896 which added stricter typing to the available log levels,
and inadvertently broke use of custom levels with TypeScript (Issue #2047). Apologies for that!

## v3.5.0 / 2022-01-27

This release includes the following, in sequence by first merge in group:

Feature updates:
 -	Support batch mode in HTTP Transport (Issue #1970, PR #1998, thanks @BBE78!)

Patch-level updates:
 -	Bump dependency versions (thanks @dependabot & @DABH!)
    -	Bump @types/node from 16.11.12 to 17.0.8 (PR #2009)
    -	Bump @babel/preset-env from 7.16.7 to 7.16.8 (#2036)
    -	Bump @types/node from 17.0.8 to 17.0.9 (#2035)
    -	Bump @babel/cli from 7.16.7 to 7.16.8 (#2034)
    -	Bump @types/node from 17.0.9 to 17.0.10 (#2042)
    -	Bump @babel/core from 7.16.7 to 7.16.12 (#2041)
    -	Bump @babel/preset-env from 7.16.8 to 7.16.11 (#2040)
 -	Fixing documentation syntax errors in transports code examples (#1916; thanks @romanzaycev!)
 -	Fix missing type declarations, especially for `.rejections`
 (#1842, #1929, #2021; thanks @vanflux, @svaj, @glensc, & others!)
 -	More narrowly typing the “level” string (#1896, thanks @yonas-g!)
 -	Using a safer `stringify`, e.g. to avoid issues from circular structures, in the http transport
 (#2043, thanks @karlwir!)

Updates to the repo & project which don’t actually affect the running code:
 -	Add a channel for reporting security vulnerabilities (#2024, thanks @JamieSlome!)
 -	Add coverage tracking in CI & documentation (#2025 and #2028, thanks @fearphage!)
 -	Update issue templates (#2030 and #2031, thanks @Maverick1872!)
 -	Remove gitter link from README.md (#2027, thanks @DABH!)

Thanks also to maintainers @DABH, @fearphage, @Maverick1872, and @wbt for issue/PR shepherding
and help across multiple parts of the release!
If somebody got missed in the list of thanks, please forgive the accidental oversight
and/or feel free to open a PR on this changelog.

## v3.4.0 / 2022-01-10

Yesterday's release was done with a higher sense of urgency than usual
due to vandalism in the `colors` package.
This release:

 - ties up a loose end by including [#1973] to go with [#1824]
 - adds a missing http property in NpmConfigSetColors [#2004] (thanks @SimDaSong)
 - fixes a minor issue in the build/release process [#2014]
 - pins the version of the testing framework to avoid an issue with a test incorrectly failing [#2017]

The biggest change in this release, motivating the feature-level update, is
[#2006] Make winston more ESM friendly, thanks to @miguelcobain.

Thanks also to @DABH, @wbt, and @fearphage for contributions and reviews!

## v3.3.4 / 2022-01-09

Compared to v3.3.3, this version fixes some issues and includes some updates to project infrastructure,
such as replacing Travis with Github CI and dependabot configuration.
There have also been several relatively minor improvements to documentation, and incorporation of some updated dependencies.
Dependency updates include a critical bug fix [#2008] in response to self-vandalism by the author of a dependency.

- [#1964] Added documentation for how to use a new externally maintained [Seq](https://datalust.co/seq) transport.
- [#1712] Add default metadata when calling log with string level and message.
- [#1824] Unbind event listeners on close
- [#1961] Handle undefined rejections
- [#1878] Correct boolean evaluation of empty-string value for eol option
- [#1977] Improved consistency of object parameters for better test reliability

## v3.3.3 / 2020-06-23

- [#1820] Revert [#1807] to resolve breaking changes for Typescript users.

## v3.3.2 / 2020-06-22

- [#1814] Use a fork of `diagnostics` published to NPM to avoid git dependency.

## v3.3.1 / 2020-06-21

- [#1803], [#1807] Fix TypeScript bugs.
- [#1740] Add space between `info.message` and `meta.message`.
- [#1813] Avoid indirect storage-engine dependency.
- [#1810] README updates.

## v3.3.0 / 2020-06-21

- [#1779] Fix property name in rejection handler.
- [#1768] Exclude extraneous files from NPM package.
- [#1364], [#1714] Don't remove transport from logger when transport error
  occurs.
- [#1603] Expose `child` property on default logger.
- [#1777] Allow HTTP transport to pass options to request.
- [#1662] Add bearer auth capabilities to HTTP transport.
- [#1612] Remove no-op in file transport.
- [#1622], [#1623], [#1625] Typescript fixes.
- (Minor) [#1647], [#1793] Update CI settings.
- (Minor) [#1600], [#1605], [#1593], [#1610], [#1654], [#1656], [#1661],
  [#1651], [#1652], [#1677], [#1683], [#1684], [#1700], [#1697], [#1650],
  [#1705], [#1723], [#1737], [#1733], [#1743], [#1750], [#1754], [#1780],
  [#1778] README, Transports.md, other docs changes.
- [#1672], [#1686], [#1772] Update dependencies.

## v3.2.1 / 2019-01-29
### UNBOUND PROTOTYPE AD INFINITUM EDITION

- #[1579], (@indexzero)  Fallback to the "root" instance **always** created by
  `createLogger` for level convenience methods (e.g. `.info()`, `.silly()`).
  (Fixes [#1577]).
- [#1539], (@indexzero) Assume message is the empty string when level-helper
  methods are invoked with no arguments (Fixed [#1501]).
- [#1583], (@kibertoad) Add typings for defaultMeta (Fixes [#1582])
- [#1586], (@kibertoad) Update dependencies.

## v3.2.0 / 2019-01-26
### SORRY IT TOO SO LONG EDITION

> **NOTE:** this was our first release using Github Projects. See the
> [3.2.0 Release Project](https://github.com/orgs/winstonjs/projects/3).

### New Features!

- [#1471], (@kibertoad) Implement child loggers.
- [#1462], (@drazisil) Add handleRejection support.
  - [#1555], (@DABH) Add fixes from [#1355] to unhandled rejection handler.
- [#1418], (@mfrisbey) Precompile ES6 syntax before publishing to npm.
  - [#1533], (@kibertoad) Update to Babel 7.
- [#1562], (@indexzero) [fix] Better handling of `new Error(string)`
  throughout the pipeline(s). (Fixes [#1338], [#1486]).

### Bug Fixes

- [#1355], (@DABH) Fix issues with ExceptionHandler (Fixes [#1289]).
- [#1463], (@SerayaEryn) Bubble transport `warn` events up to logger in
  addition to `error`s.
- [#1480], [#1503], (@SerayaEryn) File tailrolling fix.
- [#1483], (@soldair) Assign log levels to un-bound functions.
- [#1513], (@TilaTheHun0) Set maxListeners for Console transport.
- [#1521], (@jamesbechet) Fix Transform from `readable-stream` using CRA.
- [#1434], (@Kouzukii) Fixes logger.query function (regression from `3.0.0`)
- [#1526], (@pixtron) Log file without .gz for tailable (Fixes [#1525]).
- [#1559], (@eubnara) Fix typo related to `exitOnError`.
- [#1556], (@adoyle-h) Support to create log directory if it doesn't exist
  for FileTransport.

#### New `splat` behavior

- [#1552], (@indexzero) Consistent handling of meta with (and without)
  interpolation in `winston` and `logform`.
- [#1499], (@DABH) Provide all of `SPLAT` to formats (Fixes [#1485]).
- [#1485], (@mpabst) Fixing off-by-one when using both meta and splat.

Previously `splat` would have added a `meta` property for any additional
`info[SPLAT]` beyond the expected number of tokens.

**As of `logform@2.0.0`,** `format.splat` assumes additional splat paramters
(aka "metas") are objects and merges enumerable properties into the `info`.
e.g. **BE ADVISED** previous "metas" that _were not objects_ will very likely
lead to odd behavior. e.g.

``` js
const { createLogger, format, transports } = require('winston');
const { splat } = format;
const { MESSAGE, LEVEL, SPLAT } = require('triple-beam');

const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.json()
  ),
  transports: [new transports.Console()]
});

// Expects two tokens, but four splat parameters provided.
logger.info(
  'Let us %s for %j',   // message
  'objects',           // used for %s
  { label: 'sure' },   // used for %j
  'lol', ['ok', 'why'] // Multiple additional meta values
);

// winston < 3.2.0 && logform@1.x behavior:
// Added "meta" property.
//
// { level: 'info',
//   message: 'Let us objects for {"label":"sure"}',
//   meta: ['lol', ['ok', 'why']],
//   [Symbol(level)]: 'info',
//   [Symbol(message)]: 'Let us %s for %j',
//   [Symbol(splat)]: [ 'objects', { label: 'sure' } ] }

// winston >= 3.2.0 && logform@2.x behavior: Enumerable properties
// assigned into `info`. Since **strings and Arrays only have NUMERIC
// enumerable properties we get this behavior!**
//
// { '0': 'ok',
//   '1': 'why',
//   '2': 'l',
//   level: 'info',
//   message: 'Let us objects for {"label":"sure"}',
//   [Symbol(level)]: 'info',
//   [Symbol(message)]: 'Let us %s for %j',
//   [Symbol(splat)]: [ 'objects', { label: 'sure' } ] }
```

## Maintenance & Documentation

- Documentation Updates
  - [#1410], (@hakanostrom) Add docs reference to transport for Cloudant.
  - [#1467], (@SeryaEryn) Add fast-file-rotate transport to transport.md.
  - [#1488], (@adamcohen) Fix multi logger documentation.
  - [#1531], (@mapleeit) Add links to transports.
  - [#1548], (@ejmartin504) Fix `README.md` for awaiting logs.
  - [#1554], (@indexzero) Document the solution to [#1486] as by design.
  - Other small improvements: [#1509].
- Improved TypeScript support
  - [#1470], (@jd-carroll) Export all transport options (Fixes [#1469]).
  - [#1474], (@jd-carroll) Correct import to avoid conflict (Fixed [#1472]).
  - [#1546], (@alewiahmed) Add consoleWarnLevels field to the
    `ConsoleTransportOptions` interface type definition.
  - [#1557], (@negezor) Add missing `child()` method.
- Dependency management
  - [#1560], (@kibertoad) Update dependencies.
  - [#1512], (@SerayaEryn) Add node@11 and disallow failures on node@10.
  - [#1516], (@SerayaEryn) Update `readable-stream` to `v3.0.6`.
  - [#1534], (@kibertoad) Update `@types/node`, `nyc`, and `through2`.

## v3.1.0 / 2018-08-22
### RELEASES ON A PLANE EDITION

- Minor TypeScript fixes [#1362], [#1395], [#1440]
- Fix minor typos [#1359], [#1363], [#1372], [#1378], [#1390]
- [#1373], (@revik): Add `consoleWarnLevels` property to console transport options for `console.warn` browser support.
- [#1394], (@bzoz): Fix tests on Windows.
- [#1447], (@dboshardy): Support transport name option to override default names for built-in transports.
- [#1420], (@ledbit): Fix file rotation with `tailing: true` (Fixes [#1450], [#1194]).
- [#1352], (@lutovich): Add `isLevelEnabled(string)` & `isXXXEnabled()` to `Logger` class.
- Dependency management
  - Regenerate `package-lock.json`.
  - Upgrade to `colors@^1.3.2` (Fixes [#1439]).
  - Upgrade to `logform@^1.9.1`.
  - Upgrade to `diagnostics@^1.1.1`.
  - Upgrade to `@types/node@^10.9.3`.
  - Upgrade to `assume@^2.1.0`.
  - Upgrade to `hock@^1.3.3`.
  - Upgrade to `mocha@^5.2.0`.
  - Upgrade to `nyc@^13.0.1`.
  - Upgrade to `split2@^3.0.0`.

## v3.0.0 / 2018-06-12
### GET IN THE CHOPPA EDITION

- [#1332], (@DABH): logger.debug is sent to stderr (Fixed [#1024])
- [#1328], (@ChrisAlderson): Logger level doesn't update transports level (Fixes [#1191]).
- [#1356], (@indexzero) Move splat functionality into logform. (Fixes [#1298]).
- [#1340], (@indexzero): Check log.length when evaluating "legacyness" of transports (Fixes [#1280]).
- [#1346], (@indexzero): Implement `_final` from Node.js streams. (Related to winston-transport#24, Fixes [#1250]).
- [#1347], (@indexzero): Wrap calls to `format.transform` with try / catch (Fixes [#1261]).
- [#1357], (@indexzero): Remove paddings as we have no use for it in the current API.
- [TODO]: REMAINS OPEN, NO PR (Fixes [#1289])
- Documentation
  - [#1301], (@westonpace) Cleaned up some of the documentation on `colorize`
    to address concerns in [#1095].
  - First pass at a heavy refactor of `docs/transports.md`.
- Dependency management
  - Regenerate `package-lock.json`.
  - Upgrade to `logform@^1.9.0`.

## v3.0.0-rc6 / 2018-05-30
### T-MINUS 6-DAY TO WINSTON@3 EDITION

- **Document that we are pushing for a June 5th, 2018 release of `winston@3.0.0`**
- [#1287], (@DABH) Added types for Typescript.
  - [#1335] Typescript: silent is boolean.
  - [#1323] Add level method to default logger.
- [#1286], (@ChrisAlderson) Migrate codebase to ES6
  - [#1324], (@ChrisAlderson) Fix regression introduced by ES6 migration for
    exception handling.
  - [#1333], (@ChrisAlderson) Fix removing all loggers from a container.
- [#1291], [#1294], [#1318], (@indexzero, @ChrisAlderson, @mempf) Improvements
  to `File` transport core functionality. Fixes [#1194].
- [#1311], (@ChrisAlderson) Add `eol` option to `Stream` transport.
- [#1297], (@ChrisAlderson) Move `winston.config` to `triple-beam`. Expose
  for backwards compatibility.
- [#1320], (@ChrisAlderson) Enhance tests to run on Windows.
- Internal project maintenance
  - Bump to `winston-transport@4.0.0` which may cause incompatibilities if
    your custom transport does not explicitly require `winston-transport`
    itself.
  - [#1292], (@ChrisAlderson) Add node v10 to TravisCI build matrix.
  - [#1296], (@indexzero) Improve `UPGRADE-3.0.md`. Add Github Issue Template.
  - Remove "npm run report" in favor of reports being automatically generate.
  - Update `logform`, `triple-beam`, and `winston-transport` to latest.

> Special thanks to our newest `winston` core team member – @ChrisAlderson for
> helping make `winston@3.0.0` a reality next week!

## v3.0.0-rc5 / 2018-04-20
### UNOFFICIAL NATIONAL HOLIDAY EDITION

- [#1281] Use `Buffer.alloc` and `Buffer.from` instead of `new Buffer`.
- Better browser support
  - [#1142] Move common tailFile to a separate file
  - [#1279] Use feature detection to be safer for browser usage.
- MOAR Docs!
  - **Document that we are pushing for a May 29th, 2018 release of `winston@3.0.0`**
  - **Add David Hyde as official contributor.**
  - [#1278] Final Draft of Upgrade Guide in `UPGRADE-3.0.md`
  - Merge Roadmap from `3.0.0.md` into `CONTRIBUTING.md` and other
    improvements to `CONTRIBUTING.md`
- Improve & expand examples
  - [#1175] Add more copy about printf formats based on issue feedback.
  - [#1134] Add sampleto document timestamps more clearly as an example.
  - [#1273] Add example using multiple formats.
  - [#1250] Add an example illustrating the "finish" event for AWS Lambda scenarios.
  - Use simple format to better show that `humanReadableUnhandledException` is now the default message format.
  - Add example to illustrate that example code from winston-transport
    `README.md` is correct.
- Update `devDependencies`
  - Bump `assume` to `^2.0.1`.
  - Bump `winston-compat` to `^0.1.1`.

## v3.0.0-rc4 / 2018-04-06
### IF A TREE FALLS IN THE FORREST DOES IT MAKE A LOG EDITION

- (@indexzero, @dabh) Add support for `{ silent }` option to
``` js
require('winston').Logger;
require('winston-transport').TransportStream;
```
- Better browser support
  - [#1145], (@Jasu) Replace `isstream` with `is-stream` to make stream detection work in browser.
  - [#1146], (@Jasu) Rename query to different than function name, to support Babel 6.26.
- Better Typescript support in all supporting libraries
  - `logform@1.4.1`
- Update documentation
  - (@indexzero) Correct link to upgrade guide. Fixes #1255.
  - [#1258], (@morenoh149) Document how to colorize levels. Fixes #1135.
  - [#1246], (@KlemenPlazar) Update colors argument when adding custom colors
  - Update `CONTRIBUTING.md`
  - [#1239], (@dabh) Add changelog entries for `v3.0.0-rc3`
  - Add example showing that `{ level }` can be deleted from info objects because `Symbol.for('level')` is what `winston` uses internally. Fixes #1184.

## v3.0.0-rc3 / 2018-03-16
### I GOT NOTHING EDITION

- [#1195], (@Nilegfx) Fix type error when creating `new stream.Stream()`
- [#1109], (@vsetka) Fix file transprot bug where `self.filename` was not being updated on `ENOENT`
- [#1153], (@wizardnet972) Make prototype methods return like the original method
- [#1234], (@guiguan, @indexzero) Add tests for properly handling logging of `undefined`, `null` and `Error` values
- [#1235], (@indexzero) Add example demonstrating how `meta` objects BECOME the `info` object
- Minor fixes to docs & examples: [#1232], [#1185]

## v3.0.0-rc2 / 2018-03-09
### MAINTENANCE RESUMES EDITION

- [#1209], (@dabh) Use new version of colors, solving a number of issues.
- [#1197], (@indexzero) Roadmap & guidelines for contributors.
- [#1100] Require the package.json by its full name.
- [#1149] Updates `async` to latest (`2.6.0`)
- [#1228], (@mcollina) Always pass a function to `fs.close`.
- Minor fixes to docs & examples: [#1177], [#1182], [#1208], [#1198], [#1165], [#1110], [#1117], [#1097], [#1155], [#1084], [#1141], [#1210], [#1223].

## v3.0.0-rc1 / 2017-10-19
### OMG THEY FORGOT TO NAME IT EDITION

 - Fix file transport improper binding of `_onDrain` and `_onError` [#1104](https://github.com/winstonjs/winston/pull/1104)

## v3.0.0-rc0 / 2017-10-02
### IT'S-DONE.GIF EDITION

**See [UPGRADE-3.0.md](UPGRADE-3.0.md) for a complete & living upgrade guide.**

**See [3.0.0.md](3.0.0.md) for a list of remaining RC tasks.**

- **Rewrite of core logging internals:** `Logger` & `Transport` are now implemented using Node.js `objectMode` streams.
- **Your transports _should_ not break:** Special attention has been given to ensure backwards compatibility with existing transports. You will likely see this:
```
YourTransport is a legacy winston transport. Consider upgrading to winston@3:
- Upgrade docs: https://github.com/winstonjs/winston/tree/master/UPGRADE.md
```
- **`filters`, `rewriters`, and `common.log` are now _formats_:** `winston.format` offers a simple mechanism for user-land formatting & style features. The organic & frankly messy growth of `common.log` is of the past; these feature requests can be implemented entirely outside of `winston` itself.
``` js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = createLogger({
  combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
});
```
- **Increased modularity:** several subsystems are now stand-alone packages:
  - [logform] exposed as `winston.format`
  - [winston-transport] exposed as `winston.Transport`
  - [abstract-winston-transport] used for reusable unit test suites for transport authors.
- **`2.x` branch will get little to no maintenance:** no feature requests will be accepted – only a limited number of open PRs will be merged. Hoping the [significant performance benefits][perf-bench] incentivizes folks to upgrade quickly. Don't agree? Say something!
- **No guaranteed support for `node@4` or below:** all code will be migrated to ES6 over time. This release was started when ES5 was still a hard requirement due to the current LTS needs.

## v2.4.0 / 2017-10-01
### ZOMFG WINSTON@3.0.0-RC0 EDITION

- [#1036] Container.add() 'filters' and 'rewriters' option passing to logger.
- [#1066] Fixed working of "humanReadableUnhandledException" parameter when additional data is added in meta.
- [#1040] Added filtering by log level
- [#1042] Fix regressions brought by `2.3.1`.
  - Fix regression on array printing.
  - Fix regression on falsy value.
- [#977] Always decycle objects before cloning.
  - Fixes [#862]
  - Fixes [#474]
  - Fixes [#914]
- [57af38a] Missing context in `.lazyDrain` of `File` transport.
- [178935f] Suppress excessive Node warning from `fs.unlink`.
- [fcf04e1] Add `label` option to `File` transport docs.
- [7e736b4], [24300e2] Added more info about undocumented `winston.startTimer()` method.
- [#1076], [#1082], [#1029], [#989], [e1e7188] Minor grammatical & style updates to `README.md`.

## v2.3.1 / 2017-01-20
### WELCOME TO THE APOCALYPSE EDITION

- [#868](https://github.com/winstonjs/winston/pull/868), Fix 'Maximum call stack size exceeded' error with custom formatter.

## v2.3.0 / 2016-11-02
### ZOMG WHY WOULD YOU ASK EDITION

- Full `CHANGELOG.md` entry forthcoming. See [the `git` diff for `2.3.0`](https://github.com/winstonjs/winston/compare/2.2.0...2.3.0) for now.

## v2.2.0 / 2016-02-25
### LEAVING CALIFORNIA EDITION

- Full `CHANGELOG.md` entry forthcoming. See [the `git` diff for `2.2.0`](https://github.com/winstonjs/winston/compare/2.1.1...2.2.0) for now.

## v2.1.1 / 2015-11-18
### COLOR ME IMPRESSED EDITION

- [#751](https://github.com/winstonjs/winston/pull/751), Fix colors not appearing in non-tty environments. Fixes [#609](https://github.com/winstonjs/winston/issues/609), [#616](https://github.com/winstonjs/winston/issues/616), [#669](https://github.com/winstonjs/winston/issues/669), [#648](https://github.com/winstonjs/winston/issues/648) (`fiznool`).
- [#752](https://github.com/winstonjs/winston/pull/752)     Correct syslog RFC number. 5424 instead of 524. (`jbenoit2011`)

## v2.1.0 / 2015-11-03
### TEST ALL THE ECOSYSTEM EDITION

- [#742](https://github.com/winstonjs/winston/pull/742), [32d52b7](https://github.com/winstonjs/winston/commit/32d52b7) Distribute common test files used by transports in the `winston` ecosystem.

## v2.0.1 / 2015-11-02
### BUGS ALWAYS HAPPEN OK EDITION

- [#739](https://github.com/winstonjs/winston/issues/739), [1f16861](https://github.com/winstonjs/winston/commit/1f16861) Ensure that `logger.log("info", undefined)` does not throw.

## v2.0.0 / 2015-10-29
### OMG IT'S MY SISTER'S BIRTHDAY EDITION

#### Breaking changes

**Most important**
- **[0f82204](https://github.com/winstonjs/winston/commit/0f82204) Move `winston.transports.DailyRotateFile` [into a separate module](https://github.com/winstonjs/winston-daily-rotate-file)**: `require('winston-daily-rotate-file');`
- **[fb9eec0](https://github.com/winstonjs/winston/commit/fb9eec0) Reverse log levels in `npm` and `cli` configs to conform to [RFC524](https://tools.ietf.org/html/rfc5424). Fixes [#424](https://github.com/winstonjs/winston/pull/424) [#406](https://github.com/winstonjs/winston/pull/406) [#290](https://github.com/winstonjs/winston/pull/290)**
- **[8cd8368](https://github.com/winstonjs/winston/commit/8cd8368) Change the method signature to a `filter` function to be consistent with `rewriter` and log functions:**
``` js
function filter (level, msg, meta, inst) {
  // Filter logic goes here...
}
```

**Other breaking changes**
- [e0c9dde](https://github.com/winstonjs/winston/commit/e0c9dde) Remove `winston.transports.Webhook`. Use `winston.transports.Http` instead.
- [f71e638](https://github.com/winstonjs/winston/commit/f71e638) Remove `Logger.prototype.addRewriter` and `Logger.prototype.addFilter` since they just push to an Array of functions. Use `logger.filters.push` or `logger.rewriters.push` explicitly instead.
- [a470ab5](https://github.com/winstonjs/winston/commit/a470ab5) No longer respect the `handleExceptions` option to `new winston.Logger`. Instead just pass in the `exceptionHandlers` option itself.
- [8cb7048](https://github.com/winstonjs/winston/commit/8cb7048) Removed `Logger.prototype.extend` functionality

#### New features
- [3aa990c](https://github.com/winstonjs/winston/commit/3aa990c) Added `Logger.prototype.configure` which now contains all logic previously in the `winston.Logger` constructor function. (`indexzero`)
- [#726](https://github.com/winstonjs/winston/pull/726) Update .npmignore (`coreybutler`)
- [#700](https://github.com/winstonjs/winston/pull/700) Add an `eol` option to the `Console` transport. (`aquavitae`)
- [#731](https://github.com/winstonjs/winston/pull/731) Update `lib/transports.js` for better static analysis. (`indexzero`)

#### Fixes, refactoring, and optimizations. OH MY!
- [#632](https://github.com/winstonjs/winston/pull/632) Allow `File` transport to be an `objectMode` writable stream. (`stambata`)
- [#527](https://github.com/winstonjs/winston/issues/527), [163f4f9](https://github.com/winstonjs/winston/commit/163f4f9), [3747ccf](https://github.com/winstonjs/winston/commit/3747ccf) Performance optimizations and string interpolation edge cases (`indexzero`)
- [f0edafd](https://github.com/winstonjs/winston/commit/f0edafd) Code cleanup for reability, ad-hoc styleguide enforcement (`indexzero`)

## v1.1.1 - v1.1.2 / 2015-10
### MINOR FIXES EDITION

#### Notable changes
  * [727](https://github.com/winstonjs/winston/pull/727) Fix "raw" mode (`jcrugzz`)
  * [703](https://github.com/winstonjs/winston/pull/703) Do not modify Error or Date objects when logging. Fixes #610 (`harriha`).

## v1.1.0 / 2015-10-09
### GREETINGS FROM CARTAGENA EDITION

#### Notable Changes
  * [#721](https://github.com/winstonjs/winston/pull/721) Fixed octal literal to work with node 4 strict mode (`wesleyeff`)
  * [#630](https://github.com/winstonjs/winston/pull/630) Add stderrLevels option to Console Transport and update docs (`paulhroth`)
  * [#626](https://github.com/winstonjs/winston/pull/626) Add the logger (this) in the fourth argument in the rewriters and filters functions (`christophehurpeau `)
  * [#623](https://github.com/winstonjs/winston/pull/623) Fix Console Transport's align option tests (`paulhroth`, `kikobeats`)
  * [#692](https://github.com/winstonjs/winston/pull/692) Adding winston-aws-cloudwatch to transport docs (`timdp`)

## v1.0.2 2015-09-25
### LET'S TALK ON GITTER EDITION

#### Notable Changes
  * [de80160](https://github.com/winstonjs/winston/commit/de80160) Add Gitter badge (`The Gitter Badger`)
  * [44564de](https://github.com/winstonjs/winston/commit/44564de) [fix] Correct listeners in `logException`. Fixes [#218](https://github.com/winstonjs/winston/issues/218) [#213](https://github.com/winstonjs/winston/issues/213) [#327](https://github.com/winstonjs/winston/issues/327). (`indexzero`)
  * [45b1eeb](https://github.com/winstonjs/winston/commit/45b1eeb) [fix] Get `tailFile` function working on latest/all node versions (`Christopher Jeffrey`)
  * [c6d45f9](https://github.com/winstonjs/winston/commit/c6d45f9) Fixed event subscription on close (`Roman Stetsyshin`)

#### Other changes
  * TravisCI updates & best practices [87b97cc](https://github.com/winstonjs/winston/commit/87b97cc) [91a5bc4](https://github.com/winstonjs/winston/commit/91a5bc4), [cf24e6a](https://github.com/winstonjs/winston/commit/cf24e6a) (`indexzero`)
  * [d5397e7](https://github.com/winstonjs/winston/commit/d5397e7) Bump async version (`Roderick Hsiao`)
  * Documentation updates & fixes [86d7527](https://github.com/winstonjs/winston/commit/86d7527), [38254c1](https://github.com/winstonjs/winston/commit/38254c1), [04e2928](https://github.com/winstonjs/winston/commit/04e2928), [61c8a89](https://github.com/winstonjs/winston/commit/61c8a89), [c42a783](https://github.com/winstonjs/winston/commit/c42a783), [0688a22](https://github.com/winstonjs/winston/commit/0688a22), [eabc113](https://github.com/winstonjs/winston/commit/eabc113) [c9506b7](https://github.com/winstonjs/winston/commit/c9506b7), [17534d2](https://github.com/winstonjs/winston/commit/17534d2), [b575e7b](https://github.com/winstonjs/winston/commit/b575e7b) (`Stefan Thies`, `charukiewicz`, `unLucio`, `Adam Cohen`, `Denis Gorbachev`, `Frederik Ring`, `Luigi Pinca`, `jeffreypriebe`)
  * Documentation refactor & cleanup [a19607e](https://github.com/winstonjs/winston/commit/a19607e), [d1932b4](https://github.com/winstonjs/winston/commit/d1932b4), [7a13132](https://github.com/winstonjs/winston/commit/7a13132) (`indexzero`)


## v1.0.1 / 2015-06-26
### YAY DOCS EDITION

  * [#639](https://github.com/winstonjs/winston/pull/639) Fix for [#213](https://github.com/winstonjs/winston/issues/213): More than 10 containers triggers EventEmitter memory leak warning (`marcus`)
  * Documentation and `package.json` updates [cec892c](https://github.com/winstonjs/winston/commit/cec892c), [2f13b4f](https://github.com/winstonjs/winston/commit/2f13b4f), [b246efd](https://github.com/winstonjs/winston/commit/b246efd), [22a5f5a](https://github.com/winstonjs/winston/commit/22a5f5a), [5868b78](https://github.com/winstonjs/winston/commit/5868b78), [99b6b44](https://github.com/winstonjs/winston/commit/99b6b44), [447a813](https://github.com/winstonjs/winston/commit/447a813), [7f75b48](https://github.com/winstonjs/winston/commit/7f75b48) (`peteward44`, `Gilad Peleg`, `Anton Ian Sipos`, `nimrod-becker`, `LarsTi`, `indexzero`)

## v1.0.0 / 2015-04-07
### OMG 1.0.0 FINALLY EDITION

#### Breaking Changes
  * [#587](https://github.com/winstonjs/winston/pull/587) Do not extend `String` prototypes as a side effect of using `colors`. (`kenperkins`)
  * [#581](https://github.com/winstonjs/winston/pull/581) File transports now emit `error` on error of the underlying streams after `maxRetries` attempts. (`ambbell`).
  * [#583](https://github.com/winstonjs/winston/pull/583), [92729a](https://github.com/winstonjs/winston/commit/92729a68d71d07715501c35d94d2ac06ac03ca08) Use `os.EOL` for all file writing by default. (`Mik13`, `indexzero`)
  * [#532](https://github.com/winstonjs/winston/pull/532) Delete logger instance from `Container` when `close` event is emitted. (`snater`)
  * [#380](https://github.com/winstonjs/winston/pull/380) Rename `duration` to `durationMs`, which is now a number a not a string ending in `ms`. (`neoziro`)
  * [#253](https://github.com/winstonjs/winston/pull/253) Do not set a default level. When `level` is falsey on any `Transport` instance, any `Logger` instance uses the configured level (instead of the Transport level) (`jstamerj`).

#### Other changes

  * [b83de62](https://github.com/winstonjs/winston/commit/b83de62) Fix rendering of stack traces.
  * [c899cc](https://github.com/winstonjs/winston/commit/c899cc1f0719e49b26ec933e0fa263578168ea3b) Update documentation (Fixes [#549](https://github.com/winstonjs/winston/issues/549))
  * [#551](https://github.com/winstonjs/winston/pull/551) Filter metadata along with messages
  * [#578](https://github.com/winstonjs/winston/pull/578) Fixes minor issue with `maxFiles` in `File` transport (Fixes [#556](https://github.com/winstonjs/winston/issues/556)).
  * [#560](https://github.com/winstonjs/winston/pull/560) Added `showLevel` support to `File` transport.
  * [#558](https://github.com/winstonjs/winston/pull/558) Added `showLevel` support to `Console` transport.

## v0.9.0 / 2015-02-03

  * [#496](https://github.com/flatiron/winston/pull/496) Updated default option handling for CLI (`oojacoboo`).
  * [f37634b](https://github.com/flatiron/winston/commit/f37634b) [dist] Only support `node >= 0.8.0`. (`indexzero`)
  * [91a1e90](https://github.com/flatiron/winston/commit/91a1e90), [50163a0](https://github.com/flatiron/winston/commit/50163a0) Fix #84 [Enable a better unhandled exception experience](https://github.com/flatiron/winston/issues/84) (`samz`)
  * [8b5fbcd](https://github.com/flatiron/winston/commit/8b5fbcd) #448 Added tailable option to file transport which rolls files backwards instead of creating incrementing appends. Implements #268 (`neouser99`)
  * [a34f7d2](https://github.com/flatiron/winston/commit/a34f7d2) Custom log formatter functionality were added. (`Melnyk Andii`)
  * [4c08191](https://github.com/flatiron/winston/commit/4c08191) Added showLevel flag to common.js, file*, memory and console transports. (`Tony Germaneri`)
  * [64ed8e0](https://github.com/flatiron/winston/commit/64ed8e0) Adding custom pretty print function test. (`Alberto Pose`)
  * [3872dfb](https://github.com/flatiron/winston/commit/3872dfb) Adding prettyPrint parameter as function example. (`Alberto Pose`)
  * [2b96eee](https://github.com/flatiron/winston/commit/2b96eee) implemented filters #526 (`Chris Oloff`)
  * [72273b1](https://github.com/flatiron/winston/commit/72273b1) Added the options to colorize only the level, only the message or all. Default behavior is kept. Using true will only colorize the level and false will not colorize anything. (`Michiel De Mey`)
  * [178e8a6](https://github.com/flatiron/winston/commit/178e8a6) Prevent message from meta input being overwritten (`Leonard Martin`)
  * [270be86](https://github.com/flatiron/winston/commit/270be86) [api] Allow for transports to be removed by their string name [test fix] Add test coverage for multiple transports of the same type added in #187. [doc] Document using multiple transports of the same type (`indexzero`)
  * [0a848fa](https://github.com/flatiron/winston/commit/0a848fa) Add depth options for meta pretty print (`Loïc Mahieu`)
  * [106b670](https://github.com/flatiron/winston/commit/106b670) Allow debug messages to be sent to stdout (`John Frizelle`)
  * [ad2d5e1](https://github.com/flatiron/winston/commit/ad2d5e1) [fix] Handle Error instances in a sane way since their properties are non-enumerable __by default.__ Fixes #280. (`indexzero`)
  * [5109dd0](https://github.com/flatiron/winston/commit/5109dd0) [fix] Have a default `until` before a default `from`. Fixes #478. (`indexzero`)
  * [d761960](https://github.com/flatiron/winston/commit/d761960) Fix logging regular expression objects (`Chasen Le Hara`)
  * [2632eb8](https://github.com/flatiron/winston/commit/2632eb8) Add option for EOL chars on FileTransport (`José F. Romaniello`)
  * [bdecce7](https://github.com/flatiron/winston/commit/bdecce7) Remove duplicate logstash option (`José F. Romaniello`)
  * [7a01f9a](https://github.com/flatiron/winston/commit/7a01f9a) Update declaration block according to project's style guide (`Ricardo Torres`)
  * [ae27a19](https://github.com/flatiron/winston/commit/ae27a19) Fixes #306: Can't set customlevels to my loggers (RangeError: Maximum call stack size exceeded) (`Alberto Pose`)
  * [1ba4f51](https://github.com/flatiron/winston/commit/1ba4f51) [fix] Call `res.resume()` in HttpTransport to get around known issues in streams2. (`indexzero`)
  * [39e0258](https://github.com/flatiron/winston/commit/39e0258) Updated default option handling for CLI (`Jacob Thomason`)
  * [8252801](https://github.com/flatiron/winston/commit/8252801) Added logstash support to console transport (`Ramon Snir`)
  * [18aa301](https://github.com/flatiron/winston/commit/18aa301) Module isStream should be isstream (`Michael Neil`)
  * [2f5f296](https://github.com/flatiron/winston/commit/2f5f296) options.prettyPrint can now be a function (`Matt Zukowski`)
  * [a87a876](https://github.com/flatiron/winston/commit/a87a876) Adding rotationFormat prop to file.js (`orcaman`)
  * [ff187f4](https://github.com/flatiron/winston/commit/ff187f4) Allow custom exception level (`jupiter`)

## 0.8.3 / 2014-11-04

* [fix lowercase issue (`jcrugzz`)](https://github.com/flatiron/winston/commit/b3ffaa10b5fe9d2a510af5348cf4fb3870534123)

## 0.8.2 / 2014-11-04

* [Full fix for #296 with proper streams2 detection with `isstream` for file transport (`jcrugzz`)](https://github.com/flatiron/winston/commit/5c4bd4191468570e46805ed399cad63cfb1856cc)
* [Add isstream module (`jcrugzz`)](https://github.com/flatiron/winston/commit/498b216d0199aebaef72ee4d8659a00fb737b9ae)
* [Partially fix #296 with streams2 detection for file transport (`indexzero`)](https://github.com/flatiron/winston/commit/b0227b6c27cf651ffa8b8192ef79ab24296362e3)
* [add stress test for issue #288 (`indexzero`)](https://github.com/flatiron/winston/commit/e08e504b5b3a00f0acaade75c5ba69e6439c84a6)
* [lessen timeouts to check test sanity (`indexzero`)](https://github.com/flatiron/winston/commit/e925f5bc398a88464f3e796545ff88912aff7568)
* [update winston-graylog2 documentation (`unlucio`)](https://github.com/flatiron/winston/commit/49fa86c31baf12c8ac3adced3bdba6deeea2e363)
* [fix test formatting (`indexzero`)](https://github.com/flatiron/winston/commit/8e2225799520a4598044cdf93006d216812a27f9)
* [fix so options are not redefined (`indexzero`)](https://github.com/flatiron/winston/commit/d1d146e8a5bb73dcb01579ad433f6d4f70b668ea)
* [fix self/this issue that broke `http` transport (`indexzero`)](https://github.com/flatiron/winston/commit/d10cbc07755c853b60729ab0cd14aa665da2a63b)


## 0.8.1 / 2014-10-06

* [Add label option for DailyRotateFile transport (`francoisTemasys`)](https://github.com/flatiron/winston/pull/459)
* [fix Logger#transports length check upon Logger#log (`adriano-di-giovanni`, `indexzero`)](https://github.com/flatiron/winston/pull/404)
* [err can be a string. (`gdw2`, `indexzero`)](https://github.com/flatiron/winston/pull/396)
* [Added color for pre-defined cli set. (`danilo1105`, `indexzero`)](https://github.com/flatiron/winston/pull/365)
* [Fix dates on transport test (`revington`)](https://github.com/flatiron/winston/pull/346)
* [Included the label from options to the output in JSON mode. (`arxony`)](https://github.com/flatiron/winston/pull/326)
* [Allow using logstash option with the File transport (`gmajoulet`)](https://github.com/flatiron/winston/pull/299)
* [Be more defensive when working with `query` methods from Transports. Fixes #356. (indexzero)](https://github.com/flatiron/winston/commit/b80638974057f74b521dbe6f43fef2105110afa2)
* [Catch exceptions for file transport unlinkSync (`calvinfo`)](https://github.com/flatiron/winston/pull/266)
* [Adding the 'addRewriter' to winston (`machadogj`)](https://github.com/flatiron/winston/pull/258)
* [Updates to transport documentation (`pose`)](https://github.com/flatiron/winston/pull/262)
* [fix typo in "Extending another object with Logging" section.](https://github.com/flatiron/winston/pull/281)
* [Updated README.md - Replaced properties with those listed in winston-mongodb module](https://github.com/flatiron/winston/pull/264)

## 0.8.0 / 2014-09-15
  * [Fixes for HTTP Transport](https://github.com/flatiron/winston/commit/a876a012641f8eba1a976eada15b6687d4a03f82)
  * Removing [jsonquest](https://github.com/flatiron/winston/commit/4f088382aeda28012b7a0498829ceb243ed74ac1) and [request](https://github.com/flatiron/winston/commit/a5676313b4e9744802cc3b8e1468e4af48830876) dependencies.
  * Configuration is now [shalow cloned](https://github.com/flatiron/winston/commit/08fccc81d18536d33050496102d98bde648853f2).
  * [Added logstash support](https://github.com/flatiron/winston/pull/445/files)
  * Fix for ["flush" event should always fire after "flush" call bug](https://github.com/flatiron/winston/pull/446/files)
  * Added tests for file: [open and stress](https://github.com/flatiron/winston/commit/47d885797a2dd0d3cd879305ca813a0bd951c378).
  * [Test fixes](https://github.com/flatiron/winston/commit/9e39150e0018f43d198ca4c160acef2af9860bf4)
  * [Fix ")" on string interpolation](https://github.com/flatiron/winston/pull/394/files)

## 0.6.2 / 2012-07-08

  * Added prettyPrint option for console logging
  * Multi-line values for conditional returns are not allowed
  * Added acceptance of `stringify` option
  * Fixed padding for log levels



================================================
FILE: CODE_OF_CONDUCT.md
================================================
# Contributor Covenant Code of Conduct

## Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
education, socio-economic status, nationality, personal appearance, race,
religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
  advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

## Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at charlie.robbins@gmail.com. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

[homepage]: https://www.contributor-covenant.org




================================================
FILE: CONTRIBUTING.md
================================================
# CONTRIBUTING
PLEASE NOTE: This document has not been updated in a while and is out of date, but contents are retained as some may still be useful.

TL;DR? The `winston` project recently shipped `3.0.0` out of RC and is actively
working towards the next feature release as it continues to triage issues. 

- [Be kind & actively empathetic to one another](CODE_OF_CONDUCT.md)
- [What makes up `winston`?](#what-makes-up-winston)
- [What about `winston@2.x`?!](#what-about-winston-2.x)
- [Could this be implemented as a format?](#could-this-be-implemented-as-a-format)
- [Roadmap](#roadmap)

Looking for somewhere to help? Checkout the [Roadmap](#roadmap) & help triage open issues! Find an issue that looks like a duplicate? It probably is! Comment on it so we know it's maybe a duplicate 🙏.

## What makes up `winston`?

As of `winston@3` the project has been broken out into a few modules:

- [winston-transport]: `Transport` stream implementation & legacy `Transport` wrapper.
- [logform]: All formats exports through `winston.format` 
- `LEVEL` and `MESSAGE` symbols exposed through [triple-beam].
- [Shared test suite][abstract-winston-transport] for community transports 

Let's dig in deeper. The example below has been annotated to demonstrate the different packages that compose the example itself:

``` js
const { createLogger, transports, format } = require('winston');
const Transport = require('winston-transport');
const logform = require('logform');
const { combine, timestamp, label, printf } = logform.format;

// winston.format is require('logform')
console.log(logform.format === format) // true

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()]
});
```

## What about `winston@2.x`?!

> _If you are opening an issue regarding the `2.x` release-line please know
> that 2.x work has ceased. The `winston` team will review PRs that fix
> issues, but as issues are opened we will close them._

You will commonly see this closing `winston@2.x` issues:

```
Development `winston@2.x` has ceased. Please consider upgrading to
`winston@3.0.0`. If you feel strongly about this bug please open a PR against
the `2.x` branch. Thank you for using `winston`!
```

## Could this be implemented as a format?

Before opening issues for new features consider if this feature could be implemented as a [custom format]. If it is, you will see your issue closed with this message:

```
This can be accomplished with using [custom formats](https://github.com/winstonjs/winston#creating-custom-formats) in `winston@3.0.0`. Please consider upgrading.
```

# Roadmap

Below is the list of items that make up the roadmap through `3.4.0`. We are actively triaging the open issues, so it is likely a few more critical path items will be added to this list before the next release goes out.

- [Version 3.3.0](#version-320)
- [Version 3.4.0](#version-330)
- [Version 3.5.0](#version-340)

## Legend

- [ ] Unstarted work.
- [x] Finished work.
- [-] Partially finished or in-progress work. 

## Version `3.3.0`

### High priority issues (non-blocking)
- [ ] Move `File` transport into `winston-file`.
- [Browser support](https://github.com/winstonjs/winston/issues/287)
  - [ ] Unit tests for `webpack` & `rollup` 
  - [ ] Replicate browser-only transpilation for `winston`, `winston-transport`, `triple-beam`.
- [-] Full JSDoc coverage
- Benchmarking for `File` and `Stream` transports:
   - [x] Benchmarking integration in `pino`.
   - [x] Upgrade `pino` to latest `winston`.
   - See: https://github.com/winstonjs/logmark
   - See also: https://github.com/pinojs/pino/pull/232
- [ ] Move `logged` event into `winston-transport` to remove need for it in each individual Transport written _or remove the `logged` event entirely._

### Increased code & scenario coverage
- [-] Replace all `vows`-based tests.
  - [-] `test/transports/*-test.js` 
- [ ] Code coverage tests above 80% for `winston` _(currently `~70%`)_.
  - [-] Core scenarios covered in `abstract-winston-transport`.
  - [-] Full integration tests for all `logform` transports

### Communications / Compatibility
- [ ] `README.md` for `winston-compat`.
- [ ] Update all transports documented in `docs/transports.md` for `winston@3`.

## Version `3.4.0`

### Querying, Streaming, Uncaught Exceptions
- [-] Streaming

### Communications / Compatibility
- [ ] `winstonjs.org` documentation site.

## Version `3.5.0`

### Querying, Streaming, Uncaught Exceptions
- [-] Querying

[winston-transport]: https://github.com/winstonjs/winston-transport
[logform]: https://github.com/winstonjs/logform
[triple-beam]: https://github.com/winstonjs/triple-beam
[abstract-winston-transport]: https://github.com/winstonjs/abstract-winston-transport
[stress-test]: https://github.com/winstonjs/winston/blob/master/test/transports/file-stress.test.js
[custom format]: https://github.com/winstonjs/winston#creating-custom-formats



================================================
FILE: index.d.ts
================================================
// Type definitions for winston 3.0
// Project: https://github.com/winstonjs/winston

/// <reference types="node" />

import * as NodeJSStream from 'stream';

import * as logform from 'logform';
import * as Transport from 'winston-transport';

import * as Config from './lib/winston/config/index';
import * as Transports from './lib/winston/transports/index';

declare namespace winston {
  // Hoisted namespaces from other modules
  export import format = logform.format;
  export import Logform = logform;
  export import config = Config;
  export import transports = Transports;
  export import transport = Transport;

  class ExceptionHandler {
    constructor(logger: Logger);
    logger: Logger;
    handlers: Map<any, any>;
    catcher: Function | boolean;

    handle(...transports: Transport[]): void;
    unhandle(...transports: Transport[]): void;
    getAllInfo(err: string | Error): object;
    getProcessInfo(): object;
    getOsInfo(): object;
    getTrace(err: Error): object;
  }

  class RejectionHandler {
    constructor(logger: Logger);
    logger: Logger;
    handlers: Map<any, any>;
    catcher: Function | boolean;

    handle(...transports: Transport[]): void;
    unhandle(...transports: Transport[]): void;
    getAllInfo(err: string | Error): object;
    getProcessInfo(): object;
    getOsInfo(): object;
    getTrace(err: Error): object;
  }

  interface QueryOptions {
    rows?: number;
    limit?: number;
    start?: number;
    from?: Date;
    until?: Date;
    order?: 'asc' | 'desc';
    fields: any;
  }

  class Profiler {
    logger: Logger;
    start: Number;
    done(info?: any): boolean;
  }

  interface LogEntry {
    level: string;
    message: string;
    [optionName: string]: any;
  }

  interface LogMethod {
    (level: string, message: string, ...meta: any[]): Logger;
    (entry: LogEntry): Logger;
    (level: string, message: any): Logger;
  }

  interface LeveledLogMethod {
    (message: string, ...meta: any[]): Logger;
    (message: any): Logger;
    (infoObject: object): Logger;
  }

  interface LoggerOptions {
    levels?: Config.AbstractConfigSetLevels;
    silent?: boolean;
    format?: logform.Format;
    level?: string;
    exitOnError?: Function | boolean;
    defaultMeta?: any;
    transports?: Transport[] | Transport;
    handleExceptions?: boolean;
    handleRejections?: boolean;
    exceptionHandlers?: any;
    rejectionHandlers?: any;
  }

  class Logger extends NodeJSStream.Transform {
    constructor(options?: LoggerOptions);

    silent: boolean;
    format: logform.Format;
    levels: Config.AbstractConfigSetLevels;
    level: string;
    transports: Transport[];
    exceptions: ExceptionHandler;
    rejections: RejectionHandler;
    profilers: object;
    exitOnError: Function | boolean;
    defaultMeta?: any;

    log: LogMethod;
    add(transport: Transport): this;
    remove(transport: Transport): this;
    clear(): this;
    close(): this;

    // for cli and npm levels
    error: LeveledLogMethod;
    warn: LeveledLogMethod;
    help: LeveledLogMethod;
    data: LeveledLogMethod;
    info: LeveledLogMethod;
    debug: LeveledLogMethod;
    prompt: LeveledLogMethod;
    http: LeveledLogMethod;
    verbose: LeveledLogMethod;
    input: LeveledLogMethod;
    silly: LeveledLogMethod;

    // for syslog levels only
    emerg: LeveledLogMethod;
    alert: LeveledLogMethod;
    crit: LeveledLogMethod;
    warning: LeveledLogMethod;
    notice: LeveledLogMethod;

    query(
      options?: QueryOptions,
      callback?: (err: Error, results: any) => void
    ): any;
    stream(options?: any): NodeJS.ReadableStream;

    startTimer(): Profiler;
    profile(id: string | number, meta?: Record<string, any>): this;

    configure(options: LoggerOptions): void;

    child(options: Object): this;

    isLevelEnabled(level: string): boolean;
    isErrorEnabled(): boolean;
    isWarnEnabled(): boolean;
    isInfoEnabled(): boolean;
    isVerboseEnabled(): boolean;
    isDebugEnabled(): boolean;
    isSillyEnabled(): boolean;
  }

  class Container {
    loggers: Map<string, Logger>;
    options: LoggerOptions;

    add(id: string, options?: LoggerOptions): Logger;
    get(id: string, options?: LoggerOptions): Logger;
    has(id: string): boolean;
    close(id?: string): void;

    constructor(options?: LoggerOptions);
  }

  let version: string;
  let loggers: Container;

  let addColors: (target: Config.AbstractConfigSetColors) => any;
  let createLogger: (options?: LoggerOptions) => Logger;

  // Pass-through npm level methods routed to the default logger.
  let error: LeveledLogMethod;
  let warn: LeveledLogMethod;
  let info: LeveledLogMethod;
  let http: LeveledLogMethod;
  let verbose: LeveledLogMethod;
  let debug: LeveledLogMethod;
  let silly: LeveledLogMethod;

  // Other pass-through methods routed to the default logger.
  let log: LogMethod;
  let query: (
    options?: QueryOptions,
    callback?: (err: Error, results: any) => void
  ) => any;
  let stream: (options?: any) => NodeJS.ReadableStream;
  let add: (transport: Transport) => Logger;
  let remove: (transport: Transport) => Logger;
  let clear: () => Logger;
  let startTimer: () => Profiler;
  let profile: (id: string | number) => Logger;
  let configure: (options: LoggerOptions) => void;
  let child: (options: Object) => Logger;
  let level: string;
  let exceptions: ExceptionHandler;
  let rejections: RejectionHandler;
  let exitOnError: Function | boolean;
  // let default: object;
}

export = winston;



================================================
FILE: jest.config.js
================================================
/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.js'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/test/**/*.test.js'
  ],
  globalSetup: '<rootDir>/test/globalSetup.js',
  silent: true,
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 74.54,
      lines: 72.48,
      statements: 72.25,
      branches: 64.04
    }
  }
};




================================================
FILE: LICENSE
================================================
Copyright (c) 2010 Charlie Robbins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


================================================
FILE: package.json
================================================
{
	"name": "winston",
	"description": "A logger for just about everything.",
	"version": "3.18.3",
	"author": "Charlie Robbins <charlie.robbins@gmail.com>",
	"maintainers": [
		"David Hyde <dabh@alumni.stanford.edu>"
	],
	"repository": {
		"type": "git",
		"url": "https://github.com/winstonjs/winston.git"
	},
	"keywords": [
		"winston",
		"logger",
		"logging",
		"logs",
		"sysadmin",
		"bunyan",
		"pino",
		"loglevel",
		"tools",
		"json",
		"stream"
	],
	"dependencies": {
		"@dabh/diagnostics": "^2.0.8",
		"@colors/colors": "^1.6.0",
		"async": "^3.2.3",
		"is-stream": "^2.0.0",
		"logform": "^2.7.0",
		"one-time": "^1.0.0",
		"readable-stream": "^3.4.0",
		"safe-stable-stringify": "^2.3.1",
		"stack-trace": "0.0.x",
		"triple-beam": "^1.3.0",
		"winston-transport": "^4.9.0"
	},
	"devDependencies": {
		"@babel/cli": "^7.23.9",
		"@babel/core": "^7.24.0",
		"@babel/preset-env": "^7.24.0",
		"@dabh/eslint-config-populist": "^4.4.0",
		"@types/node": "^20.11.24",
		"abstract-winston-transport": "^0.5.1",
		"assume": "^2.2.0",
		"cross-spawn-async": "^2.2.5",
		"eslint": "^8.57.0",
		"hock": "^1.4.1",
		"jest": "^29.7.0",
		"rimraf": "5.0.1",
		"split2": "^4.1.0",
		"std-mocks": "^2.0.0",
		"through2": "^4.0.2",
		"winston-compat": "^0.1.5"
	},
	"main": "./lib/winston.js",
	"browser": "./dist/winston",
	"types": "./index.d.ts",
	"scripts": {
		"lint": "eslint lib/*.js lib/winston/*.js lib/winston/**/*.js --resolve-plugins-relative-to ./node_modules/@dabh/eslint-config-populist",
		"test": "jest",
		"test:unit": "jest -c test/jest.config.unit.js",
		"test:integration": "jest -c test/jest.config.integration.js",
		"test:typescript": "npx --package typescript tsc --project test",
		"build": "babel lib -d dist",
		"prebuild": "rimraf dist",
		"prepublishOnly": "npm run build"
	},
	"engines": {
		"node": ">= 12.0.0"
	},
	"license": "MIT"
}



================================================
FILE: publishing.md
================================================
The release process here mostly follows along with the [vbump script](https://github.com/indexzero/vbump) that @indexzero wrote several years ago, but the main steps for a release are as follows:

1. Complete merging in any PRs that should be part of the release.
2. Update the changelog. Check to make sure you've caught everything using GitHub's compare tool ([example here](https://github.com/winstonjs/winston/compare/v3.6.0...master)).  It's nice to thank the contributors here.  It's nice to organize this by which changes would merit which level of semver bump, and especially call out any breaking changes (major-version-number) concisely at the start.
3. **Update the version number in package.json and package-lock.json**, bumping as appropriate for [semver](https://semver.org/) based on the most significant position change trigger from the changelog you just wrote/reviewed.  Do not miss this step!
4. Make sure your local master branch is up to date.
5. Make sure all the lint checks and tests pass, beyond what the CI might've told you.
6. On the [Releases tab](https://github.com/winstonjs/winston/releases) in the GitHub UI, click 'Draft a new release' in the upper right corner.
7. Under the 'Choose a tag' dropdown, type the name of the new version starting with a v (e.g. `v3.7.0`) and don't forget to click the 'Create new tag on publish' option below (this step is annoyingly easy to miss):
![image](https://user-images.githubusercontent.com/563406/160644343-69325988-4ca2-4329-93da-e08266269506.png)
8. Paste the same version number, with or without the v (with is probably better) in the release title box.
9. Paste the contents of the changelog for this release in the 'Describe this release' box.
10. Click "Publish release."
11. Back on the command line, `npm publish` and complete npm 2FA as needed.
12. Update the distribution tags, for example: `npm dist-tag add winston@3.7.0 3.x-latest`.
13. Verify the distribution tags look correct under the 'Versions' tab at https://www.npmjs.com/package/winston or with `npm dist-tag ls`.
14. Keep a closer-than-usual eye on issues in the hours and days that follow, prepared to quickly revert/address anything that might be associated with that release.

A more professional version of this would probably use a release branch off master to make sure no other maintainers merge a PR into master between the loading of a compare view for changelog preparation and completion of the process, but we're such a small team that the extra steps are probably not needed. After release, you can also verify with the compare view between the new and prior release tags to see when the latest change was and verify it was before you started the process.



================================================
FILE: SECURITY.md
================================================
# Security Policy

## Reporting a Vulnerability

Please report security issues to `npm view yadeep maintainers.email`.



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "module": "commonjs",
    "lib": [
      "es6"
    ],
    "target": "es6",
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
    "baseUrl": "./",
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules"
    ],
    "types": ["node"],
    "noEmit": true,
    "forceConsistentCasingInFileNames": true
  },
  "files": [
    "index.d.ts",
    "lib/winston/config/index.d.ts",
    "lib/winston/transports/index.d.ts"
  ]
}



================================================
FILE: UPGRADE-3.0.md
================================================
# Upgrading to `winston@3.0.0`

> This document represents a **living guide** on upgrading to `winston@3`.
> Much attention has gone into the details, but if you are having trouble
> upgrading to `winston@3.0.0` **PLEASE** open an issue so we can improve this
> guide! 

- [Breaking changes]
   - [Top-level `winston.*` API]
   - [Transports]
   - [`winston.Container` and `winston.loggers`]
   - [`winston.Logger`]
   - [Exceptions & exception handling]
   - [Other minor breaking changes]
- [Upgrading to `winston.format`]
   - [Removed `winston.Logger` formatting options]
   - [Removed `winston.transports.{File,Console,Http}` formatting options]
   - [Migrating `filters` and `rewriters` to `formats` in `winston@3`]
- [Modularity: `winston-transport`, `logform` and more]

## Breaking changes

### Top-level `winston.*` API
- `winston.Logger` has been replaced with `winston.createLogger`.
- `winston.setLevels` has been removed. Levels are frozen at the time of Logger creation.
- Setting the level on the default `winston` logger no longer sets the level on the transports associated with the default `winston` logger.
- The default logger exposed by `require('winston')` no longer has default `Console` transports, 
and leaving it without transports may cause a high memory usage issue.

### Transports
- `winston.transports.Memory` was removed. Use any Node.js `stream.Writeable` with a large `highWaterMark` instance instead.
- When writing transports use `winston-transport` instead of
  `winston.Transport`.
- Many formatting options that were previously configurable on transports 
  (e.g. `json`, `raw`, `colorize`, `prettyPrint`, `timestamp`, `logstash`, 
  `align`) should now be set by adding the appropriate formatter instead.
  _(See: "Removed `winston.transports.{File,Console,Http}` formatting options"
  below)_ 
- In `winston.transports.Console`, output for all log levels are now sent to stdout by default.
    - `stderrLevels` option now defaults to `[]`.
    - `debugStdout` option has been removed.

### `winston.Container` and `winston.loggers`
- `winston.Container` instances no longer have default `Console` transports.
Failing to add any transports may cause a high memory usage issue.
- `winston.Container.prototype.add` no longer does crazy options parsing. Implementation inspired by [segmentio/winston-logger](https://github.com/segmentio/winston-logger/blob/master/lib/index.js#L20-L43)

### `winston.Logger`
- **Do not use** `new winston.Logger(opts)` – it has been removed for
  improved performance. Use `winston.createLogger(opts)` instead.

- `winston.Logger.log` and level-specific methods (`.info`, `.error`, etc)
  **no longer accepts a callback.** The vast majority of use cases for this
  feature was folks awaiting _all logging_ to complete, not just a single
  logging message. To accomplish this:

``` js
logger.log('info', 'some message');
logger.on('finish', () => process.exit());
logger.end();
```

- `winston.Logger.add` no longer accepts prototypes / classes. Pass
  **an instance of our transport instead.**

``` js
// DON'T DO THIS. It will no longer work
logger.add(winston.transports.Console);

// Do this instead.
logger.add(new winston.transports.Console());
```

- `winston.Logger` will no longer do automatic splat interpolation by default.
  Be sure to use `format.splat()` to enable this functionality.
- `winston.Logger` will no longer respond with an error when logging with no
  transports.
- `winston.Logger` will no longer respond with an error if the same transports
  are added twice.
- `Logger.prototype.stream`
  - `options.transport` is removed. Use the transport instance on the logger
    directly.
- `Logger.prototype.query`
  - `options.transport` is removed. Use the transport instance on the logger 
    directly.
- `Logger.paddings` was removed.

### Exceptions & exception handling
- `winston.exception` has been removed. Use:
``` js
const exception = winston.ExceptionHandler();
```
- `humanReadableUnhandledException` is now the default exception format.
- `.unhandleExceptions()` will no longer modify transports state, merely just add / remove the `process.on('uncaughtException')` handler.
   - Call close on any explicit `ExceptionHandlers`.
   - Set `handleExceptions = false` on all transports.

### Other minor breaking changes
- `winston.hash` was removed.
- `winston.common.pad` was removed.
- `winston.common.serialized` was removed (use `winston-compat`).
- `winston.common.log` was removed (use `winston-compat`).
- `winston.paddings` was removed.

## Upgrading to `winston.format`
The biggest issue with `winston@2` and previous major releases was that any
new formatting options required changes to `winston` itself. All formatting is
now handled by **formats**. 

Custom formats can now be created with no changes to `winston` core.
_We encourage you to consider a custom format before opening an issue._

### Removed `winston.Logger` formatting options:
- The default output format is now `format.json()`.
- `filters`: Use a custom `format`. See: [Filters and Rewriters] below.
- `rewriters`: Use a custom `format`. See: [Filters and Rewriters] below.

### Removed `winston.transports.{File,Console,Http}` formatting options
- `stringify`: Use a [custom format].
- `formatter`: Use a [custom format].
- `json`: Use `format.json()`.
- `raw`: Use `format.json()`.
- `label`: Use `format.label()`.
- `logstash`: Use `format.logstash()`.
- `prettyPrint`: Use `format.prettyPrint()` or a [custom format].
   - `depth` is an option provided to `format.prettyPrint()`.
- `colorize`: Use `format.colorize()`.
- `timestamp`: Use `format.timestamp()`.
- `logstash`: Use `format.logstash()`.
- `align`: Use `format.align()`.
- `showLevel`: Use a [custom format].

### Migrating `filters` and `rewriters` to `formats` in `winston@3`

In `winston@3.x.x` `info` objects are considered mutable. The API _combined
formatters and rewriters into a single, new concept:_ **formats**. 

#### Filters

If you are looking to upgrade your `filter` behavior please read on. In
`winston@2.x` this **filter** behavior:

``` js
const isSecret = /super secret/;
const logger = new winston.Logger(options);
logger.filters.push(function(level, msg, meta) {
  return msg.replace(isSecret, 'su*** se****');
});

// Outputs: {"level":"error","message":"Public error to share"}
logger.error('Public error to share');

// Outputs: {"level":"error","message":"This is su*** se**** - hide it."}
logger.error('This is super secret - hide it.');
```

Can be modeled as a **custom format** that you combine with other formats:

``` js
const { createLogger, format, transports } = require('winston');

// Ignore log messages if the have { private: true }
const isSecret = /super secret/;
const filterSecret = format((info, opts) => {
  info.message = info.message.replace(isSecret, 'su*** se****');
  return info;
});

const logger = createLogger({
  format: format.combine(
    filterSecret(),
    format.json()
  ),
  transports: [new transports.Console()]
});

// Outputs: {"level":"error","message":"Public error to share"}
logger.log({
  level: 'error',
  message: 'Public error to share'
});

// Outputs: {"level":"error","message":"This is su*** se**** - hide it."}
logger.log({
  level: 'error',
  message: 'This is super secret - hide it.'
});
```

#### Rewriters

If you are looking to upgrade your `rewriter` behavior please read on. In
`winston@2.x` this **rewriter** behavior:

``` js
const logger = new winston.Logger(options);
logger.rewriters.push(function(level, msg, meta) {
  if (meta.creditCard) {
    meta.creditCard = maskCardNumbers(meta.creditCard)
  }

  return meta;
});

logger.info('transaction ok', { creditCard: 123456789012345 });
```

Can be modeled as a **custom format** that you combine with other formats:

``` js 
const maskFormat = winston.format(info => {
  // You can CHANGE existing property values
  if (info.creditCard) {
    info.creditCard = maskCardNumbers(info.creditCard);
  }

  // You can also ADD NEW properties if you wish
  info.hasCreditCard = !!info.creditCard;

  return info;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    maskFormat(),
    winston.format.json()
  )
});

logger.info('transaction ok', { creditCard: 123456789012345 });
```

See [examples/format-mutate.js](/examples/format-mutate.js) for a complete
end-to-end example that covers both filtering and rewriting behavior in
`winston@2.x`.

## Modularity: `winston-transport`, `logform` and more...

As of `winston@3.0.0` the project has been broken out into a few modules:

- [winston-transport]: `Transport` stream implementation & legacy `Transport`
  wrapper.
- [logform]: All formats exports through `winston.format`. 
- `LEVEL` and `MESSAGE` symbols exposed through [triple-beam].
- [Shared test suite][abstract-winston-transport] for community transports. 

Let's dig in deeper. The example below has been annotated to demonstrate the different packages that compose the example itself:

``` js
const { createLogger, transports, format } = require('winston');
const Transport = require('winston-transport');
const logform = require('logform');
const { combine, timestamp, label, printf } = logform.format;

// winston.format is require('logform')
console.log(logform.format === format) // true

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    printf(nfo => {
      return `${nfo.timestamp} [${nfo.label}] ${nfo.level}: ${nfo.message}`;
    })
  ),
  transports: [new transports.Console()]
});
```

[Breaking changes]: #breaking-changes
[Top-level `winston.*` API]: #top-level-winston-api
[Transports]: #transports
[`winston.Container` and `winston.loggers`]: #winstoncontainer-and-winstonloggers
[`winston.Logger`]: #winstonlogger
[Exceptions & exception handling]: #exceptions--exception-handling
[Other minor breaking changes]: #other-minor-breaking-changes
[Upgrading to `winston.format`]: #upgrading-to-winstonformat
[Removed `winston.Logger` formatting options]: #removed-winstonlogger-formatting-options
[Removed `winston.transports.{File,Console,Http}` formatting options]: #removed-winstontransportsfileconsolehttp-formatting-options
[Migrating `filters` and `rewriters` to `formats` in `winston@3`]: #migrating-filters-and-rewriters-to-formats-in-winston3
[Modularity: `winston-transport`, `logform` and more]: #modularity-winston-transport-logform-and-more

[Filters and Rewriters]: #migrating-filters-and-rewriters-to-formats-in-winston3
[custom format]: /README.md#creating-custom-formats

[winston-transport]: https://github.com/winstonjs/winston-transport
[logform]: https://github.com/winstonjs/logform
[triple-beam]: https://github.com/winstonjs/triple-beam
[abstract-winston-transport]: https://github.com/winstonjs/abstract-winston-transport




================================================
FILE: .babelrc
================================================
{
  "presets": ["@babel/preset-env"]
}



================================================
FILE: .editorconfig
================================================
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# default configuration
[*]
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2

# Tab indentation (no size specified)
[Makefile]
indent_style = tab



================================================
FILE: .eslintrc
================================================
{
  "env": {
    "jest": true,
  },
  "extends": "@dabh/eslint-config-populist",
  "rules": {
    "one-var": ["error", { "var": "never", "let": "never", "const": "never" }],
    "strict": 0
  },
  "parserOptions": {
    "ecmaVersion": 2022,
  },
}



================================================
FILE: .npmignore
================================================
.nyc_output/
coverage/
docs
examples/
scratch/
test/
.*
*.log
*.md
appveyor.yml
tsconfig.json



================================================
FILE: .prettierrc
================================================
{
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "endOfLine": "auto"
}



================================================
FILE: docs/publishing.md
================================================
The release process here mostly follows along with the [vbump script](https://github.com/indexzero/vbump) that @indexzero wrote several years ago, but the main steps for a release are as follows:

1. Complete merging in any PRs that should be part of the release.
1. On the [Releases tab](https://github.com/winstonjs/winston/releases) in the GitHub UI, click 'Draft a new release' in the upper right corner.
1. Under the 'Choose a tag' dropdown, type the name of the new version starting with a v (e.g. `v3.7.0`) and don't forget to click the 'Create new tag on publish' option below (this step is annoyingly easy to miss):
![image](https://user-images.githubusercontent.com/563406/160644343-69325988-4ca2-4329-93da-e08266269506.png)
1. Paste the same version number, with or without the v (with is probably better) in the release title box.
1. Click 'Generate release notes' and cut & paste the draft contents into the changelog.
1. Paste the contents of the changelog for this release in the 'Describe this release' box.
1. Check to make sure you've caught everything (including direct commits) using GitHub's compare tool ([example here](https://github.com/winstonjs/winston/compare/v3.6.0...master)).
1. Update the changelog. It's nice to thank the contributors here.  It's nice to organize this by which changes would merit which level of semver bump, and especially call out any breaking changes (major-version-number) concisely at the start.
1. **Update the version number in package.json and package-lock.json**, bumping as appropriate for [semver](https://semver.org/) based on the most significant position change trigger from the changelog you just wrote/reviewed.  Do not miss this step! Also note there are two places in package-lock where this gets updated: at the top level and under the empty-string entry of packages.
1. Update the tag and version number on the Draft a New Release page, with the same number (which might've changed while drafting changelog notes).
1. Make sure your local master branch is up to date.
1. Make sure all the lint checks and tests pass, beyond what the CI might've told you.
1. Paste the contents of the changelog for this release in the 'Describe this release' box on the Draft a Release page.
1. Click "Publish release."
1. Back on the command line, `npm publish` and complete npm 2FA as needed.
1. Update the distribution tags, for example: `npm dist-tag add winston@3.7.0 3.x-latest`.
1. Verify the distribution tags look correct under the 'Versions' tab at https://www.npmjs.com/package/winston or with `npm dist-tag ls`.
1. Keep a closer-than-usual eye on issues in the hours and days that follow, prepared to quickly revert/address anything that might be associated with that release.

A more professional version of this would probably use a release branch off master to make sure no other maintainers merge a PR into master between the loading of a compare view for changelog preparation and completion of the process, but we're such a small team that the extra steps are probably not needed. After release, you can also verify with the compare view between the new and prior release tags to see when the latest change was and verify it was before you started the process.



================================================
FILE: docs/releases.md
================================================
# Past Release Roadmaps

Below is the list of items that made up the roadmap for past releases. 

- [Version 3.0.0](#version-300)

## Legend

- [ ] Unstarted work.
- [x] Finished work.
- [-] Partially finished or in-progress work. 

## Version `3.0.0`

### Show stoppers
- [x] `silent` support.
- [x] Finish `3.0.0` upgrade guide: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md
- [x] Triage all open issues since October 2017

### High priority issues (non-blocking)
- [x] [#1144]: this is _the_ purpose of `winston`. If we cannot log at high-volume we cannot ship out of RC. There was [test coverage for this][stress-test] that should be failing, but isnt. _(Fixed by #1291)._
- [x] Error handling within formats [#1261]
- [x] Update `docs/transports.md`.
- [Type definitions for TypeScript](https://github.com/winstonjs/winston/issues/1096)
  - [x] Supporting libraries: `winston-transport`, `logform`
  - [x] `winston` itself 

### Core logging
- [x] Make `Logger.prototype.level` and `Transport.level` play nice(r) together.
- [x] Remove `new winston.Logger` in favor of `winston.createLogger`.
- [x] Finish implementation for `TransportStream` and `LegacyTransportStream`. 
- [x] Move `TransportStream` and `LegacyTransportStream` into `winston-transport`.
- [x] Move `winston/config.js` to `winston/config/index.js`
- [x] **DEPRECATE** `winston.clone`
- [x] Add convenience methods from `winston-transport`
- [-] Replace all `vows`-based tests.
  - [x] `test/*-test.js`
  - [x] `test/formats/*-test.js` 
  - [-] `test/transports/*-test.js` 
- [x] Move `winston.config` into `triple-beam` around a base `Levels` class.
  _(Fixed in `triple-beam@1.2.0`)_
- [x] Update to the latest `npm` levels (e.g. including `http`).
- [ ] Code coverage tests above 80% for `winston` _(currently `~72%`)_.
- [x] Code coverage tests above 90% for `winston-transport`.
- [x] Code coverage tests above 90% for `logform`
- [-] Core scenarios covered in `abstract-winston-transport`.
- [x] Code coverage tests above 60% for `winston-compat`.

### Transports
- [x] Implement `stream.Writable.writev` in `TransportStream`.
- [x] Refactor all built-in transports to be TransportStream instances.
  - [x] Console
  - [x] File
  - [x] Http
  - [x] Steam

### Formats
- [x] `winston.format.colorize()` format.
- [x] `winston.format.prettyPrint()` format.
- [x] `winston.format.uncolorize()` format.
- [x] `winston.format.logstash()` format.
- [x] `winston.format.cli()`
- [x] String interpolation _(i.e. splat)_ via format
- [x] Use of different formats across multiple Transports. e.g.:
   - Colors on `Console`
   - Not on `File`
- [x] Mutable levels on `info` objects 
   – Use `triple-beam` and `Symbol.for('level')`.
   - Needed for `winston.formats.colorize()`. 
- [x] Quieter finalized output using `Symbol.for('message')` 
- [x] Filtering messages completely in a format.
- [x] `winston.format.padLevels()` format.
- [x] `humanReadableUnhandledException` should be the default

### Communications / Compatibility
- [x] Add friendly(ish) deprecation notices for common changes.
- [x] Create `winston-compat` to help with backwards compatibility for transport authors.  
- [x] Update the `README.md` in `winston`.
- [x] `README.md` for `winston-transport`.
- [x] `README.md` for `logform`.
- [x] Migrate all `examples/*.js` to the new API.

### Querying, Streaming, Uncaught Exceptions
- [x] Uncaught Exceptions

### Other Miscellaneous API changes
- [x] Move `LogStream` back to `Logger`.
- [x] Add LogStream.prototype.configure from `winston@2.0.0`
- [x] `winston.Container` instances no longer add any transports by default.
- [x] Strip wrapping `(` `)` from all occurances of `new winston.transports.*)`

### Benchmarking
- [x] Benchmark against `winston@1.0.0` in `logmark`.
- [x] Benchmark against `winston@2.0.0` in `logmark`.
- [x] Benchmark JSON format against `bunyan` in `logmark`.
- [x] Benchmark against `pino` in `logmark`.
- [x] Submit PR for all `pino` benchmarks.



================================================
FILE: docs/transports.md
================================================
# Winston Transports

In `winston` a transport is essentially a storage device for your logs. Each
instance of a winston logger can have multiple transports configured at
different levels. For example, one may want error logs to be stored in a
persistent remote location (like a database), but all logs output to the
console or a local file.

There are several [core transports](#built-in-to-winston) included in `winston`
that leverage the built-in networking and file I/O offered by Node.js core. In
addition, there are transports which are [actively supported by winston
contributors](#maintained-by-winston-contributors). And last (but not least)
there are additional transports written by
[members of the community](#community-transports).

> Additionally there are transports previously maintained by winston
> contributors that are [looking for maintainers](#looking-for-maintainers).

* **[Built-in to winston](#built-in-to-winston)**
  * [Console](#console-transport)
  * [File](#file-transport)
  * [Http](#http-transport)
  * [Stream](#stream-transport)

* **[Maintained by winston contributors](#maintained-by-winston-contributors)**
  * [DailyRotateFile](#dailyrotatefile-transport)
  * [MongoDB](#mongodb-transport)
  * [Syslog](#syslog-transport)

* **[Community Transports](#community-transports)**
  * [Airbrake](#airbrake-transport)
  * [Amazon CloudWatch](#amazon-cloudwatch-transport)
  * [Amazon DynamoDB](#amazon-dynamodb-transport)
  * [Amazon Kinesis Firehose](#amazon-kinesis-firehose-transport)
  * [Amazon SNS](#amazon-sns-simple-notification-system-transport)
  * [Azure Table](#azure-table)
  * [Cassandra](#cassandra-transport)
  * [Cisco Spark](#cisco-spark-transport)
  * [Cloudant](#cloudant)
  * [Datadog](#datadog-transport)
  * [Elasticsearch](#elasticsearch-transport)
  * [FastFileRotate](#fastfilerotate-transport)
  * [Google BigQuery](#google-bigquery)
  * [Google Stackdriver Logging](#google-stackdriver-transport)
  * [Graylog2](#graylog2-transport)
  * [Humio](#humio-transport)
  * [LogDNA](#logdna-transport)
  * [Logsene](#logsene-transport) (including Log-Alerts and Anomaly Detection)
  * [Logz.io](#logzio-transport)
  * [Mail](#mail-transport)
  * [MySQL](#mysql-transport)
  * [New Relic](#new-relic-agent-transport)
  * [Papertrail](#papertrail-transport)
  * [Parseable](#parseable)
  * [PostgresQL](#postgresql-transport)
  * [Pusher](#pusher-transport)
  * [Sentry](#sentry-transport)
  * [Seq](#seq-transport)
  * [SimpleDB](#simpledb-transport)
  * [Slack](#slack-transport)
  * [SQLite3](#sqlite3-transport)
  * [SSE with KOA 2](#sse-transport-with-koa-2)
  * [Sumo Logic](#sumo-logic-transport)
  * [VS Code extension](#vs-code-extension)
  * [Worker Thread based async Console transport](#worker-thread-based-async-console-transport)
  * [Winlog2 Transport](#winlog2-transport)

* **[Looking for maintainers](#looking-for-maintainers)**
  * [CouchDB](#couchdb-transport)
  * [Loggly](#loggly-transport)
  * [Redis](#redis-transport)
  * [Riak](#riak-transport)

## Built-in to winston

There are several core transports included in `winston`, which leverage the built-in networking and file I/O offered by Node.js core.

* [Console](#console-transport)
* [File](#file-transport)
* [Http](#http-transport)
* [Stream](#stream-transport)

### Console Transport

``` js
logger.add(new winston.transports.Console(options));
```

The Console transport takes a few simple options:

* __level:__ Level of messages that this transport should log (default: level set on parent logger).
* __silent:__ Boolean flag indicating whether to suppress output (default false).
* __eol:__ string indicating the end-of-line characters to use (default `os.EOL`)
* __stderrLevels__ Array of strings containing the levels to log to stderr instead of stdout, for example `['error', 'debug', 'info']`. (default `[]`)
* __consoleWarnLevels__ Array of strings containing the levels to log using console.warn or to stderr (in Node.js) instead of stdout, for example `['warn', 'debug']`. (default `[]`)

### File Transport
``` js
logger.add(new winston.transports.File(options));
```

The File transport supports a variety of file writing options. If you are
looking for daily log rotation see [DailyRotateFile](#dailyrotatefile-transport)

* __level:__ Level of messages that this transport should log (default: level set on parent logger).
* __silent:__ Boolean flag indicating whether to suppress output (default false).
* __eol:__ Line-ending character to use. (default: `os.EOL`).
* __lazy:__ If true, log files will be created on demand, not at the initialization time.
* __filename:__ The filename of the logfile to write output to.
* __maxsize:__ Max size in bytes of the logfile, if the size is exceeded then a new file is created, a counter will become a suffix of the log file.
* __maxFiles:__ Limit the number of files created when the size of the logfile is exceeded.
* __tailable:__ If true, log files will be rolled based on maxsize and maxfiles, but in ascending order. The __filename__ will always have the most recent log lines. The larger the appended number, the older the log file.  This option requires __maxFiles__ to be set, or it will be ignored.
* __maxRetries:__ The number of stream creation retry attempts before entering a failed state. In a failed state the transport stays active but performs a NOOP on it's log function. (default 2)
* __zippedArchive:__ If true, all log files but the current one will be zipped.
* __options:__ options passed to `fs.createWriteStream` (default `{flags: 'a'}`).
* __stream:__ **DEPRECATED** The WriteableStream to write output to.

### Http Transport

``` js
logger.add(new winston.transports.Http(options));
```

The `Http` transport is a generic way to log, query, and stream logs from an arbitrary Http endpoint, preferably [winstond][1]. It takes options that are passed to the node.js `http` or `https` request:

* __host:__ (Default: **localhost**) Remote host of the HTTP logging endpoint
* __port:__ (Default: **80 or 443**) Remote port of the HTTP logging endpoint
* __path:__ (Default: **/**) Remote URI of the HTTP logging endpoint
* __auth:__ (Default: **None**) An object representing the `username` and `password` for HTTP Basic Auth
* __ssl:__ (Default: **false**) Value indicating if we should use HTTPS
* __batch:__ (Default: **false**) Value indicating if batch mode should be used. A batch of logs to send through the HTTP request when one of the batch options is reached: number of elements, or timeout
* __batchInterval:__ (Default: **5000 ms**) Value indicating the number of milliseconds to wait before sending the HTTP request
* __batchCount:__ (Default: **10**) Value indicating the number of logs to cumulate before sending the HTTP request

### Stream Transport

``` js
logger.add(new winston.transports.Stream({
  stream: fs.createWriteStream('/dev/null')
  /* other options */
}));
```

The Stream transport takes a few simple options:

* __stream:__ any Node.js stream. If an `objectMode` stream is provided then
  the entire `info` object will be written. Otherwise `info[MESSAGE]` will be
  written.
* __level:__ Level of messages that this transport should log (default: level set on parent logger).
* __silent:__ Boolean flag indicating whether to suppress output (default false).
* __eol:__ Line-ending character to use. (default: `os.EOL`).

## Maintained by winston contributors

Starting with `winston@0.3.0` an effort was made to remove any transport which added additional dependencies to `winston`. At the time there were several transports already in `winston` which will have slowly waned in usage. The
following transports are **actively maintained by members of the winston Github
organization.**

* [MongoDB](#mongodb-transport)
* [DailyRotateFile](#dailyrotatefile-transport)
* [Syslog](#syslog-transport)

### MongoDB Transport

As of `winston@0.3.0` the MongoDB transport has been broken out into a new module: [winston-mongodb][14]. Using it is just as easy:

``` js
const winston = require('winston');

/**
 * Requiring `winston-mongodb` will expose
 * `winston.transports.MongoDB`
 */
require('winston-mongodb');

logger.add(new winston.transports.MongoDB(options));
```

The MongoDB transport takes the following options. 'db' is required:

* __level:__ Level of messages that this transport should log, defaults to
'info'.
* __silent:__ Boolean flag indicating whether to suppress output, defaults to
false.
* __db:__ MongoDB connection uri, pre-connected db object or promise object
which will be resolved with pre-connected db object.
* __options:__ MongoDB connection parameters (optional, defaults to
`{poolSize: 2, autoReconnect: true}`).
* __collection__: The name of the collection you want to store log messages in,
defaults to 'log'.
* __storeHost:__ Boolean indicating if you want to store machine hostname in
logs entry, if set to true it populates MongoDB entry with 'hostname' field,
which stores os.hostname() value.
* __username:__ The username to use when logging into MongoDB.
* __password:__ The password to use when logging into MongoDB. If you don't
supply a username and password it will not use MongoDB authentication.
* __label:__ Label stored with entry object if defined.
* __name:__ Transport instance identifier. Useful if you need to create multiple
MongoDB transports.
* __capped:__ In case this property is true, winston-mongodb will try to create
new log collection as capped, defaults to false.
* __cappedSize:__ Size of logs capped collection in bytes, defaults to 10000000.
* __cappedMax:__ Size of logs capped collection in number of documents.
* __tryReconnect:__ Will try to reconnect to the database in case of fail during
initialization. Works only if __db__ is a string. Defaults to false.
* __expireAfterSeconds:__ Seconds before the entry is removed. Works only if __capped__ is not set.

*Metadata:* Logged as a native JSON object in 'meta' property.

*Logging unhandled exceptions:* For logging unhandled exceptions specify
winston-mongodb as `handleExceptions` logger according to winston documentation.

### DailyRotateFile Transport

See [winston-dailyrotatefile](https://github.com/winstonjs/winston-daily-rotate-file).

### Syslog Transport

See [winston-syslog](https://github.com/winstonjs/winston-syslog).

## Community Transports

The community has truly embraced `winston`; there are over **23** winston transports and over half of them are maintained by authors external to the winston core team. If you want to check them all out, just search `npm`:

``` bash
  $ npm search winston
```

**If you have an issue using one of these modules you should contact the module author directly**

### Airbrake Transport

[winston-airbrake2][22] is a transport for winston that sends your logs to Airbrake.io.

``` js
const winston = require('winston');
const { Airbrake } = require('winston-airbrake2');
logger.add(new Airbrake(options));
```

The Airbrake transport utilises the node-airbrake module to send logs to the Airbrake.io API. You can set the following options:

* __apiKey__: The project API Key. (required, default: null)
* __name__: Transport name. (optional, default: 'airbrake')
* __level__: The level of message that will be sent to Airbrake (optional, default: 'error')
* __host__: The information that is displayed within the URL of the Airbrake interface. (optional, default: 'http://' + os.hostname())
* __env__: The environment will dictate what happens with your message. If your environment is currently one of the 'developmentEnvironments', the error will not be sent to Airbrake. (optional, default: process.env.NODE_ENV)
* __timeout__: The maximum time allowed to send to Airbrake in milliseconds. (optional, default: 30000)
* __developmentEnvironments__: The environments that will **not** send errors to Airbrake. (optional, default: ['development', 'test'])
* __projectRoot__: Extra string sent to Airbrake. (optional, default: null)
* __appVersion__: Extra string or number sent to Airbrake. (optional, default: null)
* __consoleLogError__: Toggle the logging of errors to console when the current environment is in the developmentEnvironments array. (optional, default: false)

### Amazon CloudWatch Transport

The [winston-aws-cloudwatch][25] transport relays your log messages to Amazon CloudWatch.

```js
const winston = require('winston');
const AwsCloudWatch = require('winston-aws-cloudwatch');

logger.add(new AwsCloudWatch(options));
```

Options:

* __logGroupName:__ The name of the CloudWatch log group to which to log. *[required]*
* __logStreamName:__ The name of the CloudWatch log stream to which to log. *[required]*
* __awsConfig:__ An object containing your `accessKeyId`, `secretAccessKey`, `region`, etc.

~~Alternatively, you may be interested in [winston-cloudwatch][26].~~
`lazywithclass/winston-cloudwatch` is no longer maintained. Use
[@initd-sg/winston-cloudwatch](https://github.com/initdsg/winston-cloudwatch)

### Amazon DynamoDB Transport
The [winston-dynamodb][36] transport uses Amazon's DynamoDB as a sink for log messages. You can take advantage of the various authentication methods supports by Amazon's aws-sdk module. See [Configuring the SDK in Node.js](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html).

``` js
const winston = require('winston');
const { DynamoDB } = require('winston-dynamodb');

logger.add(new DynamoDB(options));
```

Options:
* __accessKeyId:__ your AWS access key id
* __secretAccessKey:__ your AWS secret access key
* __region:__ the region where the domain is hosted
* __useEnvironment:__ use process.env values for AWS access, secret, & region.
* __tableName:__ DynamoDB table name

To Configure using environment authentication:
``` js
logger.add(new winston.transports.DynamoDB({
  useEnvironment: true,
  tableName: 'log'
}));
```

Also supports callbacks for completion when the DynamoDB putItem has been completed.

### Amazon Kinesis Firehose Transport

The [winston-firehose][28] transport relays your log messages to Amazon Kinesis Firehose.

```js
const winston = require('winston');
const WFirehose = require('winston-firehose');

logger.add(new WFirehose(options));
```

Options:

* __streamName:__ The name of the Amazon Kinesis Firehose stream to which to log. *[required]*
* __firehoseOptions:__ The AWS Kinesis firehose options to pass direction to the firehose client, [as documented by AWS](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Firehose.html#constructor-property). *[required]*

### Amazon SNS (Simple Notification System) Transport

The [winston-sns][18] transport uses amazon SNS to send emails, texts, or a bunch of other notifications. Since this transport uses the Amazon AWS SDK for JavaScript, you can take advantage of the various methods of authentication found in Amazon's [Configuring the SDK in Node.js](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html) document.

``` js
const winston = require('winston');
const SnsTransport = require('winston-sns');

logger.add(new SnsTransport(options));
```

Options:

* __subscriber:__ Subscriber number - found in your SNS AWS Console, after clicking on a topic. Same as AWS Account ID. *[required]*
* __topic_arn:__ Also found in SNS AWS Console - listed under a topic as Topic ARN. *[required]*
* __aws_key:__ Your Amazon Web Services Key.
* __aws_secret:__ Your Amazon Web Services Secret.
* __region:__ AWS Region to use. Can be one of: `us-east-1`,`us-west-1`,`eu-west-1`,`ap-southeast-1`,`ap-northeast-1`,`us-gov-west-1`,`sa-east-1`. (default: `us-east-1`)
* __subject:__ Subject for notifications. Uses placeholders for level (%l), error message (%e), and metadata (%m). (default: "Winston Error Report")
* __message:__ Message of notifications. Uses placeholders for level (%l), error message (%e), and metadata (%m). (default: "Level '%l' Error:\n%e\n\nMetadata:\n%m")
* __level:__ lowest level this transport will log. (default: `info`)
* __json:__ use json instead of a prettier (human friendly) string for meta information in the notification. (default: `false`)
* __handleExceptions:__ set to true to have this transport handle exceptions. (default: `false`)

### Azure Table

[winston-azuretable][21] is a Azure Table transport:

``` js
const { AzureLogger } = require('winston-azuretable');
logger.add(new AzureLogger(options));
```

The Azure Table transport connects to an Azure Storage Account using the following options:

* __useDevStorage__: Boolean flag denoting whether to use the Azure Storage Emulator (default: `false`)
* __account__: Azure Storage Account Name. In lieu of this setting, you can set the environment variable: `AZURE_STORAGE_ACCOUNT`
* __key__: Azure Storage Account Key. In lieu of this setting, you can set the environment variable: `AZURE_STORAGE_ACCESS_KEY`
* __level__: lowest logging level transport to be logged (default: `info`)
* __tableName__: name of the table to log messages (default: `log`)
* __partitionKey__: table partition key to use (default: `process.env.NODE_ENV`)
* __silent__: Boolean flag indicating whether to suppress output (default: `false`)

### Cassandra Transport

[winston-cassandra][20] is a Cassandra transport:

``` js
const Cassandra = require('winston-cassandra').Cassandra;
logger.add(new Cassandra(options));
```

The Cassandra transport connects to a cluster using the native protocol with the following options:

* __level:__ Level of messages that this transport should log (default: `'info'`).
* __table:__ The name of the Cassandra column family you want to store log messages in (default: `'logs'`).
* __partitionBy:__ How you want the logs to be partitioned. Possible values `'hour'` and `'day'`(Default).
* __consistency:__ The consistency of the insert query (default: `quorum`).

In addition to the options accepted by the [Node.js Cassandra driver](https://github.com/jorgebay/node-cassandra-cql) Client.

* __hosts:__ Cluster nodes that will handle the write requests:
Array of strings containing the hosts, for example `['host1', 'host2']` (required).
* __keyspace:__ The name of the keyspace that will contain the logs table (required). The keyspace should be already created in the cluster.

### Cisco Spark Transport

[winston-spark][31] is a transport for [Cisco Spark](https://www.ciscospark.com/)

``` js
const winston = require('winston');
require('winston-spark');

const options = {
  accessToken: '***Your Spark Access Token***',
  roomId: '***Spark Room Id***'
};

logger.add(new winston.transports.SparkLogger(options));
```

Valid Options are as the following:
* __accessToken__ Your Spark Access Token. *[required]*
* __roomId__ Spark Room Id. *[required]*
* __level__ Log Level (default: info)
* __hideMeta__ Hide MetaData (default: false)

### Cloudant
[winston-clodant][34] is a transport for Cloudant NoSQL Db.

```js
const winston = require('winston');
const WinstonCloudant = require('winston-cloudant');
logger.add(new WinstonCloudant(options));
```

The Cloudant transport takes the following options:

    url         : Access url including user and password [required]
    username    : Username for the Cloudant DB instance
    password    : Password for the Cloudant DB instance
    host        : Host for the Cloudant DB instance
    db          : Name of the databasename to put logs in
    logstash    : Write logs in logstash format

### Datadog Transport
[datadog-logger-integrations][38] is a transport to ship your logs to DataDog.

```javascript
var winston = require('winston')
var { DataDogTransport } = require('datadog-logger-integrations/winston')

var logger = winston.createLogger({
  // Whatever options you need
  // Refer https://github.com/winstonjs/winston#creating-your-own-logger
})

logger.add(
  new DataDogTransport({
    ddClientConfig: {
      authMethods: {
        apiKeyAuth: apiKey,
      },
    },
    service: 'super_service',
    ddSource: 'nodejs',
    ddTags: 'foo:bar,boo:baz'
  })
)
```

Options:
* __ddClientConfig__: DataDog client config *[required]*
* __service__: The name of the application or service generating the logs
* __ddsource__: The technology from which the logs originated
* __ddtags__: Metadata associated with the logs

### Google BigQuery
[winston-bigquery][42] is a transport for Google BigQuery.

```js
import {WinstonBigQuery} from 'winston-bigquery';
import winston, {format} from 'winston';

const logger = winston.createLogger({
	transports: [
		new WinstonBigQuery({
			tableId: 'winston_logs',
			datasetId: 'logs'
		})
	]
});
```

The Google BigQuery takes the following options:

* __datasetId__   	      	    : Your dataset name [required]
* __tableId__     	  	    : Table name in the datase [required]
* __applicationCredentials__    : a path to local service worker (useful in dev env) [Optional]

**Pay Attention**, since BQ, unlike some other products, is not a "schema-less" you will need to build the schema in advance.
read more on the topic on [github][42] or [npmjs.com][43]

### Google Stackdriver Transport

[@google-cloud/logging-winston][29] provides a transport to relay your log messages to [Stackdriver Logging][30].

```js
const winston = require('winston');
const Stackdriver = require('@google-cloud/logging-winston');
logger.add(new Stackdriver({
  projectId: 'your-project-id',
  keyFilename: '/path/to/keyfile.json'
}));
```

### Graylog2 Transport

[winston-graylog2][19] is a Graylog2 transport:

``` js
const winston = require('winston');
const Graylog2 = require('winston-graylog2');
logger.add(new Graylog2(options));
```

The Graylog2 transport connects to a Graylog2 server over UDP using the following options:

* __name__:  Transport name
* __level__: Level of messages this transport should log. (default: info)
* __silent__: Boolean flag indicating whether to suppress output. (default: false)
* __handleExceptions__: Boolean flag, whenever to handle uncaught exceptions. (default: false)
* __graylog__:
  - __servers__; list of graylog2 servers
    * __host__: your server address (default: localhost)
    * __port__: your server port (default: 12201)
  - __hostname__: the name of this host (default: os.hostname())
  - __facility__: the facility for these log messages (default: "Node.js")
  - __bufferSize__: max UDP packet size, should never exceed the MTU of your system (default: 1400)

### Elasticsearch Transport

Log to Elasticsearch in a logstash-like format and
leverage Kibana to browse your logs.

See: https://github.com/vanthome/winston-elasticsearch.

### FastFileRotate Transport

[fast-file-rotate][35] is a performant file transport providing daily log rotation.

```js
const FileRotateTransport = require('fast-file-rotate');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new FileRotateTransport({
      fileName: __dirname + '/console%DATE%.log'
    })
  ]
})
```

### Humio Transport

[humio-winston][44] is a transport for sending logs to Humio:

``` js
const winston = require('winston');
const HumioTransport = require('humio-winston');

const logger = winston.createLogger({
  transports: [
    new HumioTransport({
      ingestToken: '<YOUR HUMIO INGEST TOKEN>',
    }),
  ],
});
```

### LogDNA Transport

[LogDNA Winston][37] is a transport for being able to forward the logs to [LogDNA](https://logdna.com/):

``` js
const logdnaWinston = require('logdna-winston');
const winston = require('winston');
const logger = winston.createLogger({});
const options = {
    key: apikey, // the only field required
    hostname: myHostname,
    ip: ipAddress,
    mac: macAddress,
    app: appName,
    env: envName,
    index_meta: true // Defaults to false, when true ensures meta object will be searchable
};

// Only add this line in order to track exceptions
options.handleExceptions = true;

logger.add(new logdnaWinston(options));

let meta = {
    data:'Some information'
};
logger.log('info', 'Log from LogDNA Winston', meta);
```

### Logzio Transport

You can download the logzio transport here : [https://github.com/logzio/winston-logzio](https://github.com/logzio/winston-logzio)

*Basic Usage*
```js
const winston = require('winston');
const Logzio = require('winston-logzio');

logger.add(new Logzio({
  token: '__YOUR_API_TOKEN__'
}));
```

For more information about how to configure the logzio transport, view the README.md in the [winston-logzio repo](https://github.com/logzio/winston-logzio).

### Logsene Transport

[winston-logsene][24] transport for Elasticsearch bulk indexing via HTTPS to Logsene:

``` js
const winston = require('winston');
const Logsene = require('winston-logsene');

logger.add(new Logsene({
  token: process.env.LOGSENE_TOKEN
  /* other options */
}));
```
Options:
* __token__: Logsene Application Token
* __source__: Source of the logs (defaults to main module)

[Logsene](http://www.sematext.com/logsene/) features:
- Fulltext search
- Anomaly detection and alerts
- Kibana4 integration
- Integration with [SPM Performance Monitoring for Node.js](http://www.sematext.com/spm/integrations/nodejs-monitoring.html)

### Mail Transport

The [winston-mail][16] is an email transport:

``` js
const { Mail } = require('winston-mail');
logger.add(new Mail(options));
```

The Mail transport uses [node-mail][17] behind the scenes.  Options are the following, `to` and `host` are required:

* __to:__ The address(es) you want to send to. *[required]*
* __from:__ The address you want to send from. (default: `winston@[server-host-name]`)
* __host:__ SMTP server hostname
* __port:__ SMTP port (default: 587 or 25)
* __secure:__ Use secure
* __username__ User for server auth
* __password__ Password for server auth
* __level:__ Level of messages that this transport should log.
* __silent:__ Boolean flag indicating whether to suppress output.

*Metadata:* Stringified as JSON in email.

### MySQL Transport

[winston-mysql](https://github.com/charles-zh/winston-mysql) is a MySQL transport for Winston.

Create a table in your database first:

```sql
 CREATE TABLE `sys_logs_default` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `level` VARCHAR(16) NOT NULL,
 `message` VARCHAR(2048) NOT NULL,
 `meta` VARCHAR(2048) NOT NULL,
 `timestamp` DATETIME NOT NULL,
 PRIMARY KEY (`id`));
```

> You can also specify `meta` to be a `JSON` field on MySQL 5.7+, i.e., ``meta` JSON NOT NULL`, which is helfpul for searching and parsing.

Configure Winston with the transport:

```javascript
import MySQLTransport from 'winston-mysql';

const options = {
    host: '${MYSQL_HOST}',
    user: '${MYSQL_USER}',
    password: '${MYSQL_PASSWORD}',
    database: '${MYSQL_DATABASE}',
    table: 'sys_logs_default'
};

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new MySQLTransport(options),
    ],
});

/// ...
let msg = 'My Log';
logger.info(msg, {message: msg, type: 'demo'});
```


### New Relic Agent Transport

[winston-newrelic-agent-transport][47] is a New Relic transport that leverages the New Relic agent:

``` js
import winston from 'winston'
import NewrelicTransport from 'winston-newrelic-agent-transport'

const logger = winston.createLogger()

const options = {}
logger.add(new NewrelicTransport(options))
```

The New Relic agent typically automatically forwards Winston logs to New Relic when using CommonJS. With CommonJS no additional transport should be needed. However, when using ECMAScript modules, the automatic forwarding of logs can with certain coding patterns not work. If the New Relic agent is not automatically forwarding your logs, this transport provides a solution.

Options:

* __level__ (optional): The Winston logging level to use as the maximum level of messages that the transport will log.
* __rejectCriteria__ (optional): The rejectCriteria option allows you to specify an array of regexes that will be matched against either the Winston info object or log message to determine whether or not a log message should be rejected and not logged to New Relic.

### Papertrail Transport

[winston-papertrail][27] is a Papertrail transport:

``` js
const { Papertrail } = require('winston-papertrail');
logger.add(new Papertrail(options));
```

The Papertrail transport connects to a [PapertrailApp log destination](https://papertrailapp.com) over TCP (TLS) using the following options:

* __level:__ Level of messages this transport should log. (default: info)
* __host:__ FQDN or IP address of the Papertrail endpoint.
* __port:__ Port for the Papertrail log destination.
* __hostname:__ The hostname associated with messages. (default: require('os').hostname())
* __program:__ The facility to send log messages.. (default: default)
* __logFormat:__ a log formatting function with the signature `function(level, message)`, which allows custom formatting of the level or message prior to delivery

*Metadata:* Logged as a native JSON object to the 'meta' attribute of the item.

### Parseable Transport

[Parseable](https://parseable.com/) is an open source, general purpose log analytics system. [Parseable-Winston](https://github.com/jybleau/parseable-node-loggers/tree/main/packages/winston#parseable-winston) is a Parseable transport for Winston.

```js
// Using cjs
const { ParseableTransport } = require('parseable-winston')
const winston = require('winston')

const parseable = new ParseableTransport({
  url: process.env.PARSEABLE_LOGS_URL, // Ex: 'https://parsable.myserver.local/api/v1/logstream'
  username: process.env.PARSEABLE_LOGS_USERNAME,
  password: process.env.PARSEABLE_LOGS_PASSWORD,
  logstream: process.env.PARSEABLE_LOGS_LOGSTREAM, // The logstream name
  tags: { tag1: 'tagValue' } // optional tags to be added with each ingestion
})

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [parseable],
  defaultMeta: { instance: 'app', hostname: 'app1' }
})

logger.info('User took the goggles', { userid: 1, user: { name: 'Rainier Wolfcastle' } })
logger.warning('The goggles do nothing', { userid: 1 })
```

### PostgresQL Transport

[@pauleliet/winston-pg-native](https://github.com/petpano/winston-pg-native) is a PostgresQL transport supporting Winston 3.X.

### Pusher Transport
[winston-pusher](https://github.com/meletisf/winston-pusher) is a Pusher transport.

```js
const { PusherLogger } = require('winston-pusher');
logger.add(new PusherLogger(options));
```

This transport sends the logs to a Pusher app for real time processing and it uses the following options:

* __pusher__ [Object]
  * __appId__ The application id obtained from the dashboard
  * __key__ The application key obtained from the dashboard
  * __secret__ The application secret obtained from the dashboard
  * __cluster__ The cluster
  * __encrypted__ Whether the data will be send through SSL
* __channel__ The channel of the event (default: default)
* __event__ The event name (default: default)

### Sentry Transport
[winston-transport-sentry-node][41] is a transport for [Sentry](https://sentry.io/) uses [@sentry/node](https://www.npmjs.com/package/@sentry/node).

```js
const Sentry = require('winston-transport-sentry-node').default;
logger.add(new Sentry({
  sentry: {
    dsn: 'https://******@sentry.io/12345',
  },
  level: 'info'
}));
```

This transport takes the following options:

* __sentry:__ [Object]
  * __dsn:__ Sentry DSN or Data Source Name (default: `process.env.SENTRY_DSN`) **REQUIRED**
  * __environment:__ The application environment (default: `process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'production'`)
  * __serverName:__  The application name
  * __debug:__ Turns debug mode on or off (default: `process.env.SENTRY_DEBUG || false`)
  * __sampleRate:__ Sample rate as a percentage of events to be sent in the range of 0.0 to 1.0 (default: `1.0`)
  * __maxBreadcrumbs:__ Total amount of breadcrumbs that should be captured (default: `100`)
* __level:__ Level of messages that this transport should log
* __silent:__  Boolean flag indicating whether to suppress output, defaults to false

### Seq Transport

[winston-seq][45] is a transport that sends structured log events to [Seq](https://datalust.co/seq).

```js
const { SeqTransport } = require('@datalust/winston-seq');
logger.add(new SeqTransport({
  serverUrl: "https://your-seq-server:5341",
  apiKey: "your-api-key",
  onError: (e => { console.error(e) }),
}));
```

`SeqTransport` is configured with the following options:

* __serverUrl__ - the URL for your Seq server's ingestion
* __apiKey__ - (optional) The Seq API Key to use
* __onError__ - Callback to execute when an error occurs within the transport

### SimpleDB Transport

The [winston-simpledb][15] transport is just as easy:

``` js
const SimpleDB = require('winston-simpledb').SimpleDB;
logger.add(new SimpleDB(options));
```

The SimpleDB transport takes the following options. All items marked with an asterisk are required:

* __awsAccessKey__:* your AWS Access Key
* __secretAccessKey__:* your AWS Secret Access Key
* __awsAccountId__:* your AWS Account Id
* __domainName__:* a string or function that returns the domain name to log to
* __region__:* the region your domain resides in
* __itemName__: a string ('uuid', 'epoch', 'timestamp') or function that returns the item name to log

*Metadata:* Logged as a native JSON object to the 'meta' attribute of the item.

### Slack Transport
[winston-slack-webhook-transport][39] is a transport that sends all log messages to the Slack chat service.

```js
const winston = require('winston');
const SlackHook = require('winston-slack-webhook-transport');

const logger = winston.createLogger({
	level: 'info',
	transports: [
		new SlackHook({
			webhookUrl: 'https://hooks.slack.com/services/xxx/xxx/xxx'
		})
	]
});

logger.info('This should now appear on Slack');
```

This transport takes the following options:

* __webhookUrl__ - Slack incoming webhook URL. This can be from a basic integration or a bot. **REQUIRED**
* __channel__ - Slack channel to post message to.
* __username__ - Username to post message with.
* __iconEmoji__ - Status icon to post message with. (interchangeable with __iconUrl__)
* __iconUrl__ - Status icon to post message with. (interchangeable with __iconEmoji__)
* __formatter__ - Custom function to format messages with. This function accepts the __info__ object ([see Winston documentation](https://github.com/winstonjs/winston/blob/master/README.md#streams-objectmode-and-info-objects)) and must return an object with at least one of the following three keys: __text__ (string), __attachments__ (array of [attachment objects](https://api.slack.com/docs/message-attachments)), __blocks__ (array of [layout block objects](https://api.slack.com/messaging/composing/layouts)). These will be used to structure the format of the logged Slack message. By default, messages will use the format of `[level]: [message]` with no attachments or layout blocks.
* __level__ - Level to log. Global settings will apply if this is blank.
* __unfurlLinks__ - Enables or disables [link unfurling.](https://api.slack.com/docs/message-attachments#unfurling) (Default: false)
* __unfurlMedia__ - Enables or disables [media unfurling.](https://api.slack.com/docs/message-link-unfurling) (Default: false)
* __mrkdwn__ - Enables or disables [`mrkdwn` formatting](https://api.slack.com/messaging/composing/formatting#basics) within attachments or layout blocks (Default: false)

### SQLite3 Transport

The [winston-better-sqlite3][40] transport uses [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3).

```js
const wbs = require('winston-better-sqlite3');
logger.add(new wbs({

    // path to the sqlite3 database file on the disk
    db: '<name of sqlite3 database file>',

    // A list of params to log
    params: ['level', 'message']
}));
```

### Sumo Logic Transport
[winston-sumologic-transport][32] is a transport for Sumo Logic

``` js
const winston = require('winston');
const { SumoLogic } = require('winston-sumologic-transport');

logger.add(new SumoLogic(options));
```

Options:
* __url__: The Sumo Logic HTTP collector URL

### SSE transport with KOA 2
[winston-koa-sse](https://github.com/alexvictoor/winston-koa-sse) is a transport that leverages on Server Sent Event. With this transport you can use your browser console to view your server logs.

### VS Code extension

[winston-transport-vscode][48] is a transport for VS Code extension development.

```js
const vscode = require('vscode');
const winston = require('winston');
const { OutputChannelTransport } = require('winston-transport-vscode');

const outputChannel = vscode.window.createOutputChannel('My extension');

const logger = winston.createLogger({
  transports: [new OutputChannelTransport({ outputChannel })],
});
```

The extension includes dedicated log levels and format for using with VS Code's
LogOutputChannel.

```js
const { LogOutputChannelTransport } = require('winston-transport-vscode');

const outputChannel = vscode.window.createOutputChannel('My extension', {
  log: true,
});

const logger = winston.createLogger({
  levels: LogOutputChannelTransport.config.levels,
  format: LogOutputChannelTransport.format(),
  transports: [new LogOutputChannelTransport({ outputChannel })],
});
```


### Worker Thread based async Console transport

[winston-console-transport-in-worker][46]

```typescript
import * as winston from 'winston';
import { ConsoleTransportInWorker } from '@greeneyesai/winston-console-transport-in-worker';

...

export const logger: winston.Logger = winston.createLogger({
    format: combine(timestamp(), myFormat),
    level: Level.INFO,
    transports: [new ConsoleTransportInWorker()],
});
```

The `ConsoleTransportInWorker` is a subclass of `winston.transports.Console` therefore accepting the same options as the `Console` transport.

TypeScript supported.

### Winlog2 Transport

[winston-winlog2][33] is a Windows Event log transport:

``` js
const winston = require('winston');
const Winlog2 = require('winston-winlog2');
logger.add(new Winlog2(options));
```

The winlog2 transport uses the following options:

* __name__:  Transport name
* __eventLog__: Log type (default: 'APPLICATION')
* __source__: Name of application which will appear in event log (default: 'node')

## Looking for maintainers

These transports are part of the `winston` Github organization but are
actively seeking new maintainers. Interested in getting involved? Open an
issue on `winston` to get the conversation started!

* [CouchDB](#couchdb-transport)
* [Loggly](#loggly-transport)
* [Redis](#redis-transport)
* [Riak](#riak-transport)

### CouchDB Transport

_As of `winston@0.6.0` the CouchDB transport has been broken out into a new module: [winston-couchdb][2]._

``` js
const WinstonCouchDb = require('winston-couchdb');
logger.add(new WinstonCouchdb(options));
```

The `Couchdb` will place your logs in a remote CouchDB database. It will also create a [Design Document][3], `_design/Logs` for later querying and streaming your logs from CouchDB. The transport takes the following options:

* __host:__ (Default: **localhost**) Remote host of the HTTP logging endpoint
* __port:__ (Default: **5984**) Remote port of the HTTP logging endpoint
* __db:__ (Default: **winston**) Remote URI of the HTTP logging endpoint
* __auth:__ (Default: **None**) An object representing the `username` and `password` for HTTP Basic Auth
* __ssl:__ (Default: **false**) Value indicating if we should us HTTPS

### Loggly Transport

_As of `winston@0.6.0` the Loggly transport has been broken out into a new module: [winston-loggly][5]._

``` js
const WinstonLoggly = require('winston-loggly');
logger.add(new winston.transports.Loggly(options));
```

The Loggly transport is based on [Nodejitsu's][6] [node-loggly][7] implementation of the [Loggly][8] API. If you haven't heard of Loggly before, you should probably read their [value proposition][9]. The Loggly transport takes the following options. Either 'inputToken' or 'inputName' is required:

* __level:__ Level of messages that this transport should log.
* __subdomain:__ The subdomain of your Loggly account. *[required]*
* __auth__: The authentication information for your Loggly account. *[required with inputName]*
* __inputName:__ The name of the input this instance should log to.
* __inputToken:__ The input token of the input this instance should log to.
* __json:__ If true, messages will be sent to Loggly as JSON.

### Redis Transport

``` js
const WinstonRedis = require('winston-redis');
logger.add(new WinstonRedis(options));
```

This transport accepts the options accepted by the [node-redis][4] client:

* __host:__ (Default **localhost**) Remote host of the Redis server
* __port:__ (Default **6379**) Port the Redis server is running on.
* __auth:__ (Default **None**) Password set on the Redis server

In addition to these, the Redis transport also accepts the following options.

* __length:__ (Default **200**) Number of log messages to store.
* __container:__ (Default **winston**) Name of the Redis container you wish your logs to be in.
* __channel:__ (Default **None**) Name of the Redis channel to stream logs from.

### Riak Transport

_As of `winston@0.3.0` the Riak transport has been broken out into a new module: [winston-riak][11]._ Using it is just as easy:

``` js
const { Riak } = require('winston-riak');
logger.add(new Riak(options));
```

In addition to the options accepted by the [riak-js][12] [client][13], the Riak transport also accepts the following options. It is worth noting that the riak-js debug option is set to *false* by default:

* __level:__ Level of messages that this transport should log.
* __bucket:__ The name of the Riak bucket you wish your logs to be in or a function to generate bucket names dynamically.

``` js
  // Use a single bucket for all your logs
  const singleBucketTransport = new Riak({ bucket: 'some-logs-go-here' });

  // Generate a dynamic bucket based on the date and level
  const dynamicBucketTransport = new Riak({
    bucket: function (level, msg, meta, now) {
      var d = new Date(now);
      return level + [d.getDate(), d.getMonth(), d.getFullYear()].join('-');
    }
  });
```


## Find more Transports

There are more than 1000 packages on `npm` when [you search for] `winston`.
That's why we say it's a logger for just about everything

[you search for]: https://www.npmjs.com/search?q=winston
[0]: https://nodejs.org/api/stream.html#stream_class_stream_writable
[1]: https://github.com/flatiron/winstond
[2]: https://github.com/indexzero/winston-couchdb
[3]: http://guide.couchdb.org/draft/design.html
[4]: https://github.com/mranney/node_redis
[5]: https://github.com/indexzero/winston-loggly
[6]: http://nodejitsu.com
[7]: https://github.com/nodejitsu/node-loggly
[8]: http://loggly.com
[9]: http://www.loggly.com/product/
[10]: http://wiki.loggly.com/loggingfromcode
[11]: https://github.com/indexzero/winston-riak
[12]: http://riakjs.org
[13]: https://github.com/frank06/riak-js/blob/master/src/http_client.coffee#L10
[14]: http://github.com/indexzero/winston-mongodb
[15]: http://github.com/appsattic/winston-simpledb
[16]: http://github.com/wavded/winston-mail
[17]: https://github.com/weaver/node-mail
[18]: https://github.com/jesseditson/winston-sns
[19]: https://github.com/namshi/winston-graylog2
[20]: https://github.com/jorgebay/winston-cassandra
[21]: https://github.com/jpoon/winston-azuretable
[22]: https://github.com/rickcraig/winston-airbrake2
[24]: https://github.com/sematext/winston-logsene
[25]: https://github.com/timdp/winston-aws-cloudwatch
[26]: https://github.com/lazywithclass/winston-cloudwatch
[27]: https://github.com/kenperkins/winston-papertrail
[28]: https://github.com/pkallos/winston-firehose
[29]: https://www.npmjs.com/package/@google-cloud/logging-winston
[30]: https://cloud.google.com/logging/
[31]: https://github.com/joelee/winston-spark
[32]: https://github.com/avens19/winston-sumologic-transport
[33]: https://github.com/peteward44/winston-winlog2
[34]: https://github.com/hakanostrom/winston-cloudant
[35]: https://github.com/SerayaEryn/fast-file-rotate
[36]: https://github.com/inspiredjw/winston-dynamodb
[37]: https://github.com/logdna/logdna-winston
[38]: https://github.com/marklai1998/datadog-logger-integrations
[39]: https://github.com/TheAppleFreak/winston-slack-webhook-transport
[40]: https://github.com/punkish/winston-better-sqlite3
[41]: https://github.com/aandrewww/winston-transport-sentry-node
[42]: https://github.com/kaminskypavel/winston-bigquery
[43]: https://www.npmjs.com/package/winston-bigquery
[44]: https://github.com/Quintinity/humio-winston
[45]: https://github.com/datalust/winston-seq
[46]: https://github.com/arpad1337/winston-console-transport-in-worker
[47]: https://github.com/kimnetics/winston-newrelic-agent-transport
[48]: https://github.com/loderunner/winston-transport-vscode



================================================
FILE: examples/color-message.js
================================================
'use strict';

const winston = require('../');

const logger = module.exports = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  )
});

logger.log('info', 'This is an information message.');



================================================
FILE: examples/create-file.js
================================================
'use strict';

const fs = require('fs');
const path = require('path');
const winston = require('../lib/winston');

const filename = path.join(__dirname, 'created-logfile.log');

//
// Remove the file, ignoring any errors
//
try { fs.unlinkSync(filename); }
catch (ex) { }

//
// Create a new winston logger instance with two tranports: Console, and File
//
//
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename })
  ]
});

logger.log('info', 'Hello created log files!', { 'foo': 'bar' });

setTimeout(function () {
  //
  // Remove the file, ignoring any errors
  //
  try { fs.unlinkSync(filename); }
  catch (ex) { }
}, 1000);



================================================
FILE: examples/custom-levels-colors.js
================================================
'use strict';

const winston = require('../lib/winston');

//
// Logging levels
//
const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6,
    custom: 7
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'grey',
    info: 'green',
    verbose: 'cyan',
    silly: 'magenta',
    custom: 'yellow'
  }
};

winston.addColors(config.colors);

const logger = module.exports = winston.createLogger({
  levels: config.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console()
  ],
  level: 'custom'
});

logger.custom('hello')



================================================
FILE: examples/custom-levels.js
================================================
'use strict';

const winston = require('../');

const myCustomLevels = {
  levels: {
    foo: 0,
    bar: 1,
    baz: 2,
    foobar: 3
  },
  colors: {
    foo: 'blue',
    bar: 'green',
    baz: 'yellow',
    foobar: 'red'
  }
};

const customLevelLogger = winston.createLogger({
  level: 'foobar',
  levels: myCustomLevels.levels,
  transports: [
    new winston.transports.Console()
  ]
});

customLevelLogger.foobar('some foobar level-ed message');
customLevelLogger.baz('some baz level-ed message');
customLevelLogger.bar('some bar level-ed message');
customLevelLogger.foo('some foo level-ed message');



================================================
FILE: examples/custom-pretty-print.js
================================================
'use strict';

const winston = require('../');

const logger = winston.createLogger({
  format: winston.format.printf(info => {
    return JSON.stringify(info)
      .replace(/\{/g, '< wow ')
      .replace(/\:/g, ' such ')
      .replace(/\}/g, ' >')
  }),
  transports: [
    new winston.transports.Console(),
  ]
});

logger.info('Hello, this is a logging event with a custom pretty print',  { 'foo': 'bar' });
logger.info('Hello, this is a logging event with a custom pretty print2', { 'foo': 'bar' });




================================================
FILE: examples/custom-timestamp.js
================================================
const { format, createLogger, transports } = require('../');

const logger = createLogger({
  format: format.combine(
    format.label({ label: '[my-label]' }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    //
    // The simple format outputs
    // `${level}: ${message} ${[Object with everything else]}`
    //
    format.simple()
    //
    // Alternatively you could use this custom printf format if you
    // want to control where the timestamp comes in your final message.
    // Try replacing `format.simple()` above with this:
    //
    // format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console()
  ]
});

logger.info('Hello there. How are you?');



================================================
FILE: examples/custom-transport.js
================================================

const { createLogger } = require('../');
const Transport = require('winston-transport');

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
class CustomTransport extends Transport {
  constructor(opts) {
    super(opts);

    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail,
    //   logentries, etc.).
    //
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    // Perform the writing to the remote service

    callback();
  }
};

const transport = new CustomTransport();
transport.on('logged', (info) => {
  // Verification that log was called on your transport
  console.log(`Logging! It's happening!`, info);
});

// Create a logger and consume an instance of your transport
const logger = createLogger({
  transports: [transport]
});

logger.info('hello')



================================================
FILE: examples/delete-level.js
================================================
'use strict';

const { createLogger, format, transports } = require('../');
const { combine, json } = format;

const severityLevelOnly = format(info => {
  info.severityLevel = info.level;
  delete info.level;
  return info;
});

const logger = createLogger({
  format: combine(
    severityLevelOnly(),
    json()
  ),
  transports: [
    new transports.Console(),
  ]
});

logger.info('This will print without { level }',  { 'foo': 'bar' });
logger.info('This will also print without { level }', { 'foo': 'bar' });




================================================
FILE: examples/errors.js
================================================
const { createLogger, format, transports } = require('../');
const { combine, errors, json } = format;

const logger = createLogger({
  format: combine(
    errors({ stack: true }),
    json()
  ),
  transports: [
    new transports.Console(),
  ]
});

logger.warn(new Error('Error passed as info'));
logger.log('error', new Error('Error passed as message'));

logger.warn('Maybe important error: ', new Error('Error passed as meta'));
logger.log('error', 'Important error: ', new Error('Error passed as meta'));

logger.error(new Error('Error as info'));



================================================
FILE: examples/exception.js
================================================
'use strict';

const winston = require('../');

//
// TODO: THIS IS BROKEN & MUST BE FIXED BEFORE 3.0
// This should output what was previously referred to
// as "humanReadableUncaughtExceptions" by default.
//
const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({ handleExceptions: true })
  ]
});

throw new Error('Hello, winston!');



================================================
FILE: examples/file-maxsize.js
================================================
const path = require('path');
const { MESSAGE } = require('triple-beam');
const winston = require('../');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.printf(info => `${info.message}`),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, 'error.log'),
      level: 'info',
      maxsize: 500
    })
  ]
});

// Write 750 characters
logger.info(`test=${'a'.repeat(245)}`);
logger.info(`test=${'b'.repeat(245)}`);
logger.info(`test=${'c'.repeat(245)}`);

setTimeout(() => {
  logger.info(`test=${'d'.repeat(245)}`);
  logger.info(`test=${'e'.repeat(245)}`);
  logger.info(`test=${'f'.repeat(245)}`);
}, 2000);



================================================
FILE: examples/finish-event.js
================================================
'use strict';

const winston = require('../');

//
// In winston@3.x both the Logger and the Transport are Node.js streams.
// Node.js streams expose a `.end()` method that signals no more data will\
// be written. The `"finish"` event is emitted after `.end()` has been called
// **AND** all data has been flushed (i.e. all your logs have been written).
//
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});

process.on('exit', function () {
  console.log('Your process is exiting');
});

logger.on('finish', function () {
  console.log('Your logger is done logging');
});

logger.log('info', 'Hello, this is a raw logging event',   { 'foo': 'bar' });
logger.log('info', 'Hello, this is a raw logging event 2', { 'foo': 'bar' });

logger.end();



================================================
FILE: examples/format-dynamic-content.js
================================================
'use strict';

const winston = require('../');

const logger = module.exports = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format(function dynamicContent(info, opts) {
      info.message = '[dynamic content] ' + info.message;
      return info;
    })(),
    winston.format.simple()
  )
});

logger.log('info', 'This is an information message.');



================================================
FILE: examples/format-filter.js
================================================
const { createLogger, format, transports } = require('../');

// Ignore log messages if the have { private: true }
const ignorePrivate = format((info, opts) => {
  if (info.private) { return false; }
  return info;
});

const logger = createLogger({
  format: format.combine(
    ignorePrivate(),
    format.json()
  ),
  transports: [new transports.Console()]
});

// Outputs: {"level":"error","message":"Public error to share"}
logger.log({
  level: 'error',
  message: 'Public error to share'
});

// Messages with { private: true } will not be written when logged.
logger.log({
  private: true,
  level: 'error',
  message: 'This is super secret - hide it.'
});



================================================
FILE: examples/format-logger-and-transport.js
================================================
const fs = require('fs');
const winston = require('../');
const { createLogger, format, transports } = winston;

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.simple()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple()
      )
    }),
    new transports.Stream({
      stream: fs.createWriteStream('./example.log')
    })
  ]
})

logger.log({
  level: 'info',
  message: 'Check example.log – it will have no colors!'
});



================================================
FILE: examples/format-mutate.js
================================================
'use strict';

const winston = require('../');

/*
 * Simple string mask. For example purposes only.
 */
function maskCardNumbers(num) {
  const str = num.toString();
  const { length } = str;

  return Array.from(str, (n, i) => {
    return i < length - 4 ? '*' : n;
  }).join('');
}

// Define the format that mutates the info object.
const maskFormat = winston.format(info => {
  // You can CHANGE existing property values
  if (info.creditCard) {
    info.creditCard = maskCardNumbers(info.creditCard);
  }

  // You can also ADD NEW properties if you wish
  info.hasCreditCard = !!info.creditCard;

  return info;
});

// Then combine the format with other formats and make a logger
const logger = winston.createLogger({
  format: winston.format.combine(
    //
    // Order is important here, the formats are called in the
    // order they are passed to combine.
    //
    maskFormat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

logger.info('transaction ok', { creditCard: 123456789012345 });



================================================
FILE: examples/interpolation.js
================================================
'use strict';

const { createLogger, format, transports } = require('../');
const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ]
});

// info: test message my string {}
logger.log('info', 'test message %s', 'my string');

// info: test message my 123 {}
logger.log('info', 'test message %d', 123);

// info: test message first second {number: 123}
logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });

// prints "Found error at %s"
logger.info('Found %s at %s', 'error', new Date());
logger.info('Found %s at %s', 'error', new Error('chill winston'));
logger.info('Found %s at %s', 'error', /WUT/);
logger.info('Found %s at %s', 'error', true);
logger.info('Found %s at %s', 'error', 100.00);
logger.info('Found %s at %s', 'error', ['1, 2, 3']);




================================================
FILE: examples/json.js
================================================
'use strict';

const winston = require('../');

//
// As of winston@3, the default logging format is JSON.
//
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

logger.log('info', 'Hello, this is a raw logging event',   { 'foo': 'bar' });
logger.log('info', 'Hello, this is a raw logging event 2', { 'foo': 'bar' });



================================================
FILE: examples/levels.js
================================================
'use strict';

const winston = require('../');

const defaultLevels = winston.createLogger({
  level: 'silly',
  format: winston.format.simple(),
  transports: new winston.transports.Console()
});

function logAllLevels() {
  Object.keys(winston.config.npm.levels).forEach(level => {
    defaultLevels[level](`is logged when logger.level="${defaultLevels.level}"`);
  });
}

logAllLevels();

//
// TODO: THIS IS BROKEN & MUST BE FIXED BEFORE 3.0
// Logger.prototype.level must be a setter to set the
// default level on all Transports.
//
defaultLevels.level = 'error';
logAllLevels();



================================================
FILE: examples/metadata.js
================================================
'use strict';

const winston = require('../');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    //
    // Notice that both arguments have been combined into a single
    // "info" object.
    //
    winston.format(function (info, opts) {
      console.log(`{ reason: ${info.reason}, promise: ${info.promise} }`);
      return info;
    })(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

logger.info('my message', { reason: 'whatever', promise: 'whenever' });



================================================
FILE: examples/quick-start.js
================================================
const { createLogger, format, transports } = require('../');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `quick-start-combined.log`.
    // - Write all logs error (and below) to `quick-start-error.log`.
    //
    new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
    new transports.File({ filename: 'quick-start-combined.log' })
  ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}

// ***************
// Allows for JSON logging
// ***************

logger.log({
  level: 'info',
  message: 'Pass an object and this works',
  additional: 'properties',
  are: 'passed along'
});

logger.info({
  message: 'Use a helper method if you want',
  additional: 'properties',
  are: 'passed along'
});

// ***************
// Allows for parameter-based logging
// ***************

logger.log('info', 'Pass a message and this works', {
  additional: 'properties',
  are: 'passed along'
});

logger.info('Use a helper method if you want', {
  additional: 'properties',
  are: 'passed along'
});

// ***************
// Allows for string interpolation
// ***************

// info: test message my string {}
logger.log('info', 'test message %s', 'my string');

// info: test message 123 {}
logger.log('info', 'test message %d', 123);

// info: test message first second {number: 123}
logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });

// prints "Found error at %s"
logger.info('Found %s at %s', 'error', new Date());
logger.info('Found %s at %s', 'error', new Error('chill winston'));
logger.info('Found %s at %s', 'error', /WUT/);
logger.info('Found %s at %s', 'error', true);
logger.info('Found %s at %s', 'error', 100.00);
logger.info('Found %s at %s', 'error', ['1, 2, 3']);

// ***************
// Allows for logging Error instances
// ***************

logger.warn(new Error('Error passed as info'));
logger.log('error', new Error('Error passed as message'));

logger.warn('Maybe important error: ', new Error('Error passed as meta'));
logger.log('error', 'Important error: ', new Error('Error passed as meta'));

logger.error(new Error('Error as info'));



================================================
FILE: examples/ready-to-use-pattern.ts
================================================
const winston = require('../');

const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'magenta',
    info: 'green',
    verbose: 'cyan',
    silly: 'grey'
  }
};

winston.addColors(config.colors);
const wLogger = (input: { logName: string; level: string }): winston.Logger =>
  winston.createLogger({
    levels: config.levels,
    level: `${input.level}`,
    transports: [
      new winston.transports.Console({
        level: `${input.level}`,

        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf(
            info =>
              // https://stackoverflow.com/a/69044670/20358783 more detailLocaleString
              `${new Date(info.timestamp).toLocaleDateString('tr-Tr', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
              })} ${info.level.toLocaleUpperCase()}: ${info.message}`
          ),
          winston.format.colorize({ all: true })
        )
      }),
      new winston.transports.File({
        filename: `./src/logs/${input.logName}/${input.logName}-Error.log`,
        level: 'error',
        format: winston.format.printf(
          info =>
            `${new Date(info.timestamp).toLocaleDateString('tr-Tr', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })} ${info.level.toLocaleUpperCase()}: ${info.message}`
        )
      }),
      new winston.transports.File({
        filename: `./src/logs/${input.logName}/${input.logName}-Warn.log`,
        level: 'warn',
        format: winston.format.printf(
          info =>
            `${new Date(info.timestamp).toLocaleDateString('tr-Tr', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })} ${info.level.toLocaleUpperCase()}: ${info.message}`
        )
      }),
      new winston.transports.File({
        filename: `./src/logs/${input.logName}/${input.logName}-All.log`,
        level: 'silly',
        format: winston.format.printf(
          info =>
            `${new Date(info.timestamp).toLocaleDateString('tr-Tr', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })} ${info.level.toLocaleUpperCase()}: ${info.message}`
        )
      }),

      new winston.transports.File({
        format: winston.format.printf(
          info =>
            `${new Date(info.timestamp).toLocaleDateString('tr-Tr', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })} ${info.level.toLocaleUpperCase()}: ${info.message}`
        ),
        filename: './src/logs/globalLog.log',
        level: 'silly'
      })
    ]
  });

export default wLogger;

//const logger = wLogger({ logName: moduleName, level: logLevel })
//logger.info('test')



================================================
FILE: examples/regular-expressions.js
================================================
'use strict';

const winston = require('../');

console.info(new RegExp('a'));
// prints "/a/"

//
// TODO: THIS IS BROKEN & MUST BE FIXED BEFORE 3.0?
//
winston.info(new RegExp('a'));
// prints "info: /a/"



================================================
FILE: examples/simple-stream.js
================================================
'use strict';

const fs = require('fs');
const path = require('path');
const winston = require('../lib/winston');

const filePath = path.join(__dirname, 'winston.log');
const stream = fs.createWriteStream(filePath);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Stream({ stream })
  ]
});

setTimeout(() => {
  logger.log({ level: 'info', message: 'foo' });
  logger.log({ level: 'info', message: 'bar' });
}, 1000);

setTimeout(() => {
  try {
    fs.unlinkSync(filePath); // eslint-disable-line no-sync
  } catch (ex) {} // eslint-disable-line no-empty
}, 2000);



================================================
FILE: examples/splat-message.js
================================================
const winston = require('../');

const loggers = {
  splat: winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
  }),
  simple: winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  })
};

const meta = {
  subject: 'Hello, World!',
  message: 'This message is a unique property separate from implicit merging.',
};

loggers.simple.info('email.message is hidden', meta);
loggers.simple.info('email.message is hidden %j\n', meta);

loggers.splat.info('This is overridden by meta', meta);
loggers.splat.info('email.message is shown %j', meta);



================================================
FILE: examples/splat.js
================================================
const winston = require('../');
let { format } = winston;

/*
 * Simple helper for stringifying all remaining
 * properties.
 */
function rest(info) {
  return JSON.stringify(Object.assign({}, info, {
    level: undefined,
    message: undefined,
    splat: undefined,
    label: undefined
  }));
}

let logger = winston.createLogger({
  transports: [new winston.transports.Console({ level: 'info' })],
  format: format.combine(
    format.splat(),
    format.printf(info => `[${info.label}] ${info.message} ${rest(info)}`)
  )
});

logger.log(
  'info',
  'any message',
  {
    label: 'label!',
    extra: true
  }
);

logger.log(
  'info',
  'let\'s %s some %s',
  'interpolate',
  'splat parameters',
  {
    label: 'label!',
    extra: true
  }
);

logger.log(
  'info',
  'first is a string %s [[%j]]',
  'behold a string',
  { beAware: 'this will interpolate' },
  {
    label: 'label!',
    extra: true
  }
);

logger.log(
  'info',
  'first is an object [[%j]]',
  { beAware: 'this will interpolate' },
  {
    label: 'label!',
    extra: true
  }
);

//
// Non-enumerable properties (such as "message" and "stack" in Error
// instances) will not be merged into any `info`.
//
const terr = new Error('lol please stop doing this');
terr.label = 'error';
terr.extra = true;
logger.log(
  'info',
  'any message',
  terr
);

logger.log(
  'info',
  'let\'s %s some %s',
  'interpolate',
  'splat parameters',
  terr
);




================================================
FILE: lib/winston.js
================================================
/**
 * winston.js: Top-level include defining Winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const logform = require('logform');
const { warn } = require('./winston/common');

/**
 * Expose version. Use `require` method for `webpack` support.
 * @type {string}
 */
exports.version = require('../package.json').version;
/**
 * Include transports defined by default by winston
 * @type {Array}
 */
exports.transports = require('./winston/transports');
/**
 * Expose utility methods
 * @type {Object}
 */
exports.config = require('./winston/config');
/**
 * Hoist format-related functionality from logform.
 * @type {Object}
 */
exports.addColors = logform.levels;
/**
 * Hoist format-related functionality from logform.
 * @type {Object}
 */
exports.format = logform.format;
/**
 * Expose core Logging-related prototypes.
 * @type {function}
 */
exports.createLogger = require('./winston/create-logger');
/**
 * Expose core Logging-related prototypes.
 * @type {function}
 */
exports.Logger = require('./winston/logger');
/**
 * Expose core Logging-related prototypes.
 * @type {Object}
 */
exports.ExceptionHandler = require('./winston/exception-handler');
/**
 * Expose core Logging-related prototypes.
 * @type {Object}
 */
exports.RejectionHandler = require('./winston/rejection-handler');
/**
 * Expose core Logging-related prototypes.
 * @type {Container}
 */
exports.Container = require('./winston/container');
/**
 * Expose core Logging-related prototypes.
 * @type {Object}
 */
exports.Transport = require('winston-transport');
/**
 * We create and expose a default `Container` to `winston.loggers` so that the
 * programmer may manage multiple `winston.Logger` instances without any
 * additional overhead.
 * @example
 *   // some-file1.js
 *   const logger = require('winston').loggers.get('something');
 *
 *   // some-file2.js
 *   const logger = require('winston').loggers.get('something');
 */
exports.loggers = new exports.Container();

/**
 * We create and expose a 'defaultLogger' so that the programmer may do the
 * following without the need to create an instance of winston.Logger directly:
 * @example
 *   const winston = require('winston');
 *   winston.log('info', 'some message');
 *   winston.error('some error');
 */
const defaultLogger = exports.createLogger();

// Pass through the target methods onto `winston.
Object.keys(exports.config.npm.levels)
  .concat([
    'log',
    'query',
    'stream',
    'add',
    'remove',
    'clear',
    'profile',
    'startTimer',
    'handleExceptions',
    'unhandleExceptions',
    'handleRejections',
    'unhandleRejections',
    'configure',
    'child'
  ])
  .forEach(
    method => (exports[method] = (...args) => defaultLogger[method](...args))
  );

/**
 * Define getter / setter for the default logger level which need to be exposed
 * by winston.
 * @type {string}
 */
Object.defineProperty(exports, 'level', {
  get() {
    return defaultLogger.level;
  },
  set(val) {
    defaultLogger.level = val;
  }
});

/**
 * Define getter for `exceptions` which replaces `handleExceptions` and
 * `unhandleExceptions`.
 * @type {Object}
 */
Object.defineProperty(exports, 'exceptions', {
  get() {
    return defaultLogger.exceptions;
  }
});

/**
 * Define getter for `rejections` which replaces `handleRejections` and
 * `unhandleRejections`.
 * @type {Object}
 */
Object.defineProperty(exports, 'rejections', {
  get() {
    return defaultLogger.rejections;
  }
});

/**
 * Define getters / setters for appropriate properties of the default logger
 * which need to be exposed by winston.
 * @type {Logger}
 */
['exitOnError'].forEach(prop => {
  Object.defineProperty(exports, prop, {
    get() {
      return defaultLogger[prop];
    },
    set(val) {
      defaultLogger[prop] = val;
    }
  });
});

/**
 * The default transports and exceptionHandlers for the default winston logger.
 * @type {Object}
 */
Object.defineProperty(exports, 'default', {
  get() {
    return {
      exceptionHandlers: defaultLogger.exceptionHandlers,
      rejectionHandlers: defaultLogger.rejectionHandlers,
      transports: defaultLogger.transports
    };
  }
});

// Have friendlier breakage notices for properties that were exposed by default
// on winston < 3.0.
warn.deprecated(exports, 'setLevels');
warn.forFunctions(exports, 'useFormat', ['cli']);
warn.forProperties(exports, 'useFormat', ['padLevels', 'stripColors']);
warn.forFunctions(exports, 'deprecated', [
  'addRewriter',
  'addFilter',
  'clone',
  'extend'
]);
warn.forProperties(exports, 'deprecated', ['emitErrs', 'levelLength']);




================================================
FILE: lib/winston/common.js
================================================
/**
 * common.js: Internal helper and utility functions for winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const { format } = require('util');

/**
 * Set of simple deprecation notices and a way to expose them for a set of
 * properties.
 * @type {Object}
 * @private
 */
exports.warn = {
  deprecated(prop) {
    return () => {
      throw new Error(format('{ %s } was removed in winston@3.0.0.', prop));
    };
  },
  useFormat(prop) {
    return () => {
      throw new Error([
        format('{ %s } was removed in winston@3.0.0.', prop),
        'Use a custom winston.format = winston.format(function) instead.'
      ].join('\n'));
    };
  },
  forFunctions(obj, type, props) {
    props.forEach(prop => {
      obj[prop] = exports.warn[type](prop);
    });
  },
  forProperties(obj, type, props) {
    props.forEach(prop => {
      const notice = exports.warn[type](prop);
      Object.defineProperty(obj, prop, {
        get: notice,
        set: notice
      });
    });
  }
};



================================================
FILE: lib/winston/container.js
================================================
/**
 * container.js: Inversion of control container for winston logger instances.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const createLogger = require('./create-logger');

/**
 * Inversion of control container for winston logger instances.
 * @type {Container}
 */
module.exports = class Container {
  /**
   * Constructor function for the Container object responsible for managing a
   * set of `winston.Logger` instances based on string ids.
   * @param {!Object} [options={}] - Default pass-thru options for Loggers.
   */
  constructor(options = {}) {
    this.loggers = new Map();
    this.options = options;
  }

  /**
   * Retrieves a `winston.Logger` instance for the specified `id`. If an
   * instance does not exist, one is created.
   * @param {!string} id - The id of the Logger to get.
   * @param {?Object} [options] - Options for the Logger instance.
   * @returns {Logger} - A configured Logger instance with a specified id.
   */
  add(id, options) {
    if (!this.loggers.has(id)) {
      // Remark: Simple shallow clone for configuration options in case we pass
      // in instantiated protoypal objects
      options = Object.assign({}, options || this.options);
      const existing = options.transports || this.options.transports;

      // Remark: Make sure if we have an array of transports we slice it to
      // make copies of those references.
      if (existing) {
        options.transports = Array.isArray(existing) ? existing.slice() : [existing];
      } else {
        options.transports = [];
      }

      const logger = createLogger(options);
      logger.on('close', () => this._delete(id));
      this.loggers.set(id, logger);
    }

    return this.loggers.get(id);
  }

  /**
   * Retreives a `winston.Logger` instance for the specified `id`. If
   * an instance does not exist, one is created.
   * @param {!string} id - The id of the Logger to get.
   * @param {?Object} [options] - Options for the Logger instance.
   * @returns {Logger} - A configured Logger instance with a specified id.
   */
  get(id, options) {
    return this.add(id, options);
  }

  /**
   * Check if the container has a logger with the id.
   * @param {?string} id - The id of the Logger instance to find.
   * @returns {boolean} - Boolean value indicating if this instance has a
   * logger with the specified `id`.
   */
  has(id) {
    return !!this.loggers.has(id);
  }

  /**
   * Closes a `Logger` instance with the specified `id` if it exists.
   * If no `id` is supplied then all Loggers are closed.
   * @param {?string} id - The id of the Logger instance to close.
   * @returns {undefined}
   */
  close(id) {
    if (id) {
      return this._removeLogger(id);
    }

    this.loggers.forEach((val, key) => this._removeLogger(key));
  }

  /**
   * Remove a logger based on the id.
   * @param {!string} id - The id of the logger to remove.
   * @returns {undefined}
   * @private
   */
  _removeLogger(id) {
    if (!this.loggers.has(id)) {
      return;
    }

    const logger = this.loggers.get(id);
    logger.close();
    this._delete(id);
  }

  /**
   * Deletes a `Logger` instance with the specified `id`.
   * @param {!string} id - The id of the Logger instance to delete from
   * container.
   * @returns {undefined}
   * @private
   */
  _delete(id) {
    this.loggers.delete(id);
  }
};



================================================
FILE: lib/winston/create-logger.js
================================================
/**
 * create-logger.js: Logger factory for winston logger instances.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const { LEVEL } = require('triple-beam');
const config = require('./config');
const Logger = require('./logger');
const debug = require('@dabh/diagnostics')('winston:create-logger');

function isLevelEnabledFunctionName(level) {
  return 'is' + level.charAt(0).toUpperCase() + level.slice(1) + 'Enabled';
}

/**
 * Create a new instance of a winston Logger. Creates a new
 * prototype for each instance.
 * @param {!Object} opts - Options for the created logger.
 * @returns {Logger} - A newly created logger instance.
 */
module.exports = function (opts = {}) {
  //
  // Default levels: npm
  //
  opts.levels = opts.levels || config.npm.levels;

  /**
   * DerivedLogger to attach the logs level methods.
   * @type {DerivedLogger}
   * @extends {Logger}
   */
  class DerivedLogger extends Logger {
    /**
     * Create a new class derived logger for which the levels can be attached to
     * the prototype of. This is a V8 optimization that is well know to increase
     * performance of prototype functions.
     * @param {!Object} options - Options for the created logger.
     */
    constructor(options) {
      super(options);
    }
  }

  const logger = new DerivedLogger(opts);

  //
  // Create the log level methods for the derived logger.
  //
  Object.keys(opts.levels).forEach(function (level) {
    debug('Define prototype method for "%s"', level);
    if (level === 'log') {
      // eslint-disable-next-line no-console
      console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
      return;
    }

    //
    // Define prototype methods for each log level e.g.:
    // logger.log('info', msg) implies these methods are defined:
    // - logger.info(msg)
    // - logger.isInfoEnabled()
    //
    // Remark: to support logger.child this **MUST** be a function
    // so it'll always be called on the instance instead of a fixed
    // place in the prototype chain.
    //
    DerivedLogger.prototype[level] = function (...args) {
      // Prefer any instance scope, but default to "root" logger
      const self = this || logger;

      // Optimize the hot-path which is the single object.
      if (args.length === 1) {
        const [msg] = args;
        const info = msg && msg.message && msg || { message: msg };
        info.level = info[LEVEL] = level;
        self._addDefaultMeta(info);
        self.write(info);
        return (this || logger);
      }

      // When provided nothing assume the empty string
      if (args.length === 0) {
        self.log(level, '');
        return self;
      }

      // Otherwise build argument list which could potentially conform to
      // either:
      // . v3 API: log(obj)
      // 2. v1/v2 API: log(level, msg, ... [string interpolate], [{metadata}], [callback])
      return self.log(level, ...args);
    };

    DerivedLogger.prototype[isLevelEnabledFunctionName(level)] = function () {
      return (this || logger).isLevelEnabled(level);
    };
  });

  return logger;
};



================================================
FILE: lib/winston/exception-handler.js
================================================
/**
 * exception-handler.js: Object for handling uncaughtException events.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const os = require('os');
const asyncForEach = require('async/forEach');
const debug = require('@dabh/diagnostics')('winston:exception');
const once = require('one-time');
const stackTrace = require('stack-trace');
const ExceptionStream = require('./exception-stream');

/**
 * Object for handling uncaughtException events.
 * @type {ExceptionHandler}
 */
module.exports = class ExceptionHandler {
  /**
   * TODO: add contructor description
   * @param {!Logger} logger - TODO: add param description
   */
  constructor(logger) {
    if (!logger) {
      throw new Error('Logger is required to handle exceptions');
    }

    this.logger = logger;
    this.handlers = new Map();
  }

  /**
   * Handles `uncaughtException` events for the current process by adding any
   * handlers passed in.
   * @returns {undefined}
   */
  handle(...args) {
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        return arg.forEach(handler => this._addHandler(handler));
      }

      this._addHandler(arg);
    });

    if (!this.catcher) {
      this.catcher = this._uncaughtException.bind(this);
      process.on('uncaughtException', this.catcher);
    }
  }

  /**
   * Removes any handlers to `uncaughtException` events for the current
   * process. This does not modify the state of the `this.handlers` set.
   * @returns {undefined}
   */
  unhandle() {
    if (this.catcher) {
      process.removeListener('uncaughtException', this.catcher);
      this.catcher = false;

      Array.from(this.handlers.values())
        .forEach(wrapper => this.logger.unpipe(wrapper));
    }
  }

  /**
   * TODO: add method description
   * @param {Error} err - Error to get information about.
   * @returns {mixed} - TODO: add return description.
   */
  getAllInfo(err) {
    let message = null;
    if (err) {
      message = typeof err === 'string' ? err : err.message;
    }

    return {
      error: err,
      // TODO (indexzero): how do we configure this?
      level: 'error',
      message: [
        `uncaughtException: ${(message || '(no error message)')}`,
        err && err.stack || '  No stack trace'
      ].join('\n'),
      stack: err && err.stack,
      exception: true,
      date: new Date().toString(),
      process: this.getProcessInfo(),
      os: this.getOsInfo(),
      trace: this.getTrace(err)
    };
  }

  /**
   * Gets all relevant process information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getProcessInfo() {
    return {
      pid: process.pid,
      uid: process.getuid ? process.getuid() : null,
      gid: process.getgid ? process.getgid() : null,
      cwd: process.cwd(),
      execPath: process.execPath,
      version: process.version,
      argv: process.argv,
      memoryUsage: process.memoryUsage()
    };
  }

  /**
   * Gets all relevant OS information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getOsInfo() {
    return {
      loadavg: os.loadavg(),
      uptime: os.uptime()
    };
  }

  /**
   * Gets a stack trace for the specified error.
   * @param {mixed} err - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  getTrace(err) {
    const trace = err ? stackTrace.parse(err) : stackTrace.get();
    return trace.map(site => {
      return {
        column: site.getColumnNumber(),
        file: site.getFileName(),
        function: site.getFunctionName(),
        line: site.getLineNumber(),
        method: site.getMethodName(),
        native: site.isNative()
      };
    });
  }

  /**
   * Helper method to add a transport as an exception handler.
   * @param {Transport} handler - The transport to add as an exception handler.
   * @returns {void}
   */
  _addHandler(handler) {
    if (!this.handlers.has(handler)) {
      handler.handleExceptions = true;
      const wrapper = new ExceptionStream(handler);
      this.handlers.set(handler, wrapper);
      this.logger.pipe(wrapper);
    }
  }

  /**
   * Logs all relevant information around the `err` and exits the current
   * process.
   * @param {Error} err - Error to handle
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _uncaughtException(err) {
    const info = this.getAllInfo(err);
    const handlers = this._getExceptionHandlers();
    // Calculate if we should exit on this error
    let doExit = typeof this.logger.exitOnError === 'function'
      ? this.logger.exitOnError(err)
      : this.logger.exitOnError;
    let timeout;

    if (!handlers.length && doExit) {
      // eslint-disable-next-line no-console
      console.warn('winston: exitOnError cannot be true with no exception handlers.');
      // eslint-disable-next-line no-console
      console.warn('winston: not exiting process.');
      doExit = false;
    }

    function gracefulExit() {
      debug('doExit', doExit);
      debug('process._exiting', process._exiting);

      if (doExit && !process._exiting) {
        // Remark: Currently ignoring any exceptions from transports when
        // catching uncaught exceptions.
        if (timeout) {
          clearTimeout(timeout);
        }
        // eslint-disable-next-line no-process-exit
        process.exit(1);
      }
    }

    if (!handlers || handlers.length === 0) {
      return process.nextTick(gracefulExit);
    }

    // Log to all transports attempting to listen for when they are completed.
    asyncForEach(handlers, (handler, next) => {
      const done = once(next);
      const transport = handler.transport || handler;

      // Debug wrapping so that we can inspect what's going on under the covers.
      function onDone(event) {
        return () => {
          debug(event);
          done();
        };
      }

      transport._ending = true;
      transport.once('finish', onDone('finished'));
      transport.once('error', onDone('error'));
    }, () => doExit && gracefulExit());

    this.logger.log(info);

    // If exitOnError is true, then only allow the logging of exceptions to
    // take up to `3000ms`.
    if (doExit) {
      timeout = setTimeout(gracefulExit, 3000);
    }
  }

  /**
   * Returns the list of transports and exceptionHandlers for this instance.
   * @returns {Array} - List of transports and exceptionHandlers for this
   * instance.
   * @private
   */
  _getExceptionHandlers() {
    // Remark (indexzero): since `logger.transports` returns all of the pipes
    // from the _readableState of the stream we actually get the join of the
    // explicit handlers and the implicit transports with
    // `handleExceptions: true`
    return this.logger.transports.filter(wrap => {
      const transport = wrap.transport || wrap;
      return transport.handleExceptions;
    });
  }
};



================================================
FILE: lib/winston/exception-stream.js
================================================
/**
 * exception-stream.js: TODO: add file header handler.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const { Writable } = require('readable-stream');

/**
 * TODO: add class description.
 * @type {ExceptionStream}
 * @extends {Writable}
 */
module.exports = class ExceptionStream extends Writable {
  /**
   * Constructor function for the ExceptionStream responsible for wrapping a
   * TransportStream; only allowing writes of `info` objects with
   * `info.exception` set to true.
   * @param {!TransportStream} transport - Stream to filter to exceptions
   */
  constructor(transport) {
    super({ objectMode: true });

    if (!transport) {
      throw new Error('ExceptionStream requires a TransportStream instance.');
    }

    // Remark (indexzero): we set `handleExceptions` here because it's the
    // predicate checked in ExceptionHandler.prototype.__getExceptionHandlers
    this.handleExceptions = true;
    this.transport = transport;
  }

  /**
   * Writes the info object to our transport instance if (and only if) the
   * `exception` property is set on the info.
   * @param {mixed} info - TODO: add param description.
   * @param {mixed} enc - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _write(info, enc, callback) {
    if (info.exception) {
      return this.transport.log(info, callback);
    }

    callback();
    return true;
  }
};



================================================
FILE: lib/winston/logger.js
================================================
/**
 * logger.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const { Stream, Transform } = require('readable-stream');
const asyncForEach = require('async/forEach');
const { LEVEL, SPLAT } = require('triple-beam');
const isStream = require('is-stream');
const ExceptionHandler = require('./exception-handler');
const RejectionHandler = require('./rejection-handler');
const LegacyTransportStream = require('winston-transport/legacy');
const Profiler = require('./profiler');
const { warn } = require('./common');
const config = require('./config');

/**
 * Captures the number of format (i.e. %s strings) in a given string.
 * Based on `util.format`, see Node.js source:
 * https://github.com/nodejs/node/blob/b1c8f15c5f169e021f7c46eb7b219de95fe97603/lib/util.js#L201-L230
 * @type {RegExp}
 */
const formatRegExp = /%[scdjifoO%]/g;

/**
 * TODO: add class description.
 * @type {Logger}
 * @extends {Transform}
 */
class Logger extends Transform {
  /**
   * Constructor function for the Logger object responsible for persisting log
   * messages and metadata to one or more transports.
   * @param {!Object} options - foo
   */
  constructor(options) {
    super({ objectMode: true });
    this.configure(options);
  }

  child(defaultRequestMetadata) {
    const logger = this;
    return Object.create(logger, {
      write: {
        value: function (info) {
          const infoClone = Object.assign(
            {},
            defaultRequestMetadata,
            info
          );

          // Object.assign doesn't copy inherited Error
          // properties so we have to do that explicitly
          //
          // Remark (indexzero): we should remove this
          // since the errors format will handle this case.
          //
          if (info instanceof Error) {
            infoClone.stack = info.stack;
            infoClone.message = info.message;
          }

          logger.write(infoClone);
        }
      }
    });
  }

  /**
   * This will wholesale reconfigure this instance by:
   * 1. Resetting all transports. Older transports will be removed implicitly.
   * 2. Set all other options including levels, colors, rewriters, filters,
   *    exceptionHandlers, etc.
   * @param {!Object} options - TODO: add param description.
   * @returns {undefined}
   */
  configure({
    silent,
    format,
    defaultMeta,
    levels,
    level = 'info',
    exitOnError = true,
    transports,
    colors,
    emitErrs,
    formatters,
    padLevels,
    rewriters,
    stripColors,
    exceptionHandlers,
    rejectionHandlers
  } = {}) {
    // Reset transports if we already have them
    if (this.transports.length) {
      this.clear();
    }

    this.silent = silent;
    this.format = format || this.format || require('logform/json')();

    this.defaultMeta = defaultMeta || null;
    // Hoist other options onto this instance.
    this.levels = levels || this.levels || config.npm.levels;
    this.level = level;
    if (this.exceptions) {
      this.exceptions.unhandle();
    }
    if (this.rejections) {
      this.rejections.unhandle();
    }
    this.exceptions = new ExceptionHandler(this);
    this.rejections = new RejectionHandler(this);
    this.profilers = {};
    this.exitOnError = exitOnError;

    // Add all transports we have been provided.
    if (transports) {
      transports = Array.isArray(transports) ? transports : [transports];
      transports.forEach(transport => this.add(transport));
    }

    if (
      colors ||
      emitErrs ||
      formatters ||
      padLevels ||
      rewriters ||
      stripColors
    ) {
      throw new Error(
        [
          '{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.',
          'Use a custom winston.format(function) instead.',
          'See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md'
        ].join('\n')
      );
    }

    if (exceptionHandlers) {
      this.exceptions.handle(exceptionHandlers);
    }
    if (rejectionHandlers) {
      this.rejections.handle(rejectionHandlers);
    }
  }

  /* eslint-disable valid-jsdoc */
  /**
   * Helper method to get the highest logging level associated with a logger
   *
   * @returns { number | null } - The highest configured logging level, null
   * for invalid configuration
   */
  getHighestLogLevel() {
    // This can be null, if this.level has an invalid value
    const configuredLevelValue = getLevelValue(this.levels, this.level);

    // If there are no transports, return the level configured at the logger level
    if (!this.transports || this.transports.length === 0) {
      return configuredLevelValue;
    }

    return this.transports.reduce((max, transport) => {
      const levelValue = getLevelValue(this.levels, transport.level);
      return levelValue !== null && levelValue > max ? levelValue : max;
    }, configuredLevelValue);
  }

  isLevelEnabled(level) {
    const givenLevelValue = getLevelValue(this.levels, level);
    if (givenLevelValue === null) {
      return false;
    }

    const configuredLevelValue = getLevelValue(this.levels, this.level);
    if (configuredLevelValue === null) {
      return false;
    }

    if (!this.transports || this.transports.length === 0) {
      return configuredLevelValue >= givenLevelValue;
    }

    const index = this.transports.findIndex(transport => {
      let transportLevelValue = getLevelValue(this.levels, transport.level);
      if (transportLevelValue === null) {
        transportLevelValue = configuredLevelValue;
      }
      return transportLevelValue >= givenLevelValue;
    });
    return index !== -1;
  }

  /* eslint-disable valid-jsdoc */
  /**
   * Ensure backwards compatibility with a `log` method
   * @param {mixed} level - Level the log message is written at.
   * @param {mixed} msg - TODO: add param description.
   * @param {mixed} meta - TODO: add param description.
   * @returns {Logger} - TODO: add return description.
   *
   * @example
   *    // Supports the existing API:
   *    logger.log('info', 'Hello world', { custom: true });
   *    logger.log('info', new Error('Yo, it\'s on fire'));
   *
   *    // Requires winston.format.splat()
   *    logger.log('info', '%s %d%%', 'A string', 50, { thisIsMeta: true });
   *
   *    // And the new API with a single JSON literal:
   *    logger.log({ level: 'info', message: 'Hello world', custom: true });
   *    logger.log({ level: 'info', message: new Error('Yo, it\'s on fire') });
   *
   *    // Also requires winston.format.splat()
   *    logger.log({
   *      level: 'info',
   *      message: '%s %d%%',
   *      [SPLAT]: ['A string', 50],
   *      meta: { thisIsMeta: true }
   *    });
   *
   */
  /* eslint-enable valid-jsdoc */
  log(level, msg, ...splat) {
    // eslint-disable-line max-params
    // Optimize for the hotpath of logging JSON literals
    if (arguments.length === 1) {
      // Yo dawg, I heard you like levels ... seriously ...
      // In this context the LHS `level` here is actually the `info` so read
      // this as: info[LEVEL] = info.level;
      level[LEVEL] = level.level;
      this._addDefaultMeta(level);
      this.write(level);
      return this;
    }

    // Slightly less hotpath, but worth optimizing for.
    if (arguments.length === 2) {
      if (msg && typeof msg === 'object') {
        msg[LEVEL] = msg.level = level;
        this._addDefaultMeta(msg);
        this.write(msg);
        return this;
      }

      msg = { [LEVEL]: level, level, message: msg };
      this._addDefaultMeta(msg);
      this.write(msg);
      return this;
    }

    const [meta] = splat;
    if (typeof meta === 'object' && meta !== null) {
      // Extract tokens, if none available default to empty array to
      // ensure consistancy in expected results
      const tokens = msg && msg.match && msg.match(formatRegExp);

      if (!tokens) {
        const info = Object.assign({}, this.defaultMeta, meta, {
          [LEVEL]: level,
          [SPLAT]: splat,
          level,
          message: msg
        });

        if (meta.message) info.message = `${info.message} ${meta.message}`;
        if (meta.stack) info.stack = meta.stack;
        if (meta.cause) info.cause = meta.cause;

        this.write(info);
        return this;
      }
    }

    this.write(Object.assign({}, this.defaultMeta, {
      [LEVEL]: level,
      [SPLAT]: splat,
      level,
      message: msg
    }));

    return this;
  }

  /**
   * Pushes data so that it can be picked up by all of our pipe targets.
   * @param {mixed} info - TODO: add param description.
   * @param {mixed} enc - TODO: add param description.
   * @param {mixed} callback - Continues stream processing.
   * @returns {undefined}
   * @private
   */
  _transform(info, enc, callback) {
    if (this.silent) {
      return callback();
    }

    // [LEVEL] is only soft guaranteed to be set here since we are a proper
    // stream. It is likely that `info` came in through `.log(info)` or
    // `.info(info)`. If it is not defined, however, define it.
    // This LEVEL symbol is provided by `triple-beam` and also used in:
    // - logform
    // - winston-transport
    // - abstract-winston-transport
    if (!info[LEVEL]) {
      info[LEVEL] = info.level;
    }

    // Remark: really not sure what to do here, but this has been reported as
    // very confusing by pre winston@2.0.0 users as quite confusing when using
    // custom levels.
    if (!this.levels[info[LEVEL]] && this.levels[info[LEVEL]] !== 0) {
      // eslint-disable-next-line no-console
      console.error('[winston] Unknown logger level: %s', info[LEVEL]);
    }

    // Remark: not sure if we should simply error here.
    if (!this._readableState.pipes) {
      // eslint-disable-next-line no-console
      console.error(
        '[winston] Attempt to write logs with no transports, which can increase memory usage: %j',
        info
      );
    }

    // Here we write to the `format` pipe-chain, which on `readable` above will
    // push the formatted `info` Object onto the buffer for this instance. We trap
    // (and re-throw) any errors generated by the user-provided format, but also
    // guarantee that the streams callback is invoked so that we can continue flowing.
    try {
      this.push(this.format.transform(info, this.format.options));
    } finally {
      this._writableState.sync = false;
      // eslint-disable-next-line callback-return
      callback();
    }
  }

  /**
   * Delays the 'finish' event until all transport pipe targets have
   * also emitted 'finish' or are already finished.
   * @param {mixed} callback - Continues stream processing.
   */
  _final(callback) {
    const transports = this.transports.slice();
    asyncForEach(
      transports,
      (transport, next) => {
        if (!transport || transport.finished) return setImmediate(next);
        transport.once('finish', next);
        transport.end();
      },
      callback
    );
  }

  /**
   * Adds the transport to this logger instance by piping to it.
   * @param {mixed} transport - TODO: add param description.
   * @returns {Logger} - TODO: add return description.
   */
  add(transport) {
    // Support backwards compatibility with all existing `winston < 3.x.x`
    // transports which meet one of two criteria:
    // 1. They inherit from winston.Transport in  < 3.x.x which is NOT a stream.
    // 2. They expose a log method which has a length greater than 2 (i.e. more then
    //    just `log(info, callback)`.
    const target =
      !isStream(transport) || transport.log.length > 2
        ? new LegacyTransportStream({ transport })
        : transport;

    if (!target._writableState || !target._writableState.objectMode) {
      throw new Error(
        'Transports must WritableStreams in objectMode. Set { objectMode: true }.'
      );
    }

    // Listen for the `error` event and the `warn` event on the new Transport.
    this._onEvent('error', target);
    this._onEvent('warn', target);
    this.pipe(target);

    if (transport.handleExceptions) {
      this.exceptions.handle();
    }

    if (transport.handleRejections) {
      this.rejections.handle();
    }

    return this;
  }

  /**
   * Removes the transport from this logger instance by unpiping from it.
   * @param {mixed} transport - TODO: add param description.
   * @returns {Logger} - TODO: add return description.
   */
  remove(transport) {
    if (!transport) return this;
    let target = transport;
    if (!isStream(transport) || transport.log.length > 2) {
      target = this.transports.filter(
        match => match.transport === transport
      )[0];
    }

    if (target) {
      this.unpipe(target);
    }
    return this;
  }

  /**
   * Removes all transports from this logger instance.
   * @returns {Logger} - TODO: add return description.
   */
  clear() {
    this.unpipe();
    return this;
  }

  /**
   * Cleans up resources (streams, event listeners) for all transports
   * associated with this instance (if necessary).
   * @returns {Logger} - TODO: add return description.
   */
  close() {
    this.exceptions.unhandle();
    this.rejections.unhandle();
    this.clear();
    this.emit('close');
    return this;
  }

  /**
   * Sets the `target` levels specified on this instance.
   * @param {Object} Target levels to use on this instance.
   */
  setLevels() {
    warn.deprecated('setLevels');
  }

  /**
   * Queries the all transports for this instance with the specified `options`.
   * This will aggregate each transport's results into one object containing
   * a property per transport.
   * @param {Object} options - Query options for this instance.
   * @param {function} callback - Continuation to respond to when complete.
   */
  query(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    options = options || {};
    const results = {};
    const queryObject = Object.assign({}, options.query || {});

    // Helper function to query a single transport
    function queryTransport(transport, next) {
      if (options.query && typeof transport.formatQuery === 'function') {
        options.query = transport.formatQuery(queryObject);
      }

      transport.query(options, (err, res) => {
        if (err) {
          return next(err);
        }

        if (typeof transport.formatResults === 'function') {
          res = transport.formatResults(res, options.format);
        }

        next(null, res);
      });
    }

    // Helper function to accumulate the results from `queryTransport` into
    // the `results`.
    function addResults(transport, next) {
      queryTransport(transport, (err, result) => {
        // queryTransport could potentially invoke the callback multiple times
        // since Transport code can be unpredictable.
        if (next) {
          result = err || result;
          if (result) {
            results[transport.name] = result;
          }

          // eslint-disable-next-line callback-return
          next();
        }

        next = null;
      });
    }

    // Iterate over the transports in parallel setting the appropriate key in
    // the `results`.
    asyncForEach(
      this.transports.filter(transport => !!transport.query),
      addResults,
      () => callback(null, results)
    );
  }

  /**
   * Returns a log stream for all transports. Options object is optional.
   * @param{Object} options={} - Stream options for this instance.
   * @returns {Stream} - TODO: add return description.
   */
  stream(options = {}) {
    const out = new Stream();
    const streams = [];

    out._streams = streams;
    out.destroy = () => {
      let i = streams.length;
      while (i--) {
        streams[i].destroy();
      }
    };

    // Create a list of all transports for this instance.
    this.transports
      .filter(transport => !!transport.stream)
      .forEach(transport => {
        const str = transport.stream(options);
        if (!str) {
          return;
        }

        streams.push(str);

        str.on('log', log => {
          log.transport = log.transport || [];
          log.transport.push(transport.name);
          out.emit('log', log);
        });

        str.on('error', err => {
          err.transport = err.transport || [];
          err.transport.push(transport.name);
          out.emit('error', err);
        });
      });

    return out;
  }

  /**
   * Returns an object corresponding to a specific timing. When done is called
   * the timer will finish and log the duration. e.g.:
   * @returns {Profile} - TODO: add return description.
   * @example
   *    const timer = winston.startTimer()
   *    setTimeout(() => {
   *      timer.done({
   *        message: 'Logging message'
   *      });
   *    }, 1000);
   */
  startTimer() {
    return new Profiler(this);
  }

  /**
   * Tracks the time inbetween subsequent calls to this method with the same
   * `id` parameter. The second call to this method will log the difference in
   * milliseconds along with the message.
   * @param {string} id Unique id of the profiler
   * @returns {Logger} - TODO: add return description.
   */
  profile(id, ...args) {
    const time = Date.now();
    if (this.profilers[id]) {
      const timeEnd = this.profilers[id];
      delete this.profilers[id];

      // Attempt to be kind to users if they are still using older APIs.
      if (typeof args[args.length - 2] === 'function') {
        // eslint-disable-next-line no-console
        console.warn(
          'Callback function no longer supported as of winston@3.0.0'
        );
        args.pop();
      }

      // Set the duration property of the metadata
      const info = typeof args[args.length - 1] === 'object' ? args.pop() : {};
      info.level = info.level || 'info';
      info.durationMs = time - timeEnd;
      info.message = info.message || id;
      return this.write(info);
    }

    this.profilers[id] = time;
    return this;
  }

  /**
   * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
   * @returns {undefined}
   * @deprecated
   */
  handleExceptions(...args) {
    // eslint-disable-next-line no-console
    console.warn(
      'Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()'
    );
    this.exceptions.handle(...args);
  }

  /**
   * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
   * @returns {undefined}
   * @deprecated
   */
  unhandleExceptions(...args) {
    // eslint-disable-next-line no-console
    console.warn(
      'Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()'
    );
    this.exceptions.unhandle(...args);
  }

  /**
   * Throw a more meaningful deprecation notice
   * @throws {Error} - TODO: add throws description.
   */
  cli() {
    throw new Error(
      [
        'Logger.cli() was removed in winston@3.0.0',
        'Use a custom winston.formats.cli() instead.',
        'See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md'
      ].join('\n')
    );
  }

  /**
   * Bubbles the `event` that occured on the specified `transport` up
   * from this instance.
   * @param {string} event - The event that occured
   * @param {Object} transport - Transport on which the event occured
   * @private
   */
  _onEvent(event, transport) {
    function transportEvent(err) {
      // https://github.com/winstonjs/winston/issues/1364
      if (event === 'error' && !this.transports.includes(transport)) {
        this.add(transport);
      }
      this.emit(event, err, transport);
    }

    if (!transport['__winston' + event]) {
      transport['__winston' + event] = transportEvent.bind(this);
      transport.on(event, transport['__winston' + event]);
    }
  }

  _addDefaultMeta(msg) {
    if (this.defaultMeta) {
      Object.assign(msg, this.defaultMeta);
    }
  }
}

function getLevelValue(levels, level) {
  const value = levels[level];
  if (!value && value !== 0) {
    return null;
  }
  return value;
}

/**
 * Represents the current readableState pipe targets for this Logger instance.
 * @type {Array|Object}
 */
Object.defineProperty(Logger.prototype, 'transports', {
  configurable: false,
  enumerable: true,
  get() {
    const { pipes } = this._readableState;
    return !Array.isArray(pipes) ? [pipes].filter(Boolean) : pipes;
  }
});

module.exports = Logger;



================================================
FILE: lib/winston/profiler.js
================================================
/**
 * profiler.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';
/**
 * TODO: add class description.
 * @type {Profiler}
 * @private
 */
class Profiler {
  /**
   * Constructor function for the Profiler instance used by
   * `Logger.prototype.startTimer`. When done is called the timer will finish
   * and log the duration.
   * @param {!Logger} logger - TODO: add param description.
   * @private
   */
  constructor(logger) {
    const Logger = require('./logger');
    if (typeof logger !== 'object' || Array.isArray(logger) || !(logger instanceof Logger)) {
      throw new Error('Logger is required for profiling');
    } else {
      this.logger = logger;
      this.start = Date.now();
    }
  }

  /**
   * Ends the current timer (i.e. Profiler) instance and logs the `msg` along
   * with the duration since creation.
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  done(...args) {
    if (typeof args[args.length - 1] === 'function') {
      // eslint-disable-next-line no-console
      console.warn('Callback function no longer supported as of winston@3.0.0');
      args.pop();
    }

    const info = typeof args[args.length - 1] === 'object' ? args.pop() : {};
    info.level = info.level || 'info';
    info.durationMs = (Date.now()) - this.start;

    return this.logger.write(info);
  }
}

module.exports = Profiler;



================================================
FILE: lib/winston/rejection-handler.js
================================================
/**
 * exception-handler.js: Object for handling uncaughtException events.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const os = require('os');
const asyncForEach = require('async/forEach');
const debug = require('@dabh/diagnostics')('winston:rejection');
const once = require('one-time');
const stackTrace = require('stack-trace');
const RejectionStream = require('./rejection-stream');

/**
 * Object for handling unhandledRejection events.
 * @type {RejectionHandler}
 */
module.exports = class RejectionHandler {
  /**
   * TODO: add contructor description
   * @param {!Logger} logger - TODO: add param description
   */
  constructor(logger) {
    if (!logger) {
      throw new Error('Logger is required to handle rejections');
    }

    this.logger = logger;
    this.handlers = new Map();
  }

  /**
   * Handles `unhandledRejection` events for the current process by adding any
   * handlers passed in.
   * @returns {undefined}
   */
  handle(...args) {
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        return arg.forEach(handler => this._addHandler(handler));
      }

      this._addHandler(arg);
    });

    if (!this.catcher) {
      this.catcher = this._unhandledRejection.bind(this);
      process.on('unhandledRejection', this.catcher);
    }
  }

  /**
   * Removes any handlers to `unhandledRejection` events for the current
   * process. This does not modify the state of the `this.handlers` set.
   * @returns {undefined}
   */
  unhandle() {
    if (this.catcher) {
      process.removeListener('unhandledRejection', this.catcher);
      this.catcher = false;

      Array.from(this.handlers.values()).forEach(wrapper =>
        this.logger.unpipe(wrapper)
      );
    }
  }

  /**
   * TODO: add method description
   * @param {Error} err - Error to get information about.
   * @returns {mixed} - TODO: add return description.
   */
  getAllInfo(err) {
    let message = null;
    if (err) {
      message = typeof err === 'string' ? err : err.message;
    }

    return {
      error: err,
      // TODO (indexzero): how do we configure this?
      level: 'error',
      message: [
        `unhandledRejection: ${message || '(no error message)'}`,
        err && err.stack || '  No stack trace'
      ].join('\n'),
      stack: err && err.stack,
      rejection: true,
      date: new Date().toString(),
      process: this.getProcessInfo(),
      os: this.getOsInfo(),
      trace: this.getTrace(err)
    };
  }

  /**
   * Gets all relevant process information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getProcessInfo() {
    return {
      pid: process.pid,
      uid: process.getuid ? process.getuid() : null,
      gid: process.getgid ? process.getgid() : null,
      cwd: process.cwd(),
      execPath: process.execPath,
      version: process.version,
      argv: process.argv,
      memoryUsage: process.memoryUsage()
    };
  }

  /**
   * Gets all relevant OS information for the currently running process.
   * @returns {mixed} - TODO: add return description.
   */
  getOsInfo() {
    return {
      loadavg: os.loadavg(),
      uptime: os.uptime()
    };
  }

  /**
   * Gets a stack trace for the specified error.
   * @param {mixed} err - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  getTrace(err) {
    const trace = err ? stackTrace.parse(err) : stackTrace.get();
    return trace.map(site => {
      return {
        column: site.getColumnNumber(),
        file: site.getFileName(),
        function: site.getFunctionName(),
        line: site.getLineNumber(),
        method: site.getMethodName(),
        native: site.isNative()
      };
    });
  }

  /**
   * Helper method to add a transport as an exception handler.
   * @param {Transport} handler - The transport to add as an exception handler.
   * @returns {void}
   */
  _addHandler(handler) {
    if (!this.handlers.has(handler)) {
      handler.handleRejections = true;
      const wrapper = new RejectionStream(handler);
      this.handlers.set(handler, wrapper);
      this.logger.pipe(wrapper);
    }
  }

  /**
   * Logs all relevant information around the `err` and exits the current
   * process.
   * @param {Error} err - Error to handle
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _unhandledRejection(err) {
    const info = this.getAllInfo(err);
    const handlers = this._getRejectionHandlers();
    // Calculate if we should exit on this error
    let doExit =
      typeof this.logger.exitOnError === 'function'
        ? this.logger.exitOnError(err)
        : this.logger.exitOnError;
    let timeout;

    if (!handlers.length && doExit) {
      // eslint-disable-next-line no-console
      console.warn('winston: exitOnError cannot be true with no rejection handlers.');
      // eslint-disable-next-line no-console
      console.warn('winston: not exiting process.');
      doExit = false;
    }

    function gracefulExit() {
      debug('doExit', doExit);
      debug('process._exiting', process._exiting);

      if (doExit && !process._exiting) {
        // Remark: Currently ignoring any rejections from transports when
        // catching unhandled rejections.
        if (timeout) {
          clearTimeout(timeout);
        }
        // eslint-disable-next-line no-process-exit
        process.exit(1);
      }
    }

    if (!handlers || handlers.length === 0) {
      return process.nextTick(gracefulExit);
    }

    // Log to all transports attempting to listen for when they are completed.
    asyncForEach(
      handlers,
      (handler, next) => {
        const done = once(next);
        const transport = handler.transport || handler;

        // Debug wrapping so that we can inspect what's going on under the covers.
        function onDone(event) {
          return () => {
            debug(event);
            done();
          };
        }

        transport._ending = true;
        transport.once('finish', onDone('finished'));
        transport.once('error', onDone('error'));
      },
      () => doExit && gracefulExit()
    );

    this.logger.log(info);

    // If exitOnError is true, then only allow the logging of exceptions to
    // take up to `3000ms`.
    if (doExit) {
      timeout = setTimeout(gracefulExit, 3000);
    }
  }

  /**
   * Returns the list of transports and exceptionHandlers for this instance.
   * @returns {Array} - List of transports and exceptionHandlers for this
   * instance.
   * @private
   */
  _getRejectionHandlers() {
    // Remark (indexzero): since `logger.transports` returns all of the pipes
    // from the _readableState of the stream we actually get the join of the
    // explicit handlers and the implicit transports with
    // `handleRejections: true`
    return this.logger.transports.filter(wrap => {
      const transport = wrap.transport || wrap;
      return transport.handleRejections;
    });
  }
};



================================================
FILE: lib/winston/rejection-stream.js
================================================
/**
 * rejection-stream.js: TODO: add file header handler.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const { Writable } = require('readable-stream');

/**
 * TODO: add class description.
 * @type {RejectionStream}
 * @extends {Writable}
 */
module.exports = class RejectionStream extends Writable {
  /**
   * Constructor function for the RejectionStream responsible for wrapping a
   * TransportStream; only allowing writes of `info` objects with
   * `info.rejection` set to true.
   * @param {!TransportStream} transport - Stream to filter to rejections
   */
  constructor(transport) {
    super({ objectMode: true });

    if (!transport) {
      throw new Error('RejectionStream requires a TransportStream instance.');
    }

    this.handleRejections = true;
    this.transport = transport;
  }

  /**
   * Writes the info object to our transport instance if (and only if) the
   * `rejection` property is set on the info.
   * @param {mixed} info - TODO: add param description.
   * @param {mixed} enc - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   * @private
   */
  _write(info, enc, callback) {
    if (info.rejection) {
      return this.transport.log(info, callback);
    }

    callback();
    return true;
  }
};



================================================
FILE: lib/winston/tail-file.js
================================================
/**
 * tail-file.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const fs = require('fs');
const { StringDecoder } = require('string_decoder');
const { Stream } = require('readable-stream');

/**
 * Simple no-op function.
 * @returns {undefined}
 */
function noop() {}

/**
 * TODO: add function description.
 * @param {Object} options - Options for tail.
 * @param {function} iter - Iterator function to execute on every line.
* `tail -f` a file. Options must include file.
 * @returns {mixed} - TODO: add return description.
 */
module.exports = (options, iter) => {
  const buffer = Buffer.alloc(64 * 1024);
  const decode = new StringDecoder('utf8');
  const stream = new Stream();
  let buff = '';
  let pos = 0;
  let row = 0;

  if (options.start === -1) {
    delete options.start;
  }

  stream.readable = true;
  stream.destroy = () => {
    stream.destroyed = true;
    stream.emit('end');
    stream.emit('close');
  };

  fs.open(options.file, 'a+', '0644', (err, fd) => {
    if (err) {
      if (!iter) {
        stream.emit('error', err);
      } else {
        iter(err);
      }
      stream.destroy();
      return;
    }

    (function read() {
      if (stream.destroyed) {
        fs.close(fd, noop);
        return;
      }

      return fs.read(fd, buffer, 0, buffer.length, pos, (error, bytes) => {
        if (error) {
          if (!iter) {
            stream.emit('error', error);
          } else {
            iter(error);
          }
          stream.destroy();
          return;
        }

        if (!bytes) {
          if (buff) {
            // eslint-disable-next-line eqeqeq
            if (options.start == null || row > options.start) {
              if (!iter) {
                stream.emit('line', buff);
              } else {
                iter(null, buff);
              }
            }
            row++;
            buff = '';
          }
          return setTimeout(read, 1000);
        }

        let data = decode.write(buffer.slice(0, bytes));
        if (!iter) {
          stream.emit('data', data);
        }

        data = (buff + data).split(/\n+/);

        const l = data.length - 1;
        let i = 0;

        for (; i < l; i++) {
          // eslint-disable-next-line eqeqeq
          if (options.start == null || row > options.start) {
            if (!iter) {
              stream.emit('line', data[i]);
            } else {
              iter(null, data[i]);
            }
          }
          row++;
        }

        buff = data[l];
        pos += bytes;
        return read();
      });
    }());
  });

  if (!iter) {
    return stream;
  }

  return stream.destroy;
};



================================================
FILE: lib/winston/config/index.d.ts
================================================
// Type definitions for winston 3.0
// Project: https://github.com/winstonjs/winston

/// <reference types="node" />

declare namespace winston {
  interface AbstractConfigSetLevels {
    [key: string]: number;
  }

  interface AbstractConfigSetColors {
    [key: string]: string | string[];
  }

  interface AbstractConfigSet {
    levels: AbstractConfigSetLevels;
    colors: AbstractConfigSetColors;
  }

  interface CliConfigSetLevels extends AbstractConfigSetLevels {
    error: number;
    warn: number;
    help: number;
    data: number;
    info: number;
    debug: number;
    prompt: number;
    verbose: number;
    input: number;
    silly: number;
  }

  interface CliConfigSetColors extends AbstractConfigSetColors {
    error: string | string[];
    warn: string | string[];
    help: string | string[];
    data: string | string[];
    info: string | string[];
    debug: string | string[];
    prompt: string | string[];
    verbose: string | string[];
    input: string | string[];
    silly: string | string[];
  }

  interface NpmConfigSetLevels extends AbstractConfigSetLevels {
    error: number;
    warn: number;
    info: number;
    http: number;
    verbose: number;
    debug: number;
    silly: number;
  }

  interface NpmConfigSetColors extends AbstractConfigSetColors {
    error: string | string[];
    warn: string | string[];
    info: string | string[];
    http: string | string[];
    verbose: string | string[];
    debug: string | string[];
    silly: string | string[];
  }

  interface SyslogConfigSetLevels extends AbstractConfigSetLevels {
    emerg: number;
    alert: number;
    crit: number;
    error: number;
    warning: number;
    notice: number;
    info: number;
    debug: number;
  }

  interface SyslogConfigSetColors extends AbstractConfigSetColors {
    emerg: string | string[];
    alert: string | string[];
    crit: string | string[];
    error: string | string[];
    warning: string | string[];
    notice: string | string[];
    info: string | string[];
    debug: string | string[];
  }

  interface Config {
    allColors: AbstractConfigSetColors;
    cli: { levels: CliConfigSetLevels, colors: CliConfigSetColors };
    npm: { levels: NpmConfigSetLevels, colors: NpmConfigSetColors };
    syslog: { levels: SyslogConfigSetLevels, colors: SyslogConfigSetColors };

    addColors(colors: AbstractConfigSetColors): void;
  }
}

declare const winston: winston.Config;
export = winston;



================================================
FILE: lib/winston/config/index.js
================================================
/**
 * index.js: Default settings for all levels that winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const logform = require('logform');
const { configs } = require('triple-beam');

/**
 * Export config set for the CLI.
 * @type {Object}
 */
exports.cli = logform.levels(configs.cli);

/**
 * Export config set for npm.
 * @type {Object}
 */
exports.npm = logform.levels(configs.npm);

/**
 * Export config set for the syslog.
 * @type {Object}
 */
exports.syslog = logform.levels(configs.syslog);

/**
 * Hoist addColors from logform where it was refactored into in winston@3.
 * @type {Object}
 */
exports.addColors = logform.levels;



================================================
FILE: lib/winston/transports/console.js
================================================
/* eslint-disable no-console */
/*
 * console.js: Transport for outputting to the console.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const os = require('os');
const { LEVEL, MESSAGE } = require('triple-beam');
const TransportStream = require('winston-transport');

/**
 * Transport for outputting to the console.
 * @type {Console}
 * @extends {TransportStream}
 */
module.exports = class Console extends TransportStream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    // Expose the name of this Transport on the prototype
    this.name = options.name || 'console';
    this.stderrLevels = this._stringArrayToSet(options.stderrLevels);
    this.consoleWarnLevels = this._stringArrayToSet(options.consoleWarnLevels);
    this.eol = typeof options.eol === 'string' ? options.eol : os.EOL;
    this.forceConsole = options.forceConsole || false;

    // Keep a reference to the log, warn, and error console methods
    // in case they get redirected to this transport after the logger is
    // instantiated. This prevents a circular reference issue.
    this._consoleLog = console.log.bind(console);
    this._consoleWarn = console.warn.bind(console);
    this._consoleError = console.error.bind(console);

    this.setMaxListeners(30);
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info));

    // Remark: what if there is no raw...?
    if (this.stderrLevels[info[LEVEL]]) {
      if (console._stderr && !this.forceConsole) {
        // Node.js maps `process.stderr` to `console._stderr`.
        console._stderr.write(`${info[MESSAGE]}${this.eol}`);
      } else {
        // console.error adds a newline
        this._consoleError(info[MESSAGE]);
      }

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    } else if (this.consoleWarnLevels[info[LEVEL]]) {
      if (console._stderr && !this.forceConsole) {
        // Node.js maps `process.stderr` to `console._stderr`.
        // in Node.js console.warn is an alias for console.error
        console._stderr.write(`${info[MESSAGE]}${this.eol}`);
      } else {
        // console.warn adds a newline
        this._consoleWarn(info[MESSAGE]);
      }

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    }

    if (console._stdout && !this.forceConsole) {
      // Node.js maps `process.stdout` to `console._stdout`.
      console._stdout.write(`${info[MESSAGE]}${this.eol}`);
    } else {
      // console.log adds a newline.
      this._consoleLog(info[MESSAGE]);
    }

    if (callback) {
      callback(); // eslint-disable-line callback-return
    }
  }

  /**
   * Returns a Set-like object with strArray's elements as keys (each with the
   * value true).
   * @param {Array} strArray - Array of Set-elements as strings.
   * @param {?string} [errMsg] - Custom error message thrown on invalid input.
   * @returns {Object} - TODO: add return description.
   * @private
   */
  _stringArrayToSet(strArray, errMsg) {
    if (!strArray) return {};

    errMsg =
      errMsg || 'Cannot make set from type other than Array of string elements';

    if (!Array.isArray(strArray)) {
      throw new Error(errMsg);
    }

    return strArray.reduce((set, el) => {
      if (typeof el !== 'string') {
        throw new Error(errMsg);
      }
      set[el] = true;

      return set;
    }, {});
  }
};



================================================
FILE: lib/winston/transports/file.js
================================================
/* eslint-disable complexity,max-statements */
/**
 * file.js: Transport for outputting to a local log file.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const fs = require('fs');
const path = require('path');
const asyncSeries = require('async/series');
const zlib = require('zlib');
const { MESSAGE } = require('triple-beam');
const { Stream, PassThrough } = require('readable-stream');
const TransportStream = require('winston-transport');
const debug = require('@dabh/diagnostics')('winston:file');
const os = require('os');
const tailFile = require('../tail-file');

/**
 * Transport for outputting to a local log file.
 * @type {File}
 * @extends {TransportStream}
 */
module.exports = class File extends TransportStream {
  /**
   * Constructor function for the File transport object responsible for
   * persisting log messages and metadata to one or more files.
   * @param {Object} options - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    // Expose the name of this Transport on the prototype.
    this.name = options.name || 'file';

    // Helper function which throws an `Error` in the event that any of the
    // rest of the arguments is present in `options`.
    function throwIf(target, ...args) {
      args.slice(1).forEach(name => {
        if (options[name]) {
          throw new Error(`Cannot set ${name} and ${target} together`);
        }
      });
    }

    // Setup the base stream that always gets piped to to handle buffering.
    this._stream = new PassThrough();
    this._stream.setMaxListeners(30);

    // Bind this context for listener methods.
    this._onError = this._onError.bind(this);

    if (options.filename || options.dirname) {
      throwIf('filename or dirname', 'stream');
      this._basename = this.filename = options.filename
        ? path.basename(options.filename)
        : 'winston.log';

      this.dirname = options.dirname || path.dirname(options.filename);
      this.options = options.options || { flags: 'a' };
    } else if (options.stream) {
      // eslint-disable-next-line no-console
      console.warn('options.stream will be removed in winston@4. Use winston.transports.Stream');
      throwIf('stream', 'filename', 'maxsize');
      this._dest = this._stream.pipe(this._setupStream(options.stream));
      this.dirname = path.dirname(this._dest.path);
      // We need to listen for drain events when write() returns false. This
      // can make node mad at times.
    } else {
      throw new Error('Cannot log to file without filename or stream.');
    }

    this.maxsize = options.maxsize || null;
    this.rotationFormat = options.rotationFormat || false;
    this.zippedArchive = options.zippedArchive || false;
    this.maxFiles = options.maxFiles || null;
    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;
    this.tailable = options.tailable || false;
    this.lazy = options.lazy || false;

    // Internal state variables representing the number of files this instance
    // has created and the current size (in bytes) of the current logfile.
    this._size = 0;
    this._pendingSize = 0;
    this._created = 0;
    this._drain = false;
    this._opening = false;
    this._ending = false;
    this._fileExist = false;

    if (this.dirname) this._createLogDirIfNotExist(this.dirname);
    if (!this.lazy) this.open();
  }

  finishIfEnding() {
    if (this._ending) {
      if (this._opening) {
        this.once('open', () => {
          this._stream.once('finish', () => this.emit('finish'));
          setImmediate(() => this._stream.end());
        });
      } else {
        this._stream.once('finish', () => this.emit('finish'));
        setImmediate(() => this._stream.end());
      }
    }
  }

  /**
   * Core logging method exposed to Winston. Metadata is optional.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback = () => { }) {
    // Remark: (jcrugzz) What is necessary about this callback(null, true) now
    // when thinking about 3.x? Should silent be handled in the base
    // TransportStream _write method?
    if (this.silent) {
      callback();
      return true;
    }


    // Output stream buffer is full and has asked us to wait for the drain event
    if (this._drain) {
      this._stream.once('drain', () => {
        this._drain = false;
        this.log(info, callback);
      });
      return;
    }
    if (this._rotate) {
      this._stream.once('rotate', () => {
        this._rotate = false;
        this.log(info, callback);
      });
      return;
    }
    if (this.lazy) {
      if (!this._fileExist) {
        if (!this._opening) {
          this.open();
        }
        this.once('open', () => {
          this._fileExist = true;
          this.log(info, callback);
          return;
        });
        return;
      }
      if (this._needsNewFile(this._pendingSize)) {
        this._dest.once('close', () => {
          if (!this._opening) {
            this.open();
          }
          this.once('open', () => {
            this.log(info, callback);
            return;
          });
          return;
        });
        return;
      }
    }

    // Grab the raw string and append the expected EOL.
    const output = `${info[MESSAGE]}${this.eol}`;
    const bytes = Buffer.byteLength(output);

    // After we have written to the PassThrough check to see if we need
    // to rotate to the next file.
    //
    // Remark: This gets called too early and does not depict when data
    // has been actually flushed to disk.
    function logged() {
      this._size += bytes;
      this._pendingSize -= bytes;

      debug('logged %s %s', this._size, output);
      this.emit('logged', info);

      // Do not attempt to rotate files while rotating
      if (this._rotate) {
        return;
      }

      // Do not attempt to rotate files while opening
      if (this._opening) {
        return;
      }

      // Check to see if we need to end the stream and create a new one.
      if (!this._needsNewFile()) {
        return;
      }
      if (this.lazy) {
        this._endStream(() => {this.emit('fileclosed');});
        return;
      }

      // End the current stream, ensure it flushes and create a new one.
      // This could potentially be optimized to not run a stat call but its
      // the safest way since we are supporting `maxFiles`.
      this._rotate = true;
      this._endStream(() => this._rotateFile());
    }

    // Keep track of the pending bytes being written while files are opening
    // in order to properly rotate the PassThrough this._stream when the file
    // eventually does open.
    this._pendingSize += bytes;
    if (this._opening
      && !this.rotatedWhileOpening
      && this._needsNewFile(this._size + this._pendingSize)) {
      this.rotatedWhileOpening = true;
    }

    const written = this._stream.write(output, logged.bind(this));
    if (!written) {
      this._drain = true;
      this._stream.once('drain', () => {
        this._drain = false;
        callback();
      });
    } else {
      callback(); // eslint-disable-line callback-return
    }

    debug('written', written, this._drain);

    this.finishIfEnding();

    return written;
  }

  /**
   * Query the transport. Options object is optional.
   * @param {Object} options - Loggly-like query options for this instance.
   * @param {function} callback - Continuation to respond to when complete.
   * TODO: Refactor me.
   */
  query(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    options = normalizeQuery(options);
    const file = path.join(this.dirname, this.filename);
    let buff = '';
    let results = [];
    let row = 0;

    const stream = fs.createReadStream(file, {
      encoding: 'utf8'
    });

    stream.on('error', err => {
      if (stream.readable) {
        stream.destroy();
      }
      if (!callback) {
        return;
      }

      return err.code !== 'ENOENT' ? callback(err) : callback(null, results);
    });

    stream.on('data', data => {
      data = (buff + data).split(/\n+/);
      const l = data.length - 1;
      let i = 0;

      for (; i < l; i++) {
        if (!options.start || row >= options.start) {
          add(data[i]);
        }
        row++;
      }

      buff = data[l];
    });

    stream.on('close', () => {
      if (buff) {
        add(buff, true);
      }
      if (options.order === 'desc') {
        results = results.reverse();
      }

      // eslint-disable-next-line callback-return
      if (callback) callback(null, results);
    });

    function add(buff, attempt) {
      try {
        const log = JSON.parse(buff);
        if (check(log)) {
          push(log);
        }
      } catch (e) {
        if (!attempt) {
          stream.emit('error', e);
        }
      }
    }

    function push(log) {
      if (
        options.rows &&
        results.length >= options.rows &&
        options.order !== 'desc'
      ) {
        if (stream.readable) {
          stream.destroy();
        }
        return;
      }

      if (options.fields) {
        log = options.fields.reduce((obj, key) => {
          obj[key] = log[key];
          return obj;
        }, {});
      }

      if (options.order === 'desc') {
        if (results.length >= options.rows) {
          results.shift();
        }
      }
      results.push(log);
    }

    function check(log) {
      if (!log) {
        return;
      }

      if (typeof log !== 'object') {
        return;
      }

      const time = new Date(log.timestamp);
      if (
        (options.from && time < options.from) ||
        (options.until && time > options.until) ||
        (options.level && options.level !== log.level)
      ) {
        return;
      }

      return true;
    }

    function normalizeQuery(options) {
      options = options || {};

      // limit
      options.rows = options.rows || options.limit || 10;

      // starting row offset
      options.start = options.start || 0;

      // now
      options.until = options.until || new Date();
      if (typeof options.until !== 'object') {
        options.until = new Date(options.until);
      }

      // now - 24
      options.from = options.from || (options.until - (24 * 60 * 60 * 1000));
      if (typeof options.from !== 'object') {
        options.from = new Date(options.from);
      }

      // 'asc' or 'desc'
      options.order = options.order || 'desc';

      return options;
    }
  }

  /**
   * Returns a log stream for this transport. Options object is optional.
   * @param {Object} options - Stream options for this instance.
   * @returns {Stream} - TODO: add return description.
   * TODO: Refactor me.
   */
  stream(options = {}) {
    const file = path.join(this.dirname, this.filename);
    const stream = new Stream();
    const tail = {
      file,
      start: options.start
    };

    stream.destroy = tailFile(tail, (err, line) => {
      if (err) {
        return stream.emit('error', err);
      }

      try {
        stream.emit('data', line);
        line = JSON.parse(line);
        stream.emit('log', line);
      } catch (e) {
        stream.emit('error', e);
      }
    });

    return stream;
  }

  /**
   * Checks to see the filesize of.
   * @returns {undefined}
   */
  open() {
    // If we do not have a filename then we were passed a stream and
    // don't need to keep track of size.
    if (!this.filename) return;
    if (this._opening) return;

    this._opening = true;

    // Stat the target file to get the size and create the stream.
    this.stat((err, size) => {
      if (err) {
        return this.emit('error', err);
      }
      debug('stat done: %s { size: %s }', this.filename, size);
      this._size = size;
      this._dest = this._createStream(this._stream);
      this._opening = false;
      this.once('open', () => {
        if (!this._stream.emit('rotate')) {
          this._rotate = false;
        }
      });
    });
  }

  /**
   * Stat the file and assess information in order to create the proper stream.
   * @param {function} callback - TODO: add param description.
   * @returns {undefined}
   */
  stat(callback) {
    const target = this._getFile();
    const fullpath = path.join(this.dirname, target);

    fs.stat(fullpath, (err, stat) => {
      if (err && err.code === 'ENOENT') {
        debug('ENOENT ok', fullpath);
        // Update internally tracked filename with the new target name.
        this.filename = target;
        return callback(null, 0);
      }

      if (err) {
        debug(`err ${err.code} ${fullpath}`);
        return callback(err);
      }

      if (!stat || this._needsNewFile(stat.size)) {
        // If `stats.size` is greater than the `maxsize` for this
        // instance then try again.
        return this._incFile(() => this.stat(callback));
      }

      // Once we have figured out what the filename is, set it
      // and return the size.
      this.filename = target;
      callback(null, stat.size);
    });
  }

  /**
   * Closes the stream associated with this instance.
   * @param {function} cb - TODO: add param description.
   * @returns {undefined}
   */
  close(cb) {
    if (!this._stream) {
      return;
    }

    this._stream.end(() => {
      if (cb) {
        cb(); // eslint-disable-line callback-return
      }
      this.emit('flush');
      this.emit('closed');
    });
  }

  /**
   * TODO: add method description.
   * @param {number} size - TODO: add param description.
   * @returns {undefined}
   */
  _needsNewFile(size) {
    size = size || this._size;
    return this.maxsize && size >= this.maxsize;
  }

  /**
   * TODO: add method description.
   * @param {Error} err - TODO: add param description.
   * @returns {undefined}
   */
  _onError(err) {
    this.emit('error', err);
  }

  /**
   * TODO: add method description.
   * @param {Stream} stream - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  _setupStream(stream) {
    stream.on('error', this._onError);

    return stream;
  }

  /**
   * TODO: add method description.
   * @param {Stream} stream - TODO: add param description.
   * @returns {mixed} - TODO: add return description.
   */
  _cleanupStream(stream) {
    stream.removeListener('error', this._onError);
    stream.destroy();
    return stream;
  }

  /**
   * TODO: add method description.
   */
  _rotateFile() {
    this._incFile(() => this.open());
  }

  /**
   * Unpipe from the stream that has been marked as full and end it so it
   * flushes to disk.
   *
   * @param {function} callback - Callback for when the current file has closed.
   * @private
   */
  _endStream(callback = () => { }) {
    if (this._dest) {
      this._stream.unpipe(this._dest);
      this._dest.end(() => {
        this._cleanupStream(this._dest);
        callback();
      });
    } else {
      callback(); // eslint-disable-line callback-return
    }
  }

  /**
   * Returns the WritableStream for the active file on this instance. If we
   * should gzip the file then a zlib stream is returned.
   *
   * @param {ReadableStream} source –PassThrough to pipe to the file when open.
   * @returns {WritableStream} Stream that writes to disk for the active file.
   */
  _createStream(source) {
    const fullpath = path.join(this.dirname, this.filename);

    debug('create stream start', fullpath, this.options);
    const dest = fs.createWriteStream(fullpath, this.options)
      // TODO: What should we do with errors here?
      .on('error', err => debug(err))
      .on('close', () => debug('close', dest.path, dest.bytesWritten))
      .on('open', () => {
        debug('file open ok', fullpath);
        this.emit('open', fullpath);
        source.pipe(dest);

        // If rotation occured during the open operation then we immediately
        // start writing to a new PassThrough, begin opening the next file
        // and cleanup the previous source and dest once the source has drained.
        if (this.rotatedWhileOpening) {
          this._stream = new PassThrough();
          this._stream.setMaxListeners(30);
          this._rotateFile();
          this.rotatedWhileOpening = false;
          this._cleanupStream(dest);
          source.end();
        }
      });

    debug('create stream ok', fullpath);
    return dest;
  }

  /**
   * TODO: add method description.
   * @param {function} callback - TODO: add param description.
   * @returns {undefined}
   */
  _incFile(callback) {
    debug('_incFile', this.filename);
    const ext = path.extname(this._basename);
    const basename = path.basename(this._basename, ext);
    const tasks = [];

    if (this.zippedArchive) {
      tasks.push(
        function (cb) {
          const num = this._created > 0 && !this.tailable ? this._created : '';
          this._compressFile(
            path.join(this.dirname, `${basename}${num}${ext}`),
            path.join(this.dirname, `${basename}${num}${ext}.gz`),
            cb
          );
        }.bind(this)
      );
    }

    tasks.push(
      function (cb) {
        if (!this.tailable) {
          this._created += 1;
          this._checkMaxFilesIncrementing(ext, basename, cb);
        } else {
          this._checkMaxFilesTailable(ext, basename, cb);
        }
      }.bind(this)
    );

    asyncSeries(tasks, callback);
  }

  /**
   * Gets the next filename to use for this instance in the case that log
   * filesizes are being capped.
   * @returns {string} - TODO: add return description.
   * @private
   */
  _getFile() {
    const ext = path.extname(this._basename);
    const basename = path.basename(this._basename, ext);
    const isRotation = this.rotationFormat
      ? this.rotationFormat()
      : this._created;

    // Caveat emptor (indexzero): rotationFormat() was broken by design When
    // combined with max files because the set of files to unlink is never
    // stored.
    return !this.tailable && this._created
      ? `${basename}${isRotation}${ext}`
      : `${basename}${ext}`;
  }

  /**
   * Increment the number of files created or checked by this instance.
   * @param {mixed} ext - TODO: add param description.
   * @param {mixed} basename - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {undefined}
   * @private
   */
  _checkMaxFilesIncrementing(ext, basename, callback) {
    // Check for maxFiles option and delete file.
    if (!this.maxFiles || this._created < this.maxFiles) {
      return setImmediate(callback);
    }

    const oldest = this._created - this.maxFiles;
    const isOldest = oldest !== 0 ? oldest : '';
    const isZipped = this.zippedArchive ? '.gz' : '';
    const filePath = `${basename}${isOldest}${ext}${isZipped}`;
    const target = path.join(this.dirname, filePath);

    fs.unlink(target, callback);
  }

  /**
   * Roll files forward based on integer, up to maxFiles. e.g. if base if
   * file.log and it becomes oversized, roll to file1.log, and allow file.log
   * to be re-used. If file is oversized again, roll file1.log to file2.log,
   * roll file.log to file1.log, and so on.
   * @param {mixed} ext - TODO: add param description.
   * @param {mixed} basename - TODO: add param description.
   * @param {mixed} callback - TODO: add param description.
   * @returns {undefined}
   * @private
   */
  _checkMaxFilesTailable(ext, basename, callback) {
    const tasks = [];
    if (!this.maxFiles) {
      return;
    }

    // const isZipped = this.zippedArchive ? '.gz' : '';
    const isZipped = this.zippedArchive ? '.gz' : '';
    for (let x = this.maxFiles - 1; x > 1; x--) {
      tasks.push(function (i, cb) {
        let fileName = `${basename}${(i - 1)}${ext}${isZipped}`;
        const tmppath = path.join(this.dirname, fileName);

        fs.exists(tmppath, exists => {
          if (!exists) {
            return cb(null);
          }

          fileName = `${basename}${i}${ext}${isZipped}`;
          fs.rename(tmppath, path.join(this.dirname, fileName), cb);
        });
      }.bind(this, x));
    }

    asyncSeries(tasks, () => {
      fs.rename(
        path.join(this.dirname, `${basename}${ext}${isZipped}`),
        path.join(this.dirname, `${basename}1${ext}${isZipped}`),
        callback
      );
    });
  }

  /**
   * Compresses src to dest with gzip and unlinks src
   * @param {string} src - path to source file.
   * @param {string} dest - path to zipped destination file.
   * @param {Function} callback - callback called after file has been compressed.
   * @returns {undefined}
   * @private
   */
  _compressFile(src, dest, callback) {
    fs.access(src, fs.F_OK, (err) => {
      if (err) {
        return callback();
      }
      var gzip = zlib.createGzip();
      var inp = fs.createReadStream(src);
      var out = fs.createWriteStream(dest);
      out.on('finish', () => {
        fs.unlink(src, callback);
      });
      inp.pipe(gzip).pipe(out);
    });
  }

  _createLogDirIfNotExist(dirPath) {
    /* eslint-disable no-sync */
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    /* eslint-enable no-sync */
  }
};



================================================
FILE: lib/winston/transports/http.js
================================================
/**
 * http.js: Transport for outputting to a json-rpcserver.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const http = require('http');
const https = require('https');
const { Stream } = require('readable-stream');
const TransportStream = require('winston-transport');
const { configure } = require('safe-stable-stringify');

/**
 * Transport for outputting to a json-rpc server.
 * @type {Stream}
 * @extends {TransportStream}
 */
module.exports = class Http extends TransportStream {
  /**
   * Constructor function for the Http transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  // eslint-disable-next-line max-statements
  constructor(options = {}) {
    super(options);

    this.options = options;
    this.name = options.name || 'http';
    this.ssl = !!options.ssl;
    this.host = options.host || 'localhost';
    this.port = options.port;
    this.auth = options.auth;
    this.path = options.path || '';
    this.maximumDepth = options.maximumDepth;
    this.agent = options.agent;
    this.headers = options.headers || {};
    this.headers['content-type'] = 'application/json';
    this.batch = options.batch || false;
    this.batchInterval = options.batchInterval || 5000;
    this.batchCount = options.batchCount || 10;
    this.batchOptions = [];
    this.batchTimeoutID = -1;
    this.batchCallback = {};

    if (!this.port) {
      this.port = this.ssl ? 443 : 80;
    }
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    this._request(info, null, null, (err, res) => {
      if (res && res.statusCode !== 200) {
        err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
      }

      if (err) {
        this.emit('warn', err);
      } else {
        this.emit('logged', info);
      }
    });

    // Remark: (jcrugzz) Fire and forget here so requests dont cause buffering
    // and block more requests from happening?
    if (callback) {
      setImmediate(callback);
    }
  }

  /**
   * Query the transport. Options object is optional.
   * @param {Object} options -  Loggly-like query options for this instance.
   * @param {function} callback - Continuation to respond to when complete.
   * @returns {undefined}
   */
  query(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    options = {
      method: 'query',
      params: this.normalizeQuery(options)
    };

    const auth = options.params.auth || null;
    delete options.params.auth;

    const path = options.params.path || null;
    delete options.params.path;

    this._request(options, auth, path, (err, res, body) => {
      if (res && res.statusCode !== 200) {
        err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
      }

      if (err) {
        return callback(err);
      }

      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          return callback(e);
        }
      }

      callback(null, body);
    });
  }

  /**
   * Returns a log stream for this transport. Options object is optional.
   * @param {Object} options - Stream options for this instance.
   * @returns {Stream} - TODO: add return description
   */
  stream(options = {}) {
    const stream = new Stream();
    options = {
      method: 'stream',
      params: options
    };

    const path = options.params.path || null;
    delete options.params.path;

    const auth = options.params.auth || null;
    delete options.params.auth;

    let buff = '';
    const req = this._request(options, auth, path);

    stream.destroy = () => req.destroy();
    req.on('data', data => {
      data = (buff + data).split(/\n+/);
      const l = data.length - 1;

      let i = 0;
      for (; i < l; i++) {
        try {
          stream.emit('log', JSON.parse(data[i]));
        } catch (e) {
          stream.emit('error', e);
        }
      }

      buff = data[l];
    });
    req.on('error', err => stream.emit('error', err));

    return stream;
  }

  /**
   * Make a request to a winstond server or any http server which can
   * handle json-rpc.
   * @param {function} options - Options to sent the request.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   * @param {function} callback - Continuation to respond to when complete.
   */
  _request(options, auth, path, callback) {
    options = options || {};

    auth = auth || this.auth;
    path = path || this.path || '';

    if (this.batch) {
      this._doBatch(options, callback, auth, path);
    } else {
      this._doRequest(options, callback, auth, path);
    }
  }

  /**
   * Send or memorize the options according to batch configuration
   * @param {function} options - Options to sent the request.
   * @param {function} callback - Continuation to respond to when complete.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   */
  _doBatch(options, callback, auth, path) {
    this.batchOptions.push(options);
    if (this.batchOptions.length === 1) {
      // First message stored, it's time to start the timeout!
      const me = this;
      this.batchCallback = callback;
      this.batchTimeoutID = setTimeout(function () {
        // timeout is reached, send all messages to endpoint
        me.batchTimeoutID = -1;
        me._doBatchRequest(me.batchCallback, auth, path);
      }, this.batchInterval);
    }
    if (this.batchOptions.length === this.batchCount) {
      // max batch count is reached, send all messages to endpoint
      this._doBatchRequest(this.batchCallback, auth, path);
    }
  }

  /**
   * Initiate a request with the memorized batch options, stop the batch timeout
   * @param {function} callback - Continuation to respond to when complete.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   */
  _doBatchRequest(callback, auth, path) {
    if (this.batchTimeoutID > 0) {
      clearTimeout(this.batchTimeoutID);
      this.batchTimeoutID = -1;
    }
    const batchOptionsCopy = this.batchOptions.slice();
    this.batchOptions = [];
    this._doRequest(batchOptionsCopy, callback, auth, path);
  }

  /**
   * Make a request to a winstond server or any http server which can
   * handle json-rpc.
   * @param {function} options - Options to sent the request.
   * @param {function} callback - Continuation to respond to when complete.
   * @param {Object?} auth - authentication options
   * @param {string} path - request path
   */
  _doRequest(options, callback, auth, path) {
    // Prepare options for outgoing HTTP request
    const headers = Object.assign({}, this.headers);
    if (auth && auth.bearer) {
      headers.Authorization = `Bearer ${auth.bearer}`;
    }
    const req = (this.ssl ? https : http).request({
      ...this.options,
      method: 'POST',
      host: this.host,
      port: this.port,
      path: `/${path.replace(/^\//, '')}`,
      headers: headers,
      auth: (auth && auth.username && auth.password) ? (`${auth.username}:${auth.password}`) : '',
      agent: this.agent
    });

    req.on('error', callback);
    req.on('response', res => (
      res.on('end', () => callback(null, res)).resume()
    ));
    const jsonStringify = configure({
      ...(this.maximumDepth && { maximumDepth: this.maximumDepth })
    });
    req.end(Buffer.from(jsonStringify(options, this.options.replacer), 'utf8'));
  }
};



================================================
FILE: lib/winston/transports/index.d.ts
================================================
// Type definitions for winston 3.0
// Project: https://github.com/winstonjs/winston

/// <reference types="node" />

import { Agent } from 'http';

import * as Transport from 'winston-transport';

declare namespace winston {
  interface ConsoleTransportOptions extends Transport.TransportStreamOptions {
    consoleWarnLevels?: string[];
    stderrLevels?: string[];
    debugStdout?: boolean;
    eol?: string;
    forceConsole?: boolean;
  }

  interface ConsoleTransportInstance extends Transport {
    name: string;
    stderrLevels: string[];
    eol: string;

    new (options?: ConsoleTransportOptions): ConsoleTransportInstance;
  }

  interface FileTransportOptions extends Transport.TransportStreamOptions {
    filename?: string;
    dirname?: string;
    options?: object;
    maxsize?: number;
    stream?: NodeJS.WritableStream;
    rotationFormat?: Function;
    zippedArchive?: boolean;
    maxFiles?: number;
    eol?: string;
    tailable?: boolean;
    lazy?: boolean;
  }

  interface FileTransportInstance extends Transport {
    name: string;
    filename: string;
    dirname: string;
    options: object;
    maxsize: number | null;
    rotationFormat: Function | boolean;
    zippedArchive: boolean;
    maxFiles: number | null;
    eol: string;
    tailable: boolean;
    lazy: boolean;

    new (options?: FileTransportOptions): FileTransportInstance;
  }

  interface HttpTransportOptions extends Transport.TransportStreamOptions {
    ssl?: any;
    host?: string;
    port?: number;
    auth?: {
      username?: string | undefined;
      password?: string | undefined;
      bearer?: string | undefined;
    };
    path?: string;
    agent?: Agent;
    headers?: object;
    batch?: boolean;
    batchInterval?: number;
    batchCount?: number;
    replacer?: (key: string, value: any) => any;
    maximumDepth?: number;
  }

  interface HttpTransportInstance extends Transport {
    name: string;
    ssl: boolean;
    host: string;
    maximumDepth: number;
    port: number;
    auth?: {
      username?: string | undefined;
      password?: string | undefined;
      bearer?: string | undefined;
    };
    path: string;
    agent?: Agent | null;

    new (options?: HttpTransportOptions): HttpTransportInstance;
  }

  interface StreamTransportOptions extends Transport.TransportStreamOptions {
    stream: NodeJS.WritableStream;
    eol?: string;
  }

  interface StreamTransportInstance extends Transport {
    eol: string;

    new (options?: StreamTransportOptions): StreamTransportInstance;
  }

  interface Transports {
    FileTransportOptions: FileTransportOptions;
    File: FileTransportInstance;
    ConsoleTransportOptions: ConsoleTransportOptions;
    Console: ConsoleTransportInstance;
    HttpTransportOptions: HttpTransportOptions;
    Http: HttpTransportInstance;
    StreamTransportOptions: StreamTransportOptions;
    Stream: StreamTransportInstance;
  }
}

declare const winston: winston.Transports;
export = winston;



================================================
FILE: lib/winston/transports/index.js
================================================
/**
 * transports.js: Set of all transports Winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

/**
 * TODO: add property description.
 * @type {Console}
 */
Object.defineProperty(exports, 'Console', {
  configurable: true,
  enumerable: true,
  get() {
    return require('./console');
  }
});

/**
 * TODO: add property description.
 * @type {File}
 */
Object.defineProperty(exports, 'File', {
  configurable: true,
  enumerable: true,
  get() {
    return require('./file');
  }
});

/**
 * TODO: add property description.
 * @type {Http}
 */
Object.defineProperty(exports, 'Http', {
  configurable: true,
  enumerable: true,
  get() {
    return require('./http');
  }
});

/**
 * TODO: add property description.
 * @type {Stream}
 */
Object.defineProperty(exports, 'Stream', {
  configurable: true,
  enumerable: true,
  get() {
    return require('./stream');
  }
});



================================================
FILE: lib/winston/transports/stream.js
================================================
/**
 * stream.js: Transport for outputting to any arbitrary stream.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

const isStream = require('is-stream');
const { MESSAGE } = require('triple-beam');
const os = require('os');
const TransportStream = require('winston-transport');

/**
 * Transport for outputting to any arbitrary stream.
 * @type {Stream}
 * @extends {TransportStream}
 */
module.exports = class Stream extends TransportStream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    if (!options.stream || !isStream(options.stream)) {
      throw new Error('options.stream is required.');
    }

    // We need to listen for drain events when write() returns false. This can
    // make node mad at times.
    this._stream = options.stream;
    this._stream.setMaxListeners(Infinity);
    this.isObjectMode = options.stream._writableState.objectMode;
    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info));
    if (this.isObjectMode) {
      this._stream.write(info);
      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    }

    this._stream.write(`${info[MESSAGE]}${this.eol}`);
    if (callback) {
      callback(); // eslint-disable-line callback-return
    }
    return;
  }
};



================================================
FILE: test/globalSetup.js
================================================
const path = require('path');
const { rimraf } = require('rimraf');

function cleanTestArtifacts() {
  console.debug('\nCleaning test artifacts...');
  const testArtifacts = path.join(__dirname, 'fixtures', 'logs');
  rimraf.sync(path.join(testArtifacts, '*log*'), { glob: true });
}

module.exports = async () => {
  cleanTestArtifacts();
};



================================================
FILE: test/jest.config.integration.js
================================================
const baseConfig = require('../jest.config');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...baseConfig,
  rootDir: '../',
  testMatch: [
    '<rootDir>/test/integration/**/*.test.js'
  ]
};



================================================
FILE: test/jest.config.unit.js
================================================
const baseConfig = require('../jest.config');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...baseConfig,
  rootDir: '../',
  testMatch: [
    '<rootDir>/test/unit/**/*.test.js'
  ],
  collectCoverage: true
};



================================================
FILE: test/tsconfig.json
================================================
{
  "compilerOptions": {
    "module": "commonjs",
    "lib": [
      "es6"
    ],
    "target": "es6",
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
    "baseUrl": "./",
    "forceConsistentCasingInFileNames": true,
    "typeRoots": [
      "../node_modules",
      "../node_modules/@types"
    ],
    "types": [
      "node",
      "logform",
      "winston-transport"
    ],
    "noEmit": true
  },
  "files": [
    "typescript-definitions.ts"
  ]
}



================================================
FILE: test/typescript-definitions.ts
================================================
import * as winston from '../index';

let logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: 'info' }),
    ],
});

let err: Error = new Error('ttdt');
logger.error('The error was: ', err);
logger.log('info', 'hey dude', { foo: 'bar' });
logger.log({ level: 'info', message: 'hey dude', meta: { foo: 'bar' } });

// Default logger
winston.http('New incoming connection');
winston.error('The error was: ', err);

winston.exceptions.handle(new winston.transports.File({ filename: 'exceptions.log' }));

const loggerOptions: winston.LoggerOptions = {
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: 'info' }),
    ],
};

// assign the returned values to the logger variable,
// to make sure that the methods have 'Logger' declared as their return type
logger = winston.loggers.add('category', loggerOptions);
logger = winston.loggers.add('category');
logger = winston.loggers.get('category', loggerOptions);
logger = winston.loggers.get('category');

const hasLogger: boolean = winston.loggers.has('category');
winston.loggers.close('category');
winston.loggers.close();

let container: winston.Container = new winston.Container(loggerOptions);
logger = container.get('testLogger');

logger = container.loggers.get('testLogger')!;

container.close('testLogger');

const level = container.options.level;

container = new winston.Container();
logger = container.get('testLogger2');

logger.isLevelEnabled('debug');
logger.isErrorEnabled();
logger.isWarnEnabled();
logger.isInfoEnabled();
logger.isVerboseEnabled();
logger.isDebugEnabled();
logger.isSillyEnabled();



================================================
FILE: test/fixtures/.gitkeep
================================================
[Empty file]


================================================
FILE: test/fixtures/keys/agent2-cert.pem
================================================
-----BEGIN CERTIFICATE-----
MIIB7DCCAZYCCQC7gs0MDNn6MTANBgkqhkiG9w0BAQUFADB9MQswCQYDVQQGEwJV
UzELMAkGA1UECBMCQ0ExCzAJBgNVBAcTAlNGMQ8wDQYDVQQKEwZKb3llbnQxEDAO
BgNVBAsTB05vZGUuanMxDzANBgNVBAMTBmFnZW50MjEgMB4GCSqGSIb3DQEJARYR
cnlAdGlueWNsb3Vkcy5vcmcwHhcNMTEwMzE0MTgyOTEyWhcNMzgwNzI5MTgyOTEy
WjB9MQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExCzAJBgNVBAcTAlNGMQ8wDQYD
VQQKEwZKb3llbnQxEDAOBgNVBAsTB05vZGUuanMxDzANBgNVBAMTBmFnZW50MjEg
MB4GCSqGSIb3DQEJARYRcnlAdGlueWNsb3Vkcy5vcmcwXDANBgkqhkiG9w0BAQEF
AANLADBIAkEAyXb8FrRdKbhrKLgLSsn61i1C7w7fVVVd7OQsmV/7p9WB2lWFiDlC
WKGU9SiIz/A6wNZDUAuc2E+VwtpCT561AQIDAQABMA0GCSqGSIb3DQEBBQUAA0EA
C8HzpuNhFLCI3A5KkBS5zHAQax6TFUOhbpBCR0aTDbJ6F1liDTK1lmU/BjvPoj+9
1LHwrmh29rK8kBPEjmymCQ==
-----END CERTIFICATE-----



================================================
FILE: test/fixtures/keys/agent2-key.pem
================================================
-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAMl2/Ba0XSm4ayi4C0rJ+tYtQu8O31VVXezkLJlf+6fVgdpVhYg5
QlihlPUoiM/wOsDWQ1ALnNhPlcLaQk+etQECAwEAAQJBAMT6Bf34+UHKY1ObpsbH
9u2jsVblFq1rWvs8GPMY6oertzvwm3DpuSUp7PTgOB1nLTLYtCERbQ4ovtN8tn3p
OHUCIQDzIEGsoCr5vlxXvy2zJwu+fxYuhTZWMVuo1397L0VyhwIhANQh+yzqUgaf
WRtSB4T2W7ADtJI35ET61jKBty3CqJY3AiAIwju7dVW3A5WeD6Qc1SZGKZvp9yCb
AFI2BfVwwaY11wIgXF3PeGcvACMyMWsuSv7aPXHfliswAbkWuzcwA4TW01ECIGWa
cgsDvVFxmfM5NPSuT/UDTa6R5BFISB5ea0N0AR3I
-----END RSA PRIVATE KEY-----



================================================
FILE: test/fixtures/logs/.gitkeep
================================================
[Empty file]


================================================
FILE: test/helpers/handler-tests.js
================================================
const assume = require('assume');

const helpers = require('.');
const winston = require('../../lib/winston');

module.exports = function ({ helper, listener, name, setup, toggleSetting }) {
  describe('basics', function () {
    var handler;

    beforeEach(function () {
      handler = helpers[helper]();
    });

    it('has expected methods', function () {
      assume(handler.handle).is.a('function');
      assume(handler.unhandle).is.a('function');
      assume(handler.getAllInfo).is.a('function');
      assume(handler.getProcessInfo).is.a('function');
      assume(handler.getOsInfo).is.a('function');
      assume(handler.getTrace).is.a('function');
    });

    it(`new ${name}()`, function () {
      assume(function () {
        // eslint-disable-next-line no-new
        new winston[name]();
      }).throws(/Logger is required/);
    });

    it(`new ${name}(logger)`, function () {
      var logger = winston.createLogger();
      var handler_ = new winston[name](logger);
      assume(handler_.logger).equals(logger);
    });

    it('.getProcessInfo()', function () {
      helpers.assertProcessInfo(handler.getProcessInfo());
    });

    it('.getOsInfo()', function () {
      helpers.assertOsInfo(handler.getOsInfo());
    });

    it('.getTrace(new Error)', function () {
      helpers.assertTrace(handler.getTrace(new Error()));
    });

    it('.getTrace()', function () {
      helpers.assertTrace(handler.getTrace());
    });

    it('.getAllInfo(undefined)', function () {
      handler.getAllInfo();
    });
  });

  describe('when error case is triggered', function () {
    beforeEach(function () {
      this.listeners = helpers[setup]();
    });

    afterEach(function () {
      this.listeners.restore();
    });

    it('.handle()', function (done) {
      var msg = new Date().toString();
      var writeable = helpers.writeable(function (info) {
        assume(info).is.an('object');
        assume(info.error).is.an('error');
        assume(info.error.message).equals(msg);
        assume(info.message).includes(`${listener}: ${msg}`);
        assume(info.stack).is.a('string');
        assume(info.process).is.an('object');
        assume(info.os).is.an('object');
        assume(info.trace).is.an('array');

        done();
      });

      var transport = new winston.transports.Stream({ stream: writeable });
      var handler = helpers[helper]({
        exitOnError: false,
        transports: [transport]
      });

      assume(handler.catcher).is.a('undefined');

      transport[toggleSetting] = true;
      handler.handle();

      assume(handler.catcher).is.a('function');
      assume(process.listeners(listener)).deep.equals([
        handler.catcher
      ]);

      process.emit(listener, new Error(msg));
    });
  });
};



================================================
FILE: test/helpers/index.js
================================================
/*
 * helpers.js: Test helpers for winston
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume'),
    fs = require('fs'),
    through = require('through2'),
    spawn = require('child_process').spawn,
    stream = require('stream'),
    winston = require('../../lib/winston'),
    mockTransport = require('./mocks/mock-transport');

var helpers = exports;

/**
 * Returns a new winston.Logger instance which will invoke
 * the `write` method on each call to `.log`
 *
 * @param {function} write Write function for the specified stream
 * @returns {Logger} A winston.Logger instance
 */
helpers.createLogger = function (write, format) {
  return winston.createLogger({
    format,
    transports: [
      mockTransport.createMockTransport(write)
    ]
  });
};

/**
 * Returns a new writeable stream with the specified write function.
 * @param {function} write Write function for the specified stream
 * @returns {stream.Writeable} A writeable stream instance
 */
helpers.writeable = function (write, objectMode) {
  return new stream.Writable({
    objectMode: objectMode !== false,
    write: write
  });
};

/**
 * Creates a new ExceptionHandler instance with a new
 * winston.Logger instance with the specified options
 *
 * @param {Object} opts Options for the logger associated
 *                 with the ExceptionHandler
 * @returns {ExceptionHandler} A new ExceptionHandler instance
 */
helpers.exceptionHandler = function (opts) {
  var logger = winston.createLogger(opts);
  return new winston.ExceptionHandler(logger);
};

/**
 * Creates a new RejectionHandler instance with a new
 * winston.Logger instance with the specified options
 *
 * @param {Object} opts Options for the logger associated
 *                 with the RejectionHandler
 * @returns {RejectionHandler} A new ExceptionHandler instance
 */
helpers.rejectionHandler = function (opts) {
  var logger = winston.createLogger(opts);
  return new winston.RejectionHandler(logger);
};

/**
 * Removes all listeners to `process.on('uncaughtException')`
 * and returns an object that allows you to restore them later.
 *
 * @returns {Object} Facade to restore uncaughtException handlers.
 */
helpers.clearExceptions = function () {
  var listeners = process.listeners('uncaughtException');
  process.removeAllListeners('uncaughtException');

  return {
    restore: function () {
      process.removeAllListeners('uncaughtException');
      listeners.forEach(function (fn) {
        process.on('uncaughtException', fn);
      });
    }
  };
};

/**
 * Removes all listeners to `process.on('unhandledRejection')`
 * and returns an object that allows you to restore them later.
 *
 * @returns {Object} Facade to restore unhandledRejection handlers.
 */
helpers.clearRejections = function () {
  var listeners = process.listeners('unhandledRejection');
  process.removeAllListeners('unhandledRejection');

  return {
    restore: function () {
      process.removeAllListeners('unhandledRejection');
      listeners.forEach(function (fn) {
        process.on('unhandledRejection', fn);
      });
    }
  };
};


/**
 * Attempts to unlink the specifyed `filename` ignoring errors
 * @param {String} File Full path to attempt to unlink.
 */
helpers.tryUnlink = function (filename) {
  try {
    fs.unlinkSync(filename);
  } catch (ex) {}
};

/**
 * Returns a stream that will emit data for the `filename` if it exists
 * and is capable of being opened.
 * @param  {filename} Full path to attempt to read from.
 * @returns {Stream} Stream instance to the contents of the file
 */
helpers.tryRead = function tryRead(filename) {
  var proxy = through();
  (function inner() {
    var stream = fs
      .createReadStream(filename)
      .once('open', function () {
        stream.pipe(proxy);
      })
      .once('error', function (err) {
        if (err.code === 'ENOENT') {
          return setImmediate(inner);
        }
        proxy.emit('error', err);
      });
  }());

  return proxy;
};

/**
 * Assumes the process structure associated with an ExceptionHandler
 * for the `obj` provided.
 * @param  {Object} obj Ordinary object to assert against.
 */
helpers.assertProcessInfo = function (obj) {
  assume(obj.pid).is.a('number');
  // `process.gid` and `process.uid` do no exist on Windows.
  if (process.platform === 'win32') {
    assume(obj.uid).is.a('null');
    assume(obj.gid).is.a('null');
  } else {
    assume(obj.uid).is.a('number');
    assume(obj.gid).is.a('number');
  }
  assume(obj.cwd).is.a('string');
  assume(obj.execPath).is.a('string');
  assume(obj.version).is.a('string');
  assume(obj.argv).is.an('array');
  assume(obj.memoryUsage).is.an('object');
};

/**
 * Assumes the OS structure associated with an ExceptionHandler
 * for the `obj` provided.
 * @param  {Object} obj Ordinary object to assert against.
 */
helpers.assertOsInfo = function (obj) {
  assume(obj.loadavg).is.an('array');
  assume(obj.uptime).is.a('number');
};

/**
 * Assumes the trace structure associated with an ExceptionHandler
 * for the `trace` provided.
 * @param  {Object} trace Ordinary object to assert against.
 */
helpers.assertTrace = function (trace) {
  trace.forEach(function (site) {
    assume(!site.column || typeof site.column === 'number').true();
    assume(!site.line || typeof site.line === 'number').true();
    assume(!site.file || typeof site.file === 'string').true();
    assume(!site.method || typeof site.method === 'string').true();
    assume(!site.function || typeof site.function === 'string').true();
    assume(typeof site.native === 'boolean').true();
  });
};

/**
 * Assumes the `logger` provided is a `winston.Logger` at the specified `level`.
 * @param  {Logger} logger `winston` Logger to assert against
 * @param  {String} level Target level logger is expected at.
 */
helpers.assertLogger = function (logger, level) {
  assume(logger).instanceOf(winston.Logger);
  assume(logger.log).is.a('function');
  assume(logger.add).is.a('function');
  assume(logger.remove).is.a('function');
  assume(logger.level).equals(level || 'info');
  Object.keys(logger.levels).forEach(function (method) {
    assume(logger[method]).is.a('function');
  });
};




================================================
FILE: test/helpers/mocks/legacy-mixed-transport.js
================================================
'use strict'

const events = require('events');
const util = require('util')
const Transport = require('../../../').Transport;

//
// ### function LegacyMixed (options)
// #### @options {Object} Options for this instance.
// Constructor function for the LegacyMixed transport object responsible
// for persisting log messages and metadata to a memory array of messages
// and conforming to the old winston transport API, **BUT** INHERITS FROM
// THE MODERN WINSTON TRANSPORT.
//
module.exports = class LegacyMixed extends Transport {
  constructor(options = {}) {
    super(options);

    //
    // Expose the name of this Transport on the prototype
    //
    module.exports.prototype.name = 'legacy-mixed-test';

    this.silent = options.silent;
    this.output = { error: [], write: [] };
  }

  //
  // ### function log (level, msg, [meta], callback)
  // #### @level {string} Level at which to log the message.
  // #### @msg {string} Message to log
  // #### @meta {Object} **Optional** Additional metadata to attach
  // #### @callback {function} Continuation to respond to when complete.
  // Core logging method exposed to Winston. Metadata is optional.
  //
  log(level, msg, meta, callback) {
    if (this.silent) {
      return callback(null, true);
    }

    var output = 'I AM BACKWARDS COMPATIBLE WITH LEGACY';

    if (level === 'error' || level === 'debug') {
      this.errorOutput.push(output);
    } else {
      this.writeOutput.push(output);
    }

    this.emit('logged');
    callback(null, true);
  }
};



================================================
FILE: test/helpers/mocks/legacy-transport.js
================================================
'use strict'

const events = require('events');
const util = require('util')
const Transport = require('winston-compat').Transport;

//
// ### function Legacy (options)
// #### @options {Object} Options for this instance.
// Constructor function for the Legacy transport object responsible
// for persisting log messages and metadata to a memory array of messages
// and conforming to the old winston transport API.
//
const Legacy = module.exports = function Legacy(options) {
  options = options || {};
  Transport.call(this, options);

  this.silent = options.silent;
  this.output = { error: [], write: [] };
};

//
// Inherit from `winston.Transport`.
//
util.inherits(Legacy, Transport);

//
// Expose the name of this Transport on the prototype
//
Legacy.prototype.name = 'legacy-test';

//
// ### function log (level, msg, [meta], callback)
// #### @level {string} Level at which to log the message.
// #### @msg {string} Message to log
// #### @meta {Object} **Optional** Additional metadata to attach
// #### @callback {function} Continuation to respond to when complete.
// Core logging method exposed to Winston. Metadata is optional.
//
Legacy.prototype.log = function (level, msg, meta, callback) {
  if (this.silent) {
    return callback(null, true);
  }

  var output = 'I AM BACKWARDS COMPATIBLE WITH LEGACY';

  if (level === 'error' || level === 'debug') {
    this.errorOutput.push(output);
  } else {
    this.writeOutput.push(output);
  }

  this.emit('logged');
  callback(null, true);
};



================================================
FILE: test/helpers/mocks/mock-transport.js
================================================
const stream = require('stream')
const winston = require('../../../lib/winston');

/**
 * Returns a new Winston transport instance which will invoke
 * the `write` method on each call to `.log`
 *
 * @param {function} write Write function for the specified stream
 * @returns {StreamTransportInstance} A transport instance
 */
function createMockTransport(write) {
  const writeable = new stream.Writable({
    objectMode: true,
    write: write
  });

  return new winston.transports.Stream({ stream: writeable })
}

module.exports = {
  createMockTransport
};



================================================
FILE: test/helpers/scripts/colorize.js
================================================
/*
 * colorize.js: A test fixture for logging colorized messages
 *
 * (C) 2015 Tom Spencer
 * MIT LICENCE
 *
 */

var winston = require('../../../lib/winston');

var format = winston.format.combine(
  winston.format.colorize({ message: true }),
  winston.format.simple()
);

var logger = winston.createLogger({
  format: format,
  transports: [
    new winston.transports.Console()
  ]
});

logger.info('Simply a test');



================================================
FILE: test/helpers/scripts/default-rejections.js
================================================
/*
 * default-rejectionss.js: A test fixture for logging rejections with the default winston logger.
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENCE
 *
 */

var path = require("path"),
  winston = require("../../../lib/winston");
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

winston.rejections.handle([
  new winston.transports.File({
    filename: path.join(testLogFixturesPath, "default-rejection.log"),
    handleRejections: true
  })
]);

winston.info("Log something before error");

setTimeout(function() {
  Promise.reject(new Error("OH NOES! It rejected!"));
}, 1000);



================================================
FILE: test/helpers/scripts/exit-on-error.js
================================================
/*
 * default-exceptions.js: A test fixture for logging exceptions with the default winston logger.
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENCE
 *
 */

var path = require('path'),
    winston = require('../../../lib/winston');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

winston.exitOnError = function (err) {
  process.stdout.write(err.message);
  return err.message !== 'Ignore this error';
};

winston.handleExceptions([
  new winston.transports.File({
    filename: path.join(testLogFixturesPath, 'exit-on-error.log'),
    handleExceptions: true
  })
]);

setTimeout(function () {
  throw new Error('Ignore this error');
}, 100);



================================================
FILE: test/helpers/scripts/log-rejections.js
================================================
/*
 * log-rejections.js: A test fixture for logging rejections in winston.
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENCE
 *
 */

var path = require("path"),
  winston = require("../../../lib/winston");
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

var logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(testLogFixturesPath, "rejections.log"),
      handleRejections: true
    })
  ]
});

logger.rejections.handle();

setTimeout(function() {
  Promise.reject(new Error("OH NOES! It rejected!"));
}, 1000);



================================================
FILE: test/helpers/scripts/unhandle-exceptions.js
================================================
/*
 * unhandle-exceptions.js: A test fixture for using `.unhandleExceptions()` winston.
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENCE
 *
 */

var path = require('path'),
    winston = require('../../../lib/winston');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

var logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(testLogFixturesPath, 'unhandle-exception.log')
    })
  ]
});

logger.transports[0].transport.handleExceptions;

logger.exceptions.handle();
logger.exceptions.unhandle();

setTimeout(function () {
  throw new Error('OH NOES! It failed!');
}, 200);



================================================
FILE: test/helpers/scripts/unhandle-rejections.js
================================================
/*
 * unhandle-rejections.js: A test fixture for using `.unhandleRejections()` winston.
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENCE
 *
 */

var path = require('path'),
  winston = require('../../../lib/winston');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

var logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(testLogFixturesPath, 'unhandle-rejections.log')
    })
  ]
});

logger.transports[0].transport.handleRejections;

logger.rejections.handle();
logger.rejections.unhandle();

setTimeout(function () {
  Promise.reject(new Error('OH NOES! It rejected!'));
}, 200);



================================================
FILE: test/integration/formats.test.js
================================================
/*
 * formats.test.js: Integration tests for winston.format
 *
 * (C) 2015 Charlie Robbins
 * MIT LICENSE
 *
 */

var path = require('path'),
    assume = require('assume'),
    colors = require('@colors/colors/safe'),
    spawn = require('cross-spawn-async'),
    winston = require('../../lib/winston'),
    helpers = require('../helpers');

var targetScript = path.join(__dirname, '..', 'helpers', 'scripts', 'colorize.js');

/**
 * Spawns the colorizer helper process for checking
 * if colors work in a non-tty environment
 */
function spawnColorizer(callback) {
  var child = spawn(process.execPath, [targetScript], { stdio: 'pipe' });
  var data = '';

  child.stdout.setEncoding('utf8')
  child.stdout.on('data', function (str) { data += str; });
  child.on('close', function () {
    callback(null, data);
  });
};

describe('winston.format.colorize (Integration)', function () {
  it('non-TTY environment', function (done) {
    spawnColorizer(function (err, data) {
      assume(err).equals(null);
      assume(data).includes('\u001b[32mSimply a test\u001b[39m');
      done();
    })
  });
});



================================================
FILE: test/integration/logger.test.js
================================================
const assume = require('assume');
const winston = require('../../lib/winston');

const Logger = winston.Logger;

describe('Logger class', () => {
  it('that Logger class is exported', () => {
    Logger === require('../../lib/winston/logger');
  });

  it('can be inherited', () => {
    class CustomLogger extends Logger {}
    const instance = new CustomLogger();
    assume(instance).instanceOf(CustomLogger);
    assume(instance).instanceOf(Logger);
  });
});



================================================
FILE: test/unit/formats/errors.test.js
================================================
/*
 * errors.test.js: E2E Integration tests of `new Error()` handling
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

'use strict';

const assume = require('assume');
const { LEVEL, MESSAGE, SPLAT } = require('triple-beam');
const winston = require('../../../lib/winston');
const { format } = winston;
const helpers = require('../../helpers');

function assumeExpectedInfo(info, target = {}) {
  const expected = Object.assign({}, {
    level: 'info',
    message: 'Errors lack .toJSON() lulz'
  }, target);

  assume(info).is.an('object');
  assume(info).includes('level');
  assume(info).includes('message');

  assume(info.level).equals(expected.level);
  assume(info[LEVEL]).equals(expected.level);
  assume(info.message).equals(expected.message);
  assume(info[MESSAGE]).equals(expected.message);

  Object.keys(expected).forEach(key => {
    if (key === 'level' || key === 'message') return;
    assume(info[key]).equals(expected[key]);
  });
}

describe('format.errors (integration)', function () {
  it('logger.log(level, error)', (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info);
      done();
    }, format.errors());

    logger.log('info', new Error('Errors lack .toJSON() lulz'));
  });

  it('logger.log(level, error) [custom error properties]', (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        something: true,
        wut: 'another string'
      });

      done();
    }, format.errors());

    const err = new Error('Errors lack .toJSON() lulz');
    err.something = true;
    err.wut = 'another string';

    logger.log('info', err);
  });

  it('logger.log(level, error, meta)', (done) => {
    const meta = {
      thisIsMeta: true,
      anyValue: 'a string'
    };

    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, meta);
      done();
    }, format.errors());

    logger.log('info', new Error('Errors lack .toJSON() lulz'), meta);
  });

  it('logger.log(level, error, meta) [custom error properties]', (done) => {
    const meta = {
      thisIsMeta: true,
      anyValue: 'a string'
    };

    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, Object.assign({
        something: true,
        wut: 'another string'
      }, meta));

      done();
    }, format.errors());

    const err = new Error('Errors lack .toJSON() lulz');
    err.something = true;
    err.wut = 'another string';

    logger.log('info', err, meta);
  });

  it('logger.log(level, msg, meta<error>)', (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        message: 'Caught error: Errors lack .toJSON() lulz'
      });

      done();
    }, format.combine(
      format.errors(),
      format.printf(info => info.message)
    ));

    logger.log('info', 'Caught error:', new Error('Errors lack .toJSON() lulz'));
  });

  it('logger.log(level, msg, meta<error>) [custom error properties]', (done) => {
    const err = new Error('Errors lack .toJSON() lulz');
    err.something = true;
    err.wut = 'another string';

    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        message: 'Caught error: Errors lack .toJSON() lulz',
        stack: err.stack,
        something: true,
        wut: 'another string'
      });

      done();
    }, format.combine(
      format.errors(),
      format.printf(info => info.message)
    ));

    logger.log('info', 'Caught error:', err);
  });

  it('logger.<level>(error)', (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info);
      done();
    }, format.errors());

    logger.info(new Error('Errors lack .toJSON() lulz'));
  });

  it('logger.<level>(error) [custom error properties]', (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        something: true,
        wut: 'another string'
      });

      done();
    }, format.errors());

    const err = new Error('Errors lack .toJSON() lulz');
    err.something = true;
    err.wut = 'another string';

    logger.info(err);
  });

  it('logger.<level>(error, meta)', (done) => {
    const meta = {
      thisIsMeta: true,
      anyValue: 'a string'
    };

    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, meta);
      done();
    }, format.errors());

    logger.info(new Error('Errors lack .toJSON() lulz'), meta);
  });

  it('logger.<level>(error, meta) [custom error properties]', (done) => {
    const meta = {
      thisIsMeta: true,
      anyValue: 'a string'
    };

    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, Object.assign({
        something: true,
        wut: 'another string'
      }, meta));

      done();
    }, format.errors());

    const err = new Error('Errors lack .toJSON() lulz');
    err.something = true;
    err.wut = 'another string';

    logger.info(err, meta);
  });

  it('logger.<level>(msg, meta<error>)', (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        message: 'Caught error: Errors lack .toJSON() lulz'
      });

      done();
    }, format.combine(
      format.errors(),
      format.printf(info => info.message)
    ));

    logger.info('Caught error:', new Error('Errors lack .toJSON() lulz'));
  });

  it('logger.<level>(msg, meta<error>) [custom error properties]', (done) => {
    const err = new Error('Errors lack .toJSON() lulz');
    err.something = true;
    err.wut = 'another string';

    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        message: 'Caught error: Errors lack .toJSON() lulz',
        stack: err.stack,
        something: true,
        wut: 'another string'
      });

      done();
    }, format.combine(
      format.errors(),
      format.printf(info => info.message)
    ));

    logger.info('Caught error:', err);
  });

  it(`Promise.reject().catch(logger.<level>)`, (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, { level: 'error' });
      done();
    }, format.errors());

    new Promise((done, reject) => {
      throw new Error('Errors lack .toJSON() lulz')
    }).catch(logger.error.bind(logger));
  });

  it(`Promise.reject().catch(logger.<level>) [custom error properties]`, (done) => {
    const logger = helpers.createLogger(function (info) {
      assumeExpectedInfo(info, {
        level: 'error',
        something: true,
        wut: 'a string'
      });

      done();
    }, format.errors());

    new Promise((done, reject) => {
      const err = new Error('Errors lack .toJSON() lulz');
      err.something = true;
      err.wut = 'a string';

      throw err;
    }).catch(logger.error.bind(logger));
  });
});



================================================
FILE: test/unit/winston/container.test.js
================================================
/*
 * container-test.js: Tests for the Container object
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const winston = require('../../../lib/winston');

describe('Container', function () {
  describe('no transports', function () {
    var container = new winston.Container();
    var defaultTest;

    it('.add(default-test)', function () {
      defaultTest = container.add('default-test');
      assume(defaultTest.log).is.a('function');
    });

    it('.get(default-test)', function () {
      assume(container.get('default-test')).equals(defaultTest);
    });

    it('.has(default-test)', function () {
      assume(container.has('default-test')).true();
    });

    it('.has(not-has)', function () {
      assume(container.has('not-has')).false();
    });

    it('.close(default-test)', function () {
      container.close('default-test');
      assume(container.loggers.has('default-test')).falsy();
    });

    it('.close(non-existent)', function () {
      container.close('non-existent');
      assume(container.loggers.has('non-existent')).falsy();
    });

    it('.close()', function () {
      container.close();
      assume(container.loggers.has()).falsy();
    });
  });

  describe('explicit transports', function () {
    var transports = [new winston.transports.Http({ port: 9412 })];
    var container = new winston.Container({ transports: transports });
    var all = {};

    it('.get(some-logger)', function () {
      all.someLogger = container.get('some-logger');
      assume(all.someLogger._readableState.pipes).instanceOf(winston.transports.Http);
      assume(all.someLogger._readableState.pipes).equals(transports[0]);
    });

    it('.get(some-other-logger)', function () {
      all.someOtherLogger = container.get('some-other-logger');

      assume(all.someOtherLogger._readableState.pipes).instanceOf(winston.transports.Http);
      assume(all.someOtherLogger._readableState.pipes).equals(transports[0]);
      assume(all.someOtherLogger._readableState.pipes).equals(all.someLogger._readableState.pipes);
    });
  });

  describe('explicit non-array transport', function () {
    var transport = new winston.transports.Http({ port: 9412 });
    var container = new winston.Container({ transports: transport });
    var all = {};

    it('.get(some-logger)', function () {
      all.someLogger = container.get('some-logger');
      assume(all.someLogger._readableState.pipes).instanceOf(winston.transports.Http);
      assume(all.someLogger._readableState.pipes).equals(transport);
    });

    it('.get(some-other-logger)', function () {
      all.someOtherLogger = container.get('some-other-logger');

      assume(all.someOtherLogger._readableState.pipes).instanceOf(winston.transports.Http);
      assume(all.someOtherLogger._readableState.pipes).equals(transport);
      assume(all.someOtherLogger._readableState.pipes).equals(all.someLogger._readableState.pipes);
    });
  });
});



================================================
FILE: test/unit/winston/create-logger.test.js
================================================
const winston = require("../../../lib/winston");
const assume = require("assume");
const isStream = require("is-stream");
const {format} = require("../../../lib/winston");
const TransportStream = require("winston-transport");

describe('Create Logger', function () {
    it('should build a logger with default values', function () {
        let logger = winston.createLogger();
        assume(logger).is.an('object');
        assume(isStream(logger.format));
        assume(logger.level).equals('info');
        assume(logger.exitOnError).equals(true);
    });

    it('new Logger({ silent: true })', function (done) {
        const neverLogTo = new TransportStream({
            log: function (info) {
                assume(false).true('TransportStream was improperly written to');
            }
        });

        var logger = winston.createLogger({
            transports: [neverLogTo],
            silent: true
        });

        logger.log({
            level: 'info',
            message: 'This should be ignored'
        });

        setImmediate(() => done());
    });

    it('new Logger({ parameters })', function () {
        let myFormat = format(function (info, opts) {
            return info;
        })();

        let logger = winston.createLogger({
            format: myFormat,
            level: 'error',
            exitOnError: false,
            transports: []
        });

        assume(logger.format).equals(myFormat);
        assume(logger.level).equals('error');
        assume(logger.exitOnError).equals(false);
        assume(logger._readableState.pipesCount).equals(0);
    });

    it('new Logger({ levels }) defines custom methods', function () {
        let myFormat = format(function (info, opts) {
            return info;
        })();

        let logger = winston.createLogger({
            levels: winston.config.syslog.levels,
            format: myFormat,
            level: 'error',
            exitOnError: false,
            transports: []
        });

        Object.keys(winston.config.syslog.levels).forEach(level => {
            assume(logger[level]).is.a('function');
        })
    });

    it('new Logger({ levels }) custom methods are not bound to instance', function (done) {
        let logger = winston.createLogger({
            level: 'error',
            exitOnError: false,
            transports: []
        });

        let logs = [];
        let extendedLogger = Object.create(logger, {
            write: {
                value: function (...args) {
                    logs.push(args);
                    if (logs.length === 4) {
                        assume(logs.length).is.eql(4);
                        assume(logs[0]).is.eql([{test: 1, level: 'info'}]);
                        assume(logs[1]).is.eql([{test: 2, level: 'warn'}]);
                        assume(logs[2]).is.eql([{message: 'test3', level: 'info'}])
                        assume(logs[3]).is.eql([{
                            with: 'meta',
                            test: 4,
                            level: 'warn',
                            message: 'a warning'
                        }]);

                        done();
                    }
                }
            }
        });

        extendedLogger.log('info', {test: 1});
        extendedLogger.log('warn', {test: 2});
        extendedLogger.info('test3');
        extendedLogger.warn('a warning', {with: 'meta', test: 4});
    });
});



================================================
FILE: test/unit/winston/exception-handler.test.js
================================================
/*
 * exception-test.js: Tests for exception data gathering in winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const baseHandlerTests = require('../../helpers/handler-tests');

describe('ExceptionHandler', function () {
  jest.setTimeout(100);

  baseHandlerTests({
    name: 'ExceptionHandler',
    helper: 'exceptionHandler',
    setup: 'clearExceptions',
    listener: 'uncaughtException',
    toggleSetting: 'handleExceptions'
  });
});



================================================
FILE: test/unit/winston/exception-stream.test.js
================================================
/*
 * exception-test.js: Tests for exception data gathering in winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const { Writable } = require('readable-stream');
const path = require('path');
const winston = require('../../../lib/winston');
const ExceptionStream = require('../../../lib/winston/exception-stream');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

async function writeToStreamAsync(stream, payload) {
  return new Promise((resolve, reject) => {
    stream._write(payload, 'utf8', (err) => {
      return err ? reject(err) : resolve();
    });
  });
}

describe('ExceptionStream', function () {
  it('has expected methods', function () {
    var filename = path.join(testLogFixturesPath, 'exception-stream.log');
    var transport = new winston.transports.File({ filename });
    var instance = new ExceptionStream(transport);

    assume(instance.handleExceptions).is.true();
    assume(instance.transport).equals(transport);
    assume(instance._write).is.a('function');
    assume(instance).instanceof(ExceptionStream);
    assume(instance).inherits(Writable);
  });

  it('throws without a transport', function () {
    const invalidInstantation = () => new ExceptionStream();

    assume(invalidInstantation).throws('ExceptionStream requires a TransportStream instance.');
  });

  describe('_write method', function () {
    let exceptionStream;
    let fakeTransport;
    let transportLogCalls;
    beforeEach(function () {
      transportLogCalls = [];
      fakeTransport = {
        log: (info, callback) => {
          transportLogCalls.push(info);
          return setImmediate(callback);
        }
      };
      exceptionStream = new ExceptionStream(fakeTransport);
    });

    it('should write to the transport when the exception property is false', async function () {
      const info = {
        level: 'error',
        message: 'Test exception message',
        exception: true,
        timestamp: new Date().toISOString()
      };

      await writeToStreamAsync(exceptionStream, info);

      assume(transportLogCalls).to.be.length(1);
    });

    // eslint-disable-next-line no-undefined
    const falsyValues = [false, null, undefined, 0, '', NaN];
    it.each(falsyValues)(
      'should not write to transport when the exception property is a falsy value of: "%s"',
      async function (falsyValue) {
        const info = {
          level: 'error',
          exception: falsyValue,
          message: 'Regular log message',
          timestamp: new Date().toISOString()
        };

        await writeToStreamAsync(exceptionStream, info);

        assume(transportLogCalls).to.be.length(0);
      }
    );
  });
});



================================================
FILE: test/unit/winston/log-exception.test.js
================================================
/*
 * log-exception.test.js: Tests for exception data gathering in winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const fs = require('fs');
const fsPromise = require('node:fs/promises');
const path = require('path');
const { spawn } = require('child_process');
const winston = require('../../../lib/winston');
const helpers = require('../../helpers');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');
const testHelperScriptsPath = path.join(__dirname, '..', '..', 'helpers', 'scripts');

describe('Logger, ExceptionHandler', function () {
  jest.setTimeout(5000);

  describe('.exceptions.unhandle()', function () {
    it('does not log to any transports', function (done) {
      var logFile = path.join(testLogFixturesPath, 'unhandle-exception.log');

      helpers.tryUnlink(logFile);

      spawn('node', [path.join(testHelperScriptsPath, 'unhandle-exceptions.js')])
        .on('exit', function () {
          fs.exists(logFile, function (exists) {
            assume(exists).false();
            done();
          });
        });
    });

    it('handlers immutable', function () {
      var logger = winston.createLogger({
        exceptionHandlers: [
          new winston.transports.Console(),
          new winston.transports.File({ filename: path.join(testLogFixturesPath, 'filelog.log') })
        ]
      });

      assume(logger.exceptions.handlers.size).equals(2);
      assume(process.listeners('uncaughtException').length).equals(1);
      logger.exceptions.unhandle();
      assume(logger.exceptions.handlers.size).equals(2);
      assume(process.listeners('uncaughtException').length).equals(0);
    });
  });

  it('Custom exitOnError function does not exit', function (done) {
    const child = spawn('node', [path.join(testHelperScriptsPath, 'exit-on-error.js')]);
    const stdout = [];

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (line) {
      stdout.push(line);
    });

    setTimeout(function () {
      assume(child.killed).false();
      assume(stdout).deep.equals(['Ignore this error']);
      child.kill();
      done();
    }, 1000);
  });

  describe('Exception Handler', function () {
    let filePath;
    let processExitSpy;

    beforeEach(function () {
      filePath = path.join(testLogFixturesPath, 'unhandled-exception.log');
      processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
    });

    afterEach(async () => {
      helpers.tryUnlink(filePath);
      jest.resetAllMocks();
    });

    describe('should save the error information to the specified file', function () {
      describe ('with a Custom Logger instance', function () {
        let logger;
        beforeEach(function () {
          filePath = path.join(testLogFixturesPath, 'unhandled-exception.log');
          processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
          logger = winston.createLogger({
            transports: [
              new winston.transports.File({
                filename: filePath,
                handleExceptions: true
              })
            ]
          });
          logger.exceptions.handle();
        });

        it('when strings are thrown as errors', async () => {
          const expectedMessage = 'OMG NEVER DO THIS STRING EXCEPTIONS ARE AWFUL';

          process.emit('uncaughtException', expectedMessage);
          await new Promise(resolve => setTimeout(resolve, 500));

          expect(processExitSpy).toHaveBeenCalledTimes(1);
          expect(processExitSpy).toHaveBeenCalledWith(1);

          // Read the log file and verify its contents
          const contents = await fsPromise.readFile(filePath, { encoding: 'utf8' });
          const data = JSON.parse(contents);

          // Assert on the log data
          assume(data).is.an('object');
          helpers.assertProcessInfo(data.process);
          helpers.assertOsInfo(data.os);
          helpers.assertTrace(data.trace);
          assume(data.message).includes('uncaughtException: ' + expectedMessage);
        });

        it('with a custom winston.Logger instance', async () => {
          const expectedMessage = 'OMG NEVER DO THIS STRING EXCEPTIONS ARE AWFUL';

          process.emit('uncaughtException', expectedMessage);
          await new Promise(resolve => setTimeout(resolve, 500));

          expect(processExitSpy).toHaveBeenCalledTimes(1);
          expect(processExitSpy).toHaveBeenCalledWith(1);

          // Read the log file and verify its contents
          const contents = await fsPromise.readFile(filePath, { encoding: 'utf8' });
          const data = JSON.parse(contents);

          // Assert on the log data
          assume(data).is.an('object');
          helpers.assertProcessInfo(data.process);
          helpers.assertOsInfo(data.os);
          helpers.assertTrace(data.trace);
          assume(data.message).includes('uncaughtException: ' + expectedMessage);
        });
      });

      it('with the default winston logger', async () => {
        const expectedMessage = 'OMG NEVER DO THIS STRING EXCEPTIONS ARE AWFUL';
        winston.exceptions.handle([
          new winston.transports.File({
            filename: filePath,
            handleExceptions: true
          })
        ]);

        process.emit('uncaughtException', expectedMessage);
        await new Promise(resolve => setTimeout(resolve, 500));

        expect(processExitSpy).toHaveBeenCalledTimes(1);
        expect(processExitSpy).toHaveBeenCalledWith(1);

        // Read the log file and verify its contents
        const contents = await fsPromise.readFile(filePath, { encoding: 'utf8' });
        const data = JSON.parse(contents);

        // Assert on the log data
        assume(data).is.an('object');
        helpers.assertProcessInfo(data.process);
        helpers.assertOsInfo(data.os);
        helpers.assertTrace(data.trace);
        assume(data.message).includes('uncaughtException: ' + expectedMessage);
      });
    });
  });
});



================================================
FILE: test/unit/winston/logger-legacy.test.js
================================================
/*
 * logger-legacy.test.js: Tests for Legacy APIs of winston < 3.0.0
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

'use strict';

const assume = require('assume');
const winston = require('../../../lib/winston');
const LegacyTransport = require('../../helpers/mocks/legacy-transport');
const LegacyMixedTransport = require('../../helpers/mocks/legacy-mixed-transport');

describe('Deprecated APIs', function () {
  describe('Instantiation Options', function () {
    const deprecatedOptionTestCases = [
      { colors: true },
      { emitErrs: true },
      { formatters: [] },
      { padLevels: true },
      { rewriters: [] },
      { stripColors: true }
    ];

    it.each(deprecatedOptionTestCases)('should throw when instantiating with deprecated option of %s', function (option) {
      const invalidInstantiation = () => winston.createLogger(option);

      assume(invalidInstantiation).throws(/Use a custom/);
    });
  });

  describe('Instance methods', function () {
    const deprecatedMethodTestCases = ['cli'];

    it.each(deprecatedMethodTestCases)(
      'should throw when invoking deprecated %s() instance method', function (deprecatedMethod) {
        const logger = winston.createLogger();

        assume(logger[deprecatedMethod]).throws(/Use a custom/);
      });
  });


  describe('Transports', () => {
    const legacyTransportTestCases = [
      {
        scenario: 'Transport inheriting from winston@2',
        transport: LegacyTransport
      },
      {
        scenario: 'Transport inheriting from winston@3 but conforming to winston@2 API',
        transport: LegacyMixedTransport
      }
    ];

    describe.each(legacyTransportTestCases)('$scenario', ({ transport: TransportClass }) => {
      let consoleErrorSpy;
      let logger;
      const expectedDeprecationMessage = `${new TransportClass().name} is a legacy winston transport. Consider upgrading`;
      const getCallsToConsoleError = () => consoleErrorSpy.mock.calls.length;
      const getFlatConsoleErrorOutput = () => consoleErrorSpy.mock.calls.flat().join('');

      beforeEach(() => {
        consoleErrorSpy = jest.spyOn(console, 'error');
      });

      afterEach(() => {
        jest.resetAllMocks();
      });

      it(`.add() is successful but logs deprecation notice`, function () {
        const expectedTransport = new TransportClass();
        logger = winston.createLogger();

        logger.add(expectedTransport);

        assume(logger._readableState.pipesCount).equals(1);
        assume(getCallsToConsoleError()).equals(1);
        assume(getFlatConsoleErrorOutput()).to.include(expectedDeprecationMessage);
      });

      it(`.add() multiple transports is successful but logs deprecation notice`, function () {
        logger = winston.createLogger();

        logger.add(new TransportClass());
        logger.add(new TransportClass());
        logger.add(new TransportClass());


        assume(logger._readableState.pipesCount).equals(3);
        assume(getCallsToConsoleError()).equals(3);
        assume(getFlatConsoleErrorOutput()).to.include(expectedDeprecationMessage);
      });

      it('.remove() is successful', function () {
        const consoleTransport = new winston.transports.Console();
        const legacyTransport = new TransportClass();

        logger = winston.createLogger();
        logger.add(consoleTransport);
        logger.add(legacyTransport);

        assume(logger.transports.length).equals(2);
        logger.remove(legacyTransport);
        assume(logger.transports.length).equals(1);
        assume(logger.transports[0]).equals(consoleTransport);
      });
    });
  });
});



================================================
FILE: test/unit/winston/logger.test.js
================================================
/*
 * logger.test.js: Tests for instances of the winston Logger
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

'use strict';

const assume = require('assume');
const path = require('path');
const { EOL } = require('os');
const isStream = require('is-stream');
const stdMocks = require('std-mocks');
const { MESSAGE, SPLAT } = require('triple-beam');
const winston = require('../../../lib/winston');
const TransportStream = require('winston-transport');
const format = require('../../../lib/winston').format;
const helpers = require('../../helpers');
const mockTransport = require('../../helpers/mocks/mock-transport');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

describe('Logger Instance', function () {
  describe('Configuration', function () {
    it('.configure()', function () {
      let logger = winston.createLogger({
        transports: [new winston.transports.Console()]
      });

      assume(logger.transports.length).equals(1);
      assume(logger.transports[0].name).equals('console');

      logger.configure();

      assume(logger.transports.length).equals(0);
    });

    it('.configure({ transports })', function () {
      let logger = winston.createLogger();

      assume(logger.transports.length).equals(0);

      logger.configure({
        transports: [new winston.transports.Console()]
      });

      assume(logger.transports.length).equals(1);
      assume(logger.transports[0].name).equals('console');
    });

    it('.configure({ transports, format })', function () {
      let logger = winston.createLogger(),
          format = logger.format;

      assume(logger.transports.length).equals(0);

      logger.configure({
        transports: [new winston.transports.Console()],
        format: winston.format.json()
      });

      assume(logger.transports.length).equals(1);
      assume(logger.transports[0].name).equals('console');
      assume(logger.format).not.equals(format);
    });
  });

  describe('Get Highest Log Level', function () {
    it('should return the highest log level', function () {
      let logger = winston.createLogger();

      const highestLogLevel = logger.getHighestLogLevel();

      assume(highestLogLevel).equals(2);
    });
  });

  describe('Is Log Level Enabled', function () {
    const defaultLevelTestCases = [
      'error',
      'warn',
      'info',
      'http',
      'verbose',
      'debug',
      'silly'
    ];

    it.each(defaultLevelTestCases)('should indicate "%s" level is enabled if logger is constructed with that level', function (level) {
      let logger = winston.createLogger({level});

      const isLevelEnabled = logger.isLevelEnabled(level);

      assume(isLevelEnabled).to.be.true();
    });

    it('should only enable levels "info" and above by default', function () {
      let logger = winston.createLogger();

      const isHttpEnabled = logger.isLevelEnabled('http');
      const isInfoEnabled = logger.isLevelEnabled('info');
      const isWarnEnabled = logger.isLevelEnabled('warn');
      const isErrorEnabled = logger.isLevelEnabled('error');

      assume(isHttpEnabled).to.be.false();
      assume(isInfoEnabled).to.be.true();
      assume(isWarnEnabled).to.be.true();
      assume(isErrorEnabled).to.be.true();
    });

    const invalidLevelTestCases = [
      null,
      undefined
    ];
    it.each(invalidLevelTestCases)('should indicate "%s" level is not enabled', function (level) {
      let logger = winston.createLogger();

      const isLevelEnabled = logger.isLevelEnabled(level);

      assume(isLevelEnabled).to.be.false();
    });

    it('should indicate all levels are disabled if configured with a level of null', function () {
      const logger = winston.createLogger({ level: null });

      const levelEnabledResults = [];
      levelEnabledResults.push(logger.isLevelEnabled('silly'));
      levelEnabledResults.push(logger.isLevelEnabled('debug'));
      levelEnabledResults.push(logger.isLevelEnabled('verbose'));
      levelEnabledResults.push(logger.isLevelEnabled('http'));
      levelEnabledResults.push(logger.isLevelEnabled('info'));
      levelEnabledResults.push(logger.isLevelEnabled('warn'));
      levelEnabledResults.push(logger.isLevelEnabled('error'));

      const isEveryLevelDisabled = levelEnabledResults.every(result => result === false);
      assume(isEveryLevelDisabled).to.be.true();
    });
  });

  describe('Transports', function() {
    describe('add', function () {
      it('should throw error when adding an invalid transport', function () {
        let logger = winston.createLogger();
        assume(function () {
          logger.add(5);
        }).throws(/invalid transport/i);
      });

      it('should add the expected transport', function (done) {
        let logger = winston.createLogger();
        let expected = {message: 'foo', level: 'info'};
        let transport = new TransportStream({
          log: function (info) {
            assume(info.message).equals('foo');
            assume(info.level).equals('info');
            assume(JSON.parse(info[MESSAGE])).deep.equals({level: 'info', message: 'foo'});
            done();
          }
        });

        logger.add(transport);
        logger.log(expected);
      });

      it('should allow adding multiple transports', function () {
        let transports = [
          new winston.transports.File({
            name: 'filelog-info.log',
            filename: path.join(testLogFixturesPath, 'filelog-info.log'),
            level: 'info'
          }),
          new winston.transports.File({
            name: 'filelog-error.log',
            filename: path.join(testLogFixturesPath, 'filelog-error.log'),
            level: 'error'
          })
        ];
        let logger = winston.createLogger({
          transports: transports
        });

        assume(logger.transports.length).equals(2);
        assume(logger.transports.map(function (wrap) {
          return wrap.transport || wrap;
        })).deep.equals(transports);
      });
    });

    describe('remove', function () {
      it('should do nothing if transport was not added', function () {
        let transports = [
          new winston.transports.Console(),
          new winston.transports.File({filename: path.join(testLogFixturesPath, 'filelog.log')})
        ];

        let logger = winston.createLogger({transports: transports})
            .remove(new winston.transports.Console());

        assume(logger.transports.length).equals(2);
        assume(logger.transports.map(function (wrap) {
          // Unwrap LegacyTransportStream instances
          return wrap.transport || wrap;
        })).deep.equals(transports);
      });

      it('should remove transport when matching one is found', function () {
        let transports = [
          new winston.transports.Console(),
          new winston.transports.File({filename: path.join(testLogFixturesPath, 'filelog.log')})
        ];

        let logger = winston.createLogger({transports: transports});

        assume(logger.transports.length).equals(2);
        logger.remove(transports[0]);
        assume(logger.transports.length).equals(1);
        assume(logger.transports[0]).equals(transports[1]);
      });

      it('should remove specified logger even when duplicate exists', function () {
        let transports = [
          new winston.transports.File({
            name: 'filelog-info.log',
            filename: path.join(testLogFixturesPath, 'filelog-info.log'),
            level: 'info'
          }),
          new winston.transports.File({
            name: 'filelog-error.log',
            filename: path.join(testLogFixturesPath, 'filelog-error.log'),
            level: 'error'
          })
        ];
        let logger = winston.createLogger({
          transports: transports
        });

        logger.remove(transports[0]);
        assume(logger.transports.length).equals(1);
        assume(logger.transports[0]).equals(transports[1]);
      });
    });

    describe('clear', function () {
      it('should do nothing when no transports exist', function () {
        let logger = winston.createLogger();
        assume(logger.transports.length).equals(0);
        logger.clear();
        assume(logger.transports.length).equals(0);
      });

      it('should remove all transports', function () {
        let logger = winston.createLogger({
          transports: [new winston.transports.Console()]
        });

        assume(logger.transports.length).equals(1);
        logger.clear();
        assume(logger.transports.length).equals(0);
      });
    });

    describe('stream', function () {
      it('should return a log stream for all transports', function () {
        let logger = winston.createLogger();
        let outStream = logger.stream();

        assume(isStream(outStream)).true();
      });
    });
  });

  describe('Log Levels', function () {
    it('report unknown levels', function () {
      const consoleErrorSpy = jest.spyOn(console, 'error');
      let logger = winston.createLogger();

      logger.log({ message: 'foo', level: 'bar' });

      assume(consoleErrorSpy.mock.calls[0]).deep.equals(['[winston] Unknown logger level: %s', 'bar']);
    });

    it('.<level>()', function (done) {
      let logger = helpers.createLogger(function (info) {
        assume(info).is.an('object');
        assume(info.level).equals('info');
        assume(info.message).is.a('string');
        assume(info[MESSAGE]).is.a('string');
        assume(info.message).equals('');
        assume(JSON.parse(info[MESSAGE])).deep.equals({
          level: 'info',
          message: ''
        });

        done();
      });

      logger.info();
      logger.info('');
    });

    it('default levels', function (done) {
      let logger = winston.createLogger();
      let expected = {message: 'foo', level: 'debug'};

      function logLevelTransport(level) {
        return new TransportStream({
          level: level,
          log: function (obj) {
            if (level === 'info') {
              assume(obj).equals(undefined, 'Transport on level info should never be called');
            }

            assume(obj.message).equals('foo');
            assume(obj.level).equals('debug');
            assume(JSON.parse(obj[MESSAGE])).deep.equals({level: 'debug', message: 'foo'});
            done();
          }
        });
      }

      assume(logger.info).is.a('function');
      assume(logger.debug).is.a('function');

      logger
          .add(logLevelTransport('info'))
          .add(logLevelTransport('debug'))
          .log(expected);
    });

    it('custom levels', function (done) {
      let logger = winston.createLogger({
        levels: {
          bad: 0,
          test: 1,
          ok: 2
        }
      });

      let expected = {message: 'foo', level: 'test'};

      function filterLevelTransport(level) {
        return new TransportStream({
          level: level,
          log: function (obj) {
            if (level === 'bad') {
              assume(obj).equals(undefined, 'transport on level "bad" should never be called');
            }

            assume(obj.message).equals('foo');
            assume(obj.level).equals('test');
            assume(JSON.parse(obj[MESSAGE])).deep.equals({level: 'test', message: 'foo'});
            done();
          }
        });
      }

      assume(logger.bad).is.a('function');
      assume(logger.test).is.a('function');
      assume(logger.ok).is.a('function');

      logger
          .add(filterLevelTransport('bad'))
          .add(filterLevelTransport('ok'))
          .log(expected);
    });

    it('sets transports levels', done => {
      let logger;
      const transport = new TransportStream({
        log(obj) {
          if (obj.level === 'info') {
            assume(obj).equals(undefined, 'Transport on level info should never be called');
          }

          assume(obj.message).equals('foo');
          assume(obj.level).equals('error');
          assume(JSON.parse(obj[MESSAGE])).deep.equals({level: 'error', message: 'foo'});
          done();
        }
      });

      // Begin our test in the next tick after the pipe event is
      // emitted from the transport.
      transport.once('pipe', () => setImmediate(() => {
        const expectedError = {message: 'foo', level: 'error'};
        const expectedInfo = {message: 'bar', level: 'info'};

        assume(logger.error).is.a('function');
        assume(logger.info).is.a('function');

        // Set the level
        logger.level = 'error';

        // Log the messages. "info" should never arrive.
        logger
            .log(expectedInfo)
            .log(expectedError);
      }));

      logger = winston.createLogger({
        transports: [transport]
      });
    });

    describe('Log Levels Enabled', function () {
      it('default levels', function () {
        let logger = winston.createLogger({
          level: 'verbose',
          levels: winston.config.npm.levels,
          transports: [new winston.transports.Console()]
        });

        assume(logger.getHighestLogLevel).is.a('function');
        assume(logger.getHighestLogLevel()).equals(4);

        assume(logger.isLevelEnabled).is.a('function');

        assume(logger.isErrorEnabled).is.a('function');
        assume(logger.isWarnEnabled).is.a('function');
        assume(logger.isInfoEnabled).is.a('function');
        assume(logger.isVerboseEnabled).is.a('function');
        assume(logger.isDebugEnabled).is.a('function');
        assume(logger.isSillyEnabled).is.a('function');

        assume(logger.isLevelEnabled('error')).true();
        assume(logger.isLevelEnabled('warn')).true();
        assume(logger.isLevelEnabled('info')).true();
        assume(logger.isLevelEnabled('verbose')).true();
        assume(logger.isLevelEnabled('debug')).false();
        assume(logger.isLevelEnabled('silly')).false();

        assume(logger.isErrorEnabled()).true();
        assume(logger.isWarnEnabled()).true();
        assume(logger.isInfoEnabled()).true();
        assume(logger.isVerboseEnabled()).true();
        assume(logger.isDebugEnabled()).false();
        assume(logger.isSillyEnabled()).false();
      });

      it('default levels, transport override', function () {
        let transport = new winston.transports.Console();
        transport.level = 'debug';

        let logger = winston.createLogger({
          level: 'info',
          levels: winston.config.npm.levels,
          transports: [transport]
        });

        assume(logger.getHighestLogLevel).is.a('function');
        assume(logger.getHighestLogLevel()).equals(5);

        assume(logger.isLevelEnabled).is.a('function');

        assume(logger.isErrorEnabled).is.a('function');
        assume(logger.isWarnEnabled).is.a('function');
        assume(logger.isInfoEnabled).is.a('function');
        assume(logger.isVerboseEnabled).is.a('function');
        assume(logger.isDebugEnabled).is.a('function');
        assume(logger.isSillyEnabled).is.a('function');

        assume(logger.isLevelEnabled('error')).true();
        assume(logger.isLevelEnabled('warn')).true();
        assume(logger.isLevelEnabled('info')).true();
        assume(logger.isLevelEnabled('verbose')).true();
        assume(logger.isLevelEnabled('debug')).true();
        assume(logger.isLevelEnabled('silly')).false();

        assume(logger.isErrorEnabled()).true();
        assume(logger.isWarnEnabled()).true();
        assume(logger.isInfoEnabled()).true();
        assume(logger.isVerboseEnabled()).true();
        assume(logger.isDebugEnabled()).true();
        assume(logger.isSillyEnabled()).false();
      });

      it('default levels, no transports', function () {
        let logger = winston.createLogger({
          level: 'verbose',
          levels: winston.config.npm.levels,
          transports: []
        });

        assume(logger.getHighestLogLevel).is.a('function');
        assume(logger.getHighestLogLevel()).equals(4);

        assume(logger.isLevelEnabled).is.a('function');

        assume(logger.isErrorEnabled).is.a('function');
        assume(logger.isWarnEnabled).is.a('function');
        assume(logger.isInfoEnabled).is.a('function');
        assume(logger.isVerboseEnabled).is.a('function');
        assume(logger.isDebugEnabled).is.a('function');
        assume(logger.isSillyEnabled).is.a('function');

        assume(logger.isLevelEnabled('error')).true();
        assume(logger.isLevelEnabled('warn')).true();
        assume(logger.isLevelEnabled('info')).true();
        assume(logger.isLevelEnabled('verbose')).true();
        assume(logger.isLevelEnabled('debug')).false();
        assume(logger.isLevelEnabled('silly')).false();

        assume(logger.isErrorEnabled()).true();
        assume(logger.isWarnEnabled()).true();
        assume(logger.isInfoEnabled()).true();
        assume(logger.isVerboseEnabled()).true();
        assume(logger.isDebugEnabled()).false();
        assume(logger.isSillyEnabled()).false();
      });

      it('custom levels', function () {
        let logger = winston.createLogger({
          level: 'test',
          levels: {
            bad: 0,
            test: 1,
            ok: 2
          },
          transports: [new winston.transports.Console()]
        });

        assume(logger.getHighestLogLevel).is.a('function');
        assume(logger.getHighestLogLevel()).equals(1);

        assume(logger.isLevelEnabled).is.a('function');

        assume(logger.isBadEnabled).is.a('function');
        assume(logger.isTestEnabled).is.a('function');
        assume(logger.isOkEnabled).is.a('function');

        assume(logger.isLevelEnabled('bad')).true();
        assume(logger.isLevelEnabled('test')).true();
        assume(logger.isLevelEnabled('ok')).false();

        assume(logger.isBadEnabled()).true();
        assume(logger.isTestEnabled()).true();
        assume(logger.isOkEnabled()).false();
      });

      it('custom levels, no transports', function () {
        let logger = winston.createLogger({
          level: 'test',
          levels: {
            bad: 0,
            test: 1,
            ok: 2
          },
          transports: []
        });

        assume(logger.getHighestLogLevel).is.a('function');
        assume(logger.getHighestLogLevel()).equals(1);

        assume(logger.isLevelEnabled).is.a('function');

        assume(logger.isBadEnabled).is.a('function');
        assume(logger.isTestEnabled).is.a('function');
        assume(logger.isOkEnabled).is.a('function');

        assume(logger.isLevelEnabled('bad')).true();
        assume(logger.isLevelEnabled('test')).true();
        assume(logger.isLevelEnabled('ok')).false();

        assume(logger.isBadEnabled()).true();
        assume(logger.isTestEnabled()).true();
        assume(logger.isOkEnabled()).false();
      });

      it('custom levels, transport override', function () {
        let transport = new winston.transports.Console();
        transport.level = 'ok';

        let logger = winston.createLogger({
          level: 'bad',
          levels: {
            bad: 0,
            test: 1,
            ok: 2
          },
          transports: [transport]
        });

        assume(logger.getHighestLogLevel).is.a('function');
        assume(logger.getHighestLogLevel()).equals(2);

        assume(logger.isLevelEnabled).is.a('function');

        assume(logger.isBadEnabled).is.a('function');
        assume(logger.isTestEnabled).is.a('function');
        assume(logger.isOkEnabled).is.a('function');

        assume(logger.isLevelEnabled('bad')).true();
        assume(logger.isLevelEnabled('test')).true();
        assume(logger.isLevelEnabled('ok')).true();

        assume(logger.isBadEnabled()).true();
        assume(logger.isTestEnabled()).true();
        assume(logger.isOkEnabled()).true();
      });
    })
  });

  describe('Transport Events', function () {
    it(`'finish' event awaits transports to emit 'finish'`, function (done) {
      const transports = [
        new TransportStream({
          log: function () {
          }
        }),
        new TransportStream({
          log: function () {
          }
        }),
        new TransportStream({
          log: function () {
          }
        })
      ];

      const finished = [];
      const logger = winston.createLogger({transports});

      // Assert each transport emits finish
      transports.forEach((transport, i) => {
        transport.on('finish', () => finished[i] = true);
      });

      // Manually end the last transport to simulate mixed
      // finished state
      transports[2].end();

      // Assert that all transport 'finish' events have been
      // emitted when the logger emits 'finish'.
      logger.on('finish', function () {
        assume(finished[0]).true();
        assume(finished[1]).true();
        assume(finished[2]).true();
        done();
      });

      setImmediate(() => logger.end());
    });

    it('error', (done) => {
      const consoleTransport = new winston.transports.Console();
      const logger = winston.createLogger({
        transports: [consoleTransport]
      });

      logger.on('error', (err, transport) => {
        assume(err).instanceOf(Error);
        assume(transport).is.an('object');
        done();
      });
      consoleTransport.emit('error', new Error());
    });

    it('warn', (done) => {
      const consoleTransport = new winston.transports.Console();
      const logger = winston.createLogger({
        transports: [consoleTransport]
      });

      logger.on('warn', (err, transport) => {
        assume(err).instanceOf(Error);
        assume(transport).is.an('object');
        done();
      });
      consoleTransport.emit('warn', new Error());
    });
  })

  describe('Formats', function () {
    it(`rethrows errors from user-defined formats`, function () {
      stdMocks.use();
      const logger = winston.createLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.printf((info) => {
          // Set a trap.
          if (info.message === 'ENDOR') {
            throw new Error('ITS A TRAP!');
          }

          return info.message;
        })
      });

      // Trigger the trap.  Swallow the error so processing continues.
      try {
        logger.info('ENDOR');
      } catch (err) {
        assume(err.message).equals('ITS A TRAP!');
      }

      const expected = [
        'Now witness the power of the fully armed and operational logger',
        'Consider the philosophical and metaphysical – BANANA BANANA BANANA',
        'I was god once. I saw – you were doing well until everyone died.'
      ];

      expected.forEach(msg => logger.info(msg));

      stdMocks.restore();
      const actual = stdMocks.flush();
      assume(actual.stdout).deep.equals(expected.map(msg => `${msg}${EOL}`));
      assume(actual.stderr).deep.equals([]);
    });
  })

  describe('Profiling', function () {
    it('ending profiler with object argument should be included in output', function (done) {
      let logger = helpers.createLogger(function (info) {
        assume(info).is.an('object');
        assume(info.something).equals('ok');
        assume(info.level).equals('info');
        assume(info.durationMs).is.a('number');
        assume(info.message).equals('testing1');
        assume(info[MESSAGE]).is.a('string');
        done();
      });

      logger.profile('testing1');
      setTimeout(function () {
        logger.profile('testing1', {
          something: 'ok',
          level: 'info'
        })
      }, 100);
    });

    // TODO: Revisit if this is a valid test
    it('calling profile with a callback function should not make a difference', function (done) {
      let logger = helpers.createLogger(function (info) {
        assume(info).is.an('object');
        assume(info.something).equals('ok');
        assume(info.level).equals('info');
        assume(info.durationMs).is.a('number');
        assume(info.message).equals('testing2');
        assume(info[MESSAGE]).is.a('string');
        done();
      });

      logger.profile('testing2', function () {
        done(new Error('Unexpected callback invoked'));
      });

      setTimeout(function () {
        logger.profile('testing2', {
          something: 'ok',
          level: 'info'
        })
      }, 100);
    });

    it('should stop a timer when `done` is called on it', function (done) {
      let logger = helpers.createLogger(function (info) {
        assume(info).is.an('object');
        assume(info.something).equals('ok');
        assume(info.level).equals('info');
        assume(info.durationMs).is.a('number');
        assume(info.message).equals('testing1');
        assume(info[MESSAGE]).is.a('string');
        done();
      });

      let timer = logger.startTimer();
      setTimeout(function () {
        timer.done({
          message: 'testing1',
          something: 'ok',
          level: 'info'
        });
      }, 100);
    });
  });

  // TODO: Revisit to improve these
  describe('Logging non-primitive data types', function () {
    describe('.log', function () {
      it(`.log(new Error()) uses Error instance as info`, function (done) {
        const err = new Error('test');
        err.level = 'info';

        const logger = helpers.createLogger(function (info) {
          assume(info).instanceOf(Error);
          assume(info).equals(err);
          done();
        });

        logger.log(err);
      });

      it(`.info('Hello') preserve meta without splat format`, function (done) {
        const logged = [];
        const logger = helpers.createLogger(function (info, enc, next) {
          logged.push(info);
          assume(info.label).equals('world');
          next();

          if (logged.length === 1) done();
        });

        logger.info('Hello', {label: 'world'});
      });

      it(`.info('Hello %d') does not mutate unnecessarily with string interpolation tokens`, function (done) {
        const logged = [];
        const logger = helpers.createLogger(function (info, enc, next) {
          logged.push(info);
          assume(info.label).equals(undefined);
          next();

          if (logged.length === 1) done();
        });

        logger.info('Hello %j', {label: 'world'}, {extra: true});
      });

      it(`.info('Hello') and .info('Hello %d') preserve meta with splat format`, function (done) {
        const logged = [];
        const logger = helpers.createLogger(function (info, enc, next) {
          logged.push(info);
          assume(info.label).equals('world');
          next();

          if (logged.length === 2) done();
        }, format.splat());

        logger.info('Hello', {label: 'world'});
        logger.info('Hello %d', 100, {label: 'world'});
      });
    });

    describe('.info', function () {
      it('.info(undefined) creates info with { message: undefined }', function (done) {
        const logger = helpers.createLogger(function (info) {
          assume(info.message).equals(undefined);
          done();
        });

        logger.info(undefined);
      });

      it('.info(null) creates info with { message: null }', function (done) {
        const logger = helpers.createLogger(function (info) {
          assume(info.message).equals(null);
          done();
        });

        logger.info(null);
      });

      it('.info(new Error()) uses Error instance as info', function (done) {
        const err = new Error('test');
        const logger = helpers.createLogger(function (info) {
          assume(info).instanceOf(Error);
          assume(info).equals(err);
          done();
        });

        logger.info(err);
      });

      it.todo(`https://github.com/winstonjs/winston/issues/2103`);
    });
  });

  describe('Metadata Precedence', function () {
    describe('Should support child loggers & defaultMeta', () => {
      it('sets child meta for text messages correctly', (done) => {
        const assertFn = ((msg) => {
          assume(msg.level).equals('info');
          assume(msg.message).equals('dummy message');
          assume(msg.requestId).equals('451');
          done();
        });

        const logger = winston.createLogger({
          transports: [
            mockTransport.createMockTransport(assertFn)
          ]
        });

        const childLogger = logger.child({requestId: '451'});
        childLogger.info('dummy message');
      });

      it('sets child meta for json messages correctly', (done) => {
        const assertFn = ((msg) => {
          assume(msg.level).equals('info');
          assume(msg.message.text).equals('dummy');
          assume(msg.requestId).equals('451');
          done();
        });

        const logger = winston.createLogger({
          transports: [
            mockTransport.createMockTransport(assertFn)
          ]
        });

        const childLogger = logger.child({requestId: '451'});
        childLogger.info({text: 'dummy'});
      });

      it('merges child and provided meta correctly', (done) => {
        const assertFn = ((msg) => {
          assume(msg.level).equals('info');
          assume(msg.message).equals('dummy message');
          assume(msg.service).equals('user-service');
          assume(msg.requestId).equals('451');
          done();
        });

        const logger = winston.createLogger({
          transports: [
            mockTransport.createMockTransport(assertFn)
          ]
        });

        const childLogger = logger.child({service: 'user-service'});
        childLogger.info('dummy message', {requestId: '451'});
      });

      it('provided meta take precedence over defaultMeta', (done) => {
        const assertFn = ((msg) => {
          assume(msg.level).equals('info');
          assume(msg.message).equals('dummy message');
          assume(msg.service).equals('audit-service');
          assume(msg.requestId).equals('451');
          done();
        });

        const logger = winston.createLogger({
          defaultMeta: {service: 'user-service'},
          transports: [
            mockTransport.createMockTransport(assertFn)
          ]
        });

        logger.info('dummy message', {
          requestId: '451',
          service: 'audit-service'
        });
      });

      it('provided meta take precedence over child meta', (done) => {
        const assertFn = ((msg) => {
          assume(msg.level).equals('info');
          assume(msg.message).equals('dummy message');
          assume(msg.service).equals('audit-service');
          assume(msg.requestId).equals('451');
          done();
        });

        const logger = winston.createLogger({
          transports: [
            mockTransport.createMockTransport(assertFn)
          ]
        });

        const childLogger = logger.child({service: 'user-service'});
        childLogger.info('dummy message', {
          requestId: '451',
          service: 'audit-service'
        });
      });

      it('handles error stack traces in child loggers correctly', (done) => {
        const assertFn = ((msg) => {
          assume(msg.level).equals('error');
          assume(msg.message).equals('dummy error');
          assume(msg.stack).includes('logger.test.js');
          assume(msg.service).equals('user-service');
          done();
        });

        const logger = winston.createLogger({
          transports: [
            mockTransport.createMockTransport(assertFn)
          ]
        });

        const childLogger = logger.child({service: 'user-service'});
        childLogger.error(Error('dummy error'));
      });

      it('defaultMeta() autobinds correctly', (done) => {
        const logger = helpers.createLogger(info => {
          assume(info.message).equals('test');
          done();
        });

        const log = logger.info;
        log('test');
      });
    });
  });

  describe('Backwards Compatability', function () {
    describe('Winston V2 Log', function () {
      it('.log(level, message)', function (done) {
        let logger = helpers.createLogger(function (info) {
          assume(info).is.an('object');
          assume(info.level).equals('info');
          assume(info.message).equals('Some super awesome log message');
          assume(info[MESSAGE]).is.a('string');
          done();
        });

        logger.log('info', 'Some super awesome log message')
      });

      it(`.log(level, undefined) creates info with { message: undefined }`, function (done) {
        const logger = helpers.createLogger(function (info) {
          assume(info.message).equals(undefined);
          done();
        });

        logger.log('info', undefined);
      });

      it(`.log(level, null) creates info with { message: null }`, function (done) {
        const logger = helpers.createLogger(function (info) {
          assume(info.message).equals(null);
          done();
        });

        logger.log('info', null);
      });

      it(`.log(level, new Error()) uses Error instance as info`, function (done) {
        const err = new Error('test');
        const logger = helpers.createLogger(function (info) {
          assume(info).instanceOf(Error);
          assume(info).equals(err);
          done();
        });

        logger.log('info', err);
      });

      it('.log(level, message, meta)', function (done) {
        let meta = {one: 2};
        let logger = helpers.createLogger(function (info) {
          assume(info).is.an('object');
          assume(info.level).equals('info');
          assume(info.message).equals('Some super awesome log message');
          assume(info.one).equals(2);
          assume(info[MESSAGE]).is.a('string');
          done();
        });

        logger.log('info', 'Some super awesome log message', meta);
      });

      it('.log(level, formatStr, ...splat)', function (done) {
        const format = winston.format.combine(
            winston.format.splat(),
            winston.format.printf(info => `${info.level}: ${info.message}`)
        );

        let logger = helpers.createLogger(function (info) {
          assume(info).is.an('object');
          assume(info.level).equals('info');
          assume(info.message).equals('100% such wow {"much":"javascript"}');
          assume(info[SPLAT]).deep.equals([100, 'wow', {much: 'javascript'}]);
          assume(info[MESSAGE]).equals('info: 100% such wow {"much":"javascript"}');
          done();
        }, format);

        logger.log('info', '%d%% such %s %j', 100, 'wow', {much: 'javascript'});
      });

      it('.log(level, formatStr, ...splat, meta)', function (done) {
        const format = winston.format.combine(
            winston.format.splat(),
            winston.format.printf(info => `${info.level}: ${info.message} ${JSON.stringify({thisIsMeta: info.thisIsMeta})}`)
        );

        let logger = helpers.createLogger(function (info) {
          assume(info).is.an('object');
          assume(info.level).equals('info');
          assume(info.message).equals('100% such wow {"much":"javascript"}');
          assume(info[SPLAT]).deep.equals([100, 'wow', {much: 'javascript'}]);
          assume(info.thisIsMeta).true();
          assume(info[MESSAGE]).equals('info: 100% such wow {"much":"javascript"} {"thisIsMeta":true}');
          done();
        }, format);

        logger.log('info', '%d%% such %s %j', 100, 'wow', {much: 'javascript'}, {thisIsMeta: true});
      });

      it(`.log(level, new Error()) creates info with error cause`, function (done) {
        const errCause = new Error("error cause");
        const err = new Error('test', { cause: errCause });
        const logger = helpers.createLogger(function (info) {
          assume(info).instanceOf(Error);
          assume(info).equals(err);
          assume(info.cause).equals(errCause)
          done();
        });

        logger.log('info', err);
      });
    });
  });
});



================================================
FILE: test/unit/winston/profiler.test.js
================================================
/*
 * profiler.js: Tests for exception simple profiling.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const Logger = require('../../../lib/winston/logger');
const Profiler = require('../../../lib/winston/profiler');
const { PassThrough } = require('stream');
describe('Profiler', function () {
  it('new Profiler()', function () {
    assume(function () {
      new Profiler();
    }).throws('Logger is required for profiling');
  });

  it('.done({ info })', function (done) {
    const logger = new Logger();
    logger.write = function (info) {
      assume(info).is.an('object');
      assume(info.something).equals('ok');
      assume(info.level).equals('info');
      assume(info.durationMs).is.a('number');
      assume(info.message).equals('testing1');
      done();
    };
    var profiler = new Profiler(logger);
    setTimeout(function () {
      profiler.done({
        something: 'ok',
        level: 'info',
        message: 'testing1'
      });
    }, 200);
  });

  it('non logger object', function(){
    assume(function() {
      new Profiler(new Error('Unknown error'));
    }).throws('Logger is required for profiling');

    assume(function () {
      new Profiler({a:'b'});
    }).throws('Logger is required for profiling');

    assume(function(){
      new Profiler([1,2,3,4]);
    }).throws('Logger is required for profiling');

    assume(function () {
      new Profiler(new PassThrough());
    }).throws('Logger is required for profiling');

    assume(function () {
      new Profiler(2);
    }).throws('Logger is required for profiling');
    
    assume(function () {
      new Profiler('1');
    }).throws('Logger is required for profiling');
  })
});



================================================
FILE: test/unit/winston/rejection-handler.test.js
================================================
/*
 * rejection-test.js: Tests for rejection data gathering in winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const baseHandlerTests = require('../../helpers/handler-tests');

describe('UnhandledRejectionHandler', function () {
  jest.setTimeout(100);

  baseHandlerTests({
    name: 'RejectionHandler',
    helper: 'rejectionHandler',
    setup: 'clearRejections',
    listener: 'unhandledRejection',
    toggleSetting: 'handleRejections'
  });
});



================================================
FILE: test/unit/winston/tail-file.test.js
================================================
/*
 * tail-file.test.js: Tests for lib/winston/tail-file.js
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const fs = require('fs');
const path = require('path');
const winston = require('../../../lib/winston');
const tailFile = require('../../../lib/winston/tail-file');
const { Stream } = require('readable-stream');
const testLogFixturesPath = path.join(__dirname, '..', '..', 'fixtures', 'logs');

//
// Test helper that performs writes to a specific log file
// on a given interval
//
function logOnInterval(opts, done) {
  var filename = opts.file;
  var interval = opts.interval || 100;
  var timeout = opts.timeout || 10 * 1000;
  var message = opts.message || '';
  var open = opts.open;
  var transport = new winston.transports.File({ filename: filename });
  var logger = winston.createLogger({ transports: [transport] });

  if (open) {
    transport.once('open', open);
  }

  let counters = {
    write: 0,
    read: 0
  };

  fs.unlink(filename, function () {
    const intervalId = setInterval(function () {
      logger.info({ message: ++counters.write + message });
    }, interval);

    setTimeout(function () {
      //
      // Clear the interval to stop writes, then pause
      // briefly to let any listening streams flush.
      //
      clearInterval(intervalId);
      setTimeout(done.bind(null, null, counters), 100);
    }, timeout);
  });
}


describe('tailFile', function () {
  jest.setTimeout(10 * 1000);

  it('is a function', function () {
    assume(tailFile).is.a('function');
    assume(tailFile.length).equals(2);
  });

  it('returns a stream that emits "line" for every line', function (done) {
    var tailable = path.join(testLogFixturesPath, 'common-tail-file.log');
    var expected = 0;
    //
    // Performs the actual tail and asserts it.
    //
    function startTailFile() {
      var stream = tailFile({ file: tailable });
      assume(stream).instanceof(Stream);

      stream.on('line', function (buff) {
        expected += 1;
        assume(JSON.parse('' + buff)).is.an('object');
      });
    }

    logOnInterval({
      file: tailable,
      open: startTailFile,
      timeout: 5000
    }, function (err, actual) {
      assume(expected).equals(actual.write);
      done();
    });
  });
});



================================================
FILE: test/unit/winston/winston.test.js
================================================
/*
 * winston.test.js: Tests for instances of the winston Logger
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const winston = require('../../../lib/winston');

describe('Winston', function () {
  it('should expose transports', function () {
    assume(winston.transports).is.an('object');
    assume(winston.Transport).is.a('function');
    assume(!winston.transports.Transport).true();
    assume(winston.transports.Console).is.a('function');
    assume(winston.transports.File).is.a('function');
  });

  it('should have the expected initial state', function () {
    assume(winston.default.transports).deep.equals([]);
    assume(winston.level).equals('info');
  });

  describe('exposed interface', function () {
    const expectedMethods = [
      'log',
      'query',
      'stream',
      'add',
      'remove',
      'clear',
      'profile',
      'startTimer',
      'handleExceptions',
      'unhandleExceptions',
      'handleRejections',
      'unhandleRejections',
      'configure',
      'child',
      'createLogger'
    ];
    it.each(expectedMethods)('should expose a method of "%s()"', function (method) {
      const actualMethod = winston[method];
      assume(actualMethod).is.a('function', 'winston.' + method);
    });

    const expectedProperties = [
      { property: 'level', type: 'string' },
      { property: 'exceptions', type: 'object' },
      { property: 'rejections', type: 'object' },
      { property: 'exitOnError', type: 'boolean' }
    ];
    it.each(expectedProperties)('should expose a property of "$property"', function ({ property, type }) {
      const actualProperty = winston[property];
      assume(actualProperty).is.of.a(type);
    });

    const expectedLevelMethods = [
      'error',
      'warn',
      'info',
      'http',
      'verbose',
      'debug',
      'silly'
    ];
    it.each(expectedLevelMethods)('should expose a level method of "%s()"', function (levelMethod) {
      const actualLevelMethod = winston[levelMethod];
      assume(actualLevelMethod).is.a('function', 'winston.' + levelMethod);
      assume(actualLevelMethod).does.not.throw();
    });

    it('exposes the configuration', function () {
      assume(winston.config).is.an('object');
    });

    it('exposes the version', function () {
      assume(winston.version).equals(require('../../../package.json').version);
    });
  });


  describe('Deprecated Winston properties from < v3.x', function () {
    const deprecatedFunctions = ['addRewriter', 'addFilter', 'cli', 'clone', 'extend'];
    const deprecatedProperties = ['emitErrs', 'levelLength', 'padLevels', 'stripColors'];


    it.each(deprecatedFunctions)('should throw when the deprecated function "%s()" is invoked', function (functionName) {
      const invokeFn = function () {
        winston[functionName]();
      };
      assume(invokeFn).throws();
    });

    it.each(deprecatedProperties)('should throw when the deprecated property "%s" is accessed', function (property) {
      const accessProperty = function () {
        winston[property];
      };
      assume(accessProperty).throws();
    });
  });
});



================================================
FILE: test/unit/winston/config/config.test.js
================================================
/*
 * config.test.js: Tests for winston.config
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const winston = require('../../../../lib/winston');

describe('winston.config', function () {
  it('should have expected methods', function () {
    assume(winston.config).is.an('object');
    assume(winston.config.addColors).is.a('function');
    assume(winston.config.cli).is.an('object');
    assume(winston.config.npm).is.an('object');
    assume(winston.config.syslog).is.an('object');
  });
});



================================================
FILE: test/unit/winston/transports/00-file-stress.test.js
================================================
'use strict';

/*
 * file-stress.test.js: Tests for stressing File transport: volume, ambient event loop lag.
 *
 * (C) 2016 Charlie Robbins
 * MIT LICENSE
 *
 */

const fs = require('fs');
const os  = require('os');
const path = require('path');
const assume = require('assume');
const helpers = require('../../../helpers');
const split = require('split2');
const winston = require('../../../../lib/winston');

describe('File (stress)', function () {
  jest.setTimeout(30 * 1000);

  const fileStressLogFile = path.resolve(__dirname, '../../../fixtures/logs/file-stress-test.log');
  beforeEach(function () {
    try {
      fs.unlinkSync(fileStressLogFile);
    } catch (ex) {
      if (ex && ex.code !== 'ENOENT') { return done(ex); }
    }
  });

  it('should handle a high volume of writes', function (done) {
    const logger = winston.createLogger({
      transports: [new winston.transports.File({
        filename: fileStressLogFile
      })]
    });

    const counters = {
      write: 0,
      read: 0
    };

    const interval = setInterval(function () {
      logger.info(++counters.write);
    }, 0);

    setTimeout(function () {
      clearInterval(interval);

      helpers.tryRead(fileStressLogFile)
        .on('error', function (err) {
          assume(err).false();
          logger.close();
          done();
        })
        .pipe(split())
        .on('data', function (d) {
          const json = JSON.parse(d);
          assume(json.level).equal('info');
          assume(json.message).equal(++counters.read);
        })
        .on('end', function () {
          assume(counters.write).equal(counters.read);
          logger.close();
          done();
        });
    }, 10000);
  });

  it('should handle a high volume of large writes', function (done) {
    const logger = winston.createLogger({
      transports: [new winston.transports.File({
        filename: fileStressLogFile
      })]
    });

    const counters = {
      write: 0,
      read: 0
    };

    const interval = setInterval(function () {
      const msg = {
        counter: ++counters.write,
        message: 'a'.repeat(16384 - os.EOL.length - 1)
      };
      logger.info(msg);
    }, 0);

    setTimeout(function () {
      clearInterval(interval);

      helpers.tryRead(fileStressLogFile)
        .on('error', function (err) {
          assume(err).false();
          logger.close();
          done();
        })
        .pipe(split())
        .on('data', function (d) {
          const json = JSON.parse(d);
          assume(json.level).equal('info');
          assume(json.message).equal('a'.repeat(16384 - os.EOL.length - 1));
          assume(json.counter).equal(++counters.read);
        })
        .on('end', function () {
          assume(counters.write).equal(counters.read);
          logger.close();
          done();
        });
    }, 10000);
  });

  it('should handle a high volume of large writes synchronous', function (done) {
    const logger = winston.createLogger({
      transports: [new winston.transports.File({
        filename: fileStressLogFile
      })]
    });

    const counters = {
      write: 0,
      read: 0
    };

    const msgs = new Array(10).fill().map(() => ({
      counter: ++counters.write,
      message: 'a'.repeat(16384 - os.EOL.length - 1)
    }));
    msgs.forEach(msg => logger.info(msg));

    setTimeout(function () {
      helpers.tryRead(fileStressLogFile)
        .on('error', function (err) {
          assume(err).false();
          logger.close();
          done();
        })
        .pipe(split())
        .on('data', function (d) {
          const json = JSON.parse(d);
          assume(json.level).equal('info');
          assume(json.message).equal('a'.repeat(16384 - os.EOL.length - 1));
          assume(json.counter).equal(++counters.read);
        })
        .on('end', function () {
          assume(counters.write).equal(counters.read);
          logger.close();
          done();
        });
    }, 10000);
  });

  it('should handle a high volume of writes with lazy option enabled', function (done) {
    const logger = winston.createLogger({
      transports: [
        new winston.transports.File({
          filename: fileStressLogFile,
          lazy: true
        })
      ]
    });

    const counters = {
      write: 0,
      read: 0
    };

    const interval = setInterval(function () {
      logger.info(++counters.write);
    }, 0);

    setTimeout(function () {
      clearInterval(interval);

      helpers
        .tryRead(fileStressLogFile)
        .on('error', function (err) {
          assume(err).false();
          logger.close();
          done();
        })
        .pipe(split())
        .on('data', function (d) {
          const json = JSON.parse(d);
          assume(json.level).equal('info');
          assume(json.message).equal(++counters.read);
        })
        .on('end', function () {
          assume(counters.write).equal(counters.read);
          logger.close();
          done();
        });
    }, 10000);
  });
});



================================================
FILE: test/unit/winston/transports/console.test.js
================================================
'use strict';

/*
 * console-test.js: Tests for instances of the Console transport
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const { LEVEL, MESSAGE } = require('triple-beam');
const winston = require('../../../../lib/winston');
const stdMocks = require('std-mocks');

const defaultLevels = winston.config.npm.levels;
const transports = {
  defaults: new winston.transports.Console(),
  noStderr: new winston.transports.Console({ stderrLevels: [] }),
  stderrLevels: new winston.transports.Console({
    stderrLevels: ['info', 'error']
  }),
  consoleWarnLevels: new winston.transports.Console({
    consoleWarnLevels: ['warn', 'debug']
  }),
  eol: new winston.transports.Console({ eol: 'X' }),
  syslog: new winston.transports.Console({
    levels: winston.config.syslog.levels
  }),
  customLevelStderr: new winston.transports.Console({
    levels: {
      alpha: 0,
      beta: 1,
      gamma: 2,
      delta: 3,
      epsilon: 4,
    },
    stderrLevels: ['delta', 'epsilon']
  })
};

/**
 * Returns a function that asserts the `transport` has the specified
 * logLevels values in the appropriate logLevelsName member.
 *
 * @param  {TransportStream} transport Transport to assert against
 * @param  {Array} logLevels Set of levels assumed to exist for the specified map
 * @param  {String} logLevelsName The name of the array/map that holdes the log leveles values (ie: 'stderrLevels', 'consoleWarnLevels')
 * @return {function} Assertion function to execute comparison
 */
function assertLogLevelsValues(transport, logLevels, logLevelsName = 'stderrLevels') {
  return function () {
    assume(JSON.stringify(Object.keys(transport[logLevelsName]).sort()))
      .equals(JSON.stringify(logLevels.sort()));
  };
}



describe('Console transport', function () {
  describe('with defaults', function () {
    it('logs all levels to stdout', function () {
      stdMocks.use();
      transports.defaults.levels = defaultLevels;
      Object.keys(defaultLevels)
        .forEach(function (level) {
          const info = {
            [LEVEL]: level,
            message: `This is level ${level}`,
            level
          };

          info[MESSAGE] = JSON.stringify(info);
          transports.defaults.log(info);
        });

      stdMocks.restore();
      var output = stdMocks.flush();
      assume(output.stderr).is.an('array');
      assume(output.stderr).length(0);
      assume(output.stdout).is.an('array');
      assume(output.stdout).length(7);
    });

    it("should set stderrLevels to [] by default", assertLogLevelsValues(
      transports.defaults,
      [],
      'stderrLevels'
    ));
  });

  describe('throws an appropriate error when', function () {
    it("if stderrLevels is set, but not an Array { stderrLevels: 'Not an Array' }", function () {
      assume(function () {
        let throwing = new winston.transports.Console({
          stderrLevels: 'Not an Array'
        })
      }).throws(/Cannot make set from type other than Array of string elements/);
    });

    it("if stderrLevels contains non-string elements { stderrLevels: ['good', /^invalid$/, 'valid']", function () {
      assume(function () {
        let throwing = new winston.transports.Console({
          stderrLevels: ['good', /^invalid$/, 'valid']
        })
      }).throws(/Cannot make set from type other than Array of string elements/);
    });
  });

  it("{ stderrLevels: ['info', 'error'] } logs to them appropriately", assertLogLevelsValues(
    transports.stderrLevels,
    ['info', 'error'],
    'stderrLevels'
  ));
  it("{ consoleWarnLevels: ['warn', 'debug'] } logs to them appropriately", assertLogLevelsValues(
    transports.consoleWarnLevels,
    ['warn', 'debug'],
    'consoleWarnLevels'
  ));

  it('{ eol } adds a custom EOL delimiter', function (done) {
    stdMocks.use();
    transports.eol.log({ [MESSAGE]: 'info: testing. 1 2 3...' }, function () {
      stdMocks.restore();

      var output = stdMocks.flush(),
          line   = output.stdout[0];

      assume(line).equal('info: testing. 1 2 3...X');
      done();
    });
  });
});


// TODO(invalid-test): test is no longer valid as we don't have the vows dependency anymore
// vows.describe('winston/transports/console').addBatch({
//   "An instance of the Console Transport": {
//     "with syslog levels": {
//       "should have the proper methods defined": function () {
//         helpers.assertConsole(syslogTransport);
//       },
//       "the log() method": helpers.testSyslogLevels(syslogTransport, "should respond with true", function (ign, err, logged) {
//         assert.isNull(err);
//         assert.isTrue(logged);
//       })
//     }
//   }
// }).addBatch({
//   "An instance of the Console Transport with no options": {
//     "should log only 'error' and 'debug' to stderr": helpers.testLoggingToStreams(
//       winston.config.npm.levels, defaultTransport, ['debug', 'error'], stdMocks
//     )
//   }
// }).addBatch({
//   "An instance of the Console Transport with debugStdout set": {
//     "should set stderrLevels to 'error' by default": helpers.assertStderrLevels(
//       debugStdoutTransport,
//       ['error']
//     ),
//     "should log only the 'error' level to stderr": helpers.testLoggingToStreams(
//       winston.config.npm.levels, debugStdoutTransport, ['error'], stdMocks
//     )
//   }
// }).addBatch({
//   "An instance of the Console Transport with stderrLevels set": {
//     "should log only the levels in stderrLevels to stderr": helpers.testLoggingToStreams(
//       winston.config.npm.levels, stderrLevelsTransport, ['info', 'warn'], stdMocks
//     )
//   }
// }).addBatch({
//   "An instance of the Console Transport with stderrLevels set to an empty array": {
//     "should log only to stdout, and not to stderr": helpers.testLoggingToStreams(
//       winston.config.npm.levels, noStderrTransport, [], stdMocks
//     )
//   }
// }).addBatch({
//   "An instance of the Console Transport with custom levels and stderrLevels set": {
//     "should log only the levels in stderrLevels to stderr": helpers.testLoggingToStreams(
//       customLevels, customLevelsAndStderrTransport, ['delta', 'epsilon'], stdMocks
//     )
//   }
// }).export(module);



================================================
FILE: test/unit/winston/transports/error.test.js
================================================
const winston = require('../../../../lib/winston');
const assume = require('assume');

// https://github.com/winstonjs/winston/issues/1364
describe('transports issue 1364', () => {
  const mainError = 'Error logging!';
  const otherError = 'Other error';
  let logger;
  let errorMessage;
  let counter;
  let maxCounter;
  let logError;
  let transport;
  const newTransport = () =>
    Object.assign(new winston.transports.Console(), {
      log: (info, next) => {
        if (counter === maxCounter) {
          next(new Error(errorMessage));
          return;
        }
        if (logError !== null) {
          errorMessage = otherError;
        }
        counter = counter + 1;
        next();
        return;
      }
    });
  beforeEach(() => {
    errorMessage = mainError;
    counter = 0;
    maxCounter = 1;
    logError = null;
    transport = newTransport();
    logger = winston.createLogger({
      level: 'info',
      transports: [transport]
    });
    logger.on('error', error => {
      counter = 0;
      logError = error;
    });
  });

  describe('only log once', () => {
    beforeEach(() => {
      logger.info('log once');
    });

    it('logger transport has single correct transport', () => {
      const transports = logger.transports;
      assume(transports).is.an('array');
      assume(transports).length(1);
      assume(transports).contains(transport);
    });

    it("error didn't", () => {
      assume(logError).not.exists();
    });
  });

  describe('log twice', () => {
    beforeEach(() => {
      logger.info('log twice 1');
      logger.info('log twice 2'); // this raises the `mainError` for the transport
    });

    it('logger transport has single correct transport', () => {
      const transports = logger.transports;
      assume(transports).is.an('array');
      assume(transports).length(1);
      assume(transports).contains(transport);
    });

    it('error occurred', () => {
      assume(logError).property('message', mainError);
    });
  });

  describe('log thrice', () => {
    beforeEach(() => {
      logger.info('log thrice 1');
      logger.info('log thrice 2'); // this raises the `mainError` for the transport
      logger.info('log thrice 3');
    });

    it('logger transport has single correct transport', () => {
      const transports = logger.transports;
      assume(transports).is.an('array');
      assume(transports).length(1);
      assume(transports).contains(transport);
    });

    it('error occurred', () => {
      assume(logError).property('message', mainError);
    });
  });

  describe('log four times', () => {
    beforeEach(() => {
      logger.info('log four times 1');
      logger.info('log four times 2'); // this raises the `mainError` for the transport
      logger.info('log four times 3');
      logger.info('log four times 4'); // this raises the `otherError` for the transport
    });

    it('logger transport has single correct transport', () => {
      const transports = logger.transports;
      assume(transports).is.an('array');
      assume(transports).length(1);
      assume(transports).contains(transport);
    });

    it('other error occurred', () => {
      assume(logError).property('message', otherError);
    });
  });
});



================================================
FILE: test/unit/winston/transports/file-create-dir.test.js
================================================
'use strict';

const fs = require('fs');
const assert = require('assert');
const path = require('path');
const winston = require('../../../../lib/winston');
const { rimraf } = require('rimraf');

/* eslint-disable no-sync */

describe('winston/transports/file/createLogDir', function () {
  const logDir = path.resolve(__dirname, '../../../fixtures/temp_logs');

  beforeEach(function () {
    return rimraf(logDir).catch(err => {
      if (err){
        console.log('Error encountered when removing `temp_logs` dir')
        console.log(err);
      }
    })
  });

  it('should create directory if it does not exist', function () {
    winston.createLogger({
      transports: [
        new winston.transports.File({
          filename: path.join(logDir, 'file.log')
        })
      ]
    });

    assert(fs.existsSync(logDir));
  });

  it('should create directory if it does not exist when write to the stream', function () {
    const streamfile = path.join(logDir, 'simple-stream.log');
    const stream = fs.createWriteStream(streamfile);

    winston.createLogger({
      transports: [
        new winston.transports.File({
          stream: stream
        })
      ]
    });

    assert(fs.existsSync(logDir));
  });
});



================================================
FILE: test/unit/winston/transports/file.test.js
================================================
'use strict';

/* eslint-disable no-sync */
const assert = require('assert');
const { rimraf } = require('rimraf');
const fs = require('fs');
const fsPromise = require('node:fs/promises');
const path = require('path');
const winston = require('../../../../lib/winston');
const testLogFixturesPath = path.join(__dirname, '..', '..', '..', 'fixtures', 'logs');
const { MESSAGE } = require('triple-beam');

/**
 * Sends logs to the provided transport. Supports logging a specified total data size at a given chunk size.
 *
 * @param {Object} transport - The winston transport to log to.
 * @param {Object} [opts={}] - Options for logging.
 * @param {number} [opts.kbytes=1] - The number of kilobytes to log.
 * @param {string} [opts.char='A'] - The character to use for logging.
 * @param {number} [opts.chunkSize=1] - The size of each log chunk in kilobytes.
 * @returns {Promise<void>} A promise that resolves when logging is complete.
 */
async function logToTransport(transport, opts = {}) {
  const chunkSize = opts.chunkSize ?? 1; // Default chunk size to 1KB if not provided
  const char = opts.char ?? 'A'; // Default character to 'A' if not provided
  const totalKBytes = opts.kbytes ?? 1; // Default total size to 1KB if not provided

  const bytesPerChunk = chunkSize * 1024 - 1; // Convert kilobytes to bytes and account for newline character
  const kbStr = char.repeat(bytesPerChunk); // create chunk of desired size with specified character

  for (let i = 0; i < totalKBytes; i++) {
    const logPayload = { level: 'info', [MESSAGE]: kbStr };
    await new Promise((resolve, reject) => {
      transport.log(logPayload, (err) => {
        return err ? reject() : resolve();
      });
    });
  }
}

/**
 * Waits for a file to exist by repeatedly checking for its presence.
 *
 * @param {string} filename - The name of the file to wait for.
 * @param {number} [timeout=1000] - Maximum time to wait in milliseconds before throwing an error.
 * @param {number} [interval=20] - Interval in milliseconds between file existence checks.
 * @returns {Promise<void>} A promise that resolves when the file exists or rejects on timeout.
 * @throws {Error} If the file does not exist after the timeout period.
 */
async function waitForFile(filename, timeout = 1000, interval = 20) {
  const start = Date.now();
  const filepath = getFilePath(filename);
  while (Date.now() - start < timeout) {
    try {
      await fsPromise.access(filepath);
      return; // File exists
    } catch {
      // File doesn't exist yet, keep waiting
    }
    await new Promise(r => setTimeout(r, interval));
  }
  throw new Error(`Timed out waiting for file: ${filename}`);
}

async function removeFixtures() {
  await rimraf(path.join(testLogFixturesPath, 'test*'), { glob: true });
}
function getFilePath(filename) {
  return path.join(testLogFixturesPath, filename);
}
const assertFileExists = (filename) => {
  assert.doesNotThrow(
    () => fs.statSync(getFilePath(filename)),
    `Expected file ${filename} to exist`
  );
};
const assertFileDoesNotExist = (filename) => {
  assert.throws(
    () => fs.statSync(getFilePath(filename)),
    `Expected file ${filename} to not exist`
  );
};
const assertFileContentsStartWith = (filename, char) => {
  const fileContents = fs.readFileSync(getFilePath(filename), 'utf8');
  assert.strictEqual(
    fileContents[0],
    char,
    `Content of file ${filename} was not filled with ${char}`
  );
};
const assertFileSizeLessThan = (filename, maxSizeBytes) => {
  const stats = fs.statSync(getFilePath(filename));
  assert.ok(
    stats.size <= maxSizeBytes,
    `Expected file ${filename} to not exceed ${maxSizeBytes} bytes, but was ${stats.size} bytes`
  );
};

describe('File Transport', function () {
  const defaultTransportOptions = {
    timestamp: true,
    json: false,
    filename: 'testarchive.log',
    dirname: testLogFixturesPath,
    maxsize: 4096
  };

  beforeEach(async () => {
    await removeFixtures();
  });

  afterEach(async () => {
    await removeFixtures();
  });

  describe('Construction', () => {
    const conflictingOptionTestCases = [
      { stream: true, filename: true },
      { stream: true, dirname: true },
      { stream: true, maxsize: true }
    ];
    it.each(conflictingOptionTestCases)('should throw an error if conflicting options are provided', (opts) => {
      const instantition = () => new winston.transports.File(opts);

      assert.throws(instantition, 'Conflicting options did not result in an error');
    });
  });

  describe('Filename Option', function () {
    it('should log to the file with the given filename', async function () {
      const expectedFilename = 'testfilename.log';
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        filename: expectedFilename
      });

      await logToTransport(transport);
      await waitForFile(expectedFilename);

      assertFileExists(expectedFilename);
    });
  });

  describe('Rotation Format option', function () {
    it('should create multiple files correctly with rotation Function', async function () {
      let i = 0;
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        rotationFormat: () => `_${i++}`
      });

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive.log');

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive_1.log');

      assertFileExists('testarchive.log');
      assertFileExists('testarchive_1.log');
    });
  });

  describe('Archive option', function () {
    it('should archive log file when max size is exceeded', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        zippedArchive: true
      });

      await logToTransport(transport, { kbytes: 1 });
      await waitForFile('testarchive.log');
      assertFileExists('testarchive.log');
      assertFileDoesNotExist('testarchive1.log');

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive1.log');
      assertFileExists('testarchive.log.gz');
      assertFileExists('testarchive1.log');

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive2.log');
      assertFileExists('testarchive1.log.gz');
      assertFileExists('testarchive2.log');
    });

    it('should not archive log file when max size is exceeded', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        zippedArchive: false
      });

      await logToTransport(transport, { kbytes: 1 });
      await waitForFile('testarchive.log');
      assertFileExists('testarchive.log');
      assertFileDoesNotExist('testarchive1.log');

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive1.log');
      assertFileExists('testarchive.log');
      assertFileExists('testarchive1.log');

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive2.log');
      assertFileExists('testarchive1.log');
      assertFileExists('testarchive2.log');
    });
  });

  describe('Maxsize option', function () {
    it('should create a new file the configured max size is exceeded', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        maxsize: 2048
      });

      await logToTransport(transport, { kbytes: 1 });
      await waitForFile('testarchive.log');

      await logToTransport(transport, { kbytes: 2 });
      await waitForFile('testarchive1.log');

      // Verify both files exist after rotation
      assertFileExists('testarchive.log');
      assertFileExists('testarchive1.log');
    });

    it('should not exceed max size for any file', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        maxsize: 2048
      });

      await logToTransport(transport, { kbytes: 3 });
      await waitForFile('testarchive.log');

      await logToTransport(transport, { kbytes: 2 });
      await waitForFile('testarchive1.log');
      await waitForFile('testarchive2.log');

      // Verify both files exist after rotation
      assertFileSizeLessThan('testarchive.log', 2048);
      assertFileSizeLessThan('testarchive1.log', 2048);
      assertFileSizeLessThan('testarchive2.log', 2048);
    });
  });

  describe('Maxfiles option', function () {
    it('should not exceed the max files', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        maxsize: 2024, // Small size to trigger frequent rotations
        maxFiles: 3, // Only allow 3 files total
        lazy: true
      });

      // Log well beyond enough data to create 3 files
      await logToTransport(transport);
      await logToTransport(transport);
      await logToTransport(transport);
      await logToTransport(transport);
      await logToTransport(transport);
      await logToTransport(transport);
      await logToTransport(transport);

      // Wait for the last expected file
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Should have 3 files total (maxFiles)
      assertFileExists('testarchive.log');
      assertFileExists('testarchive1.log');
      assertFileDoesNotExist('testarchive3.log'); // This should not exist because maxFiles = 3
    }, 10000);

    it('should delete the oldest file when maxfiles is met', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        maxsize: 1024, // Small size to trigger frequent rotations
        maxFiles: 2, // Only allow 2 files total
        lazy: true // Ensure files are created immediately
      });

      // Create first log file
      await logToTransport(transport);
      await waitForFile('testarchive.log');

      // Create second log file
      await logToTransport(transport);
      await waitForFile('testarchive1.log');

      // Create third log file (should delete the oldest one)
      await logToTransport(transport, { kbytes: 0.5 });
      await waitForFile('testarchive2.log');

      // Should only have 2 most recent files (maxFiles = 2)
      assertFileDoesNotExist('testarchive.log'); // The oldest file should be deleted
      assertFileExists('testarchive1.log');
      assertFileExists('testarchive2.log');
    });
  });

  describe('Tailable option', function () {
    // eslint-disable-next-line max-statements
    it('should write to original file and older files will be in ascending order', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        maxFiles: 4,
        tailable: true
      });

      // We need to log enough data to create 3 files of 4KB each = 12KB total
      await logToTransport(transport, { kbytes: 4, char: 'A' });
      await waitForFile('testarchive.log');
      await logToTransport(transport, { kbytes: 4, char: 'B' });
      await waitForFile('testarchive1.log');
      await logToTransport(transport, { kbytes: 4, char: 'C' });
      await waitForFile('testarchive2.log');
      await logToTransport(transport, { kbytes: 1, char: 'D' });
      await waitForFile('testarchive3.log');

      // Verify the expected files exist and their contents are correct
      assertFileExists('testarchive.log');
      assertFileExists('testarchive1.log');
      assertFileExists('testarchive2.log');
      assertFileExists('testarchive3.log');

      // Verify the contents of the files are in the expected order
      assertFileContentsStartWith('testarchive.log', 'D');
      assertFileContentsStartWith('testarchive1.log', 'C');
      assertFileContentsStartWith('testarchive2.log', 'B');
      // FIX: I would expect the first file that was rolled to be filled with the first log message
      // instead the file is empty. Investigation needed.
      // assertFileContentsStartWith('testarchive3.log', 'A');
    });

    it('should write to the newest file and older files will be in descending order', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        tailable: false
      });

      // We need to log enough data to create 3 files of 4KB each = 12KB total
      await logToTransport(transport, { kbytes: 4, char: 'A' });
      await waitForFile('testarchive.log');
      await logToTransport(transport, { kbytes: 4, char: 'B' });
      await waitForFile('testarchive1.log');
      await logToTransport(transport, { kbytes: 4, char: 'C' });
      await waitForFile('testarchive2.log');

      // Verify the expected files exist
      assertFileExists('testarchive.log');
      assertFileExists('testarchive1.log');
      assertFileExists('testarchive2.log');

      // Verify the contents of the files are in the expected order
      // eslint-disable-next-line -- intentionally asserting file starts with no values
      assertFileContentsStartWith('testarchive.log', undefined);
      // FIX: only two of the files are filled and are not in the expected order. File contents are as follows:
      //   file testarchive.log  - empty
      //   file testarchive1.log - 'B'
      //   file testarchive2.log - 'C'
      //   file testarchive3.log - empty
      // assertFileContentsStartWith('testarchive1.log', 'A');
      // assertFileContentsStartWith('testarchive2.log', 'B');
    });
  });

  describe('Lazy option', () => {
    it('should not create log file until needed when lazy is enabled', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        lazy: true
      });

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive.log');

      assertFileExists('testarchive.log');
      assertFileDoesNotExist('testarchive1.log');
    });

    it('should create log files on initializaiton when lazy is enabled', async function () {
      const transport = new winston.transports.File({
        ...defaultTransportOptions,
        lazy: false
      });

      await logToTransport(transport, { kbytes: 4 });
      await waitForFile('testarchive.log');

      assertFileExists('testarchive.log');
      assertFileExists('testarchive1.log');
      assertFileDoesNotExist('testarchive2.log');
    });
  });


  describe('Stream Option', function () {
    it.todo('should display the deprecation notice');
    it.todo('should write to the stream when logged to with expected object');
  });


  // TODO: Reintroduce these tests
  //
  // "Error object in metadata #610": {
  //   topic: function () {
  //     var myErr = new Error("foo");
  //
  //     fileTransport.log('info', 'test message', myErr, this.callback.bind(this, null, myErr));
  //   },
  //   "should not be modified": function (err, myErr) {
  //     assert.equal(myErr.message, "foo");
  //     // Not sure if this is the best possible way to check if additional props appeared
  //     assert.deepEqual(Object.getOwnPropertyNames(myErr), Object.getOwnPropertyNames(new Error("foo")));
  //   }
  // }
  //
  // "Date object in metadata": {
  //   topic: function () {
  //     var obj = new Date(1000);
  //     fileTransport.log('info', 'test message', obj, this.callback.bind(this, null, obj));
  //   },
  //   "should not be modified": function (err, obj) {
  //     // Not sure if this is the best possible way to check if additional props appeared
  //     assert.deepEqual(Object.getOwnPropertyNames(obj), Object.getOwnPropertyNames(new Date()));
  //   }
  // }
  //
  // "Plain object in metadata": {
  //   topic: function () {
  //     var obj = { message: "foo" };
  //     fileTransport.log('info', 'test message', obj, this.callback.bind(this, null, obj));
  //   },
  //   "should not be modified": function (err, obj) {
  //     assert.deepEqual(obj, { message: "foo" });
  //   }
  // }
  //
  // "An instance of the File Transport": require('./transport')(winston.transports.File, {
  //   filename: path.join(__dirname, '..', 'fixtures', 'logs', 'testfile.log')
  // })
});




================================================
FILE: test/unit/winston/transports/http.test.js
================================================
/*
 * http-test.js: Tests for instances of the HTTP transport
 *
 * MIT LICENSE
 */

const http = require('http');
const hock = require('hock');
const assume = require('assume');
const Http = require('../../../../lib/winston/transports/http');
const stringifyJson = require('safe-stable-stringify');

const host = '127.0.0.1';
const port = 0;

function mockHttpServer(done, expectedLog) {

  const mock = hock.createHock();
  const opts = {
    path: 'log',
    payload: expectedLog
  };

  mock
    .post('/' + opts.path, opts.payload)
    .min(1)
    .max(1)
    .reply(200);

  var server = http.createServer(mock.handler);
  server.listen(port, '0.0.0.0', done);
  return { server, mock };
}

function assumeError(err) {
  if (err) {
    assume(err).falsy();
  }
}

function onLogged(context, done) {
  context.mock.done(function (err) {
    assumeError(err);
    done();
  });
}

describe('Http({ host, port, path })', function () {
  let context;
  let server;
  const dummyLog = {
    level: 'info',
    message: 'hello',
    meta: {},
    path: '/error'
  };

  afterEach(function (done) {
    server.close(done.bind(null, null));
  });

  describe('nominal', function () {

    beforeEach(function (done) {
      context = mockHttpServer(done, dummyLog);
      server = context.server;
    });

    it('should send logs over HTTP', function (done) {
      const httpTransport = new Http({
        host: host,
        port: server.address().port,
        path: 'log'
      }).on('error', assumeError).on('logged', function () {
        onLogged(context, done);
      });
      httpTransport.log(dummyLog, assumeError);
    });

  });

  describe('batch mode: max message', function () {

    beforeEach(function (done) {
      context = mockHttpServer(done, [dummyLog, dummyLog, dummyLog, dummyLog, dummyLog]);
      server = context.server;
    });

    it('test max message reached', function (done) {
      const httpTransport = new Http({
        host: host,
        port: server.address().port,
        path: 'log',
        batch: true,
        batchCount: 5
      })
        .on('error', assumeError)
        .on('logged', function () {
          onLogged(context, done);
        });

      httpTransport.log(dummyLog, assumeError);
      httpTransport.log(dummyLog, assumeError);
      httpTransport.log(dummyLog, assumeError);
      httpTransport.log(dummyLog, assumeError);
      httpTransport.log(dummyLog, assumeError);
    });

  });

  describe('batch mode: timeout', function () {

    beforeEach(function (done) {
      context = mockHttpServer(done, [dummyLog, dummyLog]);
      server = context.server;
    });

    it('test timeout reached', function (done) {
      jest.setTimeout(5000);
      const httpTransport = new Http({
        host: host,
        port: server.address().port,
        path: 'log',
        batch: true,
        batchCount: 5,
        batchInterval: 2000
      })
        .on('error', assumeError)
        .on('logged', function () {
          onLogged(context, done);
        });

      httpTransport.log(dummyLog, assumeError);
      httpTransport.log(dummyLog, assumeError);
    });

  });

  describe('circular structure', function () {
    const circularLog = {
      level: 'error',
      message: 'hello',
      meta: {}
    };

    circularLog.self = circularLog;

    beforeEach(function (done) {
      context = mockHttpServer(done, stringifyJson(circularLog));
      server = context.server;
    });

    it('should be able to handle options with circular structure', function (done) {
      const httpTransport = new Http({
        host: host,
        port: server.address().port,
        path: 'log'
      })
        .on('error', assumeError)
        .on('logged', function () {
          onLogged(context, done);
        });

      httpTransport.log(circularLog, assumeError);
    });

    it('should be able to handle options with circular structure when passing maximumDepth', function (done) {
      const httpTransport = new Http({
        host: host,
        maximumDepth: 5,
        port: server.address().port,
        path: 'log'
      })
        .on('error', assumeError)
        .on('logged', function () {
          onLogged(context, done);
        });

      httpTransport.log(circularLog, assumeError);
    });
  });
});



================================================
FILE: test/unit/winston/transports/stream.test.js
================================================
'use strict';

const path = require('path');
const writeable = require('../../../helpers').writeable;
const { MESSAGE } = require('triple-beam');
const os = require('os');
const winston = require('../../../../lib/winston');
const split = require('split2');
const assume = require('assume');

describe('Stream({ stream })', function () {
  it('should support objectMode streams', function (done) {
    const expected = {
      level: 'info',
      message: 'lolwut testing!'
    };

    const stream = writeable(function (info) {
      assume(info).equals(expected);
      done();
    });

    const transport = new winston.transports.Stream({ stream });
    transport.log(expected);
  });

  it('should support UTF8 encoding streams', function (done) {
    const expected = {
      level: 'info',
      message: 'lolwut testing!',
      [MESSAGE]: 'info: lolwut testing!'
    };

    const stream = writeable(function (raw) {
      assume(raw.toString()).equals(`${expected[MESSAGE]}${os.EOL}`);
      done();
    }, false);

    const transport = new winston.transports.Stream({ stream });
    transport.log(expected);
  });

  it('should throw when not passed a stream', function () {
    assume(function () {
      const stream = new winston.transports.Stream()
    }).throws('options.stream is required.');''
  });
});



================================================
FILE: .github/dependabot.yml
================================================
version: 2
updates:
  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: weekly
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly



================================================
FILE: .github/ISSUE_TEMPLATE/bug_report.yml
================================================
name: Have you encountered an issue?
description: Report an issue with Winston.
title: "[Bug]: "
labels: ["Bug", "Needs Investigation"]
body:
  - type: markdown # Form Header
    attributes:
      value: >-
        This issue form is for reporting bugs only!
  - type: input # Search Terms
    validations:
      required: true
    attributes:
      label: 🔎 Search Terms
      description: >-
        What search terms did you use when trying to find an existing bug report, looking in both open and closed issues?
        List them here (comma seperated) so people in the future can find this one more easily.
  - type: textarea # Problem Definition
    validations:
      required: true
    attributes:
      label: The problem
      description: >-
        Please provide a clear and concise description of the problem you've encountered and what the
        expected behavior was.
  - type: markdown # Environment Section Header
    attributes:
      value: |
        ## Environment
  - type: input # Affected Version Input
    id: winston-version
    validations:
      required: true
    attributes:
      label: What version of Winston presents the issue?
      placeholder: v3.4.0
      description: >
        Can be found by running one of the following (depending on your package manager of choice):
        - `npm list winston`
        - `yarn list --pattern winston`
  - type: input # Affected Version Input
    id: node-version
    validations:
      required: true
    attributes:
      label: What version of Node are you using?
      placeholder: v16.8.0
      description: >
        Can be found by running the following: `node -v`
  - type: input # Last Known Working Version
    attributes:
      label: If this worked in a previous version of Winston, which was it?
      placeholder: v3.0.0
      description: >
        If known, otherwise please leave blank.
  - type: markdown # Details Section Header
    attributes:
      value: |
        # Details
  - type: textarea # Minimum Working Example Input
    attributes:
      label: Minimum Working Example
      description: |
        If you can, providing an MWE to reproduce the issue you're encountering can greatly speed up
        investigation into the issue by one of our maintainers, or anyone else in the community who's looking
        to get involved.

        This can be as simple as a script, a link to a repo, etc.
        If using a script please wrap with triple backticks and language. EG:
        ` ```javascript `
  - type: textarea # Additional Information
    attributes:
      label: Additional information
      description: >
        If you have any additional information for us that you feel will be valuable, please use the field below.



================================================
FILE: .github/ISSUE_TEMPLATE/config.yml
================================================
blank_issues_enabled: false
contact_links:
  - name: Have a formatting issue or feature request?
    url: https://github.com/winstonjs/logform/issues/new/choose
    about: Please search and report @ WinstonJS/Logform
  - name: Need help using Winston?
    url: https://stackoverflow.com/questions/tagged/winston
    about: Please look on StackOverflow first to see if someone has already answered your question.



================================================
FILE: .github/ISSUE_TEMPLATE/feature_request.yml
================================================
name: Would you like to see a feature implemented?
description: Request a new feature for Winston
title: "[Feature Request]: "
labels: ["Feature Request", "Needs Investigation"]
body:
  - type: markdown # Form Header
    attributes:
      value: |
        This issue form is for requesting features only!
  - type: input # Search Terms
    validations:
      required: true
    attributes:
      label: 🔎 Search Terms
      description: >-
        What search terms did you use when trying to find an existing feature request, looking in both open and closed issues?
        List them here (comma seperated) so people in the future can find this one more easily.
  - type: textarea # Feature Definition
    validations:
      required: true
    attributes:
      label: The vision
      description: >-
        Please provide a clear and concise description of the feature you would like to see implemented.
  - type: markdown # Feature Details Section
    attributes:
      value: |
        # Details
  - type: textarea # Use Case Input
    attributes:
      label: Use case
      description: |
        If you desire you can provide use cases for the requested feature.
  - type: textarea # Additional Information
    attributes:
      label: Additional information
      description: >
        If you have any additional information for us that you feel will be valuable, please use the field below.



================================================
FILE: .github/workflows/ci.yml
================================================
name: CI Checks

on:
  pull_request:
    branches:
      - main
      - master
  push:
    branches:
      - main
      - master

permissions:
  contents: read #  to fetch code (actions/checkout)

jobs:
  Tests:
    permissions:
      contents: read #  to fetch code (actions/checkout)
      checks: write #  to create new checks (coverallsapp/github-action)

    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node:
          - 16
          - 18
          - 20
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}

      - name: Install Dependencies
        run: npm clean-install

      - name: Lint
        run: npm run lint

      - name: Unit Tests (with coverage)
        run: npm run test:unit

      - name: Integration Tests
        run: npm run test:integration

      - name: Report test coverage to Coveralls.io
        if: matrix.node == '20'
        uses: coverallsapp/github-action@master
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}

      - name: TypeScript Test
        run: npm run test:typescript


