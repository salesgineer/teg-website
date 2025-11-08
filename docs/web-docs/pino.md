Directory structure:
└── pinojs-pino/
    ├── README.md
    ├── bin.js
    ├── browser.js
    ├── CNAME
    ├── CONTRIBUTING.md
    ├── eslint.config.js
    ├── file.js
    ├── inc-version.sh
    ├── index.html
    ├── LICENSE
    ├── package.json
    ├── pino.d.ts
    ├── pino.js
    ├── SECURITY.md
    ├── tsconfig.json
    ├── .nojekyll
    ├── .npmignore
    ├── .npmrc
    ├── .prettierignore
    ├── benchmarks/
    │   ├── basic.bench.js
    │   ├── child-child.bench.js
    │   ├── child-creation.bench.js
    │   ├── child.bench.js
    │   ├── deep-object.bench.js
    │   ├── formatters.bench.js
    │   ├── long-string.bench.js
    │   ├── multi-arg.bench.js
    │   ├── multistream.js
    │   ├── object.bench.js
    │   ├── internal/
    │   │   ├── custom-levels.js
    │   │   ├── just-pino-heavy.bench.js
    │   │   ├── just-pino.bench.js
    │   │   ├── parent-vs-child.bench.js
    │   │   └── redact.bench.js
    │   └── utils/
    │       ├── generate-benchmark-doc.js
    │       ├── runbench.js
    │       └── wrap-log-level.js
    ├── docs/
    │   ├── api.md
    │   ├── asynchronous.md
    │   ├── benchmarks.md
    │   ├── browser.md
    │   ├── bundling.md
    │   ├── child-loggers.md
    │   ├── diagnostics.md
    │   ├── ecosystem.md
    │   ├── help.md
    │   ├── lts.md
    │   ├── pretty.md
    │   ├── redaction.md
    │   ├── transports.md
    │   └── web.md
    ├── docsify/
    │   └── sidebar.md
    ├── examples/
    │   ├── basic.js
    │   └── transport.js
    ├── lib/
    │   ├── caller.js
    │   ├── constants.js
    │   ├── deprecations.js
    │   ├── levels.js
    │   ├── meta.js
    │   ├── multistream.js
    │   ├── proto.js
    │   ├── redaction.js
    │   ├── symbols.js
    │   ├── time.js
    │   ├── tools.js
    │   ├── transport-stream.js
    │   ├── transport.js
    │   └── worker.js
    ├── test/
    │   ├── basic.test.js
    │   ├── broken-pipe.test.js
    │   ├── browser-child.test.js
    │   ├── browser-disabled.test.js
    │   ├── browser-early-console-freeze.test.js
    │   ├── browser-is-level-enabled.test.js
    │   ├── browser-levels.test.js
    │   ├── browser-serializers.test.js
    │   ├── browser-timestamp.test.js
    │   ├── browser-transmit.test.js
    │   ├── browser.test.js
    │   ├── complex-objects.test.js
    │   ├── crlf.test.js
    │   ├── custom-levels.test.js
    │   ├── diagnostics.test.js
    │   ├── error-key.test.js
    │   ├── error.test.js
    │   ├── escaping.test.js
    │   ├── exit.test.js
    │   ├── formatters.test.js
    │   ├── helper.d.ts
    │   ├── helper.js
    │   ├── hooks.test.js
    │   ├── http.test.js
    │   ├── is-level-enabled.test.js
    │   ├── levels.test.js
    │   ├── metadata.test.js
    │   ├── mixin-merge-strategy.test.js
    │   ├── mixin.test.js
    │   ├── multistream.test.js
    │   ├── redact.test.js
    │   ├── serializers.test.js
    │   ├── stdout-protection.test.js
    │   ├── syncfalse.test.js
    │   ├── timestamp-nano.test.js
    │   ├── timestamp.test.js
    │   ├── transport-stream.test.js
    │   ├── esm/
    │   │   ├── esm.mjs
    │   │   ├── index.test.js
    │   │   └── named-exports.mjs
    │   ├── fixtures/
    │   │   ├── console-transport.js
    │   │   ├── crashing-transport.js
    │   │   ├── default-exit.js
    │   │   ├── destination-exit.js
    │   │   ├── noop-transport.js
    │   │   ├── stdout-hack-protection.js
    │   │   ├── syncfalse-child.js
    │   │   ├── syncfalse-exit.js
    │   │   ├── syncfalse-flush-exit.js
    │   │   ├── syncfalse.js
    │   │   ├── syntax-error-esm.mjs
    │   │   ├── to-file-transport-with-transform.js
    │   │   ├── to-file-transport.js
    │   │   ├── to-file-transport.mjs
    │   │   ├── transport-exit-immediately-with-async-dest.js
    │   │   ├── transport-exit-immediately.js
    │   │   ├── transport-exit-on-ready.js
    │   │   ├── transport-main.js
    │   │   ├── transport-many-lines.js
    │   │   ├── transport-string-stdout.js
    │   │   ├── transport-transform.js
    │   │   ├── transport-uses-pino-config.js
    │   │   ├── transport-with-on-exit.js
    │   │   ├── transport-worker-data.js
    │   │   ├── transport-worker.js
    │   │   ├── transport-wrong-export-type.js
    │   │   ├── broken-pipe/
    │   │   │   ├── basic.js
    │   │   │   ├── destination.js
    │   │   │   └── syncfalse.js
    │   │   ├── eval/
    │   │   │   └── index.js
    │   │   ├── pretty/
    │   │   │   └── null-prototype.js
    │   │   ├── transport/
    │   │   │   ├── index.js
    │   │   │   └── package.json
    │   │   └── ts/
    │   │       ├── to-file-transport-with-transform.ts
    │   │       ├── to-file-transport.ts
    │   │       ├── transpile.cjs
    │   │       ├── transport-exit-immediately-with-async-dest.ts
    │   │       ├── transport-exit-immediately.ts
    │   │       ├── transport-exit-on-ready.ts
    │   │       ├── transport-main.ts
    │   │       ├── transport-string-stdout.ts
    │   │       └── transport-worker.ts
    │   ├── internals/
    │   │   └── version.test.js
    │   ├── jest/
    │   │   └── basic.spec.js
    │   ├── transport/
    │   │   ├── big.test.js
    │   │   ├── bundlers-support.test.js
    │   │   ├── caller.test.js
    │   │   ├── core.test.js
    │   │   ├── core.transpiled.test.ts
    │   │   ├── crash.test.js
    │   │   ├── module-link.test.js
    │   │   ├── pipeline.test.js
    │   │   ├── repl.test.js
    │   │   ├── sync-false.test.js
    │   │   ├── sync-true.test.js
    │   │   ├── targets.test.js
    │   │   └── uses-pino-config.test.js
    │   └── types/
    │       ├── pino-import.test-d.cts
    │       ├── pino-multistream.test-d.ts
    │       ├── pino-top-export.test-d.ts
    │       ├── pino-transport.test-d.ts
    │       ├── pino-type-only.test-d.ts
    │       ├── pino.test-d.ts
    │       └── pino.ts
    └── .github/
        ├── dependabot.yml
        └── workflows/
            ├── bench.yml
            ├── ci.yml
            ├── lock-threads.yml
            ├── publish-release.yml
            └── target-main.yml

================================================
FILE: README.md
================================================
![banner](pino-banner.png)

# pino
[![npm version](https://img.shields.io/npm/v/pino)](https://www.npmjs.com/package/pino)
[![Build Status](https://img.shields.io/github/actions/workflow/status/pinojs/pino/ci.yml)](https://github.com/pinojs/pino/actions)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

[Very low overhead](#low-overhead) JavaScript logger.

## Documentation

* [Benchmarks ⇗](/docs/benchmarks.md)
* [API ⇗](/docs/api.md)
* [Browser API ⇗](/docs/browser.md)
* [Redaction ⇗](/docs/redaction.md)
* [Child Loggers ⇗](/docs/child-loggers.md)
* [Transports ⇗](/docs/transports.md)
* [Diagnostics ⇗](/docs/diagnostics.md)
* [Web Frameworks ⇗](/docs/web.md)
* [Pretty Printing ⇗](/docs/pretty.md)
* [Asynchronous Logging ⇗](/docs/asynchronous.md)
* [Ecosystem ⇗](/docs/ecosystem.md)
* [Help ⇗](/docs/help.md)
* [Long Term Support Policy ⇗](/docs/lts.md)

## Runtimes

### Node.js

Pino is built to run on [Node.js](http://nodejs.org).

### Bare

Pino works on [Bare](https://github.com/holepunchto/bare) with the [`pino-bare`](https://github.com/pinojs/pino-bare) compatability module.

### Pear

Pino works on [Pear](https://docs.pears.com), which is built on [Bare](https://github.com/holepunchto/bare), with the [`pino-bare`](https://github.com/pinojs/pino-bare) compatibility module.


## Install

Using NPM:
```
$ npm install pino
```

Using YARN:
```
$ yarn add pino
```

If you would like to install pino v6, refer to https://github.com/pinojs/pino/tree/v6.x.

## Usage

```js
const logger = require('pino')()

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')
```

This produces:

```
{"level":30,"time":1531171074631,"msg":"hello world","pid":657,"hostname":"Davids-MBP-3.fritz.box"}
{"level":30,"time":1531171082399,"msg":"hello child!","pid":657,"hostname":"Davids-MBP-3.fritz.box","a":"property"}
```

For using Pino with a web framework see:

* [Pino with Fastify](docs/web.md#fastify)
* [Pino with Express](docs/web.md#express)
* [Pino with Hapi](docs/web.md#hapi)
* [Pino with Restify](docs/web.md#restify)
* [Pino with Koa](docs/web.md#koa)
* [Pino with Node core `http`](docs/web.md#http)
* [Pino with Nest](docs/web.md#nest)
* [Pino with Hono](docs/web.md#hono)

<a name="essentials"></a>
## Essentials

### Development Formatting

The [`pino-pretty`](https://github.com/pinojs/pino-pretty) module can be used to
format logs during development:

![pretty demo](pretty-demo.png)

### Transports & Log Processing

Due to Node's single-threaded event-loop, it's highly recommended that sending,
alert triggering, reformatting, and all forms of log processing
are conducted in a separate process or thread.

In Pino terminology, we call all log processors "transports" and recommend that the
transports be run in a worker thread using our `pino.transport` API.

For more details see our [Transports⇗](docs/transports.md) document.

### Low overhead

Using minimum resources for logging is very important. Log messages
tend to get added over time and this can lead to a throttling effect
on applications – such as reduced requests per second.

In many cases, Pino is over 5x faster than alternatives.

See the [Benchmarks](docs/benchmarks.md) document for comparisons.

### Bundling support

Pino supports being bundled using tools like webpack or esbuild. 

See [Bundling](docs/bundling.md) document for more information.

<a name="team"></a>
## The Team

### Matteo Collina

<https://github.com/mcollina>

<https://www.npmjs.com/~matteo.collina>

<https://twitter.com/matteocollina>

### David Mark Clements

<https://github.com/davidmarkclements>

<https://www.npmjs.com/~davidmarkclements>

<https://twitter.com/davidmarkclem>

### James Sumners

<https://github.com/jsumners>

<https://www.npmjs.com/~jsumners>

<https://twitter.com/jsumners79>

### Thomas Watson Steen

<https://github.com/watson>

<https://www.npmjs.com/~watson>

<https://twitter.com/wa7son>

## Contributing

Pino is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/pinojs/pino/blob/main/CONTRIBUTING.md) file for more details.

<a name="acknowledgments"></a>
## Acknowledgments

This project was kindly sponsored by [nearForm](https://nearform.com).
This project is kindly sponsored by [Platformatic](https://platformatic.dev).

Logo and identity designed by Cosmic Fox Design: https://www.behance.net/cosmicfox.

## License

Licensed under [MIT](./LICENSE).

[elasticsearch]: https://www.elastic.co/products/elasticsearch
[kibana]: https://www.elastic.co/products/kibana



================================================
FILE: bin.js
================================================
#!/usr/bin/env node
console.error(
  '`pino` cli has been removed. Use `pino-pretty` cli instead.\n' +
  '\nSee: https://github.com/pinojs/pino-pretty'
)
process.exit(1)



================================================
FILE: browser.js
================================================
'use strict'

const format = require('quick-format-unescaped')

module.exports = pino

const _console = pfGlobalThisOrFallback().console || {}
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue,
  errWithCause: asErrValue
}
function levelToValue (level, logger) {
  return level === 'silent'
    ? Infinity
    : logger.levels.values[level]
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs')
const hierarchySymbol = Symbol('pino.hierarchy')

const logFallbackMap = {
  error: 'log',
  fatal: 'error',
  warn: 'error',
  info: 'log',
  debug: 'log',
  trace: 'log'
}

function appendChildLogger (parentLogger, childLogger) {
  const newEntry = {
    logger: childLogger,
    parent: parentLogger[hierarchySymbol]
  }
  childLogger[hierarchySymbol] = newEntry
}

function setupBaseLogFunctions (logger, levels, proto) {
  const logFunctions = {}
  levels.forEach(level => {
    logFunctions[level] = proto[level] ? proto[level] : (_console[level] || _console[logFallbackMap[level] || 'log'] || noop)
  })
  logger[baseLogFunctionSymbol] = logFunctions
}

function shouldSerialize (serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function (k) {
      return k !== '!stdSerializers.err'
    })
    return hasToFilter
  } else if (serialize === true) {
    return Object.keys(serializers)
  }

  return false
}

function pino (opts) {
  opts = opts || {}
  opts.browser = opts.browser || {}

  const transmit = opts.browser.transmit
  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

  const proto = opts.browser.write || _console
  if (opts.browser.write) opts.browser.asObject = true
  const serializers = opts.serializers || {}
  const serialize = shouldSerialize(opts.browser.serialize, serializers)
  let stdErrSerialize = opts.browser.serialize

  if (
    Array.isArray(opts.browser.serialize) &&
    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
  ) stdErrSerialize = false

  const customLevels = Object.keys(opts.customLevels || {})
  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'].concat(customLevels)

  if (typeof proto === 'function') {
    levels.forEach(function (level) {
      proto[level] = proto
    })
  }
  if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent'
  const level = opts.level || 'info'
  const logger = Object.create(proto)
  if (!logger.log) logger.log = noop

  setupBaseLogFunctions(logger, levels, proto)
  // setup root hierarchy entry
  appendChildLogger({}, logger)

  Object.defineProperty(logger, 'levelVal', {
    get: getLevelVal
  })
  Object.defineProperty(logger, 'level', {
    get: getLevel,
    set: setLevel
  })

  const setOpts = {
    transmit,
    serialize,
    asObject: opts.browser.asObject,
    asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
    formatters: opts.browser.formatters,
    reportCaller: opts.browser.reportCaller,
    levels,
    timestamp: getTimeFunction(opts),
    messageKey: opts.messageKey || 'msg',
    onChild: opts.onChild || noop
  }
  logger.levels = getLevels(opts)
  logger.level = level

  logger.isLevelEnabled = function (level) {
    if (!this.levels.values[level]) {
      return false
    }

    return this.levels.values[level] >= this.levels.values[this.level]
  }
  logger.setMaxListeners = logger.getMaxListeners =
  logger.emit = logger.addListener = logger.on =
  logger.prependListener = logger.once =
  logger.prependOnceListener = logger.removeListener =
  logger.removeAllListeners = logger.listeners =
  logger.listenerCount = logger.eventNames =
  logger.write = logger.flush = noop
  logger.serializers = serializers
  logger._serialize = serialize
  logger._stdErrSerialize = stdErrSerialize
  logger.child = function (...args) { return child.call(this, setOpts, ...args) }

  if (transmit) logger._logEvent = createLogEventShape()

  function getLevelVal () {
    return levelToValue(this.level, this)
  }

  function getLevel () {
    return this._level
  }
  function setLevel (level) {
    if (level !== 'silent' && !this.levels.values[level]) {
      throw Error('unknown level ' + level)
    }
    this._level = level

    set(this, setOpts, logger, 'error') // <-- must stay first
    set(this, setOpts, logger, 'fatal')
    set(this, setOpts, logger, 'warn')
    set(this, setOpts, logger, 'info')
    set(this, setOpts, logger, 'debug')
    set(this, setOpts, logger, 'trace')

    customLevels.forEach((level) => {
      set(this, setOpts, logger, level)
    })
  }

  function child (setOpts, bindings, childOptions) {
    if (!bindings) {
      throw new Error('missing bindings for child Pino')
    }
    childOptions = childOptions || {}
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers
    }
    const childOptionsSerializers = childOptions.serializers
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers)
      var childSerialize = opts.browser.serialize === true
        ? Object.keys(childSerializers)
        : serialize
      delete bindings.serializers
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize)
    }
    function Child (parent) {
      this._childLevel = (parent._childLevel | 0) + 1

      // make sure bindings are available in the `set` function
      this.bindings = bindings

      if (childSerializers) {
        this.serializers = childSerializers
        this._serialize = childSerialize
      }
      if (transmit) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        )
      }
    }
    Child.prototype = this
    const newLogger = new Child(this)

    // must happen before the level is assigned
    appendChildLogger(this, newLogger)
    newLogger.child = function (...args) { return child.call(this, setOpts, ...args) }
    // required to actually initialize the logger functions for any given child
    newLogger.level = childOptions.level || this.level // allow level to be set by childOptions
    setOpts.onChild(newLogger)

    return newLogger
  }
  return logger
}

function getLevels (opts) {
  const customLevels = opts.customLevels || {}

  const values = Object.assign({}, pino.levels.values, customLevels)
  const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels))

  return {
    values,
    labels
  }
}

function invertObject (obj) {
  const inverted = {}
  Object.keys(obj).forEach(function (key) {
    inverted[obj[key]] = key
  })
  return inverted
}

pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: 'trace',
    20: 'debug',
    30: 'info',
    40: 'warn',
    50: 'error',
    60: 'fatal'
  }
}

pino.stdSerializers = stdSerializers
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime })

function getBindingChain (logger) {
  const bindings = []
  if (logger.bindings) {
    bindings.push(logger.bindings)
  }

  // traverse up the tree to get all bindings
  let hierarchy = logger[hierarchySymbol]
  while (hierarchy.parent) {
    hierarchy = hierarchy.parent
    if (hierarchy.logger.bindings) {
      bindings.push(hierarchy.logger.bindings)
    }
  }

  return bindings.reverse()
}

function set (self, opts, rootLogger, level) {
  // override the current log functions with either `noop` or the base log function
  Object.defineProperty(self, level, {
    value: (levelToValue(self.level, rootLogger) > levelToValue(level, rootLogger)
      ? noop
      : rootLogger[baseLogFunctionSymbol][level]),
    writable: true,
    enumerable: true,
    configurable: true
  })

  if (self[level] === noop) {
    if (!opts.transmit) return

    const transmitLevel = opts.transmit.level || self.level
    const transmitValue = levelToValue(transmitLevel, rootLogger)
    const methodValue = levelToValue(level, rootLogger)
    if (methodValue < transmitValue) return
  }

  // make sure the log format is correct
  self[level] = createWrap(self, opts, rootLogger, level)

  // prepend bindings if it is not the root logger
  const bindings = getBindingChain(self)
  if (bindings.length === 0) {
    // early exit in case for rootLogger
    return
  }
  self[level] = prependBindingsInArguments(bindings, self[level])
}

function prependBindingsInArguments (bindings, logFunc) {
  return function () {
    return logFunc.apply(this, [...bindings, ...arguments])
  }
}

function createWrap (self, opts, rootLogger, level) {
  return (function (write) {
    return function LOG () {
      const ts = opts.timestamp()
      const args = new Array(arguments.length)
      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this
      for (var i = 0; i < args.length; i++) args[i] = arguments[i]

      var argsIsSerialized = false
      if (opts.serialize) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize)
        argsIsSerialized = true
      }
      if (opts.asObject || opts.formatters) {
        const out = asObject(this, level, args, ts, opts)
        if (opts.reportCaller && out && out.length > 0 && out[0] && typeof out[0] === 'object') {
          try {
            const caller = getCallerLocation()
            if (caller) out[0].caller = caller
          } catch (e) {}
        }
        write.call(proto, ...out)
      } else {
        if (opts.reportCaller) {
          try {
            const caller = getCallerLocation()
            if (caller) args.push(caller)
          } catch (e) {}
        }
        write.apply(proto, args)
      }

      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || self._level
        const transmitValue = levelToValue(transmitLevel, rootLogger)
        const methodValue = levelToValue(level, rootLogger)
        if (methodValue < transmitValue) return
        transmit(this, {
          ts,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: rootLogger.levels.values[opts.transmit.level || self._level],
          send: opts.transmit.send,
          val: levelToValue(self._level, rootLogger)
        }, args, argsIsSerialized)
      }
    }
  })(self[baseLogFunctionSymbol][level])
}

function asObject (logger, level, args, ts, opts) {
  const {
    level: levelFormatter,
    log: logObjectFormatter = (obj) => obj
  } = opts.formatters || {}
  const argsCloned = args.slice()
  let msg = argsCloned[0]
  const logObject = {}

  let lvl = (logger._childLevel | 0) + 1
  if (lvl < 1) lvl = 1

  if (ts) {
    logObject.time = ts
  }

  if (levelFormatter) {
    const formattedLevel = levelFormatter(level, logger.levels.values[level])
    Object.assign(logObject, formattedLevel)
  } else {
    logObject.level = logger.levels.values[level]
  }

  if (opts.asObjectBindingsOnly) {
    if (msg !== null && typeof msg === 'object') {
      while (lvl-- && typeof argsCloned[0] === 'object') {
        Object.assign(logObject, argsCloned.shift())
      }
    }

    const formattedLogObject = logObjectFormatter(logObject)
    return [formattedLogObject, ...argsCloned]
  } else {
    // deliberate, catching objects, arrays
    if (msg !== null && typeof msg === 'object') {
      while (lvl-- && typeof argsCloned[0] === 'object') {
        Object.assign(logObject, argsCloned.shift())
      }
      msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined
    } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned)
    if (msg !== undefined) logObject[opts.messageKey] = msg

    const formattedLogObject = logObjectFormatter(logObject)
    return [formattedLogObject]
  }
}

function applySerializers (args, serialize, serializers, stdErrSerialize) {
  for (const i in args) {
    if (stdErrSerialize && args[i] instanceof Error) {
      args[i] = pino.stdSerializers.err(args[i])
    } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
      for (const k in args[i]) {
        if (serialize.indexOf(k) > -1 && k in serializers) {
          args[i][k] = serializers[k](args[i][k])
        }
      }
    }
  }
}

function transmit (logger, opts, args, argsIsSerialized = false) {
  const send = opts.send
  const ts = opts.ts
  const methodLevel = opts.methodLevel
  const methodValue = opts.methodValue
  const val = opts.val
  const bindings = logger._logEvent.bindings

  if (!argsIsSerialized) {
    applySerializers(
      args,
      logger._serialize || Object.keys(logger.serializers),
      logger.serializers,
      logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
    )
  }

  logger._logEvent.ts = ts
  logger._logEvent.messages = args.filter(function (arg) {
    // bindings can only be objects, so reference equality check via indexOf is fine
    return bindings.indexOf(arg) === -1
  })

  logger._logEvent.level.label = methodLevel
  logger._logEvent.level.value = methodValue

  send(methodLevel, logger._logEvent, val)

  logger._logEvent = createLogEventShape(bindings)
}

function createLogEventShape (bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: '', value: 0 }
  }
}

function asErrValue (err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  }
  for (const key in err) {
    if (obj[key] === undefined) {
      obj[key] = err[key]
    }
  }
  return obj
}

function getTimeFunction (opts) {
  if (typeof opts.timestamp === 'function') {
    return opts.timestamp
  }
  if (opts.timestamp === false) {
    return nullTime
  }
  return epochTime
}

function mock () { return {} }
function passthrough (a) { return a }
function noop () {}

function nullTime () { return false }
function epochTime () { return Date.now() }
function unixTime () { return Math.round(Date.now() / 1000.0) }
function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

/* eslint-disable */
/* istanbul ignore next */
function pfGlobalThisOrFallback () {
  function defd (o) { return typeof o !== 'undefined' && o }
  try {
    if (typeof globalThis !== 'undefined') return globalThis
    Object.defineProperty(Object.prototype, 'globalThis', {
      get: function () {
        delete Object.prototype.globalThis
        return (this.globalThis = this)
      },
      configurable: true
    })
    return globalThis
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {}
  }
}
/* eslint-enable */

module.exports.default = pino
module.exports.pino = pino

// Attempt to extract the user callsite (file:line:column)
/* istanbul ignore next */
function getCallerLocation () {
  const stack = (new Error()).stack
  if (!stack) return null
  const lines = stack.split('\n')
  for (let i = 1; i < lines.length; i++) {
    const l = lines[i].trim()
    // skip frames from this file and internals
    if (/(^at\s+)?(createWrap|LOG|set\s*\(|asObject|Object\.apply|Function\.apply)/.test(l)) continue
    if (l.indexOf('browser.js') !== -1) continue
    if (l.indexOf('node:internal') !== -1) continue
    if (l.indexOf('node_modules') !== -1) continue
    // try formats like: at func (file:line:col) or at file:line:col
    let m = l.match(/\((.*?):(\d+):(\d+)\)/)
    if (!m) m = l.match(/at\s+(.*?):(\d+):(\d+)/)
    if (m) {
      const file = m[1]
      const line = m[2]
      const col = m[3]
      return file + ':' + line + ':' + col
    }
  }
  return null
}



================================================
FILE: CNAME
================================================
getpino.io


================================================
FILE: CONTRIBUTING.md
================================================
# Pino is an OPEN Open Source Project

## What?

Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

## Rules

Before you start coding, please read [Contributing to projects with git](https://jrfom.com/posts/2017/03/08/a-primer-on-contributing-to-projects-with-git/). 

Notice that as long as you don't have commit-access to the project, you have to fork the project and open PRs from the feature branches of the forked project.

There are a few basic ground-rules for contributors:

1. **No `--force` pushes** on `main` or modifying the Git history in any way after a PR has been merged.
1. **Non-main branches** ought to be used for ongoing work.
1. **Non-trivial changes** ought to be subject to an **internal pull-request** to solicit feedback from other contributors.
1. All pull-requests for new features **must** target the `main` branch. PRs to fix bugs in LTS releases are also allowed.
1. Contributors should attempt to adhere to the prevailing code-style.
1. 100% code coverage

## Releases

Declaring formal releases remains the prerogative of the project maintainer.

## Changes to this arrangement

This is an experiment and feedback is welcome! This document may also be subject to pull-requests or changes by contributors where you believe you have something valuable to add or change.

-----------------------------------------


================================================
FILE: eslint.config.js
================================================
'use strict'

const { defineConfig, globalIgnores } = require('eslint/config')
const neostandard = require('neostandard')

module.exports = defineConfig([
  neostandard({}),
  globalIgnores([
    'pino.d.ts',
    'test/types/pino.test-d.ts',
    'test/fixtures/syntax-error-esm.mjs',
    'test/fixtures/ts/*cjs',
  ]),
  {
    rules: {
      'no-var': 'off',
    },
  },
])



================================================
FILE: file.js
================================================
'use strict'

const pino = require('./pino')
const { once } = require('node:events')

module.exports = async function (opts = {}) {
  const destOpts = Object.assign({}, opts, { dest: opts.destination || 1, sync: false })
  delete destOpts.destination
  const destination = pino.destination(destOpts)
  await once(destination, 'ready')
  return destination
}



================================================
FILE: inc-version.sh
================================================
#!/bin/bash 

set -e

PATH=./node_modules/.bin:${PATH}
CURRENT_VERSION=$(jq -r .version package.json)

case ${1} in
  Major | MAJOR | major)
    LEVEL=major
    ;;

  Minor | MINOR | minor)
    LEVEL=minor
    ;;

  Patch | PATCH | patch)
    LEVEL=patch
    ;;

  *)
    LEVEL=patch
    ;;
esac

NEW_VERSION=$(semver -i ${LEVEL} ${CURRENT_VERSION})
echo "${CURRENT_VERSION} => ${NEW_VERSION}"
read -n 1 -s -r -p "Press any key to continue (ctrl+c to abort)..."
echo ""

echo "Patching package.json..."
cat package.json | \
  jq --arg vers "${NEW_VERSION}" '.version = $vers' | \
  tee package.json 1>/dev/null

echo "Patching lib/meta.js ..."
SED_SCRIPT=$(printf 's/%s/%s/' ${CURRENT_VERSION//\./\\.} ${NEW_VERSION//\./\\.})
cat ./lib/meta.js | \
  sed -e ${SED_SCRIPT} | \
  tee ./lib/meta.js 1>/dev/null

echo "Done."



================================================
FILE: index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pino - Super fast, all natural JSON logger for Node.js</title>
  <meta name="description" content="Super fast, all natural JSON logger for Node.js">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//unpkg.com/docsify-themeable/dist/css/theme-simple.css">
  <style>
    :root {
      --base-font-size: 16px;
      --theme-color: rgb(104, 118, 52);
      --link-color:  rgb(104, 118, 52);
      --link-color--hover: rgb(137, 152, 100);
      --sidebar-name-margin: 0;
      --sidebar-name-padding: 0;
      --code-font-size: .9em;
    }
    .sidebar > h1 {
      margin-bottom: -.75em;
      margin-top: .75em;
    }
    .sidebar > h1 img {
      height: 4em;
    }
    .markdown-section a code {
      color: var(--link-color)!important;
    }
    .markdown-section code:not([class*="lang-"]):not([class*="language-"]) {
      white-space: unset
    }
  </style>
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
</head>
<body>
  <div id="app"></div>
</body>
<script>
  window.$docsify = {
    name: 'pino',
    logo: './pino-tree.png',
    loadSidebar: 'docsify/sidebar.md',
    repo: 'https://github.com/pinojs/pino',
    auto2top: true,
    ga: 'UA-103155139-1'
  }
</script>
<script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
<script src="//unpkg.com/docsify/lib/plugins/search.min.js"></script>
<script src="//unpkg.com/docsify/lib/plugins/ga.min.js"></script>
<!-- To enable syntax highlighting on TypeScript codes: -->
<script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-typescript.min.js"></script>

</html>



================================================
FILE: LICENSE
================================================
The MIT License (MIT)

Copyright (c) 2016-2025 Matteo Collina, David Mark Clements and the Pino contributors listed at <https://github.com/pinojs/pino#the-team> and in the README file.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: package.json
================================================
{
  "name": "pino",
  "version": "10.1.0",
  "description": "super fast, all natural json logger",
  "main": "pino.js",
  "type": "commonjs",
  "types": "pino.d.ts",
  "browser": "./browser.js",
  "scripts": {
    "borp": "borp --timeout 60000 --coverage --check-coverage --lines 95 --functions 95 --branches 95 --statements 95",
    "docs": "docsify serve",
    "browser-test": "airtap --local 8080 test/browser*test.js",
    "lint": "eslint .",
    "prepublishOnly": "node test/internals/version.test.js",
    "test": "npm run lint && npm run transpile && npm run borp && jest test/jest && npm run test-types",
    "test-ci": "npm run lint && npm run transpile && npm run borp && npm run test-types",
    "test-ci-pnpm": "pnpm run lint && npm run transpile && borp --timeout 60000 && pnpm run test-types",
    "test-ci-yarn-pnp": "yarn run lint && npm run transpile && borp --timeout 60000",
    "test-types": "tsc && tsd && ts-node test/types/pino.ts && attw --pack .",
    "test:smoke": "smoker smoke:pino && smoker smoke:browser && smoker smoke:file",
    "smoke:pino": "node ./pino.js",
    "smoke:browser": "node ./browser.js",
    "smoke:file": "node ./file.js",
    "transpile": "node ./test/fixtures/ts/transpile.cjs",
    "cov-ui": "tap --ts --coverage-report=html",
    "bench": "node benchmarks/utils/runbench all",
    "bench-basic": "node benchmarks/utils/runbench basic",
    "bench-object": "node benchmarks/utils/runbench object",
    "bench-deep-object": "node benchmarks/utils/runbench deep-object",
    "bench-multi-arg": "node benchmarks/utils/runbench multi-arg",
    "bench-long-string": "node benchmarks/utils/runbench long-string",
    "bench-child": "node benchmarks/utils/runbench child",
    "bench-child-child": "node benchmarks/utils/runbench child-child",
    "bench-child-creation": "node benchmarks/utils/runbench child-creation",
    "bench-formatters": "node benchmarks/utils/runbench formatters",
    "update-bench-doc": "node benchmarks/utils/generate-benchmark-doc > docs/benchmarks.md"
  },
  "bin": {
    "pino": "./bin.js"
  },
  "precommit": "test",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pinojs/pino.git"
  },
  "keywords": [
    "fast",
    "logger",
    "stream",
    "json"
  ],
  "author": "Matteo Collina <hello@matteocollina.com>",
  "contributors": [
    "David Mark Clements <huperekchuno@googlemail.com>",
    "James Sumners <james.sumners@gmail.com>",
    "Thomas Watson Steen <w@tson.dk> (https://twitter.com/wa7son)"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/pinojs/pino/issues"
  },
  "homepage": "https://getpino.io",
  "devDependencies": {
    "@arethetypeswrong/cli": "^0.18.1",
    "@matteo.collina/tspl": "^0.2.0",
    "@types/flush-write-stream": "^1.0.0",
    "@types/node": "^24.0.8",
    "airtap": "5.0.0",
    "bole": "^5.0.5",
    "borp": "^0.21.0",
    "bunyan": "^1.8.14",
    "debug": "^4.3.4",
    "docsify-cli": "^4.4.4",
    "eslint": "^9.37.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "17.23.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.0.0",
    "execa": "^5.0.0",
    "fastbench": "^1.0.1",
    "flush-write-stream": "^2.0.0",
    "import-fresh": "^3.2.1",
    "jest": "^30.0.3",
    "log": "^6.0.0",
    "loglevel": "^1.6.7",
    "midnight-smoker": "1.1.1",
    "neostandard": "^0.12.2",
    "pino-pretty": "^13.0.0",
    "pre-commit": "^1.2.2",
    "proxyquire": "^2.1.3",
    "pump": "^3.0.0",
    "rimraf": "^6.0.1",
    "semver": "^7.3.7",
    "split2": "^4.0.0",
    "steed": "^1.1.3",
    "strip-ansi": "^6.0.0",
    "tape": "^5.5.3",
    "through2": "^4.0.0",
    "ts-node": "^10.9.1",
    "tsd": "^0.33.0",
    "typescript": "~5.9.2",
    "winston": "^3.7.2"
  },
  "dependencies": {
    "atomic-sleep": "^1.0.0",
    "on-exit-leak-free": "^2.1.0",
    "pino-abstract-transport": "^3.0.0",
    "pino-std-serializers": "^7.0.0",
    "process-warning": "^5.0.0",
    "quick-format-unescaped": "^4.0.3",
    "real-require": "^0.2.0",
    "safe-stable-stringify": "^2.3.1",
    "@pinojs/redact": "^0.4.0",
    "sonic-boom": "^4.0.1",
    "thread-stream": "^3.0.0"
  },
  "tsd": {
    "directory": "test/types"
  }
}



================================================
FILE: pino.d.ts
================================================
// Project: https://github.com/pinojs/pino.git, http://getpino.io
// Definitions by: Peter Snider <https://github.com/psnider>
//                 BendingBender <https://github.com/BendingBender>
//                 Christian Rackerseder <https://github.com/screendriver>
//                 GP <https://github.com/paambaati>
//                 Alex Ferrando <https://github.com/alferpal>
//                 Oleksandr Sidko <https://github.com/mortiy>
//                 Harris Lummis <https://github.com/lummish>
//                 Raoul Jaeckel <https://github.com/raoulus>
//                 Cory Donkin <https://github.com/Cooryd>
//                 Adam Vigneaux <https://github.com/AdamVig>
//                 Austin Beer <https://github.com/austin-beer>
//                 Michel Nemnom <https://github.com/Pegase745>
//                 Igor Savin <https://github.com/kibertoad>
//                 James Bromwell <https://github.com/thw0rted>
// TypeScript Version: 4.4

import type { EventEmitter } from "events";
import * as pinoStdSerializers from "pino-std-serializers";
import type { SonicBoom, SonicBoomOpts } from "sonic-boom";
import type { WorkerOptions } from "worker_threads";

declare namespace pino {
    //// Non-exported types and interfaces

    // ToDo https://github.com/pinojs/thread-stream/issues/24
    type ThreadStream = any

    type TimeFn = () => string;
    type MixinFn<CustomLevels extends string = never> = (mergeObject: object, level: number, logger:Logger<CustomLevels>) => object;
    type MixinMergeStrategyFn = (mergeObject: object, mixinObject: object) => object;

    type CustomLevelLogger<CustomLevels extends string, UseOnlyCustomLevels extends boolean = boolean> = { 
        /**
         * Define additional logging levels.
         */
        customLevels: { [level in CustomLevels]: number };
        /**
         * Use only defined `customLevels` and omit Pino's levels.
         */
        useOnlyCustomLevels: UseOnlyCustomLevels;
    } & {
        // This will override default log methods
        [K in Exclude<Level, CustomLevels>]: UseOnlyCustomLevels extends true ? never : LogFn;
    } & {
        [level in CustomLevels]: LogFn;
    };

    /**
    * A synchronous callback that will run on each creation of a new child.
    * @param child: The newly created child logger instance.
    */
    type OnChildCallback<CustomLevels extends string = never> = (child: Logger<CustomLevels>) => void

    export interface redactOptions {
        paths: string[];
        censor?: string | ((value: unknown, path: string[]) => unknown);
        remove?: boolean;
    }

    export interface LoggerExtras<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean> extends EventEmitter {
        /**
         * Exposes the Pino package version. Also available on the exported pino function.
         */
        readonly version: string;

        levels: LevelMapping;

        /**
         * Outputs the level as a string instead of integer.
         */
        useLevelLabels: boolean;
        /**
         * Returns the integer value for the logger instance's logging level.
         */
        levelVal: number;

        /**
         * Creates a child logger, setting all key-value pairs in `bindings` as properties in the log lines. All serializers will be applied to the given pair.
         * Child loggers use the same output stream as the parent and inherit the current log level of the parent at the time they are spawned.
         * From v2.x.x the log level of a child is mutable (whereas in v1.x.x it was immutable), and can be set independently of the parent.
         * If a `level` property is present in the object passed to `child` it will override the child logger level.
         *
         * @param bindings: an object of key-value pairs to include in log lines as properties.
         * @param options: an options object that will override child logger inherited options.
         * @returns a child logger instance.
         */
        child<ChildCustomLevels extends string = never>(bindings: Bindings, options?: ChildLoggerOptions<ChildCustomLevels>): Logger<CustomLevels | ChildCustomLevels>;

        /**
         * This can be used to modify the callback function on creation of a new child.
         */
        onChild: OnChildCallback<CustomLevels>;

        /**
         * Registers a listener function that is triggered when the level is changed.
         * Note: When browserified, this functionality will only be available if the `events` module has been required elsewhere
         * (e.g. if you're using streams in the browser). This allows for a trade-off between bundle size and functionality.
         *
         * @param event: only ever fires the `'level-change'` event
         * @param listener: The listener is passed four arguments: `levelLabel`, `levelValue`, `previousLevelLabel`, `previousLevelValue`.
         */
        on(event: "level-change", listener: LevelChangeEventListener<CustomLevels, UseOnlyCustomLevels>): this;
        addListener(event: "level-change", listener: LevelChangeEventListener<CustomLevels, UseOnlyCustomLevels>): this;
        once(event: "level-change", listener: LevelChangeEventListener<CustomLevels, UseOnlyCustomLevels>): this;
        prependListener(event: "level-change", listener: LevelChangeEventListener<CustomLevels, UseOnlyCustomLevels>): this;
        prependOnceListener(event: "level-change", listener: LevelChangeEventListener<CustomLevels, UseOnlyCustomLevels>): this;
        removeListener(event: "level-change", listener: LevelChangeEventListener<CustomLevels, UseOnlyCustomLevels>): this;

        /**
         * A utility method for determining if a given log level will write to the destination.
         */
        isLevelEnabled(level: LevelWithSilentOrString): boolean;

        /**
         * Returns an object containing all the current bindings, cloned from the ones passed in via logger.child().
         */
        bindings(): Bindings;

        /**
         * Adds to the bindings of this logger instance.
         * Note: Does not overwrite bindings. Can potentially result in duplicate keys in log lines.
         *
         * @param bindings: an object of key-value pairs to include in log lines as properties.
         */
        setBindings(bindings: Bindings): void;

        /**
         * Flushes the content of the buffer when using pino.destination({ sync: false }).
         * call the callback when finished
         */
        flush(cb?: (err?: Error) => void): void;
    }

    //// Exported types and interfaces
    export interface BaseLogger {
        /**
         * Set this property to the desired logging level. In order of priority, available levels are:
         *
         * - 'fatal'
         * - 'error'
         * - 'warn'
         * - 'info'
         * - 'debug'
         * - 'trace'
         *
         * The logging level is a __minimum__ level. For instance if `logger.level` is `'info'` then all `'fatal'`, `'error'`, `'warn'`,
         * and `'info'` logs will be enabled.
         *
         * You can pass `'silent'` to disable logging.
         */
        level: LevelWithSilentOrString;

        /**
         * Log at `'fatal'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @typeParam T: the interface of the object being serialized. Default is object.
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        fatal: LogFn;
        /**
         * Log at `'error'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @typeParam T: the interface of the object being serialized. Default is object.
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        error: LogFn;
        /**
         * Log at `'warn'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @typeParam T: the interface of the object being serialized. Default is object.
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        warn: LogFn;
        /**
         * Log at `'info'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @typeParam T: the interface of the object being serialized. Default is object.
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        info: LogFn;
        /**
         * Log at `'debug'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @typeParam T: the interface of the object being serialized. Default is object.
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        debug: LogFn;
        /**
         * Log at `'trace'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @typeParam T: the interface of the object being serialized. Default is object.
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        trace: LogFn;
        /**
         * Noop function.
         */
        silent: LogFn;

        /**
         * Get `msgPrefix` of the logger instance.
         *
         * See {@link https://github.com/pinojs/pino/blob/main/docs/api.md#msgprefix-string}.
         */
        get msgPrefix(): string | undefined;
    }

    export type Bindings = Record<string, any>;

    export type Level = "fatal" | "error" | "warn" | "info" | "debug" | "trace";
    export type LevelOrString = Level | (string & {});
    export type LevelWithSilent = Level | "silent";
    export type LevelWithSilentOrString = LevelWithSilent | (string & {});

    export type SerializerFn = (value: any) => any;
    export type WriteFn = (o: object) => void;

    export type LevelChangeEventListener<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean> = (
        lvl: LevelWithSilentOrString,
        val: number,
        prevLvl: LevelWithSilentOrString,
        prevVal: number,
        logger: Logger<CustomLevels, UseOnlyCustomLevels>
    ) => void;

    export type LogDescriptor = Record<string, any>;

    export type Logger<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean> = BaseLogger & LoggerExtras<CustomLevels> & CustomLevelLogger<CustomLevels, UseOnlyCustomLevels>;

    export type SerializedError = pinoStdSerializers.SerializedError;
    export type SerializedResponse = pinoStdSerializers.SerializedResponse;
    export type SerializedRequest = pinoStdSerializers.SerializedRequest;


    export interface TransportTargetOptions<TransportOptions = Record<string, any>> {
        target: string
        options?: TransportOptions
        level?: LevelWithSilentOrString
    }

    export interface TransportBaseOptions<TransportOptions = Record<string, any>> {
        options?: TransportOptions
        worker?: WorkerOptions & { autoEnd?: boolean}
    }

    export interface TransportSingleOptions<TransportOptions = Record<string, any>> extends TransportBaseOptions<TransportOptions>{
        target: string
    }

    export interface TransportPipelineOptions<TransportOptions = Record<string, any>> extends TransportBaseOptions<TransportOptions>{
        pipeline: TransportSingleOptions<TransportOptions>[]
        level?: LevelWithSilentOrString
    }

    export interface TransportMultiOptions<TransportOptions = Record<string, any>> extends TransportBaseOptions<TransportOptions>{
        targets: readonly (TransportTargetOptions<TransportOptions>|TransportPipelineOptions<TransportOptions>)[],
        levels?: Record<string, number>
        dedupe?: boolean
    }

    export interface MultiStreamOptions {
        levels?: Record<string, number>
        dedupe?: boolean
    }

    export interface DestinationStream {
        write(msg: string): void;
    }

    interface DestinationStreamHasMetadata {
      [symbols.needsMetadataGsym]: true;
      lastLevel: number;
      lastTime: string;
      lastMsg: string;
      lastObj: object;
      lastLogger: Logger;
    }

    export type DestinationStreamWithMetadata = DestinationStream & ({ [symbols.needsMetadataGsym]?: false } | DestinationStreamHasMetadata);

    export interface StreamEntry<TLevel = Level> {
        stream: DestinationStream
        level?: TLevel
    }

    export interface MultiStreamRes<TOriginLevel = Level> {
        write: (data: any) => void,
        add: <TLevel = Level>(dest: StreamEntry<TLevel> | DestinationStream) => MultiStreamRes<TOriginLevel & TLevel>,
        flushSync: () => void,
        minLevel: number,
        streams: StreamEntry<TOriginLevel>[],
        clone<TLevel = Level>(level: TLevel): MultiStreamRes<TLevel>,
    }

    export interface LevelMapping {
        /**
         * Returns the mappings of level names to their respective internal number representation.
         */
        values: { [level: string]: number };
        /**
         * Returns the mappings of level internal level numbers to their string representations.
         */
        labels: { [level: number]: string };
    }

    type PlaceholderSpecifier = 'd' | 's' | 'j' | 'o' | 'O';
    type PlaceholderTypeMapping<T extends PlaceholderSpecifier> = T extends 'd'
        ? number
        : T extends 's'
            ? unknown
            : T extends 'j' | 'o' | 'O'
            ? object
            : never;

    type ParseLogFnArgs<
        T,
        Acc extends unknown[] = [],
    > = T extends `${infer _}%${infer Placeholder}${infer Rest}`
        ? Placeholder extends PlaceholderSpecifier
            ? ParseLogFnArgs<Rest, [...Acc, PlaceholderTypeMapping<Placeholder>]>
            : ParseLogFnArgs<Rest, Acc>
        : Acc;

    export interface LogFnFields {}

    export interface LogFn {
        // Simple case: When first argument is always a string message, use parsed arguments directly
        <TMsg extends string = string>(msg: TMsg, ...args: ParseLogFnArgs<TMsg>): void;
        // Complex case: When first argument can be any type - if it's a string, no message needed; otherwise require a message
        <T, TMsg extends string = string>(obj: [T] extends [object] ? T & LogFnFields : T, msg?: T extends string ? never: TMsg, ...args: ParseLogFnArgs<TMsg> | []): void;
        // Complex case with type safety: Same as above but ensures ParseLogFnArgs is a valid tuple before using it
        <T, TMsg extends string = string>(obj: [T] extends [object] ? T & LogFnFields : T, msg?: T extends string ? never : TMsg, ...args: ParseLogFnArgs<TMsg> extends [unknown, ...unknown[]] ? ParseLogFnArgs<TMsg> : unknown[]): void;
    }

    export interface LoggerOptions<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean> {
        transport?: TransportSingleOptions | TransportMultiOptions | TransportPipelineOptions
        /**
         * Avoid error causes by circular references in the object tree. Default: `true`.
         */
        safe?: boolean;
        /**
         * The name of the logger. Default: `undefined`.
         */
        name?: string;
        /**
         * an object containing functions for custom serialization of objects.
         * These functions should return an JSONifiable object and they should never throw. When logging an object,
         * each top-level property matching the exact key of a serializer will be serialized using the defined serializer.
         */
        serializers?: { [key: string]: SerializerFn };
        /**
         * Enables or disables the inclusion of a timestamp in the log message. If a function is supplied, it must
         * synchronously return a JSON string representation of the time. If set to `false`, no timestamp will be included in the output.
         * See stdTimeFunctions for a set of available functions for passing in as a value for this option.
         * Caution: any sort of formatted time will significantly slow down Pino's performance.
         */
        timestamp?: TimeFn | boolean;
        /**
         * One of the supported levels or `silent` to disable logging. Any other value defines a custom level and
         * requires supplying a level value via `levelVal`. Default: 'info'.
         */
        level?: LevelWithSilentOrString;

        /**
         * Use this option to define additional logging levels.
         * The keys of the object correspond the namespace of the log level, and the values should be the numerical value of the level.
         */
        customLevels?: { [level in CustomLevels]: number };

        /**
         * Use this option to only use defined `customLevels` and omit Pino's levels.
         * Logger's default `level` must be changed to a value in `customLevels` in order to use `useOnlyCustomLevels`
         * Warning: this option may not be supported by downstream transports.
         */
        useOnlyCustomLevels?: UseOnlyCustomLevels;

        /**
         *  Use this option to define custom comparison of log levels.
         *  Useful to compare custom log levels or non-standard level values.
         *  Default: "ASC"
         */
        levelComparison?: "ASC" | "DESC" | ((current: number, expected: number) => boolean);

        /**
         * If provided, the `mixin` function is called each time one of the active logging methods
         * is called. The function must synchronously return an object. The properties of the
         * returned object will be added to the logged JSON.
         */
        mixin?: MixinFn<CustomLevels>;

        /**
         * If provided, the `mixinMergeStrategy` function is called each time one of the active
         * logging methods is called. The first parameter is the value `mergeObject` or an empty object,
         * the second parameter is the value resulting from `mixin()` or an empty object.
         * The function must synchronously return an object.
         */
        mixinMergeStrategy?: MixinMergeStrategyFn

        /**
         * As an array, the redact option specifies paths that should have their values redacted from any log output.
         *
         * Each path must be a string using a syntax which corresponds to JavaScript dot and bracket notation.
         *
         * If an object is supplied, three options can be specified:
         *
         *      paths (String[]): Required. An array of paths
         *      censor (String): Optional. A value to overwrite key which are to be redacted. Default: '[Redacted]'
         *      remove (Boolean): Optional. Instead of censoring the value, remove both the key and the value. Default: false
         */
        redact?: string[] | redactOptions;

        /**
         * When defining a custom log level via level, set to an integer value to define the new level. Default: `undefined`.
         */
        levelVal?: number;
        /**
         * The string key for the 'message' in the JSON object. Default: "msg".
         */
        messageKey?: string;
        /**
         * The string key for the 'error' in the JSON object. Default: "err".
         */
        errorKey?: string;
        /**
         * The string key to place any logged object under.
         */
        nestedKey?: string;
        /**
         * Enables logging. Default: `true`.
         */
        enabled?: boolean;
        /**
         * Browser only, see http://getpino.io/#/docs/browser.
         */
        browser?: {
            /**
             * The `asObject` option will create a pino-like log object instead of passing all arguments to a console
             * method. When `write` is set, `asObject` will always be true.
             *
             * @example
             * pino.info('hi') // creates and logs {msg: 'hi', level: 30, time: <ts>}
             */
            asObject?: boolean;
            /**
             * The `asObjectBindingsOnly` option is similar to `asObject` but will keep the message and arguments
             * unformatted. This allows to defer formatting the message to the actual call to `console` methods,
             * where browsers then have richer formatting in their devtools than when pino will format the message to
             * a string first.
             *
             * @example
             * pino.info('hello %s', 'world') // creates and logs {level: 30, time: <ts>}, 'hello %s', 'world'
             */
            asObjectBindingsOnly?: boolean;
            formatters?: {
                /**
                 * Changes the shape of the log level.
                 * The default shape is { level: number }.
                 */
                level?: (label: string, number: number) => object;
                /**
                 * Changes the shape of the log object.
                 */
                log?: (object: Record<string, unknown>) => Record<string, unknown>;
            }
            /**
             * When true, attempts to capture and include the caller location (file:line:column).
             * In object mode, adds a `caller` string property to the logged object.
             * Otherwise, appends the caller string as an extra console argument.
             * This is a browser-only, best-effort feature.
             */
            reportCaller?: boolean;
            /**
             * Instead of passing log messages to `console.log` they can be passed to a supplied function. If `write` is
             * set to a single function, all logging objects are passed to this function. If `write` is an object, it
             * can have methods that correspond to the levels. When a message is logged at a given level, the
             * corresponding method is called. If a method isn't present, the logging falls back to using the `console`.
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     write: (o) => {
             *       // do something with o
             *     }
             *   }
             * })
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     write: {
             *       info: function (o) {
             *         //process info log object
             *       },
             *       error: function (o) {
             *         //process error log object
             *       }
             *     }
             *   }
             * })
             */
            write?:
                | WriteFn
                | ({
                fatal?: WriteFn;
                error?: WriteFn;
                warn?: WriteFn;
                info?: WriteFn;
                debug?: WriteFn;
                trace?: WriteFn;
            } & { [logLevel: string]: WriteFn });

            /**
             * The serializers provided to `pino` are ignored by default in the browser, including the standard
             * serializers provided with Pino. Since the default destination for log messages is the console, values
             * such as `Error` objects are enhanced for inspection, which they otherwise wouldn't be if the Error
             * serializer was enabled. We can turn all serializers on or we can selectively enable them via an array.
             *
             * When `serialize` is `true` the standard error serializer is also enabled (see
             * {@link https://github.com/pinojs/pino/blob/master/docs/api.md#pino-stdserializers}). This is a global
             * serializer which will apply to any `Error` objects passed to the logger methods.
             *
             * If `serialize` is an array the standard error serializer is also automatically enabled, it can be
             * explicitly disabled by including a string in the serialize array: `!stdSerializers.err` (see example).
             *
             * The `serialize` array also applies to any child logger serializers (see
             * {@link https://github.com/pinojs/pino/blob/master/docs/api.md#bindingsserializers-object} for how to
             * set child-bound serializers).
             *
             * Unlike server pino the serializers apply to every object passed to the logger method, if the `asObject`
             * option is `true`, this results in the serializers applying to the first object (as in server pino).
             *
             * For more info on serializers see
             * {@link https://github.com/pinojs/pino/blob/master/docs/api.md#serializers-object}.
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     serialize: true
             *   }
             * })
             *
             * @example
             * const pino = require('pino')({
             *   serializers: {
             *     custom: myCustomSerializer,
             *     another: anotherSerializer
             *   },
             *   browser: {
             *     serialize: ['custom']
             *   }
             * })
             * // following will apply myCustomSerializer to the custom property,
             * // but will not apply anotherSerializer to another key
             * pino.info({custom: 'a', another: 'b'})
             *
             * @example
             * const pino = require('pino')({
             *   serializers: {
             *     custom: myCustomSerializer,
             *     another: anotherSerializer
             *   },
             *   browser: {
             *     serialize: ['!stdSerializers.err', 'custom'] //will not serialize Errors, will serialize `custom` keys
             *   }
             * })
             */
            serialize?: boolean | string[];

            /**
             * Options for transmission of logs.
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     transmit: {
             *       level: 'warn',
             *       send: function (level, logEvent) {
             *         if (level === 'warn') {
             *           // maybe send the logEvent to a separate endpoint
             *           // or maybe analyse the messages further before sending
             *         }
             *         // we could also use the `logEvent.level.value` property to determine
             *         // numerical value
             *         if (logEvent.level.value >= 50) { // covers error and fatal
             *
             *           // send the logEvent somewhere
             *         }
             *       }
             *     }
             *   }
             * })
             */
            transmit?: {
                /**
                 * Specifies the minimum level (inclusive) of when the `send` function should be called, if not supplied
                 * the `send` function will be called based on the main logging `level` (set via `options.level`,
                 * defaulting to `info`).
                 */
                level?: LevelOrString;
                /**
                 * Remotely record log messages.
                 *
                 * @description Called after writing the log message.
                 */
                send: (level: Level, logEvent: LogEvent) => void;
            };
            /**
             * The disabled option will disable logging in browser if set to true, by default it is set to false.
             *
             * @example
             * const pino = require('pino')({browser: {disabled: true}})
             */
            disabled?: boolean;
        };
        /**
         * key-value object added as child logger to each log line. If set to null the base child logger is not added
         */
        base?: { [key: string]: any } | null;

        /**
         * An object containing functions for formatting the shape of the log lines.
         * These functions should return a JSONifiable object and should never throw.
         * These functions allow for full customization of the resulting log lines.
         * For example, they can be used to change the level key name or to enrich the default metadata.
         */
        formatters?: {
            /**
             * Changes the shape of the log level.
             * The default shape is { level: number }.
             * The function takes two arguments, the label of the level (e.g. 'info') and the numeric value (e.g. 30).
             */
            level?: (label: string, number: number) => object;
            /**
             * Changes the shape of the bindings.
             * The default shape is { pid, hostname }.
             * The function takes a single argument, the bindings object.
             * It will be called every time a child logger is created.
             */
            bindings?: (bindings: Bindings) => object;
            /**
             * Changes the shape of the log object.
             * This function will be called every time one of the log methods (such as .info) is called.
             * All arguments passed to the log method, except the message, will be pass to this function.
             * By default it does not change the shape of the log object.
             */
            log?: (object: Record<string, unknown>) => Record<string, unknown>;
        };

        /**
         * A string that would be prefixed to every message (and child message)
         */
        msgPrefix?: string

        /**
         * An object mapping to hook functions. Hook functions allow for customizing internal logger operations.
         * Hook functions must be synchronous functions.
         */
        hooks?: {
            /**
             * Allows for manipulating the parameters passed to logger methods. The signature for this hook is
             * logMethod (args, method, level) {}, where args is an array of the arguments that were passed to the
             * log method and method is the log method itself, and level is the log level. This hook must invoke the method function by
             * using apply, like so: method.apply(this, newArgumentsArray).
             */
            logMethod?: (this: Logger, args: Parameters<LogFn>, method: LogFn, level: number) => void;

            /**
             * Allows for manipulating the stringified JSON log output just before writing to various transports.
             * This function must return a string and must be valid JSON.
             */
            streamWrite?: (s: string) => string;
        };

        /**
         * Stringification limit at a specific nesting depth when logging circular object. Default: `5`.
         */
         depthLimit?: number

         /**
          * Stringification limit of properties/elements when logging a specific object/array with circular references. Default: `100`.
          */
          edgeLimit?: number

        /**
         * Optional child creation callback.
         */
        onChild?: OnChildCallback<CustomLevels>;

        /**
         * logs newline delimited JSON with `\r\n` instead of `\n`. Default: `false`.
         */
        crlf?: boolean;
    }

    export interface ChildLoggerOptions<CustomLevels extends string = never> {
        level?: LevelOrString;
        serializers?: { [key: string]: SerializerFn };
        customLevels?: { [level in CustomLevels]: number };
        formatters?: {
            level?: (label: string, number: number) => object;
            bindings?: (bindings: Bindings) => object;
            log?: (object: object) => object;
        };
        redact?: string[] | redactOptions;
        msgPrefix?: string
    }

    /**
     * A data structure representing a log message, it represents the arguments passed to a logger statement, the level
     * at which they were logged and the hierarchy of child bindings.
     *
     * @description By default serializers are not applied to log output in the browser, but they will always be applied
     * to `messages` and `bindings` in the `logEvent` object. This allows  us to ensure a consistent format for all
     * values between server and client.
     */
    export interface LogEvent {
        /**
         * Unix epoch timestamp in milliseconds, the time is taken from the moment the logger method is called.
         */
        ts: number;
        /**
         * All arguments passed to logger method, (for instance `logger.info('a', 'b', 'c')` would result in `messages`
         * array `['a', 'b', 'c']`).
         */
        messages: any[];
        /**
         * Represents each child logger (if any), and the relevant bindings.
         *
         * @description For instance, given `logger.child({a: 1}).child({b: 2}).info({c: 3})`, the bindings array would
         * hold `[{a: 1}, {b: 2}]` and the `messages` array would be `[{c: 3}]`. The `bindings` are ordered according to
         * their position in the child logger hierarchy, with the lowest index being the top of the hierarchy.
         */
        bindings: Bindings[];
        /**
         * Holds the `label` (for instance `info`), and the corresponding numerical `value` (for instance `30`).
         * This could be important in cases where client side level values and labels differ from server side.
         */
        level: {
            label: string;
            value: number;
        };
    }



    //// Top level variable (const) exports

    /**
     * Provides functions for serializing objects common to many projects.
     */
    export const stdSerializers: typeof pinoStdSerializers;

    /**
     * Holds the current log format version (as output in the v property of each log record).
     */
    export const levels: LevelMapping;
    export const symbols: {
        readonly setLevelSym: unique symbol;
        readonly getLevelSym: unique symbol;
        readonly levelValSym: unique symbol;
        readonly useLevelLabelsSym: unique symbol;
        readonly mixinSym: unique symbol;
        readonly lsCacheSym: unique symbol;
        readonly chindingsSym: unique symbol;
        readonly asJsonSym: unique symbol;
        readonly writeSym: unique symbol;
        readonly serializersSym: unique symbol;
        readonly redactFmtSym: unique symbol;
        readonly timeSym: unique symbol;
        readonly timeSliceIndexSym: unique symbol;
        readonly streamSym: unique symbol;
        readonly stringifySym: unique symbol;
        readonly stringifySafeSym: unique symbol;
        readonly stringifiersSym: unique symbol;
        readonly endSym: unique symbol;
        readonly formatOptsSym: unique symbol;
        readonly messageKeySym: unique symbol;
        readonly errorKeySym: unique symbol;
        readonly nestedKeySym: unique symbol;
        readonly wildcardFirstSym: unique symbol;
        readonly needsMetadataGsym: unique symbol;
        readonly useOnlyCustomLevelsSym: unique symbol;
        readonly formattersSym: unique symbol;
        readonly hooksSym: unique symbol;
    };

    /**
     * Exposes the Pino package version. Also available on the logger instance.
     */
    export const version: string;

    /**
     * Provides functions for generating the timestamp property in the log output. You can set the `timestamp` option during
     * initialization to one of these functions to adjust the output format. Alternatively, you can specify your own time function.
     * A time function must synchronously return a string that would be a valid component of a JSON string. For example,
     * the default function returns a string like `,"time":1493426328206`.
     */
    export const stdTimeFunctions: {
        /**
         * The default time function for Pino. Returns a string like `,"time":1493426328206`.
         */
        epochTime: TimeFn;
        /*
            * Returns the seconds since Unix epoch
            */
        unixTime: TimeFn;
        /**
         * Returns an empty string. This function is used when the `timestamp` option is set to `false`.
         */
        nullTime: TimeFn;
        /*
            * Returns ISO 8601-formatted time in UTC
            */
        isoTime: TimeFn;
        /*
            * Returns RFC 3339-formatted time in UTC
            */
        isoTimeNano: TimeFn;
    };

    //// Exported functions

    /**
     * Create a Pino Destination instance: a stream-like object with significantly more throughput (over 30%) than a standard Node.js stream.
     * @param [dest]: The `destination` parameter, can be a file descriptor, a file path, or an object with `dest` property pointing to a fd or path.
     *                An ordinary Node.js `stream` file descriptor can be passed as the destination (such as the result of `fs.createWriteStream`)
     *                but for peak log writing performance, it is strongly recommended to use `pino.destination` to create the destination stream.
     * @returns A Sonic-Boom  stream to be used as destination for the pino function
     */
    export function destination(
        dest?: number | object | string | DestinationStream | NodeJS.WritableStream | SonicBoomOpts,
    ): SonicBoom;

    export function transport<TransportOptions = Record<string, any>>(
        options: TransportSingleOptions<TransportOptions> | TransportMultiOptions<TransportOptions> | TransportPipelineOptions<TransportOptions>
    ): ThreadStream

    export function multistream<TLevel = Level>(
        streamsArray: (DestinationStream | StreamEntry<TLevel>)[] | DestinationStream | StreamEntry<TLevel>,
        opts?: MultiStreamOptions
    ): MultiStreamRes<TLevel>

    //// Nested version of default export for TypeScript/Babel compatibility

    /**
     * @param [optionsOrStream]: an options object or a writable stream where the logs will be written. It can also receive some log-line metadata, if the
     * relative protocol is enabled. Default: process.stdout
     * @returns a new logger instance.
     */
    function pino<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean>(optionsOrStream?: LoggerOptions<CustomLevels, UseOnlyCustomLevels> | DestinationStream): Logger<CustomLevels, UseOnlyCustomLevels>;

    /**
     * @param [options]: an options object
     * @param [stream]: a writable stream where the logs will be written. It can also receive some log-line metadata, if the
     * relative protocol is enabled. Default: process.stdout
     * @returns a new logger instance.
     */
    function pino<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean>(options: LoggerOptions<CustomLevels, UseOnlyCustomLevels>, stream?: DestinationStream | undefined): Logger<CustomLevels, UseOnlyCustomLevels>;

    /**
     * Attach selected static members to the nested callable export, so that
     * `const { pino } = require('pino')` exposes them (e.g. `pino.stdTimeFunctions`).
     */
    namespace pino {
        const stdTimeFunctions: {
            epochTime: TimeFn;
            unixTime: TimeFn;
            nullTime: TimeFn;
            isoTime: TimeFn;
            isoTimeNano: TimeFn;
        };
    }
}

//// Callable default export

/**
 * @param [optionsOrStream]: an options object or a writable stream where the logs will be written. It can also receive some log-line metadata, if the
 * relative protocol is enabled. Default: process.stdout
 * @returns a new logger instance.
 */
declare function pino<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean>(optionsOrStream?: pino.LoggerOptions<CustomLevels, UseOnlyCustomLevels> | pino.DestinationStream): pino.Logger<CustomLevels, UseOnlyCustomLevels>;

/**
 * @param [options]: an options object
 * @param [stream]: a writable stream where the logs will be written. It can also receive some log-line metadata, if the
 * relative protocol is enabled. Default: process.stdout
 * @returns a new logger instance.
 */
declare function pino<CustomLevels extends string = never, UseOnlyCustomLevels extends boolean = boolean>(options: pino.LoggerOptions<CustomLevels, UseOnlyCustomLevels>, stream?: pino.DestinationStream | undefined): pino.Logger<CustomLevels, UseOnlyCustomLevels>;

export = pino;



================================================
FILE: pino.js
================================================
'use strict'

const os = require('node:os')
const stdSerializers = require('pino-std-serializers')
const caller = require('./lib/caller')
const redaction = require('./lib/redaction')
const time = require('./lib/time')
const proto = require('./lib/proto')
const symbols = require('./lib/symbols')
const { configure } = require('safe-stable-stringify')
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = require('./lib/levels')
const { DEFAULT_LEVELS, SORTING_ORDER } = require('./lib/constants')
const {
  createArgsNormalizer,
  asChindings,
  buildSafeSonicBoom,
  buildFormatters,
  stringify,
  normalizeDestFileDescriptor,
  noop
} = require('./lib/tools')
const { version } = require('./lib/meta')
const {
  chindingsSym,
  redactFmtSym,
  serializersSym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  stringifySym,
  stringifySafeSym,
  stringifiersSym,
  setLevelSym,
  endSym,
  formatOptsSym,
  messageKeySym,
  errorKeySym,
  nestedKeySym,
  mixinSym,
  levelCompSym,
  useOnlyCustomLevelsSym,
  formattersSym,
  hooksSym,
  nestedKeyStrSym,
  mixinMergeStrategySym,
  msgPrefixSym
} = symbols
const { epochTime, nullTime } = time
const { pid } = process
const hostname = os.hostname()
const defaultErrorSerializer = stdSerializers.err
const defaultOptions = {
  level: 'info',
  levelComparison: SORTING_ORDER.ASC,
  levels: DEFAULT_LEVELS,
  messageKey: 'msg',
  errorKey: 'err',
  nestedKey: null,
  enabled: true,
  base: { pid, hostname },
  serializers: Object.assign(Object.create(null), {
    err: defaultErrorSerializer
  }),
  formatters: Object.assign(Object.create(null), {
    bindings (bindings) {
      return bindings
    },
    level (label, number) {
      return { level: number }
    }
  }),
  hooks: {
    logMethod: undefined,
    streamWrite: undefined
  },
  timestamp: epochTime,
  name: undefined,
  redact: null,
  customLevels: null,
  useOnlyCustomLevels: false,
  depthLimit: 5,
  edgeLimit: 100
}

const normalize = createArgsNormalizer(defaultOptions)

const serializers = Object.assign(Object.create(null), stdSerializers)

function pino (...args) {
  const instance = {}
  const { opts, stream } = normalize(instance, caller(), ...args)

  if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase()

  const {
    redact,
    crlf,
    serializers,
    timestamp,
    messageKey,
    errorKey,
    nestedKey,
    base,
    name,
    level,
    customLevels,
    levelComparison,
    mixin,
    mixinMergeStrategy,
    useOnlyCustomLevels,
    formatters,
    hooks,
    depthLimit,
    edgeLimit,
    onChild,
    msgPrefix
  } = opts

  const stringifySafe = configure({
    maximumDepth: depthLimit,
    maximumBreadth: edgeLimit
  })

  const allFormatters = buildFormatters(
    formatters.level,
    formatters.bindings,
    formatters.log
  )

  const stringifyFn = stringify.bind({
    [stringifySafeSym]: stringifySafe
  })
  const stringifiers = redact ? redaction(redact, stringifyFn) : {}
  const formatOpts = redact
    ? { stringify: stringifiers[redactFmtSym] }
    : { stringify: stringifyFn }
  const end = '}' + (crlf ? '\r\n' : '\n')
  const coreChindings = asChindings.bind(null, {
    [chindingsSym]: '',
    [serializersSym]: serializers,
    [stringifiersSym]: stringifiers,
    [stringifySym]: stringify,
    [stringifySafeSym]: stringifySafe,
    [formattersSym]: allFormatters
  })

  let chindings = ''
  if (base !== null) {
    if (name === undefined) {
      chindings = coreChindings(base)
    } else {
      chindings = coreChindings(Object.assign({}, base, { name }))
    }
  }

  const time = (timestamp instanceof Function)
    ? timestamp
    : (timestamp ? epochTime : nullTime)
  const timeSliceIndex = time().indexOf(':') + 1

  if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true')
  if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`)
  if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`)

  assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels)
  const levels = mappings(customLevels, useOnlyCustomLevels)

  if (typeof stream.emit === 'function') {
    stream.emit('message', { code: 'PINO_CONFIG', config: { levels, messageKey, errorKey } })
  }

  assertLevelComparison(levelComparison)
  const levelCompFunc = genLevelComparison(levelComparison)

  Object.assign(instance, {
    levels,
    [levelCompSym]: levelCompFunc,
    [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
    [streamSym]: stream,
    [timeSym]: time,
    [timeSliceIndexSym]: timeSliceIndex,
    [stringifySym]: stringify,
    [stringifySafeSym]: stringifySafe,
    [stringifiersSym]: stringifiers,
    [endSym]: end,
    [formatOptsSym]: formatOpts,
    [messageKeySym]: messageKey,
    [errorKeySym]: errorKey,
    [nestedKeySym]: nestedKey,
    // protect against injection
    [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
    [serializersSym]: serializers,
    [mixinSym]: mixin,
    [mixinMergeStrategySym]: mixinMergeStrategy,
    [chindingsSym]: chindings,
    [formattersSym]: allFormatters,
    [hooksSym]: hooks,
    silent: noop,
    onChild,
    [msgPrefixSym]: msgPrefix
  })

  Object.setPrototypeOf(instance, proto())

  genLsCache(instance)

  instance[setLevelSym](level)

  return instance
}

module.exports = pino

module.exports.destination = (dest = process.stdout.fd) => {
  if (typeof dest === 'object') {
    dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd)
    return buildSafeSonicBoom(dest)
  } else {
    return buildSafeSonicBoom({ dest: normalizeDestFileDescriptor(dest), minLength: 0 })
  }
}

module.exports.transport = require('./lib/transport')
module.exports.multistream = require('./lib/multistream')

module.exports.levels = mappings()
module.exports.stdSerializers = serializers
module.exports.stdTimeFunctions = Object.assign({}, time)
module.exports.symbols = symbols
module.exports.version = version

// Enables default and name export with TypeScript and Babel
module.exports.default = pino
module.exports.pino = pino



================================================
FILE: SECURITY.md
================================================
# Security Policy

This document describes the management of vulnerabilities for the
Pino project and all modules within the Pino organization.

## Reporting vulnerabilities

Individuals who find potential vulnerabilities in Pino are invited
to report them via email at matteo.collina@gmail.com.

### Strict measures when reporting vulnerabilities

Avoid creating new "informative" reports. Only create new
report a potential vulnerability if you are absolutely sure this
should be tagged as an actual vulnerability. Be careful on the maintainers time.

## Handling vulnerability reports

When a potential vulnerability is reported, the following actions are taken:

### Triage

**Delay:** 5 business days

Within 5 business days, a member of the security team provides a first answer to the
individual who submitted the potential vulnerability. The possible responses
can be:

* Acceptance: what was reported is considered as a new vulnerability
* Rejection: what was reported is not considered as a new vulnerability
* Need more information: the security team needs more information in order to evaluate what was reported.

Triaging should include updating issue fields:
* Asset - set/create the module affected by the report
* Severity - TBD, currently left empty

### Correction follow-up

**Delay:** 90 days

When a vulnerability is confirmed, a member of the security team volunteers to follow
up on this report.

With the help of the individual who reported the vulnerability, they contact
the maintainers of the vulnerable package to make them aware of the
vulnerability. The maintainers can be invited as participants to the reported issue.

With the package maintainer, they define a release date for the publication
of the vulnerability. Ideally, this release date should not happen before
the package has been patched.

The report's vulnerable versions upper limit should be set to:
* `*` if there is no fixed version available by the time of publishing the report.
* the last vulnerable version. For example: `<=1.2.3` if a fix exists in `1.2.4`

### Publication

**Delay:** 90 days

Within 90 days after the triage date, the vulnerability must be made public.

**Severity**: Vulnerability severity is assessed using [CVSS v.3](https://www.first.org/cvss/user-guide).

If the package maintainer is actively developing a patch, an additional delay
can be added with the approval of the security team and the individual who
reported the vulnerability. 

At this point, a CVE will be requested by the team.



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "es6",
    "lib": [ "es2015", "dom" ],
    "module": "commonjs",
    "noEmit": true,
    "strict": true,
    "esModuleInterop": true
  },
  "exclude": [
    "./test/types/*.test-d.ts",
    "./*.d.ts"
  ]
}



================================================
FILE: .nojekyll
================================================
[Empty file]


================================================
FILE: .npmignore
================================================
*.png
.github/
docsify/
.nyc_output/
coverage/



================================================
FILE: .npmrc
================================================
package-lock=false



================================================
FILE: .prettierignore
================================================
*



================================================
FILE: benchmarks/basic.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const loglevel = require('./utils/wrap-log-level')(dest)
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', minLength: 4096 }))
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))

process.env.DEBUG = 'dlog'
const debug = require('debug')
const dlog = debug('dlog')
dlog.log = function (s) { dest.write(s) }

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const chill = winston.createLogger({
  transports: [
    new winston.transports.Stream({
      stream: fs.createWriteStream('/dev/null')
    })
  ]
})

const run = bench([
  function benchBunyan (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello world')
    }
    setImmediate(cb)
  },
  function benchWinston (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello world')
    }
    setImmediate(cb)
  },
  function benchBole (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello world')
    }
    setImmediate(cb)
  },
  function benchDebug (cb) {
    for (var i = 0; i < max; i++) {
      dlog('hello world')
    }
    setImmediate(cb)
  },
  function benchLogLevel (cb) {
    for (var i = 0; i < max; i++) {
      loglevel.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPino (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMinLength (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoNodeStream (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello world')
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/child-child.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest).child({ a: 'property' }).child({ sub: 'child' })
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null')).child({ a: 'property' }).child({ sub: 'child' })
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))
  .child({ a: 'property' })
  .child({ sub: 'child' })

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
}).child({ a: 'property' }).child({ sub: 'child' })

const run = bench([
  function benchBunyanChildChild (cb) {
    for (var i = 0; i < max; i++) {
      blog.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildChild (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthChildChild (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamChildChild (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/child-creation.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest)
const plogDest = pino(pino.destination(('/dev/null')))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const run = bench([
  function benchBunyanCreation (cb) {
    const child = blog.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchBoleCreation (cb) {
    const child = bole('child')
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoCreation (cb) {
    const child = plogDest.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthCreation (cb) {
    const child = plogMinLength.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamCreation (cb) {
    const child = plogNodeStream.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoCreationWithOption (cb) {
    const child = plogDest.child({ a: 'property' }, { redact: [] })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/child.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')('child')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest).child({ a: 'property' })
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null')).child({ a: 'property' })
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
}).child({ a: 'property' })

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const run = bench([
  function benchBunyanChild (cb) {
    for (var i = 0; i < max; i++) {
      blog.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchBoleChild (cb) {
    for (var i = 0; i < max; i++) {
      bole.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChild (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthChild (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamChild (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/deep-object.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))
delete require.cache[require.resolve('../')]

const loglevel = require('./utils/wrap-log-level')(dest)

const deep = Object.assign({}, require('../package.json'), { level: 'info' })

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const chill = winston.createLogger({
  transports: [
    new winston.transports.Stream({
      stream: fs.createWriteStream('/dev/null')
    })
  ]
})

const run = bench([
  function benchBunyanDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      blog.info(deep)
    }
    setImmediate(cb)
  },
  function benchWinstonDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      chill.log(deep)
    }
    setImmediate(cb)
  },
  function benchBoleDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      bole.info(deep)
    }
    setImmediate(cb)
  },
  function benchLogLevelDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      loglevel.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info(deep)
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/formatters.bench.js
================================================
'use strict'

const formatters = {
  level (label, number) {
    return {
      log: {
        level: label
      }
    }
  },
  bindings (bindings) {
    return {
      process: {
        pid: bindings.pid
      },
      host: {
        name: bindings.hostname
      }
    }
  },
  log (obj) {
    return { foo: 'bar', ...obj }
  }
}

const bench = require('fastbench')
const pino = require('../')
delete require.cache[require.resolve('../')]
const pinoNoFormatters = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const pinoFormatters = require('../')({ formatters }, pino.destination('/dev/null'))

const max = 10

const run = bench([
  function benchPinoNoFormatters (cb) {
    for (var i = 0; i < max; i++) {
      pinoNoFormatters.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoFormatters (cb) {
    for (var i = 0; i < max; i++) {
      pinoFormatters.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/long-string.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))

const crypto = require('crypto')

const longStr = crypto.randomBytes(2000).toString()

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const chill = winston.createLogger({
  transports: [
    new winston.transports.Stream({
      stream: fs.createWriteStream('/dev/null')
    })
  ]
})

const run = bench([
  function benchBunyan (cb) {
    for (var i = 0; i < max; i++) {
      blog.info(longStr)
    }
    setImmediate(cb)
  },
  function benchWinston (cb) {
    for (var i = 0; i < max; i++) {
      chill.info(longStr)
    }
    setImmediate(cb)
  },
  function benchBole (cb) {
    for (var i = 0; i < max; i++) {
      bole.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPino (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoMinLength (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoNodeStream (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info(longStr)
    }
    setImmediate(cb)
  }
], 1000)

run(run)



================================================
FILE: benchmarks/multi-arg.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))
delete require.cache[require.resolve('../')]

const deep = require('../package.json')
deep.deep = Object.assign({}, JSON.parse(JSON.stringify(deep)))
deep.deep.deep = Object.assign({}, JSON.parse(JSON.stringify(deep)))
deep.deep.deep.deep = Object.assign({}, JSON.parse(JSON.stringify(deep)))

const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const chill = winston.createLogger({
  transports: [
    new winston.transports.Stream({
      stream: fs.createWriteStream('/dev/null')
    })
  ]
})

const max = 10

const run = bench([
  function benchBunyanInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchWinstonInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchBoleInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchBunyanInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },

  function benchWinstonInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchBoleInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchBunyanInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchWinstonInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchBoleInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchBunyanInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchWinstonInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchBoleInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %j', deep)
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/multistream.js
================================================
'use strict'

const bench = require('fastbench')
const bunyan = require('bunyan')
const pino = require('../')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')

const tenStreams = [
  { stream: dest },
  { stream: dest },
  { stream: dest },
  { stream: dest },
  { stream: dest },
  { level: 'debug', stream: dest },
  { level: 'debug', stream: dest },
  { level: 'trace', stream: dest },
  { level: 'warn', stream: dest },
  { level: 'fatal', stream: dest }
]
const pinomsTen = pino({ level: 'debug' }, pino.multistream(tenStreams))

const fourStreams = [
  { stream: dest },
  { stream: dest },
  { level: 'debug', stream: dest },
  { level: 'trace', stream: dest }
]
const pinomsFour = pino({ level: 'debug' }, pino.multistream(fourStreams))

const pinomsOne = pino({ level: 'info' }, pino.multistream(dest))
const blogOne = bunyan.createLogger({
  name: 'myapp',
  streams: [{ stream: dest }]
})

const blogTen = bunyan.createLogger({
  name: 'myapp',
  streams: tenStreams
})
const blogFour = bunyan.createLogger({
  name: 'myapp',
  streams: fourStreams
})

const max = 10
const run = bench([
  function benchBunyanTen (cb) {
    for (let i = 0; i < max; i++) {
      blogTen.info('hello world')
      blogTen.debug('hello world')
      blogTen.trace('hello world')
      blogTen.warn('hello world')
      blogTen.fatal('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMSTen (cb) {
    for (let i = 0; i < max; i++) {
      pinomsTen.info('hello world')
      pinomsTen.debug('hello world')
      pinomsTen.trace('hello world')
      pinomsTen.warn('hello world')
      pinomsTen.fatal('hello world')
    }
    setImmediate(cb)
  },
  function benchBunyanFour (cb) {
    for (let i = 0; i < max; i++) {
      blogFour.info('hello world')
      blogFour.debug('hello world')
      blogFour.trace('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMSFour (cb) {
    for (let i = 0; i < max; i++) {
      pinomsFour.info('hello world')
      pinomsFour.debug('hello world')
      pinomsFour.trace('hello world')
    }
    setImmediate(cb)
  },
  function benchBunyanOne (cb) {
    for (let i = 0; i < max; i++) {
      blogOne.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMSOne (cb) {
    for (let i = 0; i < max; i++) {
      pinomsOne.info('hello world')
    }
    setImmediate(cb)
  }
], 10000)

run()



================================================
FILE: benchmarks/object.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const loglevel = require('./utils/wrap-log-level')(dest)
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})
require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)
const chill = winston.createLogger({
  transports: [
    new winston.transports.Stream({
      stream: fs.createWriteStream('/dev/null')
    })
  ]
})

const max = 10

const run = bench([
  function benchBunyanObj (cb) {
    for (var i = 0; i < max; i++) {
      blog.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchWinstonObj (cb) {
    for (var i = 0; i < max; i++) {
      chill.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchBoleObj (cb) {
    for (var i = 0; i < max; i++) {
      bole.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchLogLevelObject (cb) {
    for (var i = 0; i < max; i++) {
      loglevel.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoObj (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthObj (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamObj (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/internal/custom-levels.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../../')

const base = pino(pino.destination('/dev/null'))
const baseCl = pino({
  customLevels: { foo: 31 }
}, pino.destination('/dev/null'))
const child = base.child({})
const childCl = base.child({
  customLevels: { foo: 31 }
})
const childOfBaseCl = baseCl.child({})

const max = 100

const run = bench([
  function benchPinoNoCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      base.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      baseCl.foo({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchChildNoCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      childCl.foo({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildInheritedCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      childOfBaseCl.foo({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCreation (cb) {
    const child = base.child({})
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCreationCustomLevel (cb) {
    const child = base.child({
      customLevels: { foo: 31 }
    })
    for (var i = 0; i < max; i++) {
      child.foo({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/internal/just-pino-heavy.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../../')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plog = pino(dest)
delete require.cache[require.resolve('../../')]
const plogDest = require('../../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../../')]
const plogAsync = require('../../')(pino.destination({ dest: '/dev/null', sync: false }))
const deep = require('../../package.json')
deep.deep = JSON.parse(JSON.stringify(deep))
deep.deep.deep = JSON.parse(JSON.stringify(deep))
const longStr = JSON.stringify(deep)

const max = 10

const run = bench([
  function benchPinoLongString (cb) {
    for (var i = 0; i < max; i++) {
      plog.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoDestLongString (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncLongString (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plog.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoDestDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoDestInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info('hello %j', deep)
    }
    setImmediate(cb)
  }
], 1000)

run(run)



================================================
FILE: benchmarks/internal/just-pino.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../../')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plog = pino(dest)
delete require.cache[require.resolve('../../')]
const plogDest = require('../../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../../')]
const plogAsync = require('../../')(pino.destination({ dest: '/dev/null', sync: false }))
const plogChild = plog.child({ a: 'property' })
const plogDestChild = plogDest.child({ a: 'property' })
const plogAsyncChild = plogAsync.child({ a: 'property' })
const plogChildChild = plog.child({ a: 'property' }).child({ sub: 'child' })
const plogDestChildChild = plogDest.child({ a: 'property' }).child({ sub: 'child' })
const plogAsyncChildChild = plogAsync.child({ a: 'property' }).child({ sub: 'child' })

const max = 10

const run = bench([
  function benchPino (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoDest (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoExtreme (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoObj (cb) {
    for (var i = 0; i < max; i++) {
      plog.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoDestObj (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoAsyncObj (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChild (cb) {
    for (var i = 0; i < max; i++) {
      plogChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoDestChild (cb) {
    for (var i = 0; i < max; i++) {
      plogDestChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoAsyncChild (cb) {
    for (var i = 0; i < max; i++) {
      plogAsyncChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildChild (cb) {
    for (var i = 0; i < max; i++) {
      plogChildChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoDestChildChild (cb) {
    for (var i = 0; i < max; i++) {
      plogDestChildChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoAsyncChildChild (cb) {
    for (var i = 0; i < max; i++) {
      plogAsyncChildChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCreation (cb) {
    const child = plog.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoDestChildCreation (cb) {
    const child = plogDest.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMulti (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoDestMulti (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoAsyncMulti (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info('hello', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoDestInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoDestInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoDestInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoDestInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoAsyncInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/internal/parent-vs-child.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../../')

const base = pino(pino.destination('/dev/null'))
const child = base.child({})
const childChild = child.child({})
const childChildChild = childChild.child({})
const childChildChildChild = childChildChild.child({})
const child2 = base.child({})
const baseSerializers = pino(pino.destination('/dev/null'))
const baseSerializersChild = baseSerializers.child({})
const baseSerializersChildSerializers = baseSerializers.child({})

const max = 100

const run = bench([
  function benchPinoBase (cb) {
    for (var i = 0; i < max; i++) {
      base.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChild (cb) {
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildChild (cb) {
    for (var i = 0; i < max; i++) {
      childChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildChildChild (cb) {
    for (var i = 0; i < max; i++) {
      childChildChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildChildChildChild (cb) {
    for (var i = 0; i < max; i++) {
      childChildChildChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChild2 (cb) {
    for (var i = 0; i < max; i++) {
      child2.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoBaseSerializers (cb) {
    for (var i = 0; i < max; i++) {
      baseSerializers.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoBaseSerializersChild (cb) {
    for (var i = 0; i < max; i++) {
      baseSerializersChild.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoBaseSerializersChildSerializers (cb) {
    for (var i = 0; i < max; i++) {
      baseSerializersChildSerializers.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/internal/redact.bench.js
================================================
'use strict'

const bench = require('fastbench')
const pino = require('../../')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plog = pino(dest)
delete require.cache[require.resolve('../../')]
const plogAsync = require('../../')(pino.destination({ dest: '/dev/null', sync: false }))
delete require.cache[require.resolve('../../')]
const plogUnsafe = require('../../')({ safe: false }, dest)
delete require.cache[require.resolve('../../')]
const plogUnsafeAsync = require('../../')(
  { safe: false },
  pino.destination({ dest: '/dev/null', sync: false })
)
const plogRedact = pino({ redact: ['a.b.c'] }, dest)
delete require.cache[require.resolve('../../')]
const plogAsyncRedact = require('../../')(
  { redact: ['a.b.c'] },
  pino.destination({ dest: '/dev/null', sync: false })
)
delete require.cache[require.resolve('../../')]
const plogUnsafeRedact = require('../../')({ redact: ['a.b.c'], safe: false }, dest)
delete require.cache[require.resolve('../../')]
const plogUnsafeAsyncRedact = require('../../')(
  { redact: ['a.b.c'], safe: false },
  pino.destination({ dest: '/dev/null', sync: false })
)

const max = 10

// note that "redact me." is the same amount of bytes as the censor: "[Redacted]"

const run = bench([
  function benchPinoNoRedact (cb) {
    for (var i = 0; i < max; i++) {
      plog.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogRedact.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoUnsafeNoRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogUnsafe.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoUnsafeRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogUnsafeRedact.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoAsyncNoRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoAsyncRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogAsyncRedact.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoUnsafeAsyncNoRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogUnsafeAsync.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  },
  function benchPinoUnsafeAsyncRedact (cb) {
    for (var i = 0; i < max; i++) {
      plogUnsafeAsyncRedact.info({ a: { b: { c: 'redact me.', d: 'leave me' } } })
    }
    setImmediate(cb)
  }
], 10000)

run(run)



================================================
FILE: benchmarks/utils/generate-benchmark-doc.js
================================================
'use strict'
const { join } = require('node:path')
const { execSync } = require('node:child_process')

const run = (type) => {
  process.stderr.write(`benchmarking ${type}\n`)
  return execSync(`node ${join(__dirname, 'runbench')} ${type} -q`)
}

console.log(`
# Benchmarks

\`pino.info('hello world')\`:

\`\`\`
${run('basic')}
\`\`\`

\`pino.info({'hello': 'world'})\`:

\`\`\`
${run('object')}
\`\`\`

\`pino.info(aBigDeeplyNestedObject)\`:

\`\`\`
${run('deep-object')}
\`\`\`

\`pino.info('hello %s %j %d', 'world', {obj: true}, 4, {another: 'obj'})\`:

For a fair comparison, [LogLevel](http://npm.im/loglevel) was extended
to include a timestamp and [bole](http://npm.im/bole) had
\`fastTime\` mode switched on.
`)



================================================
FILE: benchmarks/utils/runbench.js
================================================
'use strict'

const { type, platform, arch, release, cpus } = require('node:os')
const { resolve, join } = require('node:path')
const spawn = require('node:child_process').spawn
const pump = require('pump')
const split = require('split2')
const through = require('through2')
const steed = require('steed')

function usage () {
  console.log(`
    Pino Benchmarks

    To run a benchmark, specify which to run:

    ・all        ⁃ run all benchmarks (takes a while)
    ・basic      ⁃ log a simple string
    ・object     ⁃ logging a basic object
    ・deep-object ⁃ logging a large object
    ・multi-arg   ⁃ multiple log method arguments
    ・child      ⁃ child from a parent
    ・child-child ⁃ child from a child
    ・child-creation ⁃ child constructor
    ・formatters ⁃ difference between with or without formatters

    Example:

      node runbench basic
  `)
}

if (!process.argv[2]) {
  usage()
  process.exit()
}

const quiet = process.argv[3] === '-q'

const selectedBenchmark = process.argv[2].toLowerCase()
const benchmarkDir = resolve(__dirname, '..')
const benchmarks = {
  basic: 'basic.bench.js',
  object: 'object.bench.js',
  'deep-object': 'deep-object.bench.js',
  'multi-arg': 'multi-arg.bench.js',
  'long-string': 'long-string.bench.js',
  child: 'child.bench.js',
  'child-child': 'child-child.bench.js',
  'child-creation': 'child-creation.bench.js',
  formatters: 'formatters.bench.js'
}

function runBenchmark (name, done) {
  const benchmarkResults = {}
  benchmarkResults[name] = {}

  const processor = through(function (line, enc, cb) {
    const [label, time] = ('' + line).split(': ')
    const [target, iterations] = label.split('*')
    const logger = target.replace('bench', '')

    if (!benchmarkResults[name][logger]) benchmarkResults[name][logger] = []

    benchmarkResults[name][logger].push({
      time: time.replace('ms', ''),
      iterations: iterations.replace(':', '')
    })

    cb()
  })

  if (quiet === false) console.log(`Running ${name.toUpperCase()} benchmark\n`)

  const benchmark = spawn(
    process.argv[0],
    [join(benchmarkDir, benchmarks[name])]
  )

  if (quiet === false) {
    benchmark.stdout.pipe(process.stdout)
  }

  pump(benchmark.stdout, split(), processor)

  benchmark.on('exit', () => {
    console.log()
    if (done && typeof done === 'function') done(null, benchmarkResults)
  })
}

function sum (arr) {
  let result = 0
  for (var i = 0; i < arr.length; i += 1) {
    result += Number.parseFloat(arr[i].time)
  }
  return result
}

function displayResults (results) {
  if (quiet === false) console.log('==========')
  const benchNames = Object.keys(results)
  for (var i = 0; i < benchNames.length; i += 1) {
    console.log(`${benchNames[i].toUpperCase()} benchmark averages`)
    const benchmark = results[benchNames[i]]
    const loggers = Object.keys(benchmark)
    for (var j = 0; j < loggers.length; j += 1) {
      const logger = benchmark[loggers[j]]
      const average = sum(logger) / logger.length
      console.log(`${loggers[j]} average: ${average.toFixed(3)}ms`)
    }
  }
  if (quiet === false) {
    console.log('==========')
    console.log(
      `System: ${type()}/${platform()} ${arch()} ${release()}`,
      `~ ${cpus()[0].model} (cores/threads: ${cpus().length})`
    )
  }
}

function toBench (done) {
  runBenchmark(this.name, done)
}

const benchQueue = []
if (selectedBenchmark !== 'all') {
  benchQueue.push(toBench.bind({ name: selectedBenchmark }))
} else {
  const keys = Object.keys(benchmarks)
  for (var i = 0; i < keys.length; i += 1) {
    benchQueue.push(toBench.bind({ name: keys[i] }))
  }
}
steed.series(benchQueue, function (err, results) {
  if (err) return console.error(err.message)
  results.forEach(displayResults)
})



================================================
FILE: benchmarks/utils/wrap-log-level.js
================================================
'use strict'

const { readFileSync } = require('node:fs')
const vm = require('vm')
const { join } = require('node:path')
const code = readFileSync(
  join(__dirname, '..', '..', 'node_modules', 'loglevel', 'lib', 'loglevel.js')
)
const { Console } = require('console')

function build (dest) {
  const sandbox = {
    module: {},
    console: new Console(dest, dest)
  }
  const context = vm.createContext(sandbox)

  const script = new vm.Script(code)
  script.runInContext(context)

  const loglevel = sandbox.log

  const originalFactory = loglevel.methodFactory
  loglevel.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName)

    return function () {
      const time = new Date()
      let array
      if (typeof arguments[0] === 'string') {
        arguments[0] = '[' + time.toISOString() + '] ' + arguments[0]
        rawMethod.apply(null, arguments)
      } else {
        array = new Array(arguments.length + 1)
        array[0] = '[' + time.toISOString() + ']'
        for (var i = 0; i < arguments.length; i++) {
          array[i + 1] = arguments[i]
        }
        rawMethod.apply(null, array)
      }
    }
  }

  loglevel.setLevel(loglevel.levels.INFO)
  return loglevel
}

module.exports = build

if (require.main === module) {
  const loglevel = build(process.stdout)
  loglevel.info('hello')
  loglevel.info({ hello: 'world' })
  loglevel.info('hello %j', { hello: 'world' })
}



================================================
FILE: docs/api.md
================================================
# API

* [pino() => logger](#export)
  * [options](#options)
  * [destination](#destination)
  * [destination\[Symbol.for('pino.metadata')\]](#metadata)
* [Logger Instance](#logger)
  * [logger.trace()](#trace)
  * [logger.debug()](#debug)
  * [logger.info()](#info)
  * [logger.warn()](#warn)
  * [logger.error()](#error)
  * [logger.fatal()](#fatal)
  * [logger.silent()](#silent)
  * [logger.child()](#child)
  * [logger.bindings()](#logger-bindings)
  * [logger.setBindings()](#logger-set-bindings)
  * [logger.flush()](#flush)
  * [logger.level](#logger-level)
  * [logger.isLevelEnabled()](#islevelenabled)
  * [logger.levels](#levels)
  * [logger\[Symbol.for('pino.serializers')\]](#serializers)
  * [Event: 'level-change'](#level-change)
  * [logger.version](#version)
  * [logger.msgPrefix](#msgPrefix)
* [Statics](#statics)
  * [pino.destination()](#pino-destination)
  * [pino.transport()](#pino-transport)
  * [pino.multistream()](#pino-multistream)
  * [pino.stdSerializers](#pino-stdserializers)
  * [pino.stdTimeFunctions](#pino-stdtimefunctions)
  * [pino.symbols](#pino-symbols)
  * [pino.version](#pino-version)
* [Interfaces](#interfaces)
  * [MultiStreamRes](#multistreamres)
  * [StreamEntry](#streamentry)
  * [DestinationStream](#destinationstream)
* [Types](#types)
  * [Level](#level-1)
* [TypeScript](#typescript)
  * [Module Augmentation](#module-augmentation)
  * [LogFnFields Interface](#logfnfields-interface)

<a id="export"></a>
## `pino([options], [destination]) => logger`

The exported `pino` function takes two optional arguments,
[`options`](#options) and [`destination`](#destination), and
returns a [logger instance](#logger).

<a id=options></a>
### `options` (Object)

#### `name` (String)

Default: `undefined`

The name of the logger. When set adds a `name` field to every JSON line logged.

#### `level` (String)

Default: `'info'`

The minimum level to log: Pino will not log messages with a lower level. Setting this option reduces the load, as typically, debug and trace logs are only valid for development, and not needed in production.

One of `'fatal'`, `'error'`, `'warn'`, `'info'`, `'debug'`, `'trace'` or `'silent'`.

Additional levels can be added to the instance via the `customLevels` option.

* See [`customLevels` option](#opt-customlevels)

<a id=opt-customlevels></a>

#### `levelComparison` ("ASC", "DESC", Function)

Default: `ASC`

Use this option to customize levels order.
In order to be able to define custom levels ordering pass a function which will accept `current` and `expected` values and return `boolean` which shows should `current` level to be shown or not.

```js
const logger = pino({
  levelComparison: 'DESC',
  customLevels: {
    foo: 20, // `foo` is more valuable than `bar`
    bar: 10
  },
})

// OR

const logger = pino({
  levelComparison: function(current, expected) {
    return current >= expected;
  }
})
```

#### `customLevels` (Object)

Default: `undefined`

Use this option to define additional logging levels.
The keys of the object correspond to the namespace of the log level,
and the values should be the numerical value of the level.

```js
const logger = pino({
  customLevels: {
    foo: 35
  }
})
logger.foo('hi')
```

<a id=opt-useOnlyCustomLevels></a>
#### `useOnlyCustomLevels` (Boolean)

Default: `false`

Use this option to only use defined `customLevels` and omit Pino's levels.
Logger's default `level` must be changed to a value in `customLevels` to use `useOnlyCustomLevels`
Warning: this option may not be supported by downstream transports.

```js
const logger = pino({
  customLevels: {
    foo: 35
  },
  useOnlyCustomLevels: true,
  level: 'foo'
})
logger.foo('hi')
logger.info('hello') // Will throw an error saying info is not found in logger object
```
#### `depthLimit` (Number)

Default: `5`

Option to limit stringification at a specific nesting depth when logging circular objects.

#### `edgeLimit` (Number)

Default: `100`

Option to limit stringification of properties/elements when logging a specific object/array with circular references.

<a id="opt-mixin"></a>
#### `mixin` (Function):

Default: `undefined`

If provided, the `mixin` function is called each time one of the active
logging methods is called. The first parameter is the value `mergeObject` or an empty object. The second parameter is the log level number.
The third parameter is the logger or child logger itself, which can be used to
retrieve logger-specific context from within the `mixin` function.
The function must synchronously return an object. The properties of the returned object will be added to the
logged JSON.

```js
let n = 0
const logger = pino({
  mixin () {
    return { line: ++n }
  }
})
logger.info('hello')
// {"level":30,"time":1573664685466,"pid":78742,"hostname":"x","line":1,"msg":"hello"}
logger.info('world')
// {"level":30,"time":1573664685469,"pid":78742,"hostname":"x","line":2,"msg":"world"}
```

The result of `mixin()` is supposed to be a _new_ object. For performance reason, the object returned by `mixin()` will be mutated by pino.
In the following example, passing `mergingObject` argument to the first `info` call will mutate the global `mixin` object by default:
(* See [`mixinMergeStrategy` option](#opt-mixin-merge-strategy)):
```js
const mixin = {
    appName: 'My app'
}

const logger = pino({
    mixin() {
        return mixin;
    }
})

logger.info({
    description: 'Ok'
}, 'Message 1')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","appName":"My app","description":"Ok","msg":"Message 1"}
logger.info('Message 2')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","appName":"My app","description":"Ok","msg":"Message 2"}
// Note: the second log contains "description":"Ok" text, even if it was not provided.
```

The `mixin` method can be used to add the level label to each log message such as in the following example:
```js
const logger = pino({
  mixin(_context, level) {
    return { 'level-label': logger.levels.labels[level] }
  }
})

logger.info({
    description: 'Ok'
}, 'Message 1')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","description":"Ok","level-label":"info","msg":"Message 1"}
logger.error('Message 2')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","level-label":"error","msg":"Message 2"}
```

If the `mixin` feature is being used merely to add static metadata to each log message,
then a [child logger ⇗](/docs/child-loggers.md) should be used instead. Unless your application
needs to concatenate values for a specific key multiple times, in which case `mixin` can be
used to avoid the [duplicate keys caveat](/docs/child-loggers.md#duplicate-keys-caveat):

```js
const logger = pino({
  mixin (obj, num, logger) {
    return {
      tags: logger.tags
    }
  }
})
logger.tags = {}

logger.addTag = function (key, value) {
  logger.tags[key] = value
}

function createChild (parent, ...context) {
  const newChild = logger.child(...context)
  newChild.tags = { ...logger.tags }
  newChild.addTag = function (key, value) {
    newChild.tags[key] = value
  }
  return newChild
}

logger.addTag('foo', 1)
const child = createChild(logger, {})
child.addTag('bar', 2)
logger.info('this will only have `foo: 1`')
child.info('this will have both `foo: 1` and `bar: 2`')
logger.info('this will still only have `foo: 1`')
```

As of pino 7.x, when the `mixin` is used with the [`nestedKey` option](#opt-nestedkey),
the object returned from the `mixin` method will also be nested. Prior versions would mix
this object into the root.

```js
const logger = pino({
    nestedKey: 'payload',
    mixin() {
        return { requestId: requestId.currentId() }
    }
})

logger.info({
    description: 'Ok'
}, 'Message 1')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","payload":{"requestId":"dfe9a9014b","description":"Ok"},"msg":"Message 1"}
```

<a id="opt-mixin-merge-strategy"></a>
#### `mixinMergeStrategy` (Function):

Default: `undefined`

If provided, the `mixinMergeStrategy` function is called each time one of the active
logging methods is called. The first parameter is the value `mergeObject` or an empty object,
the second parameter is the value resulting from `mixin()` (* See [`mixin` option](#opt-mixin) or an empty object.
The function must synchronously return an object.

```js
// Default strategy, `mergeObject` has priority
const logger = pino({
    mixin() {
        return { tag: 'docker' }
    },
    // mixinMergeStrategy(mergeObject, mixinObject) {
    //     return Object.assign(mixinMeta, mergeObject)
    // }
})

logger.info({
  tag: 'local'
}, 'Message')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","tag":"local","msg":"Message"}
```

```js
// Custom mutable strategy, `mixin` has priority
const logger = pino({
    mixin() {
        return { tag: 'k8s' }
    },
    mixinMergeStrategy(mergeObject, mixinObject) {
        return Object.assign(mergeObject, mixinObject)
    }
})

logger.info({
    tag: 'local'
}, 'Message')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","tag":"k8s","msg":"Message"}
```

```js
// Custom immutable strategy, `mixin` has priority
const logger = pino({
    mixin() {
        return { tag: 'k8s' }
    },
    mixinMergeStrategy(mergeObject, mixinObject) {
        return Object.assign({}, mergeObject, mixinObject)
    }
})

logger.info({
    tag: 'local'
}, 'Message')
// {"level":30,"time":1591195061437,"pid":16012,"hostname":"x","tag":"k8s","msg":"Message"}
```

<a id="opt-redact"></a>
#### `redact` (Array | Object):

Default: `undefined`

As an array, the `redact` option specifies paths that should
have their values redacted from any log output.

Each path must be a string using a syntax that corresponds to JavaScript dot and bracket notation.

If an object is supplied, three options can be specified:
  * `paths` (array): Required. An array of paths. See [redaction - Path Syntax ⇗](/docs/redaction.md#paths) for specifics.
  * `censor` (String|Function|Undefined): Optional. When supplied as a String the `censor` option will overwrite keys that are to be redacted. When set to `undefined` the key will be removed entirely from the object.
    The `censor` option may also be a mapping function. The (synchronous) mapping function has the signature `(value, path) => redactedValue` and is called with the unredacted `value` and `path` to the key being redacted, as an array. For example given a redaction path of `a.b.c` the `path` argument would be `['a', 'b', 'c']`. The value returned from the mapping function becomes the applied censor value. Default: `'[Redacted]'`
    value synchronously.
    Default: `'[Redacted]'`
  * `remove` (Boolean): Optional. Instead of censoring the value, remove both the key and the value. Default: `false`

**WARNING**: Never allow user input to define redacted paths.

* See the [redaction ⇗](/docs/redaction.md) documentation.
* See [fast-redact#caveat ⇗](https://github.com/davidmarkclements/fast-redact#caveat)

<a id=opt-hooks></a>
#### `hooks` (Object)

An object mapping to hook functions. Hook functions allow for customizing
internal logger operations. Hook functions ***must*** be synchronous functions.

<a id="logmethod"></a>
##### `logMethod`

Allows for manipulating the parameters passed to logger methods. The signature
for this hook is `logMethod (args, method, level) {}`, where `args` is an array
of the arguments that were passed to the log method and `method` is the log
method itself, `level` is the log level itself. This hook ***must*** invoke the
`method` function by using apply, like so: `method.apply(this, newArgumentsArray)`.

For example, Pino expects a binding object to be the first parameter with an
optional string message as the second parameter. Using this hook the parameters
can be flipped:

```js
const hooks = {
  logMethod (inputArgs, method, level) {
    if (inputArgs.length >= 2) {
      const arg1 = inputArgs.shift()
      const arg2 = inputArgs.shift()
      return method.apply(this, [arg2, arg1, ...inputArgs])
    }
    return method.apply(this, inputArgs)
  }
}
```


<a id="streamWrite"></a>
##### `streamWrite`

Allows for manipulating the _stringified_ JSON log data just before writing to various transports.

The method receives the stringified JSON and must return valid stringified JSON.

For example:
```js
const hooks = {
  streamWrite (s) {
    return s.replaceAll('sensitive-api-key', 'XXX')
  }
}
```

<a id=opt-formatters></a>
#### `formatters` (Object)

An object containing functions for formatting the shape of the log lines.
These functions should return a JSONifiable object and
should never throw. These functions allow for full customization of
the resulting log lines. For example, they can be used to change
the level key name or to enrich the default metadata.

##### `level`

Changes the shape of the log level. The default shape is `{ level: number }`.
The function takes two arguments, the label of the level (e.g. `'info'`)
and the numeric value (e.g. `30`).

ps: The log level cannot be customized when using multiple transports

```js
const formatters = {
  level (label, number) {
    return { level: number }
  }
}
```

##### `bindings`

Changes the shape of the bindings. The default shape is `{ pid, hostname }`.
The function takes a single argument, the bindings object, which can be configured
using the [`base` option](#opt-base). Called once when creating logger.

```js
const formatters = {
  bindings (bindings) {
    return { pid: bindings.pid, hostname: bindings.hostname }
  }
}
```

##### `log`

Changes the shape of the log object. This function will be called every time
one of the log methods (such as `.info`) is called. All arguments passed to the
log method, except the message, will be passed to this function. By default, it does
not change the shape of the log object.

```js
const formatters = {
  log (object) {
    return object
  }
}
```

<a id=opt-serializers></a>
#### `serializers` (Object)

Default: `{err: pino.stdSerializers.err}`

An object containing functions for custom serialization of objects.
These functions should return an JSONifiable object and they
should never throw. When logging an object, each top-level property
matching the exact key of a serializer will be serialized using the defined serializer.

The serializers are applied when a property in the logged object matches a property
in the serializers. The only exception is the `err` serializer as it is also applied in case
the object is an instance of `Error`, e.g. `logger.info(new Error('kaboom'))`.
See `errorKey` option to change `err` namespace.

* See [pino.stdSerializers](#pino-stdserializers)

#### `msgPrefix` (String)

Default: `undefined`

The `msgPrefix` property allows you to specify a prefix for every message of the logger and its children.

```js
const logger = pino({
  msgPrefix: '[HTTP] '
})
logger.info('got new request!')
// >  [HTTP] got new request!

const child = logger.child({})
child.info('User authenticated!')
// >  [HTTP] User authenticated!
```

<a id=opt-base></a>
#### `base` (Object)

Default: `{pid: process.pid, hostname: os.hostname()}`

Key-value object added as child logger to each log line.

Set to `undefined` to avoid adding `pid`, `hostname` properties to each log.

#### `enabled` (Boolean)

Default: `true`

Set to `false` to disable logging.

#### `crlf` (Boolean)

Default: `false`

Set to `true` to logs newline delimited JSON with `\r\n` instead of `\n`.

<a id=opt-timestamp></a>
#### `timestamp` (Boolean | Function)

Default: `true`

Enables or disables the inclusion of a timestamp in the
log message. If a function is supplied, it must synchronously return a partial JSON string
representation of the time, e.g. `,"time":1493426328206` (which is the default).

If set to `false`, no timestamp will be included in the output.

See [stdTimeFunctions](#pino-stdtimefunctions) for a set of available functions
for passing in as a value for this option.

Example:
```js
timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`
// which is equivalent to:
// timestamp: stdTimeFunctions.isoTime
```

**Caution**: attempting to format time in-process will significantly impact logging performance.

<a id=opt-messagekey></a>
#### `messageKey` (String)

Default: `'msg'`

The string key for the 'message' in the JSON object.

<a id=opt-messagekey></a>
#### `errorKey` (String)

Default: `'err'`

The string key for the 'error' in the JSON object.

<a id=opt-nestedkey></a>
#### `nestedKey` (String)

Default: `null`

If there's a chance that objects being logged have properties that conflict with those from pino itself (`level`, `timestamp`, `pid`, etc)
and duplicate keys in your log records are undesirable, pino can be configured with a `nestedKey` option that causes any `object`s that are logged
to be placed under a key whose name is the value of `nestedKey`.

This way, when searching something like Kibana for values, one can consistently search under the configured `nestedKey` value instead of the root log record keys.

For example,
```js
const logger = require('pino')({
  nestedKey: 'payload'
})

const thing = { level: 'hi', time: 'never', foo: 'bar'} // has pino-conflicting properties!
logger.info(thing)

// logs the following:
// {"level":30,"time":1578357790020,"pid":91736,"hostname":"x","payload":{"level":"hi","time":"never","foo":"bar"}}
```
In this way, logged objects' properties don't conflict with pino's standard logging properties,
and searching for logged objects can start from a consistent path.

#### `browser` (Object)

Browser only, may have `asObject` and `write` keys. This option is separately
documented in the [Browser API ⇗](/docs/browser.md) documentation.

* See [Browser API ⇗](/docs/browser.md)

#### `transport` (Object)

The `transport` option is a shorthand for the [pino.transport()](#pino-transport) function.
It supports the same input options:
```js
require('pino')({
  transport: {
    target: '/absolute/path/to/my-transport.mjs'
  }
})

// or multiple transports
require('pino')({
  transport: {
    targets: [
      { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
      { target: 'some-file-transport', options: { destination: '/dev/null' }
    ]
  }
})
```

If the transport option is supplied to `pino`, a [`destination`](#destination) parameter may not also be passed as a separate argument to `pino`:

```js
pino({ transport: {}}, '/path/to/somewhere') // THIS WILL NOT WORK, DO NOT DO THIS
pino({ transport: {}}, process.stderr) // THIS WILL NOT WORK, DO NOT DO THIS
```

when using the `transport` option. In this case, an `Error` will be thrown.

* See [pino.transport()](#pino-transport)

#### `onChild` (Function)

The `onChild` function is a synchronous callback that will be called on each creation of a new child, passing the child instance as its first argument.
Any error thrown inside the callback will be uncaught and should be handled inside the callback.
```js
const parent = require('pino')({ onChild: (instance) => {
  // Execute call back code for each newly created child.
}})
// `onChild` will now be executed with the new child.
parent.child(bindings)
```


<a id="destination"></a>
### `destination` (Number | String | Object | DestinationStream | SonicBoomOpts | WritableStream)

Default: `pino.destination(1)` (STDOUT)

The `destination` parameter can be a file descriptor, a file path, or an
object with `dest` property pointing to a fd or path.
An ordinary Node.js `stream` file descriptor can be passed as the
destination (such as the result
of `fs.createWriteStream`) but for peak log writing performance, it is strongly
recommended to use `pino.destination` to create the destination stream.
Note that the `destination` parameter can be the result of `pino.transport()`.

```js
// pino.destination(1) by default
const stdoutLogger = require('pino')()

// destination param may be in first position when no options:
const fileLogger = require('pino')( pino.destination('/log/path'))

// use the stderr file handle to log to stderr:
const opts = {name: 'my-logger'}
const stderrLogger = require('pino')(opts, pino.destination(2))

// automatic wrapping in pino.destination
const fileLogger = require('pino')('/log/path')

// Asynchronous logging
const fileLogger = pino(pino.destination({ dest: '/log/path', sync: false }))
```

However, there are some special instances where `pino.destination` is not used as the default:

+ When something, e.g a process manager, has monkey-patched `process.stdout.write`.

In these cases `process.stdout` is used instead.

Note: If the parameter is a string integer, e.g. `'1'`, it will be coerced to
a number and used as a file descriptor. If this is not desired, provide a full
path, e.g. `/tmp/1`.

* See [`pino.destination`](#pino-destination)

<a id="metadata"></a>
#### `destination[Symbol.for('pino.metadata')]`

Default: `false`

Using the global symbol `Symbol.for('pino.metadata')` as a key on the `destination` parameter and
setting the key to `true`, indicates that the following properties should be
set on the `destination` object after each log line is written:

* the last logging level as `destination.lastLevel`
* the last logging message as `destination.lastMsg`
* the last logging object as `destination.lastObj`
* the last time as `destination.lastTime`, which will be the partial string returned
  by the time function.
* the last logger instance as `destination.lastLogger` (to support child
  loggers)

The following is a succinct usage example:

```js
const dest = pino.destination('/dev/null')
dest[Symbol.for('pino.metadata')] = true
const logger = pino(dest)
logger.info({a: 1}, 'hi')
const { lastMsg, lastLevel, lastObj, lastTime} = dest
console.log(
  'Logged message "%s" at level %d with object %o at time %s',
  lastMsg, lastLevel, lastObj, lastTime
) // Logged message "hi" at level 30 with object { a: 1 } at time 1531590545089
```

<a id="logger"></a>
## Logger Instance

The logger instance is the object returned by the main exported
[`pino`](#export) function.

The primary purpose of the logger instance is to provide logging methods.

The default logging methods are `trace`, `debug`, `info`, `warn`, `error`, and `fatal`.

Each logging method has the following signature:
`([mergingObject], [message], [...interpolationValues])`.

The parameters are explained below using the `logger.info` method but the same applies to all logging methods.

### Logging Method Parameters

<a id=mergingobject></a>
#### `mergingObject` (Object)

An object can optionally be supplied as the first parameter. Each enumerable key and value
of the `mergingObject` is copied into the JSON log line.

```js
logger.info({MIX: {IN: true}})
// {"level":30,"time":1531254555820,"pid":55956,"hostname":"x","MIX":{"IN":true}}
```

If the object is of type Error, it is wrapped in an object containing a property err (`{ err: mergingObject }`).
This allows for a unified error handling flow.

Options `serializers` and `errorKey` could be used at instantiation time to change the namespace
from `err` to another string as preferred.

<a id="message"></a>
#### `message` (String)

A `message` string can optionally be supplied as the first parameter, or
as the second parameter after supplying a `mergingObject`.

By default, the contents of the `message` parameter will be merged into the
JSON log line under the `msg` key:

```js
logger.info('hello world')
// {"level":30,"time":1531257112193,"msg":"hello world","pid":55956,"hostname":"x"}
```

The `message` parameter takes precedence over the `mergingObject`.
That is, if a `mergingObject` contains a `msg` property, and a `message` parameter
is supplied in addition, the `msg` property in the output log will be the value of
the `message` parameter not the value of the `msg` property on the `mergingObject`.
See [Avoid Message Conflict](/docs/help.md#avoid-message-conflict) for information
on how to overcome this limitation.

If no `message` parameter is provided, and the `mergingObject` is of type `Error` or it has a property named `err`, the
`message` parameter is set to the `message` value of the error. See option `errorKey` if you want to change the namespace.

The `messageKey` option can be used at instantiation time to change the namespace
from `msg` to another string as preferred.

The `message` string may contain a printf style string with support for
the following placeholders:

* `%s` – string placeholder, every non-string value passed in will have `.toString()` called.
* `%d` – digit placeholder
* `%O`, `%o`, and `%j` – object placeholder

Values supplied as additional arguments to the logger method will
then be interpolated accordingly.

* See [`messageKey` pino option](#opt-messagekey)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="interpolationvalues"></a>
#### `...interpolationValues` (Any)

All arguments supplied after `message` are serialized and interpolated according
to any supplied printf-style placeholders (`%s`, `%d`, `%o`|`%O`|`%j`) to form
the final output `msg` value for the JSON log line.

```js
logger.info('%o hello %s', {worldly: 1}, 'world')
// {"level":30,"time":1531257826880,"msg":"{\"worldly\":1} hello world","pid":55956,"hostname":"x"}
```

Since pino v6, we do not automatically concatenate and cast to string
consecutive parameters:

```js
logger.info('hello', 'world')
// {"level":30,"time":1531257618044,"msg":"hello","pid":55956,"hostname":"x"}
// world is missing
```

However, it's possible to inject a hook to modify this behavior:

```js
const pinoOptions = {
  hooks: { logMethod }
}

function logMethod (args, method) {
  if (args.length === 2) {
    args[0] = `${args[0]} %j`
  }
  method.apply(this, args)
}

const logger = pino(pinoOptions)
```

* See [`message` log method parameter](#message)
* See [`logMethod` hook](#logmethod)

<a id="error-serialization"></a>
#### Errors

Errors can be supplied as either the first parameter or if already using `mergingObject` then as the `err` property on the `mergingObject`.

Options `serializers` and `errorKey` could be used at instantiation time to change the namespace
from `err` to another string as preferred.

> ## Note
> This section describes the default configuration. The error serializer can be
> mapped to a different key using the [`serializers`](#opt-serializers) option.
```js
logger.info(new Error("test"))
// {"level":30,"time":1531257618044,"msg":"test","stack":"...","type":"Error","pid":55956,"hostname":"x"}

logger.info({ err: new Error("test"), otherkey: 123 }, "some text")
// {"level":30,"time":1531257618044,"err":{"msg": "test", "stack":"...","type":"Error"},"msg":"some text","pid":55956,"hostname":"x","otherkey":123}
```

<a id="trace"></a>
### `logger.trace([mergingObject], [message], [...interpolationValues])`

Write a `'trace'` level log, if the configured [`level`](#level) allows for it.

* See [`mergingObject` log method parameter](#mergingobject)
* See [`message` log method parameter](#message)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="debug"></a>
### `logger.debug([mergingObject], [message], [...interpolationValues])`

Write a `'debug'` level log, if the configured `level` allows for it.

* See [`mergingObject` log method parameter](#mergingobject)
* See [`message` log method parameter](#message)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="info"></a>
### `logger.info([mergingObject], [message], [...interpolationValues])`

Write an `'info'` level log, if the configured `level` allows for it.

* See [`mergingObject` log method parameter](#mergingobject)
* See [`message` log method parameter](#message)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="warn"></a>
### `logger.warn([mergingObject], [message], [...interpolationValues])`

Write a `'warn'` level log, if the configured `level` allows for it.

* See [`mergingObject` log method parameter](#mergingobject)
* See [`message` log method parameter](#message)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="error"></a>
### `logger.error([mergingObject], [message], [...interpolationValues])`

Write a `'error'` level log, if the configured `level` allows for it.

* See [`mergingObject` log method parameter](#mergingobject)
* See [`message` log method parameter](#message)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="fatal"></a>
### `logger.fatal([mergingObject], [message], [...interpolationValues])`

Write a `'fatal'` level log, if the configured `level` allows for it.

Since `'fatal'` level messages are intended to be logged just before the process exiting the `fatal`
method will always sync flush the destination.
Therefore it's important not to misuse `fatal` since
it will cause performance overhead if used for any
other purpose than writing final log messages before
the process crashes or exits.

* See [`mergingObject` log method parameter](#mergingobject)
* See [`message` log method parameter](#message)
* See [`...interpolationValues` log method parameter](#interpolationvalues)

<a id="silent"><a>
### `logger.silent()`

Noop function.

<a id="child"></a>
### `logger.child(bindings, [options]) => logger`

The `logger.child` method allows for the creation of stateful loggers,
where key-value pairs can be pinned to a logger causing them to be output
on every log line.

Child loggers use the same output stream as the parent and inherit
the current log level of the parent at the time they are spawned.

The log level of a child is mutable. It can be set independently
of the parent either by setting the [`level`](#level) accessor after creating
the child logger or using the [`options.level`](#optionslevel-string) key.

<a id="logger-child-bindings"></a>
#### `bindings` (Object)

An object of key-value pairs to include in every log line output
via the returned child logger.

```js
const child = logger.child({ MIX: {IN: 'always'} })
child.info('hello')
// {"level":30,"time":1531258616689,"msg":"hello","pid":64849,"hostname":"x","MIX":{"IN":"always"}}
child.info('child!')
// {"level":30,"time":1531258617401,"msg":"child!","pid":64849,"hostname":"x","MIX":{"IN":"always"}}
```

The `bindings` object may contain any key except for reserved configuration keys `level` and `serializers`.

##### `bindings.serializers` (Object) - DEPRECATED

Use `options.serializers` instead.

#### `options` (Object)

Options for child logger. These options will override the parent logger options.

##### `options.level` (String)

The `level` property overrides the log level of the child logger.
By default, the parent log level is inherited.
After the creation of the child logger, it is also accessible using the [`logger.level`](#logger-level) key.

```js
const logger = pino()
logger.debug('nope') // will not log, since default level is info
const child = logger.child({foo: 'bar'}, {level: 'debug'})
child.debug('debug!') // will log as the `level` property set the level to debug
```

<a id="options-msgPrefix"></a>
##### `options.msgPrefix` (String)

Default: `undefined`

The `msgPrefix` property allows you to specify a prefix for every message of the child logger.
By default, the parent prefix is inherited.
If the parent already has a prefix, the prefix of the parent and then the child will be displayed.

```js
const logger = pino({
  msgPrefix: '[HTTP] '
})
logger.info('got new request!')
// >  [HTTP] got new request!

const child = logger.child({avengers: 'assemble'}, {msgPrefix: '[Proxy] '})
child.info('message proxied!')
// >  [HTTP] [Proxy] message proxied!
```

##### `options.redact` (Array | Object)

Setting `options.redact` to an array or object will override the parent `redact` options. To remove `redact` options inherited from the parent logger set this value as an empty array (`[]`).

```js
const logger = require('pino')({ redact: ['hello'] })
logger.info({ hello: 'world' })
// {"level":30,"time":1625794363403,"pid":67930,"hostname":"x","hello":"[Redacted]"}
const child = logger.child({ foo: 'bar' }, { redact: ['foo'] })
logger.info({ hello: 'world' })
// {"level":30,"time":1625794553558,"pid":67930,"hostname":"x","hello":"world", "foo": "[Redacted]" }
```

* See [`redact` option](#opt-redact)

##### `options.serializers` (Object)

Child loggers inherit the [serializers](#opt-serializers) from the parent logger.

Setting the `serializers` key of the `options` object will override
any configured parent serializers.

```js
const logger = require('pino')()
logger.info({test: 'will appear'})
// {"level":30,"time":1531259759482,"pid":67930,"hostname":"x","test":"will appear"}
const child = logger.child({}, {serializers: {test: () => `child-only serializer`}})
child.info({test: 'will be overwritten'})
// {"level":30,"time":1531259784008,"pid":67930,"hostname":"x","test":"child-only serializer"}
```

* See [`serializers` option](#opt-serializers)
* See [pino.stdSerializers](#pino-stdSerializers)

<a id="logger-bindings"></a>
### `logger.bindings()`

Returns an object containing all the current bindings, cloned from the ones passed in via `logger.child()`.
```js
const child = logger.child({ foo: 'bar' })
console.log(child.bindings())
// { foo: 'bar' }
const anotherChild = child.child({ MIX: { IN: 'always' } })
console.log(anotherChild.bindings())
// { foo: 'bar', MIX: { IN: 'always' } }
```

<a id="logger-set-bindings"></a>
### `logger.setBindings(bindings)`

Adds to the bindings of this logger instance.

**Note:** Does not overwrite bindings. Can potentially result in duplicate keys in
log lines.

* See [`bindings` parameter in `logger.child`](#logger-child-bindings)

<a id="flush"></a>
### `logger.flush([cb])`

Flushes the content of the buffer when using `pino.destination({
sync: false })`.

This is an asynchronous, best used as fire and forget, operation.

The use case is primarily for asynchronous logging, which may buffer
log lines while others are being written. The `logger.flush` method can be
used to flush the logs
on a long interval, say ten seconds. Such a strategy can provide an
optimum balance between extremely efficient logging at high demand periods
and safer logging at low demand periods.

If there is a need to wait for the logs to be flushed, a callback should be used.

* See [`destination` parameter](#destination)
* See [Asynchronous Logging ⇗](/docs/asynchronous.md)

<a id="logger-level"></a>
### `logger.level` (String) [Getter/Setter]

Set this property to the desired logging level.

The core levels and their values are as follows:

|            |       |       |      |      |       |       |          |
|:-----------|-------|-------|------|------|-------|-------|---------:|
| **Level:** | trace | debug | info | warn | error | fatal | silent   |
| **Value:** | 10    | 20    | 30   | 40   | 50    | 60    | Infinity |

The logging level is a *minimum* level based on the associated value of that level.

For instance if `logger.level` is `info` *(30)* then `info` *(30)*, `warn` *(40)*, `error` *(50)*, and `fatal` *(60)* log methods will be enabled but the `trace` *(10)* and `debug` *(20)* methods, being less than 30, will not.

The `silent` logging level is a specialized level that will disable all logging,
the `silent` log method is a noop function.

<a id="islevelenabled"></a>
### `logger.isLevelEnabled(level)`

A utility method for determining if a given log level will write to the destination.

#### `level` (String)

The given level to check against:

```js
if (logger.isLevelEnabled('debug')) logger.debug('conditional log')
```

#### `levelLabel` (String)

Defines the method name of the new level.

* See [`logger.level`](#level)

#### `levelValue` (Number)

Defines the associated minimum threshold value for the level, and
therefore where it sits in order of priority among other levels.

* See [`logger.level`](#level)

<a id="levelVal"></a>
### `logger.levelVal` (Number)

Supplies the integer value for the current logging level.

```js
if (logger.levelVal === 30) {
  console.log('logger level is `info`')
}
```

<a id="levels"></a>
### `logger.levels` (Object)

Levels are mapped to values to determine the minimum threshold that a
logging method should be enabled at (see [`logger.level`](#level)).

The `logger.levels` property holds the mappings between levels and values,
and vice versa.

```sh
$ node -p "require('pino')().levels"
```

```js
{ labels:
   { '10': 'trace',
     '20': 'debug',
     '30': 'info',
     '40': 'warn',
     '50': 'error',
     '60': 'fatal' },
  values:
   { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 } }
```

* See [`logger.level`](#level)

<a id="serializers"></a>
### logger\[Symbol.for('pino.serializers')\]

Returns the serializers as applied to the current logger instance. If a child logger did not
register its own serializer upon instantiation the serializers of the parent will be returned.

<a id="level-change"></a>
### Event: 'level-change'

The logger instance is also an [`EventEmitter ⇗`](https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter)

A listener function can be attached to a logger via the `level-change` event

The listener is passed five arguments:

* `levelLabel` – the new level string, e.g `trace`
* `levelValue` – the new level number, e.g `10`
* `previousLevelLabel` – the prior level string, e.g `info`
* `previousLevelValue` – the prior level number, e.g `30`
* `logger` – the logger instance from which the event originated

```js
const logger = require('pino')()
logger.on('level-change', (lvl, val, prevLvl, prevVal) => {
  console.log('%s (%d) was changed to %s (%d)', prevLvl, prevVal, lvl, val)
})
logger.level = 'trace' // trigger event
```

Please note that due to a [known bug](https://github.com/pinojs/pino/issues/1006), every `logger.child()` call will
fire a `level-change` event. These events can be ignored by writing an event handler like:

```js
const logger = require('pino')()
logger.on('level-change', function (lvl, val, prevLvl, prevVal, instance) {
  if (logger !== instance) {
    return
  }
  console.log('%s (%d) was changed to %s (%d)', prevLvl, prevVal, lvl, val)
})
logger.child({}); // trigger an event by creating a child instance, notice no console.log
logger.level = 'trace' // trigger event using actual value change, notice console.log
```

<a id="version"></a>
### `logger.version` (String)

Exposes the Pino package version. Also available on the exported `pino` function.

* See [`pino.version`](#pino-version)

<a id="msgPrefix"></a>
### `logger.msgPrefix` (String|Undefined)

Exposes the cumulative `msgPrefix` of the logger.

* See [`options.msgPrefix`](#options-msgPrefix)

## Statics

<a id="pino-destination"></a>
### `pino.destination([opts]) => SonicBoom`

Create a Pino Destination instance: a stream-like object with
significantly more throughput than a standard Node.js stream.

```js
const pino = require('pino')
const logger = pino(pino.destination('./my-file'))
const logger2 = pino(pino.destination())
const logger3 = pino(pino.destination({
  dest: './my-file',
  minLength: 4096, // Buffer before writing
  sync: false // Asynchronous logging, the default
}))
const logger4 = pino(pino.destination({
  dest: './my-file2',
  sync: true // Synchronous logging
}))
```

The `pino.destination` method may be passed a file path or a numerical file descriptor.
By default, `pino.destination` will use `process.stdout.fd` (1) as the file descriptor.

`pino.destination` is implemented on [`sonic-boom` ⇗](https://github.com/mcollina/sonic-boom).

A `pino.destination` instance can also be used to reopen closed files
(for example, for some log rotation scenarios), see [Reopening log files](/docs/help.md#reopening).

* See [`destination` parameter](#destination)
* See [`sonic-boom` ⇗](https://github.com/mcollina/sonic-boom)
* See [Reopening log files](/docs/help.md#reopening)
* See [Asynchronous Logging ⇗](/docs/asynchronous.md)

<a id="pino-transport"></a>
### `pino.transport(options) => ThreadStream`

Create a stream that routes logs to a worker thread that
wraps around a [Pino Transport](/docs/transports.md).

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'some-transport',
  options: { some: 'options for', the: 'transport' }
})
pino(transport)
```

Multiple transports may also be defined, and specific levels can be logged to each transport:

```js
const pino = require('pino')
const transport = pino.transport({
  targets: [{
    level: 'info',
    target: 'pino-pretty' // must be installed separately
  }, {
    level: 'trace',
    target: 'pino/file',
    options: { destination: '/path/to/store/logs' }
  }]
})
pino(transport)
```

A pipeline could also be created to transform log lines _before_ sending them:

```js
const pino = require('pino')
const transport = pino.transport({
  pipeline: [{
    target: 'pino-syslog' // must be installed separately
  }, {
    target: 'pino-socket' // must be installed separately
  }]
})
pino(transport)
```

Multiple transports can now be defined to include pipelines:

```js
const pino = require('pino')
const transport = pino.transport({
  targets: [{
    level: 'info',
    target: 'pino-pretty' // must be installed separately
  }, {
    level: 'trace',
    target: 'pino/file',
    options: { destination: '/path/to/store/logs' }
  }, {
    pipeline: [{
      target: 'pino-syslog' // must be installed separately
    }, {
      target: 'pino-socket' // must be installed separately
    }]
  }
  ]
})
pino(transport)
```

If `WeakRef`, `WeakMap`, and `FinalizationRegistry` are available in the current runtime (v14.5.0+), then the thread
will be automatically terminated in case the stream or logger goes out of scope.
The `transport()` function adds a listener to `process.on('beforeExit')` and `process.on('exit')` to ensure the worker
is flushed and all data synced before the process exits.

Note that calling `process.exit()` on the main thread will stop the event loop on the main thread from turning. As a result,
using `console.log` and `process.stdout` after the main thread called `process.exit()` will not produce any output.

If you are embedding/integrating pino within your framework, you will need to make pino aware of the script that is calling it,
like so:

```js
const pino = require('pino')
const getCaller = require('get-caller-file')

module.exports = function build () {
  const logger = pino({
    transport: {
      caller: getCaller(),
      target: 'transport',
      options: { destination: './destination' }
    }
  })
  return logger
}
```

Note that _any `'error'`_ event emitted by the transport must be considered a fatal error and the process must be terminated.
Error events are not recoverable.

For more on transports, how they work, and how to create them see the [`Transports documentation`](/docs/transports.md).

* See [`Transports`](/docs/transports.md)
* See [`thread-stream` ⇗](https://github.com/mcollina/thread-stream)

#### Options

* `target`:  The transport to pass logs through. This may be an installed module name or an absolute path.
* `options`:  An options object which is serialized (see [Structured Clone Algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)), passed to the worker thread, parsed and then passed to the exported transport function.
* `worker`: [Worker thread](https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options) configuration options. Additionally, the `worker` option supports `worker.autoEnd`. If this is set to `false` logs will not be flushed on process exit. It is then up to the developer to call `transport.end()` to flush logs.
* `targets`: May be specified instead of `target`. Must be an array of transport configurations and/or pipelines. Transport configurations include the aforementioned `options` and `target` options plus a `level` option which will send only logs above a specified level to a transport.
* `pipeline`: May be specified instead of `target`. Must be an array of transport configurations. Transport configurations include the aforementioned `options` and `target` options. All intermediate steps in the pipeline _must_ be `Transform` streams and not `Writable`.
* `dedupe`: See [pino.multistream options](#pino-multistream)

<a id="pino-multistream"></a>

### `pino.multistream(streamsArray, opts) => MultiStreamRes`

Create a stream composed by multiple destination streams and returns an
object implementing the [MultiStreamRes](#multistreamres) interface.

```js
var fs = require('node:fs')
var pino = require('pino')
var pretty = require('pino-pretty')
var streams = [
  {stream: fs.createWriteStream('/tmp/info.stream.out')},
  {stream: pretty() },
  {level: 'debug', stream: fs.createWriteStream('/tmp/debug.stream.out')},
  {level: 'fatal', stream: fs.createWriteStream('/tmp/fatal.stream.out')}
]

var log = pino({
  level: 'debug' // this MUST be set at the lowest level of the
                 // destinations
}, pino.multistream(streams))

log.debug('this will be written to /tmp/debug.stream.out')
log.info('this will be written to /tmp/debug.stream.out and /tmp/info.stream.out')
log.fatal('this will be written to /tmp/debug.stream.out, /tmp/info.stream.out and /tmp/fatal.stream.out')
```

In order for `multistream` to work, the log level __must__ be set to the lowest level used in the streams array. Default is `info`.

#### Options

* `levels`:  Pass custom log level definitions to the instance as an object.

+ `dedupe`: Set this to `true` to send logs only to the stream with the higher level. Default: `false`

    `dedupe` flag can be useful for example when using `pino.multistream` to redirect `error` logs to `process.stderr` and others to `process.stdout`:

    ```js
    var pino = require('pino')
    var multistream = pino.multistream
    var streams = [
      {level: 'debug', stream: process.stdout},
      {level: 'error', stream: process.stderr},
    ]

    var opts = {
        levels: {
            silent: Infinity,
            fatal: 60,
            error: 50,
            warn: 50,
            info: 30,
            debug: 20,
            trace: 10
        },
        dedupe: true,
    }

    var log = pino({
      level: 'debug' // this MUST be set at the lowest level of the
                    // destinations
    }, multistream(streams, opts))

    log.debug('this will be written ONLY to process.stdout')
    log.info('this will be written ONLY to process.stdout')
    log.error('this will be written ONLY to process.stderr')
    log.fatal('this will be written ONLY to process.stderr')
    ```

<a id="pino-stdserializers"></a>
### `pino.stdSerializers` (Object)

The `pino.stdSerializers` object provides functions for serializing objects common to many projects. The standard serializers are directly imported from [pino-std-serializers](https://github.com/pinojs/pino-std-serializers).

* See [pino-std-serializers ⇗](https://github.com/pinojs/pino-std-serializers)

<a id="pino-stdtimefunctions"></a>
### `pino.stdTimeFunctions` (Object)

The [`timestamp`](#opt-timestamp) option can accept a function that determines the
`timestamp` value in a log line.

The `pino.stdTimeFunctions` object provides a very small set of common functions for generating the
`timestamp` property. These consist of the following

* `pino.stdTimeFunctions.epochTime`: Milliseconds since Unix epoch (Default)
* `pino.stdTimeFunctions.unixTime`: Seconds since Unix epoch
* `pino.stdTimeFunctions.nullTime`: Clears timestamp property (Used when `timestamp: false`)
* `pino.stdTimeFunctions.isoTime`: ISO 8601-formatted time in UTC
* `pino.stdTimeFunctions.isoTimeNano`: RFC 3339-formatted time in UTC with nanosecond precision

* See [`timestamp` option](#opt-timestamp)

<a id="pino-symbols"></a>
### `pino.symbols` (Object)

For integration purposes with ecosystem and third-party libraries `pino.symbols`
exposes the symbols used to hold non-public state and methods on the logger instance.

Access to the symbols allows logger state to be adjusted, and methods to be overridden or
proxied for performant integration where necessary.

The `pino.symbols` object is intended for library implementers and shouldn't be utilized
for general use.

<a id="pino-version"></a>
### `pino.version` (String)

Exposes the Pino package version. Also available on the logger instance.

* See [`logger.version`](#version)

## Interfaces
<a id="pino-multistreamres"></a>

### `MultiStreamRes`
  Properties:

  * `write(data)`
    - `data` Object | string
    - Returns: void

 Write `data` onto the streams held by the current instance.
 *  `add(dest)`
    - `dest` [StreamEntry](#streamentry) | [DestinationStream](#destinationstream)
    - Returns: [MultiStreamRes](#multistreamres)

 Add `dest` stream to the array of streams of the current instance.
 *  `flushSync()`
    - Returns: `undefined`

 Call `flushSync` on each stream held by the current instance.

 * `lastId`
   - number

 The ID assigned to the last stream assigned to the current instance.
 * `minLevel`
   - number

 The minimum level amongst all the streams held by the current instance.

 * `remove(id)`
   - `id` [number]

 Removes a stream from the array of streams of the current instance using its assigned ID.
 * `streams`
    - Returns: [StreamEntry[]](#streamentry)

 The array of streams currently held by the current instance.
 * `clone(level)`
    - `level` [Level](#level-1)
    - Returns: [MultiStreamRes](#multistreamres)

 Returns a cloned object of the current instance but with the provided `level`.

### `StreamEntry`
  Properties:

  * `stream`
    - DestinationStream
  * `level`
    - Optional: [Level](#level-1)

### `DestinationStream`
  Properties:

  * `write(msg)`
    - `msg` string

## Types
### `Level`

  * Values: `"fatal"` | `"error"` | `"warn"` | `"info"` | `"debug"` | `"trace"`

## TypeScript

### Module Augmentation

Pino supports TypeScript module augmentation to extend its type definitions. This allows you to customize the logging behavior to fit your application's specific requirements.

#### `LogFnFields` Interface

The `LogFnFields` interface can be augmented to control what fields are allowed in logging method objects. This is particularly useful for:

- Preventing certain fields from being logged (for security or compliance reasons)
- Enforcing specific field types across your application
- Enforcing consistent structured logging

##### Banning Fields

You can ban specific fields from being passed to logging methods by setting them to `never`. This helps prevent users from unintentionally overriding fields that are already set in the logger's `base` option, or clarifies that these fields are predefined.

```typescript
declare module "pino" {
  interface LogFnFields {
    service?: never;
    version?: never;
  }
}


// These will now cause TypeScript errors
logger.info({ service: 'other-api', message: 'success' })   // ❌
logger.info({ message: 'success' })     // ✅
```

##### Enforcing Field Types

You can also enforce specific types for certain fields:

```typescript
declare module "pino" {
  interface LogFnFields {
    userId?: string;
    requestId?: string;
  }
}

// These will cause TypeScript errors
logger.info({ userId: 123 })           // ❌ Error: userId must be string
logger.info({ requestId: null })       // ❌ Error: requestId must be string

// This works fine
logger.info({ userId: '123' })     // ✅ Works fine
```

##### Enforcing Structured Logging

Required fields (non-optional) enforce consistent structured logging by requiring specific fields in all log objects:

```typescript
declare module "pino" {
  interface LogFnFields {
    userId: string
  }
}

logger.info({ userId: '123' }) // ✅ Works fine
logger.info({}) // ❌ Property 'userId' is missing in type '{}'
```

**Note**: Required fields will cause TypeScript errors when logging certain types like `Error` objects that don't contain the required properties:

```typescript
logger.error(new Error('test')) // ❌ Property 'userId' is missing in type 'Error'
```

This ensures that all log entries include required context fields, promoting consistent logging practices.



================================================
FILE: docs/asynchronous.md
================================================
# Asynchronous Logging

Asynchronous logging enables the minimum overhead of Pino.
Asynchronous logging works by buffering log messages and writing them in larger chunks.

```js
const pino = require('pino')
const logger = pino(pino.destination({
  dest: './my-file', // omit for stdout
  minLength: 4096, // Buffer before writing
  sync: false // Asynchronous logging
}))
```

It's always possible to turn on synchronous logging by passing `sync: true`. 
In this mode of operation, log messages are directly written to the
output stream as the messages are generated with a _blocking_ operation.

* See [`pino.destination`](/docs/api.md#pino-destination)
* `pino.destination` is implemented on [`sonic-boom` ⇗](https://github.com/mcollina/sonic-boom).

### AWS Lambda

Asynchronous logging is disabled by default on AWS Lambda or any other environment
that modifies `process.stdout`. If forcefully turned on, we recommend calling `dest.flushSync()` at the end
of each function execution to avoid losing data.

## Caveats

Asynchronous logging has a couple of important caveats:

* As opposed to the synchronous mode, there is not a one-to-one relationship between
  calls to logging methods (e.g. `logger.info`) and writes to a log file
* There is a possibility of the most recently buffered log messages being lost
  in case of a system failure, e.g. a power cut.

See also:

* [`pino.destination` API](/docs/api.md#pino-destination)
* [`destination` parameter](/docs/api.md#destination)



================================================
FILE: docs/benchmarks.md
================================================

# Benchmarks

`pino.info('hello world')`:

```

BASIC benchmark averages
Bunyan average: 377.434ms
Winston average: 270.249ms
Bole average: 172.690ms
Debug average: 220.527ms
LogLevel average: 222.802ms
Pino average: 114.801ms
PinoMinLength average: 70.968ms
PinoNodeStream average: 159.192ms

```

`pino.info({'hello': 'world'})`:

```

OBJECT benchmark averages
BunyanObj average: 410.379ms
WinstonObj average: 273.120ms
BoleObj average: 185.069ms
LogLevelObject average: 433.425ms
PinoObj average: 119.315ms
PinoMinLengthObj average: 76.968ms
PinoNodeStreamObj average: 164.268ms

```

`pino.info(aBigDeeplyNestedObject)`:

```

DEEP-OBJECT benchmark averages
BunyanDeepObj average: 1.839ms
WinstonDeepObj average: 5.604ms
BoleDeepObj average: 3.422ms
LogLevelDeepObj average: 11.716ms
PinoDeepObj average: 2.256ms
PinoMinLengthDeepObj average: 2.240ms
PinoNodeStreamDeepObj average: 2.595ms

```

`pino.info('hello %s %j %d', 'world', {obj: true}, 4, {another: 'obj'})`:

For a fair comparison, [LogLevel](http://npm.im/loglevel) was extended
to include a timestamp and [bole](http://npm.im/bole) had
`fastTime` mode switched on.




================================================
FILE: docs/browser.md
================================================
# Browser API

Pino is compatible with [`browserify`](https://npm.im/browserify) for browser-side usage:

This can be useful with isomorphic/universal JavaScript code.

By default, in the browser,
`pino` uses corresponding [Log4j](https://en.wikipedia.org/wiki/Log4j) `console` methods (`console.error`, `console.warn`, `console.info`, `console.debug`, `console.trace`) and uses `console.error` for any `fatal` level logs.

## Options

Pino can be passed a `browser` object in the options object,
which can have the following properties:

### `asObject` (Boolean)

```js
const pino = require('pino')({browser: {asObject: true}})
```

The `asObject` option will create a pino-like log object instead of
passing all arguments to a console method, for instance:

```js
pino.info('hi') // creates and logs {msg: 'hi', level: 30, time: <ts>}
```

When `write` is set, `asObject` will always be `true`.

### `asObjectBindingsOnly` (Boolean)

```js
const pino = require('pino')({browser: {asObjectBindingsOnly: true}})
```

The `asObjectBindingsOnly` option is similar to `asObject` but will keep the message
and arguments unformatted. This allows to defer formatting the message to the
actual call to `console` methods, where browsers then have richer formatting in
their devtools than when pino will format the message to a string first.

```js
pino.info('hello %s', 'world') // creates and logs {level: 30, time: <ts>}, 'hello %s', 'world'
```

### `formatters` (Object)

An object containing functions for formatting the shape of the log lines. When provided, it enables the logger to produce a pino-like log object with customized formatting. Currently, it supports formatting for the `level` object only.

##### `level`

Changes the shape of the log level. The default shape is `{ level: number }`.
The function takes two arguments, the label of the level (e.g. `'info'`)
and the numeric value (e.g. `30`).

```js
const formatters = {
  level (label, number) {
    return { level: number }
  }
}
```


### `reportCaller` (Boolean)

Attempts to capture and include the originating callsite (file:line:column) for each log call in the browser logger.

- When used together with `asObject` (or when `formatters` are provided), the callsite is added as a `caller` string property on the emitted log object.
- In the default mode (non‑object), the callsite string is appended as the last argument passed to the corresponding `console` method. This makes the location visible in the console output even though the console’s clickable header still points to Pino internals.

```js
// Object mode: adds `caller` to the log object
const pino = require('pino')({
  browser: {
    asObject: true,
    reportCaller: true
  }
})

pino.info('hello')
// -> { level: 30, msg: 'hello', time: <ts>, caller: '/path/to/file.js:10:15' }

// Default mode: appends the caller string as the last console argument
const pino2 = require('pino')({
  browser: {
    reportCaller: true
  }
})

pino2.info('hello')
// -> console receives: 'hello', '/path/to/file.js:10:15'
```

Notes:

- This is a best‑effort feature that parses the JavaScript Error stack. Stack formats vary across engines.
- The clickable link shown by devtools for a console message is determined by where `console.*` is invoked and cannot be changed by libraries; `reportCaller` surfaces the user callsite alongside the log message.


### `write` (Function | Object)

Instead of passing log messages to `console.log` they can be passed to
a supplied function.

If `write` is set to a single function, all logging objects are passed
to this function.

```js
const pino = require('pino')({
  browser: {
    write: (o) => {
      // do something with o
    }
  }
})
```

If `write` is an object, it can have methods that correspond to the
levels. When a message is logged at a given level, the corresponding
method is called. If a method isn't present, the logging falls back
to using the `console`.


```js
const pino = require('pino')({
  browser: {
    write: {
      info: function (o) {
        //process info log object
      },
      error: function (o) {
        //process error log object
      }
    }
  }
})
```

### `serialize`: (Boolean | Array)

The serializers provided to `pino` are ignored by default in the browser, including
the standard serializers provided with Pino. Since the default destination for log
messages is the console, values such as `Error` objects are enhanced for inspection,
which they otherwise wouldn't be if the Error serializer was enabled.

We can turn all serializers on,

```js
const pino = require('pino')({
  browser: {
    serialize: true
  }
})
```

Or we can selectively enable them via an array:

```js
const pino = require('pino')({
  serializers: {
    custom: myCustomSerializer,
    another: anotherSerializer
  },
  browser: {
    serialize: ['custom']
  }
})
// following will apply myCustomSerializer to the custom property,
// but will not apply anotherSerializer to another key
pino.info({custom: 'a', another: 'b'})
```

When `serialize` is `true` the standard error serializer is also enabled (see https://github.com/pinojs/pino/blob/master/docs/api.md#stdSerializers).
This is a global serializer, which will apply to any `Error` objects passed to the logger methods.

If `serialize` is an array the standard error serializer is also automatically enabled, it can
be explicitly disabled by including a string in the serialize array: `!stdSerializers.err`, like so:

```js
const pino = require('pino')({
  serializers: {
    custom: myCustomSerializer,
    another: anotherSerializer
  },
  browser: {
    serialize: ['!stdSerializers.err', 'custom'] //will not serialize Errors, will serialize `custom` keys
  }
})
```

The `serialize` array also applies to any child logger serializers (see https://github.com/pinojs/pino/blob/master/docs/api.md#discussion-2
for how to set child-bound serializers).

Unlike server pino the serializers apply to every object passed to the logger method,
if the `asObject` option is `true`, this results in the serializers applying to the
first object (as in server pino).

For more info on serializers see https://github.com/pinojs/pino/blob/master/docs/api.md#mergingobject.

### `transmit` (Object)

An object with `send` and `level` properties.

The `transmit.level` property specifies the minimum level (inclusive) of when the `send` function
should be called, if not supplied the `send` function be called based on the main logging `level`
(set via `options.level`, defaulting to `info`).

The `transmit` object must have a `send` function which will be called after
writing the log message. The `send` function is passed the level of the log
message and a `logEvent` object.

The `logEvent` object is a data structure representing a log message, it represents
the arguments passed to a logger statement, the level
at which they were logged, and the hierarchy of child bindings.

The `logEvent` format is structured like so:

```js
{
  ts = Number,
  messages = Array,
  bindings = Array,
  level: { label = String, value = Number}
}
```

The `ts` property is a Unix epoch timestamp in milliseconds, the time is taken from the moment the
logger method is called.

The `messages` array is all arguments passed to logger method, (for instance `logger.info('a', 'b', 'c')`
would result in `messages` array `['a', 'b', 'c']`).

The `bindings` array represents each child logger (if any), and the relevant bindings.
For instance, given `logger.child({a: 1}).child({b: 2}).info({c: 3})`, the bindings array
would hold `[{a: 1}, {b: 2}]` and the `messages` array would be `[{c: 3}]`. The `bindings`
are ordered according to their position in the child logger hierarchy, with the lowest index
being the top of the hierarchy.

By default, serializers are not applied to log output in the browser, but they will *always* be
applied to `messages` and `bindings` in the `logEvent` object. This allows us to ensure a consistent
format for all values between server and client.

The `level` holds the label (for instance `info`), and the corresponding numerical value
(for instance `30`). This could be important in cases where client-side level values and
labels differ from server-side.

The point of the `send` function is to remotely record log messages:

```js
const pino = require('pino')({
  browser: {
    transmit: {
      level: 'warn',
      send: function (level, logEvent) {
        if (level === 'warn') {
          // maybe send the logEvent to a separate endpoint
          // or maybe analyze the messages further before sending
        }
        // we could also use the `logEvent.level.value` property to determine
        // numerical value
        if (logEvent.level.value >= 50) { // covers error and fatal

          // send the logEvent somewhere
        }
      }
    }
  }
})
```

### `disabled` (Boolean)

```js
const pino = require('pino')({browser: {disabled: true}})
```

The `disabled` option will disable logging in browser if set
to `true`, by default it is set to `false`.



================================================
FILE: docs/bundling.md
================================================
# Bundling

Due to its internal architecture based on Worker Threads, it is not possible to bundle Pino *without* generating additional files.

In particular, a bundler must ensure that the following files are also bundled separately:

* `lib/worker.js` from the `thread-stream` dependency
* `file.js`
* `lib/worker.js`
* Any transport used by the user (like `pino-pretty`)

Once the files above have been generated, the bundler must also add information about the files above by injecting a code that sets `__bundlerPathsOverrides` in the `globalThis` object.

The variable is an object whose keys are an identifier for the files and the values are the paths of files relative to the currently bundle files.

Example:

```javascript
// Inject this using your bundle plugin
globalThis.__bundlerPathsOverrides = {
  'thread-stream-worker': pinoWebpackAbsolutePath('./thread-stream-worker.js')
  'pino/file': pinoWebpackAbsolutePath('./pino-file.js'),
  'pino-worker': pinoWebpackAbsolutePath('./pino-worker.js'),
  'pino-pretty': pinoWebpackAbsolutePath('./pino-pretty.js'),
};
```

Note that `pino/file`, `pino-worker` and `thread-stream-worker` are required identifiers. Other identifiers are possible based on the user configuration.

## Webpack Plugin

If you are a Webpack user, you can achieve this with [pino-webpack-plugin](https://github.com/pinojs/pino-webpack-plugin) without manual configuration of `__bundlerPathsOverrides`; however, you still need to configure it manually if you are using other bundlers.

## Esbuild Plugin

[esbuild-plugin-pino](https://github.com/davipon/esbuild-plugin-pino) is the esbuild plugin to generate extra pino files for bundling.

## Bun Plugin

[bun-plugin-pino](https://github.com/vktrl/bun-plugin-pino) is the Bun plugin to generate extra pino files for bundling.


================================================
FILE: docs/child-loggers.md
================================================
# Child loggers

Let's assume we want to have `"module":"foo"` added to every log within a
module `foo.js`.

To accomplish this, simply use a child logger:

```js
'use strict'
// imports a pino logger instance of `require('pino')()`
const parentLogger = require('./lib/logger')
const log = parentLogger.child({module: 'foo'})

function doSomething () {
  log.info('doSomething invoked')
}

module.exports = {
  doSomething
}
```

## Cost of child logging

Child logger creation is fast:

```
benchBunyanCreation*10000: 564.514ms
benchBoleCreation*10000: 283.276ms
benchPinoCreation*10000: 258.745ms
benchPinoExtremeCreation*10000: 150.506ms
```

Logging through a child logger has little performance penalty:

```
benchBunyanChild*10000: 556.275ms
benchBoleChild*10000: 288.124ms
benchPinoChild*10000: 231.695ms
benchPinoExtremeChild*10000: 122.117ms
```

Logging via the child logger of a child logger also has negligible overhead:

```
benchBunyanChildChild*10000: 559.082ms
benchPinoChildChild*10000: 229.264ms
benchPinoExtremeChildChild*10000: 127.753ms
```

## Duplicate keys caveat

Naming conflicts can arise between child loggers and
children of child loggers.

This isn't as bad as it sounds, even if the same keys between
parent and child loggers are used, Pino resolves the conflict in the sanest way.

For example, consider the following:

```js
const pino = require('pino')
pino(pino.destination('./my-log'))
  .child({a: 'property'})
  .child({a: 'prop'})
  .info('howdy')
```

```sh
$ cat my-log
{"pid":95469,"hostname":"MacBook-Pro-3.home","level":30,"msg":"howdy","time":1459534114473,"a":"property","a":"prop"}
```

Notice how there are two keys named `a` in the JSON output. The sub-child's properties
appear after the parent child properties.

At some point, the logs will most likely be processed (for instance with a [transport](transports.md)),
and this generally involves parsing. `JSON.parse` will return an object where the conflicting
namespace holds the final value assigned to it:

```sh
$ cat my-log | node -e "process.stdin.once('data', (line) => console.log(JSON.stringify(JSON.parse(line))))"
{"pid":95469,"hostname":"MacBook-Pro-3.home","level":30,"msg":"howdy","time":"2016-04-01T18:08:34.473Z","a":"prop"}
```

Ultimately the conflict is resolved by taking the last value, which aligns with Bunyan's child logging
behavior.

There may be cases where this edge case becomes problematic if a JSON parser with alternative behavior
is used to process the logs. It's recommended to be conscious of namespace conflicts with child loggers,
in light of an expected log processing approach.

One of Pino's performance tricks is to avoid building objects and stringifying
them, so we're building strings instead. This is why duplicate keys between
parents and children will end up in the log output.



================================================
FILE: docs/diagnostics.md
================================================
# Diagnostics

Pino provides [tracing channel](tc) events that allow insight into the
internal workings of the library. The currently supported events are:

+ `tracing:pino_asJson:start`: emitted when the final serialization process
  of logs is started. The emitted event payload has the following fields:
  - `instance`: the Pino instance associated with the function
  - `arguments`: the arguments passed to the function
+ `tracing:pino_asJson:end`: emitted at the end of the final serialization
  process. The emitted event payload has the following fields:
  - `instance`: the Pino instance associated with the function
  - `arguments`: the arguments passed to the function
  - `result`: the finalized, newline delimited, log line as a string

[tc]: https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels



================================================
FILE: docs/ecosystem.md
================================================
# Pino Ecosystem

This is a list of ecosystem modules that integrate with `pino`.

Modules listed under [Core](#core) are maintained by the Pino team. Modules
listed under [Community](#community) are maintained by independent community
members.

Please send a PR to add new modules!

<a id="core"></a>
## Core

### Frameworks
+ [`express-pino-logger`](https://github.com/pinojs/express-pino-logger): use
Pino to log requests within [express](https://expressjs.com/).
+ [`koa-pino-logger`](https://github.com/pinojs/koa-pino-logger): use Pino to
log requests within [Koa](https://koajs.com/).
+ [`restify-pino-logger`](https://github.com/pinojs/restify-pino-logger): use
Pino to log requests within [restify](http://restify.com/).
+ [`rill-pino-logger`](https://github.com/pinojs/rill-pino-logger): use Pino as
the logger for the [Rill framework](https://rill.site/).

### Utilities
+ [`pino-arborsculpture`](https://github.com/pinojs/pino-arborsculpture): change
log levels at runtime.
+ [`pino-caller`](https://github.com/pinojs/pino-caller): add callsite to the log line.
+ [`pino-clf`](https://github.com/pinojs/pino-clf): reformat Pino logs into
Common Log Format.
+ [`pino-console`](https://github.com/pinojs/pino-console): adapter for the [WHATWG Console](https://console.spec.whatwg.org/) spec. 
+ [`pino-debug`](https://github.com/pinojs/pino-debug): use Pino to interpret
[`debug`](https://npm.im/debug) logs.
+ [`pino-elasticsearch`](https://github.com/pinojs/pino-elasticsearch): send
Pino logs to an Elasticsearch instance.
+ [`pino-eventhub`](https://github.com/pinojs/pino-eventhub): send Pino logs
to an [Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-what-is-event-hubs).
+ [`pino-filter`](https://github.com/pinojs/pino-filter): filter Pino logs in
the same fashion as the [`debug`](https://npm.im/debug) module.
+ [`pino-gelf`](https://github.com/pinojs/pino-gelf): reformat Pino logs into
GELF format for Graylog.
+ [`pino-hapi`](https://github.com/pinojs/hapi-pino): use Pino as the logger
for [Hapi](https://hapijs.com/).
+ [`pino-http`](https://github.com/pinojs/pino-http): easily use Pino to log
requests with the core `http` module.
+ [`pino-http-print`](https://github.com/pinojs/pino-http-print): reformat Pino
logs into traditional [HTTPD](https://httpd.apache.org/) style request logs.
+ [`pino-mongodb`](https://github.com/pinojs/pino-mongodb): store Pino logs
in a MongoDB database.
+ [`pino-multi-stream`](https://github.com/pinojs/pino-multi-stream): send
logs to multiple destination streams (slow!).
+ [`pino-noir`](https://github.com/pinojs/pino-noir): redact sensitive information
in logs.
+ [`pino-pretty`](https://github.com/pinojs/pino-pretty): basic prettifier to
make log lines human-readable.
+ [`pino-socket`](https://github.com/pinojs/pino-socket): send logs to TCP or UDP
destinations.
+ [`pino-std-serializers`](https://github.com/pinojs/pino-std-serializers): the
core object serializers used within Pino.
+ [`pino-syslog`](https://github.com/pinojs/pino-syslog): reformat Pino logs
to standard syslog format.
+ [`pino-tee`](https://github.com/pinojs/pino-tee): pipe Pino logs into files
based upon log levels.
+ [`pino-test`](https://github.com/pinojs/pino-test): a set of utilities for 
verifying logs generated by the Pino logger.
+ [`pino-toke`](https://github.com/pinojs/pino-toke): reformat Pino logs
according to a given format string.


<a id="community"></a>
## Community

+ [`@google-cloud/pino-logging-gcp-config`](https://www.npmjs.com/package/@google-cloud/pino-logging-gcp-config): Config helper and formatter to output [Google Cloud Platform Structured Logging](https://cloud.google.com/logging/docs/structured-logging)
+ [`@newrelic/pino-enricher`](https://github.com/newrelic/newrelic-node-log-extensions/blob/main/packages/pino-log-enricher): a log customization to add New Relic context to use [Logs In Context](https://docs.newrelic.com/docs/logs/logs-context/logs-in-context/)
+ [`cloud-pine`](https://github.com/metcoder95/cloud-pine): transport that provides abstraction and compatibility with [`@google-cloud/logging`](https://www.npmjs.com/package/@google-cloud/logging).
+ [`cls-proxify`](https://github.com/keenondrums/cls-proxify): integration of pino and [CLS](https://github.com/jeff-lewis/cls-hooked). Useful for creating dynamically configured child loggers (e.g. with added trace ID) for each request.
+ [`crawlee-pino`](https://github.com/imyelo/crawlee-pino): use Pino to log within Crawlee
+ [`eslint-plugin-pino`](https://github.com/orzarchi/eslint-plugin-pino): linting rules for pino usage, primarly for preventing missing context in logs due to incorrect argument order.
+ [`pino-colada`](https://github.com/lrlna/pino-colada): cute ndjson formatter for pino.
+ [`pino-dev`](https://github.com/dnjstrom/pino-dev): simple prettifier for pino with built-in support for common ecosystem packages.
+ [`pino-fluentd`](https://github.com/davidedantonio/pino-fluentd): send Pino logs to Elasticsearch,
MongoDB, and many [others](https://www.fluentd.org/dataoutputs) via Fluentd.
+ [`pino-lambda`](https://github.com/FormidableLabs/pino-lambda): log transport for cloudwatch support inside aws-lambda 
+ [`pino-pretty-min`](https://github.com/unjello/pino-pretty-min): a minimal
prettifier inspired by the [logrus](https://github.com/sirupsen/logrus) logger.
+ [`pino-rotating-file`](https://github.com/homeaway/pino-rotating-file): a hapi-pino log transport for splitting logs into separate, automatically rotating files.
+ [`pino-tiny`](https://github.com/holmok/pino-tiny): a tiny (and extensible?) little log formatter for pino.



================================================
FILE: docs/help.md
================================================
# Help

* [Log rotation](#rotate)
* [Reopening log files](#reopening)
* [Saving to multiple files](#multiple)
* [Log filtering](#filter-logs)
* [Transports and systemd](#transport-systemd)
* [Log to different streams](#multi-stream)
* [Duplicate keys](#dupe-keys)
* [Log levels as labels instead of numbers](#level-string)
* [Pino with `debug`](#debug)
* [Unicode and Windows terminal](#windows)
* [Mapping Pino Log Levels to Google Cloud Logging (Stackdriver) Severity Levels](#stackdriver)
* [Using Grafana Loki to evaluate pino logs in a kubernetes cluster](#grafana-loki)
* [Avoid Message Conflict](#avoid-message-conflict)
* [Best performance for logging to `stdout`](#best-performance-for-stdout)
* [Testing](#testing)

<a id="rotate"></a>
## Log rotation

Use a separate tool for log rotation:
We recommend [logrotate](https://github.com/logrotate/logrotate).
Consider we output our logs to `/var/log/myapp.log` like so:

```
$ node server.js > /var/log/myapp.log
```

We would rotate our log files with logrotate, by adding the following to `/etc/logrotate.d/myapp`:

```
/var/log/myapp.log {
       su root
       daily
       rotate 7
       delaycompress
       compress
       notifempty
       missingok
       copytruncate
}
```

The `copytruncate` configuration has a very slight possibility of lost log lines due
to a gap between copying and truncating - the truncate may occur after additional lines
have been written. To perform log rotation without `copytruncate`, see the [Reopening log files](#reopening)
help.

<a id="reopening"></a>
## Reopening log files

In cases where a log rotation tool doesn't offer copy-truncate capabilities,
or where using them is deemed inappropriate, `pino.destination`
can reopen file paths after a file has been moved away.

One way to use this is to set up a `SIGUSR2` or `SIGHUP` signal handler that
reopens the log file destination, making sure to write the process PID out
somewhere so the log rotation tool knows where to send the signal.

```js
// write the process pid to a well known location for later
const fs = require('node:fs')
fs.writeFileSync('/var/run/myapp.pid', process.pid)

const dest = pino.destination('/log/file')
const logger = require('pino')(dest)
process.on('SIGHUP', () => dest.reopen())
```

The log rotation tool can then be configured to send this signal to the process
after a log rotation event has occurred.

Given a similar scenario as in the [Log rotation](#rotate) section a basic
`logrotate` config that aligns with this strategy would look similar to the following:

```
/var/log/myapp.log {
       su root
       daily
       rotate 7
       delaycompress
       compress
       notifempty
       missingok
       postrotate
           kill -HUP `cat /var/run/myapp.pid`
       endscript
}
```

<a id="multiple"></a>
## Saving to multiple files

See [`pino.multistream`](/docs/api.md#pino-multistream).

<a id="filter-logs"></a>
## Log Filtering
The Pino philosophy advocates common, preexisting, system utilities.

Some recommendations in line with this philosophy are:

1. Use [`grep`](https://linux.die.net/man/1/grep):
    ```sh
    $ # View all "INFO" level logs
    $ node app.js | grep '"level":30'
    ```
1. Use [`jq`](https://stedolan.github.io/jq/):
    ```sh
    $ # View all "ERROR" level logs
    $ node app.js | jq 'select(.level == 50)'
    ```

<a id="transport-systemd"></a>
## Transports and systemd
`systemd` makes it complicated to use pipes in services. One method for overcoming
this challenge is to use a subshell:

```
ExecStart=/bin/sh -c '/path/to/node app.js | pino-transport'
```

<a id="multi-stream"></a>
## Log to different streams

Pino's default log destination is the singular destination of `stdout`. While
not recommended for performance reasons, multiple destinations can be targeted
by using [`pino.multistream`](/docs/api.md#pino-multistream).

In this example, we use `stderr` for `error` level logs and `stdout` as default
for all other levels (e.g. `debug`, `info`, and `warn`).

```js
const pino = require('pino')
var streams = [
  {level: 'debug', stream: process.stdout},
  {level: 'error', stream: process.stderr},
  {level: 'fatal', stream: process.stderr}
]

const logger = pino({
  name: 'my-app',
  level: 'debug', // must be the lowest level of all streams
}, pino.multistream(streams))
```

<a id="dupe-keys"></a>
## How Pino handles duplicate keys

Duplicate keys are possibly when a child logger logs an object with a key that
collides with a key in the child loggers bindings.

See the [child logger duplicate keys caveat](/docs/child-loggers.md#duplicate-keys-caveat)
for information on this is handled.

<a id="level-string"></a>
## Log levels as labels instead of numbers
Pino log lines are meant to be parsable. Thus, Pino's default mode of operation
is to print the level value instead of the string name. 
However, you can use the [`formatters`](/docs/api.md#formatters-object) option 
with a [`level`](/docs/api.md#level) function to print the string name instead of the level value :

```js
const pino = require('pino')

const log = pino({
  formatters: {
    level: (label) => {
      return {
        level: label
      }
    }
  }
})

log.info('message')

// {"level":"info","time":1661632832200,"pid":18188,"hostname":"foo","msg":"message"}
```

Although it works, we recommend using one of these options instead if you are able:

1. If the only change desired is the name then a transport can be used. One such
transport is [`pino-text-level-transport`](https://npm.im/pino-text-level-transport).
1. Use a prettifier like [`pino-pretty`](https://npm.im/pino-pretty) to make
the logs human friendly.

<a id="debug"></a>
## Pino with `debug`

The popular [`debug`](https://npm.im/debug) is used in many modules across the ecosystem.

The [`pino-debug`](https://github.com/pinojs/pino-debug) module
can capture calls to `debug` loggers and run them
through `pino` instead. This results in a 10x (20x in asynchronous mode)
performance improvement - even though `pino-debug` is logging additional
data and wrapping it in JSON.

To quickly enable this install [`pino-debug`](https://github.com/pinojs/pino-debug)
and preload it with the `-r` flag, enabling any `debug` logs with the
`DEBUG` environment variable:

```sh
$ npm i pino-debug
$ DEBUG=* node -r pino-debug app.js
```

[`pino-debug`](https://github.com/pinojs/pino-debug) also offers fine-grain control to map specific `debug`
namespaces to `pino` log levels. See [`pino-debug`](https://github.com/pinojs/pino-debug)
for more.

<a id="windows"></a>
## Unicode and Windows terminal

Pino uses [sonic-boom](https://github.com/mcollina/sonic-boom) to speed
up logging. Internally, it uses [`fs.write`](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_write_fd_string_position_encoding_callback) to write log lines directly to a file
descriptor. On Windows, Unicode output is not handled properly in the
terminal (both `cmd.exe` and PowerShell), and as such the output could
be visualized incorrectly if the log lines include utf8 characters. It
is possible to configure the terminal to visualize those characters
correctly with the use of [`chcp`](https://ss64.com/nt/chcp.html) by
executing in the terminal `chcp 65001`. This is a known limitation of
Node.js.

<a id="stackdriver"></a>
## Mapping Pino Log Levels to Google Cloud Logging (Stackdriver) Severity Levels

Google Cloud Logging uses `severity` levels instead of log levels. As a result, all logs may show as INFO
level logs while completely ignoring the level set in the pino log. Google Cloud Logging also prefers that
log data is present inside a `message` key instead of the default `msg` key that Pino uses. Use a technique
similar to the one below to retain log levels in Google Cloud Logging

```js
const pino = require('pino')

// https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
const PinoLevelToSeverityLookup = {
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL',
};

const defaultPinoConf = {
  messageKey: 'message',
  formatters: {
    level(label, number) {
      return {
        severity: PinoLevelToSeverityLookup[label] || PinoLevelToSeverityLookup['info'],
        level: number,
      }
    }
  },
}

module.exports = function createLogger(options) {
  return pino(Object.assign({}, options, defaultPinoConf))
}
```

A library that configures Pino for
[Google Cloud Structured Logging](https://cloud.google.com/logging/docs/structured-logging)
is available at:
[@google-cloud/pino-logging-gcp-config](https://www.npmjs.com/package/@google-cloud/pino-logging-gcp-config)

This library has the following features:

+ Converts Pino log levels to Google Cloud Logging log levels, as above
+ Uses `message` instead of `msg` for the message key, as above
+ Adds a millisecond-granularity timestamp in the 
  [structure](https://cloud.google.com/logging/docs/agent/logging/configuration#timestamp-processing)
  recognised by Google Cloud Logging eg: \
  `"timestamp":{"seconds":1445470140,"nanos":123000000}`
+ Adds a sequential
  [`insertId`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.insert_id)
  to ensure log messages with identical timestamps are ordered correctly.
+ Logs including an `Error` object have the
  [`stack_trace`](https://cloud.google.com/error-reporting/docs/formatting-error-messages#log-error)
  property set so that the error is forwarded to Google Cloud Error Reporting.
+ Includes a
  [`ServiceContext`](https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext)
  object in the logs for Google Cloud Error Reporting, auto detected from the
  environment if not specified
+ Maps the OpenTelemetry properties `span_id`, `trace_id`, and `trace_flags`
  to the equivalent Google Cloud Logging fields.

<a id="grafana-loki"></a>
## Using Grafana Loki to evaluate pino logs in a kubernetes cluster

To get pino logs into Grafana Loki there are two options:

1. **Push:** Use [pino-loki](https://github.com/Julien-R44/pino-loki) to send logs directly to Loki.
1. **Pull:** Configure Grafana Promtail to read and properly parse the logs before sending them to Loki.  
   Similar to Google Cloud logging, this involves remapping the log levels. See this [article](https://medium.com/@janpaepke/structured-logging-in-the-grafana-monitoring-stack-8aff0a5af2f5) for details.

<a id="avoid-message-conflict"></a>
## Avoid Message Conflict

As described in the [`message` documentation](/docs/api.md#message), when a log
is written like `log.info({ msg: 'a message' }, 'another message')` then the
final output JSON will have `"msg":"another message"` and the `'a message'`
string will be lost. To overcome this, the [`logMethod` hook](/docs/api.md#logmethod)
can be used:

```js
'use strict'

const log = require('pino')({
  level: 'debug',
  hooks: {
    logMethod (inputArgs, method) {
      if (inputArgs.length === 2 && inputArgs[0].msg) {
       inputArgs[0].originalMsg = inputArgs[0].msg
      }
      return method.apply(this, inputArgs)
    }
  }
})

log.info('no original message')
log.info({ msg: 'mapped to originalMsg' }, 'a message')

// {"level":30,"time":1596313323106,"pid":63739,"hostname":"foo","msg":"no original message"}
// {"level":30,"time":1596313323107,"pid":63739,"hostname":"foo","msg":"a message","originalMsg":"mapped to originalMsg"}
```

<a id="best-performance-for-stdout"></a>
## Best performance for logging to `stdout`

The best performance for logging directly to stdout is _usually_ achieved by using the
default configuration:

```js
const log = require('pino')();
```

You should only have to configure custom transports or other settings
if you have broader logging requirements.

<a id="testing"></a>
## Testing

See [`pino-test`](https://github.com/pinojs/pino-test).



================================================
FILE: docs/lts.md
================================================
## Long Term Support

Pino's Long Term Support (LTS) is provided according to the schedule laid
out in this document:

1. Major releases, "X" release of [semantic versioning][semver] X.Y.Z release
   versions, are supported for a minimum period of six months from their release
   date. The release date of any specific version can be found at
   [https://github.com/pinojs/pino/releases](https://github.com/pinojs/pino/releases).

1. Major releases will receive security updates for an additional six months
   from the release of the next major release. After this period
   we will still review and release security fixes as long as they are
   provided by the community and they do not violate other constraints,
   e.g. minimum supported Node.js version.

1. Major releases will be tested and verified against all Node.js
   release lines that are supported by the
   [Node.js LTS policy](https://github.com/nodejs/Release) within the
   LTS period of that given Pino release line. This implies that only
   the latest Node.js release of a given line is supported.

A "month" is defined as 30 consecutive days.

> ## Security Releases and Semver
>
> As a consequence of providing long-term support for major releases, there
> are occasions where we need to release breaking changes as a _minor_
> version release. Such changes will _always_ be noted in the
> [release notes](https://github.com/pinojs/pino/releases).
>
> To avoid automatically receiving breaking security updates it is possible to use
> the tilde (`~`) range qualifier. For example, to get patches for the 6.1
> release, and avoid automatically updating to the 6.1 release, specify
> the dependency as `"pino": "~6.1.x"`. This will leave your application vulnerable,
> so please use with caution.

[semver]: https://semver.org/

<a name="lts-schedule"></a>

### Schedule

| Version | Release Date | End Of LTS Date | Node.js              |
| :------ | :----------- | :-------------- | :------------------- |
| 9.x     | 2024-04-26   | TBD             | 18, 20, 22            |
| 8.x     | 2022-06-01   | 2024-10-26      | 14, 16, 18, 20        |
| 7.x     | 2021-10-14   | 2023-06-01      | 12, 14, 16           |
| 6.x     | 2020-03-07   | 2022-04-14      | 10, 12, 14, 16       |

<a name="supported-os"></a>

### CI tested operating systems

Pino uses GitHub Actions for CI testing, please refer to
[GitHub's documentation regarding workflow runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)
for further details on what the latest virtual environment is in relation to
the YAML workflow labels below:

| OS      | YAML Workflow Label    | Node.js      |
|---------|------------------------|--------------|
| Linux   | `ubuntu-latest`        | 18, 20, 22   |
| Windows | `windows-latest`       | 18, 20, 22   |
| MacOS   | `macos-latest`         | 18, 20, 22   |



================================================
FILE: docs/pretty.md
================================================
# Pretty Printing

By default, Pino log lines are newline delimited JSON (NDJSON). This is perfect
for production usage and long-term storage. It's not so great for development
environments. Thus, Pino logs can be prettified by using a Pino prettifier
module like [`pino-pretty`][pp]:

1. Install a prettifier module as a separate dependency, e.g. `npm install pino-pretty`.
2. Instantiate the logger with the `transport.target` option set to `'pino-pretty'`:
  ```js
  const pino = require('pino')
  const logger = pino({
    transport: {
      target: 'pino-pretty'
    },
  })

  logger.info('hi')
  ```
3. The transport option can also have an options object containing `pino-pretty` options:
  ```js
  const pino = require('pino')
  const logger = pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  })

  logger.info('hi')
  ```

  [pp]: https://github.com/pinojs/pino-pretty



================================================
FILE: docs/redaction.md
================================================
# Redaction

> Redaction is not supported in the browser [#670](https://github.com/pinojs/pino/issues/670)

To redact sensitive information, supply paths to keys that hold sensitive data
using the `redact` option. Note that paths that contain hyphens need to use
brackets to access the hyphenated property:

```js
const logger = require('.')({
  redact: ['key', 'path.to.key', 'stuff.thats[*].secret', 'path["with-hyphen"]']
})

logger.info({
  key: 'will be redacted',
  path: {
    to: {key: 'sensitive', another: 'thing'}
  },
  stuff: {
    thats: [
      {secret: 'will be redacted', logme: 'will be logged'},
      {secret: 'as will this', logme: 'as will this'}
    ]
  }
})
```

This will output:

```JSON
{"level":30,"time":1527777350011,"pid":3186,"hostname":"Davids-MacBook-Pro-3.local","key":"[Redacted]","path":{"to":{"key":"[Redacted]","another":"thing"}},"stuff":{"thats":[{"secret":"[Redacted]","logme":"will be logged"},{"secret":"[Redacted]","logme":"as will this"}]}}
```

The `redact` option can take an array (as shown in the above example) or
an object. This allows control over *how* information is redacted.

For instance, setting the censor:

```js
const logger = require('.')({
  redact: {
    paths: ['key', 'path.to.key', 'stuff.thats[*].secret'],
    censor: '**GDPR COMPLIANT**'
  }
})

logger.info({
  key: 'will be redacted',
  path: {
    to: {key: 'sensitive', another: 'thing'}
  },
  stuff: {
    thats: [
      {secret: 'will be redacted', logme: 'will be logged'},
      {secret: 'as will this', logme: 'as will this'}
    ]
  }
})
```

This will output:

```JSON
{"level":30,"time":1527778563934,"pid":3847,"hostname":"Davids-MacBook-Pro-3.local","key":"**GDPR COMPLIANT**","path":{"to":{"key":"**GDPR COMPLIANT**","another":"thing"}},"stuff":{"thats":[{"secret":"**GDPR COMPLIANT**","logme":"will be logged"},{"secret":"**GDPR COMPLIANT**","logme":"as will this"}]}}
```

The `redact.remove` option also allows for the key and value to be removed from output:

```js
const logger = require('.')({
  redact: {
    paths: ['key', 'path.to.key', 'stuff.thats[*].secret'],
    remove: true
  }
})

logger.info({
  key: 'will be redacted',
  path: {
    to: {key: 'sensitive', another: 'thing'}
  },
  stuff: {
    thats: [
      {secret: 'will be redacted', logme: 'will be logged'},
      {secret: 'as will this', logme: 'as will this'}
    ]
  }
})
```

This will output

```JSON
{"level":30,"time":1527782356751,"pid":5758,"hostname":"Davids-MacBook-Pro-3.local","path":{"to":{"another":"thing"}},"stuff":{"thats":[{"logme":"will be logged"},{"logme":"as will this"}]}}
```

See [pino options in API](/docs/api.md#redact-array-object) for `redact` API details.

<a name="paths"></a>
## Path Syntax

The syntax for paths supplied to the `redact` option conform to the syntax in path lookups
in standard ECMAScript, with two additions:

* paths may start with bracket notation
* paths may contain the asterisk `*` to denote a wildcard
* paths are **case sensitive**

By way of example, the following are all valid paths:

* `a.b.c`
* `a["b-c"].d`
* `["a-b"].c`
* `a.b.*`
* `a[*].b`

## Overhead

Pino's redaction functionality is built on top of [`fast-redact`](https://github.com/davidmarkclements/fast-redact)
which adds about 2% overhead to `JSON.stringify` when using paths without wildcards.

When used with pino logger with a single redacted path, any overhead is within noise -
a way to deterministically measure its effect has not been found. This is because it is not a bottleneck.

However, wildcard redaction does carry a non-trivial cost relative to explicitly declaring the keys
(50% in a case where four keys are redacted across two objects). See
the [`fast-redact` benchmarks](https://github.com/davidmarkclements/fast-redact#benchmarks) for details.

## Safety

The `redact` option is intended as an initialization time configuration option.
Path strings must not originate from user input.
The `fast-redact` module uses a VM context to syntax check the paths, user input
should never be combined with such an approach. See the [`fast-redact` Caveat](https://github.com/davidmarkclements/fast-redact#caveat)
and the [`fast-redact` Approach](https://github.com/davidmarkclements/fast-redact#approach) for in-depth information.



================================================
FILE: docs/transports.md
================================================
# Transports

Pino transports can be used for both transmitting and transforming log output.

The way Pino generates logs:

1. Reduces the impact of logging on an application to the absolute minimum.
2. Gives greater flexibility in how logs are processed and stored.

It is recommended that any log transformation or transmission is performed either
in a separate thread or a separate process.

Before Pino v7 transports would ideally operate in a separate process - these are
now referred to as [Legacy Transports](#legacy-transports).

From Pino v7 and upwards transports can also operate inside a [Worker Thread][worker-thread]
and can be used or configured via the options object passed to `pino` on initialization.
In this case the transports would always operate asynchronously (unless `options.sync` is set to `true` in transport options), and logs would be
flushed as quickly as possible (there is nothing to do).

[worker-thread]: https://nodejs.org/dist/latest-v14.x/docs/api/worker_threads.html

## v7+ Transports

A transport is a module that exports a default function that returns a writable stream:

```js
import { createWriteStream } from 'node:fs'

export default (options) => {
  return createWriteStream(options.destination)
}
```

Let's imagine the above defines our "transport" as the file `my-transport.mjs`
(ESM files are supported even if the project is written in CJS).

We would set up our transport by creating a transport stream with `pino.transport`
and passing it to the `pino` function:

```js
const pino = require('pino')
const transport = pino.transport({
  target: '/absolute/path/to/my-transport.mjs'
})
pino(transport)
```

The transport code will be executed in a separate worker thread. The main thread
will write logs to the worker thread, which will write them to the stream returned
from the function exported from the transport file/module.

The exported function can also be async. If we use an async function we can throw early
if the transform could not be opened. As an example:

```js
import fs from 'node:fs'
import { once } from 'events'
export default async (options) => {
  const stream = fs.createWriteStream(options.destination)
  await once(stream, 'open')
  return stream
}
```

While initializing the stream we're able to use `await` to perform asynchronous operations. In this
case, waiting for the write streams `open` event.

Let's imagine the above was published to npm with the module name `some-file-transport`.

The `options.destination` value can be set when creating the transport stream with `pino.transport` like so:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'some-file-transport',
  options: { destination: '/dev/null' }
})
pino(transport)
```

Note here we've specified a module by package rather than by relative path. The options object we provide
is serialized and injected into the transport worker thread, then passed to the module's exported function.
This means that the options object can only contain types that are supported by the
[Structured Clone Algorithm][sca] which is used to (de)serialize objects between threads.

What if we wanted to use both transports, but send only error logs to `my-transport.mjs` while
sending all logs to `some-file-transport`? We can use the `pino.transport` function's `level` option:

```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' }}
  ]
})
pino(transport)
```

If we're using custom levels, they should be passed in when using more than one transport.
```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' }
  ],
  levels: { foo: 35 }
})
pino(transport)
```

It is also possible to use the `dedupe` option to send logs only to the stream with the higher level.
```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' }
  ],
  dedupe: true
})
pino(transport)
```

To make pino log synchronously, pass `sync: true` to transport options.
```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
  ],
  dedupe: true,
  sync: true,
});
pino(transport);
```

For more details on `pino.transport` see the [API docs for `pino.transport`][pino-transport].

[pino-transport]: /docs/api.md#pino-transport
[sca]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

<a id="writing"></a>
### Writing a Transport

The module [pino-abstract-transport](https://github.com/pinojs/pino-abstract-transport) provides
a simple utility to parse each line.  Its usage is highly recommended.

You can see an example using an async iterator with ESM:

```js
import build from 'pino-abstract-transport'
import SonicBoom from 'sonic-boom'
import { once } from 'events'

export default async function (opts) {
  // SonicBoom is necessary to avoid loops with the main thread.
  // It is the same of pino.destination().
  const destination = new SonicBoom({ dest: opts.destination || 1, sync: false })
  await once(destination, 'ready')

  return build(async function (source) {
    for await (let obj of source) {
      const toDrain = !destination.write(obj.msg.toUpperCase() + '\n')
      // This block will handle backpressure
      if (toDrain) {
        await once(destination, 'drain')
      }
    }
  }, {
    async close (err) {
      destination.end()
      await once(destination, 'close')
    }
  })
}
```

or using Node.js streams and CommonJS:

```js
'use strict'

const build = require('pino-abstract-transport')
const SonicBoom = require('sonic-boom')

module.exports = function (opts) {
  const destination = new SonicBoom({ dest: opts.destination || 1, sync: false })
  return build(function (source) {
    source.pipe(destination)
  }, {
    close (err, cb) {
      destination.end()
      destination.on('close', cb.bind(null, err))
    }
  })
}
```

(It is possible to use the async iterators with CommonJS and streams with ESM.)

To consume async iterators in batches, consider using the [hwp](https://github.com/mcollina/hwp) library.

The `close()` function is needed to make sure that the stream is closed and flushed when its
callback is called or the returned promise resolves. Otherwise, log lines will be lost.

### Writing to a custom transport & stdout

In case you want to both use a custom transport, and output the log entries with default processing to STDOUT, you can use 'pino/file' transport configured with `destination: 1`:

```js
    const transports = [
      {
        target: 'pino/file',
        options: { destination: 1 } // this writes to STDOUT
      },
      {
        target: 'my-custom-transport',
        options: { someParameter: true } 
      }
    ]

    const logger = pino(pino.transport({ targets: transports }))
```

### Creating a transport pipeline

As an example, the following transport returns a `Transform` stream:

```js
import build from 'pino-abstract-transport'
import { pipeline, Transform } from 'node:stream'
export default async function (options) {
  return build(function (source) {
    const myTransportStream = new Transform({
      // Make sure autoDestroy is set,
      // this is needed in Node v12 or when using the
      // readable-stream module.
      autoDestroy: true,

      objectMode: true,
      transform (chunk, enc, cb) {

        // modifies the payload somehow
        chunk.service = 'pino'

        // stringify the payload again
        this.push(`${JSON.stringify(chunk)}\n`)
        cb()
      }
    })
    pipeline(source, myTransportStream, () => {})
    return myTransportStream
  }, {
    // This is needed to be able to pipeline transports.
    enablePipelining: true
  })
}
```

Then you can pipeline them with:

```js
import pino from 'pino'

const logger = pino({
  transport: {
    pipeline: [{
      target: './my-transform.js'
    }, {
      // Use target: 'pino/file' with STDOUT descriptor 1 to write
      // logs without any change.
      target: 'pino/file',
      options: { destination: 1 }
    }]
  }
})

logger.info('hello world')
```

__NOTE: there is no "default" destination for a pipeline but
a terminating target, i.e. a `Writable` stream.__

### TypeScript compatibility

Pino provides basic support for transports written in TypeScript.

Ideally, they should be transpiled to ensure maximum compatibility, but sometimes
you might want to use tools such as TS-Node, to execute your TypeScript
code without having to go through an explicit transpilation step.

You can use your TypeScript code without explicit transpilation, but there are
some known caveats:
- For "pure" TypeScript code, ES imports are still not supported (ES imports are
  supported once the code is transpiled).
- Only TS-Node is supported for now, there's no TSM support.
- Running transports TypeScript code on TS-Node seems to be problematic on
  Windows systems, there's no official support for that yet.

### Notable transports

#### `pino/file`

The `pino/file` transport routes logs to a file (or file descriptor).

The `options.destination` property may be set to specify the desired file destination.

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '/path/to/file' }
})
pino(transport)
```

By default, the `pino/file` transport assumes the directory of the destination file exists. If it does not exist, the transport will throw an error when it attempts to open the file for writing. The `mkdir` option may be set to `true` to configure the transport to create the directory, if it does not exist, before opening the file for writing.

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '/path/to/file', mkdir: true }
})
pino(transport)
```

By default, the `pino/file` transport appends to the destination file if it exists. The `append` option may be set to `false` to configure the transport to truncate the file upon opening it for writing.

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '/path/to/file', append: false }
})
pino(transport)
```

The `options.destination` property may also be a number to represent a file descriptor. Typically this would be `1` to write to STDOUT or `2` to write to STDERR. If `options.destination` is not set, it defaults to `1` which means logs will be written to STDOUT. If `options.destination` is a string integer, e.g. `'1'`, it will be coerced to a number and used as a file descriptor. If this is not desired, provide a full path, e.g. `/tmp/1`.

The difference between using the `pino/file` transport builtin and using `pino.destination` is that `pino.destination` runs in the main thread, whereas `pino/file` sets up `pino.destination` in a worker thread.

#### `pino-pretty`

The [`pino-pretty`][pino-pretty] transport prettifies logs.

By default the `pino-pretty` builtin logs to STDOUT.

The `options.destination` property may be set to log pretty logs to a file descriptor or file. The following would send the prettified logs to STDERR:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-pretty',
  options: { destination: 1 } // use 2 for stderr
})
pino(transport)
```

### Asynchronous startup

The new transports boot asynchronously and calling `process.exit()` before the transport
starts will cause logs to not be delivered.

```js
const pino = require('pino')
const transport = pino.transport({
  targets: [
    { target: '/absolute/path/to/my-transport.mjs', level: 'error' },
    { target: 'some-file-transport', options: { destination: '/dev/null' } }
  ]
})
const logger = pino(transport)

logger.info('hello')

// If logs are printed before the transport is ready when process.exit(0) is called,
// they will be lost.
transport.on('ready', function () {
  process.exit(0)
})
```

## Legacy Transports

A legacy Pino "transport" is a supplementary tool that consumes Pino logs.

Consider the following example for creating a transport:

```js
const { pipeline, Writable } = require('node:stream')
const split = require('split2')

const myTransportStream = new Writable({
  write (chunk, enc, cb) {
  // apply a transform and send to STDOUT
  console.log(chunk.toString().toUpperCase())
  cb()
  }
})

pipeline(process.stdin, split(JSON.parse), myTransportStream)
```

The above defines our "transport" as the file `my-transport-process.js`.

Logs can now be consumed using shell piping:

```sh
node my-app-which-logs-stuff-to-stdout.js | node my-transport-process.js
```

Ideally, a transport should consume logs in a separate process to the application,
Using transports in the same process causes unnecessary load and slows down
Node's single-threaded event loop.

## Known Transports

PRs to this document are welcome for any new transports!

### Pino v7+ Compatible

+ [@axiomhq/pino](#@axiomhq/pino)
+ [@logtail/pino](#@logtail/pino)
+ [@macfja/pino-fingers-crossed](#macfja-pino-fingers-crossed)
+ [@openobserve/pino-openobserve](#pino-openobserve)
+ [datadog-logger-integrations](#datadog-logger-integrations)
+ [pino-airbrake-transport](#pino-airbrake-transport)
+ [pino-axiom](#pino-axiom)
+ [pino-discord-webhook](#pino-discord-webhook)
+ [pino-elasticsearch](#pino-elasticsearch)
+ [pino-hana](#pino-hana)
+ [pino-logflare](#pino-logflare)
+ [pino-logfmt](#pino-logfmt)
+ [pino-loki](#pino-loki)
+ [pino-opentelemetry-transport](#pino-opentelemetry-transport)
+ [pino-pretty](#pino-pretty)
+ [pino-roll](#pino-roll)
+ [pino-seq-transport](#pino-seq-transport)
+ [pino-sentry-transport](#pino-sentry-transport)
+ [pino-slack-webhook](#pino-slack-webhook)
+ [pino-telegram-webhook](#pino-telegram-webhook)
+ [pino-yc-transport](#pino-yc-transport)

### Legacy

+ [pino-applicationinsights](#pino-applicationinsights)
+ [pino-azuretable](#pino-azuretable)
+ [pino-cloudwatch](#pino-cloudwatch)
+ [pino-couch](#pino-couch)
+ [pino-datadog](#pino-datadog)
+ [pino-gelf](#pino-gelf)
+ [pino-http-send](#pino-http-send)
+ [pino-kafka](#pino-kafka)
+ [pino-logdna](#pino-logdna)
+ [pino-loki](#pino-loki)
+ [pino-mq](#pino-mq)
+ [pino-mysql](#pino-mysql)
+ [pino-papertrail](#pino-papertrail)
+ [pino-pg](#pino-pg)
+ [pino-redis](#pino-redis)
+ [pino-sentry](#pino-sentry)
+ [pino-seq](#pino-seq)
+ [pino-socket](#pino-socket)
+ [pino-stackdriver](#pino-stackdriver)
+ [pino-syslog](#pino-syslog)
+ [pino-websocket](#pino-websocket)


<a id="@axiomhq/pino"></a>
### @axiomhq/pino

[@axiomhq/pino](https://www.npmjs.com/package/@axiomhq/pino) is the official [Axiom](https://axiom.co/) transport for Pino, using [axiom-js](https://github.com/axiomhq/axiom-js).

```javascript
import pino from 'pino';

const logger = pino(
  { level: 'info' },
  pino.transport({
    target: '@axiomhq/pino',
    options: {
      dataset: process.env.AXIOM_DATASET,
      token: process.env.AXIOM_TOKEN,
    },
  }),
);
```

then you can use the logger as usual:

```js
logger.info('Hello from pino!');
```

For further examples, head over to the [examples](https://github.com/axiomhq/axiom-js/tree/main/examples/pino) directory.

<a id="@logtail/pino"></a>
### @logtail/pino

The [@logtail/pino](https://www.npmjs.com/package/@logtail/pino) NPM package is a transport that forwards logs to [Logtail](https://logtail.com) by [Better Stack](https://betterstack.com).

[Quick start guide ⇗](https://betterstack.com/docs/logs/javascript/pino)

<a id="macfja-pino-fingers-crossed"></a>
### @macfja/pino-fingers-crossed

[@macfja/pino-fingers-crossed](https://github.com/MacFJA/js-pino-fingers-crossed) is a Pino v7+ transport that holds logs until a log level is reached, allowing to only have logs when it matters.

```js
const pino = require('pino');
const { default: fingersCrossed, enable } = require('@macfja/pino-fingers-crossed')

const logger = pino(fingersCrossed());

logger.info('Will appear immedialty')
logger.error('Will appear immedialty')

logger.setBindings({ [enable]: 50 })
logger.info('Will NOT appear immedialty')
logger.info('Will NOT appear immedialty')
logger.error('Will appear immedialty as well as the 2 previous messages') // error log are level 50
logger.info('Will NOT appear')
logger.info({ [enable]: false }, 'Will appear immedialty')
logger.info('Will NOT appear')
```
<a id="pino-openobserve"></a>
### @openobserve/pino-openobserve

[@openobserve/pino-openobserve](https://github.com/openobserve/pino-openobserve) is a 
Pino v7+ transport that will send logs to an 
[OpenObserve](https://openobserve.ai) instance.

```
const pino = require('pino');
const OpenobserveTransport = require('@openobserve/pino-openobserve');

const logger = pino({
  level: 'info',
  transport: {
    target: OpenobserveTransport,
    options: {
      url: 'https://your-openobserve-server.com',
      organization: 'your-organization',
      streamName: 'your-stream',
      auth: {
        username: 'your-username',
        password: 'your-password',
      },
    },
  },
});
```

For full documentation check the [README](https://github.com/openobserve/pino-openobserve).

<a id="pino-airbrake-transport"></a>
### pino-airbrake-transport

[pino-airbrake-transport][pino-airbrake-transport] is a Pino v7+ compatible transport to forward log events to [Airbrake][Airbrake]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-airbrake-transport',
  options: {
    airbrake: {
      projectId: 1,
      projectKey: "REPLACE_ME",
      environment: "production",
      // additional options for airbrake
      performanceStats: false,
    },
  },
  level: "error", // minimum log level that should be sent to airbrake
})
pino(transport)
```

[pino-airbrake-transport]: https://github.com/enricodeleo/pino-airbrake-transport
[Airbrake]: https://airbrake.io/

<a id="pino-applicationinsights"></a>
### pino-applicationinsights
The [pino-applicationinsights](https://www.npmjs.com/package/pino-applicationinsights) module is a transport that will forward logs to [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview).

Given an application `foo` that logs via pino, you would use `pino-applicationinsights` like so:

``` sh
$ node foo | pino-applicationinsights --key blablabla
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-applicationinsights#readme)

<a id="pino-axiom"></a>
### pino-axiom

[pino-axiom](https://www.npmjs.com/package/pino-axiom) is a transport that will forward logs to [Axiom](https://axiom.co).

```javascript
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-axiom',
  options: {
    orgId: 'YOUR-ORG-ID', 
    token: 'YOUR-TOKEN', 
    dataset: 'YOUR-DATASET', 
  },
})
pino(transport)
```

<a id="pino-azuretable"></a>
### pino-azuretable
The [pino-azuretable](https://www.npmjs.com/package/pino-azuretable) module is a transport that will forward logs to the [Azure Table Storage](https://azure.microsoft.com/en-us/services/storage/tables/).

Given an application `foo` that logs via pino, you would use `pino-azuretable` like so:

``` sh
$ node foo | pino-azuretable --account storageaccount --key blablabla
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-azuretable#readme)

<a id="pino-cloudwatch"></a>
### pino-cloudwatch

[pino-cloudwatch][pino-cloudwatch] is a transport that buffers and forwards logs to [Amazon CloudWatch][].

```sh
$ node app.js | pino-cloudwatch --group my-log-group
```

[pino-cloudwatch]: https://github.com/dbhowell/pino-cloudwatch
[Amazon CloudWatch]: https://aws.amazon.com/cloudwatch/

<a id="pino-couch"></a>
### pino-couch

[pino-couch][pino-couch] uploads each log line as a [CouchDB][CouchDB] document.

```sh
$ node app.js | pino-couch -U https://couch-server -d mylogs
```

[pino-couch]: https://github.com/IBM/pino-couch
[CouchDB]: https://couchdb.apache.org

<a id="pino-datadog"></a>
### pino-datadog
The [pino-datadog](https://www.npmjs.com/package/pino-datadog) module is a transport that will forward logs to [DataDog](https://www.datadoghq.com/) through its API.

Given an application `foo` that logs via pino, you would use `pino-datadog` like so:

``` sh
$ node foo | pino-datadog --key blablabla
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-datadog#readme)

<a id="datadog-logger-integrations"></a>
### datadog-logger-integrations

[datadog-logger-integrations][datadog-logger-integrations] is a Pino v7+ compatible transport to forward log events to [Datadog][Datadog]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'datadog-logger-integrations',
  options: {
    ddClientConfig: {
      authMethods: {
        apiKeyAuth: <your datadog API key>
      }
    },
  },
  level: "error", // minimum log level that should be sent to datadog
})
pino(transport)
```

[datadog-logger-integrations]: https://github.com/marklai1998/datadog-logger-integrations
[Datadog]: https://www.datadoghq.com/

#### Logstash

The [pino-socket][pino-socket] module can also be used to upload logs to
[Logstash][logstash] via:

```
$ node app.js | pino-socket -a 127.0.0.1 -p 5000 -m tcp
```

Assuming logstash is running on the same host and configured as
follows:

```
input {
  tcp {
    port => 5000
  }
}

filter {
  json {
    source => "message"
  }
}

output {
  elasticsearch {
    hosts => "127.0.0.1:9200"
  }
}
```

See <https://www.elastic.co/guide/en/kibana/current/setup.html> to learn
how to setup [Kibana][kibana].

For Docker users, see
https://github.com/deviantony/docker-elk to setup an ELK stack.

<a id="pino-discord-webhook"></a>
### pino-discord-webhook

[pino-discord-webhook](https://github.com/fabulousgk/pino-discord-webhook) is a  Pino v7+ compatible transport to forward log events to a [Discord](http://discord.com) webhook from a dedicated worker. 

```js
import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-discord-webhook',
    options: {
      webhookUrl: 'https://discord.com/api/webhooks/xxxx/xxxx',
    }
  }
})
```

<a id="pino-elasticsearch"></a>
### pino-elasticsearch

[pino-elasticsearch][pino-elasticsearch] uploads the log lines in bulk
to [Elasticsearch][elasticsearch], to be displayed in [Kibana][kibana].

It is extremely simple to use and setup

```sh
$ node app.js | pino-elasticsearch
```

Assuming Elasticsearch is running on localhost.

To connect to an external Elasticsearch instance (recommended for production):

* Check that `network.host` is defined in the `elasticsearch.yml` configuration file. See [Elasticsearch Network Settings documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-network.html#common-network-settings) for more details.
* Launch:

```sh
$ node app.js | pino-elasticsearch --node http://192.168.1.42:9200
```

Assuming Elasticsearch is running on `192.168.1.42`.

To connect to AWS Elasticsearch:

```sh
$ node app.js | pino-elasticsearch --node https://es-url.us-east-1.es.amazonaws.com --es-version 6
```

Then [create an index pattern](https://www.elastic.co/guide/en/kibana/current/setup.html) on `'pino'` (the default index key for `pino-elasticsearch`) on the Kibana instance.

[pino-elasticsearch]: https://github.com/pinojs/pino-elasticsearch
[elasticsearch]: https://www.elastic.co/products/elasticsearch
[kibana]: https://www.elastic.co/products/kibana

<a id="pino-gelf"></a>
### pino-gelf

Pino GELF ([pino-gelf]) is a transport for the Pino logger. Pino GELF receives Pino logs from stdin and transforms them into [GELF format][gelf] before sending them to a remote [Graylog server][graylog] via UDP.

```sh
$ node your-app.js | pino-gelf log
```

[pino-gelf]: https://github.com/pinojs/pino-gelf
[gelf]: https://docs.graylog.org/en/2.1/pages/gelf.html
[graylog]: https://www.graylog.org/

<a id="pino-hana"></a>
### pino-hana
[pino-hana](https://github.com/HiImGiovi/pino-hana) is a Pino v7+ transport that save pino logs to a SAP HANA database.
```js
const pino = require('pino')
const logger = pino({
  transport: {
    target: 'pino-hana',
    options: {
      connectionOptions: {
        host: <hana db host>,
        port: <hana db port>,
        user: <hana db user>,
        password: <hana db password>,
      },
      schema: <schema of the table in which you want to save the logs>,
      table: <table in which you want to save the logs>,
    },
  },
})

logger.info('hi') // this log will be saved into SAP HANA
```
For more detailed information about its usage please check the official [documentation](https://github.com/HiImGiovi/pino-hana#readme).

<a id="pino-http-send"></a>
### pino-http-send

[pino-http-send](https://npmjs.com/package/pino-http-send) is a configurable and low overhead
transport that will batch logs and send to a specified URL.

```console
$ node app.js | pino-http-send -u http://localhost:8080/logs
```

<a id="pino-kafka"></a>
### pino-kafka

[pino-kafka](https://github.com/ayZagen/pino-kafka) transport to send logs to [Apache Kafka](https://kafka.apache.org/).

```sh
$ node index.js | pino-kafka -b 10.10.10.5:9200 -d mytopic
```

<a id="pino-logdna"></a>
### pino-logdna

[pino-logdna](https://github.com/logdna/pino-logdna) transport to send logs to [LogDNA](https://logdna.com).

```sh
$ node index.js | pino-logdna --key YOUR_INGESTION_KEY
```

Tags and other metadata can be included using the available command line options. See the [pino-logdna README](https://github.com/logdna/pino-logdna#options) for a full list.

<a id="pino-logflare"></a>
### pino-logflare

[pino-logflare](https://github.com/Logflare/pino-logflare) transport to send logs to a [Logflare](https://logflare.app) `source`.

```sh
$ node index.js | pino-logflare --key YOUR_KEY --source YOUR_SOURCE
```

<a id="pino-logfmt"></a>
### pino-logfmt

[pino-logfmt](https://github.com/botflux/pino-logfmt) is a Pino v7+ transport that formats logs into [logfmt](https://brandur.org/logfmt). This transport can output the formatted logs to stdout or file.

```js
import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-logfmt'
  }
})
```

<a id="pino-loki"></a>
### pino-loki
pino-loki is a transport that will forwards logs into [Grafana Loki](https://grafana.com/oss/loki/).
Can be used in CLI version in a separate process or in a dedicated worker:

CLI :
```console
node app.js | pino-loki --hostname localhost:3100 --labels='{ "application": "my-application"}' --user my-username --password my-password
```

Worker :
```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-loki',
  options: { host: 'localhost:3100' }
})
pino(transport)
```

For full documentation and configuration, see the [README](https://github.com/Julien-R44/pino-loki).

<a id="pino-mq"></a>
### pino-mq

The `pino-mq` transport will take all messages received on `process.stdin` and send them over a message bus using JSON serialization.

This is useful for:

* moving backpressure from application to broker
* transforming messages pressure to another component

```
node app.js | pino-mq -u "amqp://guest:guest@localhost/" -q "pino-logs"
```

Alternatively, a configuration file can be used:

```
node app.js | pino-mq -c pino-mq.json
```

A base configuration file can be initialized with:

```
pino-mq -g
```

For full documentation of command line switches and configuration see [the `pino-mq` README](https://github.com/itavy/pino-mq#readme)

<a id="pino-mysql"></a>
### pino-mysql

[pino-mysql][pino-mysql] loads pino logs into [MySQL][MySQL] and [MariaDB][MariaDB].

```sh
$ node app.js | pino-mysql -c db-configuration.json
```

`pino-mysql` can extract and save log fields into corresponding database fields
and/or save the entire log stream as a [JSON Data Type][JSONDT].

For full documentation and command line switches read the [README][pino-mysql].

[pino-mysql]: https://www.npmjs.com/package/pino-mysql
[MySQL]: https://www.mysql.com/
[MariaDB]: https://mariadb.org/
[JSONDT]: https://dev.mysql.com/doc/refman/8.0/en/json.html

<a id="pino-opentelemetry-transport"></a>
### pino-opentelemetry-transport

[pino-opentelemetry-transport](https://www.npmjs.com/package/pino-opentelemetry-transport) is a transport that will forward logs to an [OpenTelemetry log collector](https://opentelemetry.io/docs/collector/) using [OpenTelemetry JS instrumentation](https://opentelemetry.io/docs/instrumentation/js/).

```javascript
const pino = require('pino')

const transport = pino.transport({
  target: 'pino-opentelemetry-transport',
  options: {
    resourceAttributes: {
      'service.name': 'test-service',
      'service.version': '1.0.0'
    }
  }
})

pino(transport)
```

Documentation on running a minimal example is available in the [README](https://github.com/Vunovati/pino-opentelemetry-transport#minimalistic-example).

<a id="pino-papertrail"></a>
### pino-papertrail
pino-papertrail is a transport that will forward logs to the [papertrail](https://papertrailapp.com) log service through an UDPv4 socket.

Given an application `foo` that logs via pino, and a papertrail destination that collects logs on port UDP `12345` on address `bar.papertrailapp.com`, you would use `pino-papertrail`
like so:

```
node yourapp.js | pino-papertrail --host bar.papertrailapp.com --port 12345 --appname foo
```


for full documentation of command line switches read [README](https://github.com/ovhemert/pino-papertrail#readme)

<a id="pino-pg"></a>
### pino-pg
[pino-pg](https://www.npmjs.com/package/pino-pg) stores logs into PostgreSQL.
Full documentation in the [README](https://github.com/Xstoudi/pino-pg).

<a id="pino-redis"></a>
### pino-redis

[pino-redis][pino-redis] loads pino logs into [Redis][Redis].

```sh
$ node app.js | pino-redis -U redis://username:password@localhost:6379
```

[pino-redis]: https://github.com/buianhthang/pino-redis
[Redis]: https://redis.io/

<a id="pino-roll"></a>
### pino-roll

`pino-roll` is a Pino transport that automatically rolls your log files based on size or time frequency.

```js
import { join } from 'path';
import pino from 'pino';

const transport = pino.transport({
  target: 'pino-roll',
  options: { file: join('logs', 'log'), frequency: 'daily', mkdir: true }
});

const logger = pino(transport);
```

then you can use the logger as usual:

```js
logger.info('Hello from pino-roll!');
```
For full documentation check the [README](https://github.com/mcollina/pino-roll?tab=readme-ov-file#pino-roll).

<a id="pino-sentry"></a>
### pino-sentry

[pino-sentry][pino-sentry] loads pino logs into [Sentry][Sentry].

```sh
$ node app.js | pino-sentry --dsn=https://******@sentry.io/12345
```

For full documentation of command line switches see the [pino-sentry README](https://github.com/aandrewww/pino-sentry/blob/master/README.md).

[pino-sentry]: https://www.npmjs.com/package/pino-sentry
[Sentry]: https://sentry.io/

<a id="pino-sentry-transport"></a>
### pino-sentry-transport

[pino-sentry-transport][pino-sentry-transport] is a Pino v7+ compatible transport to forward log events to [Sentry][Sentry]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: 'pino-sentry-transport',
  options: {
    sentry: {
      dsn: 'https://******@sentry.io/12345',
    }
  }
})
pino(transport)
```

[pino-sentry-transport]: https://github.com/tomer-yechiel/pino-sentry-transport
[Sentry]: https://sentry.io/

<a id="pino-seq"></a>
### pino-seq

[pino-seq][pino-seq] supports both out-of-process and in-process log forwarding to [Seq][Seq].

```sh
$ node app.js | pino-seq --serverUrl http://localhost:5341 --apiKey 1234567890 --property applicationName=MyNodeApp
```

[pino-seq]: https://www.npmjs.com/package/pino-seq
[Seq]: https://datalust.co/seq

<a id="pino-seq-transport"></a>
### pino-seq-transport

[pino-seq-transport][pino-seq-transport] is a Pino v7+ compatible transport to forward log events to [Seq][Seq]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: '@autotelic/pino-seq-transport',
  options: { serverUrl: 'http://localhost:5341' }
})
pino(transport)
```

[pino-seq-transport]: https://github.com/autotelic/pino-seq-transport
[Seq]: https://datalust.co/seq

<a id="pino-slack-webhook"></a>
### pino-slack-webhook

[pino-slack-webhook][pino-slack-webhook] is a Pino v7+ compatible transport to forward log events to [Slack][Slack]
from a dedicated worker:

```js
const pino = require('pino')
const transport = pino.transport({
  target: '@youngkiu/pino-slack-webhook',
  options: {
    webhookUrl: 'https://hooks.slack.com/services/xxx/xxx/xxx',
    channel: '#pino-log',
    username: 'webhookbot',
    icon_emoji: ':ghost:'
  }
})
pino(transport)
```

[pino-slack-webhook]: https://github.com/youngkiu/pino-slack-webhook
[Slack]: https://slack.com/

[pino-pretty]: https://github.com/pinojs/pino-pretty

For full documentation of command line switches read the [README](https://github.com/abeai/pino-websocket#readme).

<a id="pino-socket"></a>
### pino-socket

[pino-socket][pino-socket] is a transport that will forward logs to an IPv4
UDP or TCP socket.

As an example, use `socat` to fake a listener:

```sh
$ socat -v udp4-recvfrom:6000,fork exec:'/bin/cat'
```

Then run an application that uses `pino` for logging:

```sh
$ node app.js | pino-socket -p 6000
```

Logs from the application should be observed on both consoles.

[pino-socket]: https://www.npmjs.com/package/pino-socket

<a id="pino-stackdriver"></a>
### pino-stackdriver
The [pino-stackdriver](https://www.npmjs.com/package/pino-stackdriver) module is a transport that will forward logs to the [Google Stackdriver](https://cloud.google.com/logging/) log service through its API.

Given an application `foo` that logs via pino, a stackdriver log project `bar`, and credentials in the file `/credentials.json`, you would use `pino-stackdriver`
like so:

``` sh
$ node foo | pino-stackdriver --project bar --credentials /credentials.json
```

For full documentation of command line switches read [README](https://github.com/ovhemert/pino-stackdriver#readme)

<a id="pino-syslog"></a>
### pino-syslog

[pino-syslog][pino-syslog] is a transforming transport that converts
`pino` NDJSON logs to [RFC3164][rfc3164] compatible log messages. The `pino-syslog` module does not
forward the logs anywhere, it merely re-writes the messages to `stdout`. But
when used in combination with `pino-socket` the log messages can be relayed to a syslog server:

```sh
$ node app.js | pino-syslog | pino-socket -a syslog.example.com
```

Example output for the "hello world" log:

```
<134>Apr  1 16:44:58 MacBook-Pro-3 none[94473]: {"pid":94473,"hostname":"MacBook-Pro-3","level":30,"msg":"hello world","time":1459529098958}
```

[pino-syslog]: https://www.npmjs.com/package/pino-syslog
[rfc3164]: https://tools.ietf.org/html/rfc3164
[logstash]: https://www.elastic.co/products/logstash

<a id="pino-telegram-webhook"></a>
### pino-telegram-webhook

[pino-telegram-webhook](https://github.com/Jhon-Mosk/pino-telegram-webhook) is a Pino v7+ transport for sending messages to [Telegram](https://telegram.org/). 

```js
const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-telegram-webhook',
    level: 'error',
    options: {
      chatId: -1234567890,
      botToken: "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
      extra: {
              parse_mode: "HTML",
            },
    },
  },
})

logger.error('<b>test log!</b>');
```

The `extra` parameter is optional. Parameters that the method [`sendMessage`](https://core.telegram.org/bots/api#sendmessage) supports can be passed to it.

<a id="pino-websocket"></a>
### pino-websocket

[pino-websocket](https://www.npmjs.com/package/@abeai/pino-websocket) is a transport that will forward each log line to a websocket server.

```sh
$ node app.js | pino-websocket -a my-websocket-server.example.com -p 3004
```

For full documentation of command line switches read the [README](https://github.com/abeai/pino-websocket#readme).

<a id="pino-yc-transport"></a>
### pino-yc-transport

[pino-yc-transport](https://github.com/Jhon-Mosk/pino-yc-transport) is a Pino v7+ transport for writing to [Yandex Cloud Logging](https://yandex.cloud/ru/services/logging) from serveless functions or containers.

```js
const pino = require("pino");

const config = {
  level: "debug",
  transport: {
    target: "pino-yc-transport",
  },
};

const logger = pino(config);

logger.debug("some message")
logger.debug({ foo: "bar" });
logger.debug("some message %o, %s", { foo: "bar" }, "baz");
logger.info("info");
logger.warn("warn");
logger.error("error");
logger.error(new Error("error"));
logger.fatal("fatal");
```

<a id="communication-between-pino-and-transport"></a>
## Communication between Pino and Transports
Here we discuss some technical details of how Pino communicates with its [worker threads](https://nodejs.org/api/worker_threads.html).

Pino uses [`thread-stream`](https://github.com/pinojs/thread-stream) to create a stream for transports.
When we create a stream with `thread-stream`, `thread-stream` spawns a [worker](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/index.js#L50-L60) (an independent JavaScript execution thread).

### Error messages
How are error messages propagated from a transport worker to Pino?

Let's assume we have a transport with an error listener:
```js
// index.js
const transport = pino.transport({
  target: './transport.js'
})

transport.on('error', err => {
  console.error('error caught', err)
})

const log = pino(transport)
```

When our worker emits an error event, the worker has listeners for it: [error](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/lib/worker.js#L59-L70) and [unhandledRejection](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/lib/worker.js#L135-L141). These listeners send the error message to the main thread where Pino is present.

When Pino receives the error message, it further [emits](https://github.com/pinojs/thread-stream/blob/f19ac8dbd602837d2851e17fbc7dfc5bbc51083f/index.js#L349) the error message. Finally, the error message arrives at our `index.js` and is caught by our error listener.



================================================
FILE: docs/web.md
================================================
# Web Frameworks

Since HTTP logging is a primary use case, Pino has first-class support for the Node.js
web framework ecosystem.

- [Web Frameworks](#web-frameworks)
  - [Pino with Fastify](#pino-with-fastify)
  - [Pino with Express](#pino-with-express)
  - [Pino with Hapi](#pino-with-hapi)
  - [Pino with Restify](#pino-with-restify)
  - [Pino with Koa](#pino-with-koa)
  - [Pino with Node core `http`](#pino-with-node-core-http)
  - [Pino with Nest](#pino-with-nest)
  - [Pino with H3](#pino-with-h3)
  - [Pino with Hono](#pino-with-hono)

<a id="fastify"></a>
## Pino with Fastify

The Fastify web framework comes bundled with Pino by default, simply set Fastify's
`logger` option to `true` and use `request.log` or `reply.log` for log messages that correspond
to each request:

```js
const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  request.log.info('something')
  return { hello: 'world' }
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

The `logger` option can also be set to an object, which will be passed through directly
as the [`pino` options object](/docs/api.md#options-object).

See the [fastify documentation](https://www.fastify.io/docs/latest/Reference/Logging/) for more information.

<a id="express"></a>
## Pino with Express

```sh
npm install pino-http
```

```js
const app = require('express')()
const pino = require('pino-http')()

app.use(pino)

app.get('/', function (req, res) {
  req.log.info('something')
  res.send('hello world')
})

app.listen(3000)
```

See the [pino-http README](https://npm.im/pino-http) for more info.

<a id="hapi"></a>
## Pino with Hapi

```sh
npm install hapi-pino
```

```js
'use strict'

const Hapi = require('@hapi/hapi')
const Pino = require('hapi-pino');

async function start () {
  // Create a server with a host and port
  const server = Hapi.server({
    host: 'localhost',
    port: 3000
  })

  // Add the route
  server.route({
    method: 'GET',
    path: '/',
    handler: async function (request, h) {
      // request.log is HAPI's standard way of logging
      request.log(['a', 'b'], 'Request into hello world')

      // a pino instance can also be used, which will be faster
      request.logger.info('In handler %s', request.path)

      return 'hello world'
    }
  })

  await server.register(Pino)

  // also as a decorated API
  server.logger.info('another way for accessing it')

  // and through Hapi standard logging system
  server.log(['subsystem'], 'third way for accessing it')

  await server.start()

  return server
}

start().catch((err) => {
  console.log(err)
  process.exit(1)
})
```

See the [hapi-pino README](https://npm.im/hapi-pino) for more info.

<a id="restify"></a>
## Pino with Restify

```sh
npm install restify-pino-logger
```

```js
const server = require('restify').createServer({name: 'server'})
const pino = require('restify-pino-logger')()

server.use(pino)

server.get('/', function (req, res) {
  req.log.info('something')
  res.send('hello world')
})

server.listen(3000)
```

See the [restify-pino-logger README](https://npm.im/restify-pino-logger) for more info.

<a id="koa"></a>
## Pino with Koa

```sh
npm install koa-pino-logger
```

```js
const Koa = require('koa')
const app = new Koa()
const pino = require('koa-pino-logger')()

app.use(pino)

app.use((ctx) => {
  ctx.log.info('something else')
  ctx.body = 'hello world'
})

app.listen(3000)
```

See the [koa-pino-logger README](https://github.com/pinojs/koa-pino-logger) for more info.

<a id="http"></a>
## Pino with Node core `http`

```sh
npm install pino-http
```

```js
const http = require('http')
const server = http.createServer(handle)
const logger = require('pino-http')()

function handle (req, res) {
  logger(req, res)
  req.log.info('something else')
  res.end('hello world')
}

server.listen(3000)
```

See the [pino-http README](https://npm.im/pino-http) for more info.


<a id="nest"></a>
## Pino with Nest

```sh
npm install nestjs-pino
```

```ts
import { NestFactory } from '@nestjs/core'
import { Controller, Get, Module } from '@nestjs/common'
import { LoggerModule, Logger } from 'nestjs-pino'

@Controller()
export class AppController {
  constructor(private readonly logger: Logger) {}

  @Get()
  getHello() {
    this.logger.log('something')
    return `Hello world`
  }
}

@Module({
  controllers: [AppController],
  imports: [LoggerModule.forRoot()]
})
class MyModule {}

async function bootstrap() {
  const app = await NestFactory.create(MyModule)
  await app.listen(3000)
}
bootstrap()
```

See the [nestjs-pino README](https://npm.im/nestjs-pino) for more info.


<a id="h3"></a>
## Pino with H3

```sh
npm install pino-http h3
```

Save as `server.mjs`:

```js
import { createApp, createRouter, eventHandler, fromNodeMiddleware } from "h3";
import pino from 'pino-http'

export const app = createApp();

const router = createRouter();
app.use(router);
app.use(fromNodeMiddleware(pino()))

app.use(eventHandler((event) => {
  event.node.req.log.info('something')
  return 'hello world'
}))

router.get(
  "/",
  eventHandler((event) => {
    return { path: event.path, message: "Hello World!" };
  }),
);
```

Execute `npx --yes listhen -w --open ./server.mjs`.

See the [pino-http README](https://npm.im/pino-http) for more info.


<a id="hono"></a>
## Pino with Hono

```sh
npm install pino pino-http hono
```

```js
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { pinoHttp } from 'pino-http';

const app = new Hono();
app.use(requestId());
app.use(async (c, next) => {
  // pass hono's request-id to pino-http
  c.env.incoming.id = c.var.requestId;

  // map express style middleware to hono
  await new Promise((resolve) => pinoHttp()(c.env.incoming, c.env.outgoing, () => resolve()));

  c.set('logger', c.env.incoming.log);

  await next();
});

app.get('/', (c) => {
  c.var.logger.info('something');

  return c.text('Hello Node.js!');
});

serve(app);
```

See the [pino-http README](https://npm.im/pino-http) for more info.



================================================
FILE: docsify/sidebar.md
================================================
* [Readme](/)
* [API](/docs/api.md)
* [Browser API](/docs/browser.md)
* [Redaction](/docs/redaction.md)
* [Child Loggers](/docs/child-loggers.md)
* [Transports](/docs/transports.md)
* [Web Frameworks](/docs/web.md)
* [Pretty Printing](/docs/pretty.md)
* [Asynchronous Logging](/docs/asynchronous.md)
* [Ecosystem](/docs/ecosystem.md)
* [Benchmarks](/docs/benchmarks.md)
* [Long Term Support](/docs/lts.md)
* [Help](/docs/help.md)
  * [Log rotation](/docs/help.md#rotate)
  * [Reopening log files](/docs/help.md#reopening)
  * [Saving to multiple files](/docs/help.md#multiple)
  * [Log filtering](/docs/help.md#filter-logs)
  * [Transports and systemd](/docs/help.md#transport-systemd)
  * [Duplicate keys](/docs/help.md#dupe-keys)
  * [Log levels as labels instead of numbers](/docs/help.md#level-string)
  * [Pino with `debug`](/docs/help.md#debug)
  * [Unicode and Windows terminal](/docs/help.md#windows)
  * [Mapping Pino Log Levels to Google Cloud Logging (Stackdriver) Severity Levels](/docs/help.md#stackdriver)
  * [Avoid Message Conflict](/docs/help.md#avoid-message-conflict)
  * [Best performance for logging to `stdout`](/docs/help.md#best-performance-for-stdout)
  * [Testing](/docs/help.md#testing)



================================================
FILE: examples/basic.js
================================================
'use strict'

// Pino's primary usage writes ndjson to `stdout`:
const pino = require('..')()

// However, if "human readable" output is desired,
// `pino-pretty` can be provided as the destination
// stream by uncommenting the following line in place
// of the previous declaration:
// const pino = require('..')(require('pino-pretty')())

pino.info('hello world')
pino.error('this is at error level')
pino.info('the answer is %d', 42)
pino.info({ obj: 42 }, 'hello world')
pino.info({ obj: 42, b: 2 }, 'hello world')
pino.info({ nested: { obj: 42 } }, 'nested')
setImmediate(() => {
  pino.info('after setImmediate')
})
pino.error(new Error('an error'))

const child = pino.child({ a: 'property' })
child.info('hello child!')

const childsChild = child.child({ another: 'property' })
childsChild.info('hello baby..')

pino.debug('this should be mute')

pino.level = 'trace'

pino.debug('this is a debug statement')

pino.child({ another: 'property' }).debug('this is a debug statement via child')
pino.trace('this is a trace statement')

pino.debug('this is a "debug" statement with "')

pino.info(new Error('kaboom'))
pino.info(null)

pino.info(new Error('kaboom'), 'with', 'a', 'message')



================================================
FILE: examples/transport.js
================================================
'use strict'

const pino = require('..')
const { tmpdir } = require('node:os')
const { join } = require('node:path')

const file = join(tmpdir(), `pino-${process.pid}-example`)

const transport = pino.transport({
  targets: [{
    level: 'warn',
    target: 'pino/file',
    options: {
      destination: file
    }
    /*
  }, {
    level: 'info',
    target: 'pino-elasticsearch',
    options: {
      node: 'http://localhost:9200'
    }
    */
  }, {
    level: 'info',
    target: 'pino-pretty'
  }]
})

const logger = pino(transport)

logger.info({
  file
}, 'logging destination')

logger.info('hello world')
logger.error('this is at error level')
logger.info('the answer is %d', 42)
logger.info({ obj: 42 }, 'hello world')
logger.info({ obj: 42, b: 2 }, 'hello world')
logger.info({ nested: { obj: 42 } }, 'nested')
logger.warn('WARNING!')
setImmediate(() => {
  logger.info('after setImmediate')
})
logger.error(new Error('an error'))

const child = logger.child({ a: 'property' })
child.info('hello child!')

const childsChild = child.child({ another: 'property' })
childsChild.info('hello baby..')

logger.debug('this should be mute')

logger.level = 'trace'

logger.debug('this is a debug statement')

logger.child({ another: 'property' }).debug('this is a debug statement via child')
logger.trace('this is a trace statement')

logger.debug('this is a "debug" statement with "')

logger.info(new Error('kaboom'))
logger.info(null)

logger.info(new Error('kaboom'), 'with', 'a', 'message')



================================================
FILE: lib/caller.js
================================================
'use strict'

function noOpPrepareStackTrace (_, stack) {
  return stack
}

module.exports = function getCallers () {
  const originalPrepare = Error.prepareStackTrace
  Error.prepareStackTrace = noOpPrepareStackTrace
  const stack = new Error().stack
  Error.prepareStackTrace = originalPrepare

  if (!Array.isArray(stack)) {
    return undefined
  }

  const entries = stack.slice(2)

  const fileNames = []

  for (const entry of entries) {
    if (!entry) {
      continue
    }

    fileNames.push(entry.getFileName())
  }

  return fileNames
}



================================================
FILE: lib/constants.js
================================================
/**
 * Represents default log level values
 *
 * @enum {number}
 */
const DEFAULT_LEVELS = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

/**
 * Represents sort order direction: `ascending` or `descending`
 *
 * @enum {string}
 */
const SORTING_ORDER = {
  ASC: 'ASC',
  DESC: 'DESC'
}

module.exports = {
  DEFAULT_LEVELS,
  SORTING_ORDER
}



================================================
FILE: lib/deprecations.js
================================================
'use strict'

const warning = require('process-warning')()
module.exports = warning

// const warnName = 'PinoWarning'

// warning.create(warnName, 'PINODEP010', 'A new deprecation')



================================================
FILE: lib/levels.js
================================================
'use strict'
/* eslint no-prototype-builtins: 0 */
const {
  lsCacheSym,
  levelValSym,
  useOnlyCustomLevelsSym,
  streamSym,
  formattersSym,
  hooksSym,
  levelCompSym
} = require('./symbols')
const { noop, genLog } = require('./tools')
const { DEFAULT_LEVELS, SORTING_ORDER } = require('./constants')

const levelMethods = {
  fatal: (hook) => {
    const logFatal = genLog(DEFAULT_LEVELS.fatal, hook)
    return function (...args) {
      const stream = this[streamSym]
      logFatal.call(this, ...args)
      if (typeof stream.flushSync === 'function') {
        try {
          stream.flushSync()
        } catch (e) {
          // https://github.com/pinojs/pino/pull/740#discussion_r346788313
        }
      }
    }
  },
  error: (hook) => genLog(DEFAULT_LEVELS.error, hook),
  warn: (hook) => genLog(DEFAULT_LEVELS.warn, hook),
  info: (hook) => genLog(DEFAULT_LEVELS.info, hook),
  debug: (hook) => genLog(DEFAULT_LEVELS.debug, hook),
  trace: (hook) => genLog(DEFAULT_LEVELS.trace, hook)
}

const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k) => {
  o[DEFAULT_LEVELS[k]] = k
  return o
}, {})

const initialLsCache = Object.keys(nums).reduce((o, k) => {
  o[k] = '{"level":' + Number(k)
  return o
}, {})

function genLsCache (instance) {
  const formatter = instance[formattersSym].level
  const { labels } = instance.levels
  const cache = {}
  for (const label in labels) {
    const level = formatter(labels[label], Number(label))
    cache[label] = JSON.stringify(level).slice(0, -1)
  }
  instance[lsCacheSym] = cache
  return instance
}

function isStandardLevel (level, useOnlyCustomLevels) {
  if (useOnlyCustomLevels) {
    return false
  }

  switch (level) {
    case 'fatal':
    case 'error':
    case 'warn':
    case 'info':
    case 'debug':
    case 'trace':
      return true
    default:
      return false
  }
}

function setLevel (level) {
  const { labels, values } = this.levels
  if (typeof level === 'number') {
    if (labels[level] === undefined) throw Error('unknown level value' + level)
    level = labels[level]
  }
  if (values[level] === undefined) throw Error('unknown level ' + level)
  const preLevelVal = this[levelValSym]
  const levelVal = this[levelValSym] = values[level]
  const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym]
  const levelComparison = this[levelCompSym]
  const hook = this[hooksSym].logMethod

  for (const key in values) {
    if (levelComparison(values[key], levelVal) === false) {
      this[key] = noop
      continue
    }
    this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook)
  }

  this.emit(
    'level-change',
    level,
    levelVal,
    labels[preLevelVal],
    preLevelVal,
    this
  )
}

function getLevel (level) {
  const { levels, levelVal } = this
  // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
  return (levels && levels.labels) ? levels.labels[levelVal] : ''
}

function isLevelEnabled (logLevel) {
  const { values } = this.levels
  const logLevelVal = values[logLevel]
  return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym])
}

/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */
function compareLevel (direction, current, expected) {
  if (direction === SORTING_ORDER.DESC) {
    return current <= expected
  }

  return current >= expected
}

/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */
function genLevelComparison (levelComparison) {
  if (typeof levelComparison === 'string') {
    return compareLevel.bind(null, levelComparison)
  }

  return levelComparison
}

function mappings (customLevels = null, useOnlyCustomLevels = false) {
  const customNums = customLevels
    /* eslint-disable */
    ? Object.keys(customLevels).reduce((o, k) => {
        o[customLevels[k]] = k
        return o
      }, {})
    : null
    /* eslint-enable */

  const labels = Object.assign(
    Object.create(Object.prototype, { Infinity: { value: 'silent' } }),
    useOnlyCustomLevels ? null : nums,
    customNums
  )
  const values = Object.assign(
    Object.create(Object.prototype, { silent: { value: Infinity } }),
    useOnlyCustomLevels ? null : DEFAULT_LEVELS,
    customLevels
  )
  return { labels, values }
}

function assertDefaultLevelFound (defaultLevel, customLevels, useOnlyCustomLevels) {
  if (typeof defaultLevel === 'number') {
    const values = [].concat(
      Object.keys(customLevels || {}).map(key => customLevels[key]),
      useOnlyCustomLevels ? [] : Object.keys(nums).map(level => +level),
      Infinity
    )
    if (!values.includes(defaultLevel)) {
      throw Error(`default level:${defaultLevel} must be included in custom levels`)
    }
    return
  }

  const labels = Object.assign(
    Object.create(Object.prototype, { silent: { value: Infinity } }),
    useOnlyCustomLevels ? null : DEFAULT_LEVELS,
    customLevels
  )
  if (!(defaultLevel in labels)) {
    throw Error(`default level:${defaultLevel} must be included in custom levels`)
  }
}

function assertNoLevelCollisions (levels, customLevels) {
  const { labels, values } = levels
  for (const k in customLevels) {
    if (k in values) {
      throw Error('levels cannot be overridden')
    }
    if (customLevels[k] in labels) {
      throw Error('pre-existing level values cannot be used for new levels')
    }
  }
}

/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */
function assertLevelComparison (levelComparison) {
  if (typeof levelComparison === 'function') {
    return
  }

  if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
    return
  }

  throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type')
}

module.exports = {
  initialLsCache,
  genLsCache,
  levelMethods,
  getLevel,
  setLevel,
  isLevelEnabled,
  mappings,
  assertNoLevelCollisions,
  assertDefaultLevelFound,
  genLevelComparison,
  assertLevelComparison
}



================================================
FILE: lib/meta.js
================================================
'use strict'

module.exports = { version: '10.1.0' }



================================================
FILE: lib/multistream.js
================================================
'use strict'

const metadata = Symbol.for('pino.metadata')
const { DEFAULT_LEVELS } = require('./constants')

const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info

function multistream (streamsArray, opts) {
  streamsArray = streamsArray || []
  opts = opts || { dedupe: false }

  const streamLevels = Object.create(DEFAULT_LEVELS)
  streamLevels.silent = Infinity
  if (opts.levels && typeof opts.levels === 'object') {
    Object.keys(opts.levels).forEach(i => {
      streamLevels[i] = opts.levels[i]
    })
  }

  const res = {
    write,
    add,
    remove,
    emit,
    flushSync,
    end,
    minLevel: 0,
    lastId: 0,
    streams: [],
    clone,
    [metadata]: true,
    streamLevels
  }

  if (Array.isArray(streamsArray)) {
    streamsArray.forEach(add, res)
  } else {
    add.call(res, streamsArray)
  }

  // clean this object up
  // or it will stay allocated forever
  // as it is closed on the following closures
  streamsArray = null

  return res

  // we can exit early because the streams are ordered by level
  function write (data) {
    let dest
    const level = this.lastLevel
    const { streams } = this
    // for handling situation when several streams has the same level
    let recordedLevel = 0
    let stream

    // if dedupe set to true we send logs to the stream with the highest level
    // therefore, we have to change sorting order
    for (let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)) {
      dest = streams[i]
      if (dest.level <= level) {
        if (recordedLevel !== 0 && recordedLevel !== dest.level) {
          break
        }
        stream = dest.stream
        if (stream[metadata]) {
          const { lastTime, lastMsg, lastObj, lastLogger } = this
          stream.lastLevel = level
          stream.lastTime = lastTime
          stream.lastMsg = lastMsg
          stream.lastObj = lastObj
          stream.lastLogger = lastLogger
        }
        stream.write(data)
        if (opts.dedupe) {
          recordedLevel = dest.level
        }
      } else if (!opts.dedupe) {
        break
      }
    }
  }

  function emit (...args) {
    for (const { stream } of this.streams) {
      if (typeof stream.emit === 'function') {
        stream.emit(...args)
      }
    }
  }

  function flushSync () {
    for (const { stream } of this.streams) {
      if (typeof stream.flushSync === 'function') {
        stream.flushSync()
      }
    }
  }

  function add (dest) {
    if (!dest) {
      return res
    }

    // Check that dest implements either StreamEntry or DestinationStream
    const isStream = typeof dest.write === 'function' || dest.stream
    const stream_ = dest.write ? dest : dest.stream
    // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
    if (!isStream) {
      throw Error('stream object needs to implement either StreamEntry or DestinationStream interface')
    }

    const { streams, streamLevels } = this

    let level
    if (typeof dest.levelVal === 'number') {
      level = dest.levelVal
    } else if (typeof dest.level === 'string') {
      level = streamLevels[dest.level]
    } else if (typeof dest.level === 'number') {
      level = dest.level
    } else {
      level = DEFAULT_INFO_LEVEL
    }

    const dest_ = {
      stream: stream_,
      level,
      levelVal: undefined,
      id: ++res.lastId
    }

    streams.unshift(dest_)
    streams.sort(compareByLevel)

    this.minLevel = streams[0].level

    return res
  }

  function remove (id) {
    const { streams } = this
    const index = streams.findIndex(s => s.id === id)

    if (index >= 0) {
      streams.splice(index, 1)
      streams.sort(compareByLevel)
      this.minLevel = streams.length > 0 ? streams[0].level : -1
    }

    return res
  }

  function end () {
    for (const { stream } of this.streams) {
      if (typeof stream.flushSync === 'function') {
        stream.flushSync()
      }
      stream.end()
    }
  }

  function clone (level) {
    const streams = new Array(this.streams.length)

    for (let i = 0; i < streams.length; i++) {
      streams[i] = {
        level,
        stream: this.streams[i].stream
      }
    }

    return {
      write,
      add,
      remove,
      minLevel: level,
      streams,
      clone,
      emit,
      flushSync,
      [metadata]: true
    }
  }
}

function compareByLevel (a, b) {
  return a.level - b.level
}

function initLoopVar (length, dedupe) {
  return dedupe ? length - 1 : 0
}

function adjustLoopVar (i, dedupe) {
  return dedupe ? i - 1 : i + 1
}

function checkLoopVar (i, length, dedupe) {
  return dedupe ? i >= 0 : i < length
}

module.exports = multistream



================================================
FILE: lib/proto.js
================================================
'use strict'

/* eslint no-prototype-builtins: 0 */

const { EventEmitter } = require('node:events')
const {
  lsCacheSym,
  levelValSym,
  setLevelSym,
  getLevelSym,
  chindingsSym,
  mixinSym,
  asJsonSym,
  writeSym,
  mixinMergeStrategySym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  serializersSym,
  formattersSym,
  errorKeySym,
  messageKeySym,
  useOnlyCustomLevelsSym,
  needsMetadataGsym,
  redactFmtSym,
  stringifySym,
  formatOptsSym,
  stringifiersSym,
  msgPrefixSym,
  hooksSym
} = require('./symbols')
const {
  getLevel,
  setLevel,
  isLevelEnabled,
  mappings,
  initialLsCache,
  genLsCache,
  assertNoLevelCollisions
} = require('./levels')
const {
  asChindings,
  asJson,
  buildFormatters,
  stringify,
  noop
} = require('./tools')
const {
  version
} = require('./meta')
const redaction = require('./redaction')

// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {}
const prototype = {
  constructor,
  child,
  bindings,
  setBindings,
  flush,
  isLevelEnabled,
  version,
  get level () { return this[getLevelSym]() },
  set level (lvl) { this[setLevelSym](lvl) },
  get levelVal () { return this[levelValSym] },
  set levelVal (n) { throw Error('levelVal is read-only') },
  get msgPrefix () { return this[msgPrefixSym] },
  get [Symbol.toStringTag] () { return 'Pino' },
  [lsCacheSym]: initialLsCache,
  [writeSym]: write,
  [asJsonSym]: asJson,
  [getLevelSym]: getLevel,
  [setLevelSym]: setLevel
}

Object.setPrototypeOf(prototype, EventEmitter.prototype)

// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function () {
  return Object.create(prototype)
}

const resetChildingsFormatter = bindings => bindings
function child (bindings, options) {
  if (!bindings) {
    throw Error('missing bindings for child Pino')
  }
  const serializers = this[serializersSym]
  const formatters = this[formattersSym]
  const instance = Object.create(this)

  // If an `options` object was not supplied, we can improve
  // the performance of child creation by skipping
  // the checks for set options and simply return
  // a baseline instance.
  if (options == null) {
    if (instance[formattersSym].bindings !== resetChildingsFormatter) {
      instance[formattersSym] = buildFormatters(
        formatters.level,
        resetChildingsFormatter,
        formatters.log
      )
    }

    instance[chindingsSym] = asChindings(instance, bindings)

    if (this.onChild !== noop) {
      this.onChild(instance)
    }

    return instance
  }

  if (options.hasOwnProperty('serializers') === true) {
    instance[serializersSym] = Object.create(null)

    for (const k in serializers) {
      instance[serializersSym][k] = serializers[k]
    }
    const parentSymbols = Object.getOwnPropertySymbols(serializers)
    /* eslint no-var: off */
    for (var i = 0; i < parentSymbols.length; i++) {
      const ks = parentSymbols[i]
      instance[serializersSym][ks] = serializers[ks]
    }

    for (const bk in options.serializers) {
      instance[serializersSym][bk] = options.serializers[bk]
    }
    const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers)
    for (var bi = 0; bi < bindingsSymbols.length; bi++) {
      const bks = bindingsSymbols[bi]
      instance[serializersSym][bks] = options.serializers[bks]
    }
  } else instance[serializersSym] = serializers
  if (options.hasOwnProperty('formatters')) {
    const { level, bindings: chindings, log } = options.formatters
    instance[formattersSym] = buildFormatters(
      level || formatters.level,
      chindings || resetChildingsFormatter,
      log || formatters.log
    )
  } else {
    instance[formattersSym] = buildFormatters(
      formatters.level,
      resetChildingsFormatter,
      formatters.log
    )
  }
  if (options.hasOwnProperty('customLevels') === true) {
    assertNoLevelCollisions(this.levels, options.customLevels)
    instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym])
    genLsCache(instance)
  }

  // redact must place before asChindings and only replace if exist
  if ((typeof options.redact === 'object' && options.redact !== null) || Array.isArray(options.redact)) {
    instance.redact = options.redact // replace redact directly
    const stringifiers = redaction(instance.redact, stringify)
    const formatOpts = { stringify: stringifiers[redactFmtSym] }
    instance[stringifySym] = stringify
    instance[stringifiersSym] = stringifiers
    instance[formatOptsSym] = formatOpts
  }

  if (typeof options.msgPrefix === 'string') {
    instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix
  }

  instance[chindingsSym] = asChindings(instance, bindings)
  if ((options.level !== undefined && options.level !== this.level) || options.hasOwnProperty('customLevels')) {
    const childLevel = options.level || this.level
    instance[setLevelSym](childLevel)
  }
  this.onChild(instance)
  return instance
}

function bindings () {
  const chindings = this[chindingsSym]
  const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
  const bindingsFromJson = JSON.parse(chindingsJson)
  delete bindingsFromJson.pid
  delete bindingsFromJson.hostname
  return bindingsFromJson
}

function setBindings (newBindings) {
  const chindings = asChindings(this, newBindings)
  this[chindingsSym] = chindings
}

/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */
function defaultMixinMergeStrategy (mergeObject, mixinObject) {
  return Object.assign(mixinObject, mergeObject)
}

function write (_obj, msg, num) {
  const t = this[timeSym]()
  const mixin = this[mixinSym]
  const errorKey = this[errorKeySym]
  const messageKey = this[messageKeySym]
  const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy
  let obj
  const streamWriteHook = this[hooksSym].streamWrite

  if (_obj === undefined || _obj === null) {
    obj = {}
  } else if (_obj instanceof Error) {
    obj = { [errorKey]: _obj }
    if (msg === undefined) {
      msg = _obj.message
    }
  } else {
    obj = _obj
    if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
      msg = _obj[errorKey].message
    }
  }

  if (mixin) {
    obj = mixinMergeStrategy(obj, mixin(obj, num, this))
  }

  const s = this[asJsonSym](obj, msg, num, t)

  const stream = this[streamSym]
  if (stream[needsMetadataGsym] === true) {
    stream.lastLevel = num
    stream.lastObj = obj
    stream.lastMsg = msg
    stream.lastTime = t.slice(this[timeSliceIndexSym])
    stream.lastLogger = this // for child loggers
  }
  stream.write(streamWriteHook ? streamWriteHook(s) : s)
}

function flush (cb) {
  if (cb != null && typeof cb !== 'function') {
    throw Error('callback must be a function')
  }

  const stream = this[streamSym]

  if (typeof stream.flush === 'function') {
    stream.flush(cb || noop)
  } else if (cb) cb()
}



================================================
FILE: lib/redaction.js
================================================
'use strict'

const Redact = require('@pinojs/redact')
const { redactFmtSym, wildcardFirstSym } = require('./symbols')

// Custom rx regex equivalent to fast-redact's rx
const rx = /[^.[\]]+|\[([^[\]]*?)\]/g

const CENSOR = '[Redacted]'
const strict = false // TODO should this be configurable?

function redaction (opts, serialize) {
  const { paths, censor, remove } = handle(opts)

  const shape = paths.reduce((o, str) => {
    rx.lastIndex = 0
    const first = rx.exec(str)
    const next = rx.exec(str)

    // ns is the top-level path segment, brackets + quoting removed.
    let ns = first[1] !== undefined
      ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1')
      : first[0]

    if (ns === '*') {
      ns = wildcardFirstSym
    }

    // top level key:
    if (next === null) {
      o[ns] = null
      return o
    }

    // path with at least two segments:
    // if ns is already redacted at the top level, ignore lower level redactions
    if (o[ns] === null) {
      return o
    }

    const { index } = next
    const nextPath = `${str.substr(index, str.length - 1)}`

    o[ns] = o[ns] || []

    // shape is a mix of paths beginning with literal values and wildcard
    // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
    // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
    // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
    // (* entry has wildcardFirstSym as key)
    if (ns !== wildcardFirstSym && o[ns].length === 0) {
      // first time ns's get all '*' redactions so far
      o[ns].push(...(o[wildcardFirstSym] || []))
    }

    if (ns === wildcardFirstSym) {
      // new * path gets added to all previously registered literal ns's.
      Object.keys(o).forEach(function (k) {
        if (o[k]) {
          o[k].push(nextPath)
        }
      })
    }

    o[ns].push(nextPath)
    return o
  }, {})

  // the redactor assigned to the format symbol key
  // provides top level redaction for instances where
  // an object is interpolated into the msg string
  const result = {
    [redactFmtSym]: Redact({ paths, censor, serialize, strict, remove })
  }

  const topCensor = (...args) => {
    return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor)
  }

  return [...Object.keys(shape), ...Object.getOwnPropertySymbols(shape)].reduce((o, k) => {
    // top level key:
    if (shape[k] === null) {
      o[k] = (value) => topCensor(value, [k])
    } else {
      const wrappedCensor = typeof censor === 'function'
        ? (value, path) => {
            return censor(value, [k, ...path])
          }
        : censor
      o[k] = Redact({
        paths: shape[k],
        censor: wrappedCensor,
        serialize,
        strict,
        remove
      })
    }
    return o
  }, result)
}

function handle (opts) {
  if (Array.isArray(opts)) {
    opts = { paths: opts, censor: CENSOR }
    return opts
  }
  let { paths, censor = CENSOR, remove } = opts
  if (Array.isArray(paths) === false) { throw Error('pino – redact must contain an array of strings') }
  if (remove === true) censor = undefined

  return { paths, censor, remove }
}

module.exports = redaction



================================================
FILE: lib/symbols.js
================================================
'use strict'

const setLevelSym = Symbol('pino.setLevel')
const getLevelSym = Symbol('pino.getLevel')
const levelValSym = Symbol('pino.levelVal')
const levelCompSym = Symbol('pino.levelComp')
const useLevelLabelsSym = Symbol('pino.useLevelLabels')
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels')
const mixinSym = Symbol('pino.mixin')

const lsCacheSym = Symbol('pino.lsCache')
const chindingsSym = Symbol('pino.chindings')

const asJsonSym = Symbol('pino.asJson')
const writeSym = Symbol('pino.write')
const redactFmtSym = Symbol('pino.redactFmt')

const timeSym = Symbol('pino.time')
const timeSliceIndexSym = Symbol('pino.timeSliceIndex')
const streamSym = Symbol('pino.stream')
const stringifySym = Symbol('pino.stringify')
const stringifySafeSym = Symbol('pino.stringifySafe')
const stringifiersSym = Symbol('pino.stringifiers')
const endSym = Symbol('pino.end')
const formatOptsSym = Symbol('pino.formatOpts')
const messageKeySym = Symbol('pino.messageKey')
const errorKeySym = Symbol('pino.errorKey')
const nestedKeySym = Symbol('pino.nestedKey')
const nestedKeyStrSym = Symbol('pino.nestedKeyStr')
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy')
const msgPrefixSym = Symbol('pino.msgPrefix')

const wildcardFirstSym = Symbol('pino.wildcardFirst')

// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers')
const formattersSym = Symbol.for('pino.formatters')
const hooksSym = Symbol.for('pino.hooks')
const needsMetadataGsym = Symbol.for('pino.metadata')

module.exports = {
  setLevelSym,
  getLevelSym,
  levelValSym,
  levelCompSym,
  useLevelLabelsSym,
  mixinSym,
  lsCacheSym,
  chindingsSym,
  asJsonSym,
  writeSym,
  serializersSym,
  redactFmtSym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  stringifySym,
  stringifySafeSym,
  stringifiersSym,
  endSym,
  formatOptsSym,
  messageKeySym,
  errorKeySym,
  nestedKeySym,
  wildcardFirstSym,
  needsMetadataGsym,
  useOnlyCustomLevelsSym,
  formattersSym,
  hooksSym,
  nestedKeyStrSym,
  mixinMergeStrategySym,
  msgPrefixSym
}



================================================
FILE: lib/time.js
================================================
'use strict'

const nullTime = () => ''

const epochTime = () => `,"time":${Date.now()}`

const unixTime = () => `,"time":${Math.round(Date.now() / 1000.0)}`

const isoTime = () => `,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability

const NS_PER_MS = 1_000_000n
const NS_PER_SEC = 1_000_000_000n

const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS
const startHrTime = process.hrtime.bigint()

const isoTimeNano = () => {
  const elapsedNs = process.hrtime.bigint() - startHrTime
  const currentTimeNs = startWallTimeNs + elapsedNs

  const secondsSinceEpoch = currentTimeNs / NS_PER_SEC
  const nanosWithinSecond = currentTimeNs % NS_PER_SEC

  const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n)
  const date = new Date(msSinceEpoch)

  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const seconds = date.getUTCSeconds().toString().padStart(2, '0')

  return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond
    .toString()
    .padStart(9, '0')}Z"`
}

module.exports = { nullTime, epochTime, unixTime, isoTime, isoTimeNano }



================================================
FILE: lib/tools.js
================================================
'use strict'

/* eslint no-prototype-builtins: 0 */

const diagChan = require('node:diagnostics_channel')
const format = require('quick-format-unescaped')
const { mapHttpRequest, mapHttpResponse } = require('pino-std-serializers')
const SonicBoom = require('sonic-boom')
const onExit = require('on-exit-leak-free')
const {
  lsCacheSym,
  chindingsSym,
  writeSym,
  serializersSym,
  formatOptsSym,
  endSym,
  stringifiersSym,
  stringifySym,
  stringifySafeSym,
  wildcardFirstSym,
  nestedKeySym,
  formattersSym,
  messageKeySym,
  errorKeySym,
  nestedKeyStrSym,
  msgPrefixSym
} = require('./symbols')
const { isMainThread } = require('worker_threads')
const transport = require('./transport')
const [nodeMajor] = process.versions.node.split('.').map(v => Number(v))

const asJsonChan = diagChan.tracingChannel('pino_asJson')

// JSON.stringify is faster in node 25+.
const asString = nodeMajor >= 25 ? str => JSON.stringify(str) : _asString

function noop () {
}

function genLog (level, hook) {
  if (!hook) return LOG

  return function hookWrappedLog (...args) {
    hook.call(this, args, LOG, level)
  }

  function LOG (o, ...n) {
    if (typeof o === 'object') {
      let msg = o
      if (o !== null) {
        if (o.method && o.headers && o.socket) {
          o = mapHttpRequest(o)
        } else if (typeof o.setHeader === 'function') {
          o = mapHttpResponse(o)
        }
      }
      let formatParams
      if (msg === null && n.length === 0) {
        formatParams = [null]
      } else {
        msg = n.shift()
        formatParams = n
      }
      // We do not use a coercive check for `msg` as it is
      // measurably slower than the explicit checks.
      if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
        msg = this[msgPrefixSym] + msg
      }
      this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level)
    } else {
      let msg = o === undefined ? n.shift() : o

      // We do not use a coercive check for `msg` as it is
      // measurably slower than the explicit checks.
      if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
        msg = this[msgPrefixSym] + msg
      }
      this[writeSym](null, format(msg, n, this[formatOptsSym]), level)
    }
  }
}

// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function _asString (str) {
  let result = ''
  let last = 0
  let found = false
  let point = 255
  const l = str.length
  if (l > 100) {
    return JSON.stringify(str)
  }
  for (var i = 0; i < l && point >= 32; i++) {
    point = str.charCodeAt(i)
    if (point === 34 || point === 92) {
      result += str.slice(last, i) + '\\'
      last = i
      found = true
    }
  }
  if (!found) {
    result = str
  } else {
    result += str.slice(last)
  }
  return point < 32 ? JSON.stringify(str) : '"' + result + '"'
}

/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */
function asJson (obj, msg, num, time) {
  if (asJsonChan.hasSubscribers === false) {
    return _asJson.call(this, obj, msg, num, time)
  }

  const store = { instance: this, arguments }
  return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time)
}

/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */
function _asJson (obj, msg, num, time) {
  const stringify = this[stringifySym]
  const stringifySafe = this[stringifySafeSym]
  const stringifiers = this[stringifiersSym]
  const end = this[endSym]
  const chindings = this[chindingsSym]
  const serializers = this[serializersSym]
  const formatters = this[formattersSym]
  const messageKey = this[messageKeySym]
  const errorKey = this[errorKeySym]
  let data = this[lsCacheSym][num] + time

  // we need the child bindings added to the output first so instance logged
  // objects can take precedence when JSON.parse-ing the resulting log line
  data = data + chindings

  let value
  if (formatters.log) {
    obj = formatters.log(obj)
  }
  const wildcardStringifier = stringifiers[wildcardFirstSym]
  let propStr = ''
  for (const key in obj) {
    value = obj[key]
    if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
      if (serializers[key]) {
        value = serializers[key](value)
      } else if (key === errorKey && serializers.err) {
        value = serializers.err(value)
      }

      const stringifier = stringifiers[key] || wildcardStringifier

      switch (typeof value) {
        case 'undefined':
        case 'function':
          continue
        case 'number':
          /* eslint no-fallthrough: "off" */
          if (Number.isFinite(value) === false) {
            value = null
          }
        // this case explicitly falls through to the next one
        case 'boolean':
          if (stringifier) value = stringifier(value)
          break
        case 'string':
          value = (stringifier || asString)(value)
          break
        default:
          value = (stringifier || stringify)(value, stringifySafe)
      }
      if (value === undefined) continue
      const strKey = asString(key)
      propStr += ',' + strKey + ':' + value
    }
  }

  let msgStr = ''
  if (msg !== undefined) {
    value = serializers[messageKey] ? serializers[messageKey](msg) : msg
    const stringifier = stringifiers[messageKey] || wildcardStringifier

    switch (typeof value) {
      case 'function':
        break
      case 'number':
        if (Number.isFinite(value) === false) {
          value = null
        }
      // this case explicitly falls through to the next one
      case 'boolean':
        if (stringifier) value = stringifier(value)
        msgStr = ',"' + messageKey + '":' + value
        break
      case 'string':
        value = (stringifier || asString)(value)
        msgStr = ',"' + messageKey + '":' + value
        break
      default:
        value = (stringifier || stringify)(value, stringifySafe)
        msgStr = ',"' + messageKey + '":' + value
    }
  }

  if (this[nestedKeySym] && propStr) {
    // place all the obj properties under the specified key
    // the nested key is already formatted from the constructor
    return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end
  } else {
    return data + propStr + msgStr + end
  }
}

function asChindings (instance, bindings) {
  let value
  let data = instance[chindingsSym]
  const stringify = instance[stringifySym]
  const stringifySafe = instance[stringifySafeSym]
  const stringifiers = instance[stringifiersSym]
  const wildcardStringifier = stringifiers[wildcardFirstSym]
  const serializers = instance[serializersSym]
  const formatter = instance[formattersSym].bindings
  bindings = formatter(bindings)

  for (const key in bindings) {
    value = bindings[key]
    const valid = (key.length < 5 || (key !== 'level' &&
      key !== 'serializers' &&
      key !== 'formatters' &&
      key !== 'customLevels')) &&
      bindings.hasOwnProperty(key) &&
      value !== undefined
    if (valid === true) {
      value = serializers[key] ? serializers[key](value) : value
      value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe)
      if (value === undefined) continue
      data += ',"' + key + '":' + value
    }
  }
  return data
}

function hasBeenTampered (stream) {
  return stream.write !== stream.constructor.prototype.write
}

function buildSafeSonicBoom (opts) {
  const stream = new SonicBoom(opts)
  stream.on('error', filterBrokenPipe)
  // If we are sync: false, we must flush on exit
  if (!opts.sync && isMainThread) {
    onExit.register(stream, autoEnd)

    stream.on('close', function () {
      onExit.unregister(stream)
    })
  }
  return stream

  function filterBrokenPipe (err) {
    // Impossible to replicate across all operating systems
    /* istanbul ignore next */
    if (err.code === 'EPIPE') {
      // If we get EPIPE, we should stop logging here
      // however we have no control to the consumer of
      // SonicBoom, so we just overwrite the write method
      stream.write = noop
      stream.end = noop
      stream.flushSync = noop
      stream.destroy = noop
      return
    }
    stream.removeListener('error', filterBrokenPipe)
    stream.emit('error', err)
  }
}

function autoEnd (stream, eventName) {
  // This check is needed only on some platforms
  /* istanbul ignore next */
  if (stream.destroyed) {
    return
  }

  if (eventName === 'beforeExit') {
    // We still have an event loop, let's use it
    stream.flush()
    stream.on('drain', function () {
      stream.end()
    })
  } else {
    // For some reason istanbul is not detecting this, but it's there
    /* istanbul ignore next */
    // We do not have an event loop, so flush synchronously
    stream.flushSync()
  }
}

function createArgsNormalizer (defaultOptions) {
  return function normalizeArgs (instance, caller, opts = {}, stream) {
    // support stream as a string
    if (typeof opts === 'string') {
      stream = buildSafeSonicBoom({ dest: opts })
      opts = {}
    } else if (typeof stream === 'string') {
      if (opts && opts.transport) {
        throw Error('only one of option.transport or stream can be specified')
      }
      stream = buildSafeSonicBoom({ dest: stream })
    } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
      stream = opts
      opts = {}
    } else if (opts.transport) {
      if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
        throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)')
      }
      if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
        throw Error('option.transport.targets do not allow custom level formatters')
      }

      let customLevels
      if (opts.customLevels) {
        customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels)
      }
      stream = transport({ caller, ...opts.transport, levels: customLevels })
    }
    opts = Object.assign({}, defaultOptions, opts)
    opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers)
    opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters)

    if (opts.prettyPrint) {
      throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)')
    }

    const { enabled, onChild } = opts
    if (enabled === false) opts.level = 'silent'
    if (!onChild) opts.onChild = noop
    if (!stream) {
      if (!hasBeenTampered(process.stdout)) {
        // If process.stdout.fd is undefined, it means that we are running
        // in a worker thread. Let's assume we are logging to file descriptor 1.
        stream = buildSafeSonicBoom({ fd: process.stdout.fd || 1 })
      } else {
        stream = process.stdout
      }
    }
    return { opts, stream }
  }
}

function stringify (obj, stringifySafeFn) {
  try {
    return JSON.stringify(obj)
  } catch (_) {
    try {
      const stringify = stringifySafeFn || this[stringifySafeSym]
      return stringify(obj)
    } catch (_) {
      return '"[unable to serialize, circular reference is too complex to analyze]"'
    }
  }
}

function buildFormatters (level, bindings, log) {
  return {
    level,
    bindings,
    log
  }
}

/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */
function normalizeDestFileDescriptor (destination) {
  const fd = Number(destination)
  if (typeof destination === 'string' && Number.isFinite(fd)) {
    return fd
  }
  // destination could be undefined if we are in a worker
  if (destination === undefined) {
    // This is stdout in UNIX systems
    return 1
  }
  return destination
}

module.exports = {
  noop,
  buildSafeSonicBoom,
  asChindings,
  asJson,
  genLog,
  createArgsNormalizer,
  stringify,
  buildFormatters,
  normalizeDestFileDescriptor
}



================================================
FILE: lib/transport-stream.js
================================================
'use strict'

const { realImport, realRequire } = require('real-require')

module.exports = loadTransportStreamBuilder

/**
 * Loads & returns a function to build transport streams
 * @param {string} target
 * @returns {Promise<function(object): Promise<import('node:stream').Writable>>}
 * @throws {Error} In case the target module does not export a function
 */
async function loadTransportStreamBuilder (target) {
  let fn
  try {
    const toLoad = target.startsWith('file://') ? target : 'file://' + target

    if (toLoad.endsWith('.ts') || toLoad.endsWith('.cts')) {
      // TODO: add support for the TSM modules loader ( https://github.com/lukeed/tsm ).
      if (process[Symbol.for('ts-node.register.instance')]) {
        realRequire('ts-node/register')
      } else if (process.env && process.env.TS_NODE_DEV) {
        realRequire('ts-node-dev')
      }
      // TODO: Support ES imports once tsc, tap & ts-node provide better compatibility guarantees.
      fn = realRequire(decodeURIComponent(target))
    } else {
      fn = (await realImport(toLoad))
    }
  } catch (error) {
    // See this PR for details: https://github.com/pinojs/thread-stream/pull/34
    if ((error.code === 'ENOTDIR' || error.code === 'ERR_MODULE_NOT_FOUND')) {
      fn = realRequire(target)
    } else if (error.code === undefined || error.code === 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING') {
      // When bundled with pkg, an undefined error is thrown when called with realImport
      // When bundled with pkg and using node v20, an ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING error is thrown when called with realImport
      // More info at: https://github.com/pinojs/thread-stream/issues/143
      try {
        fn = realRequire(decodeURIComponent(target))
      } catch {
        throw error
      }
    } else {
      throw error
    }
  }

  // Depending on how the default export is performed, and on how the code is
  // transpiled, we may find cases of two nested "default" objects.
  // See https://github.com/pinojs/pino/issues/1243#issuecomment-982774762
  if (typeof fn === 'object') fn = fn.default
  if (typeof fn === 'object') fn = fn.default
  if (typeof fn !== 'function') throw Error('exported worker is not a function')

  return fn
}



================================================
FILE: lib/transport.js
================================================
'use strict'

const { createRequire } = require('module')
const getCallers = require('./caller')
const { join, isAbsolute, sep } = require('node:path')
const sleep = require('atomic-sleep')
const onExit = require('on-exit-leak-free')
const ThreadStream = require('thread-stream')

function setupOnExit (stream) {
  // This is leak free, it does not leave event handlers
  onExit.register(stream, autoEnd)
  onExit.registerBeforeExit(stream, flush)

  stream.on('close', function () {
    onExit.unregister(stream)
  })
}

function buildStream (filename, workerData, workerOpts, sync) {
  const stream = new ThreadStream({
    filename,
    workerData,
    workerOpts,
    sync
  })

  stream.on('ready', onReady)
  stream.on('close', function () {
    process.removeListener('exit', onExit)
  })

  process.on('exit', onExit)

  function onReady () {
    process.removeListener('exit', onExit)
    stream.unref()

    if (workerOpts.autoEnd !== false) {
      setupOnExit(stream)
    }
  }

  function onExit () {
    /* istanbul ignore next */
    if (stream.closed) {
      return
    }
    stream.flushSync()
    // Apparently there is a very sporadic race condition
    // that in certain OS would prevent the messages to be flushed
    // because the thread might not have been created still.
    // Unfortunately we need to sleep(100) in this case.
    sleep(100)
    stream.end()
  }

  return stream
}

function autoEnd (stream) {
  stream.ref()
  stream.flushSync()
  stream.end()
  stream.once('close', function () {
    stream.unref()
  })
}

function flush (stream) {
  stream.flushSync()
}

function transport (fullOptions) {
  const { pipeline, targets, levels, dedupe, worker = {}, caller = getCallers(), sync = false } = fullOptions

  const options = {
    ...fullOptions.options
  }

  // Backwards compatibility
  const callers = typeof caller === 'string' ? [caller] : caller

  // This will be eventually modified by bundlers
  const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {}

  let target = fullOptions.target

  if (target && targets) {
    throw new Error('only one of target or targets can be specified')
  }

  if (targets) {
    target = bundlerOverrides['pino-worker'] || join(__dirname, 'worker.js')
    options.targets = targets.filter(dest => dest.target).map((dest) => {
      return {
        ...dest,
        target: fixTarget(dest.target)
      }
    })
    options.pipelines = targets.filter(dest => dest.pipeline).map((dest) => {
      return dest.pipeline.map((t) => {
        return {
          ...t,
          level: dest.level, // duplicate the pipeline `level` property defined in the upper level
          target: fixTarget(t.target)
        }
      })
    })
  } else if (pipeline) {
    target = bundlerOverrides['pino-worker'] || join(__dirname, 'worker.js')
    options.pipelines = [pipeline.map((dest) => {
      return {
        ...dest,
        target: fixTarget(dest.target)
      }
    })]
  }

  if (levels) {
    options.levels = levels
  }

  if (dedupe) {
    options.dedupe = dedupe
  }

  options.pinoWillSendConfig = true

  return buildStream(fixTarget(target), options, worker, sync)

  function fixTarget (origin) {
    origin = bundlerOverrides[origin] || origin

    if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
      return origin
    }

    if (origin === 'pino/file') {
      return join(__dirname, '..', 'file.js')
    }

    let fixTarget

    for (const filePath of callers) {
      try {
        const context = filePath === 'node:repl'
          ? process.cwd() + sep
          : filePath

        fixTarget = createRequire(context).resolve(origin)
        break
      } catch (err) {
        // Silent catch
        continue
      }
    }

    if (!fixTarget) {
      throw new Error(`unable to determine transport target for "${origin}"`)
    }

    return fixTarget
  }
}

module.exports = transport



================================================
FILE: lib/worker.js
================================================
'use strict'

const EE = require('node:events')
const { pipeline, PassThrough } = require('node:stream')
const pino = require('../pino.js')
const build = require('pino-abstract-transport')
const loadTransportStreamBuilder = require('./transport-stream')

// This file is not checked by the code coverage tool,
// as it is not reliable.

/* istanbul ignore file */

/*
 * > Multiple targets & pipelines
 *
 *
 * ┌─────────────────────────────────────────────────┐    ┌─────┐
 * │                                                 │    │  p  │
 * │                                                 │    │  i  │
 * │                   target                        │    │  n  │
 * │               │ ────────────────────────────────┼────┤  o  │
 * │   targets     │   target                        │    │  .  │
 * │ ────────────► │ ────────────────────────────────┼────┤  m  │       source
 * │               │   target                        │    │  u  │         │
 * │               │ ────────────────────────────────┼────┤  l  │         │write
 * │               │                                 │    │  t  │         ▼
 * │               │  pipeline   ┌───────────────┐   │    │  i  │      ┌────────┐
 * │               │ ──────────► │  PassThrough  ├───┼────┤  s  ├──────┤        │
 * │               │             └───────────────┘   │    │  t  │ write│ Thread │
 * │               │                                 │    │  r  │◄─────┤ Stream │
 * │               │  pipeline   ┌───────────────┐   │    │  e  │      │        │
 * │               │ ──────────► │  PassThrough  ├───┼────┤  a  │      └────────┘
 * │                             └───────────────┘   │    │  m  │
 * │                                                 │    │     │
 * └─────────────────────────────────────────────────┘    └─────┘
 *
 *
 *
 *  > One single pipeline or target
 *
 *
 *                                                           source
 *                                                             │
 * ┌────────────────────────────────────────────────┐          │write
 * │                                                │          ▼
 * │                                                │      ┌────────┐
 * │   targets     │   target                       │      │        │
 * │ ────────────► │  ──────────────────────────────┤      │        │
 * │               │                                │      │        │
 * │                                                ├──────┤        │
 * │                                                │      │        │
 * │                                                │      │        │
 * │                     OR                         │      │        │
 * │                                                │      │        │
 * │                                                │      │        │
 * │                               ┌──────────────┐ │      │        │
 * │   targets     │   pipeline    │              │ │      │ Thread │
 * │ ────────────► │  ────────────►│ PassThrough  ├─┤      │ Stream │
 * │               │               │              │ │      │        │
 * │                               └──────────────┘ │      │        │
 * │                                                │      │        │
 * │                     OR                         │ write│        │
 * │                                                │◄─────┤        │
 * │                                                │      │        │
 * │                ┌──────────────┐                │      │        │
 * │    pipeline    │              │                │      │        │
 * │ ──────────────►│ PassThrough  ├────────────────┤      │        │
 * │                │              │                │      │        │
 * │                └──────────────┘                │      └────────┘
 * │                                                │
 * │                                                │
 * └────────────────────────────────────────────────┘
 */

module.exports = async function ({ targets, pipelines, levels, dedupe }) {
  const targetStreams = []

  // Process targets
  if (targets && targets.length) {
    targets = await Promise.all(targets.map(async (t) => {
      const fn = await loadTransportStreamBuilder(t.target)
      const stream = await fn(t.options)
      return {
        level: t.level,
        stream
      }
    }))

    targetStreams.push(...targets)
  }

  // Process pipelines
  if (pipelines && pipelines.length) {
    pipelines = await Promise.all(
      pipelines.map(async (p) => {
        let level
        const pipeDests = await Promise.all(
          p.map(async (t) => {
            // level assigned to pipeline is duplicated over all its targets, just store it
            level = t.level
            const fn = await loadTransportStreamBuilder(t.target)
            const stream = await fn(t.options)
            return stream
          }
          ))

        return {
          level,
          stream: createPipeline(pipeDests)
        }
      })
    )
    targetStreams.push(...pipelines)
  }

  // Skip building the multistream step if either one single pipeline or target is defined and
  // return directly the stream instance back to TreadStream.
  // This is equivalent to define either:
  //
  // pino.transport({ target: ... })
  //
  // OR
  //
  // pino.transport({ pipeline: ... })
  if (targetStreams.length === 1) {
    return targetStreams[0].stream
  } else {
    return build(process, {
      parse: 'lines',
      metadata: true,
      close (err, cb) {
        let expected = 0
        for (const transport of targetStreams) {
          expected++
          transport.stream.on('close', closeCb)
          transport.stream.end()
        }

        function closeCb () {
          if (--expected === 0) {
            cb(err)
          }
        }
      }
    })
  }

  // TODO: Why split2 was not used for pipelines?
  function process (stream) {
    const multi = pino.multistream(targetStreams, { levels, dedupe })
    // TODO manage backpressure
    stream.on('data', function (chunk) {
      const { lastTime, lastMsg, lastObj, lastLevel } = this
      multi.lastLevel = lastLevel
      multi.lastTime = lastTime
      multi.lastMsg = lastMsg
      multi.lastObj = lastObj

      // TODO handle backpressure
      multi.write(chunk + '\n')
    })
  }

  /**
 * Creates a pipeline using the provided streams and return an instance of `PassThrough` stream
 * as a source for the pipeline.
 *
 * @param {(TransformStream|WritableStream)[]} streams An array of streams.
 *   All intermediate streams in the array *MUST* be `Transform` streams and only the last one `Writable`.
 * @returns A `PassThrough` stream instance representing the source stream of the pipeline
 */
  function createPipeline (streams) {
    const ee = new EE()
    const stream = new PassThrough({
      autoDestroy: true,
      destroy (_, cb) {
        ee.on('error', cb)
        ee.on('closed', cb)
      }
    })

    pipeline(stream, ...streams, function (err) {
      if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
        ee.emit('error', err)
        return
      }

      ee.emit('closed')
    })

    return stream
  }
}



================================================
FILE: test/basic.test.js
================================================
'use strict'

const os = require('node:os')
const { readFileSync } = require('node:fs')
const test = require('node:test')
const assert = require('node:assert')

const { sink, check, match, once, watchFileCreated, file } = require('./helper')
const pino = require('../')
const { version } = require('../package.json')
const { pid } = process
const hostname = os.hostname()

test('pino version is exposed on export', () => {
  assert.equal(pino.version, version)
})

test('pino version is exposed on instance', () => {
  const instance = pino()
  assert.equal(instance.version, version)
})

test('child instance exposes pino version', () => {
  const child = pino().child({ foo: 'bar' })
  assert.equal(child.version, version)
})

test('bindings are exposed on every instance', () => {
  const instance = pino()
  assert.deepEqual(instance.bindings(), {})
})

test('bindings contain the name and the child bindings', () => {
  const instance = pino({ name: 'basicTest', level: 'info' }).child({ foo: 'bar' }).child({ a: 2 })
  assert.deepEqual(instance.bindings(), { name: 'basicTest', foo: 'bar', a: 2 })
})

test('set bindings on instance', () => {
  const instance = pino({ name: 'basicTest', level: 'info' })
  instance.setBindings({ foo: 'bar' })
  assert.deepEqual(instance.bindings(), { name: 'basicTest', foo: 'bar' })
})

test('newly set bindings overwrite old bindings', () => {
  const instance = pino({ name: 'basicTest', level: 'info', base: { foo: 'bar' } })
  instance.setBindings({ foo: 'baz' })
  assert.deepEqual(instance.bindings(), { name: 'basicTest', foo: 'baz' })
})

test('set bindings on child instance', () => {
  const child = pino({ name: 'basicTest', level: 'info' }).child({})
  child.setBindings({ foo: 'bar' })
  assert.deepEqual(child.bindings(), { name: 'basicTest', foo: 'bar' })
})

test('child should have bindings set by parent', () => {
  const instance = pino({ name: 'basicTest', level: 'info' })
  instance.setBindings({ foo: 'bar' })
  const child = instance.child({})
  assert.deepEqual(child.bindings(), { name: 'basicTest', foo: 'bar' })
})

test('child should not share bindings of parent set after child creation', () => {
  const instance = pino({ name: 'basicTest', level: 'info' })
  const child = instance.child({})
  instance.setBindings({ foo: 'bar' })
  assert.deepEqual(instance.bindings(), { name: 'basicTest', foo: 'bar' })
  assert.deepEqual(child.bindings(), { name: 'basicTest' })
})

function levelTest (name, level) {
  test(`${name} logs as ${level}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    instance[name]('hello world')
    check(assert.equal, await once(stream, 'data'), level, 'hello world')
  })

  test(`passing objects at level ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    const obj = { hello: 'world' }
    instance[name](obj)

    const result = await once(stream, 'data')
    assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
    assert.equal(result.pid, pid)
    assert.equal(result.hostname, hostname)
    assert.equal(result.level, level)
    assert.equal(result.hello, 'world')
    assert.deepEqual(Object.keys(obj), ['hello'])
  })

  test(`passing an object and a string at level ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    const obj = { hello: 'world' }
    instance[name](obj, 'a string')
    const result = await once(stream, 'data')
    assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level,
      msg: 'a string',
      hello: 'world'
    })
    assert.deepEqual(Object.keys(obj), ['hello'])
  })

  test(`passing a undefined and a string at level ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    instance[name](undefined, 'a string')
    const result = await once(stream, 'data')
    assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level,
      msg: 'a string'
    })
  })

  test(`overriding object key by string at level ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    instance[name]({ hello: 'world', msg: 'object' }, 'string')
    const result = await once(stream, 'data')
    assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level,
      msg: 'string',
      hello: 'world'
    })
  })

  test(`formatting logs as ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    instance[name]('hello %d', 42)
    const result = await once(stream, 'data')
    check(assert.equal, result, level, 'hello 42')
  })

  test(`formatting a symbol at level ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name

    const sym = Symbol('foo')
    instance[name]('hello %s', sym)

    const result = await once(stream, 'data')

    check(assert.equal, result, level, 'hello Symbol(foo)')
  })

  test(`passing error with a serializer at level ${name}`, async () => {
    const stream = sink()
    const err = new Error('myerror')
    const instance = pino({
      serializers: {
        err: pino.stdSerializers.err
      }
    }, stream)
    instance.level = name
    instance[name]({ err })
    const result = await once(stream, 'data')
    assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level,
      err: {
        type: 'Error',
        message: err.message,
        stack: err.stack
      },
      msg: err.message
    })
  })

  test(`child logger for level ${name}`, async () => {
    const stream = sink()
    const instance = pino(stream)
    instance.level = name
    const child = instance.child({ hello: 'world' })
    child[name]('hello world')
    const result = await once(stream, 'data')
    assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level,
      msg: 'hello world',
      hello: 'world'
    })
  })
}

levelTest('fatal', 60)
levelTest('error', 50)
levelTest('warn', 40)
levelTest('info', 30)
levelTest('debug', 20)
levelTest('trace', 10)

test('serializers can return undefined to strip field', async () => {
  const stream = sink()
  const instance = pino({
    serializers: {
      test () { return undefined }
    }
  }, stream)

  instance.info({ test: 'sensitive info' })
  const result = await once(stream, 'data')
  assert.equal('test' in result, false)
})

test('streams receive a message event with PINO_CONFIG', (t, end) => {
  const stream = sink()
  stream.once('message', (message) => {
    match(message, {
      code: 'PINO_CONFIG',
      config: {
        errorKey: 'err',
        levels: {
          labels: {
            10: 'trace',
            20: 'debug',
            30: 'info',
            40: 'warn',
            50: 'error',
            60: 'fatal'
          },
          values: {
            debug: 20,
            error: 50,
            fatal: 60,
            info: 30,
            trace: 10,
            warn: 40
          }
        },
        messageKey: 'msg'
      }
    })
    end()
  })
  pino(stream)
})

test('does not explode with a circular ref', () => {
  const stream = sink()
  const instance = pino(stream)
  const b = {}
  const a = {
    hello: b
  }
  b.a = a // circular ref
  assert.doesNotThrow(() => instance.info(a))
})

test('set the name', async () => {
  const stream = sink()
  const instance = pino({
    name: 'hello'
  }, stream)
  instance.fatal('this is fatal')
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    name: 'hello',
    msg: 'this is fatal'
  })
})

test('set the messageKey', async () => {
  const stream = sink()
  const message = 'hello world'
  const messageKey = 'fooMessage'
  const instance = pino({
    messageKey
  }, stream)
  instance.info(message)
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    fooMessage: message
  })
})

test('set the nestedKey', async () => {
  const stream = sink()
  const object = { hello: 'world' }
  const nestedKey = 'stuff'
  const instance = pino({
    nestedKey
  }, stream)
  instance.info(object)
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    stuff: object
  })
})

test('set undefined properties', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info({ hello: 'world', property: undefined })
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    hello: 'world'
  })
})

test('prototype properties are not logged', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info(Object.create({ hello: 'world' }))
  const { hello } = await once(stream, 'data')
  assert.equal(hello, undefined)
})

test('set the base', async () => {
  const stream = sink()
  const instance = pino({
    base: {
      a: 'b'
    }
  }, stream)

  instance.fatal('this is fatal')
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    a: 'b',
    level: 60,
    msg: 'this is fatal'
  })
})

test('set the base to null', async () => {
  const stream = sink()
  const instance = pino({
    base: null
  }, stream)
  instance.fatal('this is fatal')
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    level: 60,
    msg: 'this is fatal'
  })
})

test('set the base to null and use a formatter', async () => {
  const stream = sink()
  const instance = pino({
    base: null,
    formatters: {
      log (input) {
        return Object.assign({}, input, { additionalMessage: 'using pino' })
      }
    }
  }, stream)
  instance.fatal('this is fatal too')
  const result = await once(stream, 'data')
  assert.equal(new Date(result.time) <= new Date(), true, 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    level: 60,
    msg: 'this is fatal too',
    additionalMessage: 'using pino'
  })
})

test('throw if creating child without bindings', () => {
  const stream = sink()
  const instance = pino(stream)
  try {
    instance.child()
    assert.fail('it should throw')
  } catch (err) {
    assert.equal(err.message, 'missing bindings for child Pino')
  }
})

test('correctly escapes msg strings with stray double quote at end', async () => {
  const stream = sink()
  const instance = pino({
    name: 'hello'
  }, stream)

  instance.fatal('this contains "')
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    name: 'hello',
    msg: 'this contains "'
  })
})

test('correctly escape msg strings with unclosed double quote', async () => {
  const stream = sink()
  const instance = pino({
    name: 'hello'
  }, stream)
  instance.fatal('" this contains')
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    name: 'hello',
    msg: '" this contains'
  })
})

test('correctly escape quote in a key', async () => {
  const stream = sink()
  const instance = pino(stream)
  const obj = { 'some"obj': 'world' }
  instance.info(obj, 'a string')
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    level: 30,
    pid,
    hostname,
    msg: 'a string',
    'some"obj': 'world'
  })
  assert.deepEqual(Object.keys(obj), ['some"obj'])
})

// https://github.com/pinojs/pino/issues/139
test('object and format string', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info({}, 'foo %s', 'bar')

  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'foo bar'
  })
})

test('object and format string property', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info({ answer: 42 }, 'foo %s', 'bar')
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'foo bar',
    answer: 42
  })
})

test('correctly strip undefined when returned from toJSON', async () => {
  const stream = sink()
  const instance = pino({
    test: 'this'
  }, stream)
  instance.fatal({ test: { toJSON () { return undefined } } })
  const result = await once(stream, 'data')
  assert.equal('test' in result, false)
})

test('correctly supports stderr', (t, end) => {
  // stderr inherits from Stream, rather than Writable
  const dest = {
    writable: true,
    write (result) {
      result = JSON.parse(result)
      delete result.time
      assert.deepEqual(result, {
        pid,
        hostname,
        level: 60,
        msg: 'a message'
      })
      end()
    }
  }
  const instance = pino(dest)
  instance.fatal('a message')
})

test('normalize number to string', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info(1)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: '1'
  })
})

test('normalize number to string with an object', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info({ answer: 42 }, 1)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: '1',
    answer: 42
  })
})

test('handles objects with null prototype', async () => {
  const stream = sink()
  const instance = pino(stream)
  const o = Object.create(null)
  o.test = 'test'
  instance.info(o)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    test: 'test'
  })
})

test('pino.destination', async () => {
  const tmp = file()
  const instance = pino(pino.destination(tmp))
  instance.info('hello')
  await watchFileCreated(tmp)
  const result = JSON.parse(readFileSync(tmp).toString())
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('auto pino.destination with a string', async () => {
  const tmp = file()
  const instance = pino(tmp)
  instance.info('hello')
  await watchFileCreated(tmp)
  const result = JSON.parse(readFileSync(tmp).toString())
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('auto pino.destination with a string as second argument', async () => {
  const tmp = file()
  const instance = pino(null, tmp)
  instance.info('hello')
  await watchFileCreated(tmp)
  const result = JSON.parse(readFileSync(tmp).toString())
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('does not override opts with a string as second argument', async () => {
  const tmp = file()
  const instance = pino({
    timestamp: () => ',"time":"none"'
  }, tmp)
  instance.info('hello')
  await watchFileCreated(tmp)
  const result = JSON.parse(readFileSync(tmp).toString())
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    time: 'none',
    msg: 'hello'
  })
})

// https://github.com/pinojs/pino/issues/222
test('children with same names render in correct order', async () => {
  const stream = sink()
  const root = pino(stream)
  root.child({ a: 1 }).child({ a: 2 }).info({ a: 3 })
  const { a } = await once(stream, 'data')
  assert.equal(a, 3, 'last logged object takes precedence')
})

test('use `safe-stable-stringify` to avoid circular dependencies', async () => {
  const stream = sink()
  const root = pino(stream)
  // circular depth
  const obj = {}
  obj.a = obj
  root.info(obj)
  const { a } = await once(stream, 'data')
  assert.deepEqual(a, { a: '[Circular]' })
})

test('correctly log non circular objects', async () => {
  const stream = sink()
  const root = pino(stream)
  const obj = {}
  let parent = obj
  for (let i = 0; i < 10; i++) {
    parent.node = {}
    parent = parent.node
  }
  root.info(obj)
  const { node } = await once(stream, 'data')
  assert.deepEqual(node, { node: { node: { node: { node: { node: { node: { node: { node: { node: {} } } } } } } } } })
})

test('safe-stable-stringify must be used when interpolating', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { a: { b: {} } }
  o.a.b.c = o.a.b
  instance.info('test %j', o)

  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'test {"a":{"b":{"c":"[Circular]"}}}')
})

test('throws when setting useOnlyCustomLevels without customLevels', () => {
  assert.throws(
    () => {
      pino({
        useOnlyCustomLevels: true
      })
    },
    /customLevels is required if useOnlyCustomLevels is set true/
  )
})

test('correctly log Infinity', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { num: Infinity }
  instance.info(o)

  const { num } = await once(stream, 'data')
  assert.equal(num, null)
})

test('correctly log -Infinity', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { num: -Infinity }
  instance.info(o)

  const { num } = await once(stream, 'data')
  assert.equal(num, null)
})

test('correctly log NaN', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { num: NaN }
  instance.info(o)

  const { num } = await once(stream, 'data')
  assert.equal(num, null)
})

test('offers a .default() method to please typescript', async () => {
  assert.equal(pino.default, pino)

  const stream = sink()
  const instance = pino.default(stream)
  instance.info('hello world')
  check(assert.equal, await once(stream, 'data'), 30, 'hello world')
})

test('correctly skip function', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { num: NaN }
  instance.info(o, () => {})

  const { msg } = await once(stream, 'data')
  assert.equal(msg, undefined)
})

test('correctly skip Infinity', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { num: NaN }
  instance.info(o, Infinity)

  const { msg } = await once(stream, 'data')
  assert.equal(msg, null)
})

test('correctly log number', async () => {
  const stream = sink()
  const instance = pino(stream)

  const o = { num: NaN }
  instance.info(o, 42)

  const { msg } = await once(stream, 'data')
  assert.equal(msg, 42)
})

test('nestedKey should not be used for non-objects', async () => {
  const stream = sink()
  const message = 'hello'
  const nestedKey = 'stuff'
  const instance = pino({
    nestedKey
  }, stream)
  instance.info(message)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepStrictEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: message
  })
})

test('throws if prettyPrint is passed in as an option', async () => {
  assert.throws(
    () => {
      pino({
        prettyPrint: true
      })
    },
    Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)')
  )
})

test('Should invoke `onChild` with the newly created child', () => {
  let innerChild
  const child = pino({
    onChild: (instance) => {
      innerChild = instance
    }
  }).child({ foo: 'bar' })
  assert.equal(child, innerChild)
})

test('logger message should have the prefix message that defined in the logger creation', async () => {
  const stream = sink()
  const logger = pino({
    msgPrefix: 'My name is Bond '
  }, stream)
  assert.equal(logger.msgPrefix, 'My name is Bond ')
  logger.info('James Bond')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'My name is Bond James Bond')
})

test('child message should have the prefix message that defined in the child creation', async () => {
  const stream = sink()
  const instance = pino(stream)
  const child = instance.child({}, { msgPrefix: 'My name is Bond ' })
  child.info('James Bond')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'My name is Bond James Bond')
})

test('child message should have the prefix message that defined in the child creation when logging with log meta', async () => {
  const stream = sink()
  const instance = pino(stream)
  const child = instance.child({}, { msgPrefix: 'My name is Bond ' })
  child.info({ hello: 'world' }, 'James Bond')
  const { msg, hello } = await once(stream, 'data')
  assert.equal(hello, 'world')
  assert.equal(msg, 'My name is Bond James Bond')
})

test('logged message should not have the prefix when not providing any message', async () => {
  const stream = sink()
  const instance = pino(stream)
  const child = instance.child({}, { msgPrefix: 'This should not be shown ' })
  child.info({ hello: 'world' })
  const { msg, hello } = await once(stream, 'data')
  assert.equal(hello, 'world')
  assert.equal(msg, undefined)
})

test('child message should append parent prefix to current prefix that defined in the child creation', async () => {
  const stream = sink()
  const instance = pino({
    msgPrefix: 'My name is Bond '
  }, stream)
  const child = instance.child({}, { msgPrefix: 'James ' })
  child.info('Bond')
  assert.equal(child.msgPrefix, 'My name is Bond James ')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'My name is Bond James Bond')
})

test('child message should inherent parent prefix', async () => {
  const stream = sink()
  const instance = pino({
    msgPrefix: 'My name is Bond '
  }, stream)
  const child = instance.child({})
  child.info('James Bond')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'My name is Bond James Bond')
})

test('grandchild message should inherent parent prefix', async () => {
  const stream = sink()
  const instance = pino(stream)
  const child = instance.child({}, { msgPrefix: 'My name is Bond ' })
  const grandchild = child.child({})
  grandchild.info('James Bond')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'My name is Bond James Bond')
})



================================================
FILE: test/broken-pipe.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')
const { fork } = require('node:child_process')
const tspl = require('@matteo.collina/tspl')
const { once } = require('./helper')
const pino = require('..')

if (process.platform === 'win32') {
  console.log('skipping on windows')
  process.exit(0)
}

if (process.env.CITGM) {
  // This looks like a some form of limitations of the CITGM test runner
  // or the HW/SW we run it on. This file can hang on Node.js v18.x.
  // The failure does not reproduce locally or on our CI.
  // Skipping it is the only way to keep pino in CITGM.
  // https://github.com/nodejs/citgm/pull/1002#issuecomment-1751942988
  console.log('Skipping on Node.js core CITGM because it hangs on v18.x')
  process.exit(0)
}

function testFile (file) {
  file = join('fixtures', 'broken-pipe', file)
  test(file, async () => {
    const child = fork(join(__dirname, file), { silent: true })
    child.stdout.destroy()

    child.stderr.pipe(process.stdout)

    const res = await once(child, 'close')
    assert.equal(res, 0) // process exits successfully
  })
}

testFile('basic.js')
testFile('destination.js')
testFile('syncfalse.js')

test('let error pass through', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = pino.destination({ sync: true })

  // side effect of the pino constructor is that it will set an
  // event handler for error
  pino(stream)

  process.nextTick(() => stream.emit('error', new Error('kaboom')))
  process.nextTick(() => stream.emit('error', new Error('kaboom')))

  stream.on('error', (err) => {
    plan.equal(err.message, 'kaboom')
  })

  await plan
})



================================================
FILE: test/browser-child.test.js
================================================
'use strict'
const test = require('tape')
const pino = require('../browser')

test('child has parent level', ({ end, same, is }) => {
  const instance = pino({
    level: 'error',
    browser: {}
  })

  const child = instance.child({})

  same(child.level, instance.level)
  end()
})

test('child can set level at creation time', ({ end, same, is }) => {
  const instance = pino({
    level: 'error',
    browser: {}
  })

  const child = instance.child({}, { level: 'info' }) // first bindings, then options

  same(child.level, 'info')
  end()
})

test('changing child level does not affect parent', ({ end, same, is }) => {
  const instance = pino({
    level: 'error',
    browser: {}
  })

  const child = instance.child({})
  child.level = 'info'

  same(instance.level, 'error')
  end()
})

test('child should log, if its own level allows it', ({ end, same, is }) => {
  const expected = [
    {
      level: 30,
      msg: 'this is info'
    },
    {
      level: 40,
      msg: 'this is warn'
    },
    {
      level: 50,
      msg: 'this is an error'
    }
  ]
  const instance = pino({
    level: 'error',
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    }
  })

  const child = instance.child({})
  child.level = 'info'

  child.debug('this is debug')
  child.info('this is info')
  child.warn('this is warn')
  child.error('this is an error')

  same(expected.length, 0, 'not all messages were read')
  end()
})

test('changing child log level should not affect parent log behavior', ({ end, same, is }) => {
  const expected = [
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    level: 'error',
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    }
  })

  const child = instance.child({})
  child.level = 'info'

  instance.warn('this is warn')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  same(expected.length, 0, 'not all messages were read')
  end()
})

test('onChild callback should be called when new child is created', ({ end, pass, plan }) => {
  plan(1)
  const instance = pino({
    level: 'error',
    browser: {},
    onChild: (_child) => {
      pass('onChild callback was called')
      end()
    }
  })

  instance.child({})
})

function checkLogObjects (is, same, actual, expected) {
  is(actual.time <= Date.now(), true, 'time is greater than Date.now()')

  const actualCopy = Object.assign({}, actual)
  const expectedCopy = Object.assign({}, expected)
  delete actualCopy.time
  delete expectedCopy.time

  same(actualCopy, expectedCopy)
}



================================================
FILE: test/browser-disabled.test.js
================================================
'use strict'
const test = require('tape')
const pino = require('../browser')

test('set browser opts disabled to true', ({ end, same }) => {
  const instance = pino({
    browser: {
      disabled: true,
      write (actual) {
        checkLogObjects(same, actual, [])
      }
    }
  })
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('set browser opts disabled to false', ({ end, same }) => {
  const expected = [
    {
      level: 30,
      msg: 'hello world'
    },
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    browser: {
      disabled: false,
      write (actual) {
        checkLogObjects(same, actual, expected.shift())
      }
    }
  })
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('disabled is not set in browser opts', ({ end, same }) => {
  const expected = [
    {
      level: 30,
      msg: 'hello world'
    },
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    browser: {
      write (actual) {
        checkLogObjects(same, actual, expected.shift())
      }
    }
  })
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

function checkLogObjects (same, actual, expected, is) {
  const actualCopy = Object.assign({}, actual)
  const expectedCopy = Object.assign({}, expected)
  delete actualCopy.time
  delete expectedCopy.time

  same(actualCopy, expectedCopy)
}



================================================
FILE: test/browser-early-console-freeze.test.js
================================================
'use strict'
Object.freeze(console)
const test = require('tape')
const pino = require('../browser')

test('silent level', ({ end, fail, pass }) => {
  pino({
    level: 'silent',
    browser: { }
  })
  end()
})



================================================
FILE: test/browser-is-level-enabled.test.js
================================================
'use strict'

const { describe, test } = require('node:test')
const assert = require('node:assert')
const pino = require('../browser')

const customLevels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

describe('Default levels suite', () => {
  test('can check if current level enabled', async () => {
    const log = pino({ level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if current level enabled when as object', async () => {
    const log = pino({ asObject: true, level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async () => {
    const log = pino()
    assert.equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async () => {
    const log = pino({ level: 'debug' })
    assert.equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async () => {
    const log = pino({ level: 'error' })
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('ASC: can check if child has current level enabled', async () => {
    const log = pino().child({}, { level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async () => {
    const log = pino({
      customLevels: { foo: 35 },
      level: 'debug'
    })
    assert.equal(true, log.isLevelEnabled('foo'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })
})

describe('Custom levels suite', () => {
  test('can check if current level enabled', async () => {
    const log = pino({ level: 'debug', customLevels })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async () => {
    const log = pino({ customLevels })
    assert.equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async () => {
    const log = pino({ level: 'debug', customLevels })
    assert.equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async () => {
    const log = pino({ level: 'error', customLevels })
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if child has current level enabled', async () => {
    const log = pino().child({ customLevels }, { level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async () => {
    const log = pino({
      customLevels: { foo: 35, ...customLevels },
      level: 'debug'
    })
    assert.equal(true, log.isLevelEnabled('foo'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })
})



================================================
FILE: test/browser-levels.test.js
================================================
'use strict'
const test = require('tape')
const pino = require('../browser')

test('set the level by string', ({ end, same, is }) => {
  const expected = [
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    }
  })

  instance.level = 'error'
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('set the level by string. init with silent', ({ end, same, is }) => {
  const expected = [
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    level: 'silent',
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    }
  })

  instance.level = 'error'
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('set the level by string. init with silent and transmit', ({ end, same, is }) => {
  const expected = [
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    level: 'silent',
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    },
    transmit: {
      send () {}
    }
  })

  instance.level = 'error'
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('set the level via constructor', ({ end, same, is }) => {
  const expected = [
    {
      level: 50,
      msg: 'this is an error'
    },
    {
      level: 60,
      msg: 'this is fatal'
    }
  ]
  const instance = pino({
    level: 'error',
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    }
  })

  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  end()
})

test('set custom level and use it', ({ end, same, is }) => {
  const expected = [
    {
      level: 31,
      msg: 'this is a custom level'
    }
  ]
  const instance = pino({
    customLevels: {
      success: 31
    },
    browser: {
      write (actual) {
        checkLogObjects(is, same, actual, expected.shift())
      }
    }
  })

  instance.success('this is a custom level')

  end()
})

test('the wrong level throws', ({ end, throws }) => {
  const instance = pino()
  throws(() => {
    instance.level = 'kaboom'
  })
  end()
})

test('the wrong level by number throws', ({ end, throws }) => {
  const instance = pino()
  throws(() => {
    instance.levelVal = 55
  })
  end()
})

test('exposes level string mappings', ({ end, is }) => {
  is(pino.levels.values.error, 50)
  end()
})

test('exposes level number mappings', ({ end, is }) => {
  is(pino.levels.labels[50], 'error')
  end()
})

test('returns level integer', ({ end, is }) => {
  const instance = pino({ level: 'error' })
  is(instance.levelVal, 50)
  end()
})

test('silent level via constructor', ({ end, fail }) => {
  const instance = pino({
    level: 'silent',
    browser: {
      write () {
        fail('no data should be logged')
      }
    }
  })

  Object.keys(pino.levels.values).forEach((level) => {
    instance[level]('hello world')
  })

  end()
})

test('silent level by string', ({ end, fail }) => {
  const instance = pino({
    browser: {
      write () {
        fail('no data should be logged')
      }
    }
  })

  instance.level = 'silent'

  Object.keys(pino.levels.values).forEach((level) => {
    instance[level]('hello world')
  })

  end()
})

test('exposed levels', ({ end, same }) => {
  same(Object.keys(pino.levels.values), [
    'fatal',
    'error',
    'warn',
    'info',
    'debug',
    'trace'
  ])
  end()
})

test('exposed labels', ({ end, same }) => {
  same(Object.keys(pino.levels.labels), [
    '10',
    '20',
    '30',
    '40',
    '50',
    '60'
  ])
  end()
})

function checkLogObjects (is, same, actual, expected) {
  is(actual.time <= Date.now(), true, 'time is greater than Date.now()')

  const actualCopy = Object.assign({}, actual)
  const expectedCopy = Object.assign({}, expected)
  delete actualCopy.time
  delete expectedCopy.time

  same(actualCopy, expectedCopy)
}



================================================
FILE: test/browser-serializers.test.js
================================================
'use strict'
// eslint-disable-next-line
if (typeof $1 !== 'undefined') $1 = arguments.callee.caller.arguments[0]

const test = require('tape')
const fresh = require('import-fresh')
const pino = require('../browser')

const parentSerializers = {
  test: () => 'parent'
}

const childSerializers = {
  test: () => 'child'
}

test('serializers override values', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write (o) {
        is(o.test, 'parent')
        end()
      }
    }
  })

  parent.fatal({ test: 'test' })
})

test('without the serialize option, serializers do not override values', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      write (o) {
        is(o.test, 'test')
        end()
      }
    }
  })

  parent.fatal({ test: 'test' })
})

if (process.title !== 'browser') {
  test('if serialize option is true, standard error serializer is auto enabled', ({ end, same }) => {
    const err = Error('test')
    err.code = 'test'
    err.type = 'Error' // get that cov
    const expect = pino.stdSerializers.err(err)

    const consoleError = console.error
    console.error = function (err) {
      same(err, expect)
    }

    const logger = fresh('../browser')({
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.fatal(err)
    end()
  })

  test('if serialize option is array, standard error serializer is auto enabled', ({ end, same }) => {
    const err = Error('test')
    err.code = 'test'
    const expect = pino.stdSerializers.err(err)

    const consoleError = console.error
    console.error = function (err) {
      same(err, expect)
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: [] }
    })

    console.error = consoleError

    logger.fatal(err)
    end()
  })

  test('if serialize option is array containing !stdSerializers.err, standard error serializer is disabled', ({ end, is }) => {
    const err = Error('test')
    err.code = 'test'
    const expect = err

    const consoleError = console.error
    console.error = function (err) {
      is(err, expect)
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: ['!stdSerializers.err'] }
    })

    console.error = consoleError

    logger.fatal(err)
    end()
  })

  test('in browser, serializers apply to all objects', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (test, test2, test3, test4, test5) {
      is(test.key, 'serialized')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'serialized3')
    }

    const logger = fresh('../browser', require)({
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      },
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('serialize can be an array of selected serializers', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (test, test2, test3, test4, test5) {
      is(test.key, 'test')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'test')
    }

    const logger = fresh('../browser', require)({
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      },
      browser: { serialize: ['key2'] }
    })

    console.error = consoleError

    logger.fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('serialize filter applies to child loggers', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding, test, test2, test3, test4, test5) {
      is(test.key, 'test')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'test')
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: ['key2'] }
    })

    console.error = consoleError

    logger.child({
      aBinding: 'test'
    }, {
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      }
    }).fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('serialize filter applies to child loggers through bindings', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding, test, test2, test3, test4, test5) {
      is(test.key, 'test')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'test')
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: ['key2'] }
    })

    console.error = consoleError

    logger.child({
      aBinding: 'test',
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      }
    }).fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('parent serializers apply to child bindings', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding) {
      is(binding.key, 'serialized')
    }

    const logger = fresh('../browser', require)({
      serializers: {
        key: () => 'serialized'
      },
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.child({ key: 'test' }).fatal({ test: 'test' })
    end()
  })

  test('child serializers apply to child bindings', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding) {
      is(binding.key, 'serialized')
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.child({
      key: 'test'
    }, {
      serializers: {
        key: () => 'serialized'
      }
    }).fatal({ test: 'test' })
    end()
  })
}

test('child does not overwrite parent serializers', ({ end, is }) => {
  let c = 0
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write (o) {
        c++
        if (c === 1) is(o.test, 'parent')
        if (c === 2) {
          is(o.test, 'child')
          end()
        }
      }
    }
  })
  const child = parent.child({}, { serializers: childSerializers })

  parent.fatal({ test: 'test' })
  child.fatal({ test: 'test' })
})

test('children inherit parent serializers', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write (o) {
        is(o.test, 'parent')
      }
    }
  })

  const child = parent.child({ a: 'property' })
  child.fatal({ test: 'test' })
  end()
})

test('children serializers get called', ({ end, is }) => {
  const parent = pino({
    browser: {
      serialize: true,
      write (o) {
        is(o.test, 'child')
      }
    }
  })

  const child = parent.child({ a: 'property' }, { serializers: childSerializers })

  child.fatal({ test: 'test' })
  end()
})

test('children serializers get called when inherited from parent', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write: (o) => {
        is(o.test, 'pass')
      }
    }
  })

  const child = parent.child({}, { serializers: { test: () => 'pass' } })

  child.fatal({ test: 'fail' })
  end()
})

test('non overridden serializers are available in the children', ({ end, is }) => {
  const pSerializers = {
    onlyParent: () => 'parent',
    shared: () => 'parent'
  }

  const cSerializers = {
    shared: () => 'child',
    onlyChild: () => 'child'
  }

  let c = 0

  const parent = pino({
    serializers: pSerializers,
    browser: {
      serialize: true,
      write (o) {
        c++
        if (c === 1) is(o.shared, 'child')
        if (c === 2) is(o.onlyParent, 'parent')
        if (c === 3) is(o.onlyChild, 'child')
        if (c === 4) is(o.onlyChild, 'test')
      }
    }
  })

  const child = parent.child({}, { serializers: cSerializers })

  child.fatal({ shared: 'test' })
  child.fatal({ onlyParent: 'test' })
  child.fatal({ onlyChild: 'test' })
  parent.fatal({ onlyChild: 'test' })
  end()
})



================================================
FILE: test/browser-timestamp.test.js
================================================
'use strict'
const test = require('tape')
const pino = require('../browser')

Date.now = () => 1599400603614

test('null timestamp', ({ end, is }) => {
  const instance = pino({
    timestamp: pino.stdTimeFunctions.nullTime,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.time, undefined)
      }
    }
  })
  instance.info('hello world')
  end()
})

test('iso timestamp', ({ end, is }) => {
  const instance = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.time, '2020-09-06T13:56:43.614Z')
      }
    }
  })
  instance.info('hello world')
  end()
})

test('epoch timestamp', ({ end, is }) => {
  const instance = pino({
    timestamp: pino.stdTimeFunctions.epochTime,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.time, 1599400603614)
      }
    }
  })
  instance.info('hello world')
  end()
})

test('unix timestamp', ({ end, is }) => {
  const instance = pino({
    timestamp: pino.stdTimeFunctions.unixTime,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.time, Math.round(1599400603614 / 1000.0))
      }
    }
  })
  instance.info('hello world')
  end()
})

test('epoch timestamp by default', ({ end, is }) => {
  const instance = pino({
    browser: {
      asObject: true,
      write: function (o) {
        is(o.time, 1599400603614)
      }
    }
  })
  instance.info('hello world')
  end()
})

test('not print timestamp if the option is false', ({ end, is }) => {
  const instance = pino({
    timestamp: false,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.time, undefined)
      }
    }
  })
  instance.info('hello world')
  end()
})



================================================
FILE: test/browser-transmit.test.js
================================================
'use strict'
const test = require('tape')
const pino = require('../browser')

function noop () {}

test('throws if transmit object does not have send function', ({ end, throws }) => {
  throws(() => {
    pino({ browser: { transmit: {} } })
  })

  throws(() => {
    pino({ browser: { transmit: { send: 'not a func' } } })
  })

  end()
})

test('calls send function after write', ({ end, is }) => {
  let c = 0
  const logger = pino({
    browser: {
      write: () => {
        c++
      },
      transmit: {
        send () { is(c, 1) }
      }
    }
  })

  logger.fatal({ test: 'test' })
  end()
})

test('passes send function the logged level', ({ end, is }) => {
  const logger = pino({
    browser: {
      write () {},
      transmit: {
        send (level) {
          is(level, 'fatal')
        }
      }
    }
  })

  logger.fatal({ test: 'test' })
  end()
})

test('passes send function message strings in logEvent object when asObject is not set', ({ end, same, is }) => {
  const logger = pino({
    browser: {
      write: noop,
      transmit: {
        send (level, { messages }) {
          is(messages[0], 'test')
          is(messages[1], 'another test')
        }
      }
    }
  })

  logger.fatal('test', 'another test')

  end()
})

test('passes send function message objects in logEvent object when asObject is not set', ({ end, same, is }) => {
  const logger = pino({
    browser: {
      write: noop,
      transmit: {
        send (level, { messages }) {
          same(messages[0], { test: 'test' })
          is(messages[1], 'another test')
        }
      }
    }
  })

  logger.fatal({ test: 'test' }, 'another test')

  end()
})

test('passes send function message strings in logEvent object when asObject is set', ({ end, same, is }) => {
  const logger = pino({
    browser: {
      asObject: true,
      write: noop,
      transmit: {
        send (level, { messages }) {
          is(messages[0], 'test')
          is(messages[1], 'another test')
        }
      }
    }
  })

  logger.fatal('test', 'another test')

  end()
})

test('passes send function message objects in logEvent object when asObject is set', ({ end, same, is }) => {
  const logger = pino({
    browser: {
      asObject: true,
      write: noop,
      transmit: {
        send (level, { messages }) {
          same(messages[0], { test: 'test' })
          is(messages[1], 'another test')
        }
      }
    }
  })

  logger.fatal({ test: 'test' }, 'another test')

  end()
})

test('supplies a timestamp (ts) in logEvent object which is exactly the same as the `time` property in asObject mode', ({ end, is }) => {
  let expected
  const logger = pino({
    browser: {
      asObject: true, // implicit because `write`, but just to be explicit
      write (o) {
        expected = o.time
      },
      transmit: {
        send (level, logEvent) {
          is(logEvent.ts, expected)
        }
      }
    }
  })

  logger.fatal('test')
  end()
})

test('passes send function child bindings via logEvent object', ({ end, same, is }) => {
  const logger = pino({
    browser: {
      write: noop,
      transmit: {
        send (level, logEvent) {
          const messages = logEvent.messages
          const bindings = logEvent.bindings
          same(bindings[0], { first: 'binding' })
          same(bindings[1], { second: 'binding2' })
          same(messages[0], { test: 'test' })
          is(messages[1], 'another test')
        }
      }
    }
  })

  logger
    .child({ first: 'binding' })
    .child({ second: 'binding2' })
    .fatal({ test: 'test' }, 'another test')
  end()
})

test('passes send function level:{label, value} via logEvent object', ({ end, is }) => {
  const logger = pino({
    browser: {
      write: noop,
      transmit: {
        send (level, logEvent) {
          const label = logEvent.level.label
          const value = logEvent.level.value

          is(label, 'fatal')
          is(value, 60)
        }
      }
    }
  })

  logger.fatal({ test: 'test' }, 'another test')
  end()
})

test('calls send function according to transmit.level', ({ end, is }) => {
  let c = 0
  const logger = pino({
    browser: {
      write: noop,
      transmit: {
        level: 'error',
        send (level) {
          c++
          if (c === 1) is(level, 'error')
          if (c === 2) is(level, 'fatal')
        }
      }
    }
  })
  logger.warn('ignored')
  logger.error('test')
  logger.fatal('test')
  end()
})

test('transmit.level defaults to logger level', ({ end, is }) => {
  let c = 0
  const logger = pino({
    level: 'error',
    browser: {
      write: noop,
      transmit: {
        send (level) {
          c++
          if (c === 1) is(level, 'error')
          if (c === 2) is(level, 'fatal')
        }
      }
    }
  })
  logger.warn('ignored')
  logger.error('test')
  logger.fatal('test')
  end()
})

test('transmit.level is effective even if lower than logger level', ({ end, is }) => {
  let c = 0
  const logger = pino({
    level: 'error',
    browser: {
      write: noop,
      transmit: {
        level: 'info',
        send (level) {
          c++
          if (c === 1) is(level, 'warn')
          if (c === 2) is(level, 'error')
          if (c === 3) is(level, 'fatal')
        }
      }
    }
  })
  logger.warn('ignored')
  logger.error('test')
  logger.fatal('test')
  end()
})

test('applies all serializers to messages and bindings (serialize:false - default)', ({ end, same, is }) => {
  const logger = pino({
    serializers: {
      first: () => 'first',
      second: () => 'second',
      test: () => 'serialize it'
    },
    browser: {
      write: noop,
      transmit: {
        send (level, logEvent) {
          const messages = logEvent.messages
          const bindings = logEvent.bindings
          same(bindings[0], { first: 'first' })
          same(bindings[1], { second: 'second' })
          same(messages[0], { test: 'serialize it' })
          is(messages[1].type, 'Error')
        }
      }
    }
  })

  logger
    .child({ first: 'binding' })
    .child({ second: 'binding2' })
    .fatal({ test: 'test' }, Error())
  end()
})

test('applies all serializers to messages and bindings (serialize:true)', ({ end, same, is }) => {
  const logger = pino({
    serializers: {
      first: () => 'first',
      second: () => 'second',
      test: () => 'serialize it'
    },
    browser: {
      serialize: true,
      write: noop,
      transmit: {
        send (level, logEvent) {
          const messages = logEvent.messages
          const bindings = logEvent.bindings
          same(bindings[0], { first: 'first' })
          same(bindings[1], { second: 'second' })
          same(messages[0], { test: 'serialize it' })
          is(messages[1].type, 'Error')
        }
      }
    }
  })

  logger
    .child({ first: 'binding' })
    .child({ second: 'binding2' })
    .fatal({ test: 'test' }, Error())
  end()
})

test('extracts correct bindings and raw messages over multiple transmits', ({ end, same, is }) => {
  let messages = null
  let bindings = null

  const logger = pino({
    browser: {
      write: noop,
      transmit: {
        send (level, logEvent) {
          messages = logEvent.messages
          bindings = logEvent.bindings
        }
      }
    }
  })

  const child = logger.child({ child: true })
  const grandchild = child.child({ grandchild: true })

  logger.fatal({ test: 'parent:test1' })
  logger.fatal({ test: 'parent:test2' })
  same([], bindings)
  same([{ test: 'parent:test2' }], messages)

  child.fatal({ test: 'child:test1' })
  child.fatal({ test: 'child:test2' })
  same([{ child: true }], bindings)
  same([{ test: 'child:test2' }], messages)

  grandchild.fatal({ test: 'grandchild:test1' })
  grandchild.fatal({ test: 'grandchild:test2' })
  same([{ child: true }, { grandchild: true }], bindings)
  same([{ test: 'grandchild:test2' }], messages)

  end()
})

test('does not log below configured level', ({ end, is }) => {
  let message = null
  const logger = pino({
    level: 'info',
    browser: {
      write (o) {
        message = o.msg
      },
      transmit: {
        send () { }
      }
    }
  })

  logger.debug('this message is silent')
  is(message, null)

  end()
})

test('silent level prevents logging even with transmit', ({ end, fail }) => {
  const logger = pino({
    level: 'silent',
    browser: {
      write () {
        fail('no data should be logged by the write method')
      },
      transmit: {
        send () {
          fail('no data should be logged by the send method')
        }
      }
    }
  })

  Object.keys(pino.levels.values).forEach((level) => {
    logger[level]('ignored')
  })

  end()
})

test('does not call send when transmit.level is set to silent', ({ end, fail, is }) => {
  let c = 0
  const logger = pino({
    level: 'trace',
    browser: {
      write () {
        c++
      },
      transmit: {
        level: 'silent',
        send () {
          fail('no data should be logged by the transmit method')
        }
      }
    }
  })

  const levels = Object.keys(pino.levels.values)
  levels.forEach((level) => {
    logger[level]('message')
  })

  is(c, levels.length, 'write must be called exactly once per level')
  end()
})



================================================
FILE: test/browser.test.js
================================================
'use strict'
const test = require('tape')
const fresh = require('import-fresh')
const pinoStdSerializers = require('pino-std-serializers')
const pino = require('../browser')

levelTest('fatal')
levelTest('error')
levelTest('warn')
levelTest('info')
levelTest('debug')
levelTest('trace')

test('silent level', ({ end, fail, pass }) => {
  const instance = pino({
    level: 'silent',
    browser: { write: fail }
  })
  instance.info('test')
  const child = instance.child({ test: 'test' })
  child.info('msg-test')
  // use setTimeout because setImmediate isn't supported in most browsers
  setTimeout(() => {
    pass()
    end()
  }, 0)
})

test('enabled false', ({ end, fail, pass }) => {
  const instance = pino({
    enabled: false,
    browser: { write: fail }
  })
  instance.info('test')
  const child = instance.child({ test: 'test' })
  child.info('msg-test')
  // use setTimeout because setImmediate isn't supported in most browsers
  setTimeout(() => {
    pass()
    end()
  }, 0)
})

test('throw if creating child without bindings', ({ end, throws }) => {
  const instance = pino()
  throws(() => instance.child())
  end()
})

test('stubs write, flush and ee methods on instance', ({ end, ok, is }) => {
  const instance = pino()

  ok(isFunc(instance.setMaxListeners))
  ok(isFunc(instance.getMaxListeners))
  ok(isFunc(instance.emit))
  ok(isFunc(instance.addListener))
  ok(isFunc(instance.on))
  ok(isFunc(instance.prependListener))
  ok(isFunc(instance.once))
  ok(isFunc(instance.prependOnceListener))
  ok(isFunc(instance.removeListener))
  ok(isFunc(instance.removeAllListeners))
  ok(isFunc(instance.listeners))
  ok(isFunc(instance.listenerCount))
  ok(isFunc(instance.eventNames))
  ok(isFunc(instance.write))
  ok(isFunc(instance.flush))

  is(instance.on(), undefined)

  end()
})

test('exposes levels object', ({ end, same }) => {
  same(pino.levels, {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: 'trace',
      20: 'debug',
      30: 'info',
      40: 'warn',
      50: 'error',
      60: 'fatal'
    }
  })

  end()
})

test('exposes faux stdSerializers', ({ end, ok, same }) => {
  ok(pino.stdSerializers)
  // make sure faux stdSerializers match pino-std-serializers
  for (const serializer in pinoStdSerializers) {
    ok(pino.stdSerializers[serializer], `pino.stdSerializers.${serializer}`)
  }
  // confirm faux methods return empty objects
  same(pino.stdSerializers.req(), {})
  same(pino.stdSerializers.mapHttpRequest(), {})
  same(pino.stdSerializers.mapHttpResponse(), {})
  same(pino.stdSerializers.res(), {})
  // confirm wrapping function is a passthrough
  const noChange = { foo: 'bar', fuz: 42 }
  same(pino.stdSerializers.wrapRequestSerializer(noChange), noChange)
  same(pino.stdSerializers.wrapResponseSerializer(noChange), noChange)
  end()
})

test('exposes err stdSerializer', ({ end, ok }) => {
  ok(pino.stdSerializers.err)
  ok(pino.stdSerializers.err(Error()))
  end()
})

consoleMethodTest('error')
consoleMethodTest('fatal', 'error')
consoleMethodTest('warn')
consoleMethodTest('info')
consoleMethodTest('debug')
consoleMethodTest('trace')
absentConsoleMethodTest('error', 'log')
absentConsoleMethodTest('warn', 'error')
absentConsoleMethodTest('info', 'log')
absentConsoleMethodTest('debug', 'log')
absentConsoleMethodTest('trace', 'log')

// do not run this with airtap
if (process.title !== 'browser') {
  test('in absence of console, log methods become noops', ({ end, ok }) => {
    const console = global.console
    delete global.console
    const instance = fresh('../browser')()
    global.console = console
    ok(fnName(instance.log).match(/noop/))
    ok(fnName(instance.fatal).match(/noop/))
    ok(fnName(instance.error).match(/noop/))
    ok(fnName(instance.warn).match(/noop/))
    ok(fnName(instance.info).match(/noop/))
    ok(fnName(instance.debug).match(/noop/))
    ok(fnName(instance.trace).match(/noop/))
    end()
  })
}

test('opts.browser.asObject logs pino-like object to console', ({ end, ok, is }) => {
  const info = console.info
  console.info = function (o) {
    is(o.level, 30)
    is(o.msg, 'test')
    ok(o.time)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      asObject: true
    }
  })

  instance.info('test')
  end()
})

test('opts.browser.asObject uses opts.messageKey in logs', ({ end, ok, is }) => {
  const messageKey = 'message'
  const instance = require('../browser')({
    messageKey,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.level, 30)
        is(o[messageKey], 'test')
        ok(o.time)
      }
    }
  })

  instance.info('test')
  end()
})

test('opts.browser.asObjectBindingsOnly passes the bindings but keep the message unformatted', ({ end, ok, is, deepEqual }) => {
  const messageKey = 'message'
  const instance = require('../browser')({
    messageKey,
    browser: {
      asObjectBindingsOnly: true,
      write: function (o, msg, ...args) {
        is(o.level, 30)
        ok(o.time)
        is(msg, 'test %s')
        deepEqual(args, ['foo'])
      }
    }
  })

  instance.info('test %s', 'foo')
  end()
})

test('opts.browser.formatters (level) logs pino-like object to console', ({ end, ok, is }) => {
  const info = console.info
  console.info = function (o) {
    is(o.level, 30)
    is(o.label, 'info')
    is(o.msg, 'test')
    ok(o.time)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      formatters: {
        level (label, number) {
          return { label, level: number }
        }
      }
    }
  })

  instance.info('test')
  end()
})

test('opts.browser.formatters (log) logs pino-like object to console', ({ end, ok, is }) => {
  const info = console.info
  console.info = function (o) {
    is(o.level, 30)
    is(o.msg, 'test')
    is(o.hello, 'world')
    is(o.newField, 'test')
    ok(o.time, `Logged at ${o.time}`)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      formatters: {
        log (o) {
          return { ...o, newField: 'test', time: `Logged at ${o.time}` }
        }
      }
    }
  })

  instance.info({ hello: 'world' }, 'test')
  end()
})

test('opts.browser.reportCaller adds caller in asObject mode', ({ end, ok }) => {
  const instance = require('../browser')({
    browser: {
      asObject: true,
      reportCaller: true,
      write: function (o) {
        ok(typeof o.caller === 'string' && o.caller.length > 0, 'has caller string')
        ok(/:\\d+:\\d+/.test(o.caller) || /:\d+:\d+/.test(o.caller), `caller has line:col pattern: ${o.caller}`)
      }
    }
  })

  instance.info('test')
  end()
})

// NOTE: Default (non-object) mode caller string is covered in docs
// and manually verified. Keeping the test minimal to avoid cross-env flakiness.

test('opts.browser.serialize and opts.browser.transmit only serializes log data once', ({ end, ok, is }) => {
  const instance = require('../browser')({
    serializers: {
      extras (data) {
        return { serializedExtras: data }
      }
    },
    browser: {
      serialize: ['extras'],
      transmit: {
        level: 'info',
        send (level, o) {
          is(o.messages[0].extras.serializedExtras, 'world')
        }
      }
    }
  })

  instance.info({ extras: 'world' }, 'test')
  end()
})

test('opts.browser.serialize and opts.asObject only serializes log data once', ({ end, ok, is }) => {
  const instance = require('../browser')({
    serializers: {
      extras (data) {
        return { serializedExtras: data }
      }
    },
    browser: {
      serialize: ['extras'],
      asObject: true,
      write: function (o) {
        is(o.extras.serializedExtras, 'world')
      }
    }
  })

  instance.info({ extras: 'world' }, 'test')
  end()
})

test('opts.browser.serialize, opts.asObject and opts.browser.transmit only serializes log data once', ({ end, ok, is }) => {
  const instance = require('../browser')({
    serializers: {
      extras (data) {
        return { serializedExtras: data }
      }
    },
    browser: {
      serialize: ['extras'],
      asObject: true,
      transmit: {
        send (level, o) {
          is(o.messages[0].extras.serializedExtras, 'world')
        }
      }
    }
  })

  instance.info({ extras: 'world' }, 'test')
  end()
})

test('opts.browser.write func log single string', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test')
        ok(o.time)
      }
    }
  })
  instance.info('test')

  end()
})

test('opts.browser.write func string joining', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test test2 test3')
        ok(o.time)
      }
    }
  })
  instance.info('test %s %s', 'test2', 'test3')

  end()
})

test('opts.browser.write func string joining when asObject is true', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      asObject: true,
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test test2 test3')
        ok(o.time)
      }
    }
  })
  instance.info('test %s %s', 'test2', 'test3')

  end()
})

test('opts.browser.write func string object joining', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test {"test":"test2"} {"test":"test3"}')
        ok(o.time)
      }
    }
  })
  instance.info('test %j %j', { test: 'test2' }, { test: 'test3' })

  end()
})

test('opts.browser.write func string object joining when asObject is true', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      asObject: true,
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test {"test":"test2"} {"test":"test3"}')
        ok(o.time)
      }
    }
  })
  instance.info('test %j %j', { test: 'test2' }, { test: 'test3' })

  end()
})

test('opts.browser.write func string interpolation', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test2 test ({"test":"test3"})')
        ok(o.time)
      }
    }
  })
  instance.info('%s test (%j)', 'test2', { test: 'test3' })

  end()
})

test('opts.browser.write func number', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 1)
        ok(o.time)
      }
    }
  })
  instance.info(1)

  end()
})

test('opts.browser.write func log single object', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.test, 'test')
        ok(o.time)
      }
    }
  })
  instance.info({ test: 'test' })

  end()
})

test('opts.browser.write obj writes to methods corresponding to level', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: {
        error: function (o) {
          is(o.level, 50)
          is(o.test, 'test')
          ok(o.time)
        }
      }
    }
  })
  instance.error({ test: 'test' })

  end()
})

test('opts.browser.asObject/write supports child loggers', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write (o) {
        is(o.level, 30)
        is(o.test, 'test')
        is(o.msg, 'msg-test')
        ok(o.time)
      }
    }
  })
  const child = instance.child({ test: 'test' })
  child.info('msg-test')

  end()
})

test('opts.browser.asObject/write supports child child loggers', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write (o) {
        is(o.level, 30)
        is(o.test, 'test')
        is(o.foo, 'bar')
        is(o.msg, 'msg-test')
        ok(o.time)
      }
    }
  })
  const child = instance.child({ test: 'test' }).child({ foo: 'bar' })
  child.info('msg-test')

  end()
})

test('opts.browser.asObject/write supports child child child loggers', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write (o) {
        is(o.level, 30)
        is(o.test, 'test')
        is(o.foo, 'bar')
        is(o.baz, 'bop')
        is(o.msg, 'msg-test')
        ok(o.time)
      }
    }
  })
  const child = instance.child({ test: 'test' }).child({ foo: 'bar' }).child({ baz: 'bop' })
  child.info('msg-test')

  end()
})

test('opts.browser.asObject defensively mitigates naughty numbers', ({ end, pass }) => {
  const instance = pino({
    browser: { asObject: true, write: () => {} }
  })
  const child = instance.child({ test: 'test' })
  child._childLevel = -10
  child.info('test')
  pass() // if we reached here, there was no infinite loop, so, .. pass.

  end()
})

test('opts.browser.write obj falls back to console where a method is not supplied', ({ end, ok, is }) => {
  const info = console.info
  console.info = (o) => {
    is(o.level, 30)
    is(o.msg, 'test')
    ok(o.time)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      write: {
        error (o) {
          is(o.level, 50)
          is(o.test, 'test')
          ok(o.time)
        }
      }
    }
  })
  instance.error({ test: 'test' })
  instance.info('test')

  end()
})

function levelTest (name) {
  test(name + ' logs', ({ end, is }) => {
    const msg = 'hello world'
    sink(name, (args) => {
      is(args[0], msg)
      end()
    })
    pino({ level: name })[name](msg)
  })

  test('passing objects at level ' + name, ({ end, is }) => {
    const msg = { hello: 'world' }
    sink(name, (args) => {
      is(args[0], msg)
      end()
    })
    pino({ level: name })[name](msg)
  })

  test('passing an object and a string at level ' + name, ({ end, is }) => {
    const a = { hello: 'world' }
    const b = 'a string'
    sink(name, (args) => {
      is(args[0], a)
      is(args[1], b)
      end()
    })
    pino({ level: name })[name](a, b)
  })

  test('formatting logs as ' + name, ({ end, is }) => {
    sink(name, (args) => {
      is(args[0], 'hello %d')
      is(args[1], 42)
      end()
    })
    pino({ level: name })[name]('hello %d', 42)
  })

  test('passing error at level ' + name, ({ end, is }) => {
    const err = new Error('myerror')
    sink(name, (args) => {
      is(args[0], err)
      end()
    })
    pino({ level: name })[name](err)
  })

  test('passing error with a serializer at level ' + name, ({ end, is }) => {
    // in browser - should have no effect (should not crash)
    const err = new Error('myerror')
    sink(name, (args) => {
      is(args[0].err, err)
      end()
    })
    const instance = pino({
      level: name,
      serializers: {
        err: pino.stdSerializers.err
      }
    })
    instance[name]({ err })
  })

  test('child logger for level ' + name, ({ end, is }) => {
    const msg = 'hello world'
    const parent = { hello: 'world' }
    sink(name, (args) => {
      is(args[0], parent)
      is(args[1], msg)
      end()
    })
    const instance = pino({ level: name })
    const child = instance.child(parent)
    child[name](msg)
  })

  test('child-child logger for level ' + name, ({ end, is }) => {
    const msg = 'hello world'
    const grandParent = { hello: 'world' }
    const parent = { hello: 'you' }
    sink(name, (args) => {
      is(args[0], grandParent)
      is(args[1], parent)
      is(args[2], msg)
      end()
    })
    const instance = pino({ level: name })
    const child = instance.child(grandParent).child(parent)
    child[name](msg)
  })
}

function consoleMethodTest (level, method) {
  if (!method) method = level
  test('pino().' + level + ' uses console.' + method, ({ end, is }) => {
    sink(method, (args) => {
      is(args[0], 'test')
      end()
    })
    const instance = require('../browser')({ level })
    instance[level]('test')
  })
}

function absentConsoleMethodTest (method, fallback) {
  test('in absence of console.' + method + ', console.' + fallback + ' is used', ({ end, is }) => {
    const fn = console[method]
    console[method] = undefined
    sink(fallback, function (args) {
      is(args[0], 'test')
      end()
      console[method] = fn
    })
    const instance = require('../browser')({ level: method })
    instance[method]('test')
  })
}

function isFunc (fn) { return typeof fn === 'function' }
function fnName (fn) {
  const rx = /^\s*function\s*([^(]*)/i
  const match = rx.exec(fn)
  return match && match[1]
}
function sink (method, fn) {
  if (method === 'fatal') method = 'error'
  const orig = console[method]
  console[method] = function () {
    console[method] = orig
    fn(Array.prototype.slice.call(arguments))
  }
}



================================================
FILE: test/complex-objects.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { PassThrough } = require('node:stream')

const { sink, once } = require('./helper')
const pino = require('../')

test('Proxy and stream objects', async () => {
  const s = new PassThrough()
  s.resume()
  s.write('', () => {})
  const obj = { s, p: new Proxy({}, { get () { throw new Error('kaboom') } }) }
  const stream = sink()
  const instance = pino(stream)
  instance.info({ obj })

  const result = await once(stream, 'data')

  assert.equal(result.obj, '[unable to serialize, circular reference is too complex to analyze]')
})

test('Proxy and stream objects', async () => {
  const s = new PassThrough()
  s.resume()
  s.write('', () => {})
  const obj = { s, p: new Proxy({}, { get () { throw new Error('kaboom') } }) }
  const stream = sink()
  const instance = pino(stream)
  instance.info(obj)

  const result = await once(stream, 'data')

  assert.equal(result.p, '[unable to serialize, circular reference is too complex to analyze]')
})



================================================
FILE: test/crlf.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')

const writer = require('flush-write-stream')
const pino = require('../')

function capture () {
  const ws = writer((chunk, enc, cb) => {
    ws.data += chunk.toString()
    cb()
  })
  ws.data = ''
  return ws
}

test('pino uses LF by default', async () => {
  const stream = capture()
  const logger = pino(stream)
  logger.info('foo')
  logger.error('bar')
  assert.ok(/foo[^\r\n]+\n[^\r\n]+bar[^\r\n]+\n/.test(stream.data))
})

test('pino can log CRLF', async () => {
  const stream = capture()
  const logger = pino({
    crlf: true
  }, stream)
  logger.info('foo')
  logger.error('bar')
  assert.ok(/foo[^\n]+\r\n[^\n]+bar[^\n]+\r\n/.test(stream.data))
})



================================================
FILE: test/custom-levels.test.js
================================================
'use strict'

/* eslint no-prototype-builtins: 0 */

const test = require('node:test')
const assert = require('node:assert')

const { sink, once } = require('./helper')
const pino = require('../')

// Silence all warnings for this test
process.removeAllListeners('warning')
process.on('warning', () => {})

test('adds additional levels', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35,
      bar: 45
    }
  }, stream)

  logger.foo('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 35)
})

test('custom levels does not override default levels', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35
    }
  }, stream)

  logger.info('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 30)
})

test('default levels can be redefined using custom levels', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      info: 35,
      debug: 45
    },
    useOnlyCustomLevels: true
  }, stream)

  assert.equal(logger.hasOwnProperty('info'), true)

  logger.info('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 35)
})

test('custom levels overrides default level label if use useOnlyCustomLevels', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35
    },
    useOnlyCustomLevels: true,
    level: 'foo'
  }, stream)

  assert.equal(logger.hasOwnProperty('info'), false)
})

test('custom levels overrides default level value if use useOnlyCustomLevels', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35
    },
    useOnlyCustomLevels: true,
    level: 35
  }, stream)

  assert.equal(logger.hasOwnProperty('info'), false)
})

test('custom levels are inherited by children', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35
    }
  }, stream)

  logger.child({ childMsg: 'ok' }).foo('test')
  const { msg, childMsg, level } = await once(stream, 'data')
  assert.equal(level, 35)
  assert.equal(childMsg, 'ok')
  assert.equal(msg, 'test')
})

test('custom levels can be specified on child bindings', async () => {
  const stream = sink()
  const logger = pino(stream).child({
    childMsg: 'ok'
  }, {
    customLevels: {
      foo: 35
    }
  })

  logger.foo('test')
  const { msg, childMsg, level } = await once(stream, 'data')
  assert.equal(level, 35)
  assert.equal(childMsg, 'ok')
  assert.equal(msg, 'test')
})

test('customLevels property child bindings does not get logged', async () => {
  const stream = sink()
  const logger = pino(stream).child({
    childMsg: 'ok'
  }, {
    customLevels: {
      foo: 35
    }
  })

  logger.foo('test')
  const { customLevels } = await once(stream, 'data')
  assert.equal(customLevels, undefined)
})

test('throws when specifying pre-existing parent labels via child bindings', async () => {
  const stream = sink()
  assert.throws(
    () => pino({
      customLevels: {
        foo: 35
      }
    }, stream).child({}, {
      customLevels: {
        foo: 45
      }
    }),
    /levels cannot be overridden/
  )
})

test('throws when specifying pre-existing parent values via child bindings', async () => {
  const stream = sink()
  assert.throws(
    () => pino({
      customLevels: {
        foo: 35
      }
    }, stream).child({}, {
      customLevels: {
        bar: 35
      }
    }),
    /pre-existing level values cannot be used for new levels/
  )
})

test('throws when specifying core values via child bindings', async () => {
  const stream = sink()
  assert.throws(
    () => pino(stream).child({}, {
      customLevels: {
        foo: 30
      }
    }),
    /pre-existing level values cannot be used for new levels/
  )
})

test('throws when useOnlyCustomLevels is set true without customLevels', async () => {
  const stream = sink()
  assert.throws(
    () => pino({
      useOnlyCustomLevels: true
    }, stream),
    /customLevels is required if useOnlyCustomLevels is set true/
  )
})

test('custom level on one instance does not affect other instances', async () => {
  pino({
    customLevels: {
      foo: 37
    }
  })
  assert.equal(typeof pino().foo, 'undefined')
})

test('setting level below or at custom level will successfully log', async () => {
  const stream = sink()
  const instance = pino({ customLevels: { foo: 35 } }, stream)
  instance.level = 'foo'
  instance.info('nope')
  instance.foo('bar')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'bar')
})

test('custom level below level threshold will not log', async () => {
  const stream = sink()
  const instance = pino({ customLevels: { foo: 15 } }, stream)
  instance.level = 'info'
  instance.info('bar')
  instance.foo('nope')
  const { msg } = await once(stream, 'data')
  assert.equal(msg, 'bar')
})

test('does not share custom level state across siblings', async () => {
  const stream = sink()
  const logger = pino(stream)
  logger.child({}, {
    customLevels: { foo: 35 }
  })
  assert.doesNotThrow(() => {
    logger.child({}, {
      customLevels: { foo: 35 }
    })
  })
})

test('custom level does not affect the levels serializer', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      foo: 35,
      bar: 45
    },
    formatters: {
      level (label, number) {
        return { priority: number }
      }
    }
  }, stream)

  logger.foo('test')
  const { priority } = await once(stream, 'data')
  assert.equal(priority, 35)
})

test('When useOnlyCustomLevels is set to true, the level formatter should only get custom levels', async () => {
  const stream = sink()
  const logger = pino({
    customLevels: {
      answer: 42
    },
    useOnlyCustomLevels: true,
    level: 42,
    formatters: {
      level (label, number) {
        assert.equal(label, 'answer')
        assert.equal(number, 42)
        return { level: number }
      }
    }
  }, stream)

  logger.answer('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 42)
})



================================================
FILE: test/diagnostics.test.js
================================================
'use strict'

const test = require('node:test')
const os = require('node:os')
const diagChan = require('node:diagnostics_channel')
const { AsyncLocalStorage } = require('node:async_hooks')
const { Writable } = require('node:stream')
const tspl = require('@matteo.collina/tspl')
const pino = require('../pino')

const hostname = os.hostname()
const { pid } = process
const AS_JSON_START = 'tracing:pino_asJson:start'
const AS_JSON_END = 'tracing:pino_asJson:end'

// Skip tests if diagnostics_channel.tracingChannel is not available (Node < 18.19)
const skip = typeof diagChan.tracingChannel !== 'function'

test.beforeEach(ctx => {
  ctx.pino = {
    ts: 1757512800000, // 2025-09-10T10:00:00.000-05:00
    now: Date.now
  }

  Date.now = () => ctx.pino.ts

  ctx.pino.dest = new Writable({
    objectMode: true,
    write (data, enc, cb) {
      cb()
    }
  })
})

test.afterEach(ctx => {
  Date.now = ctx.pino.now
})

test('asJson emits events', { skip }, async (t) => {
  const plan = tspl(t, { plan: 8 })
  const { dest } = t.pino
  const logger = pino({}, dest)
  const expectedArguments = [
    {},
    'testing',
    30,
    `,"time":${t.pino.ts}`
  ]

  let startEvent
  diagChan.subscribe(AS_JSON_START, startHandler)
  diagChan.subscribe(AS_JSON_END, endHandler)

  logger.info('testing')
  await plan

  diagChan.unsubscribe(AS_JSON_START, startHandler)
  diagChan.unsubscribe(AS_JSON_END, endHandler)

  function startHandler (event) {
    startEvent = event
    plan.equal(Object.prototype.toString.call(event.instance), '[object Pino]')
    plan.equal(event.instance === logger, true)
    plan.deepStrictEqual(Array.from(event.arguments ?? []), expectedArguments)
  }

  function endHandler (event) {
    plan.equal(Object.prototype.toString.call(event.instance), '[object Pino]')
    plan.equal(event.instance === logger, true)
    plan.deepStrictEqual(Array.from(event.arguments ?? []), expectedArguments)
    plan.equal(
      event.result,
      `{"level":30,"time":${t.pino.ts},"pid":${pid},"hostname":"${hostname}","msg":"testing"}\n`
    )

    plan.equal(event.arguments === startEvent.arguments, true, 'same event object is supplied to both events')
  }
})

test('asJson context is not lost', { skip }, async (t) => {
  const plan = tspl(t, { plan: 2 })
  const { dest } = t.pino
  const logger = pino({}, dest)
  const asyncLocalStorage = new AsyncLocalStorage()
  const localStore = { foo: 'bar' }

  diagChan.subscribe(AS_JSON_START, startHandler)
  diagChan.subscribe(AS_JSON_END, endHandler)

  asyncLocalStorage.run(localStore, () => {
    logger.info('testing')
  })
  await plan

  diagChan.unsubscribe(AS_JSON_START, startHandler)
  diagChan.unsubscribe(AS_JSON_END, endHandler)

  function startHandler () {
    const store = asyncLocalStorage.getStore()
    plan.equal(store === localStore, true)
  }

  function endHandler () {
    const store = asyncLocalStorage.getStore()
    plan.equal(store === localStore, true)
  }
})



================================================
FILE: test/error-key.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')

const { sink, once } = require('./helper')
const stdSerializers = require('pino-std-serializers')
const pino = require('../')

test('set the errorKey with error serializer', async () => {
  const stream = sink()
  const errorKey = 'error'
  const instance = pino({
    errorKey,
    serializers: { [errorKey]: stdSerializers.err }
  }, stream)
  instance.error(new ReferenceError('test'))
  const o = await once(stream, 'data')
  assert.equal(typeof o[errorKey], 'object')
  assert.equal(o[errorKey].type, 'ReferenceError')
  assert.equal(o[errorKey].message, 'test')
  assert.equal(typeof o[errorKey].stack, 'string')
})

test('set the errorKey without error serializer', async () => {
  const stream = sink()
  const errorKey = 'error'
  const instance = pino({
    errorKey
  }, stream)
  instance.error(new ReferenceError('test'))
  const o = await once(stream, 'data')
  assert.equal(typeof o[errorKey], 'object')
  assert.equal(o[errorKey].type, 'ReferenceError')
  assert.equal(o[errorKey].message, 'test')
  assert.equal(typeof o[errorKey].stack, 'string')
})



================================================
FILE: test/error.test.js
================================================
'use strict'

/* eslint no-prototype-builtins: 0 */

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const tspl = require('@matteo.collina/tspl')

const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()
const level = 50
const name = 'error'

test('err is serialized with additional properties set on the Error object', async () => {
  const stream = sink()
  const err = Object.assign(new Error('myerror'), { foo: 'bar' })
  const instance = pino(stream)
  instance.level = name
  instance[name](err)
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack,
      foo: err.foo
    },
    msg: err.message
  })
})

test('type should be detected based on constructor', async () => {
  class Bar extends Error {}
  const stream = sink()
  const err = new Bar('myerror')
  const instance = pino(stream)
  instance.level = name
  instance[name](err)
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    err: {
      type: 'Bar',
      message: err.message,
      stack: err.stack
    },
    msg: err.message
  })
})

test('type, message and stack should be first level properties', async () => {
  const stream = sink()
  const err = Object.assign(new Error('foo'), { foo: 'bar' })
  const instance = pino(stream)
  instance.level = name
  instance[name](err)

  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack,
      foo: err.foo
    },
    msg: err.message
  })
})

test('err serializer', async () => {
  const stream = sink()
  const err = Object.assign(new Error('myerror'), { foo: 'bar' })
  const instance = pino({
    serializers: {
      err: pino.stdSerializers.err
    }
  }, stream)

  instance.level = name
  instance[name]({ err })
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack,
      foo: err.foo
    },
    msg: err.message
  })
})

test('an error with statusCode property is not confused for a http response', async () => {
  const stream = sink()
  const err = Object.assign(new Error('StatusCodeErr'), { statusCode: 500 })
  const instance = pino(stream)

  instance.level = name
  instance[name](err)
  const result = await once(stream, 'data')

  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack,
      statusCode: err.statusCode
    },
    msg: err.message
  })
})

test('stack is omitted if it is not set on err', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const err = new Error('myerror')
  delete err.stack
  const instance = pino(sink(function (chunk, enc, cb) {
    plan.ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    plan.equal(chunk.hasOwnProperty('stack'), false)
    cb()
  }))

  instance.level = name
  instance[name](err)

  await plan
})

test('correctly ignores toString on errors', async () => {
  const err = new Error('myerror')
  err.toString = () => undefined
  const stream = sink()
  const instance = pino({
    test: 'this'
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack
    },
    msg: err.message
  })
})

test('assign mixin()', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({
    mixin () {
      return { hello: 'world' }
    }
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    hello: 'world',
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack
    },
    msg: err.message
  })
})

test('no err serializer', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({
    serializers: {}
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack
    },
    msg: err.message
  })
})

test('empty serializer', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({
    serializers: {
      err () {}
    }
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    msg: err.message
  })
})

test('assign mixin()', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({
    mixin () {
      return { hello: 'world' }
    }
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    hello: 'world',
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack
    },
    msg: err.message
  })
})

test('no err serializer', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({
    serializers: {}
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    err: {
      type: 'Error',
      message: err.message,
      stack: err.stack
    },
    msg: err.message
  })
})

test('empty serializer', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({
    serializers: {
      err () {}
    }
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    msg: err.message
  })
})

test('correctly adds error information when nestedKey is used', async () => {
  const err = new Error('myerror')
  err.toString = () => undefined
  const stream = sink()
  const instance = pino({
    test: 'this',
    nestedKey: 'obj'
  }, stream)
  instance.fatal(err)
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    obj: {
      err: {
        type: 'Error',
        stack: err.stack,
        message: err.message
      }
    },
    msg: err.message
  })
})

test('correctly adds msg on error when nestedKey is used', async () => {
  const err = new Error('myerror')
  err.toString = () => undefined
  const stream = sink()
  const instance = pino({
    test: 'this',
    nestedKey: 'obj'
  }, stream)
  instance.fatal(err, 'msg message')
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    obj: {
      err: {
        type: 'Error',
        stack: err.stack,
        message: err.message
      }
    },
    msg: 'msg message'
  })
})

test('msg should take precedence over error message on mergingObject', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino(stream)
  instance.error({ msg: 'my message', err })
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 50,
    err: {
      type: 'Error',
      stack: err.stack,
      message: err.message
    },
    msg: 'my message'
  })
})

test('considers messageKey when giving msg precedence over error', async () => {
  const err = new Error('myerror')
  const stream = sink()
  const instance = pino({ messageKey: 'message' }, stream)
  instance.error({ message: 'my message', err })
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 50,
    err: {
      type: 'Error',
      stack: err.stack,
      message: err.message
    },
    message: 'my message'
  })
})



================================================
FILE: test/escaping.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')

const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()

function testEscape (ch, key) {
  test('correctly escape ' + ch, async () => {
    const stream = sink()
    const instance = pino({
      name: 'hello'
    }, stream)
    instance.fatal('this contains ' + key)
    const result = await once(stream, 'data')
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level: 60,
      name: 'hello',
      msg: 'this contains ' + key
    })
  })
}

testEscape('\\n', '\n')
testEscape('\\/', '/')
testEscape('\\\\', '\\')
testEscape('\\r', '\r')
testEscape('\\t', '\t')
testEscape('\\b', '\b')

const toEscape = [
  '\u0000', // NUL  Null character
  '\u0001', // SOH  Start of Heading
  '\u0002', // STX  Start of Text
  '\u0003', // ETX  End-of-text character
  '\u0004', // EOT  End-of-transmission character
  '\u0005', // ENQ  Enquiry character
  '\u0006', // ACK  Acknowledge character
  '\u0007', // BEL  Bell character
  '\u0008', // BS   Backspace
  '\u0009', // HT   Horizontal tab
  '\u000A', // LF   Line feed
  '\u000B', // VT   Vertical tab
  '\u000C', // FF   Form feed
  '\u000D', // CR   Carriage return
  '\u000E', // SO   Shift Out
  '\u000F', // SI   Shift In
  '\u0010', // DLE  Data Link Escape
  '\u0011', // DC1  Device Control 1
  '\u0012', // DC2  Device Control 2
  '\u0013', // DC3  Device Control 3
  '\u0014', // DC4  Device Control 4
  '\u0015', // NAK  Negative-acknowledge character
  '\u0016', // SYN  Synchronous Idle
  '\u0017', // ETB  End of Transmission Block
  '\u0018', // CAN  Cancel character
  '\u0019', // EM   End of Medium
  '\u001A', // SUB  Substitute character
  '\u001B', // ESC  Escape character
  '\u001C', // FS   File Separator
  '\u001D', // GS   Group Separator
  '\u001E', // RS   Record Separator
  '\u001F' // US   Unit Separator
]

toEscape.forEach((key) => {
  testEscape(JSON.stringify(key), key)
})

test('correctly escape `hello \\u001F world \\n \\u0022`', async () => {
  const stream = sink()
  const instance = pino({
    name: 'hello'
  }, stream)
  instance.fatal('hello \u001F world \n \u0022')
  const result = await once(stream, 'data')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 60,
    name: 'hello',
    msg: 'hello \u001F world \n \u0022'
  })
})



================================================
FILE: test/exit.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')

const execa = require('execa')
const writer = require('flush-write-stream')
const { once } = require('./helper')

// https://github.com/pinojs/pino/issues/542
test('pino.destination log everything when calling process.exit(0)', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'destination-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  assert.equal(actual.match(/hello/) != null, true)
  assert.equal(actual.match(/world/) != null, true)
})

test('pino with no args log everything when calling process.exit(0)', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'default-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  assert.equal(actual.match(/hello/) != null, true)
  assert.equal(actual.match(/world/) != null, true)
})

test('sync false logs everything when calling process.exit(0)', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'syncfalse-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  assert.equal(actual.match(/hello/) != null, true)
  assert.equal(actual.match(/world/) != null, true)
})

test('sync false logs everything when calling flushSync', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'syncfalse-flush-exit.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))

  await once(child, 'close')

  assert.equal(actual.match(/hello/) != null, true)
  assert.equal(actual.match(/world/) != null, true)
})

test('transports exits gracefully when logging in exit', async () => {
  const child = execa(process.argv[0], [join(__dirname, 'fixtures', 'transport-with-on-exit.js')])
  child.stdout.resume()

  const code = await once(child, 'close')

  assert.equal(code, 0)
})



================================================
FILE: test/formatters.test.js
================================================
'use strict'
/* eslint no-prototype-builtins: 0 */

const test = require('node:test')
const assert = require('node:assert')
const { hostname } = require('node:os')
const { join } = require('node:path')
const { readFile } = require('node:fs').promises
const tspl = require('@matteo.collina/tspl')

const { sink, match, once, watchFileCreated, file } = require('./helper')
const pino = require('../')

test('level formatter', async () => {
  const stream = sink()
  const logger = pino({
    formatters: {
      level (label, number) {
        return {
          log: {
            level: label
          }
        }
      }
    }
  }, stream)

  const o = once(stream, 'data')
  logger.info('hello world')
  match(await o, {
    log: {
      level: 'info'
    }
  })
})

test('bindings formatter', async () => {
  const stream = sink()
  const logger = pino({
    formatters: {
      bindings (bindings) {
        return {
          process: {
            pid: bindings.pid
          },
          host: {
            name: bindings.hostname
          }
        }
      }
    }
  }, stream)

  const o = once(stream, 'data')
  logger.info('hello world')
  match(await o, {
    process: {
      pid: process.pid
    },
    host: {
      name: hostname()
    }
  })
})

test('no bindings formatter', async () => {
  const stream = sink()
  const logger = pino({
    formatters: {
      bindings (bindings) {
        return null
      }
    }
  }, stream)

  const o = once(stream, 'data')
  logger.info('hello world')
  const log = await o
  assert.equal(log.hasOwnProperty('pid'), false)
  assert.equal(log.hasOwnProperty('hostname'), false)
  match(log, { msg: 'hello world' })
})

test('log formatter', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const stream = sink()
  const logger = pino({
    formatters: {
      log (obj) {
        plan.equal(obj.hasOwnProperty('msg'), false)
        return { hello: 'world', ...obj }
      }
    }
  }, stream)

  const o = once(stream, 'data')
  logger.info({ foo: 'bar', nested: { object: true } }, 'hello world')
  match(await o, {
    hello: 'world',
    foo: 'bar',
    nested: { object: true }
  })

  await plan
})

test('Formatters combined', async () => {
  const stream = sink()
  const logger = pino({
    formatters: {
      level (label, number) {
        return {
          log: {
            level: label
          }
        }
      },
      bindings (bindings) {
        return {
          process: {
            pid: bindings.pid
          },
          host: {
            name: bindings.hostname
          }
        }
      },
      log (obj) {
        return { hello: 'world', ...obj }
      }
    }
  }, stream)

  const o = once(stream, 'data')
  logger.info({ foo: 'bar', nested: { object: true } }, 'hello world')
  match(await o, {
    log: {
      level: 'info'
    },
    process: {
      pid: process.pid
    },
    host: {
      name: hostname()
    },
    hello: 'world',
    foo: 'bar',
    nested: { object: true }
  })
})

test('Formatters in child logger', async () => {
  const stream = sink()
  const logger = pino({
    formatters: {
      level (label, number) {
        return {
          log: {
            level: label
          }
        }
      },
      bindings (bindings) {
        return {
          process: {
            pid: bindings.pid
          },
          host: {
            name: bindings.hostname
          }
        }
      },
      log (obj) {
        return { hello: 'world', ...obj }
      }
    }
  }, stream)

  const child = logger.child({
    foo: 'bar',
    nested: { object: true }
  }, {
    formatters: {
      bindings (bindings) {
        return { ...bindings, faz: 'baz' }
      }
    }
  })

  const o = once(stream, 'data')
  child.info('hello world')
  match(await o, {
    log: {
      level: 'info'
    },
    process: {
      pid: process.pid
    },
    host: {
      name: hostname()
    },
    hello: 'world',
    foo: 'bar',
    nested: { object: true },
    faz: 'baz'
  })
})

test('Formatters without bindings in child logger', async () => {
  const stream = sink()
  const logger = pino({
    formatters: {
      level (label, number) {
        return {
          log: {
            level: label
          }
        }
      },
      bindings (bindings) {
        return {
          process: {
            pid: bindings.pid
          },
          host: {
            name: bindings.hostname
          }
        }
      },
      log (obj) {
        return { hello: 'world', ...obj }
      }
    }
  }, stream)

  const child = logger.child({
    foo: 'bar',
    nested: { object: true }
  }, {
    formatters: {
      log (obj) {
        return { other: 'stuff', ...obj }
      }
    }
  })

  const o = once(stream, 'data')
  child.info('hello world')
  match(await o, {
    log: {
      level: 'info'
    },
    process: {
      pid: process.pid
    },
    host: {
      name: hostname()
    },
    foo: 'bar',
    other: 'stuff',
    nested: { object: true }
  })
})

test('elastic common schema format', async () => {
  const stream = sink()
  const ecs = {
    formatters: {
      level (label, number) {
        return {
          log: {
            level: label,
            logger: 'pino'
          }
        }
      },
      bindings (bindings) {
        return {
          process: {
            pid: bindings.pid
          },
          host: {
            name: bindings.hostname
          }
        }
      },
      log (obj) {
        return { ecs: { version: '1.4.0' }, ...obj }
      }
    },
    messageKey: 'message',
    timestamp: () => `,"@timestamp":"${new Date(Date.now()).toISOString()}"`
  }

  const logger = pino({ ...ecs }, stream)

  const o = once(stream, 'data')
  logger.info({ foo: 'bar' }, 'hello world')
  const log = await o
  assert.equal(typeof log['@timestamp'], 'string')
  match(log, {
    log: { level: 'info', logger: 'pino' },
    process: { pid: process.pid },
    host: { name: hostname() },
    ecs: { version: '1.4.0' },
    foo: 'bar',
    message: 'hello world'
  })
})

test('formatter with transport', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const destination = file()
  const logger = pino({
    formatters: {
      log (obj) {
        plan.equal(obj.hasOwnProperty('msg'), false)
        return { hello: 'world', ...obj }
      }
    },
    transport: {
      targets: [
        {
          target: join(__dirname, 'fixtures', 'to-file-transport.js'),
          options: { destination }
        }
      ]
    }
  })

  logger.info({ foo: 'bar', nested: { object: true } }, 'hello world')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  match(result, {
    hello: 'world',
    foo: 'bar',
    nested: { object: true }
  })
})

test('throws when custom level formatter is used with transport.targets', async () => {
  assert.throws(
    () => {
      pino({
        formatters: {
          level (label) {
            return label
          }
        },
        transport: {
          targets: [
            {
              target: 'pino/file',
              options: { destination: 'foo.log' }
            }
          ]
        }
      }
      )
    },
    Error('option.transport.targets do not allow custom level formatters')
  )
})



================================================
FILE: test/helper.d.ts
================================================
import { PathLike } from 'node:fs'

export declare function watchFileCreated(filename: PathLike): Promise<void>
export declare function watchForWrite(filename: PathLike, testString: string): Promise<void>



================================================
FILE: test/helper.js
================================================
'use strict'

const crypto = require('node:crypto')
const { join } = require('node:path')
const os = require('node:os')
const { existsSync, readFileSync, statSync, unlinkSync } = require('node:fs')
const writer = require('flush-write-stream')
const split = require('split2')

const pid = process.pid
const hostname = os.hostname()
const { tmpdir } = os

const isWin = process.platform === 'win32'
const isYarnPnp = process.versions.pnp !== undefined

function getPathToNull () {
  return isWin ? '\\\\.\\NUL' : '/dev/null'
}

function once (emitter, name) {
  return new Promise((resolve, reject) => {
    if (name !== 'error') emitter.once('error', reject)
    emitter.once(name, (...args) => {
      emitter.removeListener('error', reject)
      resolve(...args)
    })
  })
}

function sink (func) {
  const result = split((data) => {
    try {
      return JSON.parse(data)
    } catch (err) {
      console.log(err)
      console.log(data)
    }
  })
  if (func) result.pipe(writer.obj(func))
  return result
}

function check (is, chunk, level, msg) {
  is(new Date(chunk.time) <= new Date(), true, 'time is greater than Date.now()')
  delete chunk.time
  is(chunk.pid, pid)
  is(chunk.hostname, hostname)
  is(chunk.level, level)
  is(chunk.msg, msg)
}

function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function watchFileCreated (filename) {
  return new Promise((resolve, reject) => {
    const TIMEOUT = process.env.PINO_TEST_WAIT_WATCHFILE_TIMEOUT || 10000
    const INTERVAL = 100
    const threshold = TIMEOUT / INTERVAL
    let counter = 0
    const interval = setInterval(() => {
      const exists = existsSync(filename)
      // On some CI runs file is created but not filled
      if (exists && statSync(filename).size !== 0) {
        clearInterval(interval)
        resolve()
      } else if (counter <= threshold) {
        counter++
      } else {
        clearInterval(interval)
        reject(new Error(
          `${filename} hasn't been created within ${TIMEOUT} ms. ` +
          (exists ? 'File exist, but still empty.' : 'File not yet created.')
        ))
      }
    }, INTERVAL)
  })
}

function watchForWrite (filename, testString) {
  return new Promise((resolve, reject) => {
    const TIMEOUT = process.env.PINO_TEST_WAIT_WRITE_TIMEOUT || 10000
    const INTERVAL = 100
    const threshold = TIMEOUT / INTERVAL
    let counter = 0
    const interval = setInterval(() => {
      if (readFileSync(filename).includes(testString)) {
        clearInterval(interval)
        resolve()
      } else if (counter <= threshold) {
        counter++
      } else {
        clearInterval(interval)
        reject(new Error(`'${testString}' hasn't been written to ${filename} within ${TIMEOUT} ms.`))
      }
    }, INTERVAL)
  })
}

let files = []

function file () {
  const hash = crypto.randomBytes(12).toString('hex')
  const file = join(tmpdir(), `pino-${pid}-${hash}`)
  files.push(file)
  return file
}

process.on('beforeExit', () => {
  if (files.length === 0) return
  for (const file of files) {
    try {
      unlinkSync(file)
    } catch (e) {
    }
  }
  files = []
})

/**
 * match is a bare-bones object shape matcher. We should be able to replace
 * this with `assert.partialDeepStrictEqual` when v22 is our minimum.
 *
 * @param {object} found
 * @param {object} expected
 */
function match (found, expected) {
  for (const [key, value] of Object.entries(expected)) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      match(found[key], value)
      continue
    }
    if (value !== found[key]) {
      throw Error(`expected "${value}" but found "${found[key]}"`)
    }
  }
}

module.exports = {
  check,
  file,
  getPathToNull,
  isWin,
  isYarnPnp,
  match,
  once,
  sink,
  sleep,
  watchFileCreated,
  watchForWrite
}



================================================
FILE: test/hooks.test.js
================================================
'use strict'

const { describe, test } = require('node:test')
const tspl = require('@matteo.collina/tspl')

const { sink, match, once } = require('./helper')
const pino = require('../')

describe('log method hook', () => {
  test('gets invoked', async t => {
    const plan = tspl(t, { plan: 7 })

    const stream = sink()
    const logger = pino({
      hooks: {
        logMethod (args, method, level) {
          plan.equal(Array.isArray(args), true)
          plan.equal(typeof level, 'number')
          plan.equal(args.length, 3)
          plan.equal(level, this.levels.values.info)
          plan.deepEqual(args, ['a', 'b', 'c'])

          plan.equal(typeof method, 'function')
          plan.equal(method.name, 'LOG')

          method.apply(this, [args.join('-')])
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.info('a', 'b', 'c')
    match(await o, { msg: 'a-b-c' })
  })

  test('fatal method invokes hook', async t => {
    const plan = tspl(t, { plan: 1 })

    const stream = sink()
    const logger = pino({
      hooks: {
        logMethod (args, method) {
          plan.ok(true)
          method.apply(this, [args.join('-')])
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.fatal('a')
    match(await o, { msg: 'a' })
  })

  test('children get the hook', async t => {
    const plan = tspl(t, { plan: 2 })

    const stream = sink()
    const root = pino({
      hooks: {
        logMethod (args, method) {
          plan.ok(true)
          method.apply(this, [args.join('-')])
        }
      }
    }, stream)
    const child = root.child({ child: 'one' })
    const grandchild = child.child({ child: 'two' })

    let o = once(stream, 'data')
    child.info('a', 'b')
    match(await o, { msg: 'a-b' })

    o = once(stream, 'data')
    grandchild.info('c', 'd')
    match(await o, { msg: 'c-d' })
  })

  test('get log level', async t => {
    const plan = tspl(t, { plan: 2 })

    const stream = sink()
    const logger = pino({
      hooks: {
        logMethod (args, method, level) {
          plan.equal(typeof level, 'number')
          plan.equal(level, this.levels.values.error)

          method.apply(this, [args.join('-')])
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.error('a')
    match(await o, { msg: 'a' })
  })
})

describe('streamWrite hook', () => {
  test('gets invoked', async () => {
    const stream = sink()
    const logger = pino({
      hooks: {
        streamWrite (s) {
          return s.replaceAll('redact-me', 'XXX')
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.info('hide redact-me in this string')
    match(await o, { msg: 'hide XXX in this string' })
  })
})



================================================
FILE: test/http.test.js
================================================
'use strict'

const test = require('node:test')
const http = require('node:http')
const os = require('node:os')
const tspl = require('@matteo.collina/tspl')

const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()

test('http request support', async (t) => {
  const plan = tspl(t, { plan: 3 })
  let originalReq
  const instance = pino(sink((chunk, enc) => {
    plan.ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    plan.deepEqual(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers,
        remoteAddress: originalReq.socket.remoteAddress,
        remotePort: originalReq.socket.remotePort
      }
    })
  }))

  const server = http.createServer((req, res) => {
    originalReq = req
    instance.info(req, 'my request')
    res.end('hello')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  plan.equal(err, undefined)
  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()

  await plan
})

test('http request support via serializer', async (t) => {
  const plan = tspl(t, { plan: 3 })
  let originalReq
  const instance = pino({
    serializers: {
      req: pino.stdSerializers.req
    }
  }, sink((chunk, enc) => {
    plan.ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    plan.deepEqual(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers,
        remoteAddress: originalReq.socket.remoteAddress,
        remotePort: originalReq.socket.remotePort
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    originalReq = req
    instance.info({ req }, 'my request')
    res.end('hello')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  plan.equal(err, undefined)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()

  await plan
})

test('http response support', async (t) => {
  const plan = tspl(t, { plan: 3 })
  let originalRes
  const instance = pino(sink((chunk, enc) => {
    plan.ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    plan.deepEqual(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my response',
      res: {
        statusCode: originalRes.statusCode,
        headers: originalRes.getHeaders()
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    originalRes = res
    res.end('hello')
    instance.info(res, 'my response')
  })
  server.unref()
  server.listen()
  const err = await once(server, 'listening')

  plan.equal(err, undefined)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()

  await plan
})

test('http response support via a serializer', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const instance = pino({
    serializers: {
      res: pino.stdSerializers.res
    }
  }, sink((chunk, enc) => {
    plan.ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    plan.deepEqual(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my response',
      res: {
        statusCode: 200,
        headers: {
          'x-single': 'y',
          'x-multi': [1, 2]
        }
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    res.setHeader('x-single', 'y')
    res.setHeader('x-multi', [1, 2])
    res.end('hello')
    instance.info({ res }, 'my response')
  })

  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  plan.equal(err, undefined)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()

  await plan
})

test('http request support via serializer in a child', async (t) => {
  const plan = tspl(t, { plan: 3 })
  let originalReq
  const instance = pino({
    serializers: {
      req: pino.stdSerializers.req
    }
  }, sink((chunk, enc) => {
    plan.ok(new Date(chunk.time) <= new Date(), 'time is greater than Date.now()')
    delete chunk.time
    plan.deepEqual(chunk, {
      pid,
      hostname,
      level: 30,
      msg: 'my request',
      req: {
        method: originalReq.method,
        url: originalReq.url,
        headers: originalReq.headers,
        remoteAddress: originalReq.socket.remoteAddress,
        remotePort: originalReq.socket.remotePort
      }
    })
  }))

  const server = http.createServer(function (req, res) {
    originalReq = req
    const child = instance.child({ req })
    child.info('my request')
    res.end('hello')
  })

  server.unref()
  server.listen()
  const err = await once(server, 'listening')
  plan.equal(err, undefined)

  const res = await once(http.get('http://localhost:' + server.address().port), 'response')
  res.resume()
  server.close()

  await plan
})



================================================
FILE: test/is-level-enabled.test.js
================================================
'use strict'

const { describe, test } = require('node:test')
const assert = require('node:assert')

const pino = require('../')

const descLevels = {
  trace: 60,
  debug: 50,
  info: 40,
  warn: 30,
  error: 20,
  fatal: 10
}

const ascLevels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

describe('Default levels suite', () => {
  test('can check if current level enabled', async () => {
    const log = pino({ level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async () => {
    const log = pino()
    assert.equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async () => {
    const log = pino({ level: 'debug' })
    assert.equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async () => {
    const log = pino({ level: 'error' })
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('ASC: can check if child has current level enabled', async () => {
    const log = pino().child({}, { level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async () => {
    const log = pino({
      customLevels: { foo: 35 },
      level: 'debug'
    })
    assert.equal(true, log.isLevelEnabled('foo'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })
})

describe('Ascending levels suite', () => {
  const customLevels = ascLevels
  const levelComparison = 'ASC'

  test('can check if current level enabled', async () => {
    const log = pino({ level: 'debug', levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async () => {
    const log = pino({ levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async () => {
    const log = pino({ level: 'debug', levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async () => {
    const log = pino({ level: 'error', customLevels, useOnlyCustomLevels: true })
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if child has current level enabled', async () => {
    const log = pino().child({ levelComparison, customLevels, useOnlyCustomLevels: true }, { level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async () => {
    const log = pino({
      levelComparison,
      useOnlyCustomLevels: true,
      customLevels: { foo: 35, ...customLevels },
      level: 'debug'
    })
    assert.equal(true, log.isLevelEnabled('foo'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })
})

describe('Descending levels suite', () => {
  const customLevels = descLevels
  const levelComparison = 'DESC'

  test('can check if current level enabled', async () => {
    const log = pino({ level: 'debug', levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if level enabled after level set', async () => {
    const log = pino({ levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(false, log.isLevelEnabled('debug'))
    log.level = 'debug'
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('can check if higher level enabled', async () => {
    const log = pino({ level: 'debug', levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(true, log.isLevelEnabled('error'))
  })

  test('can check if lower level is disabled', async () => {
    const log = pino({ level: 'error', levelComparison, customLevels, useOnlyCustomLevels: true })
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if child has current level enabled', async () => {
    const log = pino({ levelComparison, customLevels, useOnlyCustomLevels: true }).child({}, { level: 'debug' })
    assert.equal(true, log.isLevelEnabled('debug'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })

  test('can check if custom level is enabled', async () => {
    const log = pino({
      levelComparison,
      customLevels: { foo: 35, ...customLevels },
      useOnlyCustomLevels: true,
      level: 'debug'
    })
    assert.equal(true, log.isLevelEnabled('foo'))
    assert.equal(true, log.isLevelEnabled('error'))
    assert.equal(false, log.isLevelEnabled('trace'))
  })
})

describe('Custom levels comparison', () => {
  test('Custom comparison returns true cause level is enabled', async () => {
    const log = pino({ level: 'error', levelComparison: () => true })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('Custom comparison returns false cause level is disabled', async () => {
    const log = pino({ level: 'error', levelComparison: () => false })
    assert.equal(false, log.isLevelEnabled('debug'))
  })

  test('Custom comparison returns true cause child level is enabled', async () => {
    const log = pino({ levelComparison: () => true }).child({ level: 'error' })
    assert.equal(true, log.isLevelEnabled('debug'))
  })

  test('Custom comparison returns false cause child level is disabled', async () => {
    const log = pino({ levelComparison: () => false }).child({ level: 'error' })
    assert.equal(false, log.isLevelEnabled('debug'))
  })
})



================================================
FILE: test/levels.test.js
================================================
'use strict'

const { describe, test } = require('node:test')
const assert = require('node:assert')
const tspl = require('@matteo.collina/tspl')

const { sink, once, check } = require('./helper')
const pino = require('../')

const levelsLib = require('../lib/levels')

// Silence all warnings for this test
process.removeAllListeners('warning')
process.on('warning', () => {})

test('set the level by string', async () => {
  const expected = [{
    level: 50,
    msg: 'this is an error'
  }, {
    level: 60,
    msg: 'this is fatal'
  }]
  const stream = sink()
  const instance = pino(stream)
  instance.level = 'error'
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')
  const result = await once(stream, 'data')
  const current = expected.shift()
  check(assert.equal, result, current.level, current.msg)
})

test('the wrong level throws', async () => {
  const instance = pino()
  assert.throws(() => {
    instance.level = 'kaboom'
  })
})

test('set the level by number', async () => {
  const expected = [{
    level: 50,
    msg: 'this is an error'
  }, {
    level: 60,
    msg: 'this is fatal'
  }]
  const stream = sink()
  const instance = pino(stream)

  instance.level = 50
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')
  const result = await once(stream, 'data')
  const current = expected.shift()
  check(assert.equal, result, current.level, current.msg)
})

test('exposes level string mappings', async () => {
  assert.equal(pino.levels.values.error, 50)
})

test('exposes level number mappings', async () => {
  assert.equal(pino.levels.labels[50], 'error')
})

test('returns level integer', async () => {
  const instance = pino({ level: 'error' })
  assert.equal(instance.levelVal, 50)
})

test('child returns level integer', async () => {
  const parent = pino({ level: 'error' })
  const child = parent.child({ foo: 'bar' })
  assert.equal(child.levelVal, 50)
})

test('set the level via exported pino function', async () => {
  const expected = [{
    level: 50,
    msg: 'this is an error'
  }, {
    level: 60,
    msg: 'this is fatal'
  }]
  const stream = sink()
  const instance = pino({ level: 'error' }, stream)

  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')
  const result = await once(stream, 'data')
  const current = expected.shift()
  check(assert.equal, result, current.level, current.msg)
})

test('level-change event', async (t) => {
  const plan = tspl(t, { plan: 8 })
  const instance = pino()
  function handle (lvl, val, prevLvl, prevVal, logger) {
    plan.equal(lvl, 'trace')
    plan.equal(val, 10)
    plan.equal(prevLvl, 'info')
    plan.equal(prevVal, 30)
    plan.equal(logger, instance)
  }
  instance.on('level-change', handle)
  instance.level = 'trace'
  instance.removeListener('level-change', handle)
  instance.level = 'info'

  let count = 0

  const l1 = () => count++
  const l2 = () => count++
  const l3 = () => count++
  instance.on('level-change', l1)
  instance.on('level-change', l2)
  instance.on('level-change', l3)

  instance.level = 'trace'
  instance.removeListener('level-change', l3)
  instance.level = 'fatal'
  instance.removeListener('level-change', l1)
  instance.level = 'debug'
  instance.removeListener('level-change', l2)
  instance.level = 'info'

  plan.equal(count, 6)

  instance.once('level-change', (lvl, val, prevLvl, prevVal, logger) => plan.equal(logger, instance))
  instance.level = 'info'
  const child = instance.child({})
  instance.once('level-change', (lvl, val, prevLvl, prevVal, logger) => plan.equal(logger, child))
  child.level = 'trace'

  await plan
})

test('enable', async (t) => {
  const instance = pino({
    level: 'trace',
    enabled: false
  }, sink((result, enc) => {
    throw Error('no data should be logged')
  }))

  Object.keys(pino.levels.values).forEach((level) => {
    instance[level]('hello world')
  })
})

test('silent level', async () => {
  const instance = pino({
    level: 'silent'
  }, sink((result, enc) => {
    throw Error('no data should be logged')
  }))

  Object.keys(pino.levels.values).forEach((level) => {
    instance[level]('hello world')
  })
})

test('set silent via Infinity', async () => {
  const instance = pino({
    level: Infinity
  }, sink((result, enc) => {
    throw Error('no data should be logged')
  }))

  Object.keys(pino.levels.values).forEach((level) => {
    instance[level]('hello world')
  })
})

test('exposed levels', async () => {
  assert.deepEqual(Object.keys(pino.levels.values), [
    'trace',
    'debug',
    'info',
    'warn',
    'error',
    'fatal'
  ])
})

test('exposed labels', async () => {
  assert.deepEqual(Object.keys(pino.levels.labels), [
    '10',
    '20',
    '30',
    '40',
    '50',
    '60'
  ])
})

test('setting level in child', async (t) => {
  const plan = tspl(t, { plan: 10 })
  const expected = [{
    level: 50,
    msg: 'this is an error'
  }, {
    level: 60,
    msg: 'this is fatal'
  }]
  const instance = pino(sink((result, enc, cb) => {
    const current = expected.shift()
    check(plan.equal, result, current.level, current.msg)
    cb()
  })).child({ level: 30 })

  instance.level = 'error'
  instance.info('hello world')
  instance.error('this is an error')
  instance.fatal('this is fatal')

  await plan
})

test('setting level by assigning a number to level', async () => {
  const instance = pino()
  assert.equal(instance.levelVal, 30)
  assert.equal(instance.level, 'info')
  instance.level = 50
  assert.equal(instance.levelVal, 50)
  assert.equal(instance.level, 'error')
})

test('setting level by number to unknown value results in a throw', async () => {
  const instance = pino()
  assert.throws(() => { instance.level = 973 })
})

test('setting level by assigning a known label to level', async () => {
  const instance = pino()
  assert.equal(instance.levelVal, 30)
  assert.equal(instance.level, 'info')
  instance.level = 'error'
  assert.equal(instance.levelVal, 50)
  assert.equal(instance.level, 'error')
})

test('levelVal is read only', async () => {
  const instance = pino()
  assert.throws(() => { instance.levelVal = 20 })
})

test('produces labels when told to', async (t) => {
  const plan = tspl(t, { plan: 5 })
  const expected = [{
    level: 'info',
    msg: 'hello world'
  }]
  const instance = pino({
    formatters: {
      level (label, number) {
        return { level: label }
      }
    }
  }, sink((result, enc, cb) => {
    const current = expected.shift()
    check(plan.equal, result, current.level, current.msg)
    cb()
  }))

  instance.info('hello world')

  await plan
})

test('resets levels from labels to numbers', async (t) => {
  const plan = tspl(t, { plan: 5 })
  const expected = [{
    level: 30,
    msg: 'hello world'
  }]
  pino({ useLevelLabels: true })
  const instance = pino({ useLevelLabels: false }, sink((result, enc, cb) => {
    const current = expected.shift()
    check(plan.equal, result, current.level, current.msg)
    cb()
  }))

  instance.info('hello world')

  await plan
})

test('changes label naming when told to', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const expected = [{
    priority: 30,
    msg: 'hello world'
  }]
  const instance = pino({
    formatters: {
      level (label, number) {
        return { priority: number }
      }
    }
  }, sink((result, enc, cb) => {
    const current = expected.shift()
    plan.equal(result.priority, current.priority)
    plan.equal(result.msg, current.msg)
    cb()
  }))

  instance.info('hello world')

  await plan
})

test('children produce labels when told to', async (t) => {
  const plan = tspl(t, { plan: 10 })
  const expected = [
    {
      level: 'info',
      msg: 'child 1'
    },
    {
      level: 'info',
      msg: 'child 2'
    }
  ]
  const instance = pino({
    formatters: {
      level (label, number) {
        return { level: label }
      }
    }
  }, sink((result, enc, cb) => {
    const current = expected.shift()
    check(plan.equal, result, current.level, current.msg)
    cb()
  }))

  const child1 = instance.child({ name: 'child1' })
  const child2 = child1.child({ name: 'child2' })

  child1.info('child 1')
  child2.info('child 2')

  await plan
})

test('produces labels for custom levels', async (t) => {
  const plan = tspl(t, { plan: 10 })
  const expected = [
    {
      level: 'info',
      msg: 'hello world'
    },
    {
      level: 'foo',
      msg: 'foobar'
    }
  ]
  const opts = {
    formatters: {
      level (label, number) {
        return { level: label }
      }
    },
    customLevels: {
      foo: 35
    }
  }
  const instance = pino(opts, sink((result, enc, cb) => {
    const current = expected.shift()
    check(plan.equal, result, current.level, current.msg)
    cb()
  }))

  instance.info('hello world')
  instance.foo('foobar')

  await plan
})

test('setting levelKey does not affect labels when told to', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const instance = pino(
    {
      formatters: {
        level (label, number) {
          return { priority: label }
        }
      }
    },
    sink((result, enc, cb) => {
      plan.equal(result.priority, 'info')
      cb()
    })
  )

  instance.info('hello world')

  await plan
})

test('throws when creating a default label that does not exist in logger levels', async () => {
  const defaultLevel = 'foo'
  assert.throws(
    () => {
      pino({
        customLevels: {
          bar: 5
        },
        level: defaultLevel
      })
    },
    Error(`default level:${defaultLevel} must be included in custom levels`)
  )
})

test('throws when creating a default value that does not exist in logger levels', async () => {
  const defaultLevel = 15
  assert.throws(
    () => {
      pino({
        customLevels: {
          bar: 5
        },
        level: defaultLevel
      })
    },
    Error(`default level:${defaultLevel} must be included in custom levels`)
  )
})

test('throws when creating a default value that does not exist in logger levels', async ({ equal, throws }) => {
  assert.throws(
    () => {
      pino({
        customLevels: {
          foo: 5
        },
        useOnlyCustomLevels: true
      })
    },
    /default level:info must be included in custom levels/
  )
})

test('passes when creating a default value that exists in logger levels', async () => {
  pino({
    level: 30
  })
})

test('log null value when message is null', async () => {
  const expected = {
    msg: null,
    level: 30
  }

  const stream = sink()
  const instance = pino(stream)
  instance.level = 'info'
  instance.info(null)

  const result = await once(stream, 'data')
  check(assert.equal, result, expected.level, expected.msg)
})

test('formats when base param is null', async () => {
  const expected = {
    msg: 'a string',
    level: 30
  }

  const stream = sink()
  const instance = pino(stream)
  instance.level = 'info'
  instance.info(null, 'a %s', 'string')

  const result = await once(stream, 'data')
  check(assert.equal, result, expected.level, expected.msg)
})

test('fatal method sync-flushes the destination if sync flushing is available', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const stream = sink()
  stream.flushSync = () => {
    plan.ok('destination flushed')
  }
  const instance = pino(stream)
  instance.fatal('this is fatal')
  await once(stream, 'data')
  plan.doesNotThrow(() => {
    stream.flushSync = undefined
    instance.fatal('this is fatal')
  })

  await plan
})

test('fatal method should call async when sync-flushing fails', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const messages = [
    'this is fatal 1'
  ]
  const stream = sink((result) => assert.equal(result.msg, messages.shift()))
  stream.flushSync = () => { throw new Error('Error') }
  stream.flush = () => { throw Error('flush should be called') }

  const instance = pino(stream)
  plan.doesNotThrow(() => instance.fatal(messages[0]))

  await plan
})

test('calling silent method on logger instance', async () => {
  const instance = pino({ level: 'silent' }, sink((result, enc) => {
    throw Error('no data should be logged')
  }))
  instance.silent('hello world')
})

test('calling silent method on child logger', async () => {
  const child = pino({ level: 'silent' }, sink((result, enc) => {
    throw Error('no data should be logged')
  })).child({})
  child.silent('hello world')
})

test('changing level from info to silent and back to info', async () => {
  const expected = {
    level: 30,
    msg: 'hello world'
  }
  const stream = sink()
  const instance = pino({ level: 'info' }, stream)

  instance.level = 'silent'
  instance.info('hello world')
  let result = stream.read()
  assert.equal(result, null)

  instance.level = 'info'
  instance.info('hello world')
  result = await once(stream, 'data')
  check(assert.equal, result, expected.level, expected.msg)
})

test('changing level from info to silent and back to info in child logger', async () => {
  const expected = {
    level: 30,
    msg: 'hello world'
  }
  const stream = sink()
  const child = pino({ level: 'info' }, stream).child({})

  child.level = 'silent'
  child.info('hello world')
  let result = stream.read()
  assert.equal(result, null)

  child.level = 'info'
  child.info('hello world')
  result = await once(stream, 'data')
  check(assert.equal, result, expected.level, expected.msg)
})

describe('changing level respects level comparison set to', () => {
  const ascLevels = {
    debug: 1,
    info: 2,
    warn: 3
  }

  const descLevels = {
    debug: 3,
    info: 2,
    warn: 1
  }

  const expected = {
    level: 2,
    msg: 'hello world'
  }

  test('ASC in parent logger', async () => {
    const customLevels = ascLevels
    const levelComparison = 'ASC'

    const stream = sink()
    const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream)

    logger.level = 'warn'
    logger.info('hello world')
    let result = stream.read()
    assert.equal(result, null)

    logger.level = 'debug'
    logger.info('hello world')
    result = await once(stream, 'data')
    check(assert.equal, result, expected.level, expected.msg)
  })

  test('DESC in parent logger', async () => {
    const customLevels = descLevels
    const levelComparison = 'DESC'

    const stream = sink()
    const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream)

    logger.level = 'warn'
    logger.info('hello world')
    let result = stream.read()
    assert.equal(result, null)

    logger.level = 'debug'
    logger.info('hello world')
    result = await once(stream, 'data')
    check(assert.equal, result, expected.level, expected.msg)
  })

  test('custom function in parent logger', async () => {
    const customLevels = {
      info: 2,
      debug: 345,
      warn: 789
    }
    const levelComparison = (current, expected) => {
      if (expected === customLevels.warn) return false
      return true
    }

    const stream = sink()
    const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream)

    logger.level = 'warn'
    logger.info('hello world')
    let result = stream.read()
    assert.equal(result, null)

    logger.level = 'debug'
    logger.info('hello world')
    result = await once(stream, 'data')
    check(assert.equal, result, expected.level, expected.msg)
  })

  test('ASC in child logger', async () => {
    const customLevels = ascLevels
    const levelComparison = 'ASC'

    const stream = sink()
    const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream).child({ })

    logger.level = 'warn'
    logger.info('hello world')
    let result = stream.read()
    assert.equal(result, null)

    logger.level = 'debug'
    logger.info('hello world')
    result = await once(stream, 'data')
    check(assert.equal, result, expected.level, expected.msg)
  })

  test('DESC in parent logger', async () => {
    const customLevels = descLevels
    const levelComparison = 'DESC'

    const stream = sink()
    const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream).child({ })

    logger.level = 'warn'
    logger.info('hello world')
    let result = stream.read()
    assert.equal(result, null)

    logger.level = 'debug'
    logger.info('hello world')
    result = await once(stream, 'data')
    check(assert.equal, result, expected.level, expected.msg)
  })

  test('custom function in child logger', async () => {
    const customLevels = {
      info: 2,
      debug: 345,
      warn: 789
    }
    const levelComparison = (current, expected) => {
      if (expected === customLevels.warn) return false
      return true
    }

    const stream = sink()
    const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream).child({ })

    logger.level = 'warn'
    logger.info('hello world')
    let result = stream.read()
    assert.equal(result, null)

    logger.level = 'debug'
    logger.info('hello world')
    result = await once(stream, 'data')
    check(assert.equal, result, expected.level, expected.msg)
  })
})

test('changing level respects level comparison DESC', async () => {
  const customLevels = {
    warn: 1,
    info: 2,
    debug: 3
  }

  const levelComparison = 'DESC'

  const expected = {
    level: 2,
    msg: 'hello world'
  }

  const stream = sink()
  const logger = pino({ levelComparison, customLevels, useOnlyCustomLevels: true, level: 'info' }, stream)

  logger.level = 'warn'
  logger.info('hello world')
  let result = stream.read()
  assert.equal(result, null)

  logger.level = 'debug'
  logger.info('hello world')
  result = await once(stream, 'data')
  check(assert.equal, result, expected.level, expected.msg)
})

// testing for potential loss of Pino constructor scope from serializers - an edge case with circular refs see:  https://github.com/pinojs/pino/issues/833
test('trying to get levels when `this` is no longer a Pino instance returns an empty string', async () => {
  const notPinoInstance = { some: 'object', getLevel: levelsLib.getLevel }
  const blankedLevelValue = notPinoInstance.getLevel()
  assert.equal(blankedLevelValue, '')
})

test('accepts capital letter for INFO level', async () => {
  const stream = sink()
  const logger = pino({
    level: 'INFO'
  }, stream)

  logger.info('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 30)
})

test('accepts capital letter for FATAL level', async () => {
  const stream = sink()
  const logger = pino({
    level: 'FATAL'
  }, stream)

  logger.fatal('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 60)
})

test('accepts capital letter for ERROR level', async () => {
  const stream = sink()
  const logger = pino({
    level: 'ERROR'
  }, stream)

  logger.error('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 50)
})

test('accepts capital letter for WARN level', async () => {
  const stream = sink()
  const logger = pino({
    level: 'WARN'
  }, stream)

  logger.warn('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 40)
})

test('accepts capital letter for DEBUG level', async () => {
  const stream = sink()
  const logger = pino({
    level: 'DEBUG'
  }, stream)

  logger.debug('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 20)
})

test('accepts capital letter for TRACE level', async () => {
  const stream = sink()
  const logger = pino({
    level: 'TRACE'
  }, stream)

  logger.trace('test')
  const { level } = await once(stream, 'data')
  assert.equal(level, 10)
})



================================================
FILE: test/metadata.test.js
================================================
'use strict'

const test = require('node:test')
const os = require('node:os')
const tspl = require('@matteo.collina/tspl')

const pino = require('../')

const { pid } = process
const hostname = os.hostname()

test('metadata works', async (t) => {
  const plan = tspl(t, { plan: 7 })
  const now = Date.now()
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      plan.equal(instance, this.lastLogger)
      plan.equal(30, this.lastLevel)
      plan.equal('a msg', this.lastMsg)
      plan.ok(Number(this.lastTime) >= now)
      plan.deepEqual(this.lastObj, { hello: 'world' })
      const result = JSON.parse(chunk)
      plan.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      plan.deepEqual(result, {
        pid,
        hostname,
        level: 30,
        hello: 'world',
        msg: 'a msg'
      })
    }
  })

  instance.info({ hello: 'world' }, 'a msg')

  await plan
})

test('child loggers works', async (t) => {
  const plan = tspl(t, { plan: 6 })
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      plan.equal(child, this.lastLogger)
      plan.equal(30, this.lastLevel)
      plan.equal('a msg', this.lastMsg)
      plan.deepEqual(this.lastObj, { from: 'child' })
      const result = JSON.parse(chunk)
      plan.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      plan.deepEqual(result, {
        pid,
        hostname,
        level: 30,
        hello: 'world',
        from: 'child',
        msg: 'a msg'
      })
    }
  })

  const child = instance.child({ hello: 'world' })
  child.info({ from: 'child' }, 'a msg')

  await plan
})

test('without object', async (t) => {
  const plan = tspl(t, { plan: 6 })
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      plan.equal(instance, this.lastLogger)
      plan.equal(30, this.lastLevel)
      plan.equal('a msg', this.lastMsg)
      plan.deepEqual({ }, this.lastObj)
      const result = JSON.parse(chunk)
      plan.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      plan.deepEqual(result, {
        pid,
        hostname,
        level: 30,
        msg: 'a msg'
      })
    }
  })

  instance.info('a msg')

  await plan
})

test('without msg', async (t) => {
  const plan = tspl(t, { plan: 6 })
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      plan.equal(instance, this.lastLogger)
      plan.equal(30, this.lastLevel)
      plan.equal(undefined, this.lastMsg)
      plan.deepEqual({ hello: 'world' }, this.lastObj)
      const result = JSON.parse(chunk)
      plan.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      plan.deepEqual(result, {
        pid,
        hostname,
        level: 30,
        hello: 'world'
      })
    }
  })

  instance.info({ hello: 'world' })

  await plan
})



================================================
FILE: test/mixin-merge-strategy.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')

const { sink, once } = require('./helper')
const pino = require('../')

const level = 50
const name = 'error'

test('default merge strategy', async () => {
  const stream = sink()
  const instance = pino({
    base: {},
    mixin () {
      return { tag: 'k8s' }
    }
  }, stream)
  instance.level = name
  instance[name]({
    tag: 'local'
  }, 'test')
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    level,
    msg: 'test',
    tag: 'local'
  })
})

test('custom merge strategy with mixin priority', async () => {
  const stream = sink()
  const instance = pino({
    base: {},
    mixin () {
      return { tag: 'k8s' }
    },
    mixinMergeStrategy (mergeObject, mixinObject) {
      return Object.assign(mergeObject, mixinObject)
    }
  }, stream)
  instance.level = name
  instance[name]({
    tag: 'local'
  }, 'test')
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    level,
    msg: 'test',
    tag: 'k8s'
  })
})



================================================
FILE: test/mixin.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const tspl = require('@matteo.collina/tspl')

const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()
const level = 50
const name = 'error'

test('mixin object is included', async () => {
  let n = 0
  const stream = sink()
  const instance = pino({
    mixin () {
      return { hello: ++n }
    }
  }, stream)
  instance.level = name
  instance[name]('test')
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    msg: 'test',
    hello: 1
  })
})

test('mixin object is new every time', async (t) => {
  const plan = tspl(t, { plan: 6 })

  let n = 0
  const stream = sink()
  const instance = pino({
    mixin () {
      return { hello: n }
    }
  }, stream)
  instance.level = name

  while (++n < 4) {
    const msg = `test #${n}`
    stream.pause()
    instance[name](msg)
    stream.resume()
    const result = await once(stream, 'data')
    plan.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
    delete result.time
    plan.deepEqual(result, {
      pid,
      hostname,
      level,
      msg,
      hello: n
    })
  }

  await plan
})

test('mixin object is not called if below log level', async () => {
  const stream = sink()
  const instance = pino({
    mixin () {
      throw Error('should not call mixin function')
    }
  }, stream)
  instance.level = 'error'
  instance.info('test')
})

test('mixin object + logged object', async () => {
  const stream = sink()
  const instance = pino({
    mixin () {
      return { foo: 1, bar: 2 }
    }
  }, stream)
  instance.level = name
  instance[name]({ bar: 3, baz: 4 })
  const result = await once(stream, 'data')
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level,
    foo: 1,
    bar: 3,
    baz: 4
  })
})

test('mixin not a function', async () => {
  const stream = sink()
  assert.throws(function () {
    pino({ mixin: 'not a function' }, stream)
  })
})

test('mixin can use context', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = sink()
  const instance = pino({
    mixin (context) {
      plan.ok(context !== null, 'context should be defined')
      plan.ok(context !== undefined, 'context should be defined')
      plan.deepEqual(context, {
        message: '123',
        stack: 'stack'
      })
      return Object.assign({
        error: context.message,
        stack: context.stack
      })
    }
  }, stream)
  instance.level = name
  instance[name]({
    message: '123',
    stack: 'stack'
  }, 'test')

  await plan
})

test('mixin works without context', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = sink()
  const instance = pino({
    mixin (context) {
      plan.ok(context !== null, 'context is still defined w/o passing mergeObject')
      plan.ok(context !== undefined, 'context is still defined w/o passing mergeObject')
      plan.deepEqual(context, {})
      return {
        something: true
      }
    }
  }, stream)
  instance.level = name
  instance[name]('test')

  await plan
})

test('mixin can use level number', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = sink()
  const instance = pino({
    mixin (context, num) {
      plan.ok(num !== null, 'level should be defined')
      plan.ok(num !== undefined, 'level should be defined')
      plan.deepEqual(num, level)
      return Object.assign({
        error: context.message,
        stack: context.stack
      })
    }
  }, stream)
  instance.level = name
  instance[name]({
    message: '123',
    stack: 'stack'
  }, 'test')

  await plan
})

test('mixin receives logger as third parameter', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = sink()
  const instance = pino({
    mixin (context, num, logger) {
      plan.ok(logger !== null, 'logger should be defined')
      plan.ok(logger !== undefined, 'logger should be defined')
      plan.deepEqual(logger, instance)
      return { ...context, num }
    }
  }, stream)
  instance.level = name
  instance[name]({
    message: '123'
  }, 'test')

  await plan
})

test('mixin receives child logger', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = sink()
  let child = null
  const instance = pino({
    mixin (context, num, logger) {
      plan.ok(logger !== null, 'logger should be defined')
      plan.ok(logger !== undefined, 'logger should be defined')
      plan.deepEqual(logger.expected, child.expected)
      return { ...context, num }
    }
  }, stream)
  instance.level = name
  instance.expected = false
  child = instance.child({})
  child.expected = true
  child[name]({
    message: '123'
  }, 'test')

  await plan
})

test('mixin receives logger even if child exists', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const stream = sink()
  let child = null
  const instance = pino({
    mixin (context, num, logger) {
      plan.ok(logger !== null, 'logger should be defined')
      plan.ok(logger !== undefined, 'logger should be defined')
      plan.deepEqual(logger.expected, instance.expected)
      return { ...context, num }
    }
  }, stream)
  instance.level = name
  instance.expected = false
  child = instance.child({})
  child.expected = true
  instance[name]({
    message: '123'
  }, 'test')

  await plan
})



================================================
FILE: test/multistream.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const proxyquire = require('proxyquire')
const strip = require('strip-ansi')
const tspl = require('@matteo.collina/tspl')

const writeStream = require('flush-write-stream')
const pino = require('../')
const multistream = pino.multistream
const { file, sink } = require('./helper')

test('sends to multiple streams using string levels', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const log = pino({
    level: 'trace'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 9)
})

test('sends to multiple streams using custom levels', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const log = pino({
    level: 'trace'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 9)
})

test('sends to multiple streams using optionally predefined levels', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const opts = {
    levels: {
      silent: Infinity,
      fatal: 60,
      error: 50,
      warn: 50,
      info: 30,
      debug: 20,
      trace: 10
    }
  }
  const streams = [
    { stream },
    { level: 'trace', stream },
    { level: 'debug', stream },
    { level: 'info', stream },
    { level: 'warn', stream },
    { level: 'error', stream },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const mstream = multistream(streams, opts)
  const log = pino({
    level: 'trace'
  }, mstream)
  log.trace('trace stream')
  log.debug('debug stream')
  log.info('info stream')
  log.warn('warn stream')
  log.error('error stream')
  log.fatal('fatal stream')
  log.silent('silent stream')
  assert.equal(messageCount, 24)
})

test('sends to multiple streams using number levels', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 20, stream },
    { level: 60, stream }
  ]
  const log = pino({
    level: 'debug'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 6)
})

test('level include higher levels', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const log = pino({}, multistream([{ level: 'info', stream }]))
  log.fatal('message')
  assert.equal(messageCount, 1)
})

test('supports multiple arguments', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const messages = []
  const stream = writeStream(function (data, enc, cb) {
    messages.push(JSON.parse(data))
    if (messages.length === 2) {
      const msg1 = messages[0]
      plan.equal(msg1.msg, 'foo bar baz foobar')

      const msg2 = messages[1]
      plan.equal(msg2.msg, 'foo bar baz foobar barfoo foofoo')
    }
    cb()
  })
  const log = pino({}, multistream({ stream }))
  log.info('%s %s %s %s', 'foo', 'bar', 'baz', 'foobar') // apply not invoked
  log.info('%s %s %s %s %s %s', 'foo', 'bar', 'baz', 'foobar', 'barfoo', 'foofoo') // apply invoked

  await plan
})

test('supports children', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const stream = writeStream(function (data, enc, cb) {
    const input = JSON.parse(data)
    plan.equal(input.msg, 'child stream')
    plan.equal(input.child, 'one')
    cb()
  })
  const streams = [
    { stream }
  ]
  const log = pino({}, multistream(streams)).child({ child: 'one' })
  log.info('child stream')

  await plan
})

test('supports grandchildren', async (t) => {
  const plan = tspl(t, { plan: 9 })
  const messages = []
  const stream = writeStream(function (data, enc, cb) {
    messages.push(JSON.parse(data))
    if (messages.length === 3) {
      const msg1 = messages[0]
      plan.equal(msg1.msg, 'grandchild stream')
      plan.equal(msg1.child, 'one')
      plan.equal(msg1.grandchild, 'two')

      const msg2 = messages[1]
      plan.equal(msg2.msg, 'grandchild stream')
      plan.equal(msg2.child, 'one')
      plan.equal(msg2.grandchild, 'two')

      const msg3 = messages[2]
      plan.equal(msg3.msg, 'debug grandchild')
      plan.equal(msg3.child, 'one')
      plan.equal(msg3.grandchild, 'two')
    }
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream }
  ]
  const log = pino({
    level: 'debug'
  }, multistream(streams)).child({ child: 'one' }).child({ grandchild: 'two' })
  log.info('grandchild stream')
  log.debug('debug grandchild')

  await plan
})

test('supports custom levels', (t, end) => {
  const stream = writeStream(function (data, enc, cb) {
    assert.equal(JSON.parse(data).msg, 'bar')
    end()
  })
  const log = pino({
    customLevels: {
      foo: 35
    }
  }, multistream([{ level: 35, stream }]))
  log.foo('bar')
})

test('supports pretty print', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const stream = writeStream(function (data, enc, cb) {
    plan.equal(strip(data.toString()).match(/INFO.*: pretty print/) != null, true)
    cb()
  })

  const safeBoom = proxyquire('pino-pretty/lib/utils/build-safe-sonic-boom.js', {
    'sonic-boom': function () {
      plan.ok('sonic created')
      stream.flushSync = () => {}
      stream.flush = () => {}
      return stream
    }
  })
  const nested = proxyquire('pino-pretty/lib/utils/index.js', {
    './build-safe-sonic-boom.js': safeBoom
  })
  const pretty = proxyquire('pino-pretty', {
    './lib/utils/index.js': nested
  })

  const log = pino({
    level: 'debug',
    name: 'helloName'
  }, multistream([
    { stream: pretty() }
  ]))

  log.info('pretty print')

  await plan
})

test('emit propagates events to each stream', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const handler = function (data) {
    plan.equal(data.msg, 'world')
  }
  const streams = [sink(), sink(), sink()]
  streams.forEach(function (s) {
    s.once('hello', handler)
  })
  const stream = multistream(streams)
  stream.emit('hello', { msg: 'world' })

  await plan
})

test('children support custom levels', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const stream = writeStream(function (data, enc, cb) {
    plan.equal(JSON.parse(data).msg, 'bar')
  })
  const parent = pino({
    customLevels: {
      foo: 35
    }
  }, multistream([{ level: 35, stream }]))
  const child = parent.child({ child: 'yes' })
  child.foo('bar')

  await plan
})

test('levelVal overrides level', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'blabla', levelVal: 15, stream },
    { level: 60, stream }
  ]
  const log = pino({
    level: 'debug'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 6)
})

test('forwards metadata', async (t) => {
  const plan = tspl(t, { plan: 4 })
  const streams = [
    {
      stream: {
        [Symbol.for('pino.metadata')]: true,
        write (chunk) {
          plan.equal(log, this.lastLogger)
          plan.equal(30, this.lastLevel)
          plan.deepEqual({ hello: 'world' }, this.lastObj)
          plan.deepEqual('a msg', this.lastMsg)
        }
      }
    }
  ]

  const log = pino({
    level: 'debug'
  }, multistream(streams))

  log.info({ hello: 'world' }, 'a msg')

  await plan
})

test('forward name', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const streams = [
    {
      stream: {
        [Symbol.for('pino.metadata')]: true,
        write (chunk) {
          const line = JSON.parse(chunk)
          plan.equal(line.name, 'helloName')
          plan.equal(line.hello, 'world')
        }
      }
    }
  ]

  const log = pino({
    level: 'debug',
    name: 'helloName'
  }, multistream(streams))

  log.info({ hello: 'world' }, 'a msg')

  await plan
})

test('forward name with child', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const streams = [
    {
      stream: {
        write (chunk) {
          const line = JSON.parse(chunk)
          plan.equal(line.name, 'helloName')
          plan.equal(line.hello, 'world')
          plan.equal(line.component, 'aComponent')
        }
      }
    }
  ]

  const log = pino({
    level: 'debug',
    name: 'helloName'
  }, multistream(streams)).child({ component: 'aComponent' })

  log.info({ hello: 'world' }, 'a msg')

  await plan
})

test('clone generates a new multistream with all stream at the same level', async (t) => {
  const plan = tspl(t, { plan: 14 })
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream },
    { level: 'fatal', stream }
  ]
  const ms = multistream(streams)
  const clone = ms.clone(30)

  // eslint-disable-next-line eqeqeq
  plan.equal(clone != ms, true)

  clone.streams.forEach((s, i) => {
    // eslint-disable-next-line eqeqeq
    plan.equal(s != streams[i], true)
    plan.equal(s.stream, streams[i].stream)
    plan.equal(s.level, 30)
  })

  const log = pino({
    level: 'trace'
  }, clone)

  log.info('info stream')
  log.debug('debug message not counted')
  log.fatal('fatal stream')
  plan.equal(messageCount, 8)

  await plan
})

test('one stream', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const log = pino({
    level: 'trace'
  }, multistream({ stream, level: 'fatal' }))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 1)
})

test('dedupe', async () => {
  let messageCount = 0
  const stream1 = writeStream(function (data, enc, cb) {
    messageCount -= 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const streams = [
    {
      stream: stream1,
      level: 'info'
    },
    {
      stream: stream2,
      level: 'fatal'
    }
  ]

  const log = pino({
    level: 'trace'
  }, multistream(streams, { dedupe: true }))
  log.info('info stream')
  log.fatal('fatal stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 1)
})

test('dedupe when logs have different levels', async () => {
  let messageCount = 0
  const stream1 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount += 2
    cb()
  })

  const streams = [
    {
      stream: stream1,
      level: 'info'
    },
    {
      stream: stream2,
      level: 'error'
    }
  ]

  const log = pino({
    level: 'trace'
  }, multistream(streams, { dedupe: true }))

  log.info('info stream')
  log.warn('warn stream')
  log.error('error streams')
  log.fatal('fatal streams')
  assert.equal(messageCount, 6)
})

test('dedupe when some streams has the same level', async () => {
  let messageCount = 0
  const stream1 = writeStream(function (data, enc, cb) {
    messageCount -= 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const stream3 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const streams = [
    {
      stream: stream1,
      level: 'info'
    },
    {
      stream: stream2,
      level: 'fatal'
    },
    {
      stream: stream3,
      level: 'fatal'
    }
  ]

  const log = pino({
    level: 'trace'
  }, multistream(streams, { dedupe: true }))
  log.info('info stream')
  log.fatal('fatal streams')
  log.fatal('fatal streams')
  assert.equal(messageCount, 3)
})

test('no stream', async () => {
  const log = pino({
    level: 'trace'
  }, multistream())
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
})

test('one stream', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const log = pino({
    level: 'trace'
  }, multistream(stream))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 2)
})

test('add a stream', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const log = pino({
    level: 'trace'
  }, multistream().add(stream))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  assert.equal(messageCount, 2)
})

test('remove a stream', async () => {
  let messageCount1 = 0
  let messageCount2 = 0
  let messageCount3 = 0

  const stream1 = writeStream(function (data, enc, cb) {
    messageCount1 += 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount2 += 1
    cb()
  })

  const stream3 = writeStream(function (data, enc, cb) {
    messageCount3 += 1
    cb()
  })

  const multi = multistream()
  const log = pino({ level: 'trace', sync: true }, multi)

  multi.add(stream1)
  const id1 = multi.lastId

  multi.add(stream2)
  const id2 = multi.lastId

  multi.add(stream3)
  const id3 = multi.lastId

  log.info('line')
  multi.remove(id1)

  log.info('line')
  multi.remove(id2)

  log.info('line')
  multi.remove(id3)

  log.info('line')
  multi.remove(Math.floor(Math.random() * 1000)) // non-existing id

  assert.equal(messageCount1, 1)
  assert.equal(messageCount2, 2)
  assert.equal(messageCount3, 3)
})

test('multistream.add throws if not a stream', async () => {
  try {
    pino({
      level: 'trace'
    }, multistream().add({}))
  } catch (_) {
  }
})

test('multistream throws if not a stream', async () => {
  try {
    pino({
      level: 'trace'
    }, multistream({}))
  } catch (_) {
  }
})

test('multistream.write should not throw if one stream fails', async () => {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const noopStream = pino.transport({
    target: join(__dirname, 'fixtures', 'noop-transport.js')
  })
  // eslint-disable-next-line
  noopStream.on('error', function (err) {
    // something went wrong while writing to noop stream, ignoring!
  })
  const log = pino({
    level: 'trace'
  },
  multistream([
    {
      level: 'trace',
      stream
    },
    {
      level: 'debug',
      stream: noopStream
    }
  ])
  )
  log.debug('0')
  noopStream.end()
  // noop stream is ending, should emit an error but not throw
  log.debug('1')
  log.debug('2')
  assert.equal(messageCount, 3)
})

test('flushSync', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const tmp = file()
  const destination = pino.destination({ dest: tmp, sync: false, minLength: 4096 })
  const stream = multistream([{ level: 'info', stream: destination }])
  const log = pino({ level: 'info' }, stream)
  destination.on('ready', () => {
    log.info('foo')
    log.info('bar')
    stream.flushSync()
    plan.equal(readFileSync(tmp, { encoding: 'utf-8' }).split('\n').length - 1, 2)
    log.info('biz')
    stream.flushSync()
    plan.equal(readFileSync(tmp, { encoding: 'utf-8' }).split('\n').length - 1, 3)
  })

  await plan
})

test('ends all streams', async (t) => {
  const plan = tspl(t, { plan: 7 })
  const stream = writeStream(function (data, enc, cb) {
    plan.ok('message')
    cb()
  })
  stream.flushSync = function () {
    plan.ok('flushSync')
  }
  // stream2 has no flushSync
  const stream2 = writeStream(function (data, enc, cb) {
    plan.ok('message2')
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream: stream2 },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const multi = multistream(streams)
  const log = pino({
    level: 'trace'
  }, multi)
  log.info('info stream')
  multi.end()

  await plan
})



================================================
FILE: test/redact.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')

const { sink, once } = require('./helper')
const pino = require('../')

test('redact option – throws if not array', async () => {
  assert.throws(() => {
    pino({ redact: 'req.headers.cookie' })
  })
})

test('redact option – throws if array does not only contain strings', async () => {
  assert.throws(() => {
    pino({ redact: ['req.headers.cookie', {}] })
  })
})

test('redact option – throws if array contains an invalid path', async () => {
  assert.throws(() => {
    pino({ redact: ['req,headers.cookie'] })
  })
})

test('redact.paths option – throws if not array', async () => {
  assert.throws(() => {
    pino({ redact: { paths: 'req.headers.cookie' } })
  })
})

test('redact.paths option – throws if array does not only contain strings', async () => {
  assert.throws(() => {
    pino({ redact: { paths: ['req.headers.cookie', {}] } })
  })
})

test('redact.paths option – throws if array contains an invalid path', async () => {
  assert.throws(() => {
    pino({ redact: { paths: ['req,headers.cookie'] } })
  })
})

test('redact option – top level key', async () => {
  const stream = sink()
  const instance = pino({ redact: ['key'] }, stream)
  instance.info({
    key: { redact: 'me' }
  })
  const { key } = await once(stream, 'data')
  assert.equal(key, '[Redacted]')
})

test('redact option – top level key next level key', async () => {
  const stream = sink()
  const instance = pino({ redact: ['key', 'key.foo'] }, stream)
  instance.info({
    key: { redact: 'me' }
  })
  const { key } = await once(stream, 'data')
  assert.equal(key, '[Redacted]')
})

test('redact option – next level key then top level key', async () => {
  const stream = sink()
  const instance = pino({ redact: ['key.foo', 'key'] }, stream)
  instance.info({
    key: { redact: 'me' }
  })
  const { key } = await once(stream, 'data')
  assert.equal(key, '[Redacted]')
})

test('redact option – object', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.headers.cookie'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('redact option – child object', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.headers.cookie'] }, stream)
  instance.child({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  }).info('message completed')
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('redact option – interpolated object', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.headers.cookie'] }, stream)

  instance.info('test %j', {
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { msg } = await once(stream, 'data')
  assert.equal(JSON.parse(msg.replace(/test /, '')).req.headers.cookie, '[Redacted]')
})

test('redact.paths option – object', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'] } }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('redact.paths option – child object', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'] } }, stream)
  instance.child({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  }).info('message completed')
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('redact.paths option – interpolated object', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'] } }, stream)

  instance.info('test %j', {
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { msg } = await once(stream, 'data')
  assert.equal(JSON.parse(msg.replace(/test /, '')).req.headers.cookie, '[Redacted]')
})

test('redact.censor option – sets the redact value', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'], censor: 'test' } }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, 'test')
})

test('redact.censor option – can be a function that accepts value and path arguments', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['topLevel'], censor: (value, path) => value + ' ' + path.join('.') } }, stream)
  instance.info({
    topLevel: 'test'
  })
  const { topLevel } = await once(stream, 'data')
  assert.equal(topLevel, 'test topLevel')
})

test('redact.censor option – can be a function that accepts value and path arguments (nested path)', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'], censor: (value, path) => value + ' ' + path.join('.') } }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1; req.headers.cookie')
})

test('redact.remove option – removes both key and value', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'], remove: true } }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal('cookie' in req.headers, false)
})

test('redact.remove – top level key - object value', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['key'], remove: true } }, stream)
  instance.info({
    key: { redact: 'me' }
  })
  const o = await once(stream, 'data')
  assert.equal('key' in o, false)
})

test('redact.remove – top level key - number value', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['key'], remove: true } }, stream)
  instance.info({
    key: 1
  })
  const o = await once(stream, 'data')
  assert.equal('key' in o, false)
})

test('redact.remove – top level key - boolean value', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['key'], remove: true } }, stream)
  instance.info({
    key: false
  })
  const o = await once(stream, 'data')
  assert.equal('key' in o, false)
})

test('redact.remove – top level key in child logger', async () => {
  const stream = sink()
  const opts = { redact: { paths: ['key'], remove: true } }
  const instance = pino(opts, stream).child({ key: { redact: 'me' } })
  instance.info('test')
  const o = await once(stream, 'data')
  assert.equal('key' in o, false)
})

test('redact.paths preserves original object values after the log write', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.headers.cookie'] }, stream)
  const obj = {
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.req.headers.cookie, '[Redacted]')
  assert.equal(obj.req.headers.cookie, 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;')
})

test('redact.paths preserves original object values after the log write', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'] } }, stream)
  const obj = {
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.req.headers.cookie, '[Redacted]')
  assert.equal(obj.req.headers.cookie, 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;')
})

test('redact.censor preserves original object values after the log write', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'], censor: 'test' } }, stream)
  const obj = {
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.req.headers.cookie, 'test')
  assert.equal(obj.req.headers.cookie, 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;')
})

test('redact.remove preserves original object values after the log write', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['req.headers.cookie'], remove: true } }, stream)
  const obj = {
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal('cookie' in o.req.headers, false)
  assert.equal('cookie' in obj.req.headers, true)
})

test('redact – supports last position wildcard paths', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.headers.*'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
  assert.equal(req.headers.host, '[Redacted]')
  assert.equal(req.headers.connection, '[Redacted]')
})

test('redact – supports first position wildcard paths', async () => {
  const stream = sink()
  const instance = pino({ redact: ['*.headers'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers, '[Redacted]')
})

test('redact – supports first position wildcards before other paths', async () => {
  const stream = sink()
  const instance = pino({ redact: ['*.headers.cookie', 'req.id'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
  assert.equal(req.id, '[Redacted]')
})

test('redact – supports first position wildcards after other paths', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.id', '*.headers.cookie'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
  assert.equal(req.id, '[Redacted]')
})

test('redact – supports first position wildcards after top level keys', async () => {
  const stream = sink()
  const instance = pino({ redact: ['key', '*.headers.cookie'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('redact – supports top level wildcard', async () => {
  const stream = sink()
  const instance = pino({ redact: ['*'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req, '[Redacted]')
})

test('redact – supports top level wildcard with a censor function', async () => {
  const stream = sink()
  const instance = pino({
    redact: {
      paths: ['*'],
      censor: () => '[Redacted]'
    }
  }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req, '[Redacted]')
})

test('redact – supports top level wildcard and leading wildcard', async () => {
  const stream = sink()
  const instance = pino({ redact: ['*', '*.req'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req, '[Redacted]')
})

test('redact – supports intermediate wildcard paths', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.*.cookie'] }, stream)
  instance.info({
    req: {
      id: 7915,
      method: 'GET',
      url: '/',
      headers: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      },
      remoteAddress: '::ffff:127.0.0.1',
      remotePort: 58022
    }
  })
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('redacts numbers at the top level', async () => {
  const stream = sink()
  const instance = pino({ redact: ['id'] }, stream)
  const obj = {
    id: 7915
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.id, '[Redacted]')
})

test('redacts booleans at the top level', async () => {
  const stream = sink()
  const instance = pino({ redact: ['maybe'] }, stream)
  const obj = {
    maybe: true
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.maybe, '[Redacted]')
})

test('redacts strings at the top level', async () => {
  const stream = sink()
  const instance = pino({ redact: ['s'] }, stream)
  const obj = {
    s: 's'
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.s, '[Redacted]')
})

test('does not redact primitives if not objects', async () => {
  const stream = sink()
  const instance = pino({ redact: ['a.b'] }, stream)
  const obj = {
    a: 42
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.a, 42)
})

test('redacts null at the top level', async () => {
  const stream = sink()
  const instance = pino({ redact: ['n'] }, stream)
  const obj = {
    n: null
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.n, '[Redacted]')
})

test('supports bracket notation', async () => {
  const stream = sink()
  const instance = pino({ redact: ['a["b.b"]'] }, stream)
  const obj = {
    a: { 'b.b': 'c' }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.a['b.b'], '[Redacted]')
})

test('supports bracket notation with further nesting', async () => {
  const stream = sink()
  const instance = pino({ redact: ['a["b.b"].c'] }, stream)
  const obj = {
    a: { 'b.b': { c: 'd' } }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.a['b.b'].c, '[Redacted]')
})

test('supports bracket notation with empty string as path segment', async () => {
  const stream = sink()
  const instance = pino({ redact: ['a[""].c'] }, stream)
  const obj = {
    a: { '': { c: 'd' } }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o.a[''].c, '[Redacted]')
})

test('supports leading bracket notation (single quote)', async () => {
  const stream = sink()
  const instance = pino({ redact: ['[\'a.a\'].b'] }, stream)
  const obj = {
    'a.a': { b: 'c' }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o['a.a'].b, '[Redacted]')
})

test('supports leading bracket notation (double quote)', async () => {
  const stream = sink()
  const instance = pino({ redact: ['["a.a"].b'] }, stream)
  const obj = {
    'a.a': { b: 'c' }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o['a.a'].b, '[Redacted]')
})

test('supports leading bracket notation (backtick quote)', async () => {
  const stream = sink()
  const instance = pino({ redact: ['[`a.a`].b'] }, stream)
  const obj = {
    'a.a': { b: 'c' }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o['a.a'].b, '[Redacted]')
})

test('supports leading bracket notation (single-segment path)', async () => {
  const stream = sink()
  const instance = pino({ redact: ['[`a.a`]'] }, stream)
  const obj = {
    'a.a': { b: 'c' }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o['a.a'], '[Redacted]')
})

test('supports leading bracket notation (single-segment path, wildcard)', async () => {
  const stream = sink()
  const instance = pino({ redact: ['[*]'] }, stream)
  const obj = {
    'a.a': { b: 'c' }
  }
  instance.info(obj)
  const o = await once(stream, 'data')
  assert.equal(o['a.a'], '[Redacted]')
})

test('child bindings are redacted using wildcard path', async () => {
  const stream = sink()
  const instance = pino({ redact: ['*.headers.cookie'] }, stream)
  instance.child({
    req: {
      method: 'GET',
      url: '/',
      headers: {
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      }
    }
  }).info('message completed')
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
})

test('child bindings are redacted using wildcard and plain path keys', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.method', '*.headers.cookie'] }, stream)
  instance.child({
    req: {
      method: 'GET',
      url: '/',
      headers: {
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      }
    }
  }).info('message completed')
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, '[Redacted]')
  assert.equal(req.method, '[Redacted]')
})

test('redacts boolean at the top level', async () => {
  const stream = sink()
  const instance = pino({ redact: ['msg'] }, stream)
  const obj = {
    s: 's'
  }
  instance.info(obj, true)
  const o = await once(stream, 'data')
  assert.equal(o.s, 's')
  assert.equal(o.msg, '[Redacted]')
})

test('child can customize redact', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.method', '*.headers.cookie'] }, stream)
  instance.child({
    req: {
      method: 'GET',
      url: '/',
      headers: {
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      }
    }
  }, {
    redact: ['req.url']
  }).info('message completed')
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;')
  assert.equal(req.method, 'GET')
  assert.equal(req.url, '[Redacted]')
})

test('child can remove parent redact by array', async () => {
  const stream = sink()
  const instance = pino({ redact: ['req.method', '*.headers.cookie'] }, stream)
  instance.child({
    req: {
      method: 'GET',
      url: '/',
      headers: {
        cookie: 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;'
      }
    }
  }, {
    redact: []
  }).info('message completed')
  const { req } = await once(stream, 'data')
  assert.equal(req.headers.cookie, 'SESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;')
  assert.equal(req.method, 'GET')
})

test('redact safe stringify', async () => {
  const stream = sink()
  const instance = pino({ redact: { paths: ['that.secret'] } }, stream)

  instance.info({
    that: {
      secret: 'please hide me',
      myBigInt: 123n
    },
    other: {
      mySecondBigInt: 222n
    }
  })
  const { that, other } = await once(stream, 'data')
  assert.equal(that.secret, '[Redacted]')
  assert.equal(that.myBigInt, 123)
  assert.equal(other.mySecondBigInt, 222)
})

test('censor function should not be called for non-existent nested paths (issue #2313)', async () => {
  const stream = sink()
  const censorCalls = []

  const instance = pino({
    redact: {
      paths: ['a.b.c', 'req.authorization', 'url'],
      censor (value, path) {
        censorCalls.push({ value, path: path.join('.') })
        if (typeof value !== 'string') {
          return '***'
        }
        return '***'
      }
    }
  }, stream)

  // Test case 1: parent exists but nested path doesn't
  censorCalls.length = 0
  instance.info({ req: { id: 'test' } }, 'test message')
  await once(stream, 'data')
  assert.equal(censorCalls.length, 0, 'censor should not be called when req.authorization does not exist')

  // Test case 2: parent exists but deeply nested path doesn't
  censorCalls.length = 0
  instance.info({ a: { d: 'test' } }, 'test message')
  await once(stream, 'data')
  assert.equal(censorCalls.length, 0, 'censor should not be called when a.b.c does not exist')

  // Test case 3: multiple parent keys exist but nested paths don't
  censorCalls.length = 0
  instance.info({ a: { c: 'should-not-show-me' }, req: { id: 'test' } }, 'test message')
  await once(stream, 'data')
  assert.equal(censorCalls.length, 0, 'censor should not be called when neither a.b.c nor req.authorization exist')

  // Test case 4: verify censor IS called when path exists
  censorCalls.length = 0
  instance.info({ req: { authorization: 'bearer token' } }, 'test message')
  await once(stream, 'data')
  assert.equal(censorCalls.length, 1, 'censor should be called when req.authorization exists')
  assert.equal(censorCalls[0].path, 'req.authorization')
  assert.equal(censorCalls[0].value, 'bearer token')
})



================================================
FILE: test/serializers.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const stdSerializers = require('pino-std-serializers')

const { sink, once } = require('./helper')
const pino = require('../')

const parentSerializers = {
  test: () => 'parent'
}

const childSerializers = {
  test: () => 'child'
}

test('default err namespace error serializer', async () => {
  const stream = sink()
  const parent = pino(stream)

  parent.info({ err: ReferenceError('test') })
  const o = await once(stream, 'data')
  assert.equal(typeof o.err, 'object')
  assert.equal(o.err.type, 'ReferenceError')
  assert.equal(o.err.message, 'test')
  assert.equal(typeof o.err.stack, 'string')
})

test('custom serializer overrides default err namespace error serializer', async () => {
  const stream = sink()
  const parent = pino({
    serializers: {
      err: (e) => ({
        t: e.constructor.name,
        m: e.message,
        s: e.stack
      })
    }
  }, stream)

  parent.info({ err: ReferenceError('test') })
  const o = await once(stream, 'data')
  assert.equal(typeof o.err, 'object')
  assert.equal(o.err.t, 'ReferenceError')
  assert.equal(o.err.m, 'test')
  assert.equal(typeof o.err.s, 'string')
})

test('custom serializer overrides default err namespace error serializer when nestedKey is on', async () => {
  const stream = sink()
  const parent = pino({
    nestedKey: 'obj',
    serializers: {
      err: (e) => {
        return {
          t: e.constructor.name,
          m: e.message,
          s: e.stack
        }
      }
    }
  }, stream)

  parent.info({ err: ReferenceError('test') })
  const o = await once(stream, 'data')
  assert.equal(typeof o.obj.err, 'object')
  assert.equal(o.obj.err.t, 'ReferenceError')
  assert.equal(o.obj.err.m, 'test')
  assert.equal(typeof o.obj.err.s, 'string')
})

test('null overrides default err namespace error serializer', async () => {
  const stream = sink()
  const parent = pino({ serializers: { err: null } }, stream)

  parent.info({ err: ReferenceError('test') })
  const o = await once(stream, 'data')
  assert.equal(typeof o.err, 'object')
  assert.equal(typeof o.err.type, 'undefined')
  assert.equal(typeof o.err.message, 'undefined')
  assert.equal(typeof o.err.stack, 'undefined')
})

test('undefined overrides default err namespace error serializer', async () => {
  const stream = sink()
  const parent = pino({ serializers: { err: undefined } }, stream)

  parent.info({ err: ReferenceError('test') })
  const o = await once(stream, 'data')
  assert.equal(typeof o.err, 'object')
  assert.equal(typeof o.err.type, 'undefined')
  assert.equal(typeof o.err.message, 'undefined')
  assert.equal(typeof o.err.stack, 'undefined')
})

test('serializers override values', async () => {
  const stream = sink()
  const parent = pino({ serializers: parentSerializers }, stream)
  parent.child({}, { serializers: childSerializers })

  parent.fatal({ test: 'test' })
  const o = await once(stream, 'data')
  assert.equal(o.test, 'parent')
})

test('child does not overwrite parent serializers', async () => {
  const stream = sink()
  const parent = pino({ serializers: parentSerializers }, stream)
  const child = parent.child({}, { serializers: childSerializers })

  parent.fatal({ test: 'test' })

  const o = once(stream, 'data')
  assert.equal((await o).test, 'parent')
  const o2 = once(stream, 'data')
  child.fatal({ test: 'test' })
  assert.equal((await o2).test, 'child')
})

test('Symbol.for(\'pino.serializers\')', async () => {
  const stream = sink()
  const expected = Object.assign({
    err: stdSerializers.err
  }, parentSerializers)
  const parent = pino({ serializers: parentSerializers }, stream)
  const child = parent.child({ a: 'property' })

  assert.deepEqual(parent[Symbol.for('pino.serializers')], expected)
  assert.deepEqual(child[Symbol.for('pino.serializers')], expected)
  assert.equal(parent[Symbol.for('pino.serializers')], child[Symbol.for('pino.serializers')])

  const child2 = parent.child({}, {
    serializers: {
      a
    }
  })

  function a () {
    return 'hello'
  }

  // eslint-disable-next-line eqeqeq
  assert.equal(child2[Symbol.for('pino.serializers')] != parentSerializers, true)
  assert.equal(child2[Symbol.for('pino.serializers')].a, a)
  assert.equal(child2[Symbol.for('pino.serializers')].test, parentSerializers.test)
})

test('children inherit parent serializers', async () => {
  const stream = sink()
  const parent = pino({ serializers: parentSerializers }, stream)

  const child = parent.child({ a: 'property' })
  child.fatal({ test: 'test' })
  const o = await once(stream, 'data')
  assert.equal(o.test, 'parent')
})

test('children inherit parent Symbol serializers', async () => {
  const stream = sink()
  const symbolSerializers = {
    [Symbol.for('b')]: b
  }
  const expected = Object.assign({
    err: stdSerializers.err
  }, symbolSerializers)
  const parent = pino({ serializers: symbolSerializers }, stream)

  assert.deepEqual(parent[Symbol.for('pino.serializers')], expected)

  const child = parent.child({}, {
    serializers: {
      [Symbol.for('a')]: a,
      a
    }
  })

  function a () {
    return 'hello'
  }

  function b () {
    return 'world'
  }

  assert.deepEqual(child[Symbol.for('pino.serializers')].a, a)
  assert.deepEqual(child[Symbol.for('pino.serializers')][Symbol.for('b')], b)
  assert.deepEqual(child[Symbol.for('pino.serializers')][Symbol.for('a')], a)
})

test('children serializers get called', async () => {
  const stream = sink()
  const parent = pino({
    test: 'this'
  }, stream)

  const child = parent.child({ a: 'property' }, { serializers: childSerializers })

  child.fatal({ test: 'test' })
  const o = await once(stream, 'data')
  assert.equal(o.test, 'child')
})

test('children serializers get called when inherited from parent', async () => {
  const stream = sink()
  const parent = pino({
    test: 'this',
    serializers: parentSerializers
  }, stream)

  const child = parent.child({}, { serializers: { test: function () { return 'pass' } } })

  child.fatal({ test: 'fail' })
  const o = await once(stream, 'data')
  assert.equal(o.test, 'pass')
})

test('non-overridden serializers are available in the children', async () => {
  const stream = sink()
  const pSerializers = {
    onlyParent: function () { return 'parent' },
    shared: function () { return 'parent' }
  }

  const cSerializers = {
    shared: function () { return 'child' },
    onlyChild: function () { return 'child' }
  }

  const parent = pino({ serializers: pSerializers }, stream)

  const child = parent.child({}, { serializers: cSerializers })

  const o = once(stream, 'data')
  child.fatal({ shared: 'test' })
  assert.equal((await o).shared, 'child')
  const o2 = once(stream, 'data')
  child.fatal({ onlyParent: 'test' })
  assert.equal((await o2).onlyParent, 'parent')
  const o3 = once(stream, 'data')
  child.fatal({ onlyChild: 'test' })
  assert.equal((await o3).onlyChild, 'child')
  const o4 = once(stream, 'data')
  parent.fatal({ onlyChild: 'test' })
  assert.equal((await o4).onlyChild, 'test')
})

test('custom serializer for messageKey', async () => {
  const stream = sink()
  const instance = pino({ serializers: { msg: () => '422' } }, stream)

  const o = { num: NaN }
  instance.info(o, 42)

  const { msg } = await once(stream, 'data')
  assert.equal(msg, '422')
})



================================================
FILE: test/stdout-protection.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')
const { fork } = require('node:child_process')
const writer = require('flush-write-stream')

const { once } = require('./helper')
const pino = require('..')

test('do not use SonicBoom is someone tampered with process.stdout.write', async () => {
  let actual = ''
  const child = fork(join(__dirname, 'fixtures', 'stdout-hack-protection.js'), { silent: true })

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))
  await once(child, 'close')
  assert.equal(actual.match(/^hack/) != null, true)
})

test('do not use SonicBoom is someone has passed process.stdout to pino', async () => {
  const logger = pino(process.stdout)
  assert.equal(logger[pino.symbols.streamSym], process.stdout)
})

test('do not crash if process.stdout has no fd', async (t) => {
  const fd = process.stdout.fd
  delete process.stdout.fd
  t.after(function () { process.stdout.fd = fd })
  pino()
})

test('use fd=1 if process.stdout has no fd in pino.destination() (worker case)', async (t) => {
  const fd = process.stdout.fd
  delete process.stdout.fd
  t.after(function () { process.stdout.fd = fd })
  pino.destination()
})



================================================
FILE: test/syncfalse.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { promises: { readFile }, createWriteStream } = require('node:fs')
const { join } = require('node:path')
const { fork } = require('node:child_process')
const writer = require('flush-write-stream')
const {
  once,
  getPathToNull,
  file,
  watchFileCreated
} = require('./helper')
const { promisify } = require('node:util')
const tspl = require('@matteo.collina/tspl')

const sleep = promisify(setTimeout)

test('asynchronous logging', async (t) => {
  const now = Date.now
  const hostname = os.hostname
  const proc = process
  global.process = {
    __proto__: process,
    pid: 123456
  }
  Date.now = () => 1459875739796
  os.hostname = () => 'abcdefghijklmnopqr'
  delete require.cache[require.resolve('../')]
  const pino = require('../')
  let expected = ''
  let actual = ''
  const normal = pino(writer((s, enc, cb) => {
    expected += s
    cb()
  }))

  const dest = createWriteStream(getPathToNull())
  dest.write = (s) => {
    actual += s
  }
  const asyncLogger = pino(dest)

  let i = 44
  while (i--) {
    normal.info('h')
    asyncLogger.info('h')
  }

  const expected2 = expected.split('\n')[0]
  let actual2 = ''

  const child = fork(join(__dirname, '/fixtures/syncfalse.js'), { silent: true })
  child.stdout.pipe(writer((s, enc, cb) => {
    actual2 += s
    cb()
  }))
  await once(child, 'close')
  // Wait for the last write to be flushed
  await sleep(100)
  assert.equal(actual, expected)
  assert.equal(actual2.trim(), expected2)

  t.after(() => {
    os.hostname = hostname
    Date.now = now
    global.process = proc
  })
})

test('sync false with child', async (t) => {
  const now = Date.now
  const hostname = os.hostname
  const proc = process
  global.process = {
    __proto__: process,
    pid: 123456
  }
  Date.now = function () {
    return 1459875739796
  }
  os.hostname = function () {
    return 'abcdefghijklmnopqr'
  }
  delete require.cache[require.resolve('../')]
  const pino = require('../')
  let expected = ''
  let actual = ''
  const normal = pino(writer((s, enc, cb) => {
    expected += s
    cb()
  })).child({ hello: 'world' })

  const dest = createWriteStream(getPathToNull())
  dest.write = function (s) {
    actual += s
  }
  const asyncLogger = pino(dest).child({ hello: 'world' })

  let i = 500
  while (i--) {
    normal.info('h')
    asyncLogger.info('h')
  }

  asyncLogger.flush()

  const expected2 = expected.split('\n')[0]
  let actual2 = ''

  const child = fork(join(__dirname, '/fixtures/syncfalse-child.js'), { silent: true })
  child.stdout.pipe(writer((s, enc, cb) => {
    actual2 += s
    cb()
  }))
  await once(child, 'close')
  assert.equal(actual, expected)
  assert.equal(actual2.trim(), expected2)

  t.after(() => {
    os.hostname = hostname
    Date.now = now
    global.process = proc
  })
})

test('flush does nothing with sync true (default)', async () => {
  const instance = require('..')()
  assert.equal(instance.flush(), undefined)
})

test('should still call flush callback even when does nothing with sync true (default)', async (t) => {
  const plan = tspl(t, { plan: 3 })
  const instance = require('..')()
  instance.flush((...args) => {
    plan.ok('flush called')
    plan.deepEqual(args, [])

    // next tick to make flush not called more than once
    process.nextTick(() => {
      plan.ok('flush next tick called')
    })
  })

  await plan
})

test('should call the flush callback when flushed the data for async logger', async () => {
  const outputPath = file()
  async function getOutputLogLines () {
    return (await readFile(outputPath)).toString().trim().split('\n').map(JSON.parse)
  }

  const pino = require('../')

  const instance = pino({}, pino.destination({
    dest: outputPath,

    // to make sure it does not flush on its own
    minLength: 4096
  }))
  const flushPromise = promisify(instance.flush).bind(instance)

  instance.info('hello')
  await flushPromise()
  await watchFileCreated(outputPath)

  const [firstFlushData] = await getOutputLogLines()

  assert.equal(firstFlushData.msg, 'hello')

  // should not flush this as no data accumulated that's bigger than min length
  instance.info('world')

  // Making sure data is not flushed yet
  const afterLogData = await getOutputLogLines()
  assert.equal(afterLogData.length, 1)

  await flushPromise()

  // Making sure data is not flushed yet
  const afterSecondFlush = (await getOutputLogLines())[1]
  assert.equal(afterSecondFlush.msg, 'world')
})



================================================
FILE: test/timestamp-nano.test.js
================================================
'use strict'

/* eslint no-prototype-builtins: 0 */

const test = require('node:test')
const assert = require('node:assert')

const { sink, once } = require('./helper')

test('pino.stdTimeFunctions.isoTimeNano returns RFC 3339 timestamps', async () => {
  // Mock Date.now at module initialization time
  const now = Date.now
  Date.now = () => new Date('2025-08-01T15:03:45.000000000Z').getTime()

  // Mock process.hrtime.bigint at module initialization time
  const hrTimeBigint = process.hrtime.bigint
  process.hrtime.bigint = () => 100000000000000n

  const pino = require('../')

  const opts = {
    timestamp: pino.stdTimeFunctions.isoTimeNano
  }
  const stream = sink()

  // Mock process.hrtime.bigint at invocation time, add 1 day to the timestamp
  process.hrtime.bigint = () => 100000000000000n + 86400012345678n

  const instance = pino(opts, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.equal(result.time, '2025-08-02T15:03:45.012345678Z')

  Date.now = now
  process.hrtime.bigint = hrTimeBigint
})



================================================
FILE: test/timestamp.test.js
================================================
'use strict'

/* eslint no-prototype-builtins: 0 */

const test = require('node:test')
const assert = require('node:assert')

const { sink, once } = require('./helper')
const pino = require('../')

test('pino exposes standard time functions', async () => {
  assert.ok(pino.stdTimeFunctions)
  assert.ok(pino.stdTimeFunctions.epochTime)
  assert.ok(pino.stdTimeFunctions.unixTime)
  assert.ok(pino.stdTimeFunctions.nullTime)
  assert.ok(pino.stdTimeFunctions.isoTime)
  assert.ok(pino.stdTimeFunctions.isoTimeNano)
})

test('pino accepts external time functions', async () => {
  const opts = {
    timestamp: () => ',"time":"none"'
  }
  const stream = sink()
  const instance = pino(opts, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.equal(result.time, 'none')
})

test('pino accepts external time functions with custom label', async () => {
  const opts = {
    timestamp: () => ',"custom-time-label":"none"'
  }
  const stream = sink()
  const instance = pino(opts, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('custom-time-label'), true)
  assert.equal(result['custom-time-label'], 'none')
})

test('inserts timestamp by default', async ({ ok, equal }) => {
  const stream = sink()
  const instance = pino(stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than timestamp')
  assert.equal(result.msg, 'foobar')
})

test('omits timestamp when timestamp option is false', async () => {
  const stream = sink()
  const instance = pino({ timestamp: false }, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), false)
  assert.equal(result.msg, 'foobar')
})

test('inserts timestamp when timestamp option is true', async ({ ok, equal }) => {
  const stream = sink()
  const instance = pino({ timestamp: true }, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than timestamp')
  assert.equal(result.msg, 'foobar')
})

test('child inserts timestamp by default', async ({ ok, equal }) => {
  const stream = sink()
  const logger = pino(stream)
  const instance = logger.child({ component: 'child' })
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.ok(new Date(result.time) <= new Date(), 'time is greater than timestamp')
  assert.equal(result.msg, 'foobar')
})

test('child omits timestamp with option', async () => {
  const stream = sink()
  const logger = pino({ timestamp: false }, stream)
  const instance = logger.child({ component: 'child' })
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), false)
  assert.equal(result.msg, 'foobar')
})

test('pino.stdTimeFunctions.unixTime returns seconds based timestamps', async () => {
  const opts = {
    timestamp: pino.stdTimeFunctions.unixTime
  }
  const stream = sink()
  const instance = pino(opts, stream)
  const now = Date.now
  Date.now = () => 1531069919686
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.equal(result.time, 1531069920)
  Date.now = now
})

test('pino.stdTimeFunctions.isoTime returns ISO 8601 timestamps', async () => {
  const opts = {
    timestamp: pino.stdTimeFunctions.isoTime
  }
  const stream = sink()
  const instance = pino(opts, stream)
  const ms = 1531069919686
  const now = Date.now
  Date.now = () => ms
  const iso = new Date(ms).toISOString()
  instance.info('foobar')
  const result = await once(stream, 'data')
  assert.equal(result.hasOwnProperty('time'), true)
  assert.equal(result.time, iso)
  Date.now = now
})



================================================
FILE: test/transport-stream.test.js
================================================
'use strict'

const test = require('node:test')
const proxyquire = require('proxyquire')
const tspl = require('@matteo.collina/tspl')

test('should import', async (t) => {
  const plan = tspl(t, { plan: 2 })
  const mockRealRequire = (target) => {
    return {
      default: {
        default: () => {
          plan.equal(target, 'pino-pretty')
          return Promise.resolve()
        }
      }
    }
  }
  const mockRealImport = async () => {
    await Promise.resolve()
    throw Object.assign(new Error(), { code: 'ERR_MODULE_NOT_FOUND' })
  }

  const loadTransportStreamBuilder = proxyquire(
    '../lib/transport-stream.js',
    {
      'real-require': {
        realRequire: mockRealRequire,
        realImport: mockRealImport
      }
    }
  )

  const fn = await loadTransportStreamBuilder('pino-pretty')

  await fn()
  plan.ok('returned promise resolved')

  await plan
})



================================================
FILE: test/esm/esm.mjs
================================================
import test from 'node:test'
import assert from 'node:assert'

import pino from '../../pino.js'
import helper from '../helper.js'

const { sink, check, once } = helper

test('esm support', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info('hello world')
  check(assert.equal, await once(stream, 'data'), 30, 'hello world')
})



================================================
FILE: test/esm/index.test.js
================================================
'use strict'

// Node v8 throw a `SyntaxError: Unexpected token import`
// even if this branch is never touched in the code,
// by using `eval` we can avoid this issue.
// eslint-disable-next-line
  new Function('module', 'return import(module)')('./esm.mjs').catch((err) => {
  process.nextTick(() => {
    throw err
  })
})

// Node v8 throw a `SyntaxError: Unexpected token import`
// even if this branch is never touched in the code,
// by using `eval` we can avoid this issue.
// eslint-disable-next-line
  new Function('module', 'return import(module)')('./named-exports.mjs').catch((err) => {
  process.nextTick(() => {
    throw err
  })
})



================================================
FILE: test/esm/named-exports.mjs
================================================
import test from 'node:test'
import assert from 'node:assert'
import { hostname } from 'node:os'
import { readFileSync } from 'node:fs'

import { sink, check, once, watchFileCreated, file } from '../helper.js'
import { pino, destination } from '../../pino.js'

test('named exports support', async () => {
  const stream = sink()
  const instance = pino(stream)
  instance.info('hello world')
  check(assert.equal, await once(stream, 'data'), 30, 'hello world')
})

test('destination', async () => {
  const tmp = file()
  const instance = pino(destination(tmp))
  instance.info('hello')
  await watchFileCreated(tmp)
  const result = JSON.parse(readFileSync(tmp).toString())
  delete result.time
  assert.deepEqual(result, {
    pid: process.pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})



================================================
FILE: test/fixtures/console-transport.js
================================================
const { Writable } = require('node:stream')

module.exports = (options) => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      // apply a transform and send to stdout
      console.log(chunk.toString().toUpperCase())
      cb()
    }
  })
  return myTransportStream
}



================================================
FILE: test/fixtures/crashing-transport.js
================================================
const { Writable } = require('node:stream')

module.exports = () =>
  new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      setImmediate(() => {
        /* eslint-disable no-empty */
        for (let i = 0; i < 1e3; i++) {}
        process.exit(0)
      })
    }
  })



================================================
FILE: test/fixtures/default-exit.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const logger = pino()
logger.info('hello')
logger.info('world')
process.exit(0)



================================================
FILE: test/fixtures/destination-exit.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const logger = pino({}, pino.destination(1))
logger.info('hello')
logger.info('world')
process.exit(0)



================================================
FILE: test/fixtures/noop-transport.js
================================================
const { Writable } = require('node:stream')

module.exports = () => {
  return new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      cb()
    }
  })
}



================================================
FILE: test/fixtures/stdout-hack-protection.js
================================================
global.process = { __proto__: process, pid: 123456 }

const write = process.stdout.write.bind(process.stdout)
process.stdout.write = function (chunk) {
  write('hack ' + chunk)
}

Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('../../'))()
pino.info('me')



================================================
FILE: test/fixtures/syncfalse-child.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const asyncLogger = pino(pino.destination({ sync: false })).child({ hello: 'world' })
asyncLogger.info('h')



================================================
FILE: test/fixtures/syncfalse-exit.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const dest = pino.destination({ dest: 1, minLength: 4096, sync: false })
const logger = pino({}, dest)
logger.info('hello')
logger.info('world')
process.exit(0)



================================================
FILE: test/fixtures/syncfalse-flush-exit.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const dest = pino.destination({ dest: 1, minLength: 4096, sync: false })
const logger = pino({}, dest)
logger.info('hello')
logger.info('world')
dest.flushSync()
process.exit(0)



================================================
FILE: test/fixtures/syncfalse.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../'))
const asyncLogger = pino(pino.destination({ minLength: 4096, sync: false }))
asyncLogger.info('h')



================================================
FILE: test/fixtures/syntax-error-esm.mjs
================================================
// This is a syntax error
import



================================================
FILE: test/fixtures/to-file-transport-with-transform.js
================================================
'use strict'

const fs = require('node:fs')
const { once } = require('node:events')
const { Transform } = require('node:stream')

async function run (opts) {
  if (!opts.destination) throw new Error('kaboom')
  const stream = fs.createWriteStream(opts.destination)
  await once(stream, 'open')
  const t = new Transform({
    transform (chunk, enc, cb) {
      setImmediate(cb, null, chunk.toString().toUpperCase())
    }
  })
  t.pipe(stream)
  return t
}

module.exports = run



================================================
FILE: test/fixtures/to-file-transport.js
================================================
'use strict'

const fs = require('node:fs')
const { once } = require('node:events')

async function run (opts) {
  if (!opts.destination) throw new Error('kaboom')
  const stream = fs.createWriteStream(opts.destination)
  await once(stream, 'open')
  return stream
}

module.exports = run



================================================
FILE: test/fixtures/to-file-transport.mjs
================================================
import { createWriteStream } from 'node:fs'
import { once } from 'node:events'

export default async function run (opts) {
  const stream = createWriteStream(opts.destination)
  await once(stream, 'open')
  return stream
}



================================================
FILE: test/fixtures/transport-exit-immediately-with-async-dest.js
================================================
'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: './to-file-transport-with-transform.js',
  options: {
    destination: process.argv[2]
  }
})
const logger = pino(transport)

logger.info('Hello')

logger.info('World')

process.exit(0)



================================================
FILE: test/fixtures/transport-exit-immediately.js
================================================
'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: 'pino/file'
})
const logger = pino(transport)

logger.info('Hello')

process.exit(0)



================================================
FILE: test/fixtures/transport-exit-on-ready.js
================================================
'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: 'pino/file'
})
const logger = pino(transport)

transport.on('ready', function () {
  logger.info('Hello')
  process.exit(0)
})



================================================
FILE: test/fixtures/transport-main.js
================================================
'use strict'

const { join } = require('node:path')
const pino = require('../..')
const transport = pino.transport({
  target: join(__dirname, 'transport-worker.js')
})
const logger = pino(transport)
logger.info('Hello')



================================================
FILE: test/fixtures/transport-many-lines.js
================================================
'use strict'

const pino = require('../..')
const transport = pino.transport({
  targets: [{
    level: 'info',
    target: 'pino/file',
    options: {
      destination: process.argv[2]
    }
  }]
})
const logger = pino(transport)

const toWrite = 1000000
transport.on('ready', run)

let total = 0

function run () {
  if (total++ === 8) {
    return
  }

  for (let i = 0; i < toWrite; i++) {
    logger.info(`hello ${i}`)
  }
  transport.once('drain', run)
}



================================================
FILE: test/fixtures/transport-string-stdout.js
================================================
'use strict'

const pino = require('../..')
const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '1' }
})
const logger = pino(transport)
logger.info('Hello')



================================================
FILE: test/fixtures/transport-transform.js
================================================
'use strict'

const build = require('pino-abstract-transport')
const { pipeline, Transform } = require('node:stream')
module.exports = (options) => {
  return build(function (source) {
    const myTransportStream = new Transform({
      autoDestroy: true,
      objectMode: true,
      transform (chunk, enc, cb) {
        chunk.service = 'pino'
        this.push(JSON.stringify(chunk))
        cb()
      }
    })
    pipeline(source, myTransportStream, () => {})
    return myTransportStream
  }, {
    enablePipelining: true
  })
}



================================================
FILE: test/fixtures/transport-uses-pino-config.js
================================================
'use strict'

const build = require('pino-abstract-transport')
const { pipeline, Transform } = require('node:stream')
module.exports = () => {
  return build(function (source) {
    const myTransportStream = new Transform({
      autoDestroy: true,
      objectMode: true,
      transform (chunk, enc, cb) {
        const {
          time,
          level,
          [source.messageKey]: body,
          [source.errorKey]: error,
          ...attributes
        } = chunk
        this.push(JSON.stringify({
          severityText: source.levels.labels[level],
          body,
          attributes,
          ...(error && { error })
        }))
        cb()
      }
    })
    pipeline(source, myTransportStream, () => {})
    return myTransportStream
  }, {
    enablePipelining: true,
    expectPinoConfig: true
  })
}



================================================
FILE: test/fixtures/transport-with-on-exit.js
================================================
'use strict'
const pino = require('../..')
const log = pino({
  transport: {
    target: 'pino/file',
    options: { destination: 1 }
  }
})
log.info('hello world!')
process.on('exit', (code) => {
  log.info('Exiting peacefully')
})



================================================
FILE: test/fixtures/transport-worker-data.js
================================================
'use strict'

const { parentPort, workerData } = require('worker_threads')
const { Writable } = require('node:stream')

module.exports = (options) => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      parentPort.postMessage({
        code: 'EVENT',
        name: 'workerData',
        args: [workerData]
      })
      cb()
    }
  })
  return myTransportStream
}



================================================
FILE: test/fixtures/transport-worker.js
================================================
'use strict'

const { Writable } = require('node:stream')
const fs = require('node:fs')
module.exports = (options) => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      // Bypass console.log() to avoid flakiness
      fs.writeSync(1, chunk.toString())
      cb()
    }
  })
  return myTransportStream
}



================================================
FILE: test/fixtures/transport-wrong-export-type.js
================================================
module.exports = {
  completelyUnrelatedProperty: 'Just a very incorrect transport worker implementation'
}



================================================
FILE: test/fixtures/broken-pipe/basic.js
================================================
'use strict'

global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }

const pino = require('../../..')()

pino.info('hello world')



================================================
FILE: test/fixtures/broken-pipe/destination.js
================================================
'use strict'

global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }

const pino = require('../../..')
const logger = pino(pino.destination())

logger.info('hello world')



================================================
FILE: test/fixtures/broken-pipe/syncfalse.js
================================================
'use strict'

global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }

const pino = require('../../..')
const logger = pino(pino.destination({ sync: false }))

for (var i = 0; i < 1000; i++) {
  logger.info('hello world')
}



================================================
FILE: test/fixtures/eval/index.js
================================================
/* eslint-disable no-eval */

eval(`
const pino = require('../../../')

const logger = pino(
  pino.transport({
    target: 'pino/file'
  })
)

logger.info('done!')
`)



================================================
FILE: test/fixtures/pretty/null-prototype.js
================================================
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('node:os').hostname = function () { return 'abcdefghijklmnopqr' }
const pino = require(require.resolve('./../../../'))
const log = pino({ prettyPrint: true })
const obj = Object.create(null)
Object.assign(obj, { foo: 'bar' })
log.info(obj, 'hello')



================================================
FILE: test/fixtures/transport/index.js
================================================
'use strict'

const fs = require('node:fs')
const { once } = require('node:events')

async function run (opts) {
  const stream = fs.createWriteStream(opts.destination)
  await once(stream, 'open')
  return stream
}

module.exports = run



================================================
FILE: test/fixtures/transport/package.json
================================================
{
  "name": "transport",
  "version": "0.0.1",
  "main": "./index.js"
}



================================================
FILE: test/fixtures/ts/to-file-transport-with-transform.ts
================================================
import * as fs from 'node:fs'
import { once } from 'node:events'
import { Transform } from 'node:stream'

async function run (opts: {  destination?: fs.PathLike }): Promise<Transform> {
  if (!opts.destination) throw new Error('kaboom')
  const stream = fs.createWriteStream(opts.destination)
  await once(stream, 'open')
  const t = new Transform({
    transform (chunk, enc, cb) {
      setImmediate(cb, null, chunk.toString().toUpperCase())
    }
  })
  t.pipe(stream)
  return t
}

export default run



================================================
FILE: test/fixtures/ts/to-file-transport.ts
================================================
import * as fs from 'node:fs'
import { once } from 'node:events'

async function run (opts: { destination?: fs.PathLike }): Promise<fs.WriteStream> {
  if (!opts.destination) throw new Error('kaboom')
  const stream = fs.createWriteStream(opts.destination, { encoding: 'utf8' })
  await once(stream, 'open')
  return stream
}

export default run



================================================
FILE: test/fixtures/ts/transpile.cjs
================================================
#!/usr/bin/env node

const execa = require('execa')
const fs = require('node:fs')

const existsSync = fs.existsSync
const stat = fs.promises.stat

// Hardcoded parameters
const esVersions = ['es5', 'es6', 'es2017', 'esnext']
const filesToTranspile = ['to-file-transport.ts']

async function transpile () {
  process.chdir(__dirname)

  for (const sourceFileName of filesToTranspile) {
    const sourceStat = await stat(sourceFileName)

    for (const esVersion of esVersions) {
      const intermediateFileName = sourceFileName.replace(/\.ts$/, '.js')
      const targetFileName = sourceFileName.replace(/\.ts$/, `.${esVersion}.cjs`)

      const shouldTranspile = !existsSync(targetFileName) || (await stat(targetFileName)).mtimeMs < sourceStat.mtimeMs

      if (shouldTranspile) {
        await execa('tsc', ['--target', esVersion, '--module', 'commonjs', sourceFileName])
        await execa('mv', [intermediateFileName, targetFileName])
      }
    }
  }
}

transpile().catch(err => {
  process.exitCode = 1
  throw err
})



================================================
FILE: test/fixtures/ts/transport-exit-immediately-with-async-dest.ts
================================================
import pino from '../../..'
import { join } from 'node:path'

const transport = pino.transport({
  target: join(__dirname, 'to-file-transport-with-transform.ts'),
  options: {
    destination: process.argv[2]
  }
})
const logger = pino(transport)

logger.info('Hello')
logger.info('World')

process.exit(0)



================================================
FILE: test/fixtures/ts/transport-exit-immediately.ts
================================================
import pino from '../../..'

const transport = pino.transport({
  target: 'pino/file'
})
const logger = pino(transport)

logger.info('Hello')

process.exit(0)



================================================
FILE: test/fixtures/ts/transport-exit-on-ready.ts
================================================
import pino from '../../..'

const transport = pino.transport({
  target: 'pino/file'
})
const logger = pino(transport)

transport.on('ready', function () {
  logger.info('Hello')
  process.exit(0)
})



================================================
FILE: test/fixtures/ts/transport-main.ts
================================================
import { join } from 'node:path'
import pino from '../../..'

const transport = pino.transport({
  target: join(__dirname, 'transport-worker.ts')
})
const logger = pino(transport)
logger.info('Hello')



================================================
FILE: test/fixtures/ts/transport-string-stdout.ts
================================================
import pino from '../../..'

const transport = pino.transport({
  target: 'pino/file',
  options: { destination: '1' }
})
const logger = pino(transport)
logger.info('Hello')



================================================
FILE: test/fixtures/ts/transport-worker.ts
================================================
import { Writable } from 'node:stream'

export default (): Writable => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, _enc, cb) {
      console.log(chunk.toString())
      cb()
    },
    defaultEncoding: 'utf8'
  })

  return myTransportStream
}



================================================
FILE: test/internals/version.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const path = require('node:path')

const pino = require('../..')()

test('should be the same as package.json', () => {
  const json = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'))
      .toString('utf8')
  )

  assert.equal(pino.version, json.version)
})



================================================
FILE: test/jest/basic.spec.js
================================================
/* global test */
const pino = require('../../pino')

test('transport should work in jest', function () {
  pino({
    transport: {
      target: 'pino-pretty'
    }
  })
})



================================================
FILE: test/transport/big.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')
const { createReadStream } = require('node:fs')
const { promisify } = require('node:util')
const stream = require('node:stream')
const execa = require('execa')
const split = require('split2')

const { file } = require('../helper')

const pipeline = promisify(stream.pipeline)
const { Writable } = stream
const sleep = promisify(setTimeout)

const skip = process.env.CI || process.env.CITGM

test('eight million lines', { skip }, async () => {
  const destination = file()
  await execa(process.argv[0], [join(__dirname, '..', 'fixtures', 'transport-many-lines.js'), destination])

  if (process.platform !== 'win32') {
    try {
      await execa('sync') // Wait for the file to be written to disk
    } catch {
      // Just a fallback, this should be unreachable
    }
  }
  await sleep(1_000) // It seems that sync is not enough (even in POSIX systems)

  const toWrite = 8 * 1_000_000
  let count = 0
  await pipeline(createReadStream(destination), split(), new Writable({
    write (chunk, enc, cb) {
      count++
      cb()
    }
  }))
  assert.equal(count, toWrite)
})



================================================
FILE: test/transport/bundlers-support.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { join } = require('node:path')
const { readFile } = require('node:fs').promises

const { watchFileCreated, file } = require('../helper')
const pino = require('../../pino')

const { pid } = process
const hostname = os.hostname()

test('pino.transport with destination overridden by bundler', async (t) => {
  globalThis.__bundlerPathsOverrides = {
    foobar: join(__dirname, '..', 'fixtures', 'to-file-transport.js')
  }

  const destination = file()
  const transport = pino.transport({
    target: 'foobar',
    options: { destination }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })

  globalThis.__bundlerPathsOverrides = undefined
})

test('pino.transport with worker destination overridden by bundler', async (t) => {
  globalThis.__bundlerPathsOverrides = {
    'pino-worker': join(__dirname, '..', '..', 'lib/worker.js')
  }

  const destination = file()
  const transport = pino.transport({
    targets: [
      {
        target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
        options: { destination }
      }
    ]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })

  globalThis.__bundlerPathsOverrides = undefined
})

test('pino.transport with worker destination overridden by bundler and mjs transport', async (t) => {
  globalThis.__bundlerPathsOverrides = {
    'pino-worker': join(__dirname, '..', '..', 'lib/worker.js')
  }

  const destination = file()
  const transport = pino.transport({
    targets: [
      {
        target: join(__dirname, '..', 'fixtures', 'ts', 'to-file-transport.es2017.cjs'),
        options: { destination }
      }
    ]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })

  globalThis.__bundlerPathsOverrides = undefined
})



================================================
FILE: test/transport/caller.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')
const execa = require('execa')

test('when using a custom transport outside node_modules, the first file outside node_modules should be used', async function () {
  const evalApp = join(__dirname, '../', '/fixtures/eval/index.js')
  const { stdout } = await execa(process.argv[0], [evalApp])
  assert.match(stdout, /done!/)
})

test('when using a custom transport where some files in stacktrace are in the node_modules, the first file outside node_modules should be used', async function () {
  const evalApp = join(__dirname, '../', '/fixtures/eval/node_modules/2-files.js')
  const { stdout } = await execa(process.argv[0], [evalApp])
  assert.match(stdout, /done!/)
})

test('when using a custom transport where all files in stacktrace are in the node_modules, the first file inside node_modules should be used', async function () {
  const evalApp = join(__dirname, '../', '/fixtures/eval/node_modules/14-files.js')
  const { stdout } = await execa(process.argv[0], [evalApp])
  assert.match(stdout, /done!/)
})



================================================
FILE: test/transport/core.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { join } = require('node:path')
const { once } = require('node:events')
const { setImmediate: immediate } = require('node:timers/promises')
const { readFile, writeFile } = require('node:fs').promises
const url = require('url')
const strip = require('strip-ansi')
const execa = require('execa')
const writer = require('flush-write-stream')
const rimraf = require('rimraf')
const tspl = require('@matteo.collina/tspl')

const { match, watchFileCreated, watchForWrite, file } = require('../helper')
const pino = require('../../')

const { tmpdir } = os
const pid = process.pid
const hostname = os.hostname()

test('pino.transport with file', async (t) => {
  const destination = file()
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with file (no options + error handling)', async () => {
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js')
  })
  const [err] = await once(transport, 'error')
  assert.equal(err.message, 'kaboom')
})

test('pino.transport with file URL', async (t) => {
  const destination = file()
  const transport = pino.transport({
    target: url.pathToFileURL(join(__dirname, '..', 'fixtures', 'to-file-transport.js')).href,
    options: { destination }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport errors if file does not exists', (t, end) => {
  const instance = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'non-existent-file'),
    worker: {
      stdin: true,
      stdout: true,
      stderr: true
    }
  })
  instance.on('error', function () {
    assert.ok('error received')
    end()
  })
})

test('pino.transport errors if transport worker module does not export a function', async (t) => {
  // TODO: add case for non-pipelined single target (needs changes in thread-stream)
  const plan = tspl(t, { plan: 2 })
  const manyTargetsInstance = pino.transport({
    targets: [{
      level: 'info',
      target: join(__dirname, '..', 'fixtures', 'transport-wrong-export-type.js')
    }, {
      level: 'info',
      target: join(__dirname, '..', 'fixtures', 'transport-wrong-export-type.js')
    }]
  })
  manyTargetsInstance.on('error', function (e) {
    plan.equal(e.message, 'exported worker is not a function')
  })

  const pipelinedInstance = pino.transport({
    pipeline: [{
      target: join(__dirname, '..', 'fixtures', 'transport-wrong-export-type.js')
    }]
  })
  pipelinedInstance.on('error', function (e) {
    plan.equal(e.message, 'exported worker is not a function')
  })

  await plan
})

test('pino.transport with esm', async (t) => {
  const destination = file()
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.mjs'),
    options: { destination }
  })
  const instance = pino(transport)
  t.after(transport.end.bind(transport))
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with two files', async (t) => {
  const dest1 = file()
  const dest2 = file()
  const transport = pino.transport({
    targets: [{
      level: 'info',
      target: 'file://' + join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest1 }
    }, {
      level: 'info',
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest2 }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])
  const result1 = JSON.parse(await readFile(dest1))
  delete result1.time
  assert.deepEqual(result1, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
  const result2 = JSON.parse(await readFile(dest2))
  delete result2.time
  assert.deepEqual(result2, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with two files and custom levels', async (t) => {
  const dest1 = file()
  const dest2 = file()
  const transport = pino.transport({
    targets: [{
      level: 'info',
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest1 }
    }, {
      level: 'foo',
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest2 }
    }],
    levels: { trace: 10, debug: 20, info: 30, warn: 40, error: 50, fatal: 60, foo: 25 }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])
  const result1 = JSON.parse(await readFile(dest1))
  delete result1.time
  assert.deepEqual(result1, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
  const result2 = JSON.parse(await readFile(dest2))
  delete result2.time
  assert.deepEqual(result2, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport without specifying default levels', async (t) => {
  const dest = file()
  const transport = pino.transport({
    targets: [{
      level: 'foo',
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest }
    }],
    levels: { foo: 25 }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await Promise.all([watchFileCreated(dest)])
  const result1 = JSON.parse(await readFile(dest))
  delete result1.time
  assert.deepEqual(result1, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with two files and dedupe', async (t) => {
  const dest1 = file()
  const dest2 = file()
  const transport = pino.transport({
    dedupe: true,
    targets: [{
      level: 'info',
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest1 }
    }, {
      level: 'error',
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination: dest2 }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  instance.error('world')
  await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])
  const result1 = JSON.parse(await readFile(dest1))
  delete result1.time
  assert.deepEqual(result1, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
  const result2 = JSON.parse(await readFile(dest2))
  delete result2.time
  assert.deepEqual(result2, {
    pid,
    hostname,
    level: 50,
    msg: 'world'
  })
})

test('pino.transport with an array including a pino-pretty destination', async (t) => {
  const dest1 = file()
  const dest2 = file()
  const transport = pino.transport({
    targets: [{
      level: 'info',
      target: 'pino/file',
      options: {
        destination: dest1
      }
    }, {
      level: 'info',
      target: 'pino-pretty',
      options: {
        destination: dest2
      }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])
  const result1 = JSON.parse(await readFile(dest1))
  delete result1.time
  assert.deepEqual(result1, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
  const actual = (await readFile(dest2)).toString()
  assert.match(strip(actual), /\[.*\] INFO.*hello/)
})

test('no transport.end()', async (t) => {
  const destination = file()
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination }
  })
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('autoEnd = false', async (t) => {
  const destination = file()
  const count = process.listenerCount('exit')
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination },
    worker: { autoEnd: false }
  })
  t.after(transport.end.bind(transport))
  await once(transport, 'ready')

  const instance = pino(transport)
  instance.info('hello')

  await watchFileCreated(destination)

  assert.equal(count, process.listenerCount('exit'))

  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with target and targets', async () => {
  assert.throws(
    () => {
      pino.transport({
        target: '/a/file',
        targets: [{
          target: '/a/file'
        }]
      })
    },
    /only one of target or targets can be specified/
  )
})

test('pino.transport with target pino/file', async (t) => {
  const destination = file()
  const transport = pino.transport({
    target: 'pino/file',
    options: { destination }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with target pino/file and mkdir option', async (t) => {
  const folder = join(tmpdir(), `pino-${process.pid}-mkdir-transport-file`)
  const destination = join(folder, 'log.txt')
  t.after(() => {
    try {
      rimraf.sync(folder)
    } catch (err) {
      // ignore
    }
  })
  const transport = pino.transport({
    target: 'pino/file',
    options: { destination, mkdir: true }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('pino.transport with target pino/file and append option', async (t) => {
  const destination = file()
  await writeFile(destination, JSON.stringify({ pid, hostname, time: Date.now(), level: 30, msg: 'hello' }))
  const transport = pino.transport({
    target: 'pino/file',
    options: { destination, append: false }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('goodbye')
  await watchForWrite(destination, '"goodbye"')
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'goodbye'
  })
})

test('pino.transport should error with unknown target', async () => {
  assert.throws(
    () => {
      pino.transport({
        target: 'origin',
        caller: 'unknown-file.js'
      })
    },
    /unable to determine transport target for "origin"/
  )
})

test('pino.transport with target pino-pretty', async (t) => {
  const destination = file()
  const transport = pino.transport({
    target: 'pino-pretty',
    options: { destination }
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const actual = await readFile(destination, 'utf8')
  assert.match(strip(actual), /\[.*\] INFO.*hello/)
})

test('sets worker data informing the transport that pino will send its config', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'transport-worker-data.js')
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  transport.once('workerData', (workerData) => {
    match(workerData.workerData, { pinoWillSendConfig: true })
    plan.ok('passed')
  })
  instance.info('hello')

  await plan
})

test('sets worker data informing the transport that pino will send its config (frozen file)', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const config = {
    transport: {
      target: join(__dirname, '..', 'fixtures', 'transport-worker-data.js'),
      options: {}
    }
  }
  Object.freeze(config)
  Object.freeze(config.transport)
  Object.freeze(config.transport.options)
  const instance = pino(config)
  const transport = instance[pino.symbols.streamSym]
  t.after(transport.end.bind(transport))
  transport.once('workerData', (workerData) => {
    match(workerData.workerData, { pinoWillSendConfig: true })
    plan.ok('passed')
  })
  instance.info('hello')

  await plan
})

test('stdout in worker', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, '..', 'fixtures', 'transport-main.js')])

  for await (const chunk of child.stdout) {
    actual += chunk
  }
  assert.equal(strip(actual).match(/Hello/) != null, true)
})

test('log and exit on ready', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, '..', 'fixtures', 'transport-exit-on-ready.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))
  await once(child, 'close')
  await immediate()
  assert.equal(strip(actual).match(/Hello/) != null, true)
})

test('log and exit before ready', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, '..', 'fixtures', 'transport-exit-immediately.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))
  await once(child, 'close')
  await immediate()
  assert.equal(strip(actual).match(/Hello/) != null, true)
})

test('log and exit before ready with async dest', async () => {
  const destination = file()
  const child = execa(process.argv[0], [join(__dirname, '..', 'fixtures', 'transport-exit-immediately-with-async-dest.js'), destination])

  await once(child, 'exit')

  const actual = await readFile(destination, 'utf8')
  assert.equal(strip(actual).match(/HELLO/) != null, true)
  assert.equal(strip(actual).match(/WORLD/) != null, true)
})

test('string integer destination', async () => {
  let actual = ''
  const child = execa(process.argv[0], [join(__dirname, '..', 'fixtures', 'transport-string-stdout.js')])

  child.stdout.pipe(writer((s, enc, cb) => {
    actual += s
    cb()
  }))
  await once(child, 'close')
  await immediate()
  assert.equal(strip(actual).match(/Hello/) != null, true)
})

test('pino transport options with target', async (t) => {
  const destination = file()
  const instance = pino({
    transport: {
      target: 'pino/file',
      options: { destination }
    }
  })
  const transportStream = instance[pino.symbols.streamSym]
  t.after(transportStream.end.bind(transportStream))
  instance.info('transport option test')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'transport option test'
  })
})

test('pino transport options with targets', async (t) => {
  const dest1 = file()
  const dest2 = file()
  const instance = pino({
    transport: {
      targets: [
        { target: 'pino/file', options: { destination: dest1 } },
        { target: 'pino/file', options: { destination: dest2 } }
      ]
    }
  })
  const transportStream = instance[pino.symbols.streamSym]
  t.after(transportStream.end.bind(transportStream))
  instance.info('transport option test')

  await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])
  const result1 = JSON.parse(await readFile(dest1))
  delete result1.time
  assert.deepEqual(result1, {
    pid,
    hostname,
    level: 30,
    msg: 'transport option test'
  })
  const result2 = JSON.parse(await readFile(dest2))
  delete result2.time
  assert.deepEqual(result2, {
    pid,
    hostname,
    level: 30,
    msg: 'transport option test'
  })
})

test('transport options with target and targets', async () => {
  assert.throws(
    () => {
      pino({
        transport: {
          target: {},
          targets: {}
        }
      })
    },
    /only one of target or targets can be specified/
  )
})

test('transport options with target and stream', async () => {
  assert.throws(
    () => {
      pino({
        transport: {
          target: {}
        }
      }, '/log/null')
    },
    /only one of option.transport or stream can be specified/
  )
})

test('transport options with stream', async (t) => {
  const dest1 = file()
  const transportStream = pino.transport({ target: 'pino/file', options: { destination: dest1 } })
  t.after(transportStream.end.bind(transportStream))
  assert.throws(
    () => {
      pino({
        transport: transportStream
      })
    },
    Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)')
  )
})



================================================
FILE: test/transport/core.transpiled.test.ts
================================================
import test from 'node:test'
import assert from 'node:assert'
import * as os from 'node:os'
import { join } from 'node:path'
import fs from 'node:fs'
import * as url from 'node:url'

import { watchFileCreated } from '../helper'
import pino from '../../'

const readFile = fs.promises.readFile

const { pid } = process
const hostname = os.hostname()

// A subset of the test from core.test.js, we don't need all of them to check for compatibility
function runTests(esVersion: string): void {
  test(`(ts -> ${esVersion}) pino.transport with file`, async (t) => {
    const destination = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const transport = pino.transport({
      target: join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`),
      options: { destination }
    })
    t.after(transport.end.bind(transport))
    const instance = pino(transport)
    instance.info('hello')
    await watchFileCreated(destination)
    const result = JSON.parse(await readFile(destination, { encoding: 'utf8' }))
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
  })

  test(`(ts -> ${esVersion}) pino.transport with file URL`, async (t) => {
    const destination = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const transport = pino.transport({
      target: url.pathToFileURL(join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`)).href,
      options: { destination }
    })
    t.after(transport.end.bind(transport))
    const instance = pino(transport)
    instance.info('hello')
    await watchFileCreated(destination)
    const result = JSON.parse(await readFile(destination, { encoding: 'utf8' }))
    delete result.time
    assert.deepEqual(result, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
  })

  test(`(ts -> ${esVersion}) pino.transport with two files`, async (t) => {
    const dest1 = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const dest2 = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const transport = pino.transport({
      targets: [{
        level: 'info',
        target: join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`),
        options: { destination: dest1 }
      }, {
        level: 'info',
        target: join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`),
        options: { destination: dest2 }
      }]
    })

    t.after(transport.end.bind(transport))

    const instance = pino(transport)
    instance.info('hello')

    await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])

    const result1 = JSON.parse(await readFile(dest1, { encoding: 'utf8' }))
    delete result1.time
    assert.deepEqual(result1, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
    const result2 = JSON.parse(await readFile(dest2, { encoding: 'utf8' }))
    delete result2.time
    assert.deepEqual(result2, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
  })
}

runTests('es5')
runTests('es6')
runTests('es2017')
runTests('esnext')



================================================
FILE: test/transport/crash.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')
const { once } = require('node:events')
const { setImmediate: immediate } = require('node:timers/promises')

const pino = require('../../')

test('pino.transport emits error if the worker exits with 0 unexpectably', async (t) => {
  // This test will take 10s, because flushSync waits for 10s
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'crashing-transport.js'),
    sync: true
  })
  t.after(transport.end.bind(transport))

  await once(transport, 'ready')

  let maybeError
  transport.on('error', (err) => {
    maybeError = err
  })

  const logger = pino(transport)
  for (let i = 0; i < 100000; i++) {
    logger.info('hello')
  }

  await once(transport.worker, 'exit')

  await immediate()

  assert.equal(maybeError.message, 'the worker has exited')
})



================================================
FILE: test/transport/module-link.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { join } = require('node:path')
const { readFile, symlink, unlink, mkdir, writeFile } = require('node:fs').promises
const { once } = require('node:events')
const execa = require('execa')
const rimraf = require('rimraf')

const { isWin, isYarnPnp, watchFileCreated, file } = require('../helper')
const pino = require('../../')

const { pid } = process
const hostname = os.hostname()

async function installTransportModule (target) {
  if (isYarnPnp) {
    return
  }
  try {
    await uninstallTransportModule()
  } catch {}

  if (!target) {
    target = join(__dirname, '..', '..')
  }

  await symlink(
    join(__dirname, '..', 'fixtures', 'transport'),
    join(target, 'node_modules', 'transport')
  )
}

async function uninstallTransportModule () {
  if (isYarnPnp) {
    return
  }
  await unlink(join(__dirname, '..', '..', 'node_modules', 'transport'))
}

// TODO make this test pass on Windows
test('pino.transport with package', { skip: isWin }, async (t) => {
  const destination = file()

  await installTransportModule()

  const transport = pino.transport({
    target: 'transport',
    options: { destination }
  })

  t.after(async () => {
    await uninstallTransportModule()
    transport.end()
  })
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

// TODO make this test pass on Windows
test('pino.transport with package as a target', { skip: isWin }, async (t) => {
  const destination = file()

  await installTransportModule()

  const transport = pino.transport({
    targets: [{
      target: 'transport',
      options: { destination }
    }]
  })
  t.after(async () => {
    await uninstallTransportModule()
    transport.end()
  })
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

// TODO make this test pass on Windows
test('pino({ transport })', { skip: isWin || isYarnPnp }, async (t) => {
  const folder = join(
    os.tmpdir(),
    '_' + Math.random().toString(36).substr(2, 9)
  )

  t.after(() => {
    rimraf.sync(folder)
  })

  const destination = join(folder, 'output')

  await mkdir(join(folder, 'node_modules'), { recursive: true })

  // Link pino
  await symlink(
    join(__dirname, '..', '..'),
    join(folder, 'node_modules', 'pino')
  )

  await installTransportModule(folder)

  const toRun = join(folder, 'index.js')

  const toRunContent = `
    const pino = require('pino')
    const logger = pino({
      transport: {
        target: 'transport',
        options: { destination: '${destination}' }
      }
    })
    logger.info('hello')
  `

  await writeFile(toRun, toRunContent)

  const child = execa(process.argv[0], [toRun])

  await once(child, 'close')

  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid: child.pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

// TODO make this test pass on Windows
test('pino({ transport }) from a wrapped dependency', { skip: isWin || isYarnPnp }, async (t) => {
  const folder = join(
    os.tmpdir(),
    '_' + Math.random().toString(36).substr(2, 9)
  )

  const wrappedFolder = join(
    os.tmpdir(),
    '_' + Math.random().toString(36).substr(2, 9)
  )

  const destination = join(folder, 'output')

  await mkdir(join(folder, 'node_modules'), { recursive: true })
  await mkdir(join(wrappedFolder, 'node_modules'), { recursive: true })

  t.after(() => {
    rimraf.sync(wrappedFolder)
    rimraf.sync(folder)
  })

  // Link pino
  await symlink(
    join(__dirname, '..', '..'),
    join(wrappedFolder, 'node_modules', 'pino')
  )

  // Link get-caller-file
  await symlink(
    join(__dirname, '..', '..', 'node_modules', 'get-caller-file'),
    join(wrappedFolder, 'node_modules', 'get-caller-file')
  )

  // Link wrapped
  await symlink(
    wrappedFolder,
    join(folder, 'node_modules', 'wrapped')
  )

  await installTransportModule(folder)

  const pkgjsonContent = {
    name: 'pino'
  }

  await writeFile(join(wrappedFolder, 'package.json'), JSON.stringify(pkgjsonContent))

  const wrapped = join(wrappedFolder, 'index.js')

  const wrappedContent = `
    const pino = require('pino')
    const getCaller = require('get-caller-file')

    module.exports = function build () {
      const logger = pino({
        transport: {
          caller: getCaller(),
          target: 'transport',
          options: { destination: '${destination}' }
        }
      })
      return logger
    }
  `

  await writeFile(wrapped, wrappedContent)

  const toRun = join(folder, 'index.js')

  const toRunContent = `
    const logger = require('wrapped')()
    logger.info('hello')
  `

  await writeFile(toRun, toRunContent)

  const child = execa(process.argv[0], [toRun])

  await once(child, 'close')

  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid: child.pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})



================================================
FILE: test/transport/pipeline.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { join } = require('node:path')
const { readFile } = require('node:fs').promises

const { watchFileCreated, file } = require('../helper')
const pino = require('../../')
const { DEFAULT_LEVELS } = require('../../lib/constants')

const { pid } = process
const hostname = os.hostname()

test('pino.transport with a pipeline', async (t) => {
  const destination = file()
  const transport = pino.transport({
    pipeline: [{
      target: join(__dirname, '..', 'fixtures', 'transport-transform.js')
    }, {
      target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
      options: { destination }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: DEFAULT_LEVELS.info,
    msg: 'hello',
    service: 'pino' // this property was added by the transform
  })
})

test('pino.transport with targets containing pipelines', async (t) => {
  const destinationA = file()
  const destinationB = file()
  const transport = pino.transport({
    targets: [
      {
        target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
        options: { destination: destinationA }
      },
      {
        pipeline: [
          {
            target: join(__dirname, '..', 'fixtures', 'transport-transform.js')
          },
          {
            target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
            options: { destination: destinationB }
          }
        ]
      }
    ]
  })

  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello')
  await watchFileCreated(destinationA)
  await watchFileCreated(destinationB)
  const resultA = JSON.parse(await readFile(destinationA))
  const resultB = JSON.parse(await readFile(destinationB))
  delete resultA.time
  delete resultB.time
  assert.deepEqual(resultA, {
    pid,
    hostname,
    level: DEFAULT_LEVELS.info,
    msg: 'hello'
  })
  assert.deepEqual(resultB, {
    pid,
    hostname,
    level: DEFAULT_LEVELS.info,
    msg: 'hello',
    service: 'pino' // this property was added by the transform
  })
})

test('pino.transport with targets containing pipelines with levels defined and dedupe', async (t) => {
  const destinationA = file()
  const destinationB = file()
  const transport = pino.transport({
    targets: [
      {
        target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
        options: { destination: destinationA },
        level: DEFAULT_LEVELS.info
      },
      {
        pipeline: [
          {
            target: join(__dirname, '..', 'fixtures', 'transport-transform.js')
          },
          {
            target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
            options: { destination: destinationB }
          }
        ],
        level: DEFAULT_LEVELS.error
      }
    ],
    dedupe: true
  })

  t.after(transport.end.bind(transport))
  const instance = pino(transport)
  instance.info('hello info')
  instance.error('hello error')
  await watchFileCreated(destinationA)
  await watchFileCreated(destinationB)
  const resultA = JSON.parse(await readFile(destinationA))
  const resultB = JSON.parse(await readFile(destinationB))
  delete resultA.time
  delete resultB.time
  assert.deepEqual(resultA, {
    pid,
    hostname,
    level: DEFAULT_LEVELS.info,
    msg: 'hello info'
  })
  assert.deepEqual(resultB, {
    pid,
    hostname,
    level: DEFAULT_LEVELS.error,
    msg: 'hello error',
    service: 'pino' // this property was added by the transform
  })
})



================================================
FILE: test/transport/repl.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const proxyquire = require('proxyquire')

test('pino.transport resolves targets in REPL', async () => {
  // Arrange
  const transport = proxyquire('../../lib/transport', {
    './caller': () => ['node:repl']
  })

  // Act / Assert
  assert.doesNotThrow(() => transport({ target: 'pino-pretty' }))
})



================================================
FILE: test/transport/sync-false.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { join } = require('node:path')
const { readFile } = require('node:fs').promises
const { promisify } = require('node:util')

const pino = require('../..')
const { watchFileCreated, file } = require('../helper')

const { pid } = process
const hostname = os.hostname()

test('thread-stream async flush', async () => {
  const destination = file()
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination }
  })
  const instance = pino(transport)
  instance.info('hello')

  assert.equal(instance.flush(), undefined)

  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  assert.deepEqual(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('thread-stream async flush should call the passed callback', async () => {
  const outputPath = file()
  async function getOutputLogLines () {
    return (await readFile(outputPath)).toString().trim().split('\n').map(JSON.parse)
  }
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination: outputPath }
  })
  const instance = pino(transport)
  const flushPromise = promisify(instance.flush).bind(instance)

  instance.info('hello')
  await flushPromise()
  await watchFileCreated(outputPath)

  const [firstFlushData] = await getOutputLogLines()

  assert.equal(firstFlushData.msg, 'hello')

  // should not flush this as no data accumulated that's bigger than min length
  instance.info('world')

  // Making sure data is not flushed yet
  const afterLogData = await getOutputLogLines()
  assert.equal(afterLogData.length, 1)

  await flushPromise()

  // Making sure data is not flushed yet
  const afterSecondFlush = (await getOutputLogLines())[1]
  assert.equal(afterSecondFlush.msg, 'world')
})



================================================
FILE: test/transport/sync-true.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const { join } = require('node:path')
const { readFileSync } = require('node:fs')

const { file } = require('../helper')
const pino = require('../..')

test('thread-stream sync true should log synchronously', async () => {
  const outputPath = file()

  function getOutputLogLines () {
    return (readFileSync(outputPath)).toString().trim().split('\n').map(JSON.parse)
  }

  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination: outputPath, flush: true },
    sync: true
  })
  const instance = pino(transport)

  var value = { message: 'sync' }
  instance.info(value)
  instance.info(value)
  instance.info(value)
  instance.info(value)
  instance.info(value)
  instance.info(value)
  let interrupt = false
  let flushData
  let loopCounter = 0

  // Start a synchronous loop
  while (!interrupt && loopCounter < (process.env.MAX_TEST_LOOP_ITERATION || 20000)) {
    try {
      loopCounter++
      const data = getOutputLogLines()
      flushData = data
      if (data) {
        interrupt = true
        break
      }
    } catch (error) {
      // File may not exist yet
      // Wait till MAX_TEST_LOOP_ITERATION iterations
    }
  }

  if (!interrupt) {
    throw new Error('Sync loop did not get interrupt')
  }

  assert.equal(flushData.length, 6)
})



================================================
FILE: test/transport/targets.test.js
================================================
'use strict'

const test = require('node:test')
const { join } = require('node:path')
const Writable = require('node:stream').Writable
const proxyquire = require('proxyquire')
const tspl = require('@matteo.collina/tspl')
const pino = require('../../pino')

test('file-target mocked', async function (t) {
  const plan = tspl(t, { plan: 1 })
  let ret
  const fileTarget = proxyquire('../../file', {
    './pino': {
      destination (opts) {
        plan.deepEqual(opts, { dest: 1, sync: false })

        ret = new Writable()
        ret.fd = opts.dest

        process.nextTick(() => {
          ret.emit('ready')
        })

        return ret
      }
    }
  })

  await fileTarget()
  await plan
})

test('pino.transport with syntax error', async (t) => {
  const plan = tspl(t, { plan: 1 })
  const transport = pino.transport({
    targets: [{
      target: join(__dirname, '..', 'fixtures', 'syntax-error-esm.mjs')
    }]
  })
  t.after(transport.end.bind(transport))

  transport.on('error', (err) => {
    plan.deepEqual(err, new SyntaxError('Unexpected end of input'))
  })

  await plan
})



================================================
FILE: test/transport/uses-pino-config.test.js
================================================
'use strict'

const test = require('node:test')
const assert = require('node:assert')
const os = require('node:os')
const { join } = require('node:path')
const { readFile } = require('node:fs').promises
const writeStream = require('flush-write-stream')

const { watchFileCreated, file } = require('../helper')
const pino = require('../../')

const { pid } = process
const hostname = os.hostname()

function serializeError (error) {
  return {
    type: error.name,
    message: error.message,
    stack: error.stack
  }
}

function parseLogs (buffer) {
  return JSON.parse(`[${buffer.toString().replace(/}{/g, '},{')}]`)
}

test('transport uses pino config', async (t) => {
  const destination = file()
  const transport = pino.transport({
    pipeline: [{
      target: join(__dirname, '..', 'fixtures', 'transport-uses-pino-config.js')
    }, {
      target: 'pino/file',
      options: { destination }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino({
    messageKey: 'customMessageKey',
    errorKey: 'customErrorKey',
    customLevels: { custom: 35 }
  }, transport)

  const error = new Error('bar')
  instance.custom('foo')
  instance.error(error)
  await watchFileCreated(destination)
  const result = parseLogs(await readFile(destination))

  assert.deepEqual(result, [{
    severityText: 'custom',
    body: 'foo',
    attributes: {
      pid,
      hostname
    }
  }, {
    severityText: 'error',
    body: 'bar',
    attributes: {
      pid,
      hostname
    },
    error: serializeError(error)
  }])
})

test('transport uses pino config without customizations', async (t) => {
  const destination = file()
  const transport = pino.transport({
    pipeline: [{
      target: join(__dirname, '..', 'fixtures', 'transport-uses-pino-config.js')
    }, {
      target: 'pino/file',
      options: { destination }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino(transport)

  const error = new Error('qux')
  instance.info('baz')
  instance.error(error)
  await watchFileCreated(destination)
  const result = parseLogs(await readFile(destination))

  assert.deepEqual(result, [{
    severityText: 'info',
    body: 'baz',
    attributes: {
      pid,
      hostname
    }
  }, {
    severityText: 'error',
    body: 'qux',
    attributes: {
      pid,
      hostname
    },
    error: serializeError(error)
  }])
})

test('transport uses pino config with multistream', async (t) => {
  const destination = file()
  const messages = []
  const stream = writeStream(function (data, enc, cb) {
    const message = JSON.parse(data)
    delete message.time
    messages.push(message)
    cb()
  })
  const transport = pino.transport({
    pipeline: [{
      target: join(__dirname, '..', 'fixtures', 'transport-uses-pino-config.js')
    }, {
      target: 'pino/file',
      options: { destination }
    }]
  })
  t.after(transport.end.bind(transport))
  const instance = pino({
    messageKey: 'customMessageKey',
    errorKey: 'customErrorKey',
    customLevels: { custom: 35 }
  }, pino.multistream([transport, { stream }]))

  const error = new Error('buzz')
  const serializedError = serializeError(error)
  instance.custom('fizz')
  instance.error(error)
  await watchFileCreated(destination)
  const result = parseLogs(await readFile(destination))

  assert.deepEqual(result, [{
    severityText: 'custom',
    body: 'fizz',
    attributes: {
      pid,
      hostname
    }
  }, {
    severityText: 'error',
    body: 'buzz',
    attributes: {
      pid,
      hostname
    },
    error: serializedError
  }])

  assert.deepEqual(messages, [{
    level: 35,
    pid,
    hostname,
    customMessageKey: 'fizz'
  }, {
    level: 50,
    pid,
    hostname,
    customErrorKey: serializedError,
    customMessageKey: 'buzz'
  }])
})



================================================
FILE: test/types/pino-import.test-d.cts
================================================
import { expectType } from "tsd";

import * as pinoStar from "../../pino";
import { default as P, default as pino, pino as pinoNamed } from '../../pino';
import pinoCjsImport = require ("../../pino");
const pinoCjs = require("../../pino");
const { P: pinoCjsNamed } = require('pino')

const log = pino();
expectType<P.LogFn>(log.info);
expectType<P.LogFn>(log.error);

expectType<pino.Logger>(pinoNamed());
expectType<P.Logger>(pinoNamed());
expectType<pino.Logger>(pinoStar.default());
expectType<pino.Logger>(pinoStar.pino());
// expectType<pino.Logger>(pinoCjsImport.default());
expectType<pino.Logger>(pinoCjsImport.pino());
expectType<any>(pinoCjsNamed());
expectType<any>(pinoCjs());
expectType<P.TimeFn>(pinoNamed.stdTimeFunctions.isoTimeNano)
expectType<string>(pinoNamed.stdTimeFunctions.isoTimeNano())

const levelChangeEventListener: P.LevelChangeEventListener = (
    lvl: P.LevelWithSilent | string,
    val: number,
    prevLvl: P.LevelWithSilent | string,
    prevVal: number,
) => {}
expectType<P.LevelChangeEventListener>(levelChangeEventListener)



================================================
FILE: test/types/pino-multistream.test-d.ts
================================================
import { expectType } from 'tsd'

import { createWriteStream } from 'node:fs'

import pino, { multistream } from '../../pino'

const streams = [
  { stream: process.stdout },
  { stream: createWriteStream('') },
  { level: 'error' as const, stream: process.stderr },
  { level: 'fatal' as const, stream: process.stderr },
]

expectType<pino.MultiStreamRes>(pino.multistream(process.stdout))
expectType<pino.MultiStreamRes>(pino.multistream([createWriteStream('')]))
expectType<pino.MultiStreamRes<'error'>>(pino.multistream({ level: 'error' as const, stream: process.stderr }))
expectType<pino.MultiStreamRes<'fatal'>>(pino.multistream([{ level: 'fatal' as const, stream: createWriteStream('') }]))

expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams, {}))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams, { levels: { 'info': 30 } }))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams, { dedupe: true }))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(pino.multistream(streams[0]).add(streams[1]))
expectType<pino.MultiStreamRes<'error' | 'fatal'>>(multistream(streams))
expectType<pino.MultiStreamRes<'error'>>(multistream(streams).clone('error'))


expectType<pino.MultiStreamRes>(multistream(process.stdout));



================================================
FILE: test/types/pino-top-export.test-d.ts
================================================
import { expectType, expectAssignable } from 'tsd'
import type { SonicBoom } from "sonic-boom";

import {
    destination,
    LevelMapping,
    levels,
    Logger,
    multistream,
    MultiStreamRes,
    SerializedError,
    stdSerializers,
    stdTimeFunctions,
    symbols,
    transport,
    version,
} from "../../pino";
import pino from "../../pino";

expectType<SonicBoom>(destination(""));
expectType<LevelMapping>(levels);
expectType<MultiStreamRes>(multistream(process.stdout));
expectType<SerializedError>(stdSerializers.err({} as any));
expectType<string>(stdTimeFunctions.isoTime());
expectType<string>(stdTimeFunctions.isoTimeNano());
expectType<string>(version);

// Can't test against `unique symbol`, see https://github.com/SamVerschueren/tsd/issues/49
expectAssignable<Symbol>(symbols.endSym);

// TODO: currently returns (aliased) `any`, waiting for strong typed `thread-stream`
transport({
    target: '#pino/pretty',
    options: { some: 'options for', the: 'transport' }
});




================================================
FILE: test/types/pino-transport.test-d.ts
================================================
import pino from '../../pino'
import { expectType } from "tsd";

// Single
const transport = pino.transport({
    target: '#pino/pretty',
    options: { some: 'options for', the: 'transport' }
})
pino(transport)

expectType<pino.Logger>(pino({
    transport: {
        target: 'pino-pretty'
    },
}))

// Multiple
const transports = pino.transport({targets: [
    {
        level: 'info',
        target: '#pino/pretty',
        options: { some: 'options for', the: 'transport' }
    },
    {
        level: 'trace',
        target: '#pino/file',
        options: { destination: './test.log' }
    }
]})
pino(transports)

expectType<pino.Logger>(pino({
    transport: {targets: [
            {
                level: 'info',
                target: '#pino/pretty',
                options: { some: 'options for', the: 'transport' }
            },
            {
                level: 'trace',
                target: '#pino/file',
                options: { destination: './test.log' }
            }
        ]},
}))

const transportsWithCustomLevels = pino.transport({targets: [
    {
        level: 'info',
        target: '#pino/pretty',
        options: { some: 'options for', the: 'transport' }
    },
    {
        level: 'foo',
        target: '#pino/file',
        options: { destination: './test.log' }
    }
], levels: { foo: 35 }})
pino(transports)

expectType<pino.Logger>(pino({
    transport: {targets: [
            {
                level: 'info',
                target: '#pino/pretty',
                options: { some: 'options for', the: 'transport' }
            },
            {
                level: 'trace',
                target: '#pino/file',
                options: { destination: './test.log' }
            }
        ], levels: { foo: 35 }
    },
}))

const transportsWithoutOptions = pino.transport({
    targets: [
        { target: '#pino/pretty' },
        { target: '#pino/file' }
    ], levels: { foo: 35 }
})
pino(transports)

expectType<pino.Logger>(pino({
    transport: {
        targets: [
            { target: '#pino/pretty' },
            { target: '#pino/file' }
        ], levels: { foo: 35 }
    },
}))

const pipelineTransport = pino.transport({
    pipeline: [{
        target: './my-transform.js'
    }, {
        // Use target: 'pino/file' to write to stdout
        // without any change.
        target: 'pino-pretty'
    }]
})
pino(pipelineTransport)

expectType<pino.Logger>(pino({
    transport: {
        pipeline: [{
            target: './my-transform.js'
        }, {
            // Use target: 'pino/file' to write to stdout
            // without any change.
            target: 'pino-pretty'
        }]
    }
}))

type TransportConfig = {
    id: string
}

// Custom transport params
const customTransport = pino.transport<TransportConfig>({
    target: 'custom',
    options: { id: 'abc' }
})
pino(customTransport)

// Worker
pino.transport({
    target: 'custom',
    worker: {
        argv: ['a', 'b'],
        stdin: false,
        stderr: true,
        stdout: false,
        autoEnd: true,
    },
    options: { id: 'abc' }
})

// Dedupe
pino.transport({
    targets: [],
    dedupe: true,
})



================================================
FILE: test/types/pino-type-only.test-d.ts
================================================
import { expectAssignable, expectType, expectNotAssignable } from "tsd";

import pino from "../../";
import type {LevelWithSilent, Logger, LogFn, DestinationStreamWithMetadata,  Level, LevelOrString, LevelWithSilentOrString, LoggerExtras, LoggerOptions } from "../../pino";

// NB: can also use `import * as pino`, but that form is callable as `pino()`
// under `esModuleInterop: false` or `pino.default()` under `esModuleInterop: true`.
const log = pino();
expectAssignable<LoggerExtras>(log);
expectType<Logger>(log);
expectType<LogFn>(log.info);

expectType<Parameters<typeof log.isLevelEnabled>>([log.level]);

const level: Level = 'debug';
expectAssignable<string>(level);

const levelWithSilent: LevelWithSilent = 'silent';
expectAssignable<string>(levelWithSilent);

const levelOrString: LevelOrString = "myCustomLevel";
expectAssignable<string>(levelOrString);
expectNotAssignable<pino.Level>(levelOrString);
expectNotAssignable<pino.LevelWithSilent>(levelOrString);
expectAssignable<pino.LevelWithSilentOrString>(levelOrString);

const levelWithSilentOrString: LevelWithSilentOrString = "myCustomLevel";
expectAssignable<string>(levelWithSilentOrString);
expectNotAssignable<pino.Level>(levelWithSilentOrString);
expectNotAssignable<pino.LevelWithSilent>(levelWithSilentOrString);
expectAssignable<pino.LevelOrString>(levelWithSilentOrString);

function createStream(): DestinationStreamWithMetadata {
    return { write() {} };
}

const stream = createStream();
// Argh. TypeScript doesn't seem to narrow unless we assign the symbol like so, and tsd seems to
// break without annotating the type explicitly
const needsMetadata: typeof pino.symbols.needsMetadataGsym = pino.symbols.needsMetadataGsym;
if (stream[needsMetadata]) {
    expectType<number>(stream.lastLevel);
}

const loggerOptions:LoggerOptions = {
    browser: {
        formatters: {
            log(obj) {
                return obj
            },
            level(label, number) {
                return { label, number}
            }

        }
    }
}

expectType<LoggerOptions>(loggerOptions)

// Reference: https://github.com/pinojs/pino/issues/2285
const someConst = "test" as const;
pino().error({}, someConst);
const someFunc = <T extends typeof someConst>(someConst: T) => {
    pino().error({}, someConst);
};



================================================
FILE: test/types/pino.test-d.ts
================================================
import { IncomingMessage, ServerResponse } from "http";
import { mock } from 'node:test'
import { Socket } from "net";
import { expectError, expectType } from 'tsd';
import pino, { LogFn, LoggerOptions } from "../../";
import Logger = pino.Logger;

const log = pino();
const info = log.info;
const error = log.error;

info("hello world");
error("this is at error level");

// primitive types
info('simple string');
info(true)
info(42);
info(3.14);
info(null);
info(undefined);

// object types
info({ a: 1, b: '2' });
info(new Error());
info(new Date());
info([])
info(new Map());
info(new Set());

// placeholder messages
info('Hello %s', 'world');
info('The answer is %d', 42);
info('The object is %o', { a: 1, b: '2' });
info('The json is %j', { a: 1, b: '2' });
info('The object is %O', { a: 1, b: '2' });
info('The answer is %d and the question is %s with %o', 42, 'unknown', { correct: 'order' });
info('Missing placeholder is fine %s');

// %s placeholder supports all primitive types
info('Boolean %s', true);
info('Boolean %s', false);
info('Number %s', 123);
info('Number %s', 3.14);
info('BigInt %s', BigInt(123));
info('Null %s', null);
info('Undefined %s', undefined);
info('Symbol %s', Symbol('test'));
info('String %s', 'hello');

// %s placeholder with multiple primitives
info('Multiple primitives %s %s %s', true, 42, 'world');
info('All primitive types %s %s %s %s %s %s %s', 'string', 123, true, BigInt(123), null, undefined, Symbol('test'));
declare const errorOrString: string | Error;
info(errorOrString)

// placeholder messages type errors
expectError(info('The answer is %d', 'not a number'));
expectError(info('The object is %o', 'not an object'));
expectError(info('The object is %j', 'not a JSON'));
expectError(info('The object is %O', 'not an object'));
expectError(info('The answer is %d and the question is %s with %o', 42, { incorrect: 'order' }, 'unknown'));
expectError(info('Extra message %s', 'after placeholder', 'not allowed'));

// object types with messages
info({ obj: 42 }, "hello world");
info({ obj: 42, b: 2 }, "hello world");
info({ obj: { aa: "bbb" } }, "another");
info({ a: 1, b: '2' }, 'hello world with %s', 'extra data');

// Extra message after placeholder
expectError(info({ a: 1, b: '2' }, 'hello world with %d', 2, 'extra' ));

// metadata with messages type passes, because of custom toString method
// We can't detect if the object has a custom toString method that returns a string
info({ a: 1, b: '2' }, 'hello world with %s', {});

// metadata after message
expectError(info('message', { a: 1, b: '2' }));

// multiple strings without placeholder
expectError(info('string1', 'string2'));
expectError(info('string1', 'string2', 'string3'));

setImmediate(info, "after setImmediate");
error(new Error("an error"));

const writeSym = pino.symbols.writeSym;

const testUniqSymbol = {
    [pino.symbols.needsMetadataGsym]: true,
}[pino.symbols.needsMetadataGsym];

const log2: pino.Logger = pino({
    name: "myapp",
    safe: true,
    serializers: {
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res,
        err: pino.stdSerializers.err,
    },
});

pino({
    write(o) {},
});

pino({
    mixin() {
        return { customName: "unknown", customId: 111 };
    },
});

pino({
    mixin: () => ({ customName: "unknown", customId: 111 }),
});

pino({
    mixin: (context: object) => ({ customName: "unknown", customId: 111 }),
});

pino({
    mixin: (context: object, level: number) => ({ customName: "unknown", customId: 111 }),
});

pino({
    redact: { paths: [], censor: "SECRET" },
});

pino({
    redact: { paths: [], censor: () => "SECRET" },
});

pino({
    redact: { paths: [], censor: (value) => value },
});

pino({
    redact: { paths: [], censor: (value, path) => path.join() },
});

pino({
		redact: {
				paths: [],
				censor: (value): string => 'SECRET',
		},
});

expectError(pino({
    redact: { paths: [], censor: (value: string) => value },
}));

pino({
    depthLimit: 1
});

pino({
    edgeLimit: 1
});

pino({
    browser: {
        write(o) {},
    },
});

pino({
    browser: {
        write: {
            info(o) {},
            error(o) {},
        },
        serialize: true,
        asObject: true,
        transmit: {
            level: "fatal",
            send: (level, logEvent) => {
                level;
                logEvent.bindings;
                logEvent.level;
                logEvent.ts;
                logEvent.messages;
            },
        },
        disabled: false
    },
});

pino({
  browser: {
    asObjectBindingsOnly: true,
  }
});

pino({}, undefined);

pino({ base: null });
if ("pino" in log) console.log(`pino version: ${log.pino}`);

expectType<void>(log.flush());
log.flush((err?: Error) => undefined);
log.child({ a: "property" }).info("hello child!");
log.level = "error";
log.info("nope");
const child = log.child({ foo: "bar" });
child.info("nope again");
child.level = "info";
child.info("hooray");
log.info("nope nope nope");
log.child({ foo: "bar" }, { level: "debug" }).debug("debug!");
child.bindings();
const customSerializers = {
    test() {
        return "this is my serializer";
    },
};
pino().child({}, { serializers: customSerializers }).info({ test: "should not show up" });
const child2 = log.child({ father: true });
const childChild = child2.child({ baby: true });
const childRedacted = pino().child({}, { redact: ["path"] })
childRedacted.info({
  msg: "logged with redacted properties",
  path: "Not shown",
});
const childAnotherRedacted = pino().child({}, {
    redact: {
        paths: ["anotherPath"],
        censor: "Not the log you\re looking for",
    }
})
childAnotherRedacted.info({
    msg: "another logged with redacted properties",
    anotherPath: "Not shown",
});

log.level = "info";
if (log.levelVal === 30) {
    console.log("logger level is `info`");
}

const listener = (lvl: any, val: any, prevLvl: any, prevVal: any) => {
    console.log(lvl, val, prevLvl, prevVal);
};
log.on("level-change", (lvl, val, prevLvl, prevVal, logger) => {
    console.log(lvl, val, prevLvl, prevVal);
});
log.level = "trace";
log.removeListener("level-change", listener);
log.level = "info";

pino.levels.values.error === 50;
pino.levels.labels[50] === "error";

const logstderr: pino.Logger = pino(process.stderr);
logstderr.error("on stderr instead of stdout");

log.useLevelLabels = true;
log.info("lol");
log.level === "info";
const isEnabled: boolean = log.isLevelEnabled("info");

const redacted = pino({
    redact: ["path"],
});

redacted.info({
    msg: "logged with redacted properties",
    path: "Not shown",
});

const anotherRedacted = pino({
    redact: {
        paths: ["anotherPath"],
        censor: "Not the log you\re looking for",
    },
});

anotherRedacted.info({
    msg: "another logged with redacted properties",
    anotherPath: "Not shown",
});

const withTimeFn = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
});

const withRFC3339TimeFn = pino({
    timestamp: pino.stdTimeFunctions.isoTimeNano,
});

const withNestedKey = pino({
    nestedKey: "payload",
});

const withHooks = pino({
    hooks: {
        logMethod(args, method, level) {
            expectType<pino.Logger>(this);
            return method.apply(this, args);
        },
        streamWrite(s) {
            expectType<string>(s);
            return s.replaceAll('secret-key', 'xxx');
        },
    },
});

// Properties/types imported from pino-std-serializers
const wrappedErrSerializer = pino.stdSerializers.wrapErrorSerializer((err: pino.SerializedError) => {
    return { ...err, newProp: "foo" };
});
const wrappedReqSerializer = pino.stdSerializers.wrapRequestSerializer((req: pino.SerializedRequest) => {
    return { ...req, newProp: "foo" };
});
const wrappedResSerializer = pino.stdSerializers.wrapResponseSerializer((res: pino.SerializedResponse) => {
    return { ...res, newProp: "foo" };
});

const socket = new Socket();
const incomingMessage = new IncomingMessage(socket);
const serverResponse = new ServerResponse(incomingMessage);

const mappedHttpRequest: { req: pino.SerializedRequest } = pino.stdSerializers.mapHttpRequest(incomingMessage);
const mappedHttpResponse: { res: pino.SerializedResponse } = pino.stdSerializers.mapHttpResponse(serverResponse);

const serializedErr: pino.SerializedError = pino.stdSerializers.err(new Error());
const serializedReq: pino.SerializedRequest = pino.stdSerializers.req(incomingMessage);
const serializedRes: pino.SerializedResponse = pino.stdSerializers.res(serverResponse);

/**
 * Destination static method
 */
const destinationViaDefaultArgs = pino.destination();
const destinationViaStrFileDescriptor = pino.destination("/log/path");
const destinationViaNumFileDescriptor = pino.destination(2);
const destinationViaStream = pino.destination(process.stdout);
const destinationViaOptionsObject = pino.destination({ dest: "/log/path", sync: false });

pino(destinationViaDefaultArgs);
pino({ name: "my-logger" }, destinationViaDefaultArgs);
pino(destinationViaStrFileDescriptor);
pino({ name: "my-logger" }, destinationViaStrFileDescriptor);
pino(destinationViaNumFileDescriptor);
pino({ name: "my-logger" }, destinationViaNumFileDescriptor);
pino(destinationViaStream);
pino({ name: "my-logger" }, destinationViaStream);
pino(destinationViaOptionsObject);
pino({ name: "my-logger" }, destinationViaOptionsObject);

try {
    throw new Error('Some error')
} catch (err) {
    log.error(err)
}

interface StrictShape {
    activity: string;
    err?: unknown;
}

info<StrictShape>({
    activity: "Required property",
});

const logLine: pino.LogDescriptor = {
    level: 20,
    msg: "A log message",
    time: new Date().getTime(),
    aCustomProperty: true,
};

interface CustomLogger extends pino.Logger {
    customMethod(msg: string, ...args: unknown[]): void;
}

const serializerFunc: pino.SerializerFn = () => {}
const writeFunc: pino.WriteFn = () => {}

interface CustomBaseLogger extends pino.BaseLogger {
  child(): CustomBaseLogger
}

const customBaseLogger: CustomBaseLogger = {
  level: 'info',
  fatal() {},
  error() {},
  warn() {},
  info() {},
  debug() {},
  trace() {},
  silent() {},
  child() { return this },
  msgPrefix: 'prefix',
}

// custom levels
const log3 = pino({ customLevels: { myLevel: 100 } })
expectError(log3.log())
log3.level = 'myLevel'
log3.myLevel('')
log3.child({}).myLevel('')

log3.on('level-change', (lvl, val, prevLvl, prevVal, instance) => {
    instance.myLevel('foo');
});

const clog3 = log3.child({}, { customLevels: { childLevel: 120 } })
// child inherit parent
clog3.myLevel('')
// child itself
clog3.childLevel('')
const cclog3 = clog3.child({}, { customLevels: { childLevel2: 130 } })
// child inherit root
cclog3.myLevel('')
// child inherit parent
cclog3.childLevel('')
// child itself
cclog3.childLevel2('')

const ccclog3 = clog3.child({})
expectError(ccclog3.nonLevel(''))

const withChildCallback = pino({
    onChild: (child: Logger) => {}
})
withChildCallback.onChild = (child: Logger) => {}

pino({
    crlf: true,
});

const customLevels = { foo: 99, bar: 42 }

const customLevelLogger = pino({ customLevels });

type CustomLevelLogger = typeof customLevelLogger
type CustomLevelLoggerLevels = pino.Level | keyof typeof customLevels

const fn = (logger: Pick<CustomLevelLogger, CustomLevelLoggerLevels>) => {}

const customLevelChildLogger = customLevelLogger.child({ name: "child" })

fn(customLevelChildLogger); // missing foo typing

// unknown option
expectError(
  pino({
    hello: 'world'
  })
);

// unknown option
expectError(
  pino({
    hello: 'world',
    customLevels: {
      'log': 30
    }
  })
);

function dangerous () {
  throw Error('foo')
}

try {
  dangerous()
} catch (err) {
  log.error(err)
}

try {
  dangerous()
} catch (err) {
  log.error({ err })
}

const bLogger = pino({
  customLevels: {
    log: 5,
  },
  level: 'log',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

// Test that we can properly extract parameters from the log fn type
type LogParam = Parameters<LogFn>
const [param1, param2, param3, param4]: LogParam = [{ multiple: 'params' }, 'should', 'be', 'accepted']

expectType<unknown>(param1)
expectType<string>(param2)
expectType<unknown>(param3)
expectType<unknown>(param4)

const logger = mock.fn<LogFn>()
logger.mock.calls[0].arguments[1]?.includes('I should be able to get params')

const hooks: LoggerOptions['hooks'] = {
    logMethod(this, parameters, method) {
        if (parameters.length >= 2) {
        const [parameter1, parameter2, ...remainingParameters] = parameters;
        if (typeof parameter1 === 'string') {
            return method.apply(this, [parameter2, parameter1, ...remainingParameters]);
        }
        return method.apply(this, [parameter2]);
        }

        return method.apply(this, parameters);
    }
}

expectType<Logger<'log'>>(pino({
  customLevels: {
    log: 5,
  },
  level: 'log',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
}))

const parentLogger1 = pino({
  customLevels: { myLevel: 90 },
  onChild: (child) => { const a = child.myLevel; }
}, process.stdout)
parentLogger1.onChild = (child) => { child.myLevel(''); }

const childLogger1 = parentLogger1.child({});
childLogger1.myLevel('');
expectError(childLogger1.doesntExist(''));

const parentLogger2 = pino({}, process.stdin);
expectError(parentLogger2.onChild = (child) => { const b = child.doesntExist; });

const childLogger2 = parentLogger2.child({});
expectError(childLogger2.doesntExist);

expectError(pino({
  onChild: (child) => { const a = child.doesntExist; }
}, process.stdout));

const pinoWithoutLevelsSorting = pino({});
const pinoWithDescSortingLevels = pino({ levelComparison: 'DESC' });
const pinoWithAscSortingLevels = pino({ levelComparison: 'ASC' });
const pinoWithCustomSortingLevels = pino({ levelComparison: () => false });
// with wrong level comparison direction
expectError(pino({ levelComparison: 'SOME'}), process.stdout);
// with wrong level comparison type
expectError(pino({ levelComparison: 123}), process.stdout);
// with wrong custom level comparison return type
expectError(pino({ levelComparison: () => null }), process.stdout);
expectError(pino({ levelComparison: () => 1 }), process.stdout);
expectError(pino({ levelComparison: () => 'string' }), process.stdout);

const customLevelsOnlyOpts = {
    useOnlyCustomLevels: true,
    customLevels: {
        customDebug: 10,
        info: 20, // to make sure the default names are also available for override
        customNetwork: 30,
        customError: 40,
    },
    level: 'customDebug',
} satisfies LoggerOptions;

const loggerWithCustomLevelOnly = pino(customLevelsOnlyOpts);
loggerWithCustomLevelOnly.customDebug('test3')
loggerWithCustomLevelOnly.info('test4')
loggerWithCustomLevelOnly.customError('test5')
loggerWithCustomLevelOnly.customNetwork('test6')

expectError(loggerWithCustomLevelOnly.fatal('test'));
expectError(loggerWithCustomLevelOnly.error('test'));
expectError(loggerWithCustomLevelOnly.warn('test'));
expectError(loggerWithCustomLevelOnly.debug('test'));
expectError(loggerWithCustomLevelOnly.trace('test'));

// Module extension
declare module "../../" {
    interface LogFnFields {
        bannedField?: never;
        typeCheckedField?: string
    }
}

info({typeCheckedField: 'bar'})
expectError(info({bannedField: 'bar'}))
expectError(info({typeCheckedField: 123}))
const someGenericFunction = <T extends string | number | symbol = never>(arg: Record<T, unknown>) => {
    info(arg)
}



================================================
FILE: test/types/pino.ts
================================================
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import pinoPretty from 'pino-pretty'
// Test both default ("Pino") and named ("pino") imports.
import Pino, { LoggerOptions, StreamEntry, pino, multistream, transport } from '../../pino'

const destination = join(
    tmpdir(),
    '_' + Math.random().toString(36).substr(2, 9)
)

// Single
const transport1 = transport({
    target: 'pino-pretty',
    options: { some: 'options for', the: 'transport' }
})
const logger = pino(transport1)
logger.setBindings({ some: 'bindings' })
logger.info('test2')
logger.flush()
const loggerDefault = Pino(transport1)
loggerDefault.setBindings({ some: 'bindings' })
loggerDefault.info('test2')
loggerDefault.flush()

const transport2 = transport({
    target: 'pino-pretty',
})
const logger2 = pino(transport2)
logger2.info('test2')
const logger2Default = Pino(transport2)
logger2Default.info('test2')


// Multiple

const transports = transport({targets: [
    {
        level: 'info',
        target: 'pino-pretty',
        options: { some: 'options for', the: 'transport' }
    },
    {
        level: 'trace',
        target: 'pino/file',
        options: { destination }
    }
]})
const loggerMulti = pino(transports)
loggerMulti.info('test2')

// custom levels

const customLevels = {
    customDebug   : 1,
    info    : 2,
    customNetwork : 3,
    customError   : 4,
};

type CustomLevels = keyof typeof customLevels;

const pinoOpts = {
    useOnlyCustomLevels: true,
    customLevels: customLevels,
    level: 'customDebug',
} satisfies LoggerOptions;

const multistreamOpts = {
    dedupe: true,
    levels: customLevels
};

const streams: StreamEntry<CustomLevels>[] = [
    { level : 'customDebug',   stream : pinoPretty() },
    { level : 'info',    stream : pinoPretty() },
    { level : 'customNetwork', stream : pinoPretty() },
    { level : 'customError',   stream : pinoPretty() },
];

const loggerCustomLevel = pino(pinoOpts, multistream(streams, multistreamOpts));
loggerCustomLevel.customDebug('test3')
loggerCustomLevel.info('test4')
loggerCustomLevel.customError('test5')
loggerCustomLevel.customNetwork('test6')
const loggerCustomLevelDefault = Pino(pinoOpts, multistream(streams, multistreamOpts));
loggerCustomLevelDefault.customDebug('test3')
loggerCustomLevelDefault.info('test4')
loggerCustomLevelDefault.customError('test5')
loggerCustomLevelDefault.customNetwork('test6')



================================================
FILE: .github/dependabot.yml
================================================
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "monthly"
    open-pull-requests-limit: 10

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "monthly"
    open-pull-requests-limit: 10



================================================
FILE: .github/workflows/bench.yml
================================================
name: Benchmarks
on:
  push:
    branches:
      - main
    paths-ignore:
        - 'docs/**'
        - '*.md'
  pull_request:
    paths-ignore:
        - 'docs/**'
        - '*.md'

permissions:
  contents: read

jobs:
  benchmark_current:
    name: benchmark current
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v5.0.0
        with:
          ref: ${{ github.base_ref }}
          persist-credentials: false
      - name: Setup Node
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
      - name: Install Modules
        run: npm i --ignore-scripts
      - name: Run Benchmark
        run: npm run bench | tee current.txt
      - name: Upload Current Results
        uses: actions/upload-artifact@v4
        with:
          name: current
          path: current.txt

  benchmark_branch:
    name: benchmark branch
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v5.0.0
        with:
          persist-credentials: false
      - name: Setup Node
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
      - name: Install Modules
        run: npm i --ignore-scripts
      - name: Run Benchmark
        run: npm run bench | tee branch.txt
      - name: Upload Branch Results
        uses: actions/upload-artifact@v4
        with:
          name: branch
          path: branch.txt



================================================
FILE: .github/workflows/ci.yml
================================================
name: CI

on:
  push:
    branches:
      - main
      - 'v*'
    paths-ignore:
      - 'docs/**'
      - '*.md'
  pull_request:
    paths-ignore:
      - 'docs/**'
      - '*.md'

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: "${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}"
  cancel-in-progress: true

jobs:
  dependency-review:
    name: Dependency Review
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - name: Check out repo
        uses: actions/checkout@v5.0.0
        with:
          persist-credentials: false

      - name: Dependency review
        uses: actions/dependency-review-action@v4

  test:
    name: ${{ matrix.node-version }} ${{ matrix.os }}
    runs-on: ${{ matrix.os }}
    permissions:
      contents: read
    strategy:
      fail-fast: false
      matrix:
        os: [macOS-latest, windows-latest, ubuntu-latest]
        node-version: [20, 22, 24, 25]
        exclude:
          - os: windows-latest
            node-version: 22

    steps:
      - name: Check out repo
        uses: actions/checkout@v5.0.0
        with:
          persist-credentials: false

      - name: Setup Node ${{ matrix.node-version }}
        uses: actions/setup-node@v6
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm i --ignore-scripts

      - name: Run tests
        run: npm run test-ci

      - name: Run smoke test
        if: >
          matrix.os != 'windows-latest' &&
          matrix.node-version > 14
        run: npm run test:smoke

  automerge:
    name: Automerge Dependabot PRs
    if: >
        github.event_name == 'pull_request' &&
        github.event.pull_request.user.login == 'dependabot[bot]'
    needs: test
    permissions:
      pull-requests: write
      contents: write
    runs-on: ubuntu-latest
    steps:
      - uses: fastify/github-action-merge-dependabot@v3
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          exclude: 'sonic-boom,pino-std-serializers,quick-format-unescaped,fast-redact'



================================================
FILE: .github/workflows/lock-threads.yml
================================================
name: 'Lock Threads'

on:
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:

permissions:
  issues: write
  pull-requests: write

concurrency:
  group: lock

jobs:
  action:
    runs-on: ubuntu-latest
    steps:
      - uses: jsumners/lock-threads@b27edac0ac998d42b2815e122b6c24b32b568321
        with:
          log-output: true
          issue-inactive-days: '30'
          issue-comment: >
            This issue has been automatically locked since there
            has not been any recent activity after it was closed.
            Please open a new issue for related bugs.
          pr-comment: >
            This pull request has been automatically locked since there
            has not been any recent activity after it was closed.
            Please open a new issue for related bugs.



================================================
FILE: .github/workflows/publish-release.yml
================================================
name: Publish release

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'The version number to tag and release'
        required: true
        type: string
      prerelease:
        description: 'Release as pre-release'
        required: false
        type: boolean
        default: false

jobs:
  release-npm:
    runs-on: ubuntu-latest
    environment: main
    permissions:
      contents: write
      id-token: write
    steps:
      - uses: actions/checkout@ff7abcd0c3c05ccf6adc123a8cd1fd4fb30fb493 # v4
      - uses: actions/setup-node@v6
        with:
          node-version: '22'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install npm -g
      - run: npm install
      - name: Change version number and sync
        run: |
          node build/sync-version.js ${{ inputs.version }}
      - name: GIT commit and push all changed files
        run: |
          git config --global user.name "mcollina"
          git config --global user.email "hello@matteocollina.com"
          git commit -n -a -m "Bumped v${{ inputs.version }}"
          git push origin HEAD:${{ github.ref }}
      - run: npm publish --access public --tag ${{ inputs.prerelease == true && 'next' || 'latest' }}
      - name: 'Create release notes'
        run: |
          npx @matteo.collina/release-notes -a ${{ secrets.GITHUB_TOKEN }} -t v${{ inputs.version }} -r pino -o pinojs ${{ github.event.inputs.prerelease == 'true' && '-p' || '' }} -c ${{ github.ref }}



================================================
FILE: .github/workflows/target-main.yml
================================================
name: PR Target Check

on:
  pull_request_target:
    types: [opened]

permissions:
  pull-requests: write

jobs:
  comment:
    if: ${{ github.base_ref != "master" }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v8
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '⚠️ This pull request does not target the master branch.'
            })


