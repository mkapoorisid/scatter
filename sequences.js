// Dimensions of sunburst.
var width = 750;
var height = 550;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 150, h: 35, s: 4, t: 10
};

// Mapping of step names to colors.
var colors = {

"Others": "#BCBCBC",
"ADMK": "red",
"AITC": "green",
"BJP": "#E69F19",
"CPM": "#EC2434",
"INC": "#04C4FC",
"NCP": "blue",
"SHS": "#EC5B13",
"SP": "green",
"TDP": "yellow",
"TRS": "#ff3399",
"YSRCP": "#041444",

"Punjab": "#24b58e",
"Uttar Pradesh": "#6eabaf",
"Tamil Nadu": "#66bf7f",
"Andhra Pradesh": "#92cbbb",
"Puducherry": "#ddb1ee",
"West Bengal": "#1be895",
"Assam": "#c7ecf9",
"Andaman & Nicobar Islands": "#a6baa6",
"Arunachal Pradesh": "#8045cd",
"Bihar": "#5f70f1",
"Chandigarh": "#a9d796",
"Dadra & Nagar Haveli": "#ce62cb",
"Daman & Diu": "#0e954d",
"Goa": "#a97d2f",
"Gujarat": "#fcb8d3",
"Haryana": "#9bfee3",
"Himachal Pradesh": "#4e8d84",
"Jammu & Kashmir": "#fc6d3f",
"Jharkhand": "#7b9fd4",
"Karnataka": "#8c6165",
"Madhya Pradesh": "#72805e",
"Maharashtra": "#d53762",
"NCT OF Delhi": "#f00a1b",
"Rajasthan": "#de5c97",
"Uttarakhand": "#8ea28b",
"Kerala": "#fccd95",
"Tripura": "#ba9c57",
"Manipur": "#b79a82",
"Meghalaya": "#7c5a82",
"Mizoram": "#7d7ca4",
"Lakshadweep": "#958ad6",
"Nagaland": "#cd8126",
"Sikkim": "#bdb0b7",




"Patiala": "#96caff",
"Fatehgarh Sahib":  "#faff16",
"Faridkot":  "#fda899",
"Sangrur":  "#13fcbb",
"Pratapgarh":  "#f7fef7",
"Mirzapur":  "#eba6ff",
"Chennai central":  "#bcca83",
"Thoothukkudi":  "#57e502",
"Vellore":  "#feaf23",
"Tirunelveli":  "#c6c0cb",
"Ramanathapuram":  "#38f1fd",
"Virudhunagar":  "#9ccfbe",
"Chennai North":  "#f9feae",
"Pollachi":  "#a6fe8e",
"Tenkasi":  "#bfcd03",
"Chidambaram":  "#ebd3b6",
"Coimbatore":  "#fec0df",
"Nagapattinam":  "#c2eefc",
"Chennai South":  "#cac2fc",
"Tiruppur":  "#bcfcd6",
"Madurai":  "#f4e5ff",
"Tiruchirappalli":  "#f9dc56",
"Perambalur":  "#80da93",
"Nilgiris":  "#ebb678",
"Erode":  "#b1fb27",
"Sivaganga":  "#30dfc8",
"Krishnagiri":  "#8dd0df",
"Cuddalore":  "#1ff479",
"Viluppuram":  "#cedbd8",
"Arakkonam":  "#d2e6b8",
"Kancheepuram":  "#85feea",
"Tiruvannamalai":  "#97db5c",
"Arani":  "#deb7b7",
"Thanjavur":  "#cad5ef",
"Dindigul":  "#d0eb6d",
"Mayiladuthurai":  "#fe9fe1",
"Kallakurichi":  "#bdc7ad",
"Karur":  "#fcdadf",
"Sriperumbudur":  "#d9bae2",
"Salem":  "#dac05a",
"Namakkal":  "#ecda91",
"Theni":  "#fef5d0",
"Thiruvallur":  "#ffa4bc",
"Hyderabad":  "#43d9fd",
"Puducherry":  "#d2fcf5",
"Kolkata Uttar":  "#b1c7d0",
"Alipurduars":  "#e6f0fb",
"Balurghat":  "#83e5bd",
"Kolkata Dakshin":  "#b2e598",
"Krishnanagar":  "#fdfb73",
"Birbhum":  "#73fd58",
"Purulia":  "#a6cfa2",
"Barrackpore":  "#a1e3e1",
"Dum dum":  "#e4e21c",
"Bankura":  "#8ef8b0",
"Howrah":  "#e2c30e",
"Basirhat":  "#fdc7ff",
"Joynagar":  "#cefeb9",
"Jalpaiguri":  "#0be597",
"Diamond harbour":  "#d4c491",
"Srerampur":  "#fdc5b5",
"Barasat":  "#e4fdde",
"Cooch behar":  "#d5ccc7",
"Bangaon":  "#acdaf8",
"Burdwan   durgapur":  "#e4c9da",
"Uluberia":  "#fdc664",
"Bardhaman Purba":  "#badfc5",
"Bishnupur":  "#bbd15f",
"Medinipur":  "#fdf1f7",
"Jadavpur":  "#b4c3ed",
"Ranaghat":  "#93e8fd",
"Hooghly":  "#ddd9e3",
"Mathurapur":  "#e5e5d7",
"Bolpur":  "#98e116",
"Jhargram":  "#e0d0fb",
"Kanthi":  "#fccd95",
"Ghatal":  "#aafdfe",
"Tamluk":  "#5cd9de",
"Arambagh":  "#deba9d",
"Karimganj":  "#dce994",
"Barpeta":  "#d6b2fb",
"Dhubri":  "#c5bedd",
"Andaman & Nicobar Islands":  "#bec4c3",
"Secundrabad":  "#feab79",
"Narsapuram":  "#82ea7f",
"Visakhapatnam":  "#fed7f3",
"ARUNACHAL WEST":  "#8affd2",
"Tezpur":  "#d6fc50",
"Jorhat":  "#e8aed9",
"Mangaldoi":  "#f7b7c2",
"Nowgong":  "#2bf4e5",
"Dibrugarh":  "#ffad53",
"Lakhimpur":  "#11ff13",
"Gauhati":  "#d3fe94",
"Aurangabad":  "#c2e530",
"Darbhanga":  "#aef161",
"Ujiarpur":  "#fee5d4",
"Buxar":  "#a3d378",
"Maharajganj":  "#dad351",
"Gaya (SC)":  "#fec328",
"Jhanjharpur":  "#a4e3b3",
"Saran":  "#a9efd9",
"Madhubani":  "#feeb8a",
"Valmiki Nagar":  "#85d4cd",
"Sasaram (SC)":  "#e0b4c9",
"Paschim Champaran":  "#55e358",
"Sheohar":  "#bddbe1",
"Siwan":  "#48ffa0",
"Pataliputra":  "#d6eee1",
"Nawada":  "#fee3b0",
"Arrah":  "#ff99fd",
"Purvi Champaran":  "#3fe0b0",
"Begusarai":  "#84d7fe",
"Muzaffarpur":  "#7be9d3",
"Gopalganj (SC)":  "#1bf3cd",
"Patna Sahib":  "#d4d4af",
"CHANDIGARH":  "#d6d278",
"Dadar & Nagar Haveli":  "#70fffe",
"Daman & diu":  "#aac8e1",
"South Goa":  "#ffb0fe",
"North Goa":  "#b5ccbf",
"Amreli":  "#c6ccd5",
"Jamnagar":  "#ccd9c5",
"Anand":  "#feee3e",
"Banaskantha":  "#cdc0ab",
"Panchmahal":  "#58e182",
"Porbandar":  "#e9b8f8",
"Dahod":  "#f7bc97",
"Junagadh":  "#b4e275",
"Patan":  "#bee8e1",
"Surendranagar":  "#e1e3ff",
"Bharuch":  "#ebebb2",
"Bhavnagar":  "#8fd4af",
"Sabarkantha":  "#c0d3a2",
"Kachchh":  "#e7c67d",
"Kheda":  "#6ceba9",
"Mahesana":  "#d8cde4",
"Chhota Udaipur":  "#eacdc6",
"Ahmedabad West":  "#d4eef1",
"Valsad":  "#e7e8e9",
"Rajkot":  "#7deaec",
"Bardoli":  "#88f31d",
"Ahmedabad East":  "#c0efbe",
"Surat":  "#75d8be",
"Gandhinagar":  "#a0d1d3",
"Navsari":  "#fdacd4",
"Vadodara":  "#09f64f",
"Sonipat":  "#c4dc8c",
"Bhiwani Mahendragarh":  "#d0d1fc",
"Kurukshetra":  "#ecccf1",
"Karnal":  "#f7d517",
"Ambala":  "#d0dde8",
"Gurgaon":  "#e7dadc",
"Faridabad":  "#78fe8b",
"Mandi":  "#e6e373",
"Shimla":  "#cde5fd",
"Hamirpur":  "#b1fead",
"Kangra":  "#e7fec5",
"Ladakh":  "#e9fdfd",
"Udhampur":  "#b9c3d9",
"Jammu":  "#cebec1",
"Lohardaga":  "#eab3a4",
"Khunti":  "#edb84a",
"Chatra":  "#8aea52",
"Singhbhum":  "#bad5fd",
"Kodarma":  "#a7ddea",
"Godda":  "#f9c9d5",
"Giridih":  "#f2deec",
"Hazaribagh":  "#fbf4e7",
"Ranchi":  "#b3d8cf",
"Jamshedpur":  "#feb9ed",
"Palamau":  "#96e89d",
"Dhanbad":  "#d5d99c",
"Bidar":  "#efd16f",
"Bijapur":  "#ecfb92",
"Koppal":  "#d0bbd2",
"Mysore":  "#89d97b",
"Davanagere":  "#cdc47c",
"Bellary":  "#acd345",
"Dharwad":  "#21e0f4",
"Uttara Kannada":  "#9ed693",
"Belgaum":  "#9adfcd",
"Bangalore central":  "#ccdc4c",
"Haveri":  "#e3e3c2",
"Bagalkot":  "#d8f003",
"Udupi Chikmagalur":  "#e7f158",
"Shimoga":  "#b8fff2",
"Bangalore South":  "#cdb9e9",
"Dakshina Kannada":  "#faa8ae",
"Bangalore North":  "#cac75c",
"SATNA":  "#d7d119",
"MORENA":  "#eccb48",
"REWA":  "#bbd7ea",
"BHIND":  "#a0f3c1",
"TIKAMGARH":  "#cbeaa6",
"GWALIOR":  "#c5f4e0",
"KHAJURAHO":  "#ede9f5",
"SIDHI":  "#b8bffd",
"BALAGHAT":  "#97cced",
"SAGAR":  "#70dba6",
"DAMOH":  "#72dbf2",
"SHAHDOL":  "#e6bddd",
"RATLAM":  "#ddc2fe",
"DHAR":  "#b8ddb0",
"JABALPUR":  "#e7d29e",
"MANDLA":  "#c7ec8c",
"RAJGARH":  "#d1edce",
"UJJAIN":  "#c8fb75",
"BETUL":  "#f9ffe8",
"KHARGONE":  "#e9abeb",
"DEWAS":  "#b5d1b3",
"HOSHANGABAD":  "#feb6af",
"MANDSOUR":  "#ffba6e",
"BHOPAL":  "#92f772",
"VIDISHA":  "#e8f4cb",
"KHANDWA":  "#ffeda8",
"INDORE":  "#e5ff77",
"Bhiwandi":  "#f6f8fe",
"Akola":  "#c4c699",
"Mumbai North central":  "#c5ca3f",
"Chandrapur":  "#e9bb29",
"Solapur":  "#19e2dc",
"Mumbai North East":  "#d9bfb4",
"Dhule":  "#c6cabf",
"Palghar":  "#e6c091",
"Gadchiroli Chimur":  "#bcd0d0",
"Wardha":  "#d5cbd3",
"Dindori":  "#aae346",
"Pune":  "#d0d2d3",
"Nandurbar":  "#f1c7ab",
"Nagpur":  "#72ef95",
"Jalna":  "#cdda6f",
"Ahmadnagar":  "#d9d5c0",
"Raver":  "#a2eb81",
"Bhandara   gondiya":  "#72f3cc",
"Sangli":  "#91efe6",
"Latur":  "#fed284",
"Beed":  "#a6edf6",
"Jalgaon":  "#4bfee0",
"Mumbai North":  "#9bfb4f",
"CHANDNI CHOWK":  "#c1f3f6",
"NEW DELHI":  "#e0f9ab",
"SOUTH DELHI":  "#d4ffd2",
"EAST DELHI":  "#fffac1",
"NORTH EAST DELHI":  "#a9c5fd",
"NORTH WEST DELHI":  "#f0acc4",
"WEST DELHI":  "#7adf34",
"Hoshiarpur":  "#a8d516",
"Gurdaspur":  "#86dade",
"Dausa":  "#6cdfd7",
"KARAULI DHOLPUR":  "#a7d5b9",
"Nagaur":  "#b4d899",
"Jhunjhunu":  "#f1c0bf",
"Barmer":  "#a9e8c7",
"Sikar":  "#e6e04c",
"TONK SAWAI MADHOPUR":  "#fcd4bf",
"Banswara":  "#67feb6",
"BHARATPUR":  "#ddfeee",
"Jalore":  "#f5af92",
"Bikaner":  "#a7cddc",
"Churu":  "#c7cae9",
"Bhilwara":  "#e1c2c9",
"Jaipur Rural":  "#06f6a4",
"Ajmer":  "#64f36c",
"Alwar":  "#ffd056",
"Rajsamand":  "#e9d3ea",
"Kota":  "#94f595",
"Ganganagar":  "#eadbcc",
"Udaipur":  "#acf2b2",
"JHALAWAR BARAN":  "#a2fde0",
"Chittorgarh":  "#f5e5c6",
"Pali":  "#f7eb67",
"Jodhpur":  "#f1e9e6",
"Jaipur":  "#e2efdb",
"Kanniyakumari":  "#fbfd52",
"Domariyaganj":  "#aacac8",
"Ghazipur":  "#6fdf6e",
"Allahabad":  "#23e83d",
"Lalganj":  "#d6c33e",
"Kaushambi":  "#edbb66",
"Banda":  "#96d8f1",
"Shrawasti":  "#d9c9a7",
"Sant Kabir Nagar":  "#30ef8c",
"Basti":  "#66ed41",
"Rampur":  "#eabeed",
"Gonda":  "#c3dbce",
"Ballia":  "#d6d6e9",
"Sambhal":  "#f8c6ee",
"Dhaurahra":  "#d5d9d1",
"Hardoi":  "#96f0cc",
"Jaunpur":  "#c7ef56",
"Nagina":  "#8ef6ff",
"Kushi Nagar":  "#aff0e8",
"Robertsganj":  "#b7f593",
"Ghosi":  "#dee7e0",
"Kaiserganj":  "#bdff5c",
"Salempur":  "#eff01a",
"Kheri":  "#d7f0fe",
"Bhadohi":  "#bdfdc3",
"Farrukhabad":  "#f0ef9c",
"Aonla":  "#d3fe14",
"Sultanpur":  "#bec0ea",
"Misrikh":  "#c6c2be",
"Chandauli":  "#eab1b3",
"Sitapur": "#96caff",
"Bansgaon":  "#faff16",
"Baghpat":  "#fda899",
"Fatehpur Sikri":  "#13fcbb",
"Ambedkar Nagar":  "#f7fef7",
"Bahraich":  "#eba6ff",
"Machhlishahr":  "#bcca83",
"Etawah":  "#57e502",
"Hamirpur":  "#feaf23",
"Barabanki":  "#c6c0cb",
"Mohanlalganj":  "#38f1fd",
"Maharajganj":  "#9ccfbe",
"Saharanpur":  "#f9feae",
"Kanpur":  "#a6fe8e",
"Etah":  "#bfcd03",
"Akbarpur":  "#ebd3b6",
"Moradabad":  "#fec0df",
"Fatehpur":  "#c2eefc",
"Bijnor":  "#cac2fc",
"Faizabad":  "#bcfcd6",
"Deoria":  "#f4e5ff",
"Phulpur":  "#f9dc56",
"Aligarh":  "#80da93",
"Bareilly":  "#ebb678",
"Unnao":  "#b1fb27",
"Shahjahanpur":  "#30dfc8",
"Amroha":  "#8dd0df",
"Meerut":  "#1ff479",
"Gorakhpur":  "#cedbd8",
"Hathras":  "#d2e6b8",
"Pilibhit":  "#85feea",
"Jalaun":  "#97db5c",
"Lucknow":  "#deb7b7",
"Kairana":  "#cad5ef",
"Mathura":  "#d0eb6d",
"Jhansi":  "#fe9fe1",
"Varanasi":  "#bdc7ad",
"Agra":  "#fcdadf",
"Gautam Buddha Nagar":  "#d9bae2",
"Bulandshahr":  "#dac05a",
"Muzaffarnagar":  "#ecda91",
"Ghaziabad":  "#fef5d0",
"Almora":  "#ffa4bc",
"Garhwal":  "#43d9fd",
"Tehri Garhwal":  "#d2fcf5",
"Hardwar":  "#b1c7d0",
"Nainital udhamsingh Nagar":  "#e6f0fb",
"Asansol":  "#83e5bd",
"Darjeeling":  "#b2e598",
"Jahanabad":  "#fdfb73",
"Karakat":  "#73fd58",
"Sitamarhi":  "#a6cfa2",
"Thrissur":  "#a1e3e1",
"Kasaragod":  "#e4e21c",
"Attingal":  "#8ef8b0",
"Alathur":  "#e2c30e",
"Palakkad":  "#fdc7ff",
"Kannur":  "#cefeb9",
"Tripura East":  "#0be597",
"Tripura West":  "#d4c491",
"Raiganj":  "#fdc5b5",
"Murshidabad":  "#e4fdde",
"Nagarkurnool":  "#d5ccc7",
"Nalgonda":  "#acdaf8",
"ARUNACHAL EAST":  "#e4c9da",
"Autonomous District":  "#fdc664",
"Silchar":  "#badfc5",
"Kaliabor":  "#bbd15f",
"Supaul":  "#fdf1f7",
"Kishanganj":  "#b4c3ed",
"Rohtak":  "#93e8fd",
"Kolar":  "#ddd9e3",
"Chikkballapur":  "#e5e5d7",
"Tumkur":  "#98e116",
"Raichur":  "#e0d0fb",
"Chitradurga":  "#fccd95",
"Chikkodi":  "#aafdfe",
"Gulbarga":  "#5cd9de",
"Chamarajanagar":  "#deba9d",
"Bangalore Rural":  "#dce994",
"Thiruvananthapuram":  "#d6b2fb",
"Ernakulam":  "#c5bedd",
"Pathanamthitta":  "#bec4c3",
"Wayanad":  "#feab79",
"Kozhikode":  "#82ea7f",
"Mavelikkara":  "#fed7f3",
"Vadakara":  "#8affd2",
"Alappuzha":  "#d6fc50",
"GUNA":  "#e8aed9",
"CHHINDWARA":  "#f7b7c2",
"Hingoli":  "#2bf4e5",
"Nanded":  "#ffad53",
"Inner manipur":  "#11ff13",
"Outer manipur":  "#d3fe94",
"Shillong":  "#c2e530",
"MIZORAM":  "#aef161",
"Ludhiana":  "#fee5d4",
"Jalandhar":  "#a3d378",
"Amritsar":  "#dad351",
"Amethi":  "#fec328",
"Rae Bareli":  "#a4e3b3",
"Jangipur":  "#a9efd9",
"Maldaha Dakshin":  "#feeb8a",
"Maldaha Uttar":  "#85d4cd",
"Baharampur":  "#e0b4c9",
"Kokrajhar":  "#55e358",
"Chalakudy":  "#bddbe1",
"Idukki":  "#48ffa0",
"Hisar":  "#d6eee1",
"Sirsa":  "#fee3b0",
"Ponnani":  "#ff99fd",
"Malappuram":  "#3fe0b0",
"Hassan":  "#84d7fe",
"Mandya":  "#7be9d3",
"Nalanda":  "#1bf3cd",
"Purnia":  "#d4d4af",
"Srinagar":  "#d6d278",
"Baramulla":  "#70fffe",
"Anantnag":  "#aac8e1",
"Dumka":  "#ffb0fe",
"Rajmahal":  "#b5ccbf",
"Kottayam":  "#c6ccd5",
"Samastipur (SC)":  "#ccd9c5",
"Jamui (SC)":  "#feee3e",
"Vaishali":  "#cdc0ab",
"Khagaria":  "#58e182",
"Munger":  "#e9b8f8",
"Hajipur (SC)":  "#f7bc97",
"Katihar":  "#b4e275",
"Lakshadweep":  "#bee8e1",
"Madha":  "#e1e3ff",
"Baramati":  "#ebebb2",
"Satara":  "#8fd4af",
"Kolhapur":  "#c0d3a2",
"Tura":  "#e7c67d",
"Nagaland":  "#6ceba9",
"Dharmapuri":  "#d8cde4",
"Banka":  "#eacdc6",
"Bhagalpur":  "#d4eef1",
"Madhepura":  "#e7e8e9",
"Araria":  "#7deaec",
"Kollam":  "#88f31d",
"Anandpur Sahib":  "#c0efbe",
"Khadoor Sahib":  "#75d8be",
"Firozpur":  "#a0d1d3",
"Bathinda":  "#fdacd4",
"Sikkim":  "#09f64f",
"Mumbai   South":  "#c4dc8c",
"Mumbai South central":  "#d0d1fc",
"Raigad":  "#ecccf1",
"Kalyan":  "#f7d517",
"Mumbai North West":  "#d0dde8",
"Amravati":  "#e7dadc",
"Yavatmal Washim":  "#78fe8b",
"Ratnagiri   sindhudurg":  "#e6e373",
"Nashik":  "#cde5fd",
"Buldhana":  "#b1fead",
"Maval":  "#e7fec5",
"Ramtek":  "#e9fdfd",
"Aurangabad":  "#b9c3d9",
"Shirdi":  "#cebec1",
"Parbhani":  "#eab3a4",
"Thane":  "#edb84a",
"Osmanabad":  "#8aea52",
"Shirur":  "#bad5fd",
"Azamgarh":  "#a7ddea",
"Kannauj":  "#f9c9d5",
"Badaun":  "#f2deec",
"Firozabad":  "#fbf4e7",
"Mainpuri":  "#b3d8cf",
"Hatkanangle":  "#feb9ed",
"Kakinada":  "#96e89d",
"Malkajgiri":  "#d5d99c",
"Vizianagaram":  "#efd16f",
"Srikakulam":  "#ecfb92",
"Anakapalli":  "#d0bbd2",
"Bapatla":  "#89d97b",
"Machilipatnam":  "#cdc47c",
"Vijayawada":  "#acd345",
"Amalapuram":  "#21e0f4",
"Chittoor":  "#9ed693",
"Hindupur":  "#9adfcd",
"Anantapur":  "#ccdc4c",
"Guntur":  "#e3e3c2",
"Eluru":  "#d8f003",
"Rajahmundry":  "#e7f158",
"Narasaraopet":  "#b8fff2",
"Mahabubabad":  "#cdb9e9",
"Mahbubnagar":  "#faa8ae",
"Adilabad":  "#cac75c",
"CHELVELLA":  "#d7d119",
"Nizamabad":  "#eccb48",
"Bhongir":  "#bbd7ea",
"Karimnagar":  "#a0f3c1",
"Zahirabad":  "#cbeaa6",
"Peddapalle":  "#c5f4e0",
"Medak":  "#ede9f5",
"Warangal":  "#b8bffd",
"Aruku":  "#97cced",
"Khammam":  "#70dba6",
"Kurnool":  "#72dbf2",
"Nellore":  "#e6bddd",
"Tirupati":  "#ddc2fe",
"Ongole":  "#b8ddb0",
"Rajampet":  "#e7d29e",
"Nandyal":  "#c7ec8c",
"Kadapa":  "#d1edce"



};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("visit-sequences.csv", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(2);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.6);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 0.8)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 75, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};