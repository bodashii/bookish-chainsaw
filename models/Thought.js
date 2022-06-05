const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createAt: {
            type: Date,
            default: Date.now,
            // get: need date formatted
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    },
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;