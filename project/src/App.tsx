import React, { useState } from 'react';
import { Wand2, Download, RefreshCw, ImageIcon } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogo, setGeneratedLogo] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation with a placeholder image
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedLogo(`https://source.unsplash.com/random/400x400/?${encodeURIComponent(prompt)}&logo`);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Wand2 className="w-8 h-8" />
              Logo Diffusion
            </h1>
            <p className="text-gray-400">Generate unique logos using AI technology</p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Describe your logo</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., modern tech company logo with abstract shapes"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      Generate
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-700 rounded-xl p-4 flex items-center justify-center min-h-[400px]">
              {generatedLogo ? (
                <div className="relative group">
                  <img
                    src={generatedLogo}
                    alt="Generated logo"
                    className="rounded-lg max-w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <button
                      onClick={() => window.open(generatedLogo, '_blank')}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500 flex flex-col items-center">
                  <ImageIcon className="w-12 h-12 mb-2" />
                  <p>Your generated logo will appear here</p>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            Note: This is a demo using placeholder images. In a production environment, 
            this would connect to an actual AI diffusion model.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;