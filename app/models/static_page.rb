class StaticPage < ApplicationRecord
  has_many :paragraphs
  accepts_nested_attributes_for :paragraphs
end
