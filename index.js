"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('./types.json');
var taigaStatus = require('./status.json');

module.exports = engine({
  types: conventionalCommitTypes.types,
  status: taigaStatus.status
});