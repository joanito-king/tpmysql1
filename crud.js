const db = require('./db');
// fonction ajouter user 
function addUser(prenom,nom,login,password){ 
    const sql = "INSERT INTO user (prenom,nom,login,password) VALUES (?,?,?,?)";
    db.query(sql,[prenom,nom,login,password],(err,result)=>{
        if(err){
            console.log("erreur lors de l'ajout de l'utilisateur");
        }else{
            console.log("utilisateur ajouté avec succès", result.insertId);
        }
    });
}
    // fonction modifier user
    function updateUser(id,prenom,nom,login,password){ 
        const sql = "UPDATE user SET prenom=?,nom=?,login=?,password=? WHERE id=?";
        db.query(sql,[prenom,nom,login,password,id],(err,result)=>{
            if(err){
                console.log("erreur lors de la modification de l'utilisateur");
            }else{
                console.log("utilisateur modifié avec succès", result.affectedRows);
            }
        });
    }
    // fonction supprimer user
    function deleteUser(id){ 
        const sql = "DELETE FROM user WHERE id=?";
        db.query(sql,[id],(err,result)=>{
            if(err){
                console.log("erreur lors de la suppression de l'utilisateur");
            }else{
                console.log("utilisateur supprimé avec succès", result.affectedRows);
            }
        });
    }
    // fonction afficher tous les users
    function getAllUsers(){ 
        const sql = "SELECT * FROM user";
        db.query(sql,(err,results)=>{
            if(err){
                console.log("erreur lors de la récupération des utilisateurs");
            }else{
                console.log("utilisateurs récupérés avec succès", results);
            }
        });
    }
    //fonction rechercher user par id
    function getUserById(id){ 
        const sql = "SELECT * FROM user WHERE id=?";
        db.query(sql,[id],(err,results)=>{
            if(err){
                console.log("erreur lors de la récupération de l'utilisateur");
            }else{
                console.log("utilisateur récupéré avec succès", results);
            }
        });
    }
module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById
};