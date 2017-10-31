require('shelljs/global')

console.log(`*** Poker Environment (POKER_ENV): ${process.env.POKER_ENV}, Node Environment (NODE_ENV): ${process.env.NODE_ENV}`)
ShellString(`/**\n * GENERATED FILE\n * CHANGES WILL BE LOST\n */\n\n${cat(`./environments/${process.env.POKER_ENV}.ts`)}`)
  .to('./src/environment.ts')
