import styles from "./ThreeLines.module.css";

export default function ThreeLines() {
  return(
    <>
      <div className={styles.threeLinesParent}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
      </div>
    </>
  )
}