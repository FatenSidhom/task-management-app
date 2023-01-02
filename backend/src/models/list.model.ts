import mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name: String
});

export const list = mongoose.model('List', ListSchema);