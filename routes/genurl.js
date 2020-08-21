const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../model/Url');

router.post('/', async (request, response) => {
  // We will handle the requested data here
  const { longUrl } = request.body;
  const baseUrl = config.get('baseURI');

  if (!validUrl.isUri(baseUrl)) {
    return response.status(401).json('Invalid base url');
  }

  const urlCode = shortid.generate();

  if (validUrl.isUri(longUrl)) {
     // We will generate short URL here
     try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        response.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        response.json(url);
      }
    } catch (err) {
      console.error(err.message);
      response.status(500).json('Server Error');
    }
  } else {
     response.status(401).json('Invalid Long Url');
  }

});

module.exports = router;
