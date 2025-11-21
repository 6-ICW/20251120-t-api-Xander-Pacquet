/**
 * zorg ervoor dat je onderstaande functies werken
 *
 * 1. Zorg dat je een lijst van alle geschenken kan krijgen (enkel de id en de naam).
 * 2. Zorg dat je op basis van een verkregen ID de details van een geschenk kan teruggeven
 * 3. Zorg ervoor dat via postman nieuwe (andere zaken dan onderstaand) kan toevoegen aan de lijst van
 * geschenken.
 * 4. Zorg ervoor dat een geschenk enkel gewist kan worden als het in geen enkel lijstje staat.
 *
 * succes!!
 */

// connecteer de datagegevens aan de controller
const { sinterklaasGeschenken: geschenken, kinderen } = require("../databank/data");


const lijstGeschenken = (req, res) => {
  res.json(geschenken.map({status:"gelukt",data: (geschenk)=>geschenk.id + " "+geschenk.naam}));
};

const geschenkInfo = (req, res) => {
  const idGeschenk = req.params.ID
  console.log(idGeschenk);
  
  res.json({ status: "gelukt", data:geschenken.filter((geschenk)=>geschenk.ID == idGeschenk) });
};

const geschenkToevoegen = (req, res) => {
  let geschenkID = 0
  geschenken.forEach(geschenk=>{
    if(geschenkID<geschenk.id)geschenkID = item.ID
  })
  geschenkID++
  const newGeschenk = {
    id: geschenkID,
    naam: req.body.naam,
    categorie: req.body.categorie,
    prijs: req.body.prijs,
  };
  geschenken.push(newGeschenk);
  res.json(newGeschenk);
};

const geschenkWissen = (req, res) => {
  const idGeschenk = req.body.ID
  const geschenkToDel = geschenken.find(
    (geschenk) => geschenk.id == req.params.ID
  );
  const indexToDel = geschenken.indexOf(geschenkToDel);

  geschenken.splice(indexToDel, 1);
  res.json({ resultaat: "gelukt" });
};

// const newID = (lijstMetID) => {
//   lijstMetID.forEach((item) => {
//     maxID = 0;
//     item.id > maxID ? (maxID = item.id) : (maxID = maxID);
//   });
//   return maxID + 1;
// };

module.exports = {
  lijstGeschenken,
  geschenkInfo,
  geschenkToevoegen,
  geschenkWissen,
};
