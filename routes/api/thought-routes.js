const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);


module.exports = router;