import { Header } from '@/components/Header1'
import { Hero } from '@/components/Hero1'
import { InfoLeft } from '@/components/InfoLeft1'
import { InfoRight } from '@/components/InfoRight1'
import { BuyProducts } from '@/components/BuyProducts1'
import { WhyUs } from '@/components/WhyUs1'
import { Footer } from '@/components/Footer1'

import type { SchemaProps } from '@/components/SchemaProps'

export interface DesignProps {
	schema: SchemaProps
  children: React.ReactNode
}

export function Design1({ schema, children }: DesignProps) {
  return (
    <>
      <Header 
        companyLogoLink={schema.header.companyLogoLink}
        ctaText={schema.header.ctaText} 
        ctaLink={schema.header.ctaLink}   
      />
      <Hero 
        title={schema.hero.title} 
        description={schema.hero.description} 
        ctaText={schema.hero.ctaText} 
        ctaLink={schema.hero.ctaLink} 
        ctaImageLink={schema.hero.ctaImageLink} 
        ctaImageAlt={schema.hero.title} 
        secondaryCtaText={schema.hero.secondaryCtaText} 
        secondaryCtaLink={schema.hero.secondaryCtaLink} 
      />
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-12 lg:space-y-20 lg:py-14 lg:px-6">
          {schema.infoLeft.title && <InfoLeft
            title={schema.infoLeft.title}
            description={schema.infoLeft.description}
            listItems={schema.infoLeft.listItems}
            ctaText={schema.infoLeft.ctaText} 
            ctaLink={schema.infoLeft.ctaLink} 
            ctaImageLink={schema.infoLeft.ctaImageLink} 
            ctaImageAlt={schema.infoLeft.ctaText}
            secondaryCtaText={schema.infoLeft.secondaryCtaText} 
            secondaryCtaLink={schema.infoLeft.secondaryCtaLink} 
            secondaryCtaImageLink={schema.infoLeft.secondaryCtaImageLink} 
            secondaryCtaImageAlt={schema.infoLeft.secondaryCtaText}
          />}
          {schema.infoRight.title && <InfoRight
            title={schema.infoRight.title}
            description={schema.infoRight.description}
            listItems={schema.infoRight.listItems}
            ctaText={schema.infoRight.ctaText} 
            ctaLink={schema.infoRight.ctaLink} 
            ctaImageLink={schema.infoRight.ctaImageLink} 
            ctaImageAlt={schema.infoRight.ctaText} 
            secondaryCtaText={schema.infoRight.secondaryCtaText} 
            secondaryCtaLink={schema.infoRight.secondaryCtaLink} 
            secondaryCtaImageLink={schema.infoRight.secondaryCtaImageLink} 
            secondaryCtaImageAlt={schema.infoRight.secondaryCtaText}
          />}
        </div>
      </section>
      <BuyProducts 
        title={schema.products.title}
        description={schema.products.description}
        products={schema.products.list}
      />
      {children}
      <WhyUs 
        title={schema.whyus.title}
        subtitle={schema.whyus.subtitle}
        list={schema.whyus.list}
      />
      <Footer />
	  </>
  )
}
