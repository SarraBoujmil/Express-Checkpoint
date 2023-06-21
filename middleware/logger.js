const date= new Date()
const day=date.getDay()
const hour= date.getHours()


console.log("fghj")

const logger=(req,res,next)=>{

    if (hour>22)
    {
        res.send('<h1 style="color:red">Sorry, we are closed!</h1>')   
    }
    next()

}
module.exports=logger