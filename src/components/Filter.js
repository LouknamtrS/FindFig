export default function (prop) {
    return (
        <div className="filter">
            <div className="d-flex flex-row justify-content-between"><p>{prop.title}</p><button data-bs-toggle="collapse" data-bs-target="#fandom-list" aria-expanded="false" aria-controls="fandom-list">+</button></div>
            <ul class="collapse collapse-horizontal" id="fandom-list">
                { prop.list.map((e) => (<li><input type="checkbox"/><label>{ e }</label></li>)) }
            </ul>
          </div>
    )
}