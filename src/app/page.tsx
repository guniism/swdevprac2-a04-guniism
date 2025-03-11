import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className={styles.main} >
      <Banner />
      <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        <Card />
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </main>
  );
}
