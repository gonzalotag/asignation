import mongoose from mongoose;

const SmsCollectionSchema = new mongoose.Schema({
  remitenteSms: String,
  numeroTelefonoMovil: String,
  canalEnvio: String,
  codigoProducto: String,
  contenido: String,
  fechaEnvio: String,
  estadoEnvioSms: String,
  estadoLlegadaSms: String,
},{
    timestamps:true,
    collection: 'ResgitroSms'
});

export default mongoose.model('SmsCollection', SmsCollectionSchema);

