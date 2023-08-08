const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nontasabs:s1AO9jtyzVCtXC2n@article-react-app.jpwoqpk.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB Connected')
    } catch (error){
        console.log(error)
    }
}

module.exports = connectDB