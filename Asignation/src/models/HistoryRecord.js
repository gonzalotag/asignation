import mongoose from 'mongoose';

const HistoryRecordSchema = new mongoose.Schema({
  descripcionExcepcion: String,
  apodoUsuario: String,
  codigoProducto: String,
  codigoOperacion: String,
  contenidoOperacion: String,
  resultadosOperacion: String,
  tiempoOperacion: String,
}, {
  timestamps: true,
  collection: 'RegistroHistorial',
});

export default mongoose.model('HistoryRecord', HistoryRecordSchema);