const express = require('express');
const router = express.Router();
const Detail = require('../models/detail');
const Slider = require('../models/slider');
const Services = require('../models/service');
const contactUs = require('../models/contactUs');

// const data = {
//   details: await Detail.findOne({ _id: '63621ba49a4119c21894d82b' }),
//   slides: await Slider.find(),
//   services: await Services.find(),
//   contactus: await contactUs.find(),
// };

router.get('/', async (req, res) => {
  const details = await Detail.findOne({ _id: '63621ba49a4119c21894d82b' });
  const slides = await Slider.find();
  const services = await Services.find();
  const contactus = await contactUs.find();
  res.render('index', {
    details: details,
    slides: slides,
    services: services,
    contactus: contactus,
  });
});
// DETAILS

router.get('/gallery', async (req, res) => {
  const details = await Detail.findOne({ _id: '63621ba49a4119c21894d82b' });
  res.render('gallery', {
    details: details,
  });
});

// CONTACT US
router.post('/process-contact-form', async (req, res) => {
  try {
    const { email, phone, query } = req.body;
    if (!email || !phone || !query) {
      return res.redirect('/');
    }
    await contactUs.create(req.body);
    res.redirect('/');
  } catch (e) {
    console.log(e);
    res.redirect('/');
  }
});

router.get('/admin', async (req, res) => {
  const details = await Detail.findOne({ _id: '63621ba49a4119c21894d82b' });
  const slides = await Slider.find();
  const services = await Services.find();
  const contactus = await contactUs.find();
  res.render('admin', {
    details: details,
    slides: slides,
    services: services,
    contactus: contactus,
  });
});

// ===========================================

router.post('/process-admin', async (req, res) => {
  //
  try {
    const data = req.body;
    console.log(req.body.label.value, req.body.url, req.params._id);
    await Detail.updateMany(
      {},
      {
        $set: {
          brandName: req.body.brandName,
          brandIconUrl: req.body.brandIconUrl,
          // label: req.body.label.value,
          // url: req.body.url.value,
        },
      }
    );
    await Detail.findOne(
      { links: { $elemMatch: { label: req.body.label.value } } },

      {
        $set: {
          label: req.body.label.value,
          url: req.body.url.value,
        },
      }
    );
    // await Detail.updateOne(
    //   { details: 'match' },
    //   {
    //     $set: {
    //       'links.label': req.body.label,
    //       'links.url': req.body.url,
    //     },
    //   }
    // );
    res.redirect('/admin');
  } catch (e) {
    console.log(e.message);
    res.redirect('/admin');
  }

  //
  try {
  } catch (e) {
    console.log(e);
    res.redirect('/admin');
  }
});

module.exports = router;
