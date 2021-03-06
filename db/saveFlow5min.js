module.exports = function(table) {
  table.integer('id');
  table.integer('accountId').defaultTo(0);
  table.integer('port');
  table.bigInteger('flow');
  table.bigInteger('time');
  table.index(['time', 'port'], '5minIndex');
}