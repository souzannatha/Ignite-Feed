import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Nathã Souza"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur distinctio cum sint illum. Iusto corrupti blanditiis veritatis assumenda quam, architecto distinctio rerum aliquid nisi asperiores doloribus animi officiis esse."
          />
          <Post
            author="Nathã Souza"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur distinctio cum sint illum. Iusto corrupti blanditiis veritatis assumenda quam, architecto distinctio rerum aliquid nisi asperiores doloribus animi officiis esse."
          />
        </main>
      </div>
    </div>
  );
}
