const fs = require('fs')
const exec = require('child_process').exec
const commandRunTest = 'npm run test'

function getCommandRunTest(fileName) {
    return `${commandRunTest} -t ./__tests__/${fileName}`; 
}

fs.watch('./__tests__', { recursive: true }, (event, filename) => {
    console.log(`${getCommandRunTest(filename)}`)
    exec(getCommandRunTest(filename), onRunTest)
})

fs.watch('./src', {}, (event, filename) => {
    exec(commandRunTest, onRunTest)
})

function onRunTest(err, stdout, stderr) {
    if (err) {
        console.log(`Failed to run test\n${err}`)
    }
    else if (stderr) {
        console.log(`StdErr\n${stderr}`)
    }
    else {
        console.log(`Finish running tests\n${stdout}`);
    }
}