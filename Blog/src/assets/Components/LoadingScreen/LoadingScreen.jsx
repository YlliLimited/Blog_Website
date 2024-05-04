import styles from "./LoadingScreen.module.css"
import { useEffect, useRef } from "react";


function LoadingScreen () {

  const loadingScreen = useRef(null);


  useEffect(() => {


    function removeLoadingScreen() {
      loadingScreen.current.style.visibility = "hidden";
    }


    if (document.readyState === 'complete') {

      removeLoadingScreen();

    } else {

      window.addEventListener('load', removeLoadingScreen);


      return () => window.removeEventListener('load', removeLoadingScreen);
    }


  }, []);



    return (
      <div className={styles.loadingScreenBackground} ref={loadingScreen}>
        <div className="loadingScreenContent">

          <img src="/Images/pusheenCoffe.gif" alt="Pusheen cat drinking coffe gif" className={styles.pusheenGif}/>
          <h3 className={styles.loadingTitle}>Loading<em className={styles.loadingDot}>.</em><em className={styles.loadingDot}>.</em><em className={styles.loadingDot}>.</em></h3>

        </div>
      </div>
    )


}   

export default LoadingScreen;