"use client";

import React, { useEffect, useState } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	url: string;
	title?: string;
}

export default function Modal({ isOpen, onClose, url, title }: ModalProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	// Handle escape key press to close modal
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			// Prevent body scroll when modal is open
			document.body.style.overflow = "hidden";
			// Reset loading state when modal opens
			setIsLoading(true);
			setHasError(false);
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const isPDF = url.toLowerCase().includes(".pdf");
	const isImage = url.toLowerCase().match(/\.(jpg|jpeg|png|gif|svg|webp)$/);

	const handleIframeLoad = () => {
		setIsLoading(false);
	};

	const handleIframeError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	const openInNewTab = () => {
		window.open(url, '_blank');
		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div 
				className="absolute inset-0 bg-black/80 backdrop-blur-sm"
				onClick={onClose}
			/>
			
			{/* Modal Content */}
			<div className="relative w-full h-full max-w-full max-h-full bg-white shadow-2xl">
				{/* Header with close button */}
				<div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-amber-900 via-emerald-800 to-amber-900 px-6 py-4 flex items-center justify-between shadow-lg">
					<h2 className="text-xl font-bold text-amber-100 truncate">
						{title || "Document Viewer"}
					</h2>
					<div className="flex items-center space-x-2">
						<button
							onClick={openInNewTab}
							className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 group"
							aria-label="Open in new tab"
						>
							<svg 
								className="w-5 h-5 text-white group-hover:scale-110 transition-transform" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
								/>
							</svg>
						</button>
						<button
							onClick={onClose}
							className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 group"
							aria-label="Close modal"
						>
							<svg 
								className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M6 18L18 6M6 6l12 12" 
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Content Area */}
				<div className="pt-20 h-full relative">
					{hasError ? (
						<div className="w-full h-full flex items-center justify-center bg-gray-50">
							<div className="text-center p-8">
								<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to load document</h3>
								<p className="text-gray-600 mb-4">The document cannot be displayed in the modal.</p>
								<button
									onClick={openInNewTab}
									className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									Open in New Tab
								</button>
							</div>
						</div>
					) : isPDF ? (
						<div className="w-full h-full">
							<iframe
								src={`${url}#toolbar=1&navpanes=1&scrollbar=1`}
								className="w-full h-full border-0"
								title={title || "PDF Document"}
								onLoad={handleIframeLoad}
								onError={handleIframeError}
							/>
						</div>
					) : isImage ? (
						<div className="w-full h-full flex items-center justify-center bg-gray-100">
							<img
								src={url}
								alt={title || "Image"}
								className="max-w-full max-h-full object-contain"
								onLoad={handleIframeLoad}
								onError={handleIframeError}
							/>
						</div>
					) : (
						<div className="w-full h-full">
							<iframe
								src={url}
								className="w-full h-full border-0"
								title={title || "Document"}
								onLoad={handleIframeLoad}
								onError={handleIframeError}
							/>
						</div>
					)}

					{/* Loading indicator */}
					{isLoading && !hasError && (
						<div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm">
							<div className="text-center p-8">
								<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
								<p className="text-gray-600 mb-4">Loading document...</p>
								<p className="text-sm text-gray-500 mb-4">Taking too long?</p>
								<button
									onClick={openInNewTab}
									className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									Open in New Tab
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}