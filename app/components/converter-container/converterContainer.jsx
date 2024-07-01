'use client'

import { useState } from "react";

import style from './converterContainer.module.css'
import { Switcher } from "../converter-switcher/converterSwitcher";

import { getConverterValues } from "@/app/api/api";

export function SwitchersContainer() {
    const [optionLeft, setOptionLeft] = useState('Values');
    const [optionRight, setOptionRight] = useState('Values');
    const [amount, setAmount] = useState('');
    const [valueLeft, setValueLeft] = useState('RUB')
    const [valueRight, setValueRight] = useState('RUB')
    const [result, setResult] = useState(0)


    const options = ['Values', 'Crypto'];
    const values = ["RUB", "EUR", "USD"];
    const crypto = ["BTC", "ETH", "DOGE"];


    const handleChangeLeft = (event) => {
        setOptionLeft(event.target.value);
    };

    const handleChangeRight = (event) => {
        setOptionRight(event.target.value);
    };

    const handleChangeBottomLeft = (event) => {
        setValueLeft(event.target.value);
    }

    const handleChangeBottomRight = (event) => {
        setValueRight(event.target.value);
    }

    const handleChangeAmount = (event) => {
        if (!isNaN(+event.target.value)) {
            setAmount(+event.target.value);
        } else {
            event.target.value = event.target.value.substring(0, event.target.value.length - 1);
        }
    }

    const handleClickConvert = async () => {
        if (amount !== 0) {
            var res = await getConverterValues(valueLeft, valueRight)
            res *= amount
            setResult(res)
        } else {
            alert("Количество должно быть больше 0")
        }
    }

    const handleClickClear = () => {
        setAmount('');
        setResult(0);
    }

    return (
        <div className="main">
            <div className={style['top-switchers']}>
                <div className={style['switcher-container']}>  
                    <Switcher valuta={options} onChange={handleChangeLeft}/>
                </div>
                <div className={style['switcher-container']}>
                    <Switcher valuta={options} onChange={handleChangeRight}/>
                </div>
            </div>
            <div className={style['low-switchers']}>
                <div className={style['switcher-container']}>
                    <div className={style['text-switch-container']}>
                        From <Switcher valuta={optionLeft === 'Values' ? values : crypto} onChange={handleChangeBottomLeft}/>

                    </div>
                    <input onChange={handleChangeAmount} value={amount} className={style['amount-input']} placeholder="Введите количество"></input>
                </div>
                <div className={style['switcher-container']}>
                    <div className={style['text-switch-container']}>
                        To <Switcher valuta={optionRight === 'Values' ? values : crypto} onChange={handleChangeBottomRight}/>
                    </div>
                    <input className={style['amount-output']} value={result} readOnly></input>
                </div>
            </div>
            <div className={style["buttons-container"]}>
                <div className={style['button-container']}>
                    <button className={style['clear-button', 'btn']} onClick={handleClickClear}>Clear</button>
                </div>

                <div className={style['button-container']}>
                    <button className={style['convert-button', 'btn']} onClick={handleClickConvert}>Convert</button>
                </div>
            </div>
        </div>

    )
}