import server from './server.ts'
// import os from 'os'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})

// console.log(os.cpus().length)
