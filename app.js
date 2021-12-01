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
// Money 3
money.create({
    title: 'What Every Crypto Buyer Should Know About OpenSea, The King Of The NFT Market',
    author: 'Jeff Kauflin',
    date: 'November 23, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #3', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 4
money.create({
    title: 'States Are Seeing Steep Income Tax Revenue Growth. Will It Last?',
    author: 'Liz Farmer',
    date: 'December 1, 2021',
    job: 'Senior Contributor',
})
    .then(function (createdMoney) {
        console.log('Money Article #4', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 5
money.create({
    title: 'Sales Taxes In 2022 — Issues To Watch For Online Retailers',
    author: 'Liz Farmer',
    date: 'November 30, 2021',
    job: 'Senior Contributor',
})
    .then(function (createdMoney) {
        console.log('Money Article #5', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 6
money.create({
    title: 'Expect Rates Hikes To Fight Inflation, Says State Street Chief Strategist',
    author: 'Jason Bisnoff',
    date: 'November 30, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #6', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 7
money.create({
    title: 'We All Pay For Retirement Tax Breaks That Mostly The Wealthy Use',
    author: 'Erik Sherman',
    date: 'November 30, 2021',
    job: 'Senior Contributor',
})
    .then(function (createdMoney) {
        console.log('Money Article #7', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 8
money.create({
    title: 'Green Growth 50: Learning From Companies Boosting Profits While Cutting Emissions',
    author: 'Isabel Contreras and Christopher Helman',
    date: 'November 16, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #8', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 9
money.create({
    title: 'The Richest Private Equity Billionaires On The Forbes 400 List 2021',
    author: 'Sergei Klebnikov',
    date: 'October 5, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #9', createdMoney);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Money Article', error);
    });
// Money 10
money.create({
    title: 'Stocks Plunge Again After CDC Confirms First U.S. Case Of Omicron Variant',
    author: 'Sergei Klebnikov',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdMoney) {
        console.log('Money Article #10', createdMoney);
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