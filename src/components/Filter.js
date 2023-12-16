
function clickCheck (event,e, func, title){
    func(event.target.checked,e, title)

}

export default function (prop) {
    return (
        <div className="filter">
            <div className="flex filter-container">
                <p className="filter-title bold500">{prop.title}</p>
                <button className="filter-btn bold500" data-bs-toggle="" data-bs-target={"#fandom-list-"+prop.title.replace(" ","-")} aria-expanded="false" aria-controls={"fandom-list-"+prop.title.replace(" ","-")}>
                +</button>
            </div>
            <div class="checkbox-wrapper-24" id={"fandom-list-"+prop.title.replace(" ","-")}>
                {prop.list.map((e, index) => (
                    <div key={index} className="form-check">
                    <input
                        type="checkbox"
                        id={`check-${index}`} // Use a unique identifier for each checkbox
                        name="check"
                        value=""
                        onChange={(event) => clickCheck(event, e, prop.filterHandler, prop.title)}
                    />
                    <label htmlFor={`check-${index}`}>
                        <span></span>{e}
                    </label>
                    </div>
                ))}

        </div>
    </div>
    )
}