import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * * UserSchema
 * @description User model
 */
const UserSchema = new Schema({
    name: {
        type: ObjectId,
        required: [true, 'sender must not be empty'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    message_status: { type: Number, default: 1 },
}, { versionKey: false });

ChatSchema.plugin(mongoosePaginate);

ChatSchema.index({ name: 'text' });

export const User = mongoose.model('User', UserSchema);