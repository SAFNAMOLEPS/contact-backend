const db= require('../services/db')

const getAllUsers=()=>{
    return db.user.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    users:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'User not find'
                }
            }
        }
    )
}
 
const saveUser=(id,name,email,address,phone)=>{
    return db.user.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'user already exist'
            }
        }
        else{
            const newuser=new db.user({id,name,email,address,phone})
            newuser.save()
            return{
                statusCode:200,
                message:'user saved successfuly'
            }
            
            
        }
    })
}

const DeleteUser=(id)=>{
    return db.user.deleteOne({id}).then((response)=>{
        return{
            statusCode:200,
            message:"contact details deleted successfully"
        }
    })
    .catch((error)=>{
        return{
             statusCode:401,
             message:"can't delete the user from the database"
        }
    })
}

const viewUser=(id)=>{
    return db.user.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    users:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'User not find'
                }
            }
        }
    )
}

const updateUser=(id,name,email,address,phone)=>{
    return db.user.findOne({id}).then(
        (result)=>{
            if(result){

                result.id=id;
                result.name=name;
                result.email=email;
                result.address=address;
                result.phone=phone;
                result.save();

                return{
                    statusCode:200,
                    message:'employee details updated successfully'
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'User not find'
                }
            }
        }
    )
}



module.exports={
    getAllUsers,
    saveUser,
    DeleteUser,
    viewUser,
    updateUser
}