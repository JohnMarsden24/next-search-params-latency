import styles from './page.module.css';
import { Suspense } from 'react';
import ExampleClientComponent from './example-client-component';

export const dynamic = 'force-dynamic';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(2000);

  return (
    <div className={styles.page}>
      <Suspense>
        <ExampleClientComponent />
      </Suspense>
    </div>
  );
}
