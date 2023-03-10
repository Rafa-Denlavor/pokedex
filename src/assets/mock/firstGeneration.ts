const firstGeneration: Record<string, any> = [
  {
    name: "Bulbasaur",
    id: "1",
    image: "images/pokemon/1.svg",
    height: 7,
    width: 69,
    ability: "Overgrow",
    types: ["grass", "poison"]
  },
  {
    name: "Ivysaur",
    id: "2",
    image: "images/pokemon/2.svg",
    height: 10,
    width: 130,
    ability: "Overgrow",
    types: ["grass", "poison"]
  },
  {
    name: "Venusaur",
    id: "3",
    image: "images/pokemon/3.svg",
    height: 20,
    width: 1000,
    ability: "Overgrow",
    types: ["grass", "poison"]
  },
  {
    name: "Charmander",
    id: "4",
    image: "images/pokemon/4.svg",
    height: 6,
    width: 85,
    ability: "Blaze",
    types: ["fire"]
  },
  {
    name: "Charmeleon",
    id: "5",
    image: "images/pokemon/5.svg",
    height: 11,
    width: 190,
    ability: "Blaze",
    types: ["fire"]
  },
  {
    name: "Charizard",
    id: "6",
    image: "images/pokemon/6.svg",
    height: 17,
    width: 905,
    ability: "Blaze",
    types: ["fire", "flying"]
  },
  {
    name: "Squirtle",
    id: "7",
    image: "images/pokemon/7.svg",
    height: 5,
    width: 90,
    ability: "Torrent",
    types: ["water"]
  },
  {
    name: "Wartortle",
    id: "8",
    image: "images/pokemon/8.svg",
    height: 10,
    width: 225,
    ability: "Torrent",
    types: ["water"]
  },
  {
    name: "Blastoise",
    id: "9",
    image: "images/pokemon/9.svg",
    height: 16,
    width: 855,
    ability: "Torrent",
    types: ["water"]
  },
  {
    name: "Caterpie",
    id: "10",
    image: "images/pokemon/10.svg",
    height: 3,
    width: 29,
    ability: "Shield-Dust",
    types: ["bug"]
  },
  {
    name: "Metapod",
    id: "11",
    image: "images/pokemon/11.svg",
    height: 7,
    width: 99,
    ability: "Shed-Skin",
    types: ["bug"]
  },
  {
    name: "Butterfree",
    id: "12",
    image: "images/pokemon/12.svg",
    height: 11,
    width: 320,
    ability: "Compound-Eyes",
    types: ["bug", "flying"]
  },
  {
    name: "Weedle",
    id: "13",
    image: "images/pokemon/13.svg",
    height: 3,
    width: 32,
    ability: "Shield-Dust",
    types: ["bug", "poison"]
  },
  {
    name: "Kakuna",
    id: "14",
    image: "images/pokemon/14.svg",
    height: 6,
    width: 100,
    ability: "Shed-Skin",
    types: ["bug", "poison"]
  },
  {
    name: "Beedril",
    id: "15",
    image: "images/pokemon/15.svg",
    height: 10,
    width: 295,
    ability: "Swarm",
    types: ["bug", "poison"]
  },
  {
    name: "Pidgey",
    id: "16",
    image: "images/pokemon/16.svg",
    height: 3,
    width: 18,
    ability: "Keen-Eye",
    types: ["normal", "flying"]
  },
  {
    name: "Pidgeotto",
    id: "17",
    image: "images/pokemon/17.svg",
    height: 11,
    width: 300,
    ability: "Keen-Eye",
    types: ["normal", "flying"]
  },
  {
    name: "Pidgeot",
    id: "18",
    image: "images/pokemon/18.svg",
    height: 15,
    width: 395,
    ability: "Keen-Eye",
    types: ["normal", "flying"]
  },
  {
    name: "Rattata",
    id: "19",
    image: "images/pokemon/19.svg",
    height: 3,
    width: 35,
    ability: "Run-Away",
    types: ["normal"]
  },
  {
    name: "Raticate",
    id: "20",
    image: "images/pokemon/20.svg",
    height: 7,
    width: 185,
    ability: "Run-Away",
    types: ["normal"]
  },
  {
    name: "Spearow",
    id: "21",
    image: "images/pokemon/21.svg",
    height: 3,
    width: 20,
    ability: "Keen-Eye",
    types: ["normal", "flying"]
  },
  {
    name: "Fearow",
    id: "22",
    image: "images/pokemon/22.svg",
    height: 12,
    width: 380,
    ability: "Keen-Eye",
    types: ["normal", "flying"]
  },
  {
    name: "Ekans",
    id: "23",
    image: "images/pokemon/23.svg",
    height: 20,
    width: 69,
    ability: "Intimidate",
    types: ["poison"]
  },
  {
    name: "Arbok",
    id: "24",
    image: "images/pokemon/24.svg",
    height: 35,
    width: 650,
    ability: "Intimidate",
    types: ["poison"]
  },
  {
    name: "Pikachu",
    id: "25",
    image: "images/pokemon/25.svg",
    height: 4,
    width: 60,
    ability: "Static",
    types: ["electric"]
  },
  {
    name: "Raichu",
    id: "26",
    image: "images/pokemon/26.svg",
    height: 8,
    width: 300,
    ability: "Static",
    types: ["electric"]
  },
  {
    name: "Sandshrew",
    id: "27",
    image: "images/pokemon/27.svg",
    height: 6,
    width: 120,
    ability: "Sand-Veil",
    types: ["ground"]
  },
  {
    name: "Sandslash",
    id: "28",
    image: "images/pokemon/28.svg",
    height: 10,
    width: 295,
    ability: "Sand-Veil",
    types: ["ground"]
  },
  {
    name: "Nidoran - F??mea",
    id: "29",
    image: "images/pokemon/29.svg",
    height: 4,
    width: 70,
    ability: "Poison-Point",
    types: ["poison"]
  },
  {
    name: "Nidorina",
    id: "30",
    image: "images/pokemon/30.svg",
    height: 8,
    width: 200,
    ability: "Poison-Point",
    types: ["poison"]
  },
  {
    name: "Nidoqueen",
    id: "31",
    image: "images/pokemon/31.svg",
    height: 14,
    width: 620,
    ability: "Keen-Eye",
    types: ["poison", "ground"]
  },
  {
    name: "Nidoran - Macho",
    id: "32",
    image: "images/pokemon/32.svg",
    height: 5,
    width: 90,
    ability: "Poison-Point",
    types: ["poison"]
  },
  {
    name: "Nidorino",
    id: "33",
    image: "images/pokemon/33.svg",
    height: 9,
    width: 195,
    ability: "Poison-Point",
    types: ["poison"]
  },
  {
    name: "Nidoking",
    id: "34",
    image: "images/pokemon/34.svg",
    height: 14,
    width: 620,
    ability: "Poison-Point",
    types: ["poison", "ground"]
  },
  {
    name: "Clefairy",
    id: "35",
    image: "images/pokemon/35.svg",
    height: 6,
    width: 75,
    ability: "Cute-Charm",
    types: ["fairy"]
  },
  {
    name: "Clefable",
    id: "36",
    image: "images/pokemon/36.svg",
    height: 13,
    width: 400,
    ability: "Cute-Charm",
    types: ["fairy"]
  },
  {
    name: "Vulpix",
    id: "37",
    image: "images/pokemon/37.svg",
    height: 6,
    width: 99,
    ability: "Flash-Fire",
    types: ["fire"]
  },
  {
    name: "Ninetales",
    id: "38",
    image: "images/pokemon/38.svg",
    height: 11,
    width: 199,
    ability: "Flash-Fire",
    types: ["fire"]
  },
  {
    name: "Jigglypuff",
    id: "39",
    image: "images/pokemon/39.svg",
    height: 5,
    width: 55,
    ability: "Cute-Charm",
    types: ["normal", "fairy"]
  },
  {
    name: "Wigglytuff",
    id: "40",
    image: "images/pokemon/40.svg",
    height: 10,
    width: 120,
    ability: "Cute-Charm",
    types: ["normal", "fairy"]
  },
  {
    name: "Zubat",
    id: "41",
    image: "images/pokemon/41.svg",
    height: 8,
    width: 75,
    ability: "Inner-Focus",
    types: ["poison", "flying"]
  },
  {
    name: "Golbat",
    id: "42",
    image: "images/pokemon/42.svg",
    height: 16,
    width: 550,
    ability: "Inner-Focus",
    types: ["poison", "flying"]
  },
  {
    name: "Oddish",
    id: "43",
    image: "images/pokemon/43.svg",
    height: 5,
    width: 54,
    ability: "Cute-Charm",
    types: ["grass", "poison"]
  },
  {
    name: "Gloom",
    id: "44",
    image: "images/pokemon/44.svg",
    height: 8,
    width: 86,
    ability: "Chlorophyll",
    types: ["poison", "poison"]
  },
  {
    name: "Vileplume",
    id: "45",
    image: "images/pokemon/45.svg",
    height: 12,
    width: 186,
    ability: "Chlorophyll",
    types: ["poison", "poison"]
  },
  {
    name: "Paras",
    id: "46",
    image: "images/pokemon/46.svg",
    height: 3,
    width: 54,
    ability: "Effect-Spore",
    types: ["bug", "grass"]
  },
  {
    name: "Parasect",
    id: "47",
    image: "images/pokemon/47.svg",
    height: 10,
    width: 295,
    ability: "Effect-Spore",
    types: ["bug", "grass"]
  },
  {
    name: "Venonat",
    id: "48",
    image: "images/pokemon/48.svg",
    height: 10,
    width: 300,
    ability: "Compound-Eyes",
    types: ["bug", "poison"]
  },
  {
    name: "Venomoth",
    id: "49",
    image: "images/pokemon/49.svg",
    height: 15,
    width: 125,
    ability: "Shield-Dust",
    types: ["bug", "poison"]
  },
  {
    name: "Diglett",
    id: "50",
    image: "images/pokemon/50.svg",
    height: 2,
    width: 8,
    ability: "Sand-Veil",
    types: ["ground"]
  },
  {
    name: "Dugtrio",
    id: "51",
    image: "images/pokemon/51.svg",
    height: 7,
    width: 333,
    ability: "Sand-Veil",
    types: ["ground"]
  },
  {
    name: "Meowth",
    id: "52",
    image: "images/pokemon/52.svg",
    height: 4,
    width: 42,
    ability: "Pickup",
    types: ["normal"]
  },
  {
    name: "Persian",
    id: "53",
    image: "images/pokemon/53.svg",
    height: 10,
    width: 320,
    ability: "Limber",
    types: ["normal"]
  },
  {
    name: "Psyduck",
    id: "54",
    image: "images/pokemon/54.svg",
    height: 8,
    width: 196,
    ability: "Damp",
    types: ["water"]
  },
  {
    name: "Golduck",
    id: "55",
    image: "images/pokemon/55.svg",
    height: 17,
    width: 766,
    ability: "Damp",
    types: ["water"]
  },
  {
    name: "Mankey",
    id: "56",
    image: "images/pokemon/56.svg",
    height: 5,
    width: 280,
    ability: "Vital-Spirit",
    types: ["fighting"]
  },
  {
    name: "Primeape",
    id: "57",
    image: "images/pokemon/57.svg",
    height: 10,
    width: 320,
    ability: "Vital-Spirit",
    types: ["fighting"]
  },
  {
    name: "Growlithe",
    id: "58",
    image: "images/pokemon/58.svg",
    height: 7,
    width: 190,
    ability: "Intimidate",
    types: ["fire"]
  },
  {
    name: "Arcanine",
    id: "59",
    image: "images/pokemon/59.svg",
    height: 19,
    width: 1550,
    ability: "Intimidate",
    types: ["fire"]
  },
  {
    name: "Poliwag",
    id: "60",
    image: "images/pokemon/60.svg",
    height: 6,
    width: 124,
    ability: "Water-Absorb",
    types: ["water"]
  },
  {
    name: "Poliwhirl",
    id: "61",
    image: "images/pokemon/61.svg",
    height: 10,
    width: 200,
    ability: "Water-Absorb",
    types: ["water"]
  },
  {
    name: "Poliwrath",
    id: "62",
    image: "images/pokemon/62.svg",
    height: 13,
    width: 540,
    ability: "Water-Absorb",
    types: ["water", "fighting"]
  },
  {
    name: "Abra",
    id: "63",
    image: "images/pokemon/63.svg",
    height: 9,
    width: 195,
    ability: "Synchronize",
    types: ["psychic"]
  },
  {
    name: "Kadabra",
    id: "64",
    image: "images/pokemon/64.svg",
    height: 13,
    width: 545,
    ability: "Synchronize",
    types: ["psychic"]
  },
  {
    name: "Alakazam",
    id: "65",
    image: "images/pokemon/65.svg",
    height: 15,
    width: 480,
    ability: "Synchronize",
    types: ["psychic"]
  },
  {
    name: "Machop",
    id: "66",
    image: "images/pokemon/66.svg",
    height: 8,
    width: 195,
    ability: "Guts",
    types: ["fighting"]
  },
  {
    name: "Machoke",
    id: "67",
    image: "images/pokemon/67.svg",
    height: 15,
    width: 705,
    ability: "Guts",
    types: ["fighting"]
  },
  {
    name: "Machamp",
    id: "68",
    image: "images/pokemon/68.svg",
    height: 16,
    width: 1300,
    ability: "Guts",
    types: ["fighting"]
  },
  {
    name: "Bellsprout",
    id: "69",
    image: "images/pokemon/69.svg",
    height: 7,
    width: 40,
    ability: "Chlorophyll",
    types: ["grass", "poison"]
  },
  {
    name: "Weepinbell",
    id: "70",
    image: "images/pokemon/70.svg",
    height: 10,
    width: 64,
    ability: "Chlorophyll",
    types: ["grass", "poison"]
  },
  {
    name: "Victreebel",
    id: "71",
    image: "images/pokemon/71.svg",
    height: 17,
    width: 155,
    ability: "Overgrow",
    types: ["grass", "poison"]
  },
  {
    name: "Tentacool",
    id: "72",
    image: "images/pokemon/72.svg",
    height: 9,
    width: 455,
    ability: "Clear-Body",
    types: ["water", "poison"]
  },
  {
    name: "Tentacruel",
    id: "73",
    image: "images/pokemon/73.svg",
    height: 16,
    width: 550,
    ability: "Clear-Body",
    types: ["water", "poison"]
  },
  {
    name: "Geodude",
    id: "74",
    image: "images/pokemon/74.svg",
    height: 4,
    width: 200,
    ability: "Rock-Head",
    types: ["rock", "ground"]
  },
  {
    name: "Graveler",
    id: "75",
    image: "images/pokemon/75.svg",
    height: 10,
    width: 1050,
    ability: "Rock-Head",
    types: ["rock", "ground"]
  },
  {
    name: "Golem",
    id: "76",
    image: "images/pokemon/76.svg",
    height: 10,
    width: 130,
    ability: "Rock-Head",
    types: ["rock", "ground"]
  },
  {
    name: "Ponyta",
    id: "77",
    image: "images/pokemon/77.svg",
    height: 10,
    width: 300,
    ability: "Run-Away",
    types: ["fire"]
  },
  {
    name: "Rapidash",
    id: "78",
    image: "images/pokemon/78.svg",
    height: 17,
    width: 950,
    ability: "Run-Away",
    types: ["fire"]
  },
  {
    name: "Slowpoke",
    id: "79",
    image: "images/pokemon/79.svg",
    height: 12,
    width: 360,
    ability: "Oblivious",
    types: ["water", "psychic"]
  },
  {
    name: "Slowbro",
    id: "80",
    image: "images/pokemon/80.svg",
    height: 16,
    width: 785,
    ability: "Oblivious",
    types: ["water", "psychic"]
  },
  {
    name: "Magnemite",
    id: "81",
    image: "images/pokemon/81.svg",
    height: 3,
    width: 60,
    ability: "Magnet-Pull",
    types: ["electric", "steel"]
  },
  {
    name: "Magneton",
    id: "82",
    image: "images/pokemon/82.svg",
    height: 10,
    width: 600,
    ability: "Magnet-Pull",
    types: ["electric", "steel"]
  },
  {
    name: "Farfetchd",
    id: "83",
    image: "images/pokemon/83.svg",
    height: 8,
    width: 150,
    ability: "Keen-Eye",
    types: ["normal", "flying"]
  },
  {
    name: "Doduo",
    id: "84",
    image: "images/pokemon/84.svg",
    height: 14,
    width: 392,
    ability: "Run-Away",
    types: ["normal", "flying"]
  },
  {
    name: "Dodrio",
    id: "85",
    image: "images/pokemon/85.svg",
    height: 18,
    width: 852,
    ability: "Run-Away",
    types: ["normal", "flying"]
  },
  {
    name: "Seel",
    id: "86",
    image: "images/pokemon/86.svg",
    height: 11,
    width: 900,
    ability: "Thick-Fat",
    types: ["water"]
  },
  {
    name: "Dewgong",
    id: "87",
    image: "images/pokemon/87.svg",
    height: 17,
    width: 1200,
    ability: "Thick-Fat",
    types: ["water", "ice"]
  },
  {
    name: "Grimer",
    id: "88",
    image: "images/pokemon/88.svg",
    height: 9,
    width: 300,
    ability: "Stench",
    types: ["poison"]
  },
  {
    name: "Muk",
    id: "89",
    image: "images/pokemon/89.svg",
    height: 12,
    width: 300,
    ability: "Stench",
    types: ["poison"]
  },
  {
    name: "Shellder",
    id: "90",
    image: "images/pokemon/90.svg",
    height: 3,
    width: 40,
    ability: "Shell-Armor",
    types: ["water"]
  },
  {
    name: "Cloyster",
    id: "91",
    image: "images/pokemon/91.svg",
    height: 15,
    width: 1325,
    ability: "Shell-Armor",
    types: ["water", "ice"]
  },
  {
    name: "Gastly",
    id: "92",
    image: "images/pokemon/92.svg",
    height: 13,
    width: 1,
    ability: "Levitate",
    types: ["ghost", "poison"]
  },
  {
    name: "Haunter",
    id: "93",
    image: "images/pokemon/93.svg",
    height: 16,
    width: 1,
    ability: "Levitate",
    types: ["ghost", "poison"]
  },
  {
    name: "Gengar",
    id: "94",
    image: "images/pokemon/94.svg",
    height: 15,
    width: 405,
    ability: "Cursed-Body",
    types: ["ghost", "poison"]
  },
  {
    name: "Onix",
    id: "95",
    image: "images/pokemon/95.svg",
    height: 88,
    width: 2100,
    ability: "Rock-Head",
    types: ["rock", "ground"]
  },
  {
    name: "Drowzee",
    id: "96",
    image: "images/pokemon/96.svg",
    height: 10,
    width: 324,
    ability: "Insomnia",
    types: ["psychic"]
  },
  {
    name: "Hypno",
    id: "97",
    image: "images/pokemon/97.svg",
    height: 16,
    width: 756,
    ability: "Insomnia",
    types: ["psychic"]
  },
  {
    name: "Krabby",
    id: "98",
    image: "images/pokemon/98.svg",
    height: 4,
    width: 65,
    ability: "Hyper-Cutter",
    types: ["water"]
  },
  {
    name: "Kingler",
    id: "99",
    image: "images/pokemon/99.svg",
    height: 13,
    width: 600,
    ability: "Hyper-Cutter",
    types: ["water"]
  },
];

export default firstGeneration;