const express = require('express');
const router = express.Router;
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const url = require('./models/Url');
const { urlencoded } = require('express');

router.post()

router.post('/shorten', async (req, res) => {
    const { longURL } = reg.body;
    const baseUrl = config.get('baseUrl');

    if(validUrl.isUri(baseUrl)){
        return res.status(401).json('invalid base url')
    }

const urCode = shortid.generate();

if(validUrl.isUri(longURL)) {
    try {
        let url = await Url.findOne({longURL})
        if(url){
            res.json(url);
        } else {
            const shortUrl = baseUrl + '/' + urlCode

            url = new url({
                longURL,
                shortUrl,
                urlCode
            });

            await url.save();

            res.json(url);
        }
    } catch (err) {
        console.error(err)
        res.status(500).json('Sever error')
        
    }
} else {
    res.status(401).json('Invalid url')

}

});

module.exports = router;