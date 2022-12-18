const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const allTags = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  res.json(allTags)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagID = await Tag.findByPk(req.params.id);
    if (!tagID) {
      res.status(404).json({ message: "Can't find product! " });
      return;
    }
    res.status(200).json(tagID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
  const tagPost = await Tag.create({ 
    tag_name: req.body.tag_name
  });
  res.status(200).json(tagPost);
  } catch (err) {
    res.status(404).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
