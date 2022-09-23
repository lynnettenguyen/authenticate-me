'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
      {
        ownerId: 1,
        address: '880 Summit Blvd',
        city: 'Big Bear Lake',
        state: 'California',
        country: 'United States of America',
        lat: 34.236647,
        lng: -116.889336,
        name: 'Black Rock by Destination Big Bear',
        description: 'Completed in 2021, this modern, rustic, luxury masterpiece balances nature, architecture, design and functionality to create an unmatched mountain experience. The concept for Black Rock was inspired by taking a world-class luxury hotel experience and distilling it down into an epic vacation home. The owners have spared no expense in bringing that concept to life. Working with top designers, they brought a luxurious lifestyle to the mountains of Big Bear and created the ultimate Big Bear cabin rental.',
        price: 2337,
      },
      {
        ownerId: 2,
        address: '14th road Minh Phu',
        city: 'Soc Son',
        state: 'Ha Noi',
        country: 'Vietnam',
        lat: 21.283391,
        lng: 105.777750,
        name: 'Big Pine House by the Forest',
        description: 'The Big Pine House is located right on the hillside with the surrounding old pine forest bringing a cool vibe all year round. The house also owns an extremely spacious front view with a transparent toughened glass wall.',
        price: 135,
      },
      {
        ownerId: 3,
        address: 'Banjar Kepitu',
        city: 'Kecamatan Tampaksiring',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.447133,
        lng: 115.234717,
        name: 'Lovely New 3BR Villa with Stunning Jungle View',
        description: 'Set amongst the tropical greenery of Ubud and in the middle are perfect rice fields. This brand new modern villa will offer you serenity and peace with its infinity pool looking onto the lush greenery valley view.',
        price: 339,
      },
      {
        ownerId: 7,
        address: '204 Big Sky Way',
        city: 'Joshua Tree',
        state: 'California',
        country: 'United States of America',
        lat: 38.050152,
        lng: -121.339526,
        name: 'The Kellogg Doolittle House',
        description: 'Created over 25 meticulous years, Kellogg Doolittle in Joshua Tree National Park is a marvel of the organic architecture movement. It is one of the most exclusive homes in the world, and available for the first time as an WhereBnb Luxe exclusive.',
        price: 12500,
      },
      {
        ownerId: 1,
        address: '54432 Rd 432',
        city: 'Bass Lake',
        state: 'California',
        country: 'United States of America',
        lat: 37.336447,
        lng: -119.579650,
        name: 'Cozy A Frame in Bass Lake',
        description: 'Welcome to Acorn Falls! Ideally located, this cozy A frame is across the street from the Falls Beach at Bass Lake, walking distance to the Angel Falls trail head, and only 17 miles to Yosemite National Park. Acorn Falls is sure to delight all who enter. The cabin is a perfect choice for families, girlfriend/guys getaways, couples, or solo travelers looking for a bit of quiet solitude. Acorn Falls is comfortable, fully stocked with thoughtful amenities and luxurious finishes.',
        price: 536,
      },
      {
        ownerId: 7,
        address: 'Hagastubakken 26, 2005',
        city: 'Raelingen',
        state: 'Akershus',
        country: 'Norway',
        lat: 59.942727,
        lng: 11.051970,
        name: 'The WonderINN Mirrored Glass Cabin',
        description: 'Immerse yourself in the wilderness, still within reach of civilization! WonderINN is literally a hidden gem; the unique design of the mirrored glass blends into the landscape so you can retreat to comfort and luxury as you watch the world pass by.',
        price: 466,
      },
      {
        ownerId: 5,
        address: '198/8-9 Thawewong Rd, Pa Tong',
        city: 'Kathu',
        state: 'Phuket',
        country: 'Thailand',
        lat: 7.906378,
        lng: 98.296665,
        name: 'Villa Samira',
        description: 'A contemporary variation on classic Thai themes, this villa maxes out its panoramic views of the Bay of Bengal. A wide open great room is entirely alfresco, with a reflection pond in the center flanked by stepping stones and staircases above. Rest a cool drink on the ledge of your oversized jacuzzi or dip in the 19-meter infinity pool and take it all in. Quiet Kamala Beach is just a 4-mile drive.',
        price: 1490,
      },
      {
        ownerId: 1,
        address: 'Predio, Paraiso Escondido, Centro',
        city: 'Cabo San Lucas',
        state: 'Baja California Sur',
        country: 'Mexico',
        lat: 22.874361,
        lng: -109.937933,
        name: 'West Enclave 7 - Luxury Stay',
        description: 'Loungers wait on the white-sand beach beyond the warm sandstone walls of this contemporary home on the Sea of Cortez. Floor-to-ceiling windows open the living areas to water on two sides: the sea on one, and a courtyard reflecting pool on the other. Surrounded by Ritz Carlton resort grounds, it is close to golf and dining, plus art gallery walks in downtown San José del Cabo.',
        price: 5300,
      },
      {
        ownerId: 4,
        address: 'Via Valassina, 31, 22021 Bellagio CO',
        city: 'Varenna',
        state: 'Lecco',
        country: 'Italy',
        lat: 45.983995,
        lng: 9.262183,
        name: 'Small Wood Furnished Home on the Lake',
        description: 'A small house,furnished entirely in natural wood, with a double bed and a bunk bed, fireplace and wood-burning oven. There is also a garden equipped with barbecues, sun loungers and sofas, with private access to the lake.',
        price: 255,
      },
      {
        ownerId: 5,
        address: '181 Hua Hin 112 Rd Hua-Na21 Thap Tai, Hua Hin District',
        city: 'Tambon Nong Kae',
        state: 'Chang Wat Prachuap Khiri Khan',
        country: 'Thailand',
        lat: 12.499935,
        lng: 99.932481,
        name: 'Turtle Bay HuaHin Eco LuxeTurt Villa in Lotus Bay',
        description: 'A unique Turtle Shape villa located in natural lotus pond surrounding by nature Khao Tao Valley and Sai Noi beach. Private one bed room studio villa comprising spacious bathroom and outdoor waterside living deck.',
        price: 97,
      },
      {
        ownerId: 1,
        address: '15123 County Rd 222',
        city: 'Crane Hill',
        state: 'Alabama',
        country: 'United States of America',
        lat: 34.092693,
        lng: -87.061326,
        name: 'Wanderlust Treehouse Experience',
        description: 'Our very unique treehouse is nestled into the treetops on 40 acres of completely secluded property. Great for a couples retreat, honeymoon, or spiritual reconnecting. Get away from it all and enjoy the nature trails and 2 acre lake(seasonal at times) to pass the time and be able to really unwind. Sit and enjoy your morning coffee outside on the deck as you may be able to catch a peak at the deer and other small animals making their way.',
        price: 350,
      },
      {
        ownerId: 4,
        address: 'Largo Michele Ayroldi Carissimo, 14, 72017',
        city: 'Ostuni',
        state: 'BR',
        country: 'Italy',
        lat: 40.730232,
        lng: 17.577138,
        name: 'I TRULLI DI CAROLE',
        description: 'Complex of authentic trulli entirely renovated preserving all the characteristics. Trulli Carole are located halfway between Ostuni and Martina Franca, surrounded by centuries-old olive and fruit trees. On the front of the house a stone paved area welcomes the swimming pool (mt 5x8) equipped with sun beds and special straw umbrellas and the outdoor kitchen with hob, barbecue and large table for outdoor dining.',
        price: 510,
      },
      {
        ownerId: 4,
        address: 'Milonogianni 12',
        city: 'Chania 731 35',
        state: 'Crete',
        country: 'Greece',
        lat: 35.515004,
        lng: 24.020118,
        name: 'Minoas Sea Villa Heated Pool',
        description: 'Nuzzled in a gorgeous setting, above the sun kissed beach of Georgioupolis in Crete, Minoas Villas captures the essence of chic and luxurious living only few minutes away from the shimmering sea. Built amphitheatrically with direct sea views, this exceptional built Villas, member of the HotelPraxis Group evokes the island’s Cretan spirit and cosmopolitan charm in its elegant environs while ensuring a holiday beyond comparison.',
        price: 419,
      },
      {
        ownerId: 5,
        address: 'Herdade da, Av. Pinhal da Aroeira 1, 2820-112 Aroeira',
        city: 'Costa da Caparica',
        state: 'Setúbal',
        country: 'Portugal',
        lat: 38.582212,
        lng: -9.173972,
        name: 'Casa Muito: Beach, City, Surf!',
        description: 'In the center of Costa da Caparica and 7 minutes walk to the beach, we have a lovely cozy house to make you feel at home, just 20 minutes from the vibrant Lisbon.',
        price: 222,
      },
      {
        ownerId: 5,
        address: '4545 Thomas Lake Harris Dr',
        city: 'Santa Rosa',
        state: 'California',
        country: 'United States of America',
        lat: 38.504816,
        lng: -122.721404,
        name: 'New Modernist Wine Country Estate Home w/ Jacuzzi',
        description: 'This modernist wine country estate home is nestled just outside of the city, amongst soaring redwoods and rolling vineyard views. Set on a quiet and private 3 acres, yet close to many towns and wineries. Fully renovated 3600 sq. ft. two-story home, with lux materials throughout. Relax in the massive family room with vaulted ceilings and a 20inch marble fireplace.Find your self glowing from the vintage chandeliers and lighting throughout the entire home.',
        price: 1480,
      },
      {
        ownerId: 2,
        address: '4545 Thomas Lake Harris Dr',
        city: 'Sea Ranch',
        state: 'California',
        country: 'United States of America',
        lat: 38.716527,
        lng: -123.453766,
        name: 'Award-Winning Forest Getaway: The Sea Ranch House',
        description: 'Named `The Ranch House` by its architect Don Jacobs, this updated 70s cabin is a forest getaway with modern sensibility.The house is surrounded by redwoods & has 2 large decks, 1 with propane firepit with ample seating, the other with hot tub.Living room has picture windows with forest views & Morso wood - burning stove.Guests are encouraged to enjoy the hiking trails, pools, and outdoor amenities.House comfortably sleeps 4, plus fast internet.',
        price: 900,
      },
      {
        ownerId: 6,
        address: '15 US-50',
        city: 'Stateline',
        state: 'Nevada',
        country: 'United States of America',
        lat: 39.0982904,
        lng: -119.9407817,
        name: 'Villa Harrah',
        description: 'With walls of windows that soar above the lake, this light-filled villa looks like it is floating on water. Wander from the full cinema, wet bar, and pool table to a deluxe spa with a sauna, hot tub, salt room, and even a nail and hair salon.A large terrace lead to a pool, sandy beach and private pier, and the balconies seem endless.You are just minutes from Zephyr Cove Beach and Edgewood Tahoe Golf Course. Copyright © Luxury Retreats.All rights reserved.',
        price: 20000,
      },
      {
        ownerId: 2,
        address: 'G6FX+R5G, Kedewatan, Ubud',
        city: 'Gianyar Regency',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.324038,
        lng: 115.407732,
        name: 'Ubud Tropical Paradise - Villa Bambu Blue',
        description: 'A dreamy, tropical private villa located on the edge of Bali`s popular tourist town, Ubud.',
        price: 140,
      },
      {
        ownerId: 3,
        address: '5101 N Lake Blvd',
        city: 'Carnelian Bay',
        state: 'California',
        country: 'United States of America',
        lat: 39.230808,
        lng: -120.081505,
        name: 'Little Black Cabin by the Lake',
        description: 'We have restored and transformed this original, hand built, 1940s Tahoe cabin into a beautiful and modern four season escape. Our cozy one bedroom + loft, one bathroom cabin is centrally located in one of the most sought after neighborhoods in the region. We spent the past year thoughtfully curating all spaces throughout the home with modern furniture, new bedding and linens, as well as top- end housewares, appliances and beautiful things we love.',
        price: 681,
      },
      {
        ownerId: 5,
        address: '12 Main St E',
        city: 'Kingsville',
        state: 'Ontario',
        country: 'Canada',
        lat: 42.038119,
        lng: - 82.738522,
        name: 'Floating Geodesic Dome on Historic Wine Route',
        description: 'Experience a one of a kind stay in our floating, star gazer geodesic dome on beautiful Fox Creek! This 4 season, glamping stay is only steps away from wineries, breweries, beaches, shopping and much more. Our unique reservation provides you with a calm floating experience, leaving you rested, reconnected and ready to explore incredible Essex County, Ontario. We look forward to meeting you and sharing this creative space!',
        price: 203,
      },
      {
        ownerId: 3,
        address: 'Br. Pengembungan, Pejeng Kangin, Tampaksiring',
        city: 'Ubud',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.497342,
        lng: 115.306766,
        name: 'Bali Bamboo House | Rescape Ubud - Resound Villa',
        description: 'Rescape (retreat/ escape) Ubud is an uniquely designed villa built by bamboo, allowing guests to unwind and escape from all the daily hassle. This stay is perfect for couples, young families, artists, musicians and everyone who loves to fully embrace the nature. The place feels secluded and yet only 5 minutes away by bike from central Ubud!',
        price: 87,
      },
      {
        ownerId: 3,
        address: 'Jl. Sri Wedari No.48B, Tegallantang, Ubud, Kecamatan Ubud, Kabupaten Gianyar',
        city: 'Kecamatan Ubud',
        state: 'Bali',
        country: 'Indonesia',
        lat: -8.484778,
        lng: 115.269944,
        name: 'Amazing 6BR w/ Gym, Massage Room & Yoga Shala',
        description: 'This villa encapsulates all that is great about Ubud within one place, its superbly large and spacious design dominates the verticality of its overall structure. With 6 bedrooms located in different portions of the house, this villa thrives in being wide open and perfect for your family gatherings. In each portion of the house you will find naturally cold breezes that drift and flow through the entirety of the villa with no effort.',
        price: 499,
      },
      {
        ownerId: 3,
        address: 'Jalan Mandalika Pantai Putri Nyale Gerupuk Kuta Lombok Gerupuk, Kuta lombok',
        city: 'Kecamatan Pujut',
        state: 'Nusa Tenggara Barat',
        country: 'Indonesia',
        lat: -8.909805,
        lng: 116.341512,
        name: 'Seaview Bamboo Villa - "Nanti Lombok" - Villa Atas',
        description: 'Nestled in the hills of Kuta Lombok overlooking the bay. Nanti is a boutique luxury bamboo resort welcoming you to an unforgettable AirBnB experience.',
        price: 166,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Rooms', {
      address: { [Op.in]: ['3376 Lake Tahoe Blvd', '1 Boulevard de la Menara', '37 Lower Simcoe Street'] }
    }, {});
  }
};
