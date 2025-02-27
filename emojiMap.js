const emojiMap = {
    'Activity': [
        '1st Place Medal', '2nd Place Medal', '3rd Place Medal', 'Admission Tickets',
        'Artist Palette', 'Balloon', 'Basketball', 'Christmas Tree', 'Confetti Ball',
        'Crystal Ball', 'Firecracker', 'Fireworks', 'Jack O Lantern', 'Magic Wand',
        'Military Medal', 'Mirror Ball', 'Party Popper', 'Performing Arts',
        'Soccer Ball', 'Sparkler', 'Sparkles', 'Sports Medal', 'Ticket',
        'Trophy', 'Video Game'
    ],
    'Food and Drink': [
        'Baby Bottle',
        'Banana',
        'Bento Box',
        'Beverage Box',
        'Birthday Cake',
        'Bottle With Popping Cork',
        'Bubble Tea',
        'Canned Food',
        'Chocolate Bar',
        'Clinking Glasses',
        'Cocktail Glass',
        'Cookie',
        'Cooking',
        'Cup With Straw',
        'Cupcake',
        'Custard',
        'Dango',
        'Doughnut',
        'Fish Cake With Swirl',
        'Fork And Knife With Plate',
        'French Fries',
        'Glass Of Milk',
        'Hamburger',
        'Hot Beverage',
        'Hot Dog',
        'Lollipop',
        'Mate',
        'Meat On Bone',
        'Oden',
        'Pancakes',
        'Pie',
        'Pizza',
        'Popcorn',
        'Poultry Leg',
        'Pouring Liquid',
        'Pretzel',
        'Rice Ball',
        'Rice Cracker',
        'Sandwich',
        'Shortcake',
        'Soft Ice Cream',
        'Strawberry',
        'Stuffed Flatbread',
        'Sushi',
        'Taco',
        'Tropical Drink',
        'Tumbler Glass',
        'Wine Glass'
    ],
    'Flags': [
        'Black Flag',
        'Chequered Flag',
        'Flag Argentina',
        'Flag Armenia',
        'Flag Austria',
        'Flag Bahamas',
        'Flag Belarus',
        'Flag Belgium',
        'Flag Benin',
        'Flag Brazil',
        'Flag Bulgaria',
        'Flag Burkina Faso',
        'Flag Cameroon',
        'Flag Chad',
        'Flag China',
        'Flag Cote Divoire',
        'Flag Croatia',
        'Flag Czechia',
        'Flag Djibouti',
        'Flag Equatorial Guinea',
        'Flag Estonia',
        'Flag France',
        'Flag Gabon',
        'Flag Germany',
        'Flag Ghana',
        'Flag Guinea Bissau',
        'Flag Guinea',
        'Flag Hungary',
        'Flag India',
        'Flag Indonesia',
        'Flag Ireland',
        'Flag Italy',
        'Flag Japan',
        'Flag Jordan',
        'Flag Lithuania',
        'Flag Luxembourg',
        'Flag Madagascar',
        'Flag Mali',
        'Flag Monaco',
        'Flag Morocco',
        'Flag Mozambique',
        'Flag Myanmar Burma',
        'Flag Netherlands',
        'Flag Nigeria',
        'Flag Palestinian Territories',
        'Flag Peru',
        'Flag Philippines',
        'Flag Poland',
        'Flag Romania',
        'Flag Russia',
        'Flag Sao Tome Principe',
        'Flag Saudi Arabia',
        'Flag Senegal',
        'Flag Sierra Leone',
        'Flag Singapore',
        'Flag Sint Maarten',
        'Flag Somalia',
        'Flag South Korea',
        'Flag South Sudan',
        'Flag Spain',
        'Flag Sudan',
        'Flag Ukraine',
        'Flag United Arab Emirates',
        'Flag United Kingdom',
        'Flag United States',
        'Flag Uzbekistan',
        'Flag Vietnam',
        'Flag Western Sahara',
        'Flag Yemen',
        'Pirate Flag',
        'Triangular Flag',
        'White Flag'
    ],
    'Objects': [
        'Abacus',
        'Ballot Box With Ballot',
        'Bar Chart',
        'Bomb',
        'Books',
        'Briefcase',
        'Card Index Dividers',
        'Chart Decreasing',
        'Chart Increasing',
        'Clapper Board',
        'Coffin',
        'Coin',
        'Crown',
        'File Folder',
        'Gem Stone',
        'Graduation Cap',
        'Handbag',
        'High Heeled Shoe',
        'Hourglass Done',
        'Hourglass Not Done',
        'Identification Card',
        'Inbox Tray',
        'Incoming Envelope',
        'Key',
        'Keyboard',
        'Laptop',
        'Light Bulb',
        'Locked With Key',
        'Luggage',
        'Magnifying Glass Tilted Left',
        'Magnifying Glass Tilted Right',
        'Megaphone',
        'Memo',
        'Microphone',
        'Microscope',
        'Military Helmet',
        'Mobile Phone With Arrow',
        'Mobile Phone',
        'Money Bag',
        'Money With Wings',
        'Musical Note',
        'Musical Notes',
        'Newspaper',
        'Old Key',
        'Open Book',
        'Outbox Tray',
        'Pencil',
        'Pill',
        'Printer',
        'Purse',
        'Reminder Ribbon',
        'Roll Of Paper',
        'Shopping Bags',
        'Shopping Cart',
        'Soap',
        'Sponge',
        'Stethoscope',
        'Studio Microphone',
        'Syringe',
        'Tear Off Calendar',
        'Telephone Receiver',
        'Telephone',
        'Telescope',
        'Television',
        'Test Tube',
        'Thermometer',
        'Toolbox',
        'Top Hat'
    ],
    'Animals and Nature': [
        'Ant',
        'Baby Chick',
        'Bat',
        'Bear',
        'Beetle',
        'Bird',
        'Bison',
        'Black Cat',
        'Blossom',
        'Bouquet',
        'Bug',
        'Butterfly',
        'Cactus',
        'Cat Face',
        'Cat',
        'Cherry Blossom',
        'Chicken',
        'Cloud With Lightning And Rain',
        'Cloud With Lightning',
        'Cloud With Rain',
        'Cloud With Snow',
        'Cloud',
        'Cockroach',
        'Cow',
        'Cricket',
        'Deciduous Tree',
        'Deer',
        'Dog Face',
        'Dove',
        'Duck',
        'Evergreen Tree',
        'Fire',
        'First Quarter Moon Face',
        'First Quarter Moon',
        'Fish',
        'Flamingo',
        'Four Leaf Clover',
        'Fox',
        'Frog',
        'Front Facing Baby Chick',
        'Full Moon Face',
        'Full Moon',
        'Giraffe',
        'Glowing Star',
        'Gorilla',
        'Hamster',
        'Hatching Chick',
        'Hedgehog',
        'Herb',
        'Hibiscus',
        'High Voltage',
        'Honeybee',
        'Horse Face',
        'Horse',
        'Kangaroo',
        'Koala',
        'Lady Beetle',
        'Last Quarter Moon Face',
        'Last Quarter Moon',
        'Leopard',
        'Lion',
        'Llama',
        'Lobster',
        'Microbe',
        'Monkey Face',
        'Mosquito',
        'Mouse Face',
        'New Moon Face',
        'New Moon',
        'Octopus',
        'Owl',
        'Ox',
        'Palm Tree',
        'Panda',
        'Parrot',
        'Paw Prints',
        'Penguin',
        'Pig Face',
        'Pig Nose',
        'Polar Bear',
        'Rabbit Face',
        'Rabbit',
        'Raccoon',
        'Rainbow',
        'Rose',
        'Rosette',
        'Sauropod',
        'Seal',
        'Seedling',
        'Shamrock',
        'Shrimp',
        'Snail',
        'Snake',
        'Snowflake',
        'Snowman Without Snow',
        'Snowman',
        'Spider Web',
        'Spider',
        'Spouting Whale',
        'Squid'
    ],
    'People': [
        'Baby', 'Backhand Index Pointing Down', 'Backhand Index Pointing Left',
        'Backhand Index Pointing Right', 'Backhand Index Pointing Up',
        'Biting Lip', 'Bone', 'Bust In Silhouette', 'Busts In Silhouette',
        'Call Me Hand', 'Clapping Hands', 'Crossed Fingers',
        'Ear With Hearing Aid', 'Ear', 'Eyes', 'Family Man Woman Girl Boy',
        'Flexed Biceps', 'Folded Hands', 'Foot', 'Footprints',
        'Hand With Fingers Splayed', 'Hand With Index Finger And Thumb Crossed',
        'Handshake', 'Heart Hands', 'Index Pointing At The Viewer',
        'Index Pointing Up', 'Left Facing Fist', 'Leftwards Hand', 'Leg',
        'Love You Gesture', 'Man Dancing', 'Man Facepalming',
        'Man Health Worker', 'Man Police Officer', 'Man Shrugging',
        'Man Teacher', 'Man Technologist', 'Man Vampire', 'Man Zombie',
        'Mechanical Arm', 'Mechanical Leg', 'Middle Finger', 'Mouth',
        'Mrs Claus', 'Mx Claus', 'Nail Polish', 'Nose', 'Ok Hand',
        'Old Woman', 'Oncoming Fist', 'Open Hands', 'Palm Down Hand',
        'Palm Up Hand', 'Palms Up Together', 'People Hugging',
        'Person Facepalming', 'Person Shrugging', 'Pinched Fingers',
        'Pinching Hand', 'Pregnant Woman', 'Raised Back Of Hand',
        'Raised Fist', 'Raised Hand', 'Raising Hands', 'Right Facing Fist',
        'Rightwards Hand', 'Santa Claus', 'Sign Of The Horns',
        'Speaking Head', 'Technologist', 'Thumbs Down', 'Thumbs Up',
        'Tongue', 'Tooth', 'Vampire', 'Victory Hand', 'Vulcan Salute',
        'Waving Hand', 'Woman Dancing', 'Woman Facepalming',
        'Woman Health Worker', 'Woman Police Officer', 'Woman Shrugging',
        'Woman Technologist', 'Woman Vampire', 'Woman Zombie',
        'Writing Hand', 'Zombie'
    ],
    'Smileys': [
        'Alien Monster', 'Alien', 'Angry Face With Horns', 'Angry Face',
        'Anguished Face', 'Anxious Face With Sweat', 'Astonished Face',
        'Beaming Face With Smiling Eyes', 'Cat With Tears Of Joy',
        'Cat With Wry Smile', 'Clown Face', 'Cold Face', 'Confounded Face',
        'Confused Face', 'Cowboy Hat Face', 'Crying Cat', 'Crying Face',
        'Disappointed Face', 'Disguised Face', 'Dizzy Face',
        'Dotted Line Face', 'Downcast Face With Sweat', 'Drooling Face',
        'Exploding Head', 'Expressionless Face', 'Face Blowing A Kiss',
        'Face Exhaling', 'Face Holding Back Tears', 'Face In Clouds',
        'Face Savoring Food', 'Face Screaming In Fear', 'Face Vomiting',
        'Face With Diagonal Mouth', 'Face With Hand Over Mouth',
        'Face With Head Bandage', 'Face With Medical Mask',
        'Face With Monocle', 'Face With Open Eyes And Hand Over Mouth',
        'Face With Open Mouth', 'Face With Peeking Eye',
        'Face With Raised Eyebrow', 'Face With Rolling Eyes',
        'Face With Spiral Eyes', 'Face With Steam From Nose',
        'Face With Symbols On Mouth', 'Face With Tears Of Joy',
        'Face With Thermometer', 'Face With Tongue', 'Face Without Mouth',
        'Fearful Face', 'Flushed Face', 'Frowning Face With Open Mouth',
        'Frowning Face', 'Ghost', 'Goblin', 'Grimacing Face',
        'Grinning Cat With Smiling Eyes', 'Grinning Cat',
        'Grinning Face With Big Eyes', 'Grinning Face With Smiling Eyes',
        'Grinning Face With Sweat', 'Grinning Face',
        'Grinning Squinting Face', 'Hear No Evil Monkey', 'Hot Face',
        'Hugging Face', 'Hushed Face', 'Kissing Cat',
        'Kissing Face With Closed Eyes', 'Kissing Face',
        'Loudly Crying Face', 'Lying Face', 'Melting Face',
        'Money Mouth Face', 'Nauseated Face', 'Nerd Face', 'Neutral Face',
        'Ogre', 'Partying Face', 'Pensive Face', 'Persevering Face',
        'Pile Of Poo', 'Pleading Face', 'Pouting Cat', 'Pouting Face',
        'Relieved Face', 'Robot', 'Rolling On The Floor Laughing',
        'Sad But Relieved Face', 'Saluting Face', 'See No Evil Monkey',
        'Shushing Face', 'Skull And Crossbones', 'Skull', 'Sleeping Face',
        'Sleepy Face', 'Slightly Frowning Face', 'Slightly Smiling Face',
        'Smiling Cat With Heart Eyes', 'Smiling Face With Halo'
    ],
    'Symbols': [
        'Anger Symbol', 'Aquarius', 'Aries', 'Baby Symbol',
        'Baggage Claim', 'Beating Heart', 'Black Heart', 'Blue Heart',
        'Broken Heart', 'Brown Heart', 'Cancer', 'Capricorn',
        'Check Box With Check', 'Check Mark Button', 'Check Mark',
        'Collision', 'Cool Button', 'Cross Mark', 'Currency Exchange',
        'Customs', 'Dizzy', 'Double Exclamation Mark', 'Exclamation Mark',
        'Exclamation Question Mark', 'Free Button', 'Gemini',
        'Green Heart', 'Growing Heart', 'Heart Decoration',
        'Heart Exclamation', 'Heart On Fire', 'Heart With Arrow',
        'Heart With Ribbon', 'Hundred Points', 'Kiss Mark',
        'Left Luggage', 'Leo', 'Libra', 'Love Letter', 'Mending Heart',
        'Mens Room', 'New Button', 'No One Under Eighteen', 'Ok Button',
        'Ophiuchus', 'Orange Heart', 'Passport Control', 'Pisces',
        'Purple Heart', 'Question Mark', 'Red Heart', 'Revolving Hearts',
        'Right Anger Bubble', 'Sagittarius', 'Scorpio', 'Sparkling Heart',
        'Speech Balloon', 'Taurus', 'Thought Balloon', 'Top Arrow',
        'Two Hearts', 'Up Button', 'Virgo', 'White Exclamation Mark',
        'White Heart', 'White Question Mark', 'Womens Room',
        'Yellow Heart', 'Zzz'
    ],
    'Travel and Places': [
        'Airplane', 'Ambulance', 'Automobile', 'Beach With Umbrella',
        'Camping', 'Classical Building', 'Compass', 'Desert Island',
        'Hot Springs', 'House', 'Locomotive', 'Moai', 'Motor Boat',
        'Police Car', 'Rocket', 'Roller Coaster', 'Taxi'
    ]
};