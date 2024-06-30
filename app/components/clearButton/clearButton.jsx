import style from './clearButton.module.css'

export function ClearButton(props) {
    return (
        <button className={style['clear-button']} onClick={props.onClick}>
            Clear History
        </button>
    )
}