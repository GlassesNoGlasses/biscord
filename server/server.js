
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(express.json());
app.use(cors());
// app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

const users = [
    {id: 1, username: 'user1', email: 'user1@gmail.com', description: 'I am gay', friends: []},
    {id: 2, username: 'user2', email: 'user2@gmail.com', description: 'I am gay', friends: []},
    {id: 3, username: 'user3', email: 'user3@gmail.com', description: 'I am gay', friends: []},
]

function getUser(id) {
    return users.find(user => user.id == id);
}

app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    const user = getUser(id);

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.send({data: user});
})

