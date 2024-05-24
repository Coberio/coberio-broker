export interface SchemaProps {
	lang: string
	route: string
	header: {
		companyName: string
		companyLogoLink: string
		ctaText: string
		ctaLink: string
		ctaLinkText: string
	}
	hero?: {
		title: string
		description: string[]
		ctaText: string
		ctaLink: string
		ctaLinkText: string
		ctaImageLink: string
		ctaVideoLink?: string
		ctaImageStyle?: {}
		secondaryCtaText: string
		secondaryCtaLink: string
		secondaryCtaLinkText: string
	}
	infoLeft?: {
		title: string
		description: string[]
		listItems: string[]
		ctaText: string
		ctaLink: string
		ctaLinkText: string
		ctaImageLink: string
		secondaryCtaText: string
		secondaryCtaLink: string
		secondaryCtaLinkText: string
		secondaryCtaImageLink: string
	}
	infoRight?: {
		title: string
		description: string[]
		listItems: string[]
		ctaText: string
		ctaLink: string
		ctaLinkText: string
		ctaImageLink: string
		secondaryCtaText: string
		secondaryCtaLink: string
		secondaryCtaLinkText: string
		secondaryCtaImageLink: string
	}
	products?: {
		title: string
		description: string[]
		list: {
			title: string
			subtitle: string
			pricePrefix: string
			price: string
			priceInterval: string
			coverages: string[]
			ctaText: string
			ctaLink: string
		}[]
	}
	faq?: {
		title: string
		questions: {
			title: string
			description: string[]
		}[]
			
	}
	whyus?: {
		title: string
		subtitle: string[]
		list: string[]
		footerTitle?: string
	}
}
