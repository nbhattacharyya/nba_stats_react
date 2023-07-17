const express = require('express');
const app = express;
const PORT = 3000;
const NBA = require('nba');

app.get('players/:playerId', (req, res, next) => {
    NBA.stats.playerInfo({ PlayerId: req.params.playerId })
        .then((playerInfo) => {
            res.send(JSON.stringify(playerInfo))
        })
        .catch((e) => {
            next(e);
        });
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));