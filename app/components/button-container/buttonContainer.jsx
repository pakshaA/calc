import style from './buttonContainer.module.css'
import { Button } from '../button/button'

export function ButtonContainer(props) {
    const labels = [
        'CE', 'C', '(', ')',
        '7', '8', '9', '/',
        '4', '5', '6', '*', 
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ]

    return (
        <div className={style['buttons-wrapper']}>
            {labels.map(label => (
                <Button label={label} key={label} onClick={props.onClick}/>
            ))}
        </div>
    )
}