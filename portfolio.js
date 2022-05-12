import emoji from "react-easy-emoji";

export const greetings = {
	name: "Muktanshu Mishra",
	title: "Namaste,",
	intro:"I'm Muktanshu Mishra!!",
	description:"I am a hybrid Web/App Developer, who is into Web3,Defi and DAOs.I have been working as a Web Developer for around 1 year now.I have experience dealing with NextJs,ReactJs,React-Native and I am proficient in JavaScript and TypeScript,Web3Js and EtherJs and I am also thorough with my knowledge about smart contracts and blockchain.",
	resumeLink:
		"https://drive.google.com/file/d/1Msn_uNv0b6IszeLfCHcTNM69W6mUjZ5n/view?usp=sharing",
};

export const openSource = {
	githubUserName: "muktanshumishra24",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/yesits_muktanshumishra/",
	twitter: "https://twitter.com/MuktanshuM",
	github: "https://github.com/muktanshumishra24",
	linkedin: "https://www.linkedin.com/in/muktanshu-mishra-278a85181/",
};

export const skillsSection = {
	title: "What I do ?",
	subTitle:
		"Basically I try to do everything, but these are the ones I am good at.",
	data: [
		{
			title: "Full-Stack Development",
			lottieAnimationFile: "/lottie/skills/webdev.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"➔ Creating Full Stack Web Apps with ReactJs with either JavaScript or TypeScript"
				),
				emoji("➔ Building responsive static websites using Next.js  "),
				emoji(
					"➔ Knowledge of various styling frameworks (Bootstrap,Scss,Styled Components)"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Styled Components",
					fontAwesomeClassname: "simple-icons:styledcomponents",
				},
				{
					skillName: "Bootstrap",
					fontAwesomeClassname: "logos:bootstrap",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Web 3.0 & Blockchain Development",
			lottieAnimationFile: "/lottie/skills/blockchain.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"➔  Experience in dealing with the logic codes of dApps"
				),
				emoji(
					"➔  Skilled in handling data from APIs,Subgraphs or Contract ABIs"
				),
				emoji(
					"➔  Thorough with the concepts and major orgs in the Web3 + Blockchain Space"
				),
				emoji(
					"➔ Dealt with governance,Defi and Nft related dApps."
				),
			],
			softwareSkills: [
				{
					skillName: "EtherJs",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "GraphQl",
					fontAwesomeClassname: "vscode-icons:file-type-graphql",
				},
			],
		},
		{
			title: "App Development & Programming",
			lottieAnimationFile: "/lottie/skills/appdev.json", // Path of Lottie Animation JSON File
			softwareSkills: [
				{
					skillName: "React Native",
					fontAwesomeClassname: "tabler:brand-react-native",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "C Plus",
					fontAwesomeClassname: "bxl:c-plus-plus",
				},
				
				{
					skillName: "Github",
					fontAwesomeClassname: "bi:github",
				},
				{
					skillName: "SQl",
					fontAwesomeClassname: "logos:mysql",
				},
			],
			skills: [
				emoji("➔  Experience of coding on React Native"),
				emoji(
					"➔ Thorough knowledge of concepts of advanced Data Structures"
				),
				emoji(
					"➔ Regular in Coding Contests, Hackathons and Github"
				),
			],
			
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Web3/Blockchain",
		progressPercentage: "75",
	},
	{
		Stack: "Backend",
		progressPercentage: "65",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Delhi Technological University",
		subHeader: "Bachelor of Technology",
		duration: "November 2020 - Present",
		desc: "Mechanical Production and Industrial Engineering",
	},
];

export const experience = [
	{
		role: "SoftwareDev and BizDev Intern",
		company: "EPNS",
		companylogo: "/img/icons/common/iconWhiteName.webp",
		date: "Dec 2021 – Present",
		desc: "Working as both Developer and DevRel",
		descBullets: [
			"I am responsible for the development and relations of the collaborations",
			"Also works as a medium of information about the dev working on social platforms.(mainly Discord)",
			"Wrote some part of the Official documentation for the Developer Docs"
		],
	},
	{
		role: "WebDev and DevOps",
		company: "SelectricGo",
		companylogo: "/img/icons/common/icon.jpeg",
		date: "Aug 2021 - Present",
		desc: "Working as the Lead Dev for E-Commerce Implementation and also responsible for the DevOps",
		descBullets: [
			"I created the first draft for the portfolio website!!",
			"Leading the E-Commerce Implementation for the org.",
			"Handling some parts of the Development Operations."
		],
	}
];

export const opensource = [
	{
		role: "WebDev Contributor",
		company: "Hacktoberfest 2021",
		companylogo: "/img/icons/common/hack.svg",
		date: "October 2021",
		desc: "Raised 3 PRs for the WebDev Projects.Mainly MERN Based.",
	},
	{
		role: "FrontEnd Developer & UI Designer",
		company: "Project Fox",
		companylogo: "/img/icons/common/fox.png",
		date: "June 2021 - August 2021",
		desc: "",
		descBullets: [
			"A platform for Pixel Art Creation using React,TypeScript and Styled Components.",
			"Coded the landing Front End and UI."

		],

	}
];
export const projects = [
	{
		name: "comMishra (Chat App)",
		desc: "A communication web application(under dev), made using typescript and nextjs.Somewhat a UI mash of whatsapp.",
		github: "https://github.com/muktanshumishra24/comMishra-webApp",
	},
	{
		name: "Spotify Clone",
		desc: "Get hands-on experience in technical skills with Technota",
		link: "https://spotify-clone-muktanshu.web.app/",
		github: "https://github.com/muktanshumishra24/Spotify-Clone-Muktanshu",
	},
	{
		name: "SelectricGo (Webpage)",
		desc: "Official Webpage for an EV Startup idea(incubated by both DTU and Niti Ayog)",
		link: "https://selectricgo.in/",
		github: "https://github.com/muktanshumishra24/Selectric_Go_Official",
	},
	{
		name: "Personal Portfolio",
		desc: "My Personal portfolio using nextjs, covers all my tech information and other required stuff.",
		link: "https://www.muktanshu.me/",
	},
];
