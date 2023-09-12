const Products = [
    {
        id: "0",
        name: "iPhone 14 Pro",
        slug: "iphone-14-pro",
        order: 72,
        stock: 89,
        status: false,
        price: 999,
        series: "14 Pro",
        ram: 16,
        memory: [
            {
                id: 0,
                gb: 128,
                price: 999
            },
            {
                id: 1,
                gb: 256,
                price: 1099
            },
            {
                id: 2,
                gb: 512,
                price: 1299
            }
        ],
        colors: [
            {
                id: 0,
                name: "Deep Purple",
                color: "#ccc",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578"
            },
            {
                id: 1,
                name: "Gold",
                color: "#000",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840519"
            },
            {
                id: 2,
                name: "Silver",
                color: "#ededed",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840488"
            },
            {
                id: 3,
                name: "Space Black",
                color: "#4e4d4b",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-storage-select-202209-6-1inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663790290240"
            }
        ]

    },
    {
        id: "1",
        name: "iPhone 14 ",
        slug: "iphone-14",
        order: 61,
        stock: 16,
        status: false,
        price: 799,
        series: "14",
        ram: 8,
        memory: [
            {
                id: 0,
                gb: 128,
                price: 799
            },
            {
                id: 1,
                gb: 256,
                price: 899
            },
            {
                id: 2,
                gb: 512,
                price: 1099
            }
        ],
        colors: [
            {
                id: 0,
                name: "Blue",
                color: "#a8bbcc",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026582322"
            },
            {
                id: 1,
                name: "Yellow",
                color: "#fff59c",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676505836714"
            },
            {
                id: 2,
                name: "Red",
                color: "#fb1532",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205642"
            },
            {
                id: 3,
                name: "Purple",
                color: "#e5ddea",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205808"
            }
        ]

    },
    {
        id: "2",
        name: "iPhone 13",
        slug: "iphone-13",
        order: 55,
        stock: 90,
        status: false,
        price: 699,
        series: "13",
        ram: 8,
        memory: [
            {
                id: 0,
                gb: 128,
                price: 699
            },
            {
                id: 1,
                gb: 256,
                price: 799
            },
            {
                id: 2,
                gb: 512,
                price: 999
            }
        ],
        colors: [
            {
                id: 0,
                name: "Blue",
                color: "#447792",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712888128"
            },
            {
                id: 1,
                name: "Green",
                color: "#475846",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712887888"
            },
            {
                id: 2,
                name: "Pink",
                color: "#fbe2dd",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1657641867367"
            },
            {
                id: 3,
                name: "Red",
                color: "#c82334",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656720518797"
            }
        ]

    },
    {
        id: "3",
        name: "iPhone 12",
        slug: "iphone-12",
        order: 40,
        stock: 14,
        status: false,
        price: 599,
        series: "12",
        ram: 4,
        memory: [
            {
                id: 0,
                gb: 64,
                price: 599
            },
            {
                id: 1,
                gb: 128,
                price: 649
            },
            {
                id: 2,
                gb: 256,
                price: 749
            }
        ],
        colors: [
            {
                id: 0,
                name: "Blue",
                color: "#11476d",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-select-202207-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662149977576"
            },
            {
                id: 1,
                name: "Purple",
                color: "#c0b8e9",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-select-202207-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662150036753"
            },
            {
                id: 2,
                name: "Black",
                color: "#2b2831",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-select-202207-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662149951953"
            },

        ]

    },
    {
        id: "3",
        name: "iPhone SE",
        slug: "iphone-se",
        order: 30,
        stock: 91,
        status: false,
        price: 429,
        series: "SE",
        ram: 4,
        memory: [
            {
                id: 0,
                gb: 64,
                price: 429
            },
            {
                id: 1,
                gb: 128,
                price: 479
            },
            {
                id: 2,
                gb: 256,
                price: 579
            }
        ],
        colors: [
            {
                id: 0,
                name: "Midnight",
                color: "#ff0000",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263296"
            },
            {
                id: 1,
                name: "Starlight",
                color: "#faf7f2",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263356"
            },
            {
                id: 2,
                name: "Red",
                color: "#ba0c2f",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263304"
            },

        ]

    },
]
export { Products }