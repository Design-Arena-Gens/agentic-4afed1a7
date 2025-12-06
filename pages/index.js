import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Observation Haki Explained - Episode 1012</title>
        <meta name="description" content="Understanding the different aspects of Observation Haki in One Piece" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Observation Haki: <span className={styles.highlight}>Different Skills, Different Masters</span>
        </h1>

        <div className={styles.intro}>
          <p className={styles.question}>
            "Why did Luffy say his Observation Haki isn't strong enough to sense Sanji in Episode 1012?"
          </p>
        </div>

        <section className={styles.answer}>
          <h2>The Short Answer</h2>
          <p className={styles.highlight}>
            Yes! Observation Haki has multiple distinct abilities, and mastering one doesn't mean mastering all.
          </p>
        </section>

        <section className={styles.section}>
          <h2>🔮 The Different Types of Observation Haki</h2>

          <div className={styles.hakiTypes}>
            <div className={styles.card}>
              <h3>1. Future Sight (Kenbunshoku no Haki - Advanced)</h3>
              <div className={styles.badge}>Luffy's Specialty</div>
              <ul>
                <li><strong>What it does:</strong> See several seconds into the future</li>
                <li><strong>Who has it:</strong> Luffy, Katakuri, Kaido, possibly Shanks</li>
                <li><strong>Used for:</strong> Predicting attacks and movements in combat</li>
                <li><strong>Limitation:</strong> Short-range, combat-focused, requires intense concentration</li>
              </ul>
              <p className={styles.note}>
                Luffy mastered this after his fight with Katakuri, but it's specifically for predicting immediate future actions, not locating distant people.
              </p>
            </div>

            <div className={styles.card}>
              <h3>2. Presence Sensing & Location Tracking</h3>
              <div className={styles.badge}>Jimbei's Specialty</div>
              <ul>
                <li><strong>What it does:</strong> Detect and pinpoint individuals across vast distances</li>
                <li><strong>Who excels:</strong> Jimbei, Fujitora, Koby, Usopp (specialized)</li>
                <li><strong>Used for:</strong> Finding allies, tracking enemies, sensing ambushes</li>
                <li><strong>Strength:</strong> Long-range, works even through walls and across islands</li>
              </ul>
              <p className={styles.note}>
                This is the skill Luffy lacks. Jimbei can sense where everyone is on Onigashima, while Luffy cannot.
              </p>
            </div>

            <div className={styles.card}>
              <h3>3. Emotion Reading</h3>
              <div className={styles.badge}>Versatile Skill</div>
              <ul>
                <li><strong>What it does:</strong> Sense feelings, intent, and emotional state</li>
                <li><strong>Who excels:</strong> Luffy (very strong), Koby, Otohime</li>
                <li><strong>Used for:</strong> Determining friend from foe, sensing hostility</li>
                <li><strong>Unique trait:</strong> Luffy's specialty since childhood</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>4. Strength/Aura Sensing</h3>
              <div className={styles.badge}>Combat Assessment</div>
              <ul>
                <li><strong>What it does:</strong> Gauge opponent's power level and danger</li>
                <li><strong>Who uses it:</strong> Most Observation Haki users</li>
                <li><strong>Used for:</strong> Threat assessment, identifying strong fighters</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>📊 Why Luffy Needs Jimbei</h2>

          <div className={styles.comparison}>
            <div className={styles.comparisonCard}>
              <h3>Luffy's Observation Haki</h3>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statName}>Future Sight</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '95%'}}></div>
                  </div>
                  <span className={styles.statValue}>95%</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statName}>Emotion Reading</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '90%'}}></div>
                  </div>
                  <span className={styles.statValue}>90%</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statName}>Combat Sensing</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '85%'}}></div>
                  </div>
                  <span className={styles.statValue}>85%</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statName}>Long-Range Detection</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '30%', backgroundColor: '#e74c3c'}}></div>
                  </div>
                  <span className={styles.statValue}>30%</span>
                </div>
              </div>
            </div>

            <div className={styles.comparisonCard}>
              <h3>Jimbei's Observation Haki</h3>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statName}>Future Sight</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '0%', backgroundColor: '#95a5a6'}}></div>
                  </div>
                  <span className={styles.statValue}>0%</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statName}>Emotion Reading</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '70%'}}></div>
                  </div>
                  <span className={styles.statValue}>70%</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statName}>Combat Sensing</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '80%'}}></div>
                  </div>
                  <span className={styles.statValue}>80%</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statName}>Long-Range Detection</span>
                  <div className={styles.statBar}>
                    <div className={styles.statFill} style={{width: '95%'}}></div>
                  </div>
                  <span className={styles.statValue}>95%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>🎯 Real World Examples</h2>

          <div className={styles.examples}>
            <div className={styles.example}>
              <h3>Skypiea - Enel</h3>
              <p>Enel combined his Observation Haki with the Goro Goro no Mi to sense everyone across the entire island - extremely long range.</p>
            </div>

            <div className={styles.example}>
              <h3>Dressrosa - Fujitora</h3>
              <p>Despite being blind, Fujitora can sense people's locations perfectly across vast distances.</p>
            </div>

            <div className={styles.example}>
              <h3>Whole Cake Island - Katakuri</h3>
              <p>Katakuri's future sight lets him see what you'll do next in a fight, but it's not shown to have exceptional range for finding people.</p>
            </div>

            <div className={styles.example}>
              <h3>Marineford - Koby</h3>
              <p>Koby awakened Observation Haki and was overwhelmed by sensing everyone's voices and emotions across the battlefield.</p>
            </div>

            <div className={styles.example}>
              <h3>Wano - Episode 1012</h3>
              <p>During the raid on Onigashima, Luffy can't pinpoint Sanji's exact location in the massive castle, so he relies on Jimbei who can sense everyone's positions.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>💡 The Key Insight</h2>

          <div className={styles.insight}>
            <p>
              Think of Observation Haki like a radar system with different modes:
            </p>
            <ul>
              <li><strong>Future Sight</strong> = High-resolution zoom lens (sees detail, limited range)</li>
              <li><strong>Presence Sensing</strong> = Wide-angle surveillance camera (sees everything, vast range)</li>
              <li><strong>Emotion Reading</strong> = Thermal imaging (detects intent and feelings)</li>
            </ul>
            <p className={styles.highlight}>
              Luffy has the best "zoom lens" after his training with Katakuri, but his "wide-angle camera" is still underdeveloped. That's why he needs Jimbei's help to navigate large areas and find specific people.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>🌟 Other Notable Users</h2>

          <div className={styles.users}>
            <div className={styles.userCard}>
              <h3>Usopp</h3>
              <p><strong>Specialty:</strong> Ultra long-range targeting</p>
              <p>Can sense and hit targets from several kilometers away with perfect accuracy.</p>
            </div>

            <div className={styles.userCard}>
              <h3>Sanji</h3>
              <p><strong>Specialty:</strong> Detecting women specifically</p>
              <p>Can sense female presences even when invisible (played for comedy).</p>
            </div>

            <div className={styles.userCard}>
              <h3>Rayleigh</h3>
              <p><strong>Specialty:</strong> Complete mastery</p>
              <p>Can sense everything on an island, likely has all forms mastered.</p>
            </div>

            <div className={styles.userCard}>
              <h3>Coby</h3>
              <p><strong>Specialty:</strong> Voice/emotion sensing</p>
              <p>Similar to Luffy but with potentially wider range for detecting feelings.</p>
            </div>
          </div>
        </section>

        <section className={styles.conclusion}>
          <h2>Conclusion</h2>
          <p>
            Your intuition was correct! Observation Haki encompasses multiple distinct abilities. Luffy's future sight is an advanced, specialized form that excels in combat prediction but doesn't automatically grant superior range detection. Jimbei's strength lies in tracking and locating people across large areas - a completely different application of the same Haki type.
          </p>
          <p className={styles.finalNote}>
            It's similar to how someone might have perfect 20/20 vision for seeing things up close but lack peripheral vision - different aspects of the same sense.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>One Piece © Eiichiro Oda / Shueisha, Toei Animation</p>
      </footer>
    </div>
  )
}
