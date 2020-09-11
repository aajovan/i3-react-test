
import React from 'react';


function IndexDEMO() {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h4>Ovo je index</h4>
      <div className="container">
        <ul>
          <li>Stranica 1 = stranica 1 kao u zadatku</li>
          <li>Stranica 2 = stranica 2 kao u zadatku</li>
          <li>Logo = index</li>
          <li>Dropdown demo = test ukoliko komponenta kreira dropdown prema parametrima</li>
          <ul className="pt-4">
            <li>submenu1 demo = kopija stranice 1 sa drugačijim parametrima</li>
            <li>submenu2 demo = kopija stranice 2 sa drugačijim parametrima</li>
            <li className="pb-4">moguće je i bez kopiranja stranica, no pretpostavka je da će se samo komponente unutar stranica prilagođavati</li>
          </ul>
          <li>Stranica 4 = stranica 2 layout + više podataka u JSON - test dodanog sadržaja</li>
          <li className="pt-4">U JSON (sample.JSON) je moguće dodati podatke, većina komponenti će se prilagoditi podacima, potrebno je pratiti strukturu JSON-a</li>
          <li className="pt-4">Većina komponenti nudi nekoliko parametara radi lakše prilagodbe (npr. TextImgContainer prihvaća array odlomaka, pomicanje slike lijevo/desno, ubacivanje dodatnog sadržaja lijevo/desno)</li>
        </ul>
      </div>
    </div>
  );
}

export default IndexDEMO;
