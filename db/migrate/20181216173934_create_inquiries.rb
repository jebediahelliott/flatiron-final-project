class CreateInquiries < ActiveRecord::Migration[5.2]
  def change
    create_table :inquiries do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :message
      t.timestamps
    end
  end
end
