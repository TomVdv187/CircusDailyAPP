import React, { useState } from 'react';
import { Camera, Users, TrendingUp, Calendar, MessageSquare, Share2, Heart, Menu, ChevronRight, Play, Clock } from 'lucide-react';

export default function CircusDailyEstimation() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8 rounded-xl shadow-2xl mb-8">
          <div className="flex items-center mb-4">
            <img 
              src="https://lfs-ipx.circusdaily.com/_ipx/f_webp,sharpen_100/local/CircusDaily_H_Red_FR.svg" 
              alt="Circus Daily Logo" 
              className="h-12 mr-4 filter brightness-0 invert"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-4xl font-bold" style={{display: 'none'}}>Circus Daily</span>
            <div>
              <h1 className="text-3xl font-bold">Mobile App</h1>
              <p className="text-lg opacity-90">Development Estimation</p>
            </div>
          </div>
          <p className="text-sm opacity-75">Based on Rossel Applications Sudinfo Model</p>
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto bg-white p-2 rounded-lg shadow">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('breakdown')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'breakdown' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cost Breakdown
          </button>
          <button
            onClick={() => setActiveTab('manhours')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'manhours' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Manhours
          </button>
          <button
            onClick={() => setActiveTab('sso')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'sso' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            SSO Details
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'roadmap' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Roadmap
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Overview</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg mb-3">Market Context</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Industry Standards:</strong> Typical news mobile apps (iOS and Android) cost between 180k and 350k euros for implementation, with annual maintenance ranging from 50k to 150k euros.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    <strong>Benchmark:</strong> Similar news applications in the market require substantial investment for full-scale development.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg mb-3">Our Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Leveraging proven framework technology with Circus Daily branding, we deliver both iOS and Android versions for 50k euros - a significant cost advantage.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    <strong>Annual Maintenance:</strong> 30k euros per year including app store management, third-party updates, and platform compatibility maintenance.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg mb-3">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>85% cost reduction compared to traditional development</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Faster time to market with proven framework</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cross-platform compatibility (iOS and Android)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive sports news and content management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'breakdown' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Detailed Cost Breakdown</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
                      <th className="text-left p-4 rounded-tl-lg">Component</th>
                      <th className="text-right p-4">Cost</th>
                      <th className="text-right p-4 rounded-tr-lg">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Framework setup and Git configuration</td>
                      <td className="text-right p-4 font-bold">15,000 euros</td>
                      <td className="text-right p-4 text-sm">Rossel baseline</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Visual identity customization</td>
                      <td className="text-right p-4 font-bold">5,000 euros</td>
                      <td className="text-right p-4 text-sm">Brand integration</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Menu and screens configuration</td>
                      <td className="text-right p-4 font-bold">10,000 euros</td>
                      <td className="text-right p-4 text-sm">Navigation setup</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Third-party integrations</td>
                      <td className="text-right p-4 font-bold">10,000 euros</td>
                      <td className="text-right p-4 text-sm">CMS, ads, analytics</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Project coordination</td>
                      <td className="text-right p-4 font-bold">5,000 euros</td>
                      <td className="text-right p-4 text-sm">Management</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Quality assurance and testing</td>
                      <td className="text-right p-4 font-bold">5,000 euros</td>
                      <td className="text-right p-4 text-sm">QA testing</td>
                    </tr>
                    <tr className="bg-yellow-100">
                      <td className="p-4 font-bold text-lg">TOTAL</td>
                      <td className="text-right p-4 font-bold text-2xl text-red-600">50,000 euros</td>
                      <td className="text-right p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-red-50 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4 text-red-900">Third-Party Integrations Breakdown (10,000 euros)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-700">CMS Integration (4,000 euros)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>• WordPress/Custom CMS API setup</span>
                        <span>1,500 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Article synchronization system</span>
                        <span>1,200 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Image/media content handling</span>
                        <span>800 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Real-time content updates</span>
                        <span>500 euros</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-700">Analytics Integration (2,500 euros)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>• Google Analytics 4 setup</span>
                        <span>800 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Firebase Analytics integration</span>
                        <span>700 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Custom event tracking</span>
                        <span>600 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• User behavior analytics</span>
                        <span>400 euros</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-700">Advertising Platform (2,000 euros)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>• Google AdMob integration</span>
                        <span>900 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Banner and interstitial ads</span>
                        <span>600 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Ad performance tracking</span>
                        <span>500 euros</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-700">Additional Services (1,500 euros)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>• Crash reporting (Crashlytics)</span>
                        <span>400 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Push notification service</span>
                        <span>500 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Social sharing APIs</span>
                        <span>300 euros</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• App store optimization tools</span>
                        <span>300 euros</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Optional Features</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Social Login and Profile Management</span>
                    <span className="font-bold">20,000 euros</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Content Personalization</span>
                    <span className="font-bold">10,000 euros</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Push Notifications</span>
                    <span className="font-bold">10,000 euros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'manhours' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Manhour Analysis</h2>
            
            <div className="mb-6 bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Assumptions</h3>
              <ul className="space-y-2">
                <li>Average rate: 90 euros per hour</li>
                <li>60-70% time savings using existing framework</li>
                <li>Shared codebase for iOS and Android</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-3">Task</th>
                    <th className="text-right p-3">Hours</th>
                    <th className="text-right p-3">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-blue-50">
                    <td className="p-2 font-bold" colSpan="3">Framework Setup</td>
                  </tr>
                  <tr>
                    <td className="p-3">Project setup and CI/CD</td>
                    <td className="text-right p-3">96</td>
                    <td className="text-right p-3">8,640 euros</td>
                  </tr>
                  <tr>
                    <td className="p-3">Code adaptation</td>
                    <td className="text-right p-3">56</td>
                    <td className="text-right p-3">5,040 euros</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="p-3">Subtotal</td>
                    <td className="text-right p-3">152</td>
                    <td className="text-right p-3">13,680 euros</td>
                  </tr>
                  
                  <tr className="bg-blue-50">
                    <td className="p-2 font-bold" colSpan="3">Visual Identity</td>
                  </tr>
                  <tr>
                    <td className="p-3">Design system</td>
                    <td className="text-right p-3">56</td>
                    <td className="text-right p-3">5,040 euros</td>
                  </tr>
                  
                  <tr className="bg-blue-50">
                    <td className="p-2 font-bold" colSpan="3">Navigation</td>
                  </tr>
                  <tr>
                    <td className="p-3">Screens and content</td>
                    <td className="text-right p-3">112</td>
                    <td className="text-right p-3">10,080 euros</td>
                  </tr>
                  
                  <tr className="bg-blue-50">
                    <td className="p-2 font-bold" colSpan="3">Integrations</td>
                  </tr>
                  <tr>
                    <td className="p-3">CMS, ads, analytics</td>
                    <td className="text-right p-3">100</td>
                    <td className="text-right p-3">9,000 euros</td>
                  </tr>
                  
                  <tr className="bg-blue-50">
                    <td className="p-2 font-bold" colSpan="3">Management</td>
                  </tr>
                  <tr>
                    <td className="p-3">Project coordination</td>
                    <td className="text-right p-3">56</td>
                    <td className="text-right p-3">5,040 euros</td>
                  </tr>
                  
                  <tr className="bg-blue-50">
                    <td className="p-2 font-bold" colSpan="3">Testing</td>
                  </tr>
                  <tr>
                    <td className="p-3">QA and deployment</td>
                    <td className="text-right p-3">100</td>
                    <td className="text-right p-3">9,000 euros</td>
                  </tr>
                  
                  <tr className="bg-red-100">
                    <td className="p-4 font-bold text-lg">TOTAL</td>
                    <td className="text-right p-4 font-bold text-xl">576</td>
                    <td className="text-right p-4 font-bold text-xl">51,840 euros</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Value Justification</h3>
              <p className="text-gray-700">The 50k euro price represents significant savings compared to building from scratch (180k-350k). By leveraging the proven Rossel framework, we reduce development time by 70% while maintaining high quality and full feature parity with established news apps.</p>
            </div>
          </div>
        )}


        {activeTab === 'sso' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">SSO & Social Login - Detailed Estimation</h2>
              
              <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg mb-3">Feature Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Single Sign-On (SSO) with social providers allows users to authenticate using their existing accounts from Google, Facebook, and Apple. This reduces friction in the registration process and improves user experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Total Cost:</strong> 20,000 euros for complete implementation across iOS and Android
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Development Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Backend & Infrastructure</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Authentication Server Setup</span>
                        <span className="font-medium">7 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Database & API Development</span>
                        <span className="font-medium">5 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Security & Testing</span>
                        <span className="font-medium">4 days</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Backend Total</span>
                        <span>16 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Mobile Integration</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Google Sign-In (iOS + Android)</span>
                        <span className="font-medium">6 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facebook Login (iOS + Android)</span>
                        <span className="font-medium">5 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Apple Sign-In (iOS + Android)</span>
                        <span className="font-medium">4 days</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Mobile Total</span>
                        <span>15 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total Development Time:</span>
                    <span className="text-blue-800">31 days (250 hours)</span>
                  </div>
                  <div className="flex justify-between items-center text-lg mt-2">
                    <span>Calculated Cost (90 euro/hour):</span>
                    <span className="font-bold">22,500 euros</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg mb-3">Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Faster user registration and login (3-5 seconds vs 2-3 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduced password management burden</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Improved conversion rates (40-60% higher)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to verified user data</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enhanced security with OAuth 2.0</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-lg mb-3">Technical Considerations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>OAuth 2.0 and OpenID Connect standards</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>JWT token-based session management</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure credential storage using Keychain/KeyStore</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>GDPR compliance for EU users</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fallback to email/password login</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
                <h3 className="font-bold text-xl mb-4">Login Screen Mockup</h3>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-center">
                    <div className="text-white font-bold text-2xl mb-2">CIRCUS DAILY</div>
                    <p className="text-white text-sm opacity-90">Your Sports Media</p>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                    
                    <button className="w-full bg-white border-2 border-gray-300 rounded-lg p-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded"></div>
                      <span className="font-medium">Continue with Google</span>
                    </button>
                    
                    <button className="w-full bg-blue-600 text-white rounded-lg p-3 flex items-center justify-center space-x-3 hover:bg-blue-700 transition">
                      <div className="w-6 h-6 bg-white rounded"></div>
                      <span className="font-medium">Continue with Facebook</span>
                    </button>
                    
                    <button className="w-full bg-black text-white rounded-lg p-3 flex items-center justify-center space-x-3 hover:bg-gray-800 transition">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                      <span className="font-medium">Continue with Apple</span>
                    </button>
                    
                    <div className="flex items-center space-x-4 my-6">
                      <div className="flex-1 h-px bg-gray-300"></div>
                      <span className="text-gray-500 text-sm">OR</span>
                      <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    
                    <button className="w-full bg-gray-100 text-gray-700 rounded-lg p-3 font-medium hover:bg-gray-200 transition">
                      Sign in with Email
                    </button>
                    
                    <p className="text-center text-xs text-gray-500 mt-6">
                      By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Development Roadmap & Timeline</h2>
              
              <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl mb-3 text-green-800">Development Start: November 1st, 2025</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Development begins November 1st, 2025 following agreement signature. Our proven framework approach enables rapid delivery with accelerated timeline leveraging existing components and streamlined processes.
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="text-lg font-bold text-green-900">🚀 Target Go-Live: Q1 2026</p>
                  <p className="text-sm text-gray-600 mt-1">16-week development cycle from November 2025 start</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-blue-900">Phase 1: Foundation (Weeks 1-4)</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Project Setup & Configuration</p>
                          <p className="text-sm text-gray-600">Framework deployment, Git repository, CI/CD pipeline</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Circus Daily Branding Integration</p>
                          <p className="text-sm text-gray-600">Visual identity, colors, logos, typography</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Core Architecture Setup</p>
                          <p className="text-sm text-gray-600">Database configuration, API structure</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-orange-900">Phase 2: Core Development (Weeks 5-10)</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-orange-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Content Management System</p>
                          <p className="text-sm text-gray-600">Article display, categories, search functionality</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-orange-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Navigation & User Interface</p>
                          <p className="text-sm text-gray-600">Menu structure, screens, responsive design</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-orange-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Third-Party Integrations</p>
                          <p className="text-sm text-gray-600">CMS, analytics, advertising platforms</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-purple-900">Phase 3: Testing & Optimization (Weeks 11-14)</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Quality Assurance Testing</p>
                          <p className="text-sm text-gray-600">Functional testing, performance optimization</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Device Compatibility Testing</p>
                          <p className="text-sm text-gray-600">iOS and Android across multiple devices</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Bug Fixes & Performance Tuning</p>
                          <p className="text-sm text-gray-600">Issue resolution, speed optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 text-green-900">Phase 4: Deployment (Weeks 15-16)</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">App Store Submission</p>
                          <p className="text-sm text-gray-600">iOS App Store and Google Play Store</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Production Environment Setup</p>
                          <p className="text-sm text-gray-600">Server configuration, monitoring systems</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">Launch Preparation</p>
                          <p className="text-sm text-gray-600">Final checks, launch strategy, documentation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
                    <h3 className="font-bold text-xl mb-4 text-red-900">Fast Track Option</h3>
                    <p className="text-gray-700 mb-4">
                      For urgent market entry, we can accelerate development with additional resources:
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Accelerated Timeline:</span>
                        <span className="font-bold text-red-600">10-12 weeks</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Additional Cost:</span>
                        <span className="font-bold text-red-600">+15,000 euros</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Target Go-Live:</span>
                        <span className="font-bold text-red-600">Q4 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-lg mb-3 text-yellow-900">Key Milestones</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>• Contract Signature to Development Start</span>
                        <span className="font-medium">1 week</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• First Beta Version Available</span>
                        <span className="font-medium">6 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Feature-Complete Version</span>
                        <span className="font-medium">10 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• App Store Submission</span>
                        <span className="font-medium">14 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Public Launch Ready</span>
                        <span className="font-medium">16 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-800 text-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Why Q1 2026 Timeline is Achievable</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-blue-300">Proven Framework</h4>
                    <p className="text-sm text-gray-300">Building on battle-tested codebase reduces development risks and accelerates delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-green-300">Experienced Team</h4>
                    <p className="text-sm text-gray-300">Our developers have delivered similar projects and understand the requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-orange-300">Streamlined Process</h4>
                    <p className="text-sm text-gray-300">Optimized workflow with minimal bureaucracy and fast decision-making cycles.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2">Ready to Start?</h3>
                  <p className="text-lg opacity-90 mb-4">Let's discuss your requirements and finalize the agreement.</p>
                  <p className="text-sm opacity-75">Contact us to begin the Circus Daily mobile app development process.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}