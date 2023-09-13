const Products_detail = [
    {
        id: "0",
        name: "iPhone 15 Pro",
        slug: "i-15-p",
        order: 100,
        stock: 100,
        status: false,
        price: 999,
        series: "15",
        ram: "16gb",
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
                name: "Natural Titanium",
                color: "#bbb5a9",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993"
            },
            {
                id: 1,
                name: "Blue Titanium",
                color: "#4a5161",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609"
            },
            {
                id: 2,
                name: "White Titanium",
                color: "#f3f2ed",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180"
            },
            {
                id: 3,
                name: "Black Titanium",
                color: "#4a4b4d",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846357018"
            },
        ],
        colorsImage: [
            {
                0: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846362456"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363675"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636437"
                    },
                ],
                1: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360208"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011635011"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636681"
                    },
                ],
                2: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846365217"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367022"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636748"
                    },
                ],
                3: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846357018"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846357050"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011634662"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011636618"
                    },
                ],

            }
        ]

    },
    {
        id: "1",
        name: "iPhone 15",
        slug: "i-15",
        order: 72,
        stock: 89,
        status: false,
        price: 999,
        series: "15",
        ram: "16gb",
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
                color: "#d5dde0",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972"
            },
            {
                id: 1,
                name: "Pink",
                color: "#ecd6d8",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378"
            },
            {
                id: 2,
                name: "Yellow",
                color: "#ede8ca",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780785"
            },
            {
                id: 3,
                name: "Green",
                color: "#d1dacb",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780268"
            }
        ],
        colorsImage: [
            {
                0: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810669483"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810674284"
                    }
                ],
                1: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810678144"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810682753"
                    }
                ],
                2: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780785"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810682587"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810685261"
                    }
                ],
                3: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780268"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810673742"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692810678980"
                    }
                ],

            }
        ]

    },
    {
        id: "2",
        name: "iPhone 14 ",
        slug: "i-14",
        order: 61,
        stock: 16,
        status: false,
        price: 799,
        series: "14",
        ram: "8gb",
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
        ],
        colorsImage: [
            {
                0: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026582322"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026556478"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026704198"
                    }
                ],
                1: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676505836714"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676505834792"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1677200366440"
                    }
                ],
                2: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205642"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027159917"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027370210"
                    }
                ],
                3: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205808"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027153978"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027358341"
                    }
                ],

            }
        ]

    },
    {
        id: "3",
        name: "iPhone 13",
        slug: "i-13",
        order: 55,
        stock: 90,
        status: false,
        price: 699,
        series: "13",
        ram: "8gb",
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
        ],
        colorsImage: [
            {
                0: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063678624"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-blue_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063676936"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-blue_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063682539"
                    }
                ],
                1: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-green?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693064083582"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-green_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693064083513"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-green_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693064090213"
                    }
                ],
                2: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063157154"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063165480"
                    }
                ],
                3: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063801539"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-product-red_AV1_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063799413"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-product-red_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063804551"
                    }
                ],

            }
        ]

    },
    {
        id: "4",
        name: "iPhone SE",
        slug: "i-se",
        order: 30,
        stock: 91,
        status: false,
        price: 429,
        series: "SE",
        ram: "4gb",
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
                color: "#161d26",
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
        ],
        colorsImage: [
            {
                0: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263296"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-midnight_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316262479"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-midnight_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316265426"
                    }
                ],
                1: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263356"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316262818"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316265464"
                    }
                ],
                2: [
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263304"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-product-red_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316262622"
                    },
                    {
                        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-product-red_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316265239"
                    }
                ]
            }
        ]
    },
]
export { Products_detail }