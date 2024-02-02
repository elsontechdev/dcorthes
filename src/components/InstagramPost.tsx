import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
interface InstagramPostProp{
  img:string;
  url?:string
}

function InstagramPost({img}:InstagramPostProp) {
  return (
    <Link target='_blank' href="https://www.instagram.com/p/ClbeTBHPec2/" className=" bg-[#fff]  card-post flex flex-col mx-w-sm md:max-w-sm border justify-center align-center items-center ">
        {/* TOP */}
      <div className="top flex  w-full justify-between align-center items-start p-4">
        {/* info */}
        <div className="top-bar  flex ">
            {/* ICON AND INFO */}
            <div className="left flex">
                <Image className='w-[70px]' width={100} height={100} src="/assets/images/instagram-post-avatar.png" alt="post avatar" />
                <div className="info">
                    <p className="font-semibold">dcorthes.carnesnobres</p>
                    <span className="">Teresina, Piauí</span>
                </div>
            </div>
        </div>
    {/* MORE ICON */}
      <div className="more-icon  hover:bg-[#d3d3d32d] p-1 rounded-full w-[50px] h-[50px] flex justify-center items-center">
        <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.73324 0.427705C2.37389 0.427705 2.89324 0.989077 2.89324 1.68156C2.89324 2.37405 2.37389 2.93542 1.73324 2.93542C1.09259 2.93542 0.573242 2.37405 0.573242 1.68156C0.573242 0.989077 1.09259 0.427705 1.73324 0.427705ZM5.98658 0.42749C6.62723 0.42749 7.14657 0.988862 7.14657 1.68135C7.14657 2.37384 6.62723 2.93521 5.98658 2.93521C5.34592 2.93521 4.82658 2.37384 4.82658 1.68135C4.82658 0.988862 5.34592 0.42749 5.98658 0.42749ZM10.2399 0.42749C10.8806 0.42749 11.3999 0.988862 11.3999 1.68135C11.3999 2.37384 10.8806 2.93521 10.2399 2.93521C9.59926 2.93521 9.07991 2.37384 9.07991 1.68135C9.07991 0.988862 9.59926 0.42749 10.2399 0.42749Z" fill="#262626"/>
            </svg>
      </div>


      </div>
      {/* IMAGE SECTION */}
      <div className="img-box min-h-[300px] border w-full">
        <Image className='block w-full h-full' width={800} height={800} src={img} alt="post avatar" />
        
      </div>
      {/* BOTTOM BAR */}
      <div className="bottom-bar w-full p-4">
        <div className="actions w-full flex justify-between ">
            <div className=" flex gap-6 justify-center items-center ">
              <span className='like'>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0086 2.22357L9.50199 1.5836C7.46345 -0.619881 4.2125 -0.469725 2.17396 1.73376C0.135424 3.93724 0.527746 8.19729 2.56628 10.4008C3.39364 11.2951 4.63266 12.5333 6.28334 14.1155L7.67203 15.436L9.23178 16.8995C9.66123 17.3001 10.2958 17.3062 10.7318 16.914L11.9953 15.7688C14.2081 13.7475 15.8501 12.1554 16.9213 10.9925L17.1994 10.686L17.4491 10.4008C19.3476 8.18778 19.8355 3.88599 17.8444 1.73376L17.7001 1.5836C15.6528 -0.468533 12.5655 -0.568637 10.5744 1.5836L10.0086 2.22357ZM2.99423 2.62021C4.60619 0.877821 7.09997 0.796134 8.6518 2.438L9.96105 4.09197L11.4131 2.44975C12.9024 0.840356 15.276 0.863622 16.9114 2.50284L17.0397 2.63674C18.4468 4.15792 18.2074 7.67269 16.5985 9.54804L16.3568 9.82399L16.0887 10.1195C15.2006 11.0828 13.8845 12.3736 12.1492 13.981L11.2466 14.811L9.98973 15.9501L8.43246 14.489L7.31791 13.4307C5.74742 11.9304 4.53589 10.7303 3.68762 9.83532L3.38655 9.514C1.70723 7.69879 1.49719 4.23838 2.99423 2.62021Z" fill="#262626"/>
                </svg>

              </span>
              <span className='comment'>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.5465 9.1957C17.5465 4.11746 13.738 0.000732422 9.03987 0.000732422C4.34177 0.000732422 0.533203 4.11746 0.533203 9.1957C0.533203 14.2739 4.34177 18.3907 9.03987 18.3907C10.0653 18.3907 11.4739 17.9863 13.2657 17.1776L16.1632 18.3994L16.2492 18.4296C16.6237 18.5357 17.0206 18.3238 17.1647 17.9244C17.2224 17.7647 17.2332 17.5897 17.1957 17.4231L16.3878 13.8316L16.5201 13.4895C17.2044 11.6878 17.5465 10.2565 17.5465 9.1957ZM15.4364 13.041L15.1697 13.7235L15.8932 16.9394L13.251 15.8253L12.5294 16.1488C11.0077 16.8126 9.83218 17.1366 9.03988 17.1366C4.98243 17.1366 1.69321 13.5812 1.69321 9.19549C1.69321 4.80973 4.98243 1.25438 9.03988 1.25438C13.0973 1.25438 16.3865 4.80973 16.3865 9.19549C16.3865 10.0694 16.0749 11.3649 15.4364 13.041Z" fill="#262626"/>
                </svg>
              </span>
              <span className='send'>
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.5749 0.944378L9.3117 16.2026C9.05154 16.683 8.38437 16.586 8.25095 16.0483L6.12401 7.47559L6.10648 7.4488C6.09068 7.41923 6.07736 7.38883 6.06646 7.35791L0.251119 1.07097C-0.114261 0.676024 0.144516 0.000732422 0.661241 0.000732422H17.0744C17.5224 0.000732422 17.8013 0.526437 17.5749 0.944378ZM15.4867 2.31763L7.31137 7.41958L9.01176 14.2741L15.4867 2.31763ZM2.06147 1.25434L14.8719 1.25356L6.75012 6.32208L2.06147 1.25434Z" fill="#262626"/>
                </svg>

              </span>
            </div>
            <div className="">
                <span className='save'>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.0517578 0.732162V18.8315C0.0517578 19.0512 0.131747 19.262 0.274427 19.4184C0.574299 19.7472 1.06393 19.7509 1.36806 19.4268L7.979 12.3808L14.5899 19.4268C14.7346 19.581 14.9297 19.6674 15.1329 19.6674C15.56 19.6674 15.9062 19.2932 15.9062 18.8315V0.732162C15.9062 0.501333 15.7331 0.314209 15.5196 0.314209H0.438424C0.224874 0.314209 0.0517578 0.501333 0.0517578 0.732162ZM1.21174 17.8324V1.56799H14.7462V17.8324L8.52195 11.1985C8.22085 10.8776 7.73712 10.8776 7.43601 11.1985L1.21174 17.8324Z" fill="#262626"/>
                </svg>

                </span>
            </div>
        </div>
        {/* USER INFO */}
        <div className="user-info py-2 mt-3">
         <div className="top flex gap-4">
            <Image className='block w-[30px] h-[30px]' width={800} height={800} src="/assets/images/user-info-avatar.png" alt="post avatar" />
            <div>
                <p>Liked by <span className='font-semibold'>craig_love</span>  and <span className='font-semibold'>44,686</span> </p>
            </div>
         </div>
         <div className="like-info my-2">
            <p> <span className="font-semibold">Foodieland.</span>  The vegetables dishes need to have certain vitamin for those people</p>
         </div>
         <div className="data">
            <span className='text-[#00000066]'> September 19</span>
         </div>
        </div>

      </div>

    </Link>
  )
}

export default InstagramPost