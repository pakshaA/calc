'use client'

import style from './prog-transl.module.css'
import { RadioGroup } from '../radioGroup/radioGroup'

import { useState } from 'react'

export const ProgTrans = () => {
    const systems = ["BIN", "OCT", "DEC", "HEX"]
    const [valueFrom, setValueFrom] = useState('')
    const [result, setResult] = useState('')

    const handlerChange = (event) => {
        setValueFrom(event.target.value)
    }

    const handlerClickClear = () => {
        setValueFrom('')
        setResult('')
    }

    return (
        <div className={style['prog-trans-wrapper']}>
            <div className={style['container']}>
                <RadioGroup systems={systems} group='left'/>
                <input type="text" onChange={handlerChange} value={valueFrom}/>
                <button onClick={handlerClickClear}>Clear</button>
            </div>
            <div className={style['container']}>
                <RadioGroup systems={systems} group='right'/>
                <input type="text" value={result} readOnly/>
                <button>Convert</button>
            </div>
        </div>
    )
}