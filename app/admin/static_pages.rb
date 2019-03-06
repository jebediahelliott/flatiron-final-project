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
