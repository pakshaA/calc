import style from './input.module.css'

export function Input(props) {
    return (
        <input type="text" className={style['exp-input']} value={props.val} readOnly></input>
    )
}