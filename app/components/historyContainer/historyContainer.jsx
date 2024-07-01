import style from './historyContainer.module.css';

export function HistoryContainer({ history }) {
    const formatResult = (result) => {
      console.log(result);
        if (result === Infinity) {
          return 'Деление на 0';
        } else if (result === "Закрыты не все скобки") {
          return result;
        } else if (isNaN(result)) {
          return 'Где-то ошибка';
        } else if (result === undefined) {
          return 'Результат не определен';
        } else {
          return +result;
        }
        
      };
  return (
    <div className={style['container']}>
        <div className={style['item-container']}>
          <div className={style['expression']}>
            Expression
          </div>
          <div className={style['result']}>
            Result
          </div>
        </div>
      {history.map((item, index) => (
        <div key={index} className={style['item-container']}>
          <div className={style['expression']}>
            {item.exp}
          </div>
          <div className={style['result']}>
            { typeof formatResult(item.res) === 'number' ? formatResult(item.res).toFixed(2) : formatResult(item.res) }
          </div>
        </div>
      ))}
    </div>
  );
}