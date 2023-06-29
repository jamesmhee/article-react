const Article = require('../models/Articles')

// List All Article
exports.LIST = async (req, res) => {
    try{
        const Articles = await Article.find({}).exec()
        res.send(Articles)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}
// Get Article from ID
exports.GET = async (req, res) => {
    try{
        const id = req.params.id
        const FindArticleID = await Article
            .findOne({ _id:id })
            .exec()
        res.send(FindArticleID)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

// Create Article
exports.POST = async (req, res) => {
    try { 
        console.log(req.body)
        const CreateArticle = await Article(req.body)
            .save()
        res.send(CreateArticle)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

// Edit Article
exports.PUT = async (req, res) => {
    try { 
        const id = req.params.id
        const Updated = await Article
            .findOneAndUpdate({ _id:id},req.body,{ new: true})
            .exec()
        res.send(Updated)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

// Delete
exports.DELETE = async (req, res) => {
    try { 
        const id = req.params.id
        const DeleteArticle = await Article
            .findOneAndDelete({ _id:id })
            .exec()
        res.send(DeleteArticle)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}