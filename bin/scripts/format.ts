import * as fs from 'fs';
import * as path from 'path';

export function format() {
  const localsPath = path.resolve(__dirname, '../../src/common/locales/data');
  const files = fs.readdirSync(localsPath);

  const sortedKeys = Object.keys(
    JSON.parse(fs.readFileSync(path.resolve(localsPath, 'en-US.json'), { encoding: 'utf-8' }))
  ).sort((a, b) => a.localeCompare(b));

  files
    .filter(file => path.extname(file) === '.json')
    .map(file => path.resolve(localsPath, file))
    .forEach(file => {
      const messages = JSON.parse(fs.readFileSync(file, 'utf-8'));
      const result = {};

      sortedKeys.forEach(key => {
        result[key] = messages[key] || '';
      });

      fs.writeFileSync(file, JSON.stringify(result, null, 2));
    });
}
