// --- CENTRAL DATA STORE (UPDATED TO 12 ITEMS) ---
const inventoryData = {
    1: {
        name: "Premium Cotton Tee",
        price: 34.99,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    2: {
        name: "Performance Longsleeve",
        price: 42.99,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    3: {
        name: "Premium Hoodie",
        price: 28.50,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    4: {
        name: "Performance Tee",
        price: 64.99,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    5: {
        name: "Comfort Shorts",
        price: 48.00,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    6: {
        name: "Comfort Pants",
        price: 18.99,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    7: {
        name: "?",
        price: 110.00,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    8: {
        name: "?",
        price: 89.99,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Barnacle Brown":["S","M","L","XL","2XL"],
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Sulfur Yellow":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Chromis Teal":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Gurry Green":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-S": 1,"Ambush Camo-M": 1,"Ambush Camo-L": 1,"Ambush Camo-XL": 1,"Ambush Camo-2XL": 1,
            "Barnacle Brown-S": 1,"Barnacle Brown-M": 1,"Barnacle Brown-L": 1,"Barnacle Brown-XL": 1,"Barnacle Brown-2XL": 1,
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Sulfur Yellow-S": 1,"Sulfur Yellow-M": 1,"Sulfur Yellow-L": 1,"Sulfur Yellow-XL": 1,"Sulfur Yellow-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Dragonet Red-S": 1,"Dragonet Red-M": 1,"Dragonet Red-L": 1,"Dragonet Red-XL": 1,"Dragonet Red-2XL": 1,
            "Chromis Teal-S": 1,"Chromis Teal-M": 1,"Chromis Teal-L": 1,"Chromis Teal-XL": 1,"Chromis Teal-2XL": 1,
            "Grenadier Charcoal-S": 1,"Grenadier Charcoal-M": 1,"Grenadier Charcoal-L": 1,"Grenadier Charcoal-XL": 1,"Grenadier Charcoal-2XL": 1,
            "Gurry Green-S": 1,"Gurry Green-M": 1,"Gurry Green-L": 1,"Gurry Green-XL": 1,"Gurry Green-2XL": 1,
            "Nurse Tan-S": 1,"Nurse Tan-M": 1,"Nurse Tan-L": 1,"Nurse Tan-XL": 1,"Nurse Tan-2XL": 1,
            "Hammerhead Gray-S": 1,"Hammerhead Gray-M": 1,"Hammerhead Gray-L": 1,"Hammerhead Gray-XL": 1,"Hammerhead Gray-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    9: {
        name: "Limited Edition Backpack",
        price: 45.50,
        sizes: {   
                "Abyssal Black":["L"],
                "Great White":["L"]
        },
        stock: {
            "Abyssal Black-L": 1,
            "Great White-L": 1,
        }
    },
    10: {
        name: "UV Protection Sunglasses",
        price: 24.99,
       sizes: {   
                "Dragonet Red":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"]
        },
        stock: {
            "Dragonet Red-L": 1,
            "Mako Blue-L": 1,
            "Abyssal Black-L": 1
        }
    },
    11: {
        name: "Stainless Steel Tumbler",
        price: 58.00,
        sizes: {   
                "Sunburst Orange":["S","M","L","XL","2XL"],
                "Anemone Pink":["S","M","L","XL","2XL"],
                "Hydrocoral Purple":["S","M","L","XL","2XL"],
                "Mako Blue":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Sunburst Orange-S": 1,"Sunburst Orange-M": 1,"Sunburst Orange-L": 1,"Sunburst Orange-XL": 1,"Sunburst Orange-2XL": 1,
            "Anemone Pink-S": 1,"Anemone Pink-M": 1,"Anemone Pink-L": 1,"Anemone Pink-XL": 1,"Anemone Pink-2XL": 1,
            "Hydrocoral Purple-S": 1,"Hydrocoral Purple-M": 1,"Hydrocoral Purple-L": 1,"Hydrocoral Purple-XL": 1,"Hydrocoral Purple-2XL": 1,
            "Mako Blue-S": 1,"Mako Blue-M": 1,"Mako Blue-L": 1,"Mako Blue-XL": 1,"Mako Blue-2XL": 1,
            "Abyssal Black-S": 1,"Abyssal Black-M": 1,"Abyssal Black-L": 1,"Abyssal Black-XL": 1,"Abyssal Black-2XL": 1,
            "Great White-S": 1,"Great White-M": 1,"Great White-L": 1,"Great White-XL": 1,"Great White-2XL": 1
        }
    },
    12: {
        name: "Truckers Hat",
        price: 26.00,
        sizes: {   
                "Ambush Camo":["S","M","L","XL","2XL"],
                "Grenadier Charcoal":["S","M","L","XL","2XL"],
                "Nurse Tan":["S","M","L","XL","2XL"],
                "Hammerhead Gray":["S","M","L","XL","2XL"],
                "Abyssal Black":["S","M","L","XL","2XL"],
                "Great White":["S","M","L","XL","2XL"]
        },
        stock: {
            "Ambush Camo-L": 1,
            "Grenadier Charcoal-L": 1,
            "Nurse Tan-L": 1,
            "Hammerhead Gray-L": 1,
            "Abyssal Black-L": 1,
            "Great White-L": 1
        }
    }
};

// --- SECURITY PROTOCOL VALUES ---
const ADMIN_EMAIL = "admin@deadwake.com"; 
const ADMIN_PASSWORD_REQUIREMENT = "Spaded6900!";

// --- VARIABLE LOADING SECTIONS ---
let cart = JSON.parse(localStorage.getItem('dw_cart')) || [];
let loggedInUser = localStorage.getItem('dw_user') || null;
let currentStockData = JSON.parse(localStorage.getItem('dw_stock')) || inventoryData;

function init() {
    if (!localStorage.getItem('dw_stock')) {
        localStorage.setItem('dw_stock', JSON.stringify(inventoryData));
    }

    // FIXED: Removed all loops entirely and explicitly hardcoded tracking listeners manually
    setupProductCard(1);
    setupProductCard(2);
    setupProductCard(3);
    setupProductCard(4);
    setupProductCard(5);
    setupProductCard(6);
    setupProductCard(7);
    setupProductCard(8);
    setupProductCard(9);
    setupProductCard(10);
    setupProductCard(11);
    setupProductCard(12);

    setupModals();
    checkAdminPrivileges(); 
    renderCart();
    updateUserNavbarUI();
}

function setupProductCard(id) {
    const colorSelect = document.getElementById("color-" + id);
    const sizeSelect = document.getElementById("size-" + id);
    const btn = document.getElementById("btn-" + id);
    
    if (colorSelect && sizeSelect && btn) {
        colorSelect.addEventListener('change', function() {
            updateSizeOptions(id);
            updateStockUI(id);
        });
        sizeSelect.addEventListener('change', function() {
            updateStockUI(id);
        });
        btn.addEventListener('click', function() {
            handleAddToCart(id);
        });
        
        updateSizeOptions(id);
        updateStockUI(id);
    }
}

function updateSizeOptions(id) {
    // If it's the backpack, skip dynamic rewriting to preserve your static single choice
    if (id === 9 || id === 10 || id === 11 || id === 12) return; 

    const item = currentStockData[id];
    const colorSelect = document.getElementById("color-" + id);
    const sizeSelect = document.getElementById("size-" + id);
    if (!colorSelect || !sizeSelect) return;
    
    const color = colorSelect.value;
    const availableSizes = item.sizes[color] || [];
    
    if (availableSizes.length === 1 && availableSizes[0] === "Limited") {
        sizeSelect.innerHTML = "<option value='Limited' selected>Limited</option>";
        sizeSelect.style.display = "none"; 
    } else {
        sizeSelect.style.display = "inline-block"; 
        sizeSelect.innerHTML = availableSizes.map(function(size) {
            return "<option value='" + size + "'>" + size + "</option>";
        }).join('');
    }
}

function updateStockUI(id) {
    const item = currentStockData[id];
    const card = document.getElementById("prod-card-" + id);
    const colorSelect = document.getElementById("color-" + id);
    const sizeSelect = document.getElementById("size-" + id);
    const tracker = document.getElementById("tracker-" + id);
    const btn = document.getElementById("btn-" + id);
    const soldOutBadge = document.getElementById("soldout-badge-" + id);

    if(!colorSelect || !sizeSelect) return;
    if(!sizeSelect.value) return;

    const key = colorSelect.value + "-" + sizeSelect.value;
    const currentStock = item.stock[key] !== undefined ? item.stock[key] : 0;
    
    let totalItemStock = 0;
    const stockKeys = Object.keys(item.stock);
    stockKeys.forEach(function(k) {
        totalItemStock += item.stock[k];
    });
    
    if(soldOutBadge) soldOutBadge.style.display = totalItemStock === 0 ? 'block' : 'none';

    if (currentStock === 0) {
        if(tracker) { tracker.innerText = "Out of Stock"; tracker.className = "inventory-tracker low-stock"; }
        if(btn) { btn.disabled = true; btn.innerText = "Style Unavailable"; }
        if(card) card.classList.add('out-of-style');
    } else {
        if(tracker) { tracker.innerText = currentStock + " left"; tracker.className = "inventory-tracker" + (currentStock <= 2 ? " low-stock" : ""); }
        if(btn) { btn.disabled = false; btn.innerText = "Add To Cart"; }
        if(card) card.classList.remove('out-of-style');
    }
}

function checkAdminPrivileges() {
    const adminPanel = document.getElementById('adminControlPanel');
    if (!adminPanel) return; 
    if (localStorage.getItem('dw_user_role') === 'admin') {
        adminPanel.style.display = 'block';
        setupAdminDashboard();
    } else {
        adminPanel.style.display = 'none';
    }
}

function setupAdminDashboard() {
    const prodSelect = document.getElementById('adminProductSelect');
    if(!prodSelect) return;
    prodSelect.addEventListener('change', populateAdminVariants);
    populateAdminVariants();
}

function populateAdminVariants() {
    const prodSelect = document.getElementById('adminProductSelect');
    const varSelect = document.getElementById('adminVariantSelect');
    if(!prodSelect || !varSelect) return;
    const targetId = prodSelect.value;
    const item = currentStockData[targetId];
    varSelect.innerHTML = Object.keys(item.stock).map(function(key) {
        return "<option value='" + key + "'>" + key + " (" + item.stock[key] + " left)</option>";
    }).join('');
}

window.adjustAdminStock = function(targetQuantity) {
    const prodSelect = document.getElementById('adminProductSelect');
    const varSelect = document.getElementById('adminVariantSelect');
    if(!prodSelect || !varSelect) return;
    const productId = prodSelect.value;
    const variantKey = varSelect.value;
    currentStockData[productId].stock[variantKey] = targetQuantity;
    localStorage.setItem('dw_stock', JSON.stringify(currentStockData));
    populateAdminVariants();
    updateStockUI(productId);
};

function handleAddToCart(id) {
    const item = currentStockData[id];
    const color = document.getElementById("color-" + id).value;
    const size = document.getElementById("size-" + id).value;
    const key = color + "-" + size;
    const maxStock = item.stock[key];
    const existing = cart.find(function(c) {
        return c.id === id && c.color === color && c.size === size;
    });

    if (existing) {
        if (existing.quantity < maxStock) { existing.quantity++; } else { alert("Out of stock!"); return; }
    } else {
        cart.push({ id: id, name: item.name, price: item.price, color: color, size: size, quantity: 1 });
    }
    syncAndSaveCartState();
    updateStockUI(id);
}

window.updateCartQty = function(index, change) {
    const cartItem = cart[index];
    const itemData = currentStockData[cartItem.id];
    const key = cartItem.color + "-" + cartItem.size;

    if (change > 0) {
        if (cartItem.quantity >= itemData.stock[key]) { alert("Limit reached!"); return; }
        cartItem.quantity++;
    } else {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) { cart.splice(index, 1); }
    }
    syncAndSaveCartState();
    if (document.getElementById("color-" + cartItem.id)) { updateStockUI(cartItem.id); }
};

function syncAndSaveCartState() {
    localStorage.setItem('dw_cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const totalVal = document.getElementById('cartTotalValue');
    const badge = document.getElementById('cartBadgeCount');
    if (!container) return;
    container.innerHTML = '';

    let totalCost = 0, totalItems = 0;
    cart.forEach(function(item, index) {
        totalCost += item.price * item.quantity;
        totalItems += item.quantity;
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = "<div class='cart-item-details'><h4>" + item.name + "</h4><p>" + item.color + " / " + item.size + "</p><p>$" + item.price.toFixed(2) + " x " + item.quantity + "</p></div><div class='cart-item-actions'><button class='quantity-btn' onclick='updateCartQty(" + index + ", -1)'>-</button><span>" + item.quantity + "</span><button class='quantity-btn' onclick='updateCartQty(" + index + ", 1)'>+</button></div>";
        container.appendChild(row);
    });

    if(cart.length === 0) container.innerHTML = '<p style="color:#8a99ad;text-align:center;padding:2rem 0;">Your cart is empty.</p>';
    if(totalVal) totalVal.innerText = "$" + totalCost.toFixed(2);
    if(badge) badge.innerText = totalItems;
}

function updateUserNavbarUI() {
    const authBtn = document.getElementById('authNavBtn');
    if(authBtn) authBtn.innerText = loggedInUser ? "Hi, " + loggedInUser + " (Logout)" : "Login / Signup";
}

function setupModals() {
    const authModal = document.getElementById('authModal');
    const cartModal = document.getElementById('cartModal');

    document.getElementById('authNavBtn').addEventListener('click', function() {
        if(loggedInUser) {
            localStorage.removeItem('dw_user'); localStorage.removeItem('dw_user_role'); localStorage.removeItem('dw_user_raw');
            loggedInUser = null; updateUserNavbarUI(); checkAdminPrivileges();
        } else {
            if(authModal) authModal.classList.add('active');
        }
    });

    document.getElementById('cartNavBtn').addEventListener('click', function() { if(cartModal) cartModal.classList.add('active'); });
    document.getElementById('closeAuthBtn').addEventListener('click', function() { if(authModal) authModal.classList.remove('active'); });
    document.getElementById('closeCartBtn').addEventListener('click', function() { if(cartModal) cartModal.classList.remove('active'); });
    const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const usernameGroup = document.getElementById('usernameGroup');
const authSubmitBtn = document.getElementById('authSubmitBtn');
if(loginTab && signupTab) {
loginTab.addEventListener('click', function() { loginTab.classList.add('active'); signupTab.classList.remove('active'); usernameGroup.style.display = 'none'; authSubmitBtn.innerText = 'Login'; });
signupTab.addEventListener('click', function() { signupTab.classList.add('active'); loginTab.classList.remove('active'); usernameGroup.style.display = 'block'; authSubmitBtn.innerText = 'Create Account'; });
}
document.getElementById('authForm').addEventListener('submit', function(e) {
e.preventDefault();
const email = document.getElementById('authEmail').value.trim().toLowerCase();
const password = document.getElementById('authPassword').value;
if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD_REQUIREMENT) {
loggedInUser = "Admin";
localStorage.setItem('dw_user', loggedInUser); localStorage.setItem('dw_user_role', 'admin'); localStorage.setItem('dw_user_raw', email);
} else {
loggedInUser = email.split('@');
localStorage.setItem('dw_user', loggedInUser); localStorage.setItem('dw_user_role', 'customer'); localStorage.setItem('dw_user_raw', email);
}
updateUserNavbarUI(); checkAdminPrivileges(); authModal.classList.remove('active');
});
document.getElementById('checkoutBtn').addEventListener('click', function() {
if(cart.length === 0) return;
cart.forEach(function(cartItem) { currentStockData[cartItem.id].stock[cartItem.color + "-" + cartItem.size] -= cartItem.quantity; });
localStorage.setItem('dw_stock', JSON.stringify(currentStockData));
alert("Order processed successfully!");
cart = []; syncAndSaveCartState(); cartModal.classList.remove('active');
// FIXED: Hardcoded list refreshes to bypass variable loops safely
updateStockUI(1);
updateStockUI(2);
updateStockUI(3);
updateStockUI(4);
updateStockUI(5);
updateStockUI(6);
updateStockUI(7);
updateStockUI(8);
updateStockUI(9);
updateStockUI(10);
updateStockUI(11);
updateStockUI(12);
if(document.getElementById('adminVariantSelect')) populateAdminVariants();
});
}
// Launch application cleanly
init();