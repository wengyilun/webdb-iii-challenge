
exports.up = function(knex, Promise) {
	return knex.schema.createTable('cohorts', function (tbl) {
		tbl.increments()
		tbl.string('name')
		   .notNullable()
		   .unique()
		   
		tbl.timestamps(true,true)
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cohorts')
};
