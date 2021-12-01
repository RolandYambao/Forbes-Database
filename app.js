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

// Leadership 1
leadership.create({
    title: 'Forbes Under 30 Hall of Fame',
    author: 'Maneet Ahuja',
    date: 'December 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #1', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 2
leadership.create({
    title: 'Why Jack Dorsey’s Total Exit From Twitter Is Unusual—And Welcome',
    author: 'Jena McGregor',
    date: 'November 30, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #2', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 3
leadership.create({
    title: 'Spotify Has Plans To Move Beyond Music And Become The Instagram And TikTok Of Audio',
    author: 'Steven Bertoni',
    date: 'November 29, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #3', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 4
leadership.create({
    title: 'Chobani Is Going Public. Its ‘Anti-CEO’ Founder Won’t Be The Only Employee Who Could See A Big Payday',
    author: 'Jena McGregor',
    date: 'November 19, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #4', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 5
leadership.create({
    title: 'Ray Dalio Says America’s Decline Will Upend Lives, Not Just Portfolios',
    author: 'Maneet Ahuja',
    date: 'November 29, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #5', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 6
leadership.create({
    title: 'Women, Blacks And Hispanics Find Uptick In New Jobs Through Coursera’s Upskilling, Degree Programs',
    author: 'Jack Kelly',
    date: 'December 1, 2021',
    job: 'Senior Contributor',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #6', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 7
leadership.create({
    title: 'Stacey Abrams Announces Second Run For Georgia Governor',
    author: 'Derek Saul',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #7', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 8
leadership.create({
    title: 'Elon Musk Shares Bizarre Stalin Meme Commemorating Twitter CEO Change',
    author: 'Derek Saul',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #8', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 9
leadership.create({
    title: 'Are You An Equal Parent For Your Kids Or Just A Financial Investor?',
    author: 'Nabanita De Foundation',
    date: 'December 1, 2021',
    job: 'Brand Contributor',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #9', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
// Leadership 10
leadership.create({
    title: 'The Wisdom Of Women Leaders As They Forge The Post Pandemic Future',
    author: 'Alaina Percival',
    date: 'December 1, 2021',
    job: 'Contributor',
})
    .then(function (createdLeadership) {
        console.log('Leadership Article #10', createdLeadership);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Leadership Article', error);
    });
/************************************************************/
// [R]ead
/************************************************************/
// [U]pdate
/************************************************************/
// [D]elete
/************************************************************/