import mongoose from 'mongoose';

const PeriodicAuditSchema = new mongoose.Schema({
  idAuditor: String,
  nombreAuditor: String,
  usuarioDesignado: String,
  nombreOperador: String,
  observacion: String,
  amonestacion: String,
  valorMulta: String,
  estadoMulta: String,
  fechaCreacion: String,
}, {
  timestamps: true,
  collection: 'RegistroAuditorias',
});

export default mongoose.model('PeriodicAudit', PeriodicAuditSchema);
