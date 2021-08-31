function averageRating(products,productName)
{
    let productExist = products.find(productExist=> productExist.name===productName.name)
    let avgRating=0
    if(productExist!==undefined)
    {
        for(let i=0;i<productExist.ratings.length;i++)
            {
                avgRating+=productExist.ratings[i].rate
            }
        avgRating=avgRating/productExist.ratings.length            
    }
    else console.log("Product does not exist to calculate average rating!")
    return avgRating
}


function rateProduct(products,productName,newRating)
{
    let productExist = products.find(productExist=> productExist.name===productName.name)
    if(productExist!==undefined)
    {
        productExist.ratings.push(newRating)
        console.log("Product rated successfully!")
    }
    else console.log("Product does not exist to rate!")
}

// Given Data
const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];
rateProduct(products,{name:'mobile phone'},{userId: 'fg12cy', rate: 4 })
console.log(products.find(products=> products.name==='mobile phone'))         //Rating done
console.log("Average rating is "+averageRating(products,{name:'mobile phone'})) // Calculate average ratings