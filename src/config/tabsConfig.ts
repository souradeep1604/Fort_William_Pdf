export interface SubTab {
	id: string;
	name: string;
	url: string;
}

export interface MainTab {
	id: string;
	name: string;
	subTabs: SubTab[];
}

export const tabsConfig: MainTab[] = [
	{
		id: "sop",
		name: "SOP",
		subTabs: [
			{
				id: "sop-general",
				name: "General SOP",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "sop-security",
				name: "Security SOP",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "sop-operations",
				name: "Operations SOP",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "sop-emergency",
				name: "Emergency SOP",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
		],
	},
	{
		id: "cyber-security",
		name: "Cyber Security Policy",
		subTabs: [
			{
				id: "cyber-guidelines",
				name: "Security Guidelines",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "cyber-protocols",
				name: "Security Protocols",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "cyber-incident",
				name: "Incident Response",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "cyber-training",
				name: "Training Materials",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
			{
				id: "cyber-compliance",
				name: "Compliance Requirements",
				url: "https://s24.q4cdn.com/216390268/files/doc_downloads/test.pdf",
			},
		],
	},
	{
		id: "banned-apps",
		name: "Banned Apps",
		subTabs: [
			{
				id: "banned-list",
				name: "Banned Apps List",
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702",
			},
			{
				id: "banned-social",
				name: "Social Media Apps",
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702",
			},
			{
				id: "banned-gaming",
				name: "Gaming Apps",
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702",
			},
			{
				id: "banned-messaging",
				name: "Messaging Apps",
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702",
			},
			{
				id: "banned-alternatives",
				name: "Approved Alternatives",
				url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1175px-Test-Logo.svg.png?20150906031702",
			},
		],
	},
];
