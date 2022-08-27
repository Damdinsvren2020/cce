const { Router } = require('express');
const IngredientsTable = require('../ingredients/table');
//const AccountTable = require('../account/table');
//const AccountNewsTable = require('../accountNews/table');
// const { authenticatedAccount } = require('./helper');
//const { getPublicDragons, getDragonWithTraits } = require('../dragon/helper');
//const Breeder = require('../dragon/breeder');

const router = new Router();

router.get('/', (req, res, next)=> {
    IngredientsTable.getIngredients()
        .then(ingredients => {
            ingredients = ingredients.rows[0].info;
            res.json(ingredients);
        })
        .catch(error => next(error)); 
});

// router.post('/newsId',(req, res, next) => {
//     const { newsId } = req.body;

//     NewsTable.getNewsId({newsId})
//         .then(news => res.json({news}))
//         .catch(error => next(error));
// });

// router.delete('/deleteId',(req, res, next) => {
//     const { newsId } = req.body;

//     NewsTable.deleteNewsId({ newsId })
//         .then(() => res.json({ message: 'success!' }))
//         .catch(error => next(error));
// });

// router.put('/updateId',(req, res, next) => {
//     const { newsId, breakingNews } = req.body;

//     NewsTable.updateNewsId({ newsId, breakingNews })
//         .then(() => res.json({ message: 'success!' }))
//         .catch(error => next(error));
// });

// router.post('/update', (req, res, next) => {
// //   const { dragonId, nickname, isPublic, saleValue, sireValue } = req.body;

// //   DragonTable.updateDragon({ dragonId, nickname, isPublic, saleValue, sireValue })
// //     .then(() => res.json({ message: 'successfully updated dragon' }))
// //     .catch(error => next(error));
// });

// router.get('/category-news', (req, res, next) => {
// //   getPublicDragons()
// //     .then(({ dragons }) => res.json({ dragons }))
// //     .catch(error => next(error));
// });

module.exports = router;