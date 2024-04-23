import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-950 cursor-pointer">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 data-aos='fade-down' className="text-3xl mb-3"> Download our fitness app </h3>
          <p data-aos='fade-left'> Stay fit. All day, every day, for long life. </p>
          <div className="flex justify-center my-10">
            
            <div data-aos='fade-up' className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
              <div onClick={()=>navigate('./Signup')} className="text-left ml-3">
                <p className='text-xs text-gray-200'>Download on </p>
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>

            <div data-aos='fade-up' className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
              <div onClick={()=>navigate('./Signup')} className="text-left ml-3">
                <p className='text-xs text-gray-200'>Download on </p>
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Vitality Fitness, 2024. </p>
          <div className="order-1 md:order-2">
            <span className="px-2">Article</span>
            <span className="px-2 border-l">Get Started</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer