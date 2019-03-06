ActiveAdmin.register User do
  permit_params :name, :email, dogs_attributes: [:name, :breed, :training_notes, :id, :_destroy]

  index do
    column :name
    column :email
    column 'Dogs' do |user|
    user.dogs.map(&:name).join(', ')
  end
    actions
  end

  filter :name

  show do
    attributes_table do
      row :name
      row :email
    end

    panel 'Dogs' do
      table_for user.dogs do
        column :name
        column :breed
        column :training_notes
      end
    end
    active_admin_comments
  end

  form do |f|
    f.inputs 'Details' do
     f.input :name
     f.input :email
    end

    f.inputs 'Dogs' do
      f.has_many :dogs, heading: false, :allow_destroy => true  do |d|
        d.input :name
        d.input :breed
        d.input :training_notes
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
