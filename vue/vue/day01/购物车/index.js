window.addEventListener('load', function() {
    const app = new Vue({
        el: '#app',
        data: {
            list: [{
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                }, {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-3',
                    price: 128.00,
                    count: 1
                }
            ]
        },
        methods: {
            decrement(i) {
                this.list[i].count--
            },
            increment(i) {
                this.list[i].count++
            },
            handleRemove(i) {
                this.list.splice(i, 1)
            }
        },
        filters: {
            showPrice(value) {
                return '¥' + value.toFixed(2)
            }
        },
        computed: {
            totalPrice() {
                // let s = 0;
                // for (let i in this.list) {
                //     s += this.list[i].price * this.list[i].count
                // }
                // return s

                return this.list.reduce(function(prices, list) {
                    return prices + list.price * list.count
                })
            }
        }
    })
})