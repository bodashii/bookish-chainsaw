const { Schema, Types } = require('mongoose');
const dateDisplay = require('../utils/dateDisplay');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max: 200
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (e) => dateDisplay(e),
        },
    },
    {
        toJson: {
            getters: true,
        },
        id: false
    }
);

module.exports = ReactionSchema;