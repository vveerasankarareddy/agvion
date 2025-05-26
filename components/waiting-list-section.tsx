import { useState, useRef } from "react"
import { CheckCircle, ArrowRight, Sparkles, Bot, Zap } from "lucide-react"

const WaitingListSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = () => {
    setError("")

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="waiting-list" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.1),transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(20,184,166,0.05)_180deg,transparent_360deg)]"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Card */}
          <div className={`relative transition-all duration-1000 transform ${
            isSubmitted 
              ? 'scale-105 shadow-2xl shadow-teal-500/20' 
              : 'hover:scale-[1.02] shadow-xl shadow-black/20'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
              
              {/* Success Overlay Animation */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-green-500/10 animate-pulse"></div>
              )}
              
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-700 ${
                    isSubmitted 
                      ? 'bg-gradient-to-br from-green-500/20 to-teal-500/20 animate-bounce' 
                      : 'bg-gradient-to-br from-teal-500/20 to-blue-500/20 hover:animate-pulse'
                  }`}>
                    <div className="relative">
                      {isSubmitted ? (
                        <CheckCircle className="w-12 h-12 text-green-400 animate-pulse" strokeWidth={1.5} />
                      ) : (
                        <Bot className="w-12 h-12 text-teal-400" strokeWidth={1.5} />
                      )}
                      <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {isSubmitted ? "Welcome to the Future!" : "Join the AI Revolution"}
                  </h2>
                  
                  <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                    {isSubmitted 
                      ? "You're now part of an exclusive community of AI pioneers. Get ready for the future!"
                      : "Be the first to experience the future of AI-powered automation. Get early access and exclusive updates on our revolutionary platform."
                    }
                  </p>
                </div>

                {/* Form Section */}
                {!isSubmitted && (
                  <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/50 backdrop-blur-sm">
                        <div className="flex-1">
                          <input
                            type="email"
                            placeholder="Enter your email for AI early access"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-14 px-6 bg-gray-900/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                            disabled={isLoading}
                          />
                          {error && <p className="text-red-400 text-sm mt-2 ml-2">{error}</p>}
                        </div>
                        
                        <button
                          onClick={handleSubmit}
                          className={`h-14 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                            isLoading
                              ? 'bg-gray-600 cursor-not-allowed'
                              : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 shadow-lg hover:shadow-teal-500/25'
                          }`}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <span className="flex items-center">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                              Processing
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Sparkles className="mr-2 h-5 w-5" />
                              Join Waitlist
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Success Message */}
                {isSubmitted && (
                  <div className="max-w-2xl mx-auto mb-12">
                    <div className="p-6 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-green-500/10 border border-green-500/30 rounded-2xl text-center backdrop-blur-sm">
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative">
                          <CheckCircle className="text-green-400 h-8 w-8 animate-pulse" strokeWidth={1.5} />
                          <div className="absolute -inset-1 bg-green-400/20 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-green-400 mb-2">Successfully Joined!</h3>
                      <p className="text-green-300">
                        Welcome to the AI revolution! You'll be the first to know about our launch.
                      </p>
                    </div>
                  </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Zap className="w-8 h-8" />,
                      title: "Early AI Access",
                      desc: "Be among the first to try A.G.V.I.O.N's AI platform",
                    },
                    {
                      icon: <Sparkles className="w-8 h-8" />,
                      title: "Exclusive AI Updates",
                      desc: "Get insider news on AI development and features",
                    },
                    {
                      icon: <Bot className="w-8 h-8" />,
                      title: "Special AI Offers",
                      desc: "Receive launch discounts and AI training resources",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`group relative transition-all duration-500 transform hover:-translate-y-2 ${
                        isSubmitted ? 'animate-pulse' : ''
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                      <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm group-hover:border-teal-500/50 transition-all duration-300">
                        <div className="text-teal-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="relative">
                            {item.icon}
                            <div className="absolute -inset-2 bg-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
        </div>
      </div>
    </section>
  )
}

export default WaitingListSection