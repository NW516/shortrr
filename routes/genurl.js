const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../model/Url');

router.post('/', async (request, response) => {
  const longUrl = request.body.longUrl;
  console.log(longUrl);
  const baseUrl = config.get('baseURI');

  if (!validUrl.isUri(baseUrl)) {
    console.log("invalid base url");
    return response.status(401).json('Invalid base url');
  }

  const urlCode = shortid.generate();

  if (validUrl.isWebUri(longUrl)) {
     //We will generate short URL here
     try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        response.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;
        console.log(shortUrl);

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        response.json(url);
        console.log("Success, url is: " + url);
      }
    } catch (err) {
      console.error(err.message);
      response.status(500).json('Server Error');
    }
  } else {
     console.log("invalid long url: " + longUrl);
     response.status(401).json('Invalid URL');
  }

});

module.exports = router;
