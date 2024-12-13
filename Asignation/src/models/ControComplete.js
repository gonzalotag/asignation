import mongoose from 'mongoose';

const ControlCompleteSchema = new mongoose.Schema({
  nombresApellidos: String,
  apodoUsuarioCobrador: String,
  dniCobrador: String,
  casosAsignadosCobrador: String,
  reporte: String,
  telefono: String,
}, {
  timestamps: true,
  collection: 'RegistroControlCompleto',
});

export default mongoose.model('ControlComplete', ControlCompleteSchema);
