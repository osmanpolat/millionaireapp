import moneyPyramids from "../data/moneyPyramid.js";



const Pyramid=({questionPyramid})=>{

    return (
        <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramids.map((m)=>(
          <li  key={m.id} className={questionPyramid===m.id ? "moneyListItem active":"moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
            </li>
            ))}
        </ul>
      </div>
    )

}

export default Pyramid