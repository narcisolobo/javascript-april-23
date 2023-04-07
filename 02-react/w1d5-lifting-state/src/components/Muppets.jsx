import MuppetForm from "./MuppetForm";
import MuppetList from "./MuppetList";
import { muppetData } from '../data/muppets';
import { useState } from "react";

function Muppets() {
  const [muppets, setMuppets] = useState(muppetData);

  return (
    <div className="row mt-3">
      <div className="col">
        <MuppetForm setMuppets={setMuppets} muppets={muppets} />
      </div>
      <div className="col">
        <MuppetList muppets={muppets} />
      </div>
    </div>
  );
}

export default Muppets;
