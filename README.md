# README

Web app to display information about a product or service as well as manage users and user info.

##Ruby version
  2.3.3
##Installation
Fork and clone the repo. Run "rails db:migrate" or "rails db:setup" in the terminal to get the database up and running. Once the database is up open the rails console and create an admin user.
```
User.create(name: 'name', email: 'email', password: 'password')
```
Use "rake start" to launch the servers and a browser window should open automagically.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/jebediahelliott/jpj-canine-training. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
[MIT License](https://opensource.org/licenses/MIT).
