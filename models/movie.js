var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;
 	
var movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
});

 // Compile the schema into a model and export it
 module.exports = mongoose.model('Movie', movieSchema);