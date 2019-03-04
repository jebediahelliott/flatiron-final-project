ActiveAdmin.register Dog do
  # belongs_to :user
  permit_params :name, :breed, :training_notes, :user_id

  index do
    column :name
    column :breed
    column :training_notes
    column :user
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
