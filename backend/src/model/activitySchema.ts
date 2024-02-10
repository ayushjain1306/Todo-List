import mongoose from 'mongoose';

const activitySchema: any = new mongoose.Schema({
    user: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    date: {
        type: "String",
        required: true
    },
    time: {
        type: "String",
        required: true
    }
});

const Activity: any = mongoose.model("activities", activitySchema);

export default Activity;