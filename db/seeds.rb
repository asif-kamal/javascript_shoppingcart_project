# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


items = [
    {
        "id": 1,
        "name": "Ninja Cargo Net",
        "image": "https://www.gymsupply.com/images/products/detail/PPseries_cargonet21.jpg" ,
        "price": 5

    },

    {
        "id": 2,
        "name": "Pommel Horse",
        "image": "https://www.gymsupply.com/images/products/detail/EvoPommelangle.jpg",
        "price": 4150

    },

    {
        "id": 3,
        "name": "The Scoop Inline System",
        "image": "https://www.gymsupply.com/images/products/detail/the_scoop_1.jpg",
        "price": 1016
    },

    {
        "id": 4,
        "name": "Trainer Suede Center Pad",
        "image": "https://www.gymsupply.com/images/products/detail/TTrainerSuede%20detail.jpg",
        "price": 185

    },

    {
        "id": 5,
        "name": "The Original Block: Multi Pack",
        "image": "https://www.gymsupply.com/images/products/detail/OriginalBlock6Multi%20detail.jpg",
        "price": 349
    },

    {
        "id": 6,
        "name": "Climbing Ropes Accessories",
        "image": "https://www.gymsupply.com/images/products/detail/dgsropechoices.jpg",
        "price": 7
    },

    {
        "id": 7,
        "name": "Rock Wall Hand Holds",
        "image": "https://www.gymsupply.com/images/products/detail/routeholds.JPG",
        "price": 78
    },

    {
        "id": 8,
        "name": "American Classic Carpet",
        "image": "https://www.gymsupply.com/images/products/detail/classiccarpet.jpg",
        "price": 12470
    },

    {
        "id": 9,
        "name": "Prep Mat",
        "image": "https://www.gymsupply.com/images/products/detail/PrepMat%20detail.jpg",
        "price": 160
    },

    {
        "id": 10,
        "name": "Catcher",
        "image": "https://www.gymsupply.com/images/products/detail/TheCatcher%20detail.jpg",
        "price": 1795
    }
]

items.each do |item| 
    Api::V1::Item.create(name: item[:name], image: item[:image], price: item[:price])
end
