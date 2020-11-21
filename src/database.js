const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${ NOTES_APP_MONGODB_HOST }/${ NOTES_APP_MONGODB_DATABASE }`;
//mongodb+srv://root:<password>@cluster0.zuwm6.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    db => console.log('Database is connected...')
).catch(
    err => console.log(err)
);