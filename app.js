const { money } = require('./models');
const { leadership } = require('./models');
const { innovation } = require('./models');

// Implement CRUD

/************************************************************/
// [C]reate
// Money 1
money.create({
    title: 'Inside Coinbase’s Budding Plan To Become The AWS Of Crypto',
    author: 'Steven Ehrlich',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #1', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 2
money.create({
    title: 'Little Lions: America’s Top 100 Small-Cap Stocks For 2022',
    author: 'Hank Tucker',
    date: 'November 12, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #2', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
/************************************************************/
// [R]ead
/************************************************************/
// [U]pdate
/************************************************************/
// [D]elete
/************************************************************/