const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => { 
    // insert data on the tables
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6655874",
        name: "Loves Home",
        about: "We provide assistance to children aged 6 to 15 who are in risk situation and or social vulnerability.",
        whatsapp: "99555-88858",
        images: [
            "https://images.unsplash.com/photo-1604359027531-d8e4865ad050?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Come visit us and bring with you a lot of love and affection to give!",
        opening_hours: "08:00AM - 08:00PM",
        open_on_weekends: "1"
    });

    // data consult on the tables
    const selectedOprhanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOprhanages)

    // consult only 1 orphanage, by id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
})    