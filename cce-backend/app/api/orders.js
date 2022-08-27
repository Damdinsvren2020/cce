const { Router } = require('express');
const OrdersTable = require('../news/table');
//const AccountTable = require('../account/table');
//const AccountNewsTable = require('../accountNews/table');
// const { authenticatedAccount } = require('./helper');
//const { getPublicDragons, getDragonWithTraits } = require('../dragon/helper');
//const Breeder = require('../dragon/breeder');

const router = new Router();

router.get('/', (req, res, next)=> {
    OrdersTable.getNews()
        .then(orders => {

            let ordersObj = {};
            let a = [];
            
            console.log('1', orders );

            orders = orders.rows;

            console.log('2', orders);
            console.log('3', orders[0]);
            

            for (var i = 0; i < orders.length; i++) {
                Object.keys(orders[i]).forEach((key) => {
                    if (key === 'info' ) {
                        orders[i][a[i]] = orders[i][key];
                    
                    };
                    console.log('5', key);
                    console.log('7', orders[i][a[i]]);
                    console.log('71', orders[i].id);
                    ordersObj = { ...ordersObj, [orders[i].id]: orders[i][a[i]]};

                    //delete orders[i][key];
                    //delete orders[i]['id'];
                });
            }
            console.log('8', ordersObj);
            res.json(ordersObj);
        })
        .catch(error => next(error)); 
});

router.post('/',(req, res, next) => {
    const order = req.body;

    console.log('B1', order);

    OrdersTable.putOrders(order)
        .then(() => {
            res.json({message: 'success!' });
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

//   let accountId, dragon;

//   authenticatedAccount({ sessionString: req.cookies.sessionString })
//     .then(({ account }) => {
//       accountId = account.id;

//       dragon = req.app.locals.engine.generation.newDragon();
//       // dragon = req.app.locals.engine.generation.newDragon({
//       //   uniqueId: accountId
//       // });

//       return DragonTable.storeDragon(dragon)
//     })
//     .then(({ dragonId }) => {
//       dragon.dragonId = dragonId;

//       return AccountDragonTable.storeAccountDragon({ accountId, dragonId });
//     })
//     .then(() => {
//       res.json({ dragon });
//     })
//     .catch(error => next(error));

// router.post('/buy', (req, res, next) => {
//   const { dragonId, saleValue } = req.body;
//   let buyerId;

//   DragonTable.getDragon({ dragonId })
//     .then(dragon => {
//       if (dragon.saleValue !== saleValue) {
//         throw new Error('Sale value is not correct')
//       }

//       if (!dragon.isPublic) {
//         throw new Error('Dragon must be public')
//       }

//       return authenticatedAccount({ sessionString: req.cookies.sessionString })
//     })
//     .then(({ account, authenticated }) => {
//       // needed because the authenticatedAccount helper rejects invalid session strings
//       // but a valid session string may be still be unauthenticated
//       // and authenticatedAccount will return authenticated: false in that case
//       if (!authenticated) {
//         throw new Error('Unauthenticated')
//       };

//       if (saleValue > account.balance) {
//         throw new Error('Sale value exceeds balance');
//       };

//       buyerId = account.id;

//       // get the sellerId based off the existing dragonId/accountDragon association
//       return AccountDragonTable.getDragonAccount({ dragonId })
//     })
//     .then(({ accountId }) => {
//       if (accountId === buyerId) {
//         throw new Error('Cannot buy your own dragon!');
//       };

//       const sellerId = accountId;

//       // the only trouble with this is that if an updateAccount/updateDragon fails, then the updateBalance may not occur
//       // but that is a lower-level error of a Promise all implementation not working, as long as the implementation is correct
//       return Promise.all([
//         AccountTable.updateBalance({
//           accountId: buyerId, value: -saleValue
//         }),
//         AccountTable.updateBalance({
//           accountId: sellerId, value: saleValue
//         }),
//         AccountDragonTable.updateDragonAccount({
//           dragonId, accountId: buyerId
//         }),
//         DragonTable.updateDragon({
//           dragonId, isPublic: false
//         })
//       ])
//     })
//     .then(() => res.json({ message: 'success!' }))
//     .catch(error => next(error));
// });

// router.post('/mate', (req, res, next) => {
//   const { matronDragonId, patronDragonId } = req.body;

//   if (matronDragonId === patronDragonId) {
//     throw new Error('Cannot breed the with the same dragon!');
//   };

//   let matronDragon;
//   let patronDragon;

//   let matronAccountId;
//   let patronAccountId;

//   let patronSireValue;

//   getDragonWithTraits({ dragonId: patronDragonId })
//     .then(dragon => {
//       if (!dragon.isPublic) {
//         throw new Error('Dragon must be public')
//       }

//       patronDragon = dragon;
//       patronSireValue = dragon.sireValue;

//       return getDragonWithTraits({ dragonId: matronDragonId });
//     }).then(dragon => {
//       matronDragon = dragon;

//       return authenticatedAccount({ sessionString: req.cookies.sessionString })
//     })
//     .then(({ account, authenticated }) => {
//       if (!authenticated) throw new Error('Unauthenticated');

//       if (patronSireValue > account.balance) {
//         throw new Error('Sire value exceeds balance');
//       };

//       matronAccountId = account.id;

//       return AccountDragonTable.getDragonAccount({ dragonId: patronDragonId })
//     }).then(({ accountId }) => {
//       patronAccountId = accountId;

//       if (matronAccountId === patronAccountId) {
//         throw new Error('Cannot breed your own dragons!');
//       };

//       console.log('matronDragon', matronDragon, 'patronDragon', patronDragon);

//       const dragon = Breeder.breedDragon({
//         matron: matronDragon,
//         patron: patronDragon
//       });

//       return DragonTable.storeDragon(dragon);
//     })
//     .then(({ dragonId }) => Promise.all(
//       [
//         AccountTable.updateBalance({
//           accountId: matronAccountId, value: -patronSireValue
//         }),
//         AccountTable.updateBalance({
//           accountId: patronAccountId, value: patronSireValue
//         }),
//         AccountDragonTable.storeAccountDragon({
//           dragonId, accountId: matronAccountId
//         })
//       ]
//     ))
//     .then(() => res.json({ message: 'success!' }))
//     .catch(error => next(error));
// });

