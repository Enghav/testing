import { useState } from 'react';

function Home() {
  return (
    <div >
     
     <div class="w-[1000px] h-[620px]  bg-slate-500 rounded-[20px] ">
          <div className='flex justify-between m-4 mt-2 mb-0'>
            <span className='w-[40px] h-[40px] bg-zinc-300 rounded-[30px]' ></span>
            <span className='w-[55px] h-[25px]  bg-amber-200 rounded-[5px] shadow flex justify-center items-center cursor-pointer hover:scale-110'>
            <div class="text-zinc-950 text-[13px] font-normal font-['Inika'] "> PRO</div>
              <span className=' translate-x-[2px]'><svg width="12" height="18" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M1 12.25L11.5 1L9.25 9.25H17.5L7 20.5L9.25 12.25H1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </span>
          </div>
          
     </div>
    </div>
  );
}

export default Home;
