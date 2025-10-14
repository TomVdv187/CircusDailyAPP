import React, { useState } from 'react';
import { Camera, Users, TrendingUp, Calendar, MessageSquare, Share2, Heart, Menu, ChevronRight, Play, Clock } from 'lucide-react';

export default function CircusDailyEstimation() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8 rounded-xl shadow-2xl mb-8">
          <h1 className="text-4xl font-bold mb-2">Circus Daily Mobile App</h1>
          <p className="text-lg opacity-90">Complete Development Estimation & Analysis</p>
          <p className="text-sm mt-2 opacity-75">Based on Rossel Applications Sudinfo Model</p>
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
            onClick={() => setActiveTab('mockups')}
            className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'mockups' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Mockups
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

        {activeTab === 'mockups' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Circus Daily App Mockups</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
                <h3 className="font-bold text-xl mb-4 text-red-900">Home Screen</h3>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 flex items-center justify-between">
                    <Menu className="text-white" />
                    <div className="text-white font-bold text-xl">CIRCUS DAILY</div>
                    <Users className="text-white" />
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-gray-800 to-gray-600 h-48 rounded-lg flex items-center justify-center">
                        <Play className="text-white w-16 h-16" />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded">
                        <p className="font-bold text-sm">Breaking: Major Sports News</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">Football</span>
                      <span className="bg-gray-200 px-4 py-2 rounded-full text-sm whitespace-nowrap">Basketball</span>
                      <span className="bg-gray-200 px-4 py-2 rounded-full text-sm whitespace-nowrap">Tennis</span>
                      <span className="bg-gray-200 px-4 py-2 rounded-full text-sm whitespace-nowrap">Cycling</span>
                    </div>
                    
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex space-x-3 border-b pb-3">
                        <div className="w-24 h-24 bg-gray-300 rounded flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="font-bold text-sm mb-1">Sports Article Title Here</p>
                          <p className="text-xs text-gray-600 mb-2">Brief description of the sports news story...</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>2h ago</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200">
                <h3 className="font-bold text-xl mb-4 text-orange-900">Article View</h3>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 flex items-center justify-between">
                    <ChevronRight className="text-white rotate-180" />
                    <div className="text-white font-bold">Article</div>
                    <Share2 className="text-white" />
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-300 h-56 rounded-lg"></div>
                    
                    <div className="space-y-3">
                      <h2 className="font-bold text-xl">Championship Match Results</h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Oct 14, 2025
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Football</span>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed text-sm">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                      </p>
                      
                      <div className="flex space-x-4 pt-4 border-t">
                        <button className="flex items-center space-x-2 text-gray-600">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">245</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600">
                          <MessageSquare className="w-5 h-5" />
                          <span className="text-sm">18</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600">
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Design Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bold red and orange gradient header matching Circus Daily sports branding</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Category-based navigation with visual sport indicators</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Video content prominently featured for sports highlights</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Social engagement features for community interaction</span>
                </li>
              </ul>
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

              <div className="mt-8 bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="font-bold text-xl mb-4 text-red-900">Final Pricing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-700">Standard Development Cost:</span>
                    <span className="font-bold line-through text-gray-500">22,500 euros</span>
                  </div>
                  <div className="flex justify-between items-center text-2xl pt-3 border-t-2 border-red-200">
                    <span className="text-red-900 font-bold">Package Price:</span>
                    <span className="font-bold text-red-600">20,000 euros</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">Package discount: 2,500 euros savings (11% off) when bundled with base app</p>
                  <div className="mt-4 bg-white p-4 rounded border">
                    <p className="text-sm text-gray-700"><strong>Includes:</strong> Complete SSO implementation for Google, Facebook, and Apple across iOS and Android platforms, with user profile management and security compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}