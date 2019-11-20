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

router.put('/', (req, res) => {
  console.log('this is req.body.resource_sunlight', req.body.resource_sunlight)
  
  const queryText =
    `UPDATE "user" 
      SET 
  "click_gather_sunlight"=$2,
  "resource_sap"=$3,
  "resource_treefolk"=$4,
  "resource_science"=$5,
  "resource_sunlight_text"=$6,
  "resource_sap_text"=$7,
  "resource_science_text"=$8,
  "resource_sunlight_max"=$9,
  "resource_sap_max"=$10,
  "resource_treefolk_max"=$11,
  "resource_science_max"=$12,
  "resource_sap_reveal"=$13,
  "resource_treefolk_reveal"=$14,
  "resource_science_reveal"=$15,
  "research_meterology"=$16,
  "research_agriculture"=$17,
  "research_irrigation"=$18,
  "research_meterology_text"=$19,
  "research_agriculture_text"=$20,
  "research_irrigation_text"=$21,
  "research_meterology_cost"=$22,
  "research_irrigation_cost"=$23,
  "research_agriculture_cost"=$24,
  "upgrade_roots"=$25,
  "upgrade_chrolophyll"=$26,
  "upgrade_bark"=$27,
  "upgrade_roots_cost"=$28,
  "upgrade_chrolophyll_cost"=$29,
  "upgrade_bark_cost"=$30,
  "upgrade_roots_text" =$31,
  "upgrade_chrolophyll_text" =$32,
  "upgrade_bark_text" =$33,
  "upgrade_roots_reveal"=$34,
  "upgrade_chlorophyll_reveal"=$35,
  "upgrade_bark_reveal" =$36,
  "resource_sunlight"=$37,
  "resource_sap_price"=$38
    WHERE "id"=$1`;
  const values = [
    req.user.id,
    req.body.click_gather_sunlight,
    req.body.resource_sap,
    req.body.resource_treefolk,
    req.body.resource_science,
    req.body.resource_sunlight_text,
    req.body.resource_sap_text,
    req.body.resource_science_text,
    req.body.resource_sunlight_max,
    req.body.resource_sap_max,
    req.body.resource_treefolk_max,
    req.body.resource_science_max,
    req.body.resource_sap_reveal,
    req.body.resource_treefolk_reveal,
    req.body.resource_science_reveal,
    req.body.research_meterology,
    req.body.research_agriculture,
    req.body.research_irrigation,
    req.body.research_meterology_text,
    req.body.research_agriculture_text,
    req.body.research_irrigation_text,
    req.body.research_meterology_cost,
    req.body.research_irrigation_cost,
    req.body.research_agriculture_cost,
    req.body.upgrade_roots,
    req.body.upgrade_chrolophyll,
    req.body.upgrade_bark,
    req.body.upgrade_roots_cost,
    req.body.upgrade_chrolophyll_cost,
    req.body.upgrade_bark_cost,
    req.body.upgrade_roots_text,
    req.body.upgrade_chrolophyll_text,
    req.body.upgrade_bark_text,
    req.body.upgrade_roots_reveal,
    req.body.upgrade_chlorophyll_reveal,
    req.body.upgrade_bark_reveal,
    req.body.resource_sunlight,
    req.body.resource_sap_price,
  ];

  pool.query(queryText, values)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing put route query', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;