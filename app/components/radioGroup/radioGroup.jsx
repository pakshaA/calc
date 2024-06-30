import style from './radioGroup.module.css'

export const RadioGroup = (props) => {
    return (
        <div className={style['radio-group']}>
            {
                props.systems.map(name => (
                    <div key={name}>
                        <input type="radio" id={name} value={name} name={props.group} className={style['radio-button']}></input>
                        <label htmlFor={name}>{name}</label>
                    </div>
                ))
            }
        </div>
    )
}