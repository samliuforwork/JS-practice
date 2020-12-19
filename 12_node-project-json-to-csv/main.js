const { readFile } = require('fs').promises;

const { createWriteStream } = require('fs');
// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options

const csv = require('fast-csv');
// https://c2fo.io/fast-csv/docs/introduction/example#formatting

const argJsonFilename = process.argv[2];
const argCsvFilename = process.argv[3];
if (!(argJsonFilename && argCsvFilename)) {
  console.error("Please provide json and csv filename");
  process.exit(127)
}

const main = async (jsonFilename, csvFilename) => {
  // let's start coding
  const jsonString = await readFile(jsonFilename, 'utf8')
  const json = JSON.parse(jsonString)
  // console.log(json)

  const csvStream = csv.format({ headers: true });
  const writeStream = createWriteStream(csvStream)
  csvStream.pipe(writeStream).on('end', () => process.exit());

  json.forEach(row => {
    csvStream.write(row)
  });
  csvStream.end();
}

main(argJsonFilename, argCsvFilename);
