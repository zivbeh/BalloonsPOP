const MAPS_DATA = [
  {
    name: "map1", // OG
    id: 1,
    waypoints: [
      { x: -15, y: 600 },
      { x: 300, y: 600 },
      { x: 300, y: 420 },
      { x: 540, y: 420 },
      { x: 540, y: 1000 },
      { x: 895, y: 1000 },
      { x: 895, y: 255 },
      { x: 300, y: 235 },
      { x: 300, y: 75 },
      { x: 1085, y: 75 },
      { x: 1085, y: 240 },
      { x: 1300, y: 245 },
      { x: 1300, y: 430 },
      { x: 1085, y: 435 },
      { x: 1085, y: 760 },
      { x: 290, y: 780 },
      { x: 290, y: 1100 },
    ],
    tunnels: [
      { x: 900, y: 758, w: 200, h: 330, under: [6] },
      { x: 547, y: 760, w: 340, h: 200, under: [15] },
    ],
    ponds: [],
  },
  {
    name: "map2", // ice
    id: 2,
    waypoints: [
      { x: -15, y: 1080 },
      { x: 190, y: 940 },
      { x: 90, y: 820 },
      { x: 340, y: 620 },
      { x: 570, y: 930 },
      { x: 420, y: 1010 },
      { x: 350, y: 895 },
      { x: 680, y: 645 },
      { x: 570, y: 250 },
      { x: 780, y: 345 },
      { x: 470, y: 537 },
      { x: 926, y: 758 },
      { x: 1113, y: 486 },
      { x: 1300, y: 399 },
      { x: 1275, y: 559 },
      { x: 894, y: 441 },
      { x: 910, y: 587 },
      { x: 1134, y: 484 },
      { x: 1081, y: 253 },
      { x: 1546, y: 208 },
    ],
    tunnels: [],
    ponds: [
      [
        { x: 820, y: 1080, radius: 115 },
        { x: 960, y: 1080, radius: 75 },
      ],
      [
        { x: 804, y: 513, radius: 85 },
        { x: 810, y: 583, radius: 65 },
      ],
      [
        { x: 298, y: 366, radius: 120 },
      ],
      [
        { x: 35, y: 550, radius: 70 },
      ],
    ],
  },
  {
    name: "map3",
    id: 3,
    waypoints: [
      { x: -15, y: 183 },
      { x: 852, y: 747 },
      { x: 898, y: 551 },
      { x: 315, y: 739 },
      { x: 210, y: 511 },
      { x: 1169, y: 301 },
      { x: 1178, y: 544 },
      { x: 770, y: 62 },
      { x: 472, y: 643 },
      { x: 880, y: 1021 },
      { x: 1411, y: 645 },
      { x: 1062, y: 716 },
      { x: 1548, y: 812 },
    ],
    tunnels: [
      { x: 900, y: 758, w: 200, h: 330, under: [6] },
      { x: 547, y: 760, w: 340, h: 200, under: [15] },
    ],
    ponds: [
      [
        { x: 787, y: 258, radius: 85 },
        { x: 707, y: 321, radius: 39 },
        { x: 776, y: 165, radius: 28 },
        { x: 882, y: 290, radius: 38 },
      ],
      [
        { x: 1272, y: 966, radius: 168 },
        { x: 1416, y: 1000, radius: 158 },
        { x: 1083, y: 1010, radius: 128 },
        { x: 971, y: 1046, radius: 78 },
        { x: 1369, y: 876, radius: 48 },
      ],
    ],
  },
  {
    name: "map4",
    id: 4,
    waypoints: [
      { x: -15, y: 530 },
      { x: 290, y: 530 },
      { x: 310, y: 448 },
      { x: 315, y: 418 },
      { x: 325, y: 392 },
      { x: 335, y: 367 },
      { x: 354, y: 339 },
      { x: 376, y: 320 },
      { x: 404, y: 305 },
      { x: 433, y: 300 },
      { x: 465, y: 296 },
      { x: 494, y: 296 },
      { x: 526, y: 310 },
      { x: 550, y: 326 },
      { x: 576, y: 350 },
      { x: 591, y: 378 },
      { x: 605, y: 411 },
      { x: 612, y: 440 },
      { x: 625, y: 483 },
      { x: 635, y: 530 },
      { x: 903, y: 530 },
      { x: 903, y: 530 },
      { x: 923, y: 612 },
      { x: 928, y: 642 },
      { x: 938, y: 668 },
      { x: 948, y: 693 },
      { x: 967, y: 721 },
      { x: 989, y: 740 },
      { x: 1017, y: 755 },
      { x: 1046, y: 760 },
      { x: 1078, y: 764 },
      { x: 1107, y: 764 },
      { x: 1139, y: 750 },
      { x: 1163, y: 734 },
      { x: 1189, y: 710 },
      { x: 1204, y: 682 },
      { x: 1218, y: 649 },
      { x: 1225, y: 620 },
      { x: 1238, y: 577 },
      { x: 1248, y: 530 },
      { x: 1400, y: 530 }, // end of the road
      { x: 1400, y: 530 },
      { x: 1248, y: 530 },
      { x: 1238, y: 577 },
      { x: 1225, y: 620 },
      { x: 1218, y: 649 },
      { x: 1204, y: 682 },
      { x: 1189, y: 710 },
      { x: 1163, y: 734 },
      { x: 1139, y: 750 },
      { x: 1107, y: 764 },
      { x: 1078, y: 764 },
      { x: 1046, y: 760 },
      { x: 1017, y: 755 },
      { x: 989, y: 740 },
      { x: 967, y: 721 },
      { x: 948, y: 693 },
      { x: 938, y: 668 },
      { x: 928, y: 642 },
      { x: 923, y: 612 },
      { x: 903, y: 530 },
      { x: 903, y: 530 },
      { x: 635, y: 530 },
      { x: 625, y: 483 },
      { x: 612, y: 440 },
      { x: 605, y: 411 },
      { x: 591, y: 378 },
      { x: 576, y: 350 },
      { x: 550, y: 326 },
      { x: 526, y: 310 },
      { x: 494, y: 296 },
      { x: 465, y: 296 },
      { x: 433, y: 300 },
      { x: 404, y: 305 },
      { x: 376, y: 320 },
      { x: 354, y: 339 },
      { x: 335, y: 367 },
      { x: 325, y: 392 },
      { x: 315, y: 418 },
      { x: 310, y: 448 },
      { x: 290, y: 530 },
      { x: -15, y: 530 },
    ],
    tunnels: [],
    ponds: [
      [
        { x: 1080, y: 530, radius: 100 },
        { x: 1080, y: 570, radius: 100 },
        { x: 1080, y: 630, radius: 85 },
      ],
    ],
  },
];
