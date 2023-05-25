module.exports = function (sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: dataType.INTEGER
        }, 
        comentario: {
            type: dataType.STRING,
            notNull: true 
        }, 
        createdAt: {
            type: dataTypes.DATE
        }, 
        UpdatedAt: {
            type: dataTypes.DATE
        }, 
        DeletedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'comentarios', 
        timestamps: true, 
        underscored: true
    }
    
    let Comentarios = sequelize.define(alias, cols, config)
    Comentarios.associate= function(models){
        Comentarios.belongsTo(models.usuario,{
            as:'usuario_comentario',
            foreignKey:'usuario_id'
        }),
        Comentarios.belongsTo(models.Producto,{
            as:'comentario_producto',
            foreignKey:'producto_id'
        })
    }
return Comentarios
}