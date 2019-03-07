ActiveAdmin.register StaticPage do
  permit_params :title, paragraphs_attributes: [:content, :id, :_destroy]

  config.filters = false
  index do
    column :title
    actions
  end

  show do
    attributes_table do
      row :title
    end

    panel 'Paragraphs' do
      table_for static_page.paragraphs do
        column :content
      end
    end
  end

  form do |f|
    f.inputs 'Title' do
      f.input :title
    end

    f.inputs 'Paragraphs' do
      f.has_many :paragraphs, :heading => false, :allow_destroy => true do |p|
        p.input :content, :as => :text
      end
    end
    f.actions
  end
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
