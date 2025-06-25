import React from 'react'
import { Download, ChevronDown } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.03) 50px,
            rgba(255,255,255,0.03) 51px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.03) 50px,
            rgba(255,255,255,0.03) 51px
          )`
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-2xl px-4 py-2 rounded-lg transform -skew-x-12">
            NFA
          </div>
        </div>

        {/* Center badge */}
        <div className="flex items-center bg-gray-800 rounded-full px-6 py-2 border border-gray-700">
          <div className="w-6 h-6 bg-yellow-500 rounded-full mr-3 flex items-center justify-center">
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium">自豪地构建于 BNB 链上</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Download size={16} />
            <span>白皮书</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Download size={16} />
            <span>演示文稿</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-6">
              <div className="w-3 h-3 bg-orange-500 rounded-sm mr-3"></div>
              <span className="text-gray-300 text-sm">不仅仅是代币，更是个性化智能体</span>
            </div>
          </div>

          <h1 className="text-7xl font-bold leading-tight mb-8">
            <span className="text-orange-500">不是</span><br />
            <span className="text-white">金融</span><br />
            <span className="text-orange-500">建议</span>
          </h1>

          <p className="text-gray-400 text-lg mb-12">
            新代币标准 - BEP007
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-12 py-4 rounded-full transition-colors">
            加入等候名单
          </button>
        </div>

        {/* Right content - Character */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            {/* Character silhouette */}
            <div className="w-96 h-96 bg-gradient-to-b from-gray-800 to-black rounded-full relative overflow-hidden">
              {/* Glowing eyes */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex space-x-8">
                <div className="w-8 h-16 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                <div className="w-8 h-16 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              </div>
              
              {/* Hood/head shape */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full"></div>
            </div>

            {/* Side text */}
            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 ml-12">
              <div className="text-right">
                <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4">
                  <div className="w-3 h-3 bg-white rounded-sm mr-3"></div>
                  <span className="text-gray-300 text-sm">模因就绪且</span>
                </div>
                <div className="text-gray-300 text-sm">社区原生</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
        <div className="flex items-center space-x-2 mb-2">
          <ChevronDown size={16} />
          <span className="text-sm">向下滚动查看更多</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
      
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-9xl font-bold text-gray-900/10 whitespace-nowrap transform rotate-0">
          不是金融建议 不是金融建议 不是金融建议
        </div>
      </div>
    </div>
  )
}

export default App
