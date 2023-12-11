import './Pomotimer.css'


export function Pomotimer() {


    return (
      <>
       
       <div id="container">
        <div id="content" className='container'>
          <div id="title" className="large">
            Pomodoro Timer
          </div>

          <div id="options">
            <div className="timer-option">
              <div>Work Length</div>
              <button className="length-setter">-</button>
              <input type="text" name="work-length" value="25" />
              <button className="length-setter">+</button>
            </div>

            <div className="timer-option">
              <div>Short Break</div>
              <button className="length-setter">-</button>
              <input type="text" name="short-break-length" value="5" />
              <button className="length-setter">+</button>
            </div>

            <div className="timer-option">
              <div>Long Break</div>
              <button className="length-setter">-</button>
              <input type="text" name="long-break-length" value="15" />
              <button className="length-setter">+</button>
            </div>
          </div>

          <div id="checks">
            <span className="check">
              <i className="fa fa-check fa-2x" aria-hidden="true"></i>
            </span>
            <span className="check">
              <i className="fa fa-check fa-2x" aria-hidden="true"></i>
            </span>
            <span className="check">
              <i className="fa fa-check fa-2x" aria-hidden="true"></i>
            </span>
            <span className="check">
              <i className="fa fa-check fa-2x" aria-hidden="true"></i>
            </span>
          </div>

          <div id="phase"></div>

          <div>
            <div id="timer-container">
              <span id="timer" className="large">
                25:00
              </span>
              <canvas id="timer-canvas" width="240" height="240"></canvas>
            </div>
          </div>

          <div id="timer-controls">
            <button className="start-timer">Start Timer</button>
            <button className="stop-timer">Stop Timer</button>
            <button className="reset-timer">Reset Timer</button>
          </div>

          <iframe
            className="music"
            width="80%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1179323467&color=%237a1ba7&auto_play=false"
          ></iframe>

          <footer>
            <p>
              By{' '}
              <a href="https://www.marcotorquato.com" target="_blank">
                Marco Torquato
              </a>
            </p>
          </footer>
        </div>
    </div>

      </>
    )
  }

