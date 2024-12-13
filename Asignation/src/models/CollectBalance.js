import mongoose from mongoose;

const CollectBalanceSchema = new mongoose.Schema({
  idPedido: String,
  idPrestamo: String,
  cantidadPrestada: String,
  cantidadRecibida: String,
  codigoProyecto: String,
  numeroTarjeta: String,
  nombreBanco: String,
  titularTarjeta: String,
  estadoFinal: String,
},{
    timestamps:true,
    collection: 'CobrarBalances'
});

export default mongoose.model('CollectBalance', CollectBalanceSchema);
