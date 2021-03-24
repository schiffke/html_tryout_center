const fetch = require('node-fetch');
const fs = require('fs');
require('dotenv').config();

const user = 'schiffke';
const repo = 'ghpages_try';
const commitMessages = [];
const sha = 'd25c4bf24ddeda37caf53537fdedd48197e077a8';

fetch(`https://api.github.com/repos/${user}/${repo}/commits`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json', 'Authorization': `${sha}` }
})
    .then(res => res.json())
    .then(json => {
        json.forEach(commit => commitMessages.push({ 'message': commit.commit.message, 'date': commit.commit.author.date }));
        
        fs.writeFile('./commits.json', JSON.stringify(commitMessages), (err) => {
            if (err) throw err;
            console.log('The file has been saved!')});
    });