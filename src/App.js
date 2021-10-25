import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { boxClick, restartGame } from './features/appSlice'

const GameBoxItem = ({ data }) => {
  const { dataClick, amountClick } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (amountClick === 0) {
      setClicked(false)
    }
  }, [amountClick])

  const clickFunction = (data) => {
    if (amountClick < 2 && dataClick !== 1) {
      setClicked(true);
      dispatch(boxClick(data))
    }
  }

  return (
    <div className="item" onClick={() => !clicked && clickFunction(data.id)} >
      <div className="cover">

        {!clicked &&
          <div className="texture">
            <span>Dokunun</span>
          </div>
        }

        <img src={data.cover} alt={data.title} />
      </div>
    </div>
  )
}

const App = () => {

  const { data, amountClick, dataClick } = useSelector((state) => state.app)
  const dispatch = useDispatch()


  return (
    <div className='app'>

      <div className="header">
        <h1>🐱 Kedi Bulmaca 🐱</h1>
        <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. <br /> İlk tercihte 'Kedi' kartını bulamazsan 2. seçim hakkı tanımlanacaktır.</p>
      </div>


      <div className="gameBox">
        {data.map((data) =>
          <GameBoxItem key={data.id} data={data} />
        )}
      </div>

      <div className="resBox">

        {(dataClick === 1) ?
          <>
            <h4>Tebrikler, kazandın! 🥳</h4>
            <p>Yeni bir oyun oynamak ister misin?</p>
            <button onClick={() => dispatch(restartGame())}>Tekrar Oyna</button>
          </>
          :
          null
        }

        {(amountClick >= 2 && dataClick !== 1) ?
          <>
            <>
              <h4>Kediyi bulamadın! 🙄</h4>
              <p>Yeni bir oyun oynamak ister misin?</p>
              <button onClick={() => dispatch(restartGame())}>Tekrar Oyna</button>
            </>
          </>
          :
          null
        }

      </div>
    </div >
  )
}

export default App
