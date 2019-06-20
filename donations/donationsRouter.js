

const router = require('express').Router();
const Donations = require('./donationsModel.js')



router.get('/', (req, res) => {
    Donations.getAll()
      .then(donations => {
        res.status(200).json(donations);
      })
      .catch (error => {
        res.status(500).json({message: "We ran into an error retrieving the donations" })
      })
  })
  
  
  router.get('/:id', async (req, res) => {
    try {
      const donation = await Donations.findById(req.params.id);
      if (donation) {
        res.status(200).json(donation);
      } else {
        res.status(404).json({ message: 'We could not find the donation' });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the donation' });
    }
  });
  
  
  
  router.post('/', async (req, res) => {
    const donation = req.body;
  
    if (donation.name) {
      try {
        const inserted = await Donations.insert(donation);
        res.status(201).json(inserted);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error creating the donation' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name, organization and amount of donation' });
    }
  });
  
  router.put('/:id', async (req, res) => {
    const changes = req.body;
  
    if (changes.name) {
      try {
        const updated = await Donations.update(req.params.id, changes);
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            message: 'That donation does not exist',
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error updating the donation' });
      }
    } else {
      res.status(400).json({
        message: 'Please provide the name, organization, and amount of donation',
      });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const count = await Donations.remove(req.params.id);
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({
          message: 'That donation does not exist, perhaps it was deleted already',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error removing the donation' });
    }
  });
  
  module.exports = router;
  