export interface SubTab {
	id: string;
	name: string;
	url: string;
}

export interface MainTab {
	id: string;
	name: string;
	subTabs: SubTab[];
	directUrl?: string;
}

export const tabsConfig: MainTab[] = [
	{
		id: "sop",
		name: "SOP",
		subTabs: [
			{
				id: "sop-general",
				name: "MULTI SPORTS COMPLEX (SOP)",
				url: "/data/SOP_MULTI_SPORTS_COMPLEX.PDF",
			},
			{
				id: "sop-security",
				name: "ADDL ACG (SOP)",
				url: "/data/SOP_ADDL_ACG.PDF",
			},
			{
				id: "sop-operations",
				name: "ARMY SKILL TRG CENTER (SOP)",
				url: "/data/SOP_ARMY_SKILL_TRG_CENTER.PDF",
			},
			{
				id: "sop-emergency",
				name: "MACT RULING (SOP)",
				url: "/data/MACT_SOP_RULING.PDF",
			},
		],
	},
	{
		id: "cyber-security",
		name: "Cyber Security Policy",
		subTabs: [
			{
				id: "cyber-guidelines",
				name: "LOSS IRREGULARITIES RULING",
				url: "/data/LOSS_IRREGULARITIES_RULING.PDF",
			},
			{
				id: "cyber-protocols",
				name: "REGIMENTAL FUND RULING",
				url: "/data/REGIMENTAL_FUND_RULING.pdf",
			},
			{
				id: "cyber-incident",
				name: "AUDIT OBJECTION RULLING",
				url: "/data/AUDIT_OBJECTION_RULLING.PDF",
			},
			{
				id: "cyber-training",
				name: "REVISED RISK AND HARDSHIP ALLCE",
				url: "/data/REVISED_RISK_AND_HARDSHIP_ALLCE.pdf",
			},
		],
	},
	{
		id: "banned-apps",
		name: "Banned Apps",
		subTabs: [],
		directUrl: "/data/321 BANNED APPS_053355_page-0001.jpg",
	},
];
