const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const dateTime = new Date();
    const dateTimeLabel = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    console.log(`..MIDDLEWARE..LOGGER [${dateTimeLabel}] ..${method} .${url}. `);
    next();
}
module.exports = logger;