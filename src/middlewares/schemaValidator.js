const schemaValidator = (schema) =>{
    return(req,res,next) =>{
        const result = schema.validate(req.body, {abortEarly: false})
        if(result.error){
            return res.status(400).json({
                errores: result.error.details.map(error =>({
                    atributo: error.path[0],
                    error: error.message
                }))
            })

        }
        next()
    }

}

module.exports = {schemaValidator}