import styles from "./LoadingScreen.module.css"


function LoadingScreen () {

    return (
        <div className={styles.loadingScreenBackground}>
          <div className="loadingScreenContent">

            <img src="/Images/pusheenCoffe.gif" alt="Pusheen drinking coffe gif" className={styles.pusheenGif}/>
            <h3 className={styles.loadingTitle}>Loading<em className={styles.loadingDot}>.</em><em className={styles.loadingDot}>.</em><em className={styles.loadingDot}>.</em></h3>

          </div>
        </div>
    )

}

export default LoadingScreen;