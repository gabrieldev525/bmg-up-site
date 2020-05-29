'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormInfoSchema extends Schema {
  up () {
    this.create('form_infos', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('cellphone', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('form_infos')
  }
}

module.exports = FormInfoSchema
