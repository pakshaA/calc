export function Switcher(props) {
    return (
        <select onChange={props.onChange}>
            {props.valuta.map((valuta) => (
                <option value={valuta} key={valuta}>{valuta}</option>
            ))}
        </select>
    )
}