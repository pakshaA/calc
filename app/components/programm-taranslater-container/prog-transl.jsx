'use client'

import style from './prog-transl.module.css'
import { RadioGroup } from '../radioGroup/radioGroup'

import { useState, useEffect } from 'react'

import { translate } from '@/app/math/translator'

export const ProgTrans = () => {
    const systemsL = ["BIN", "OCT", "DEC", "HEX"]
    const systemsR = ["BIN ", "OCT ", "DEC ", "HEX "]
    const [valueFrom, setValueFrom] = useState('')
    const [result, setResult] = useState('')
    const [leftSystem, setLeftSystem] = useState('')
    const [rightSystem, setRightSystem] = useState('')


    const handlerChange = (event) => {
        setValueFrom(event.target.value)
    }

    const handleChangeRadioFrom = (event) => {
        setLeftSystem(event.target.value)
    }

    const handleChangeRadioTo = (event) => {
        setRightSystem(event.target.value)
    }


    const handlerClickClear = () => {
        setValueFrom('')
        setResult(0)
    }

    const handleClickConvert =() => {
        try {
            var _ = translate(leftSystem, rightSystem, valueFrom)
            setResult(_)
        } catch (e) {
            alert('err')
            setResult("Error")
        }
    }

    useEffect(() => {
        if (leftSystem && rightSystem && valueFrom) {
            handleClickConvert()
        }
    }, [leftSystem, rightSystem, valueFrom])

    
    return (
        <div className={style['prog-trans-wrapper']}>
            <div className={style['container']}>
                <RadioGroup onChange={handleChangeRadioFrom} systems={systemsL} group='left'/>
                <input type="text" onChange={handlerChange} value={valueFrom} className={style['input']}/>
                <button onClick={handlerClickClear}>Clear</button>
            </div>
            <div className={style['container']}>
                <RadioGroup onChange={handleChangeRadioTo} systems={systemsR} group='right'/>
                <input type="text" value={result} readOnly className={style['input']}/>
                <button onClick={handleClickConvert}>Convert</button>
            </div>
        </div>
    )
}