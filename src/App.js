import './App.css';

function App() {
  return (
    <div class="quiz_box">
      <header>
        <div class="title">My Quiz Application</div>
        <div class="timer">
          <div class="time_text">Time left</div>
          <div class="time_sec">15</div>
        </div>
      </header>
      <section>
        <div class="que_text">
          <span><img src='download.png' alt='here'></img></span>
        </div>
        <div class="option_list">
          <div class="option">
            <span>Pakistan</span>
            <div class="icon tick"><i class="fas fa-check"></i>
            </div>
          </div>
          <div class="option">
            <span>India</span>
            <div class="icon cross"><i class="fas fa-times"></i>
            </div>
          </div>
          <div class="option">
            <span>Afganistan</span>
          </div>
          <div class="option">
            <span>China</span>
          </div>
        </div>
      </section>
      <footer>
        <div class="total_que">
          <span><p>2</p>of<p>5</p>Questions</span>
        </div>
        <button class="next_btn">Next Que</button>
      </footer>

      
    </div>
  );
}

export default App;
