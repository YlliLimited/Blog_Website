import styles from "./LoadingScreen.module.css"


function LoadingScreen () {


    return (
      <div className={styles.loadingScreenBackground} ref={loadingScreen}>
        <div className="loadingScreenContent">


          <h3 className={styles.loadingTitle}>Loading<em className={styles.loadingDot}>.</em><em className={styles.loadingDot}>.</em><em className={styles.loadingDot}>.</em></h3>

        </div>
      </div>
    )

}   

export default LoadingScreen;