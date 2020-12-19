const fs = require('fs/promises')

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

const main = async jsonFilename => {
  // let's start coding
  const jsonString = await fs.readFile(jsonFilename, 'utf-8');
  const json = JSON.parse(jsonString)
  process.stdout.write(JSON.stringify(json, null, 2))
}

main(filename);