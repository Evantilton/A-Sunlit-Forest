const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {
    
// });
router.get('/',  (req, res) => {
    const queryText = 'SELECT * FROM "user" WHERE "id" = $1';
    pool.query(queryText, [req.user.id])
      .then((result) => 
      
      { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT everything query', err);
        res.sendStatus(500);
      });
  });
///////////////////////////////////////////////////////////////////////////////


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;