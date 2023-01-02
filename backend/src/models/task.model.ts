import mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: { type: String, 
        unique: false,
        sparse: true, },
    note: { type: String, 
        unique: false,
        sparse: true, },
    list:  { type: Schema.Types.ObjectId, ref: "List" } 
    
});

export const task = mongoose.model('Task', TaskSchema);