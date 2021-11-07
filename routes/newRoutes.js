/* eslint-disable no-console */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('You touched the default route');
  res.json({ message: 'Welcome to the Vinyl Database'});
});

// suhail's routes to the artists endpoint which would map to the "singers" table of our SQL DB
router.route('/artists')
  .get((req, res) => {
    try {
      console.log('touched /artists with GET');
      res.json({ artist: 'Nirvana'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /artists with PUT'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /artists with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /artists with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Data machine broke!' });
    }
  });

// Diego's routes to the songs endpoint which would map to the "songs" table of our SQL DB
router.route('/songs')
  .get((req, res) => {
    try {
<<<<<<< HEAD
      console.log('touched /songs with GET');
      res.json({ song: 'Smells Like Teen Spirit'});
=======
      console.log('touched /songs with GET')
      res.json({ songs: 'Smells Like Teen Spirit'});
>>>>>>> 89d4ae14231b58be638d5bb89f4a3ae5a73a1e9b
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /songs with PUT'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /songs with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /songs with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  });

// Minghao's routes to the prices endpoint which would map to the "prices" table of our SQL DB
router.route('/prices')
  .get((req, res) => {
    try {
      console.log('touched /prices with GET')
      res.json({ prices: '10'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })

  .put((req, res) => {
    try {
      res.json({ message: 'touched /prices with PUT'})
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .post((req, res) => {
    try {
      res.json({ message: 'touched /prices with POST'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  })
  .delete((req, res) => {
    try {
      res.json({ message: 'touched /prices with DELETE'});
    } catch (err) {
      console.log(error);
      res.json({ error: 'Oops Error' });
    }
  });

export default router;
