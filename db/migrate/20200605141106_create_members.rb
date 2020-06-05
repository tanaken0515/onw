class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.references :room, foreign_key: true, null: false
      t.string :check_in_code, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
