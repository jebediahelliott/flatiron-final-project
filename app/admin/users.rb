ActiveAdmin.register User do
  permit_params :name, :email, :dogs

  index do
    column :name
    column :email
    column 'Dogs' do |user|
    user.dogs.map(&:name).join(', ')
  end
    actions
  end
  filter :name


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
