class StaticPageSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :paragraphs
end
