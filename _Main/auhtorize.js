const authorize = (req,res,next) => {
    const url = req.url;
    const method = req.method;
    const dateTime = new Date();
    const { user } = req.query;
    const dateTimeLabel = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    console.log(`..MIDDLEWARE..AUTHORIZE [${dateTimeLabel}] ..${method} .${url}. USER=${user}`);
    console.log(user);
    if (user === 'john') {
        req.user = {name:'john',id:3 }
        next();
    } else {
        res.status(401).send('<h2>UNAUTHORIZED ACCESS</h2>')
    }
}

module.exports = authorize;