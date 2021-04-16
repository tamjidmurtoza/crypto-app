import {useState} from 'react'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import CoinList from '../components/SearchBar/CoinList'

export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('')
  const allCoins = filteredCoins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  const handelSearch = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type='text' placeholder='Search by coin name...' onChange={handelSearch}/>
        <CoinList filteredCoins={allCoins} />
        {!allCoins.length && `There is no "${search}" coin`}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')

  const filteredCoins = await response.json()
  return {
    props: {
      filteredCoins
    }
  }
}