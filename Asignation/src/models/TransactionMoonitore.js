import mongoose from 'mongoose';

const TransactionMoonitoreSchema = new mongoose.Schema({
  idPedido: String,
  idPrestamo: String,
  cantidadPrestada: String,
  cantidadRecibida: String,
  codigoProyecto: String,
  numeroTarjeta: String,
  nombreBanco: String,
  titularTarjeta: String,
  estadoFinal: String,
}, {
  timestamps: true,
  collection: 'RegistroTransacciones',
});

export default mongoose.model('TransactionMoonitore', TransactionMoonitoreSchema);