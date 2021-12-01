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

// Innovation 1
innovation.create({
    title: 'Powering Their Way Into The E-Bike Boom',
    author: 'Alan Ohnsman',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #1', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 2
innovation.create({
    title: 'Meet The Upstarts Leading The Digital Recovery: 30 Under 30 In Enterprise Technology',
    author: 'Martin Giles and Helen A. S. Popkin',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #2', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 3
innovation.create({
    title: 'Zappos CEO Is Stepping Down, A Year After Tony Hsieh’s Death',
    author: 'Angel Au-Yeung and David Jeans',
    date: 'November 30, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #3', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 4
innovation.create({
    title: 'From Bella Poarch To A ‘Bridgerton’ Musical, Meet Forbes’ 30 Under 30 In Social Media',
    author: 'Abram Brown',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #4', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 5
innovation.create({
    title: '30 Under 30 Manufacturing & Industry 2022: Meet The Young Innovators Building The New World',
    author: 'Amy Feldman',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #5', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 6
innovation.create({
    title: '30 Under 30 Venture Capital 2022: Meet The New Wave Of Investors Backing Builders From Crypto To Cancer Research',
    author: 'Alex Konrad and Rebecca Szkutak',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #6', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 7
innovation.create({
    title: 'How Banks Can Take Control Of Trade Expense',
    author: 'Alexander Duggan',
    date: 'October 28, 2021',
    job: 'Brand Contributor',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #7', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 8
innovation.create({
    title: '30 Under 30 In Healthcare 2022: Boosting Equity Through Activism, Big Data And Automation',
    author: 'Katie Jennings and Alex Knapp',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #8', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 9
innovation.create({
    title: '30 Under 30 In Science 2022: Finding New Worlds, Communicating STEM And Helping Dogs Live Longer',
    author: 'Alex Knapp and Katie Jennings',
    date: 'December 1, 2021',
    job: 'Forbes Staff',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #9', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
// Innovation 10
innovation.create({
    title: 'NVIDIA Again Claims The Title For The Fastest AI; Competitors Disagree',
    author: 'Karl Freund',
    date: 'December 1, 2021',
    job: 'Contributor',
})
    .then(function (createdInnovation) {
        console.log('Innovation Article #10', createdInnovation);
    })
    .catch(function (err) {
        console.log('ERROR with adding new Innovation Article', error);
    });
/************************************************************/
// [R]ead
// findAll Money
money.findAll()
    .then(function (moneyArray) {
        console.log('ALL MONEY ARTICLES HERE')
        for (let i = 0; i < moneyArray; i++) {
            console.log(moneyArray[i])
        }
    })
money.findAll()
    .then(function (moneyArray) {
        console.log('ALL MONEY ARTICLES PUBLISHED ON DECEMBER 1, 2021 HERE')
        for (let i = 0; i < moneyArray; i++) {
            if (moneyArray[i].date == 'December 1, 2021') {
                console.log(moneyArray[i])
            }
        }
    })
// findAll Leadership
leadership.findAll()
    .then(function (leadershipArray) {
        console.log('ALL LEADERSHIP ARTICLES HERE')
        for (let i = 0; i < leadershipArray; i++) {
            console.log(leadershipArray[i])
        }
    })
leadership.findAll()
    .then(function (leadershipArray) {
        console.log('ALL LEADERSHIP ARTICLES PUBLISHED ON DECEMBER 1, 2021 HERE')
        for (let i = 0; i < leadershipArray; i++) {
            if (leadershipArray[i].date == 'December 1, 2021') {
                console.log(leadershipArray[i])
            }
        }
    })
// findAll Innovation
innovation.findAll()
    .then(function (innovationArray) {
        console.log('ALL INNOVATION ARTICLES HERE')
        for (let i = 0; i < innovationArray; i++) {
            console.log(innovationArray[i])
        }
    })
innovation.findAll()
    .then(function (innovationArray) {
        console.log('ALL INNOVATION ARTICLES PUBLISHED ON DECEMBER 1, 2021 HERE')
        for (let i = 0; i < innovationArray; i++) {
            if (innovationArray[i].date == 'December 1, 2021') {
                console.log(innovationArray[i])
            }
        }
    })
// findOne Money
money.findOne({
    where: { title: 'Little Lions: America’s Top 100 Small-Cap Stocks For 2022' }
}).then(function (foundMoney) {
    console.log('FOUND MONEY ARTICLE', foundMoney)
});
money.findOne({
    where: { date: 'November 30, 2021' }
}).then(function (foundMoney) {
    console.log('FOUND MONEY ARTICLE', foundMoney)
});
money.findOne({
    where: { job: 'Senior Contributor' }
}).then(function (foundMoney) {
    console.log('FOUND MONEY ARTICLE', foundMoney)
});
// findOne Leadership
leadership.findOne({
    where: { title: 'Chobani Is Going Public. Its ‘Anti-CEO’ Founder Won’t Be The Only Employee Who Could See A Big Payday' }
}).then(function (foundLeadership) {
    console.log('FOUND LEADERSHIP ARTICLE', foundLeadership)
});
leadership.findOne({
    where: { date: 'November 19, 2021' }
}).then(function (foundLeadership) {
    console.log('FOUND LEADERSHIP ARTICLE', foundLeadership)
});
leadership.findOne({
    where: { job: 'Brand Contributor' }
}).then(function (foundLeadership) {
    console.log('FOUND LEADERSHIP ARTICLE', foundLeadership)
});
// findOne Innovation
innovation.findOne({
    where: { title: 'Zappos CEO Is Stepping Down, A Year After Tony Hsieh’s Death' }
}).then(function (foundInnovation) {
    console.log('FOUND INNOVATION ARTICLE', foundInnovation)
});
innovation.findOne({
    where: { date: 'November 30, 2021' }
}).then(function (foundInnovation) {
    console.log('FOUND INNOVATION ARTICLE', foundInnovation)
});
innovation.findOne({
    where: { job: 'Contributor' }
}).then(function (foundInnovation) {
    console.log('FOUND INNOVATION ARTICLE', foundInnovation)
});
// findByPk Money
money.findByPk(1)
    .then(function (moneyPk) {
        console.log('FOUND MONEY PK ', moneyPk);
    })
// findByPk Leadership
leadership.findByPk(17)
    .then(function (leadershipPk) {
        console.log('FOUND LEADERSHIP PK ', leadershipPk);
    })
// findByPk Innovation
innovation.findByPk(24)
    .then(function (innovationPk) {
        console.log('FOUND INNOVATION PK ', innovationPk);
    })
/************************************************************/
// [U]pdate
// update Money
money.update({
    title: 'Crypto Nonsense'
}, {
    where: {
        title: 'Inside Coinbase’s Budding Plan To Become The AWS Of Crypto'
    }
}).then(function (moneyChanged) {
    console.log('UPDATED MONEY ARTICLE TITLE', moneyChanged)
});
money.update({
    title: 'Sales Tax Stuff'
}, {
    where: {
        title: 'Sales Taxes In 2022 — Issues To Watch For Online Retailers'
    }
}).then(function (moneyChanged) {
    console.log('UPDATED MONEY ARTICLE TITLE', moneyChanged)
});
// update Leadership
leadership.update({
    title: 'Comrade-CEO Elon Musk Upholds Stalinism'
}, {
    where: {
        title: 'Elon Musk Shares Bizarre Stalin Meme Commemorating Twitter CEO Change'
    }
}).then(function (leadershipChanged) {
    console.log('UPDATED LEADERSHIP ARTICLE TITLE', leadershipChanged)
});
leadership.update({
    title: 'The Empire, Long Divided Must Unite, Long United Must Divide'
}, {
    where: {
        title: 'Ray Dalio Says America’s Decline Will Upend Lives, Not Just Portfolios'
    }
}).then(function (leadershipChanged) {
    console.log('UPDATED LEADERSHIP ARTICLE TITLE', leadershipChanged)
});
// update Innovation
innovation.update({
    title: 'Banks do What they Always Do'
}, {
    where: {
        title: 'How Banks Can Take Control Of Trade Expense'
    }
}).then(function (innovationChanged) {
    console.log('UPDATED INNOVATION ARTICLE TITLE', innovationChanged)
});
innovation.update({
    title: 'NVIDIA Worships the Omnissiah'
}, {
    where: {
        title: 'NVIDIA Again Claims The Title For The Fastest AI; Competitors Disagree'
    }
}).then(function (innovationChanged) {
    console.log('UPDATED INNOVATION ARTICLE TITLE', innovationChanged)
});
/************************************************************/
// [D]elete
// destroy Money
money.destroy({
    where: {
        title: 'The Richest Private Equity Billionaires On The Forbes 400 List 2021',
        author: 'Sergei Klebnikov',
        date: 'October 5, 2021',
        job: 'Forbes Staff',
    }
}).then(function (moneyDeleted) {
    console.log('DELETED MONEY ARTICLE', moneyDeleted)
});
// destroy Leadership
leadership.destroy({
    where: {
        title: 'The Wisdom Of Women Leaders As They Forge The Post Pandemic Future',
        author: 'Alaina Percival',
        date: 'December 1, 2021',
        job: 'Contributor',
    }
}).then(function (leadershipDeleted) {
    console.log('DELETED LEADERSHIP ARTICLE', leadershipDeleted)
});
// destroy Innovation
innovation.destroy({
    where: {
        title: '30 Under 30 Venture Capital 2022: Meet The New Wave Of Investors Backing Builders From Crypto To Cancer Research',
        author: 'Alex Konrad and Rebecca Szkutak',
        date: 'December 1, 2021',
        job: 'Forbes Staff',
    }
}).then(function (innovationDeleted) {
    console.log('DELETED INNOVATION ARTICLE', innovationDeleted)
});
/************************************************************/