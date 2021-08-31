//Add user if it does not exist
function signUp(users,newUser)
{
    let userExist = users.find(userExist=> userExist.username===newUser.username)
    if(userExist===undefined)
    {
        users.push(newUser)
        console.log("Signed up successfully!")
    }
    else console.log("Can not sign up as You already have an account")
}
// Signing In 
function signIn(users,newUser)
{
    let userExist = users.find(userExist=> userExist.username===newUser.username)
    if(userExist===undefined)
    {
        console.log("Can not signed up as you are not registered!")
    }
    else console.log("Signed in Successfully!")
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

//Sign Up user if it does not exist
let newUser=
{
_id: 'ab1e1x',
username: 'Amrendra',
email: 'amrendra@amrendra.com',
password: '12345',
createdAt:'15/03/2020 9:00 AM',
isLoggedIn: false
}
signIn(users,newUser)       // Trying to signed up without having an account!
signUp(users,newUser)       // Signing up as user do not have an account.
signIn(users,newUser)       // Signed in as user is already registered!