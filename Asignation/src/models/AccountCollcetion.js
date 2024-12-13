import mongoose from mongoose;

const AccountCollectionSchema = new mongoose.Schema({
  cuentaUsuario: String,
  apodoUsuario: String,
  codigoProducto: String,
  codificacionRoles: String,
  tandaKoleksi: String,
  nombreRol: String,
  situacionLaboral: String,
  nombreGrupo: String,
  origenCuenta: String,
  fechaCreacion: String,
},{
    timestamps:true,
    collection: 'GestionDeCuentas'
});

export default mongoose.model('AccountCollection', AccountCollectionSchema);

