
class Log {
  constructor() {
    this.logList = []
    this.logLevel = 'default'
  }

  get first() {
    let [f, ..._] = this.logList
    return f
  }

  get last() {
    if (!this.logList.length) {
      return undefined
    } else {
      return this.logList[this.logList.length - 1]
    }
  }

  set level(newLevel) {
    this.logLevel = newLevel
  }

  add(log) {
    this.logList.push(log)
  }
}

function main() {
  const log = new Log()
  log.add('The first log.')
  log.add('The second log.')

  console.log(log.first)
  // 'The first log.'
  
  console.log(log.last)
  // 'The second log.'

  log.level = 'error'
  // log.logLevel: error

  console.log('Done')
}

main()

module.exports = main