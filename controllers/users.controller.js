let users = require('../users.json');

module.exports.getAllUsers = (req, res, next) => {
    
    const {limit, page} = req.query;

    res.json(users.slice(0, limit));

}


module.exports.saveAUser = (req, res) => {
    
    tools.push(req.body);
    console.log(req.query);
    res.send('users found');

}

module.exports.getUserDetail = (req, res) => {
    
    const {name} = req.params;

    console.log(name);

    const foundUser = users.find(user => user.name == name);

    res.send(foundUser);
    
}

module.exports.updateUser = (req, res) => {
    
    const {id} = req.params;

    const filter = {_id: req.params};

    const newData = users.find(user => {
        
        user.id === Number(id);

    })

    newData.id = id;
    
    newData.name = req.body;

    res.send(newData);

}

module.exports.deleteUser = (req, res, next) => {
 
    const {id} = req.params;

    const filter = { _id: id};

    users.filter(user => user.id !== Number(id));

    res.send(users);

}