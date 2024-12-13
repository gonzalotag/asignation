import mongoose from mongoose;

const WorkStationSchema = new mongoose.Schema({
  numeroPrestamo: String,
  idSubFactura: String,
  estadoReembolso: String,
  nombreCliente: String,
  numeroTelefonoMovil: String,
  clientesNuevos: String,
  importeAdeudado: String,
  importePagado: String,
  registroNotas: String,
  codigoProducto: String,
  fechaReembolso: String,
  diasVencidos: String,
  fechaCancelacionCuenta: String,
  fechaCreacionTarea: String,
  fechaTramitacionCaso: String,
  nombreEmpresa: String,
  apodoUsuarioCobro: String,
},{
    timestamps:true,
    collection: 'EstacionDeTrabajo'
});

export default mongoose.model('WorkStation', WorkStationSchema);


