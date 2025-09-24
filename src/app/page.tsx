"use client";

import React, { useState } from "react";
import { tabsConfig } from "../config/tabsConfig";

export default function FeedbackForm() {
	const [selectedMainTab, setSelectedMainTab] = useState<string | null>(null);

	const handleMainTabClick = (tabId: string) => {
		const selectedTab = tabsConfig.find(tab => tab.id === tabId);
		
		// If tab has a direct URL, open it directly
		if (selectedTab?.directUrl) {
			window.open(selectedTab.directUrl, "_blank");
		} else {
			setSelectedMainTab(tabId);
		}
	};

	const handleBackClick = () => {
		setSelectedMainTab(null);
	};

	const handleSubTabClick = (url: string) => {
		window.open(url, "_blank");
	};

	const selectedTabData = selectedMainTab ? tabsConfig.find((tab) => tab.id === selectedMainTab) : null;

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			{/* Header Section - Original Feedback Screen Design */}
			<div className="w-full bg-gradient-to-r from-amber-900 via-emerald-800 to-amber-900 py-6 px-4 sm:px-6 lg:px-8 shadow-2xl border-b-4 border-amber-600">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col sm:flex-row items-center justify-between">
						<div className="flex items-center space-x-6 mb-4 sm:mb-0">
							<img
								src="/assets/Eastern_Command_(India).png"
								alt="Eastern Command Logo"
								className="h-20 w-auto rounded-lg border-2 border-amber-400 shadow-lg"
							/>
							<div className="text-left">
								<h1 className="text-3xl md:text-4xl font-bold text-amber-100 mb-1 tracking-tight">Poorvi Yoddha OR Mess</h1>
								<h2 className="text-xl md:text-2xl text-amber-200 font-semibold">Information Portal</h2>
							</div>
						</div>
						<div className="text-center sm:text-right">
							<p className="text-lg md:text-3xl text-amber-100/90 max-w-md leading-relaxed font-bold">"As is the food, so is life"</p>
							<p className="text-lg md:text-3xl text-amber-100/90 max-w-md leading-relaxed font-bold">यथा अन्नं तथा जीवनम्</p>
							<div className="mt-2 flex items-center justify-center sm:justify-end space-x-3">
								<div className="h-0.5 w-12 bg-amber-300/40 rounded"></div>
								<div className="w-2 h-2 bg-amber-300/60 rounded-full"></div>
								<div className="h-0.5 w-12 bg-amber-300/40 rounded"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{!selectedMainTab ? (
					/* Main Tabs View - Vertical Large Tabs */
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-8">
							<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Select Category</h2>
							<div className="space-y-6">
								{tabsConfig.map((tab, index) => (
									<button
										key={tab.id}
										onClick={() => handleMainTabClick(tab.id)}
										className="w-full relative overflow-hidden rounded-2xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group text-left bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 hover:from-blue-200 hover:via-blue-300 hover:to-blue-400"
									>
										{/* Background Pattern */}
										<div className="absolute inset-0 opacity-10">
											<div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
											<div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
										</div>

										{/* Content */}
										<div className="relative z-10 flex items-center justify-between">
											<div className="text-left">
												<div className="flex items-center space-x-4 mb-3">
													{/* Icon based on tab type */}
													<div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
														{index === 0 ? (
															<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
																/>
															</svg>
														) : index === 1 ? (
															<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
																/>
															</svg>
														) : (
															<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 12M6 6l12 12"
																/>
															</svg>
														)}
													</div>
													<h3 className="text-2xl font-bold text-blue-700 mb-1 group-hover:text-blue-800 transition-colors">
														{tab.name}
													</h3>
												</div>
												<div className="mt-3 flex items-center space-x-2">
									<div className="h-1 w-8 bg-blue-500/40 rounded-full"></div>
									<div className="h-1 w-4 bg-blue-500/60 rounded-full"></div>
									<div className="h-1 w-2 bg-blue-500/80 rounded-full"></div>
								</div>
							</div>
							<div className="text-blue-600/60 group-hover:text-blue-600/80 group-hover:translate-x-2 transition-all duration-300">
											<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
											</svg>
										</div>
										</div>

										{/* Shine Effect */}
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
										</div>
									</button>
								))}
							</div>
						</div>
					</div>
				) : (
					/* Sub-tabs View */
					<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
						<div className="flex items-center mb-8">
							<button
								onClick={handleBackClick}
								className="mr-6 p-3 bg-blue-200/50 hover:bg-blue-300/60 rounded-xl transition-all duration-300 hover:scale-110 group backdrop-blur-sm border border-blue-300/30"
							>
								<svg className="w-6 h-6 text-blue-700 group-hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							<div>
								<h2 className="text-3xl font-bold text-blue-800 mb-2">{tabsConfig.find((tab) => tab.id === selectedMainTab)?.name}</h2>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{tabsConfig
								.find((tab) => tab.id === selectedMainTab)
								?.subTabs.map((subTab, index) => (
									<button
										key={subTab.id}
										onClick={() => handleSubTabClick(subTab.url)}
																								className="relative overflow-hidden rounded-2xl p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group text-left bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 hover:from-blue-200 hover:via-blue-300 hover:to-blue-400"
									>
										{/* Background Pattern */}
										<div className="absolute inset-0 opacity-10">
											<div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white transform translate-x-10 -translate-y-10"></div>
											<div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-8 translate-y-8"></div>
										</div>

										{/* Content */}
										<div className="relative z-10">
											<div className="flex items-start justify-between mb-4">
												<div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
													<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
														/>
													</svg>
												</div>
												<div className="text-blue-600/60 group-hover:text-blue-600/80 transition-colors">
													<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
														/>
													</svg>
												</div>
											</div>

											<h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-800 transition-colors leading-tight">
												{subTab.name}
											</h3>

											<div className="flex items-center space-x-2 mt-4">
												<div className="h-0.5 w-6 bg-blue-500/30 rounded-full"></div>
												<div className="h-0.5 w-3 bg-blue-500/50 rounded-full"></div>
												<div className="h-0.5 w-1.5 bg-blue-500/70 rounded-full"></div>
											</div>
										</div>

										{/* Shine Effect */}
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
										</div>
									</button>
								))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
