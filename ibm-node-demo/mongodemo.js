console.log("mongodemo.js");

import mongoose from 'mongoose';

export const dbcon = () => {

    mongoose.connect('mongodb://localhost:27017/ibm-demo')
        .then(() => console.log('Connected!'));
}