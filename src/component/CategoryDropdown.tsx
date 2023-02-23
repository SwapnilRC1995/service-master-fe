import { useState } from "react";

type Props = {
    category: string[],
    handleOnClick?: (c: string) => void
}

function CategoryDropdown(props: Props) {
    const [selected, setSelected] = useState("Select category");
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {selected}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span className="dropdown-item" onClick={() => { setSelected("Show all"); props.handleOnClick!("All") }}>Show all</span>
                {props.category.map((c, i) => {
                    return (
                        <span className="dropdown-item" onClick={() => { setSelected(c); props.handleOnClick!(c) }} key={i}>{c}</span>
                    )
                })}
            </div>
        </div>
    );
}

export default CategoryDropdown;