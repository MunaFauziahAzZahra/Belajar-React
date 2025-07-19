import React from 'react'
import Title from './components/Title'
import Description from './components/Description'
import Image from './components/Image'
import Protect from '../../assets/images/protect.png';
export default function Home() {
  return (
    <>
    <Image width={100} height={100} image={Protect}/>
    
    < Title title="Karena Perlindungan adalah hak semua orang.
Deteksi cerdas dalam satu platform."/>
    < Description description="Dengan platform kami, Anda dapat menyederhanakan proses pemantauan risiko secara menyeluruh. Semua terpusat dalam satu tempat dari deteksi penipuan, kejanggalan data, hingga pemantauan aktivitas ilegal. Pantau setiap ancaman, kelola respons, dan tingkatkan efisiensi perlindungan Anda." />
 



    
    
    
    </>
  )
}
