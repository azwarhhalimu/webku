
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [ukuran, setUkuran] = useState(100)
  return (
    <>
      <Link href="/biodata.sayangku ">BIodata</Link>
      <br />
      Nama  :Budi
      <br />
      <b>Universitas</b> <i> Iksanuddin</i>
      <br />
      <img width={ukuran} src="/gambar.png" />
      <br />
      {ukuran}
      <br />
      <button onClick={() => {
        setUkuran(ukuran + 1)
      }}>Tambah Ukuran</button>

      <button onClick={() => {
        setUkuran(ukuran - 10)
      }}>Kurangi Ukuran</button>
    </>
  );
}
