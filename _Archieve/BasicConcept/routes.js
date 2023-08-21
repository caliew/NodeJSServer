const fs = require('fs');
const { Module } = require('module');

const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;
    //  ------------------------------
    //  BASIC CONCEPT OF ROUTE HANDLER
    //  ------------------------------
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>NODE.JS SERVER</title></head>');
        res.write('<body>');
        res.write('<div>');
        res.write('<h1>BASIC WORKING CONCEPT OF HTTP</h1>')
        res.write('<div>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="textInput">');
        res.write('<button type="submit">SEND</button>');
        res.write('</form>');
        res.write('</div>')
        res.write('</div>')
        res.write('</body>');
        res.write('</html>');        
        return res.end();
    }
    if (url ==='/message' && method==='POST') {
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const timeStamp = new Date().toTimeString();
            const message = timeStamp + " : " + parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            })
        });
    }
    // ---------
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>NODE.JS SERVER</title></head>')
    res.write('<body><h2>HELLO, WELCOME TO NODE.JS SERVER...</h2></body>')
    res.write('</html>');
    res.end();
    
}

module.exports= requestHandler;
