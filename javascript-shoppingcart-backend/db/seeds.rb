# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = [
    {
        "id": 1,
        "name": "Competition Training Mats"
    },

    {
        "id": 2,
        "name": "Climbing Ropes"
    },

    {
        "id": 3,
        "name": "Men's Equipment"
    },

    {
        "id": 4,
        "name": "Women's Equipment"
    },

    {
        "id": 5,
        "name": "Tumbling Aids"
    }
]

categories.each do |category|
    Category.create(name: category[:name])
end

items = [
    {
        "id": 1,
        "name": "Ninja Cargo Net",
        "price": 5,
        "image": "https://www.gymsupply.com/images/products/detail/PPseries_cargonet21.jpg",
        "category_id": 5,
        "quantity": 0
    },

    {
        "id": 2,
        "name": "Pommel Horse",
        "price": 4150,
        "image": "https://www.gymsupply.com/images/products/detail/EvoPommelangle.jpg",
        "category_id": 4,
        "quantity": 0

    },

    {
        "id": 3,
        "name": "The Scoop Inline System",
        "price": 1016,
        "image": "https://www.gymsupply.com/images/products/detail/the_scoop_1.jpg",
        "category_id": 4,
        "quantity": 0
    },

    {
        "id": 4,
        "name": "Trainer Suede Center Pad",
        "price": 185,
        "image": "https://www.gymsupply.com/images/products/detail/TTrainerSuede%20detail.jpg",
        "category_id": 3,
        "quantity": 0

    },

    {
        "id": 5,
        "name": "The Original Block: Multi Pack",
        "price": 349,
        "image": "https://www.gymsupply.com/images/products/detail/OriginalBlock6Multi%20detail.jpg",
        "category_id": 3,
        "quantity": 0
    },

    {
        "id": 6,
        "name": "Climbing Ropes Accessories",
        "price": 7,
        "image": "https://www.gymsupply.com/images/products/detail/dgsropechoices.jpg",
        "category_id": 3,
        "quantity": 0
    },

    {
        "id": 7,
        "name": "Rock Wall Hand Holds",
        "price": 78,
        "image": "https://www.gymsupply.com/images/products/detail/routeholds.JPG",
        "category_id": 1,
        "quantity": 0
    },

    {
        "id": 8,
        "name": "American Classic Carpet",
        "price": 12470,
        "image": "https://www.gymsupply.com/images/products/detail/classiccarpet.jpg",
        "category_id": 1,
        "quantity": 0
    },

    {
        "id": 9,
        "name": "Prep Mat",
        "price": 160,
        "image": "https://www.gymsupply.com/images/products/detail/PrepMat%20detail.jpg",
        "category_id": 2,
        "quantity": 0
    },

    {
        "id": 10,
        "name": "Catcher",
        "price": 1795,
        "image": "https://www.gymsupply.com/images/products/detail/TheCatcher%20detail.jpg",
        "category_id": 2,
        "quantity": 0
    }
]

items.each do |item| 
   Item.create(name: item[:name], image: item[:image], price: item[:price], category_id: item[:category_id])
end
