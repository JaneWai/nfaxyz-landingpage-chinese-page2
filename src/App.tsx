import React from 'react'
import { Download, ChevronDown } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:p-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-2xl px-4 py-2 rounded-lg transform -skew-x-12">
            NFA
          </div>
        </div>

        {/* Center Badge */}
        <div className="hidden md:flex items-center bg-yellow-600/20 border border-yellow-600/30 rounded-full px-6 py-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
          <span className="text-yellow-200 text-sm font-medium">自豪地构建于 BNB 链上</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download size={16} />
            <span className="hidden sm:inline">白皮书</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download size={16} />
            <span className="hidden sm:inline">演示文稿</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-12 lg:py-20">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl mb-12 lg:mb-0">
          {/* Top Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
            <span className="text-gray-300 text-sm uppercase tracking-wider">不仅仅是代币，更是个性化智能体</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-bold leading-none mb-8">
            {/* Chinese Text - Larger */}
            <div className="text-7xl lg:text-9xl text-white mb-4">
              非投资建议
            </div>
            
            {/* English Text - Smaller */}
            <div className="text-5xl lg:text-7xl">
              <span className="text-orange-500">NOT</span><br />
              <span className="text-white">FINANCIAL</span><br />
              <span className="text-orange-500">ADVICE</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8 max-w-md">新代币标准 - BEP007</p>

          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-8 py-4 rounded-full transition-colors">
            加入等候名单
          </button>
        </div>

        {/* Right Content - Character */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Character Image */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Character Face */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-black rounded-full relative">
                {/* Eyes */}
                <div className="absolute top-1/3 left-1/4 w-8 h-16 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-16 bg-cyan-400 rounded-full"></div>
                
                {/* Hood/Hat outline */}
                <div className="absolute -top-8 -left-8 -right-8 h-24 bg-gray-700 rounded-t-full"></div>
              </div>
            </div>

            {/* Feature Badge */}
            <div className="absolute top-4 right-4 bg-gray-800/90 border border-gray-600 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white text-sm font-medium">自带梗点，社区原生</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Centered Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 text-gray-400">
          <ChevronDown size={20} />
          <span className="text-sm">向下滚动查看更多</span>
          <ChevronDown size={20} />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-[12rem] lg:text-[16rem] font-bold text-gray-900/10 whitespace-nowrap transform translate-y-1/2">
          COMMUNITY NATIVE MEME READY
        </div>
      </div>
    </div>
  )
}

export default App
