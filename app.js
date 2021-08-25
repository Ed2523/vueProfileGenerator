const app = Vue.createApp({
    // template: '<h1>Hello there {{name}}<h1/>',
    data() {
        return {
            name: 'Paul',
            lastName: 'DePaul',
            email: 'thepaul@gmail.com',
            phone: '00 0000 000',
            gender: 'male',
            photo: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },

    methods: {
        async getUser() {
            const bot = await fetch('https://randomuser.me/api')
            const { results } = await bot.json()
            console.log(results);
            this.name = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.phone = results[0].phone
            this.gender = results[0].gender
            this.photo = results[0].picture.large
        },
    },
})

app.mount('#app')