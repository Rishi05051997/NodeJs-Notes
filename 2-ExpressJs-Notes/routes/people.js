const express = require('express');
const peopleController = require('../controllers/people');

const router = express.Router();


// router.get('/', peopleController.getPeople);

// router.post('/', peopleController.createPerson)

// router.post('/postman', peopleController.CreatePostmanPerson)

// router.put('/:id', peopleController.updatePerson)

// router.delete('/:id', peopleController.deletePerson)

router.route('/').get(peopleController.getPeople).post(peopleController.createPerson);
router.route('/postman').post(peopleController.CreatePostmanPerson);
router.route('/:id').put(peopleController.updatePerson).delete(peopleController.deletePerson);



module.exports = router;