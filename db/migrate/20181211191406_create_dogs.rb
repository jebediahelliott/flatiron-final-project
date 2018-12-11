class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :training_notes
      t.integer :user_id
      t.timestamps
    end
  end
end
