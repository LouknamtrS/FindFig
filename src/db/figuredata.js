const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tsittidet:thereallalune@findfigdb.4gxdoii.mongodb.net/')
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('error');
})

//create schema
const FigureSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    description: String,
    barcode: Number,
    category: [String],
    tags: [String],
    stock: Number,
    release_date: String,
    release_by: String,
    brand: String,
    series: String,
    copyright: [String],
    manufacturer: String,
    Specifications: [{
        scale: String,
        product_size: String,
        weight: String,
        material: String,
    }],
    preowned_grade: [{
        item: String,
        box: String,
    }],
    thumb: String,
    imgs: [String]
})

const collection = new mongoose.model('data_product',FigureSchema)

data_product =[{
    id: 1,
    name: 'Elden Ring: Figuarts Mini Raging Wolf',
    price: 1372,
    description: 'Your favorite characters, stylized and squashed down to adorable palm-sized proportions with lifelike eyes and simple possibility. Raging Wolf from the smash hit game "ELDEN RING" joins Figuarts mini!',
    barcode: 4573102618917,
    category: ['game','Elden Ring'],
    tags: ['game','Elden Ring','Stand','TAMASHII','wolf'],
    stock: 2,
    release_date: '2022-10-29',
    release_by: 'ELDEN RING',
    brand: 'TAMASHII NATIONS',
    series: 'Elden Ring',
    copyright: ['Elden Ring TM','©Bandai Namco Entertainment Inc.','©2022 FromSoftware Inc.'],
    manufacturer: 'Bandai',
    specifications: [{
        scale: 'non-scale',
        product_size: '8.9 cm in height',
        weight: '0.35 kg',
        material: 'PVC and ABS',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    thumb: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/a9616696-31e5-4e55-9642-787ff3fb29ef.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/c2da0323-6e58-4a3c-8ef5-4f9bba7ae558.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/7ed6f5c6-0305-4160-9191-22e705f6213a.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/689f8fe2-317a-4af4-a113-e651f77a043b.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/660dd3d0-ec29-498f-add9-b547582118ad.jpg']
},
{
    id: 2,
    name: 'Elden Ring: Figuarts Mini Melina',
    price: 1372,
    description: 'Your favorite characters, stylized and squashed down to adorable palm-sized proportions with lifelike eyes and simple possibility. Melina from the smash hit game "ELDEN RING" joins Figuarts mini!',
    barcode: 4573102618924,
    category: ['game','Elden Ring'],
    tags: ['game','Elden Ring','Stand','TAMASHII','Melina'],
    stock: 3,
    release_date: '2022-10-29',
    release_by: 'ELDEN RING',
    brand: 'TAMASHII NATIONS',
    series: 'Elden Ring',
    copyright: ['Elden Ring TM','©Bandai Namco Entertainment Inc.','©2022 FromSoftware Inc.'],
    manufacturer: 'Bandai',
    specifications: [{
        scale: 'non-scale',
        product_size: '8.9 cm in height',
        weight: '0.35 kg',
        material: 'PVC and ABS',
    }],
    preowned_grade: [{
        item: 'A',
        box: 'B',
    }],
    thumb: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/8af59a2c-3648-4050-a864-8010a6a2f39a.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/364b0d68-31c3-48e2-80eb-8c0733caaa13.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/2615838d-e782-42c2-a815-c8f339eb4b35.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/bcc33c46-c0a7-4120-bf41-3e6fa8709cc7.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/9a80698e-2366-4c35-ab3a-6c3489f8cc9a.jpg']
},
{
    id: 3,
    name: 'Elden Ring: Malenia Blade of Miquella',
    price: 15000,
    description: 'This is a MUST OWN statue for ANY lover or fan of Melania and Elden Ring!',
    barcode: 4573102656575,
    category: ['game','Elden Ring'],
    tags: ['game','Elden Ring','Stand','TAMASHII','Malenia'],
    stock: 3,
    release_date: '2023/Q1',
    release_by: 'Coolbear Studio',
    brand: 'RD STUDIO',
    series: 'Elden Ring',
    copyright: ['Elden Ring TM','©Bandai Namco Entertainment Inc.','©2022 FromSoftware Inc.'],
    manufacturer: 'Bandai',
    specifications: [{
        scale: 'close to 1:4',
        product_size: '90 cm in height 92.5 cm in width 92.5 cm in depth',
        weight: '13 kg',
        material: 'U/Resin + LED',
    }],
    notes:'Light and art print included',
    preowned_grade: [{
        item: 'B',
        box: 'B',
    }],
    thumb: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/c9a4f485-eca7-4a09-a043-fa9116e5645c.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/83f61c93-ddb1-4e7f-acb9-52d0c38f80c4.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/fcf60b9b-fef0-4e2d-89c9-be22c546857b.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/9073eafd-d3b1-4069-90e5-5dd14c5c9cc6.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/6e83e1d0-57ed-4e1b-9592-6353fe890321.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/20017dbc-51fe-4644-96ce-dfe02d054dda.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/421e8e53-d4ee-4e85-8da7-05d2530d3f0a.jpg']
},{
    id: 4,
    name: 'Lady Dimitrescu',
    price: 55000.99,
    description: '"You will learn what it means to insult House Dimitrescu!" One of the Four Lords of the village, the Countess Alcina Dimitrescu ruled from her noble family\’s estate, Castle Dimitrescu, and was feared by all.”',
    barcode: 713929404049,
    category: ['game','Resident Evil'],
    tags: ['game','Resident Evil','statues','Kotobukiya','Lady Dimitrescu'],
    stock: 3,
    release_date: '2023/Q4',
    release_by: 'Resident Evil',
    brand: 'Resident Evil',
    series: 'Resident Evil',
    copyright: ['©CAPCOM CO., LTD. ALL RIGHTS RESERVED.'],
    manufacturer: 'PureArts',
    specifications: [{
        scale: '1:6',
        product_size: '89 cm in height',
        weight: '18.1 kg',
        material: 'Polyresin',
    }],
    notes: null,
    preowned_grade: [{
        item: 'C',
        box: 'B',
    }],
    thumb: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/221e9557-c79d-445c-b427-3c9efc826528.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/0c56a8f2-80fd-4e15-b3fa-ada2502955cd.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/c523971a-257b-4854-bee6-b18001841e34.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/2c98f04f-f93e-4c17-8c9c-502faa49b80b.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/077d70e5-884c-4077-bd9c-227729e30694.jpg']
},
{
    id: 5,
    name: 'Leon S. Kennedy',
    price: 3875,
    description: 'Synonymous with the survival horror genre, the Resident Evil collectibles series has shipped over 131 million units worldwide. Now, Leon S. Kennedy, the main character of the CG animated film Resident Evil: Vendetta, rejoins the Kotobukiya lineup as a PVC statue.',
    barcode: 190526049864,
    category: ['game','Resident Evil'],
    tags: ['game','Resident Evil','statues','Kotobukiya','Leon'],
    stock: 1,
    release_date: '2023/Q4',
    release_by: 'Resident Evil',
    brand: 'Resident Evil',
    series: 'Resident Evil',
    copyright: ['© 2023 CAPCOM / VENDETTA FILM PARTNERS. ALL RIGHTS RESERVED.'],
    manufacturer: 'Kotobukiya',
    specifications: [{
        scale: '1:6',
        product_size: '29 cm in height',
        weight: '1.4 kg',
        material: 'PVC',
    }],
    notes: null,
    preowned_grade: [{
        item: 'A',
        box: 'B',
    }],thumb: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/eb861364-7243-453c-9449-a18bfdd2f2d0.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/958ee314-1a62-4505-9131-9e91ca2ae193.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/4379488c-6147-4f46-a3f3-2835003a0def.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/f1ba1cca-858c-4304-94b3-ab601254355d.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/ae97e425-7495-4d20-a17d-e31d46af22fc.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/f0b7cedd-3f87-40a0-af07-1f46987b63e7.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/3caa1f14-59a5-4dd9-9944-f95e7c3fb6ad.jpg']
},
{
    id: 6,
    name: 'Huggy Good Smile Loid Forger',
    price: 659,
    description: 'Huggy Good Smile is a new chibi figure series. A magnet is mounted on the back of the head, and the arms of the figure can be moved up and down to pose it.',
    barcode: 4580590177468,
    category: ['anime','SPY x FAMILY'],
    tags: ['anime','SPY x FAMILY','chibi','Loid Forger'],
    stock: 2,
    release_date: 'May 2024',
    release_by: 'Good Smile Arts Shanghai',
    brand: 'Good Smile Arts Shanghai',
    series: 'SPY x FAMILY',
    copyright: ['© Tatsuya Endo/Shueisha, SPY x FAMILY Project'],
    manufacturer: 'Good Smile Arts Shanghai',
    specifications: [{
        scale: 'non-scale',
        product_size: '6.5 cm in height',
        weight: '0.2 kg',
        material: 'Plastic',
    }],
    notes: 'Painted plastic complete product. Articulated arms. Magnet mounted to back of head.',
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],thumb: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/ca943c62-1a4c-4472-bc03-0f871ea68ba1.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/f1627cad-ed12-4057-bb6d-ef82ae53f763.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/eacfae71-b45e-43d0-91e3-c2664e0c9c4d.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/169724ff-692b-469a-a149-890ae344e892.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/51dc9969-f374-43ac-b27c-94d1ef456505.jpg']
},
{
    id: 7,
    name: 'Bond Forger Fluffy Puffy Figure (Ver. A)',
    price: 990,
    description: 'Bond Forger is the family pet and one of the main protagonists in the comedy anime series, SPYxFAMILY. Through various lab experiments from “Project Apple” has granted him clairvoyant abilities, allowing him to see images of the future. Through Anya’s ability to read minds, Bond is able to convey the future images to her in order for her, and her family to avoid possible dangers.',
    barcode: 4983164884685,
    category: ['anime','SPY x FAMILY'],
    tags: ['anime','SPY x FAMILY','Fluffy Puffy','Bond Forger'],
    stock: 1,
    release_date: 'February 15, 2024',
    release_by: 'Bandai Spirits Banpresto',
    brand: 'Banpresto',
    series: 'SPY x FAMILY',
    copyright: ['© Tatsuya Endo/Shueisha, SPY x FAMILY Project'],
    manufacturer: 'Banpresto',
    specifications: [{
        scale: 'non-scale',
        product_size: '8 cm in height',
        weight: '0.3 kg',
        material: 'PVC, ABS',
    }],
    notes: '',
    preowned_grade: [{
        item: 'C',
        box: 'B',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/45893c91-996b-46bb-9d16-a819cf4b70cc.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/bae68961-6956-47a3-a686-3fb34e55f26c.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/2112b33c-4c11-46e9-ba69-c3f8fa29d61b.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/6062f820-adb5-41a1-9be2-1353d3d29ed8.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/2746c4d6-9189-4222-aa8b-ed1ad8bc9656.jpg']
},
{
    id: 8,
    name: 'LookUp Spy x Family Anya Forger',
    price: 1150,
    description: 'The look up series of figures are all posed in sitting poses looking upward, allowing them to be displayed by your side always looking up into your eyes. The necks are also fitted with a joint so they can always be looking right at you!',
    barcode: 4535123833236,
    category: ['anime','SPY x FAMILY','chibi'],
    tags: ['anime','SPY x FAMILY','chibi','Anya Forger'],
    stock: 1,
    release_date: 'January 18, 2023',
    release_by: 'MegaHouse',
    brand: 'MegaHouse',
    series: 'SPY x FAMILY',
    copyright: ['© Tatsuya Endo/Shueisha, SPY x FAMILY Project'],
    manufacturer: 'MegaHouse',
    specifications: [{
        scale: 'non-scale',
        product_size: '11 cm in height',
        weight: '0.35 kg',
        material: 'Polyvinyl Chloride',
    }],
    notes: 'Includes Additional Face Plates.',
    preowned_grade: [{
        item: 'A',
        box: 'B',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/cc711697-1388-4e62-b910-dff2464276c8.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/ec10b737-6811-4c9a-a0e4-a404d391ce45.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/6c08b855-c763-49e3-8648-ba06fbf091e3.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/c8aba7ca-79ac-4e46-a52b-1da7325d918d.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/873523f1-9aa7-480c-975b-a73e7557b931.jpg',
'https://thumbs-eu-west-1.myalbum.io/photo/1k0/25a00160-5db4-4f8a-85d0-fe3e1c4bb809.jpg']
},
{
    id: 9,
    name: 'SPY×FAMILY Yor Forger 1/7 Scale Figure',
    price: 4850,
    description: 'From the smash hit TV anime SPY x FAMILY,  the deadly assassin “Thorn Princess,” Yor Forger, is turned into a 1/7 scale figure!',
    barcode: 4589584958557,
    category: ['anime','SPY x FAMILY','stand','figure'],
    tags: ['anime','SPY x FAMILY','stand','figure','Yor Forger'],
    stock: 2,
    release_date: 'May 2023',
    release_by: 'Good Smile Arts Shanghai',
    brand: 'Good Smile Arts Shanghai',
    series: 'SPY x FAMILY',
    copyright: ['© Tatsuya Endo/Shueisha, SPY x FAMILY Project'],
    manufacturer: 'FuRyu',
    specifications: [{
        scale: '1:7',
        product_size: '25 cm in height',
        weight: '1.5 kg',
        material: 'ABS and PVC',
    }],
    notes: 'Stand included.',
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/657675aa-b7a9-4faf-b734-7ce8043ea60a.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/ec443d99-6731-420c-8c63-17e43cd05bad.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/0cdd79eb-3d37-4cbf-9332-817b781e80fd.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/2f2a4222-ab35-4cac-b2e1-6ff725ac2aa7.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/ac9bef04-0391-467d-9c3a-146d47e3f0e4.jpg',
'https://thumbs-eu-west-1.myalbum.io/photo/1k0/1a227523-f7e9-4546-b20b-f257c33a2f3b.jpg',
'https://thumbs-eu-west-1.myalbum.io/photo/1k0/0425bbfe-3bd7-4ab3-ac47-6168063f4094.jpg']
},
{
    id: 10,
    name: 'Nendoroid Izuku Midoriya: U.A. School Uniform Ver.',
    price: 990,
    description: 'From the popular anime series "My Hero Academia" comes a Nendoroid of Izuku Midoriya, also known as Deku, wearing his U.A. High School uniform!',
    barcode: 4580590177680,
    category: ['anime','My Hero Academia','nendoroid'],
    tags: ['anime','My Hero Academia','nendoroid','mha','Midoriya Izuku','deku'],
    stock: 2,
    release_date: 'May 2024',
    release_by: 'TOMY',
    brand: 'Good Smile Company',
    series: 'My Hero Academia',
    copyright: ['© K. Horikoshi / Shueisha, My Hero Academia Project'],
    manufacturer: 'Good Smile Company',
    specifications: [{
        scale: 'non-scale',
        product_size: '25 cm in height',
        weight: '0.3 kg',
        material: 'ABS and PVC',
    }],
    notes: 'All face plates and optional parts included',
    preowned_grade: [{
        item: 'C',
        box: 'A',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/6f1f97e9-65c2-4067-873f-3f1f5a939818.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/09b6fcef-1f4c-49df-8927-ab09bdfc09d2.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/830b86d5-68aa-4ac6-87ff-a0cbd852879c.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/67d5022c-e572-457f-80f5-db6b37d491da.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/69c30d32-10da-4daa-b0c1-09470a3557f1.jpg']
},
{
    id: 11,
    name: 'LookUp My Hero Academia Katsuki Bakugo',
    price: 550,
    description: 'The figures in the Lookup series are all in sitting poses looking up, so they can be displayed by your side, always looking up into your eyes.',
    barcode: 4535123837463,
    category: ['anime','My Hero Academia','chibi'],
    tags: ['anime','My Hero Academia','chibi','mha','Katsuki Bakugo'],
    stock: 3,
    release_date: 'March 2024',
    release_by: 'TOMY',
    brand: 'MegaHouse',
    series: 'My Hero Academia',
    copyright: ['© K. Horikoshi / Shueisha, My Hero Academia Project'],
    manufacturer: 'Megahouse',
    specifications: [{
        scale: 'non-scale',
        product_size: '11 cm in height',
        weight: '0.3 kg',
        material: 'PVC',
    }],
    notes: '',
    preowned_grade: [{
        item: 'C',
        box: 'B',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/6af6d670-52f8-4acf-b390-e82fdafe1a9b.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/04b10e63-e780-41ec-8a94-b12cb2eb0ecb.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/ed4ed73a-ab2a-4a28-b7ee-328ca5c0bf08.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/99e78925-5043-42d2-a03e-c7dc8643dae6.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/b6fcd63c-11a8-4098-92db-3c724069b130.jpg']
},
{
    id: 12,
    name: 'My Hero Academia The Evil Villains Vol.8 - Tomura Shigaraki',
    price: 320,
    description: 'From the My Hero Academia anime series comes a figure of Shigaraki Tomura! They are about 5.1 inches tall and has been faithfully recreated.',
    barcode: 4983164885934,
    category: ['anime','My Hero Academia','figure'],
    tags: ['anime','My Hero Academia','figure','mha','Tomura Shigaraki'],
    stock: 2,
    release_date: 'October 2024',
    release_by: 'Banpresto',
    brand: 'Banpresto',
    series: 'My Hero Academia',
    copyright: ['© K. Horikoshi / Shueisha, My Hero Academia Project'],
    manufacturer: 'Banpresto',
    specifications: [{
        scale: 'non-scale',
        product_size: '13 cm in height',
        weight: '0.4 kg',
        material: 'ABS and PVC',
    }],
    notes: '',
    preowned_grade: [{
        item: 'B',
        box: 'A',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/630ea00c-fdfc-420d-a7d6-8a6e467a31b0.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/8fc90c5c-8ce5-41df-b356-36b015e35aac.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/f19bdae0-c491-44b6-beb4-3d7c56ad32f7.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/dd29778b-9aff-4015-97cb-82985f82dd11.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/04aa6514-c834-4a26-bddf-f364ecd26e81.jpg']
},
{
    id: 13,
    name: 'Nendoroid Shoto Todoroki: Hero\'s Edition',
    price: 1550,
    description: '"It\'s not your fault. We\'re just playing on different levels."',
    barcode: 4580590170414,
    category: ['anime','My Hero Academia','nendoroid'],
    tags: ['anime','My Hero Academia','nendoroid','mha','Shoto Todoroki','Shoto'],
    stock: 2,
    release_date: 'December 2022',
    release_by: 'TOMY',
    brand: 'Good Smile Company',
    series: 'My Hero Academia',
    copyright: ['© K. Horikoshi / Shueisha, My Hero Academia Project'],
    manufacturer: 'Good Smile Company',
    specifications: [{
        scale: 'non-scale',
        product_size: '10 cm in height',
        weight: '0.3 kg',
        material: 'ABS and PVC',
    }],
    notes: 'All face plates and optional parts included',
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    thumb:"https://thumbs-eu-west-1.myalbum.io/photo/1k0/56622609-a916-4bfc-bda0-38d324bc6b14.jpg",
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/6d8f00fc-c3f3-413c-907f-0b0e6c4ae4fe.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/b22d6311-9f73-4905-a411-dfd3c7e2c54c.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/06e2a195-1f6e-4ef7-9bab-046da3946001.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/65cc9a43-7634-4fbe-8ce8-c67c99578bd9.jpg',
'https://thumbs-eu-west-1.myalbum.io/photo/1k0/24589ba1-b045-48f8-b09b-c285de41c9c1.jpg']
},{
    id: 14,
    name: 'Nendoroid Ron Weasley',
    price: 350,
    description: '"BLOODY HELL!" From the popular film series, "Harry Potter", comes a Nendoroid action figure of Harry\'s good friend, Ron Weasley!',
    barcode: 4580416906715,
    category: ['film series','Harry Potter','nendoroid'],
    tags: ['film series','Harry Potter','nendoroid','HP','Ron Weasley'],
    stock: 1,
    release_date: 'May 2019',
    release_by: 'Good Smile Company',
    brand: 'Good Smile Company',
    series: 'Harry Potter',
    copyright: ['HARRY POTTER characters, names and related indicia are ©＆TM Warner Bros. Entertainment Inc. (s18)'],
    manufacturer: 'Good Smile Company',
    specifications: [{
        scale: 'non-scale',
        product_size: '10 cm in height',
        weight: '0.4 kg',
        material: 'ABS and PVC',
    }],
    notes: 'All face plates and optional parts included',
    preowned_grade: [{
        item: 'A',
        box: 'D',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/8c534eb2-e2de-4753-a4b7-6946e1e4b022.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/6523e25c-33d5-4d1b-9fd6-7c6b35dc0914.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/401418a2-c5c0-46d3-ad5a-9c6adf8de0c2.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/00530b51-8c72-4015-bb4d-b90109ee6031.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/862ed40a-b8ea-4d83-952d-c1a0ee0ff1c5.jpg']
},{
    id: 15,
    name: 'Harry Potter Q Posket-Harry Potter-Ii (Ver.A)',
    price: 890,
    description: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels Chronicle the lives of A young Wizard, Harry Potter, and his friends Hermione Granger and Ron Wesley, all of whom are students at Hogwarts school of Witchcraft and Wizardry.',
    barcode: 4983164358940,
    category: ['film series','Harry Potter'],
    tags: ['film series','Harry Potter','HP'],
    stock: 1,
    release_date: 'July 2019',
    release_by: 'Banpresto',
    brand: 'Banpresto',
    series: 'Harry Potter',
    copyright: ['HARRY POTTER characters, names and related indicia are ©＆TM Warner Bros. Entertainment Inc. (s18)'],
    manufacturer: 'Banpresto',
    specifications: [{
        scale: 'non-scale',
        product_size: '14 cm in height',
        weight: '0.35 kg',
        material: 'ABS and PVC',
    }],
    notes: 'Recommended for indoor use only',
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/362fde5a-2aea-452d-9a74-3bd807a146c6.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/58a45374-05fb-4f09-afae-df19425741c7.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/b512ce08-bf22-4e7a-ba2e-7be3eeba8762.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/ac8df894-7c4f-4ed5-bb8b-e28bd5a0f2e9.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/2d30a7d9-cb3b-4673-b0d2-f44ae9b2db71.jpg']
},{
    id: 16,
    name: 'Harry Potter Q Posket-Hermione Granger with Crookshanks, Multicolor',
    price: 679,
    description: 'Hermione Granger with Crookshanks action figure. Toy represents Harry Potter film series.',
    barcode: 4983164166514,
    category: ['film series','Harry Potter'],
    tags: ['film series','Harry Potter','HP','Hermione Granger'],
    stock: 1,
    release_date: 'June 2019',
    release_by: 'Banpresto',
    brand: 'Banpresto',
    series: 'Harry Potter',
    copyright: ['HARRY POTTER characters, names and related indicia are ©＆TM Warner Bros. Entertainment Inc. (s18)'],
    manufacturer: 'Banpresto',
    specifications: [{
        scale: 'non-scale',
        product_size: '14 cm in height',
        weight: '0.35 kg',
        material: 'ABS and PVC',
    }],
    notes: 'Recommended for indoor use only.',
    preowned_grade: [{
        item: 'B',
        box: 'A',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/4ff73547-0af4-4a8b-9b1a-4b9ba3895ed8.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/b1925ab7-5476-4f61-9eda-095fcbbd002c.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/dbf13f82-c106-4a10-a320-875c3708cad8.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/0e3dbdb2-5dc7-4a9a-8d1f-104cffb0e9b6.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/63f69af1-5fa2-49d9-8808-ac1da2de3fd7.jpg']
},{
    id: 17,
    name: 'Nendoroid Loki: TVA Ver.',
    price: 1500,
    description: 'From the popular Disney+ series “Loki” comes a Nendoroid of Loki! He comes with two face plates—a mischievous smiling expression and a winking expression! Optional parts include a miniature figure of Miss Minutes, a TemPad and the Tesseract. Be sure to add the adorable Nendoroid Loki to your collection!',
    barcode: 4580590125827,
    category: ['film series','Loki','nendoroid'],
    tags: ['film series','nendoroid','Loki','TVA'],
    stock: 1,
    release_date: 'June 2022',
    release_by: 'Good Smile Company',
    brand: 'Good Smile Company',
    series: 'Loki',
    copyright: ['© 2021 MARVEL'],
    manufacturer: 'Good Smile Company',
    specifications: [{
        scale: 'non-scale',
        product_size: '10 cm in height',
        weight: '0.35 kg',
        material: 'ABS and PVC',
    }],
    notes: 'All face plates and optional parts included',
    preowned_grade: [{
        item: 'A',
        box: 'A',
    }],
    thumb:'https://thumbs-eu-west-1.myalbum.io/photo/1k0/290f6975-3c3f-4e89-afee-512d07d9ba50.jpg',
    imgs: ['https://thumbs-eu-west-1.myalbum.io/photo/1k0/1ba401c3-107e-410e-a29b-5aef2863c714.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/e0657f5a-2441-4d65-a6a6-c827fa8b884d.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/b0703d8c-2823-44e1-815b-fc05a1b48ec1.jpg',
  'https://thumbs-eu-west-1.myalbum.io/photo/1k0/a000baff-87b6-4f9f-a0fb-0c6a01df9e82.jpg',
'https://thumbs-eu-west-1.myalbum.io/photo/1k0/bba17252-543a-4ada-9819-20203ce451e8.jpg']
}
]
data_product.forEach((status) => {
    const newData = new collection((status));
    newData.save();
  })
//insert mock data