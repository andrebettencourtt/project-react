import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="André Bettencourt"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque."
          />
          <Post
            author="André Bettencourt"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
