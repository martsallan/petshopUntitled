import bcrypt from 'bcryptjs'

const data = {

    users: [
        {
            name: 'Pablo Montel',
            email: 'pmontel@hotmail.com',
            password: bcrypt.hashSync('12345', 8),
            phoneNumber: '21971490667',
            isAdmin: true,
        },
        {
            name: 'Allan Martins',
            email: 'am@hotmail.com',
            password: bcrypt.hashSync('12345', 8),
            phoneNumber: '22998455674',
        },
    ],
    products: [
        {
            name: 'produto 1',
            category: 'categoria 1',
            image: 'https://amici.com.br/wp-content/uploads/sites/83/2020/04/imagem-indispon%C3%ADvel.jpg',
            price: 120.10,
            brand: 'Marca 1',
            qqtStock: 22,
            description: 'Descricao produto 1',
        },
        {
            name: 'produto 2',
            category: 'categoria 2',
            image: 'https://amici.com.br/wp-content/uploads/sites/83/2020/04/imagem-indispon%C3%ADvel.jpg',
            price: 120.10,
            brand: 'Marca 2',
            qqtStock: 14,
            description: 'Descricao produto 2',
        },
        {
            name: 'produto 3',
            category: 'categoria 3',
            image: 'https://amici.com.br/wp-content/uploads/sites/83/2020/04/imagem-indispon%C3%ADvel.jpg',
            price: 120.10,
            brand: 'Marca 3',
            qqtStock: 59,
            description: 'Descricao produto 3',
        },
        {
            name: 'produto 4',
            category: 'categoria 4',
            image: 'https://amici.com.br/wp-content/uploads/sites/83/2020/04/imagem-indispon%C3%ADvel.jpg',
            price: 120.10,
            brand: 'Marca 4',
            qqtStock: 31,
            description: 'Descricao produto 4',
        },
        {
            name: 'produto 5',
            category: 'categoria 5',
            image: 'https://amici.com.br/wp-content/uploads/sites/83/2020/04/imagem-indispon%C3%ADvel.jpg',
            price: 120.10,
            brand: 'Marca 5',
            qqtStock: 77,
            description: 'Descricao produto 5',
        },
    ],
}

export default data;