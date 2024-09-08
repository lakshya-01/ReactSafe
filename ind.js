// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const random = require('random');
import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';
import random from 'random';
const FILE_PATH = './data.json';

// const DATE = moment().subtract(5,'w').add(2,'d').format();

// const data = {
//     date: DATE
// }

// jsonfile.writeFile(FILE_PATH, data);
// simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }).push();
// jsonfile.writeFile(FILE_PATH, data, ()=>{
//     simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }).push();
// });

const makeCommit = (n) => {
    if(n===0) return simpleGit().push();
    const x = random.int(20,53);
    const y = random.int(0,6);
    const DATE = moment().subtract(1,'y').add(x,'w').add(y,'d').format();
    const data = {
        date: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }, 
        makeCommit.bind(this, --n));
    });
}

makeCommit(20);