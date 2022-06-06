const { Thought, User } = require("../models");

const thoughtController = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .sort({ _id: -1 })
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
    // get thought /id:
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "Invalid thought id" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            });
    },

    // create thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'invalid user id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            });
    },

    // update thought with /id:
    updateThoughtById({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { thoughtText: body.thoughtText },
            { new: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "Invalid thought id" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            });
    },

    // Delete thought /id:
    deleteThoughtById({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "invalid id" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
        });
    },
}

module.exports = thoughtController;