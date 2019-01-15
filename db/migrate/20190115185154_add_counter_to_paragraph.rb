class AddCounterToParagraph < ActiveRecord::Migration[5.2]
  def change
    add_column :paragraphs, :counter, :integer
  end
end
