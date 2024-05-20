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
  base: string
  children: React.ReactNode
}

const formatImage = (imgPath:string, base:string) => 
  imgPath.startsWith('http') ? imgPath : `${base}${imgPath}`

export function Design1({ schema, base, children }: DesignProps) {
  return (
    <>
      <Header 
        companyLogoLink={formatImage(schema.header.companyLogoLink, base)}
        ctaText={schema.header.ctaText} 
        ctaLink={schema.header.ctaLink}   
      />
      <Hero 
        title={schema.hero.title} 
        description={schema.hero.description} 
        ctaText={schema.hero.ctaText} 
        ctaLink={schema.hero.ctaLink} 
        ctaImageLink={formatImage(schema.hero.ctaImageLink, base)} 
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
            ctaImageLink={formatImage(schema.infoLeft.ctaImageLink, base)} 
            ctaImageAlt={schema.infoLeft.ctaText}
            secondaryCtaText={schema.infoLeft.secondaryCtaText} 
            secondaryCtaLink={schema.infoLeft.secondaryCtaLink} 
            secondaryCtaImageLink={formatImage(schema.infoLeft.secondaryCtaImageLink, base)} 
            secondaryCtaImageAlt={schema.infoLeft.secondaryCtaText}
          />}
          {schema.infoRight.title && <InfoRight
            title={schema.infoRight.title}
            description={schema.infoRight.description}
            listItems={schema.infoRight.listItems}
            ctaText={schema.infoRight.ctaText} 
            ctaLink={schema.infoRight.ctaLink} 
            ctaImageLink={formatImage(schema.infoRight.ctaImageLink, base)} 
            ctaImageAlt={schema.infoRight.ctaText} 
            secondaryCtaText={schema.infoRight.secondaryCtaText} 
            secondaryCtaLink={schema.infoRight.secondaryCtaLink} 
            secondaryCtaImageLink={formatImage(schema.infoRight.secondaryCtaImageLink, base)} 
            secondaryCtaImageAlt={schema.infoRight.secondaryCtaText}
          />}
        </div>
      </section>
      {!!schema.products && <BuyProducts 
        title={schema.products.title}
        description={schema.products.description}
        products={schema.products.list}
      />}
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
