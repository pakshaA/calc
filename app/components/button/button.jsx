import style from './button.module.css'

export function Button(props) {
    return (
        <button className={style['button']} onClick={props.onClick} value={props.label}>
            {props.label}
        </button>
    )
}