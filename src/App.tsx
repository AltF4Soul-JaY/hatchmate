import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Hatchmate</h1>
        <p>Your ultimate Discord bot for managing servers and engaging users.</p>
      </header>
      <main>
        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>Customizable quiz games</li>
            <li>Moderation tools (kick, ban, announce)</li>
            <li>Interactive slash commands</li>
            <li>Server statistics and member tracking</li>
          </ul>
        </section>
        <section id="verification">
          <h2>Verification Requirements</h2>
          <p>To scale your application, ensure the following:</p>
          <ul>
            <li>Team ownership and identity verification</li>
            <li>Links to Terms of Service and Privacy Policy</li>
            <li>Install link for easy bot addition</li>
          </ul>
        </section>
        <section id="links">
          <h2>Important Links</h2>
          <ul>
            <li><a href="/terms.html">Terms of Service</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="https://discord.com/oauth2/authorize?client_id=1391361345403883600">Add Hatchmate to your server</a></li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Idea-Hatch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
