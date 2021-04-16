import styles from './Search.module.css'
function SearchBar({...rest}) {
  return (
    <div className={styles.coin_search_wrap}>
      <div className={styles.coin_search_container}>
        <div className={styles.coin_search}>
          <input className={styles.coin_input} {...rest}/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
