let userSchema = new mongoose.Schema({
    name: String,
    key: String,
    id: Number,
    cards: Object
});

let user = mongoose.model('User', userSchema);