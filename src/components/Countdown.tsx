import { useContext, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export default function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, receiveTime } = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    const [valueCheck, setValueCheck] = useState(25);

    const handleOnChange25 = () => {
        setValueCheck(25);
        receiveTime(25);
    }

    const handleOnChange50 = () => {
        setValueCheck(50);
        receiveTime(50);
    }

    return (
        <>

            <div>
                <input type="radio" value="25" className={styles.inputLeft} checked={valueCheck === 25} onClick={handleOnChange25} /> 25 minutos
                <input type="radio" value="50" className={styles.inputRight} checked={valueCheck === 50} onClick={handleOnChange50} /> 50 minutos
            </div>

            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                            </button>) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}



        </>

    );
}