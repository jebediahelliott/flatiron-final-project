# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
jeb = User.create(name: 'Jeb', email: 'email@email.com', password: '1234')

jeb.dogs.build(name: 'Arya', breed: 'Boxer/Beagle', training_notes: 'notes')
jeb.dogs.build(name: 'Hodor', breed: 'Pitbull', training_notes: 'notes')

jeb.save

StaticPage.create(title: 'About')
StaticPage.create(title: 'FAQ')
StaticPage.create(title: 'Contact Us')
StaticPage.create(title: 'Training Programs')

StaticPage.all.each do |page|
  3.times do
    page.paragraphs.build(content: Faker::Lorem.paragraphs)
  end
  page.save
end
