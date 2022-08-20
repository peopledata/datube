#!/usr/bin/env node

const DaTube = require('./')

const bootstrap = arg('bootstrap')
const nodes = arg('node') ? '' : arg('nodes')

if (nodes === null && bootstrap !== null) {
  const port = Number(arg('port') || '0') || 49737
  const host = arg('host')
  if (!host) throw new Error('You need to specify --host <node ip>')
  startBootstrapNode(port, host)
} else {
  startNodes(Number(nodes) || 1, bootstrap ? bootstrap.split(',') : undefined)
}

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  if (i === -1) return null
  return i < process.argv.length - 1 ? process.argv[i + 1] : ''
}

async function startBootstrapNode (port, host) {
  const node = DaTube.bootstrapper(port, host)

  await node.ready()

  console.log('Bootstrap node bound to', node.address())
  console.log('Fully started Datube DHT bootstrap node')
}

async function startNodes (cnt, bootstrap) {
  console.log('Booting DHT nodes...')

  const all = []

  while (all.length < cnt) {
    const node = new DaTube({ bootstrap })
    await node.ready()
    const id = all.length

    all.push(node)

    console.log('Node #' + id + ' bound to', node.address())

    node.on('persistent', function () {
      console.log('Node #' + id + ' seems stable, joining remote routing tables')
    })
  }

  console.log('Fully started ' + cnt + ' peopleswarm DHT node' + (cnt === 1 ? '' : 's'))
}
