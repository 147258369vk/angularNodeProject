const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken=(req,res,next)=>{
    var token;

    if('authorization' in req.headers)
    {
        token=req.headers['authorization'].split(' ')[1];

        if(!token)
        return res.status(404).json({message:'Token is not generated'});
        else
        {
            jwt.verify(token,"SecretToken",(err,decoded)=>{
                if(err)
                {
                    return res.status(401).json({message:'Token not authorized'});
                }
                else{
                    req._id=decoded._id;
                    next();
                }
            })
        }

    }
}