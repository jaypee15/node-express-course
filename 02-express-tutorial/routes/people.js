const express = require('express');
const router = express.Router();



const {  getPeople,
    createPerson,
    creaetePersonPostman,
    updatePerson,
    deletePerson, } = require('../controllers/people')

router.get('/', getPeople) 
router.post('/', createPerson)
router.post('/postman/people',creaetePersonPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman/people').post(creaetePersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
