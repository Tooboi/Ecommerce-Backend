const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const allCat = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(allCat)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catID = await Category.findByPk(req.params.id);
    if (!catID) {
      res.status(404).json({ message: "Can't find category! " });
      return;
    }
    res.status(200).json(catID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catPost = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(catPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` valueasync 
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
