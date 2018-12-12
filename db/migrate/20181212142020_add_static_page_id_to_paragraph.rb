class AddStaticPageIdToParagraph < ActiveRecord::Migration[5.2]
  def change
    add_column :paragraphs, :static_page_id, :integer
  end
end
