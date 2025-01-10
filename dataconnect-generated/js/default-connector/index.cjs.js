const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Hospital-Management-System-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

