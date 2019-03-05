class User < ApplicationRecord
  has_secure_password
  has_many :dogs
  accepts_nested_attributes_for :dogs, allow_destroy: true
end
